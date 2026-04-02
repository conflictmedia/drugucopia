#!/usr/bin/env python3
"""
Convert psychedelic substance data from JSON format to TypeScript type definitions.
"""
import subprocess
import wiki_parse
import json
import re
import getandrankeffects

from typing import Any
def remove_decimal(val):
    if isinstance(val, float) and val == int(val):
        return str(int(val))
    return str(val)


def format_dosage_value(value: Any, units: str) -> str:
    if value is None:
        return "Unknown"


    if isinstance(value, (int, float)):
        return f"{remove_decimal(value)}{units}"

    if isinstance(value, dict):
        min_val = value.get("min")
        max_val = value.get("max")
        if min_val is not None and max_val is not None:
            return f"{remove_decimal(min_val)}-{remove_decimal(max_val)}{units}"
        elif min_val is not None:
            return f"{remove_decimal(min_val)}+{units}"
        elif max_val is not None:
            return f"<{remove_decimal(max_val)}{units}"

    return "Unknown"


def format_duration_value(duration_obj: dict | None) -> str:
    if duration_obj is None:
        return "Unknown"

    min_val = duration_obj.get("min")
    max_val = duration_obj.get("max")
    units = duration_obj.get("units", "")

    if min_val is not None and max_val is not None:
        return f"{remove_decimal(min_val)}-{remove_decimal(max_val)} {units}"
    elif min_val is not None:
        return f"{remove_decimal(min_val)}+ {units}"
    elif max_val is not None:
        return f"<{remove_decimal(max_val)} {units}"

    return "Unknown"


CATEGORY_MAPPING: dict[str, str] = {
    "psychedelic": "hallucinogens",
    "stimulants": "stimulants",
    "stimulant": "stimulants",
    "depressant": "depressants",
    "depressants": "depressants",
    "dissociative": "dissociatives",
    "dissociatives": "dissociatives",
    "empathogen": "empathogens",
    "empathogens": "empathogens",
    "entactogen": "empathogens",
    "cannabinoid": "cannabinoids",
    "cannabinoids": "cannabinoids",
    "opioid": "opioids",
    "opioids": "opioids",
    "deliriant": "deliriants",
    "deliriants": "deliriants",
    "nootropic": "nootropics",
    "nootropics": "nootropics",
}

FALLBACK_CATEGORY = "other"


def map_psychoactive_classes_to_categories(psychoactive_classes: list[str]) -> list[str]:
    if not psychoactive_classes:
        return [FALLBACK_CATEGORY]
    seen: set[str] = set()
    result: list[str] = []
    for p_class in psychoactive_classes:
        mapped = CATEGORY_MAPPING.get(p_class.lower())
        if mapped and mapped not in seen:
            seen.add(mapped)
            result.append(mapped)
    return result if result else [FALLBACK_CATEGORY]


def determine_risk_level(substance: dict) -> str:
    toxicity = substance.get("toxicity")

    if toxicity:
        toxicity_str = " ".join(toxicity).lower() if isinstance(toxicity, list) else str(toxicity).lower()
        if "fatal" in toxicity_str or "death" in toxicity_str:
            return "very-high"
        if "unknown" in toxicity_str and "extremely low" not in toxicity_str:
            return "moderate"
        if "extremely low" in toxicity_str or "low" in toxicity_str:
            return "low"

    addiction = substance.get("addictionPotential")
    if addiction and "addictive" in str(addiction).lower():
        if "high" in str(addiction).lower():
            return "high"
        return "moderate"

    return "moderate"


def create_route_data(roas: list[dict] | None) -> dict[str, dict] | None:
    if not roas:
        return None

    route_data = {}

    for roa in roas:
        route_name = roa.get("name", "unknown")
        dose = roa.get("dose", {})
        duration = roa.get("duration", {})

        if dose is None:
            dose = {}
        if duration is None:
            duration = {}

        units = dose.get("units", "mg")

        route_entry = {
            "dosage": {
                "threshold": format_dosage_value(dose.get("threshold"), units),
                "light": format_dosage_value(dose.get("light"), units),
                "common": format_dosage_value(dose.get("common"), units),
                "strong": format_dosage_value(dose.get("strong"), units),
                "heavy": format_dosage_value(dose.get("heavy"), units),
            },
            "duration": {
                "onset": format_duration_value(duration.get("onset")),
                "comeup": format_duration_value(duration.get("comeup")),
                "peak": format_duration_value(duration.get("peak")),
                "offset": format_duration_value(duration.get("offset")),
                "total": format_duration_value(duration.get("total")),
            }
        }

        # Add notes if there's an afterglow
        afterglow = duration.get("afterglow")
        if afterglow:
            route_entry["notes"] = f"Afterglow: {format_duration_value(afterglow)}"

        route_data[route_name] = route_entry

    return route_data if route_data else None


def generate_id(name: str) -> str:
    # Replace spaces and special characters with hyphens
    id_str = re.sub(r'[^a-zA-Z0-9]+', '-', name.lower())
    # Remove leading/trailing hyphens
    id_str = id_str.strip('-')
    return id_str


