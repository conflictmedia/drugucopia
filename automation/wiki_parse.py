
import requests
import mwparserfromhell
import argparse
import re
import wiki_summarizer

def clean_wikitext(text):
    """Thoroughly clean stripped wikitext."""

    # --- Line-level markup ---
    # Colons (indentation / definition list)
    text = re.sub(r"(?m)^:+\s*", "", text)
    text = re.sub(r":{2,}", " ", text)
    # Semicolons (definition term)
    text = re.sub(r"(?m)^;+\s*", "", text)
    # Bullets → nice unicode bullet
    text = re.sub(r"(?m)^\*+\s*", "• ", text)
    # Numbered lists → plain text
    text = re.sub(r"(?m)^#+\s*", "", text)
    # Horizontal rules
    text = re.sub(r"(?m)^-{4,}", "---", text)

    # --- Inline artifacts ---
    # Bold/italic markup ('''bold''', ''italic'')
    text = re.sub(r"'{2,3}", "", text)
    # Leftover HTML entities
    text = text.replace("&nbsp;", " ")
    text = text.replace("&ndash;", "–")
    text = text.replace("&mdash;", "—")
    text = text.replace("&amp;", "&")
    # Leftover <ref> tags that strip_code might miss
    text = re.sub(r"<ref[^>]*>.*?</ref>", "", text, flags=re.DOTALL)
    text = re.sub(r"<ref[^/]*/?>", "", text)
    # Any remaining HTML tags
    text = re.sub(r"<[^>]+>", "", text)
    # __NOTOC__, __TOC__, etc.
    text = re.sub(r"__[A-Z]+__", "", text)

    # --- Whitespace cleanup ---
    # Trailing whitespace on lines
    text = re.sub(r"(?m)\s+$", "", text)
    # Multiple blank lines → max 2
    text = re.sub(r"\n{3,}", "\n\n", text)
    # Leading/trailing whitespace
    text = text.strip()

    return text

BASE = "https://psychonautwiki.org/w/api.php"

def get_wikitext(page_name):
    """Fetch raw wikitext for a page."""
    resp = requests.get(BASE, params={
        "action": "query",
        "titles": page_name,
        "prop": "revisions",
        "rvprop": "content",
        "rvslots": "main",
        "format": "json"
    })
    pages = resp.json()["query"]["pages"]
    for page_id, page_data in pages.items():
        if page_id == "-1":
            return None  # Page not found
        return page_data["revisions"][0]["slots"]["main"]["*"]

def get_sections(wikicode):
    """Get all sections with their headings and content."""
    sections = {}
    current_heading = "Introduction"
    current_content = []

    for node in wikicode.nodes:
        if isinstance(node, mwparserfromhell.nodes.Heading):
            # Save previous section
            sections[current_heading] = "".join(str(n) for n in current_content)
            current_heading = node.title.strip_code().strip()
            current_content = []
        else:
            current_content.append(node)

    # Don't forget the last section
    sections[current_heading] = "".join(str(n) for n in current_content)
    return sections


def get_sections_with_levels(wikicode):
    """Get sections with heading level info."""
    sections = []
    current = {
        "heading": "Introduction",
        "level": 0,
        "raw": "",
        "nodes": []
    }

    for node in wikicode.nodes:
        if isinstance(node, mwparserfromhell.nodes.Heading):
            # Finalize previous section
            current["raw"] = "".join(str(n) for n in current["nodes"])
            sections.append(current)
            current = {
                "heading": node.title.strip_code().strip(),
                "level": node.level,   # 2 = ==, 3 = ===, etc.
                "raw": "",
                "nodes": []
            }
        else:
            current["nodes"].append(node)

    current["raw"] = "".join(str(n) for n in current["nodes"])
    sections.append(current)
    return sections

def get_section_text(page, section="Introduction"):
    #Fetch and clean a section from a PsychonautWiki page. Returns cleaned text or None.
    raw = get_wikitext(page)
    if raw is None:
        return None

    wikicode = mwparserfromhell.parse(raw)
    sections = get_sections_with_levels(wikicode)

    for s in sections:
        if s["heading"] == section:
            parsed = mwparserfromhell.parse(s["raw"])

            for tag in parsed.filter_tags(recursive=True):
                if tag.tag.matches("ref"):
                    try:
                        parsed.remove(tag)
                    except ValueError:
                        pass

            for template in parsed.filter_templates(recursive=True):
                try:
                    parsed.replace(template, template.params[-1].value if template.params else "")
                except ValueError:
                    pass

            for wikilink in parsed.filter_wikilinks(recursive=True):
                if not wikilink.text:  # If there's no display text (e.g. [[Property::Value]])
                    title_str = str(wikilink.title)
                    if "::" in title_str:
                        # Extract the 'Value' part and assign it as the link's display text
                        # e.g. [[Psychoactive class::psychedelic]] -> "psychedelic"
                        wikilink.text = title_str.split("::", 1)[1].strip()

            stripped = parsed.strip_code()
            clean = clean_wikitext(stripped)

            summary = wiki_summarizer.extractive_summary(clean,ratio=0.30,diversity_factor=0.6)

            return summary

    return None  # section not found

def main():
    parser = argparse.ArgumentParser(description="Parse MediaWiki page sections")
    parser.add_argument("page", help="Page name to fetch from PsychonautWiki")
    parser.add_argument("section", nargs="?", default="Introduction",
                        help="Section heading to filter (default: Introduction)")
    args = parser.parse_args()

    result = get_section_text(args.page, args.section)
    if result is None:
        print(f"Page '{args.page}' not found or section not found.")
    else:
        print(result)
if __name__ == "__main__":
    main()
