// Psychoactive Substances Documentation - Opioids

import { Substance } from './types';

export const opioids: Substance[] = [
  {
    id: 'heroin',
    name: 'Heroin',
    commonNames: ['H', 'Dope', 'Smack', 'Junk', 'Horse', 'Brown'],
    category: 'opioids',
    class: 'Opioid',
    description: 'Heroin (diacetylmorphine) is an opioid drug derived from morphine, which comes from the opium poppy. It acts primarily on mu-opioid receptors, producing intense euphoria, pain relief, and sedation. Heroin is highly addictive and carries significant risks of overdose, particularly given its variable purity and presence of adulterants like fentanyl. The opioid epidemic has made heroin and other opioids a major public health crisis.',
    effects: {
      positive: ['Intense euphoria', 'Powerful pain relief', 'Deep relaxation', 'Relief from anxiety and stress', 'Warm sensation throughout body'],
      neutral: ['Sedation', 'Pupil constriction', 'Constipation', 'Itching', 'Nausea'],
      negative: ['Extreme addiction potential', 'Respiratory depression (overdose risk)', 'Risk of death from overdose', 'Severe withdrawal symptoms', 'Risk of infectious disease from injection', 'Social and financial destruction', 'Cognitive impairment with chronic use']
    },
    dosage: {
      threshold: '5-10mg',
      light: '10-20mg',
      common: '20-40mg',
      strong: '40-60mg',
      heavy: '60mg+'
    },
    duration: {
      onset: 'Seconds (IV), 5-10min (snorted)',
      comeup: '1-5 minutes',
      peak: '15-30 minutes',
      offset: '2-4 hours',
      total: '4-6 hours'
    },
    routeData: {
      Intravenous: {
        dosage: { threshold: '3-5mg', light: '5-10mg', common: '10-20mg', strong: '20-35mg', heavy: '35mg+' },
        duration: { onset: '5-15 seconds', comeup: '30-90 seconds', peak: '5-15 minutes', offset: '1-3 hours', total: '3-5 hours' },
        notes: 'Very rapid onset. Highest addiction potential. Extreme overdose risk. 100% bioavailability.'
      },
      Insufflation: {
        dosage: { threshold: '5-10mg', light: '10-20mg', common: '20-40mg', strong: '40-60mg', heavy: '60mg+' },
        duration: { onset: '5-10 minutes', comeup: '10-20 minutes', peak: '15-30 minutes', offset: '2-4 hours', total: '4-6 hours' },
        notes: 'Common recreational route. Still very high addiction potential. Bioavailability ~50%.'
      },
      Smoking: {
        dosage: { threshold: '5-10mg', light: '10-20mg', common: '20-40mg', strong: '40-60mg', heavy: '60mg+' },
        duration: { onset: '5-15 seconds', comeup: '30-90 seconds', peak: '10-20 minutes', offset: '1-2 hours', total: '2-4 hours' },
        notes: 'Very rapid onset. High addiction potential. \'Chasing the dragon.\''
      },
      Intramuscular: {
        dosage: { threshold: '3-6mg', light: '6-12mg', common: '12-24mg', strong: '24-36mg', heavy: '36mg' },
        duration: { onset: '5-15 minutes', comeup: '15-30 minutes', peak: '15-30 minutes', offset: '2-4 hours', total: '4-6 hours' },
        notes: 'Medical administration route. Slower onset than IV but sustained effect.'
      }
    },
    interactions: ['Benzodiazepines (extremely dangerous)', 'Alcohol (dangerous)', 'Other opioids', 'Stimulants', 'Antihistamines'],
    harmReduction: [
      'Never use alone - have someone who can call for help',
      'Always have naloxone (Narcan) available',
      'Test substances for fentanyl',
      'Never combine with benzodiazepines or alcohol',
      'Use sterile equipment',
      'Start with small amounts due to variable purity',
      'Consider medication-assisted treatment (methadone, buprenorphine)',
      'Seek help for addiction'
    ],
    legality: 'Illegal in all countries. Schedule I controlled substance with severe penalties for possession, distribution, and manufacture.',
    chemistry: {
      formula: 'C21H23NO5',
      molecularWeight: '369.41 g/mol',
      class: 'Semi-synthetic opioid'
    },
    history: 'Heroin was first synthesized in 1874 and was originally marketed as a non-addictive morphine substitute. It was used medicinally before its addictive properties were fully understood. It has been illegal for non-medical use in most countries since the early 20th century.',
    routes: ['Intravenous', 'Insufflation', 'Smoking', 'Intramuscular'],
    afterEffects: 'Severe withdrawal symptoms begin within 6-24 hours and peak at 2-3 days. Post-acute withdrawal can last months.',
    riskLevel: 'very-high',
    aliases: ['diacetylmorphine', 'diamorphine']
  },
  {
    id: 'fentanyl',
    name: 'Fentanyl',
    commonNames: ['Duragesic', 'Sublimaze', 'China White', 'Apache', 'Dance Fever'],
    category: 'opioids',
    class: 'Opioid Analgesic',
    description: 'Fentanyl is a potent synthetic opioid approximately 50-100 times more potent than morphine. It is used medically for anesthesia and severe pain management. Illicitly manufactured fentanyl has become a major cause of opioid overdose deaths. Fentanyl acts as a μ-opioid receptor agonist with rapid onset and short duration.',
    effects: {
      positive: ['Extremely potent pain relief', 'Intense euphoria', 'Strong sedation', 'Rapid onset'],
      neutral: ['Pupil constriction', 'Sedation', 'Constipation', 'Sweating'],
      negative: ['Severe respiratory depression', 'Very high overdose risk', 'High addiction potential', 'Nausea and vomiting', 'Chest wall rigidity (chest wall syndrome)']
    },
    dosage: {
      threshold: '25-50μg',
      light: '50-100μg',
      common: '100-250μg',
      strong: '250-500μg',
      heavy: '500μg+'
    },
    duration: {
      onset: '1-2 minutes (IV), 5-15 minutes (transdermal)',
      comeup: '5-15 minutes',
      peak: '15-30 minutes',
      offset: '30-60 minutes',
      total: '1-2 hours (IV), 72 hours (patch)'
    },
    routeData: {
      Transdermal: {
        dosage: { threshold: '12μg/hr', light: '12-25μg/hr', common: '25-50μg/hr', strong: '50-75μg/hr', heavy: '75μg/hr+' },
        duration: { onset: '6-12 hours', comeup: '12-24 hours', peak: '24-48 hours', offset: '12-24 hours', total: '72 hours' },
        notes: 'Patch for chronic pain. Slow onset. Sustained release over 72 hours.'
      },
      Intravenous: {
        dosage: { threshold: '15-25μg', light: '25-50μg', common: '50-100μg', strong: '100-200μg', heavy: '200μg+' },
        duration: { onset: '30-60 seconds', comeup: '1-3 minutes', peak: '5-15 minutes', offset: '30-60 minutes', total: '1-2 hours' },
        notes: 'Medical anesthesia. MICROGRAM dosing. Very high overdose risk.'
      },
      Intranasal: {
        dosage: { threshold: '25-50μg', light: '50-100μg', common: '100-200μg', strong: '200-300μg', heavy: '300μg+' },
        duration: { onset: '2-5 minutes', comeup: '5-15 minutes', peak: '15-30 minutes', offset: '30-90 minutes', total: '1-2 hours' },
        notes: 'Nasal spray. Rapid onset. High abuse potential in illicit form.'
      },
      Sublingual: {
        dosage: { threshold: '21.3-42.5μg', light: '42.5-85μg', common: '85-212.5μg', strong: '212.5-425μg', heavy: '425μg' },
        duration: { onset: '10-20 minutes', comeup: '20-40 minutes', peak: '15-30 minutes', offset: '30-60 minutes', total: '1-2 hours (IV), 72 hours (patch)' },
        notes: 'Faster onset than oral. Good bioavailability. Held under tongue.'
      },
      Buccal: {
        dosage: { threshold: '50-100μg', light: '100-200μg', common: '200-400μg', strong: '400-600μg', heavy: '600μg+' },
        duration: { onset: '5-15 minutes', comeup: '15-30 minutes', peak: '30-60 minutes', offset: '1-3 hours', total: '2-4 hours' },
        notes: 'Lozenges for breakthrough cancer pain. Very rapid onset for non-injectable route.'
      },
      Smoking: {
        dosage: { threshold: '12.5-25μg', light: '25-50μg', common: '50-125μg', strong: '125-250μg', heavy: '250μg' },
        duration: { onset: '5-15 seconds', comeup: '30-90 seconds', peak: '8-15 minutes', offset: '15-30 minutes', total: '1-2 hours' },
        notes: 'Very rapid onset. Shorter duration. Higher addiction potential.'
      }
    },
    interactions: ['All CNS depressants are dangerous', 'Benzodiazepines', 'Alcohol', 'Other opioids', 'MAOIs', 'CYP3A4 inhibitors'],
    harmReduction: [
      'EXTREMELY potent - micrograms can be fatal',
      'Always have multiple doses of naloxone available',
      'Test substances with fentanyl test strips',
      'Never use alone',
      'Start with tiny amounts if substance may contain fentanyl',
      'Do not handle powder - can absorb through skin',
      'Call emergency services immediately if overdose suspected'
    ],
    legality: 'Prescription only. Schedule II controlled substance in the US. Illicit manufacture and distribution carries severe penalties.',
    chemistry: {
      formula: 'C22H28N2O',
      molecularWeight: '336.47 g/mol',
      class: 'Synthetic opioid (piperidine derivative)'
    },
    history: 'Fentanyl was first synthesized in 1960 by Janssen Pharmaceuticals. It became widely used medically and later became a major public health concern when illicitly manufactured fentanyl began appearing in street drugs.',
    routes: ['Transdermal (patch)', 'Intravenous', 'Intranasal', 'Sublingual', 'Buccal', 'Smoking'],
    afterEffects: 'Short duration but intense. High risk of fatal overdose.',
    riskLevel: 'very-high',
    aliases: ['N-(1-phenethyl-4-piperidinyl)-N-phenylpropanamide']
  },
  {
    id: 'morphine',
    name: 'Morphine',
    commonNames: ['MS Contin', 'Kadian', 'Avinza', 'Roxanol'],
    category: 'opioids',
    class: 'Opioid Analgesic',
    description: 'Morphine is a potent opiate analgesic drug derived from the opium poppy plant. It acts directly on the central nervous system to relieve pain and is considered the gold standard for opioid analgesics. Morphine works primarily by binding to and activating the μ-opioid receptor in the brain, spinal cord, and gastrointestinal tract. It has a long history of medical use and remains one of the most effective pain medications available.',
    effects: {
      positive: ['Powerful pain relief', 'Euphoria and sense of well-being', 'Relaxation and calmness', 'Relief from anxiety', 'Cough suppression'],
      neutral: ['Sedation and drowsiness', 'Pupil constriction (miosis)', 'Constipation', 'Itching', 'Dry mouth'],
      negative: ['Respiratory depression', 'Nausea and vomiting', 'High addiction potential', 'Tolerance development', 'Overdose risk', 'Withdrawal symptoms']
    },
    dosage: {
      threshold: '5-10mg (oral)',
      light: '10-20mg (oral)',
      common: '20-50mg (oral)',
      strong: '50-100mg (oral)',
      heavy: '100mg+ (oral)'
    },
    duration: {
      onset: '20-40 minutes (oral)',
      comeup: '30-60 minutes',
      peak: '1-2 hours',
      offset: '2-4 hours',
      total: '4-6 hours'
    },
    routeData: {
      Oral: {
        dosage: { threshold: '5-10mg', light: '10-20mg', common: '20-50mg', strong: '50-100mg', heavy: '100mg+' },
        duration: { onset: '20-40 minutes', comeup: '30-60 minutes', peak: '1-2 hours', offset: '2-4 hours', total: '4-6 hours' },
        notes: 'First-pass metabolism reduces bioavailability (~30%). Used for moderate to severe pain.'
      },
      Intravenous: {
        dosage: { threshold: '2-5mg', light: '5-10mg', common: '10-20mg', strong: '20-40mg', heavy: '40mg+' },
        duration: { onset: '30-60 seconds', comeup: '1-5 minutes', peak: '5-15 minutes', offset: '1-3 hours', total: '3-5 hours' },
        notes: 'Medical use. Immediate onset. 100% bioavailability. Risk of histamine release.'
      },
      Intramuscular: {
        dosage: { threshold: '3-8mg', light: '8-15mg', common: '15-30mg', strong: '30-50mg', heavy: '50mg+' },
        duration: { onset: '5-15 minutes', comeup: '15-30 minutes', peak: '30-60 minutes', offset: '2-4 hours', total: '4-6 hours' },
        notes: 'Medical route. Slower onset than IV. Sustained effect.'
      },
      Rectal: {
        dosage: { threshold: '3.5-7mg', light: '7-14mg', common: '14-35mg', strong: '35-70mg', heavy: '70mg' },
        duration: { onset: '5-15 minutes', comeup: '15-30 minutes', peak: '1-2 hours', offset: '2-4 hours', total: '4-6 hours' },
        notes: 'Higher bioavailability than oral. Faster onset. Less first-pass metabolism.'
      },
      Epidural: {
        dosage: { threshold: '2.5-5mg', light: '5-10mg', common: '10-25mg', strong: '25-50mg', heavy: '50mg' },
        duration: { onset: '5-15 minutes', comeup: '15-30 minutes', peak: '1-2 hours', offset: '2-4 hours', total: '4-6 hours' },
        notes: 'Medical anesthesia. Regional pain relief.'
      }
    },
    interactions: ['Benzodiazepines (dangerous)', 'Alcohol (dangerous)', 'Other opioids', 'MAOIs', 'Anticholinergics', 'Muscle relaxants'],
    harmReduction: [
      'Never use alone - have naloxone available',
      'Start with the lowest effective dose',
      'Never mix with benzodiazepines or alcohol',
      'Be aware of tolerance changes after periods of abstinence',
      'Use sterile equipment if injecting',
      'Do not crush or dissolve extended-release formulations',
      'Seek help if experiencing breathing problems'
    ],
    legality: 'Prescription only. Schedule II controlled substance in the US. Strictly controlled internationally.',
    chemistry: {
      formula: 'C17H19NO3',
      molecularWeight: '285.34 g/mol',
      class: 'Phenanthrene opioid'
    },
    history: 'Morphine was first isolated from opium in 1804 by Friedrich Sertürner. It was named after Morpheus, the Greek god of dreams. It became widely used during the American Civil War and has been a cornerstone of pain management since.',
    routes: ['Oral', 'Intravenous', 'Intramuscular', 'Subcutaneous', 'Rectal', 'Epidural'],
    afterEffects: 'Sedation and constipation can persist. Withdrawal symptoms begin 6-12 hours after last dose and peak at 48-72 hours.',
    riskLevel: 'high',
    aliases: ['morphium', 'morpha', 'MSIR']
  }
];