def extract_interactions(substance: dict) -> list[str]:
    interactions = []

    # Get cross tolerances
    # cross_tolerances = substance.get("crossTolerances")
    # if cross_tolerances:
    #     if isinstance(cross_tolerances, list):
    #         interactions.extend(cross_tolerances)

    # Get dangerous interactions names
    dangerous_interactions = substance.get("dangerousInteractions")
    if dangerous_interactions and isinstance(dangerous_interactions, list):
        for interaction in dangerous_interactions:
            if isinstance(interaction, dict) and interaction.get("name"):
                interactions.append(interaction["name"])
    unsafe_interactions = substance.get("unsafeInteractions")
    if unsafe_interactions and isinstance(unsafe_interactions, list):
        for interaction in unsafe_interactions:
            if isinstance(interaction, dict) and interaction.get("name"):
                interactions.append(interaction["name"])
    # uncertain_interactions = substance.get("uncertainInteractions")
    # if uncertain_interactions and isinstance(uncertain_interactions, list):
    #     for interaction in uncertain_interactions:
    #         if isinstance(interaction, dict) and interaction.get("name"):
    #             interactions.append(interaction["name"])

    return interactions


def convert_substance(substance: dict) -> dict:
    name = substance.get("name", "Unknown")

    class_info = substance.get("class", {})
    psychoactive_classes: list[str] = (class_info or {}).get("psychoactive") or []
    chemical_classes: list[str] = (class_info or {}).get("chemical") or []
    common_names = substance.get("commonNames", {}) or []

    aliases: list[str] = list(common_names) or []

    all_categories = map_psychoactive_classes_to_categories(psychoactive_classes)

    return {
        "id": generate_id(name),
        "name": name,
        #"commonNames": aliases[:3] if aliases else [],
        "commonNames": aliases if aliases else [],
        "categories": all_categories,
        "class": chemical_classes[0] if chemical_classes else "Unknown",
        "description": wiki_parse.get_section_text(name),
        "effects": {
            "positive": getandrankeffects.get_positive_effects(name),
            "neutral": getandrankeffects.get_neutral_effects(name),
            "negative": getandrankeffects.get_negative_effects(name)
        },

        "routeData": create_route_data(substance.get("roas")),

        "interactions": extract_interactions(substance),

        "harmReduction": substance.get("toxicity", []) if isinstance(substance.get("toxicity"), list) else [str(substance.get("toxicity"))] if substance.get("toxicity") else [],

        "legality": "Legal status varies by jurisdiction. Check local laws.",

        "chemistry": {
            "formula": "Unknown",
            "molecularWeight": "Unknown",
            "class": chemical_classes[0] if chemical_classes else "Unknown"
        },

        "history": wiki_parse.get_section_text(name, section="History and culture"),

        "afterEffects": "See route data for afterglow information.",

        "riskLevel": determine_risk_level(substance),

    }


def generate_typescript_file(substances: list[dict], output_path: str) -> None:


    # Convert all substances
    converted_substances = [convert_substance(s) for s in substances]

    # Format substances as TypeScript
    substances_json = json.dumps(converted_substances, indent=2, ensure_ascii=False)

    # Build substance map entries
    map_entries = []
    for s in converted_substances[:5]:
        substance_id = s["id"]
        map_entries.append(f'"{substance_id}": substances.find(s => s.id === "{substance_id}")!')

    type_definitions = """// Automagically created.
import type { Substance } from './types';

"""

    ts_content = type_definitions + f"""// Substance Data
export const substances: Substance[] = {substances_json};
"""

    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(ts_content)

def main():
    """Main entry point for the conversion script."""
    import argparse

    parser = argparse.ArgumentParser(
        description='Convert psychedelic substance JSON data to TypeScript format'
    )
    parser.add_argument(
        'input_file',
        help='Path to the input JSON file'
    )
    parser.add_argument(
        '-o', '--output',
        default='substances.ts',
        help='Output TypeScript file path (default: substances.ts)'
    )

    args = parser.parse_args()

    # Read input file
    print(f"Reading input file: {args.input_file}")
    with open(args.input_file, 'r', encoding='utf-8') as f:
        data = json.load(f)

    # Handle both array and object with substances key
    if isinstance(data, dict) and 'substances' in data:
        substances = data['substances']
    elif isinstance(data, list):
        substances = data
    else:
        print("Error: Input file must be a JSON array or object with 'substances' key")
        return 1

    print(f"Found {len(substances)} substances")

    # seen = set()
    # unique = []
    # for s in substances:
    #     if s["name"] not in seen:
    #         seen.add(s["name"])
    #         unique.append(s)
    # substances = unique
    # print(f"After deduplication: {len(substances)} substances")

    # Generate TypeScript file
    generate_typescript_file(substances, args.output)
    print(f"Successfully wrote TypeScript file: {args.output}")

    return 0


if __name__ == '__main__':
    exit(main())
