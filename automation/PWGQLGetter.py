import requests
import json
import time
from collections import defaultdict

API_URLS = [
    "https://api.psychonautwiki.org"
]

def try_query(query):
    for url in API_URLS:
        try:
            print(f"Trying {url}...")
            resp = requests.post(url, json={"query": query}, timeout=15)
            if resp.status_code == 200:
                data = resp.json()
                if "data" in data and data["data"] is not None:
                    print(f"  ✓ Success with {url}")
                    return data
                else:
                    print(f"  ✗ Got response but no data: {data}")
            else:
                print(f"  ✗ Status {resp.status_code}: {resp.text[:200]}")
        except requests.exceptions.RequestException as e:
            print(f"  ✗ Request failed: {e}")
    return None



list_query = """
{
  substances(limit: 999) {
    name
    url
    class {
      psychoactive
      chemical
    }
  }
}
"""

print("=" * 50)
print("Fetching all substances...")
print("=" * 50)

result = try_query(list_query)

if result is None:
    print("\nERROR: Could not reach the API.")
    print("The API may be down. Try visiting https://api.psychonautwiki.org in your browser.")
    exit(1)

substances = result["data"].get("substances", [])

if not substances:
    print("\nWARNING: API returned empty substance list.")
    print("Raw response:")
    print(json.dumps(result, indent=2))
    exit(1)

print(f"\nTotal substances fetched: {len(substances)}")



all_psychoactive = set()
all_chemical = set()

for s in substances:
    classes = s.get("class")
    if classes:
        if classes.get("psychoactive"):
            all_psychoactive.update(classes["psychoactive"])
        if classes.get("chemical"):
            all_chemical.update(classes["chemical"])

print("\nAvailable PSYCHOACTIVE categories:")
for cat in sorted(all_psychoactive):
    print(f"  - {cat}")

print("\nAvailable CHEMICAL categories:")
for cat in sorted(all_chemical):
    print(f"  - {cat}")



def get_substances_by_category(substances, category, class_type="psychoactive"):
    results = []
    for substance in substances:
        classes = substance.get("class")
        if classes and classes.get(class_type):
            if category.lower() in [c.lower() for c in classes[class_type]]:
                results.append(substance)
    return results


TARGET_CATEGORIES = [
    "Psychedelic",
    "Stimulants",
    "Depressant",
    "Dissociatives",
    "Entactogen",
    "Cannabinoid",
    "Opioids",
    "Deliriant",
    "Nootropic",
]
CLASS_TYPE = "psychoactive"



def fetch_full_substance(name):
    safe_name = name.replace('"', '\\"')
    query = '''
    {
      substances(query: "%s") {
        name
        summary
        class { psychoactive chemical }
        addictionPotential
        commonNames
        toxicity
        crossTolerances
        roas {
          name
          dose {
            units threshold heavy
            light { min max }
            common { min max }
            strong { min max }
          }
          duration {
            onset { min max units }
            comeup { min max units }
            peak { min max units }
            offset { min max units }
            total { min max units }
            afterglow { min max units }
          }
        }
        dangerousInteractions { name }
        unsafeInteractions { name }
        uncertainInteractions { name }
        effects { name url }
      }
    }
    ''' % safe_name
    result = try_query(query)
    if result and result.get("data"):
        return result["data"].get("substances", [])
    return []



full_data = []
seen_names: set[str] = set()

for TARGET_CATEGORY in TARGET_CATEGORIES:
    filtered = get_substances_by_category(substances, TARGET_CATEGORY, CLASS_TYPE)
    new_names = [s["name"] for s in filtered if s["name"] not in seen_names]
    skipped = len(filtered) - len(new_names)

    print(f"\n=== {TARGET_CATEGORY}: {len(filtered)} total, {skipped} already fetched, {len(new_names)} new ===")
    for s in filtered:
        status = "(skip)" if s["name"] in seen_names else ""
        print(f"  - {s['name']} {status}")

    print(f"Fetching full details for {len(new_names)} substances...")
    for i, name in enumerate(new_names, 1):
        print(f"[{i}/{len(new_names)}] {name}")
        data = fetch_full_substance(name)
        if data:
            for substance in data:
                substance_name = substance.get("name", "")
                if substance_name in seen_names:
                    continue
                seen_names.add(substance_name)

                full_data.append(substance)
        else:
            print(f"  ⚠ No data returned for {name}")
        time.sleep(1)


uncategorized = [
    s for s in substances
    if s["name"] not in seen_names
    and (
        not s.get("class")
        or not s["class"].get("psychoactive")
    )
]

print(f"\n=== UNCATEGORIZED (null psychoactive class): {len(uncategorized)} substances ===")
for s in uncategorized:
    print(f"  - {s['name']}")

print(f"Fetching full details for {len(uncategorized)} uncategorized substances...")
for i, s in enumerate(uncategorized, 1):
    name = s["name"]
    print(f"[{i}/{len(uncategorized)}] {name}")
    data = fetch_full_substance(name)
    if data:
        for substance in data:
            substance_name = substance.get("name", "")
            if substance_name in seen_names:
                continue
            seen_names.add(substance_name)
            full_data.append(substance)
    else:
        print(f"  ⚠ No data returned for {name}")
    time.sleep(1)



output_file = "all_substances.json"
with open(output_file, "w") as f:
    json.dump(full_data, f, indent=2)

print(f"\nDone! Saved {len(full_data)} unique substances to {output_file}")
