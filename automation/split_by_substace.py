#!/usr/bin/env python3
"""
Script to split substances into multiple files, one per substance.
"""

import re
import os
import json

INPUT_FILE = "substances.ts"
OUTPUT_DIR = "../src/lib/substances"


def sanitize_filename(name):
    sanitized = re.sub(r'[^\w\-]', '_', name)
    sanitized = sanitized.strip('_')
    return sanitized[:100] if len(sanitized) > 100 else sanitized


def sanitize_var_name(name):
    if not name:
        return "substance_unknown"

    sanitized = re.sub(r'[^a-zA-Z0-9_]', '_', name)
    sanitized = re.sub(r'_+', '_', sanitized)
    sanitized = sanitized.strip('_')

    if not sanitized:
        return "substance_unknown"

    if sanitized[0].isdigit():
        sanitized = '_' + sanitized

    return sanitized[:100] if len(sanitized) > 100 else sanitized


def parse_substances_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    array_start = content.find('export const substances')
    if array_start == -1:
        raise ValueError("Could not find substances array in file")

    bracket_start = content.find('[', array_start)
    bracket_end = content.rfind('];')

    if bracket_start == -1 or bracket_end == -1:
        raise ValueError("Could not locate array boundaries")

    array_content = content[bracket_start + 1:bracket_end]

    substances = []
    depth = 0
    current_obj = ""
    in_string = False
    escape_next = False

    for char in array_content:
        if escape_next:
            current_obj += char
            escape_next = False
            continue

        if char == '\\' and in_string:
            current_obj += char
            escape_next = True
            continue

        if char == '"' and not escape_next:
            in_string = not in_string
            current_obj += char
            continue

        if not in_string:
            if char == '{':
                if depth == 0:
                    current_obj = char
                else:
                    current_obj += char
                depth += 1
            elif char == '}':
                depth -= 1
                current_obj += char
                if depth == 0:
                    try:
                        obj = json.loads(current_obj)
                        substances.append(obj)
                    except json.JSONDecodeError as e:
                        print(f"Warning: Could not parse object: {e}")
                    current_obj = ""
            elif depth > 0:
                current_obj += char
        else:
            current_obj += char

    return substances


def filter_substances(substances):
    valid = []
    skipped = []

    for s in substances:
        # Skip if the key exists and is explicitly null/None
        if 'routeData' in s and s['routeData'] is None:
            skipped.append(s)
        else:
            valid.append(s)

    return valid, skipped


def generate_ts_file(substance, const_name):
    lines = []
    lines.append("// Auto-generated from substances.txt")
    lines.append("import type { Substance } from '../types';")
    lines.append("")
    lines.append("// Substance Data")
    lines.append(f"// Name: {substance.get('name', 'Unknown')}")
    lines.append(f"// ID: {substance.get('id', 'Unknown')}")
    if substance.get('categories'):
        lines.append(f"// Categories: {', '.join(substance['categories'])}")
    if substance.get('class'):
        lines.append(f"// Class: {substance['class']}")
    lines.append("")
    lines.append(f"export const {const_name}: Substance = ")

    json_str = json.dumps(substance, indent=2, ensure_ascii=False)
    lines.append(json_str + ";")

    return "\n".join(lines)


def generate_json_file(substance):
    return json.dumps(substance, indent=2, ensure_ascii=False)


