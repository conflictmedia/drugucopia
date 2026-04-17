// TripSit Drug Class ↔ Drugucopia Substance ID Alias Map
// Maps between TripSit's class-level drug names and drugucopia's individual substance IDs.

/**
 * Maps each TripSit drug class to the set of drugucopia substance IDs that belong to it.
 * Used to look up TripSit combos when a user selects an individual substance.
 */
export const tripsitToDrugucopia: Record<string, string[]> = {
  '2c-t-x': [
    '2c-t', '2c-t-2', '2c-t-7', '2c-t-21',
  ],
  '2c-x': [
    '2c-b', '2c-c', '2c-d', '2c-e', '2c-i', '2c-p',
    '2c-b-fly',
  ],
  '5-meo-xxt': [
    '5-meo-dmt', '5-meo-mipt', '5-meo-dipt', '5-meo-dalt', '5-meo-dibf',
  ],
  'alcohol': ['alcohol'],
  'amphetamines': [
    'amphetamine', 'methamphetamine', 'dextroamphetamine',
    'lisdexamfetamine', 'dextropropoxyphene',
    'adderall', 'fenethylline',
    '4-fa', '4-fma', '4f-mph', '4f-eph',
    '2-fa', '2-fma', '2-aminoindane',
    '3-fa', '3-fpm', '3-fma',
    'ethylphenidate', 'methylphenidate', 'desoxypipradrol',
    'dichloropane', 'isopropylphenidate', 'methylnaphthidate',
    'propylhexedrine', 'cyclazodone', 'ephedrine', 'pentedrone',
    'hexedrone', 'n-ethylhexedrone', 'a-php', 'a-pvp',
    'nep', 'methcathinone', 'methiopropamine', 'prolintane',
    '2-fea', '3-fea', '3-mmc',
    'ethylone', 'mephedrone', 'methylone', 'butylone',
    'ephylone', 'mdpv',
  ],
  'amt': ['amt'],
  'benzodiazepines': [
    'alprazolam', 'diazepam', 'clonazepam', 'lorazepam',
    'clonazolam', 'etizolam', 'flubromazepam', 'flualprazolam',
    'flunitrazepam', 'flubromazolam', 'flunitrazolam',
    'midazolam', 'temazepam', 'bromazepam',
    'diclazepam', 'pyrazolam', 'nifoxipam',
    'deschloroetizolam', 'metizolam',
  ],
  'caffeine': ['caffeine', 'theacrine'],
  'cannabis': ['cannabis', 'cannabidiol'],
  'cocaine': ['cocaine'],
  'dextromethorphan': ['dextromethorphan'],
  'diphenhydramine': ['diphenhydramine'],
  'dmt': ['dmt', 'dpt', 'dipt', 'bufotenin'],
  'dox': ['dob', 'doc', 'dom', 'doi', 'met', 'det', 'ept'],
  'ghb/gbl': ['ghb', 'gbl'],
  'ketamine': [
    'ketamine', '2-fluorodeschloroketamine', 'deschloroketamine',
    'methoxetamine', '3-meo-pce', '3-meo-pcp', '3-ho-pce',
    '3-ho-pcp', '4-meo-pcp', 'diphenidine', 'ephenidine',
    'methoxphenidine', 'mxipr', 'hxe', 'o-pce', 'pce',
    'memantine', 'rolicyclidine',
  ],
  'lithium': ['lithium'],
  'lsd': [
    'lsd', '1p-lsd', '1v-lsd', '1b-lsd', '1cp-lsd',
    'ald-52', 'eth-lad', 'al-lad', 'lsz', 'lsm-775',
    'mipla', '1cp-mipla', '1cp-al-lad', '1p-eth-lad',
    'pro-lad', 'pargy-lad', 'k-2c-b',
  ],
  'maois': [
    'ayahuasca', 'lsa', 'harmala',
  ],
  'mdma': [
    'mdma', 'mda', 'mdea', '6-apb', '5-apb', '5-mapb',
    '6-apdb', 'mdai', 'pma', 'pmma',
  ],
  'mephedrone': ['mephedrone', '3-mmc', 'mexedrone'],
  'mescaline': [
    'mescaline', 'escaline', 'proscaline', 'allylescaline',
    'methallylescaline',
  ],
  'mushrooms': [
    'psilocybin-mushrooms', 'psilocin',
    '4-aco-dmt', '4-aco-met', '4-aco-mipt', '4-aco-dipt', '4-aco-det',
    '4-ho-met', '4-ho-mipt', '4-ho-dipt', '4-ho-dpt', '4-ho-ept', '4-ho-det',
  ],
  'mxe': ['methoxetamine'],
  'nbomes': [
    '25i-nbome', '25c-nbome', '25b-nbome', '25d-nbome', '25n-nbome',
    '25i-nboh', '25c-nboh',
  ],
  'nitrous': ['nitrous'],
  'opioids': [
    'heroin', 'morphine', 'codeine', 'fentanyl', 'oxycodone',
    'hydrocodone', 'hydromorphone', 'methadone', 'buprenorphine',
    'tramadol', 'tapentadol', 'pethidine', 'sufentanil',
    'dihydrocodeine', 'dextropropoxyphene', 'ethylmorphine',
    'desomorphine', 'o-desmethyltramadol', 'u-47700',
    'acetylfentanyl', 'kratom', '7-hydroxymitragynine',
    'tianeptine',
  ],
  'pcp': ['pcp', '3-meo-pcp', '4-meo-pcp'],
  'pregabalin': ['pregabalin', 'gabapentin', 'phenibut', 'f-phenibut', 'baclofen'],
  'ssris': ['ssri'],
  'tramadol': ['tramadol', 'tapentadol', 'o-desmethyltramadol'],
}

/**
 * Reverse map: drugucopia substance ID → TripSit classes it belongs to.
 * Built lazily on first access.
 */
let _reverseMap: Map<string, string[]> | null = null

export function getDrugucopiaToTripsit(): Map<string, string[]> {
  if (_reverseMap) return _reverseMap

  _reverseMap = new Map()
  for (const [tripsitClass, ids] of Object.entries(tripsitToDrugucopia)) {
    for (const id of ids) {
      const normalized = id.toLowerCase()
      if (!_reverseMap.has(normalized)) {
        _reverseMap.set(normalized, [])
      }
      _reverseMap.get(normalized)!.push(tripsitClass)
    }
  }
  return _reverseMap
}

/**
 * Given a drugucopia substance ID, return all TripSit classes it maps to.
 */
export function resolveTripsitClasses(substanceId: string): string[] {
  const map = getDrugucopiaToTripsit()
  const lower = substanceId.toLowerCase()

  // Direct match — return a COPY to prevent callers from mutating the cached array
  if (map.has(lower)) return [...map.get(lower)!]

  // Check if the ID itself IS a TripSit class name
  if (tripsitToDrugucopia[lower]) return [lower]

  // Try with hyphens → spaces (e.g. "psilocybin-mushrooms" → "psilocybin mushrooms")
  const spaced = lower.replace(/-/g, ' ')
  if (map.has(spaced)) return [...map.get(spaced)!]

  return []
}