def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    print(f"Reading input file: {INPUT_FILE}")

    print("Parsing substances...")
    substances = parse_substances_file(INPUT_FILE)
    print(f"Found {len(substances)} substances total")

    substances, skipped = filter_substances(substances)

    if skipped:
        print(f"\n⚠  Skipped {len(skipped)} substance(s) with null routeData:")
        for s in skipped:
            print(f"   - {s.get('name', 'Unknown')} (ID: {s.get('id', 'unknown')})")
        print()

    print(f"Processing {len(substances)} valid substances\n")

    used_filenames = set()

    for substance in substances:
        substance_id = substance.get('id', 'unknown')
        substance_name = substance.get('name', 'Unknown')

        base_filename = sanitize_filename(substance_id)
        const_name = sanitize_var_name(substance_id)

        filename = base_filename
        counter = 1
        while filename in used_filenames:
            filename = f"{base_filename}_{counter}"
            counter += 1
        used_filenames.add(filename)

        ts_filepath = os.path.join(OUTPUT_DIR, f"{filename}.ts")
        ts_content = generate_ts_file(substance, const_name)
        with open(ts_filepath, 'w', encoding='utf-8') as f:
            f.write(ts_content)


        print(f"Created: {filename}.ts (ID: {substance_id}, Name: {substance_name})")

    # Create index file
    index_path = os.path.join(OUTPUT_DIR, "_index.json")
    index_data = {
        "total": len(substances),
        "skipped": len(skipped),
        "skippedSubstances": [
            {"id": s.get('id'), "name": s.get('name'), "reason": "routeData is null"}
            for s in skipped
        ],
        "substances": [
            {
                "id": s.get('id'),
                "name": s.get('name'),
                "filename": sanitize_filename(s.get('id', 'unknown')),
                "constName": sanitize_var_name(s.get('id', 'unknown')),
                "categories": s.get('categories', []),
                "class": s.get('class')
            }
            for s in substances
        ]
    }

    with open(index_path, 'w', encoding='utf-8') as f:
        json.dump(index_data, f, indent=2, ensure_ascii=False)

    print(f"\nIndex saved to: {index_path}")

    # Create summary
    summary_path = os.path.join(OUTPUT_DIR, "_summary.txt")
    with open(summary_path, 'w', encoding='utf-8') as f:
        f.write("Substance Split Summary\n")
        f.write("=" * 50 + "\n\n")
        f.write(f"Source file: {INPUT_FILE}\n")
        f.write(f"Total substances (valid): {len(substances)}\n")
        f.write(f"Skipped (null routeData):  {len(skipped)}\n")
        f.write(f"Output directory: {OUTPUT_DIR}\n\n")
        f.write("Each substance has been saved:\n")
        f.write("  - .ts file: TypeScript format with imports\n")

        if skipped:
            f.write("Skipped Substances (null routeData):\n")
            for s in skipped:
                f.write(f"  ✗ {s.get('name', 'Unknown')} (ID: {s.get('id', 'unknown')})\n")
            f.write("\n")

        f.write("Included Substances:\n")
        for s in substances:
            f.write(f"  ✓ {s.get('name', 'Unknown')} (ID: {s.get('id', 'unknown')})\n")

    print(f"Summary saved to: {summary_path}")

    # Create barrel file
    print("\nGenerating barrel file (index.ts)...")
    generate_barrel_file(substances, OUTPUT_DIR)

    print("\nDone! Files saved to:", OUTPUT_DIR)


def generate_barrel_file(substances, output_dir):
    lines = []

    substance_exports = []
    for s in substances:
        substance_id = s.get('id', 'unknown')
        filename = sanitize_filename(substance_id)
        const_name = sanitize_var_name(substance_id)
        substance_exports.append({
            'id': substance_id,
            'name': s.get('name', 'Unknown'),
            'filename': filename,
            'const_name': const_name,
            'categories': s.get('categories', []),
            'class': s.get('class'),
            'riskLevel': s.get('riskLevel', 'moderate'),
            'interactions': s.get('interactions', [])
        })

    all_categories = set()
    for item in substance_exports:
        for cat in item['categories']:
            all_categories.add(cat)
    sorted_categories = sorted(all_categories)

    lines.append("// Psychoactive Substances Documentation - Auto-Generated Export File")
    lines.append("")

    lines.append("// Re-export types")
    lines.append("export type {")
    lines.append("  Substance,")
    lines.append("  SubstanceCategory,")
    lines.append("  CategoryInfo,")
    lines.append("  RouteDosageDuration")
    lines.append("} from '../types';")
    lines.append("")

    lines.append("// Re-export individual substances")
    lines.append("export {")
    for i, item in enumerate(substance_exports):
        comma = "," if i < len(substance_exports) - 1 else ""
        lines.append(f"  {item['const_name']}{comma}")
    lines.append("} from './substances';")
    lines.append("")

    lines.append("// Import for helper functions")
    lines.append("import { Substance, SubstanceCategory } from './types';")
    lines.append("import {")
    for i, item in enumerate(substance_exports):
        comma = "," if i < len(substance_exports) - 1 else ""
        lines.append(f"  {item['const_name']}{comma}")
    lines.append("} from './substances';")
    lines.append("")

    lines.append("// All substances combined into a single array")
    lines.append("export const substances: Substance[] = [")
    for i, item in enumerate(substance_exports):
        comma = "," if i < len(substance_exports) - 1 else ""
        lines.append(f"  {item['const_name']}{comma}")
    lines.append("];")
    lines.append("")

    lines.append("// Map for quick category lookup")
    lines.append("const substancesByCategory: Record<string, Substance[]> = {")
    for i, category in enumerate(sorted_categories):
        comma = "," if i < len(sorted_categories) - 1 else ""
        subs_in_cat = [item['const_name'] for item in substance_exports if category in item['categories']]
        lines.append(f"  '{category}': [")
        for j, const_name in enumerate(subs_in_cat):
            inner_comma = "," if j < len(subs_in_cat) - 1 else ""
            lines.append(f"    {const_name}{inner_comma}")
        lines.append(f"  ]{comma}")
    lines.append("};")
    lines.append("")

    lines.append("// Map for quick ID lookup")
    lines.append("const substancesById: Record<string, Substance> = {")
    for i, item in enumerate(substance_exports):
        comma = "," if i < len(substance_exports) - 1 else ""
        lines.append(f"  '{item['id']}': {item['const_name']}{comma}")
    lines.append("};")
    lines.append("")

    lines.append("/**")
    lines.append(" * Get a substance by its unique ID")
    lines.append(" */")
    lines.append("export function getSubstanceById(id: string): Substance | undefined {")
    lines.append("  return substancesById[id];")
    lines.append("}")
    lines.append("")

    lines.append("/**")
    lines.append(" * Get all substances in a specific category")
    lines.append(" */")
    lines.append("export function getSubstancesByCategory(category: string): Substance[] {")
    lines.append("  return substancesByCategory[category] || [];")
    lines.append("}")
    lines.append("")

    lines.append("/**")
    lines.append(" * Search substances by name, common names, aliases, or description")
    lines.append(" */")
    lines.append("export function searchSubstances(query: string): Substance[] {")
    lines.append("  const lowerQuery = query.toLowerCase().trim();")
    lines.append("  if (!lowerQuery) return [];")
    lines.append("  ")
    lines.append("  return substances.filter(s =>")
    lines.append("    s.name.toLowerCase().includes(lowerQuery) ||")
    lines.append("    s.commonNames.some(n => n.toLowerCase().includes(lowerQuery)) ||")
    lines.append("    s.aliases.some(a => a.toLowerCase().includes(lowerQuery)) ||")
    lines.append("    s.description.toLowerCase().includes(lowerQuery)")
    lines.append("  );")
    lines.append("}")
    lines.append("")

    lines.append("export function getAllSubstanceIds(): string[] {")
    lines.append("  return substances.map(s => s.id);")
    lines.append("}")
    lines.append("")

    lines.append("export function getAllSubstanceNames(): string[] {")
    lines.append("  return substances.map(s => s.name);")
    lines.append("}")
    lines.append("")

    lines.append("export function getSubstancesByRiskLevel(riskLevel: 'low' | 'moderate' | 'high' | 'very-high'): Substance[] {")
    lines.append("  return substances.filter(s => s.riskLevel === riskLevel);")
    lines.append("}")
    lines.append("")

    lines.append("export function getSubstancesByRoute(route: string): Substance[] {")
    lines.append("  return substances.filter(s => s.routes && s.routes.includes(route));")
    lines.append("}")
    lines.append("")

    lines.append("export function getSubstancesByInteraction(interaction: string): Substance[] {")
    lines.append("  const lowerInteraction = interaction.toLowerCase();")
    lines.append("  return substances.filter(s =>")
    lines.append("    s.interactions.some(i => i.toLowerCase().includes(lowerInteraction))")
    lines.append("  );")
    lines.append("}")
    lines.append("")

    lines.append("export function getSubstanceCount(): number {")
    lines.append("  return substances.length;")
    lines.append("}")
    lines.append("")

    lines.append("export function getSubstanceCountByCategory(): Record<string, number> {")
    lines.append("  const counts: Record<string, number> = {};")
    lines.append("  for (const category of Object.keys(substancesByCategory)) {")
    lines.append("    counts[category] = substancesByCategory[category].length;")
    lines.append("  }")
    lines.append("  return counts;")
    lines.append("}")
    lines.append("")

    lines.append("// Category constants for convenience")
    lines.append("export const CATEGORY_IDS = {")
    for i, category in enumerate(sorted_categories):
        comma = "," if i < len(sorted_categories) - 1 else ""
        const_name = category.upper()
        lines.append(f"  {const_name}: '{category}' as SubstanceCategory{comma}")
    lines.append("};")
    lines.append("")

    lines.append("// Risk level constants")
    lines.append("export const RISK_LEVELS = {")
    lines.append("  LOW: 'low' as const,")
    lines.append("  MODERATE: 'moderate' as const,")
    lines.append("  HIGH: 'high' as const,")
    lines.append("  VERY_HIGH: 'very-high' as const")
    lines.append("};")

    index_path = os.path.join(output_dir, "index.ts")
    with open(index_path, 'w', encoding='utf-8') as f:
        f.write("\n".join(lines))

    print(f"Barrel file created: {index_path}")

    substances_barrel_path = os.path.join(output_dir, "substances.ts")
    substances_lines = []
    substances_lines.append("// Auto-generated - Re-exports all individual substances")
    substances_lines.append("import type { Substance } from '../types';")
    substances_lines.append("")

    for item in substance_exports:
        substances_lines.append(f"export {{ {item['const_name']} }} from './{item['filename']}';")

    with open(substances_barrel_path, 'w', encoding='utf-8') as f:
        f.write("\n".join(substances_lines))

    print(f"Substances barrel file created: {substances_barrel_path}")


if __name__ == "__main__":
    main()
