// Opioids Substances

import type { Substance } from '../types';

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
          dosage: {
              threshold: '3-5mg',
              light: '5-10mg',
              common: '10-20mg',
              strong: '20-35mg',
              heavy: '35mg+'
          },
          duration: {
              onset: '5-15 seconds',
              comeup: '30-90 seconds',
              peak: '5-15 minutes',
              offset: '1-3 hours',
              total: '3-5 hours'
          },
          notes: 'Very rapid onset. Highest addiction potential. Extreme overdose risk. 100% bioavailability.'
      },
      Insufflation: {
          dosage: {
              threshold: '5-10mg',
              light: '10-20mg',
              common: '20-40mg',
              strong: '40-60mg',
              heavy: '60mg+'
          },
          duration: {
              onset: '5-10 minutes',
              comeup: '10-20 minutes',
              peak: '15-30 minutes',
              offset: '2-4 hours',
              total: '4-6 hours'
          },
          notes: 'Common recreational route. Still very high addiction potential. Bioavailability ~50%.'
      },
      Smoking: {
          dosage: {
              threshold: '5-10mg',
              light: '10-20mg',
              common: '20-40mg',
              strong: '40-60mg',
              heavy: '60mg+'
          },
          duration: {
              onset: '5-15 seconds',
              comeup: '30-90 seconds',
              peak: '10-20 minutes',
              offset: '1-2 hours',
              total: '2-4 hours'
          },
          notes: 'Very rapid onset. High addiction potential. \'Chasing the dragon.\''
      },
      Intramuscular: {
          dosage: {
              threshold: '3-6mg',
              light: '6-12mg',
              common: '12-24mg',
              strong: '24-36mg',
              heavy: '36mg'
          },
          duration: {
              onset: '5-15 minutes',
              comeup: '15-30 minutes',
              peak: '15-30 minutes',
              offset: '2-4 hours',
              total: '4-6 hours'
          },
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
      id: 'kratom',
      name: 'Kratom',
      commonNames: ['Mitragyna speciosa', 'Kratom', 'Kray', 'Thang', 'Ketum'],
      category: 'opioids',
      class: 'Opioid-like',
      description: 'Kratom (Mitragyna speciosa) is a tropical tree native to Southeast Asia whose leaves contain psychoactive compounds, primarily mitragynine and 7-hydroxymitragynine. At low doses, kratom has stimulant effects; at higher doses, it has opioid-like effects. It acts on mu, delta, and kappa opioid receptors, though with a different profile than traditional opioids. Kratom has gained popularity as a natural pain reliever and for managing opioid withdrawal, though its safety profile and potential for dependence remain debated.',
      effects: {
        positive: ['Pain relief', 'Energy and focus (low doses)', 'Anxiety relief', 'Mood elevation', 'Opioid withdrawal relief', 'Relaxation (higher doses)'],
        neutral: ['Altered perception', 'Appetite suppression', 'Sweating', 'Itching'],
        negative: ['Nausea and vomiting', 'Constipation', 'Dependence with regular use', 'Withdrawal symptoms', 'Dizziness', 'Respiratory depression at very high doses', 'Potential liver toxicity']
      },
      dosage: {
        threshold: '1-2g',
        light: '2-4g',
        common: '4-8g',
        strong: '8-15g',
        heavy: '15g+'
      },
      duration: {
        onset: '10-20 minutes',
        comeup: '20-40 minutes',
        peak: '1-2 hours',
        offset: '2-4 hours',
        total: '4-6 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '1-2g',
              light: '2-4g',
              common: '4-8g',
              strong: '8-15g',
              heavy: '15g'
          },
          duration: {
              onset: '10-20 minutes',
              comeup: '20-40 minutes',
              peak: '1-2 hours',
              offset: '2-4 hours',
              total: '4-6 hours'
          },
          notes: 'Most common route for this substance.'
      }
  },
      interactions: ['Other opioids', 'Benzodiazepines', 'Alcohol', 'Antidepressants', 'Stimulants'],
      harmReduction: [
        'Start with low doses to assess sensitivity',
        'Avoid daily use to prevent dependence',
        'Take breaks to maintain effectiveness',
        'Do not combine with other depressants',
        'Be aware of strain differences (red, white, green)',
        'Stay hydrated',
        'Monitor for signs of dependence',
        'Do not drive while impaired'
      ],
      legality: 'Legal in most US states but regulated in some. Banned in several countries and some US states. FDA has issued warnings but no federal ban.',
      chemistry: {
        formula: 'C22H31NO6 (mitragynine)',
        molecularWeight: '398.49 g/mol',
        class: 'Indole alkaloid'
      },
      history: 'Kratom has been used traditionally in Southeast Asia for centuries as a stimulant for laborers and as a remedy for various ailments. It gained popularity in the West in the 2000s as a natural supplement and opioid alternative.',
      routes: ['Oral (powder, capsules, tea)', 'Chewing fresh leaves'],
      afterEffects: 'Mild afterglow possible. Withdrawal symptoms can occur with regular use.',
      riskLevel: 'moderate',
      aliases: ['mitragynine', 'Mitragyna speciosa']
    },

    // ==================== RESEARCH CHEMICALS ====================

    // Hallucinogenic Research Chemicals,
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
          dosage: {
              threshold: '5-10mg',
              light: '10-20mg',
              common: '20-50mg',
              strong: '50-100mg',
              heavy: '100mg+'
          },
          duration: {
              onset: '20-40 minutes',
              comeup: '30-60 minutes',
              peak: '1-2 hours',
              offset: '2-4 hours',
              total: '4-6 hours'
          },
          notes: 'First-pass metabolism reduces bioavailability (~30%). Used for moderate to severe pain.'
      },
      Intravenous: {
          dosage: {
              threshold: '2-5mg',
              light: '5-10mg',
              common: '10-20mg',
              strong: '20-40mg',
              heavy: '40mg+'
          },
          duration: {
              onset: '30-60 seconds',
              comeup: '1-5 minutes',
              peak: '5-15 minutes',
              offset: '1-3 hours',
              total: '3-5 hours'
          },
          notes: 'Medical use. Immediate onset. 100% bioavailability. Risk of histamine release.'
      },
      Intramuscular: {
          dosage: {
              threshold: '3-8mg',
              light: '8-15mg',
              common: '15-30mg',
              strong: '30-50mg',
              heavy: '50mg+'
          },
          duration: {
              onset: '5-15 minutes',
              comeup: '15-30 minutes',
              peak: '30-60 minutes',
              offset: '2-4 hours',
              total: '4-6 hours'
          },
          notes: 'Medical route. Slower onset than IV. Sustained effect.'
      },
      Rectal: {
          dosage: {
              threshold: '3.5-7mg',
              light: '7-14mg',
              common: '14-35mg',
              strong: '35-70mg',
              heavy: '70mg'
          },
          duration: {
              onset: '5-15 minutes',
              comeup: '15-30 minutes',
              peak: '1-2 hours',
              offset: '2-4 hours',
              total: '4-6 hours'
          },
          notes: 'Higher bioavailability than oral. Faster onset. Less first-pass metabolism.'
      },
      Epidural: {
          dosage: {
              threshold: '2.5-5mg',
              light: '5-10mg',
              common: '10-25mg',
              strong: '25-50mg',
              heavy: '50mg'
          },
          duration: {
              onset: '5-15 minutes',
              comeup: '15-30 minutes',
              peak: '1-2 hours',
              offset: '2-4 hours',
              total: '4-6 hours'
          },
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
    },
  {
      id: 'codeine',
      name: 'Codeine',
      commonNames: ['Tylenol #3', 'Promethazine with Codeine', 'Lean', 'Sizzurp', 'Purple Drank'],
      category: 'opioids',
      class: 'Opioid Analgesic',
      description: 'Codeine is a naturally occurring opiate and prodrug of morphine, found in the opium poppy. It is metabolized to morphine in the liver by the enzyme CYP2D6. Codeine is considered a weak opioid compared to morphine and is commonly prescribed for mild to moderate pain and as a cough suppressant. Approximately 10% of the population are poor metabolizers who get little effect from codeine.',
      effects: {
        positive: ['Mild pain relief', 'Cough suppression', 'Mild euphoria', 'Relaxation', 'Sleepiness'],
        neutral: ['Sedation', 'Pupil constriction', 'Constipation', 'Itching', 'Dry mouth'],
        negative: ['Nausea and vomiting', 'Respiratory depression at high doses', 'Addiction potential', 'Tolerance development', 'Withdrawal symptoms']
      },
      dosage: {
        threshold: '15-30mg',
        light: '30-60mg',
        common: '60-120mg',
        strong: '120-200mg',
        heavy: '200mg+'
      },
      duration: {
        onset: '20-40 minutes (oral)',
        comeup: '40-60 minutes',
        peak: '1-2 hours',
        offset: '2-4 hours',
        total: '4-6 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '15-30mg',
              light: '30-60mg',
              common: '60-120mg',
              strong: '120-200mg',
              heavy: '200mg+'
          },
          duration: {
              onset: '20-40 minutes',
              comeup: '40-60 minutes',
              peak: '1-2 hours',
              offset: '2-4 hours',
              total: '4-6 hours'
          },
          notes: 'Prodrug converted to morphine by CYP2D6. Poor metabolizers get little effect. Ultra-rapid metabolizers at overdose risk.'
      },
      Intramuscular: {
          dosage: {
              threshold: '9-18mg',
              light: '18-36mg',
              common: '36-72mg',
              strong: '72-120mg',
              heavy: '120mg'
          },
          duration: {
              onset: '5-15 minutes',
              comeup: '15-30 minutes',
              peak: '1-2 hours',
              offset: '2-4 hours',
              total: '4-6 hours'
          },
          notes: 'Medical administration route. Slower onset than IV but sustained effect.'
      },
      Rectal: {
          dosage: {
              threshold: '10.5-21mg',
              light: '21-42mg',
              common: '42-84mg',
              strong: '84-140mg',
              heavy: '140mg'
          },
          duration: {
              onset: '5-15 minutes',
              comeup: '15-30 minutes',
              peak: '1-2 hours',
              offset: '2-4 hours',
              total: '4-6 hours'
          },
          notes: 'Higher bioavailability than oral. Faster onset. Less first-pass metabolism.'
      }
  },
      interactions: ['Alcohol', 'Benzodiazepines', 'Other opioids', 'MAOIs', 'CYP2D6 inhibitors', 'CYP2D6 inducers'],
      harmReduction: [
        'Do not exceed recommended doses',
        'Avoid mixing with alcohol or other depressants',
        'Be aware of individual metabolism differences',
        'Do not use for long periods to avoid dependence',
        'Have naloxone available for overdose reversal',
        'Do not breastfeed while taking codeine'
      ],
      legality: 'Prescription only in most countries. Schedule II-V depending on formulation. Available over-the-counter in some countries in low doses.',
      chemistry: {
        formula: 'C18H21NO3',
        molecularWeight: '299.36 g/mol',
        class: 'Phenanthrene opioid'
      },
      history: 'Codeine was first isolated in 1832 by Pierre Robiquet. It has been used medically for over 150 years and remains one of the most commonly prescribed opioids worldwide.',
      routes: ['Oral', 'Intramuscular', 'Subcutaneous', 'Rectal'],
      afterEffects: 'Constipation and drowsiness. Withdrawal symptoms similar to other opioids but generally milder.',
      riskLevel: 'moderate',
      aliases: ['methylmorphine', '3-methylmorphine']
    },
  {
      id: 'oxycodone',
      name: 'Oxycodone',
      commonNames: ['OxyContin', 'Percocet', 'Roxicodone', 'Oxy', 'Hillbilly Heroin'],
      category: 'opioids',
      class: 'Opioid Analgesic',
      description: 'Oxycodone is a semi-synthetic opioid derived from thebaine, an alkaloid found in the opium poppy. It is a potent analgesic used for moderate to severe pain. Oxycodone acts on the central nervous system through μ-opioid receptor agonism and has become one of the most prescribed and abused opioids, playing a significant role in the opioid epidemic.',
      effects: {
        positive: ['Strong pain relief', 'Euphoria', 'Relaxation', 'Anxiety relief', 'Sense of well-being'],
        neutral: ['Sedation', 'Pupil constriction', 'Constipation', 'Itching', 'Dry mouth', 'Sweating'],
        negative: ['Respiratory depression', 'Nausea and vomiting', 'High addiction potential', 'Overdose risk', 'Withdrawal symptoms', 'Hormonal imbalances with chronic use']
      },
      dosage: {
        threshold: '5-10mg (oral)',
        light: '10-20mg (oral)',
        common: '20-40mg (oral)',
        strong: '40-80mg (oral)',
        heavy: '80mg+ (oral)'
      },
      duration: {
        onset: '10-30 minutes (oral)',
        comeup: '30-60 minutes',
        peak: '1-2 hours',
        offset: '2-4 hours',
        total: '4-6 hours (immediate release)'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '5-10mg',
              light: '10-20mg',
              common: '20-40mg',
              strong: '40-80mg',
              heavy: '80mg+'
          },
          duration: {
              onset: '10-30 minutes',
              comeup: '30-60 minutes',
              peak: '1-2 hours',
              offset: '2-4 hours',
              total: '4-6 hours'
          },
          notes: 'High oral bioavailability (~60-80%). Extended-release forms last 12 hours. Do not crush ER tablets.'
      },
      Intranasal: {
          dosage: {
              threshold: '5-10mg',
              light: '10-15mg',
              common: '15-30mg',
              strong: '30-50mg',
              heavy: '50mg+'
          },
          duration: {
              onset: '5-15 minutes',
              comeup: '15-30 minutes',
              peak: '30-60 minutes',
              offset: '2-3 hours',
              total: '3-5 hours'
          },
          notes: 'Crushed tablets. Higher abuse potential. Faster onset than oral.'
      },
      Intravenous: {
          dosage: {
              threshold: '2-5mg',
              light: '5-10mg',
              common: '10-20mg',
              strong: '20-35mg',
              heavy: '35mg+'
          },
          duration: {
              onset: '30-60 seconds',
              comeup: '1-5 minutes',
              peak: '5-15 minutes',
              offset: '1-3 hours',
              total: '3-5 hours'
          },
          notes: 'Very high overdose risk. Crushed ER tablets contain all dose at once. High addiction potential.'
      },
      Rectal: {
          dosage: {
              threshold: '3.5-7mg',
              light: '7-14mg',
              common: '14-28mg',
              strong: '28-56mg',
              heavy: '56mg'
          },
          duration: {
              onset: '5-15 minutes',
              comeup: '15-30 minutes',
              peak: '1-2 hours',
              offset: '2-4 hours',
              total: '4-6 hours (immediate release)'
          },
          notes: 'Higher bioavailability than oral. Faster onset. Less first-pass metabolism.'
      }
  },
      interactions: ['Alcohol (dangerous)', 'Benzodiazepines (dangerous)', 'Other opioids', 'MAOIs', 'Anticholinergics', 'CNS depressants'],
      harmReduction: [
        'Never use alone - have naloxone available',
        'Do not crush or snort extended-release tablets',
        'Start with low doses if opioid-naive',
        'Never mix with benzodiazepines or alcohol',
        'Be aware that tolerance decreases quickly with abstinence',
        'Do not share prescriptions with others',
        'Seek treatment if struggling with dependence'
      ],
      legality: 'Prescription only. Schedule II controlled substance in the US. Strictly controlled internationally.',
      chemistry: {
        formula: 'C18H21NO4',
        molecularWeight: '315.36 g/mol',
        class: 'Semi-synthetic opioid'
      },
      history: 'Oxycodone was first developed in 1916 in Germany. OxyContin, an extended-release formulation, was introduced in 1996 and became a major factor in the opioid crisis due to aggressive marketing and widespread diversion.',
      routes: ['Oral', 'Intranasal', 'Intravenous', 'Rectal'],
      afterEffects: 'Sedation and constipation. Withdrawal begins within 6-12 hours and can last a week or more.',
      riskLevel: 'high',
      aliases: ['dihydrohydroxycodeinone', 'oxicon']
    },
  {
      id: 'hydrocodone',
      name: 'Hydrocodone',
      commonNames: ['Vicodin', 'Norco', 'Lortab', 'Hydros', 'Vikes'],
      category: 'opioids',
      class: 'Opioid Analgesic',
      description: 'Hydrocodone is a semi-synthetic opioid derived from codeine. It is used to treat moderate to severe pain and is often combined with acetaminophen or ibuprofen. Hydrocodone is metabolized to hydromorphone and acts primarily on μ-opioid receptors. It was the most prescribed opioid in the United States for many years.',
      effects: {
        positive: ['Pain relief', 'Euphoria', 'Relaxation', 'Cough suppression', 'Anxiety reduction'],
        neutral: ['Sedation', 'Pupil constriction', 'Constipation', 'Itching', 'Dizziness'],
        negative: ['Respiratory depression', 'Nausea and vomiting', 'Addiction potential', 'Liver damage from acetaminophen combo', 'Overdose risk']
      },
      dosage: {
        threshold: '5-10mg',
        light: '10-15mg',
        common: '15-30mg',
        strong: '30-50mg',
        heavy: '50mg+'
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
          dosage: {
              threshold: '5-10mg',
              light: '10-15mg',
              common: '15-30mg',
              strong: '30-50mg',
              heavy: '50mg'
          },
          duration: {
              onset: '20-40 minutes (oral)',
              comeup: '30-60 minutes',
              peak: '1-2 hours',
              offset: '2-4 hours',
              total: '4-6 hours'
          },
          notes: 'Most common route for this substance.'
      }
  },
      interactions: ['Alcohol', 'Benzodiazepines', 'Other opioids', 'MAOIs', 'Acetaminophen overdose risk', 'CNS depressants'],
      harmReduction: [
        'Be aware of acetaminophen content in combination products',
        'Never exceed 4g acetaminophen per day',
        'Have naloxone available',
        'Avoid mixing with other depressants',
        'Do not crush extended-release formulations',
        'Seek help for dependence'
      ],
      legality: 'Prescription only. Schedule II controlled substance in the US.',
      chemistry: {
        formula: 'C18H21NO3',
        molecularWeight: '299.36 g/mol',
        class: 'Semi-synthetic opioid'
      },
      history: 'Hydrocodone was first synthesized in Germany in 1920. It became widely prescribed in the US and was the most prescribed medication in the country for several years.',
      routes: ['Oral'],
      afterEffects: 'Constipation, drowsiness. Withdrawal similar to other opioids.',
      riskLevel: 'high',
      aliases: ['dihydrocodeinone', 'hydrocon']
    },
  {
      id: 'hydromorphone',
      name: 'Hydromorphone',
      commonNames: ['Dilaudid', 'Exalgo', 'Palladone', 'Dilles', 'Dust'],
      category: 'opioids',
      class: 'Opioid Analgesic',
      description: 'Hydromorphone is a potent semi-synthetic opioid derived from morphine. It is approximately 5-7 times more potent than morphine and is used for moderate to severe pain. Hydromorphone acts as a μ-opioid receptor agonist and is known for its rapid onset and relatively short duration of action.',
      effects: {
        positive: ['Very potent pain relief', 'Intense euphoria', 'Strong relaxation', 'Rapid onset'],
        neutral: ['Sedation', 'Pupil constriction', 'Constipation', 'Itching', 'Sweating'],
        negative: ['Respiratory depression', 'High overdose risk', 'Severe addiction potential', 'Nausea and vomiting', 'Withdrawal symptoms']
      },
      dosage: {
        threshold: '1-2mg (oral)',
        light: '2-4mg (oral)',
        common: '4-8mg (oral)',
        strong: '8-16mg (oral)',
        heavy: '16mg+ (oral)'
      },
      duration: {
        onset: '15-30 minutes (oral)',
        comeup: '30-45 minutes',
        peak: '1-2 hours',
        offset: '2-3 hours',
        total: '3-4 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '1-2mg',
              light: '2-4mg',
              common: '4-8mg',
              strong: '8-16mg',
              heavy: '16mg'
          },
          duration: {
              onset: '15-30 minutes (oral)',
              comeup: '30-45 minutes',
              peak: '1-2 hours',
              offset: '2-3 hours',
              total: '3-4 hours'
          },
          notes: 'Most common route for this substance.'
      },
      Intravenous: {
          dosage: {
              threshold: '0.4-0.8mg',
              light: '0.8-1.6mg',
              common: '1.6-3.2mg',
              strong: '3.2-6.4mg',
              heavy: '6.4mg'
          },
          duration: {
              onset: '10-30 seconds',
              comeup: '1-5 minutes',
              peak: '1-2 hours',
              offset: '1-2 hours',
              total: '2-3 hours'
          },
          notes: 'Immediate onset. 100% bioavailability. Very high risk. Requires sterile technique.'
      },
      Intramuscular: {
          dosage: {
              threshold: '0.6-1.2mg',
              light: '1.2-2.4mg',
              common: '2.4-4.8mg',
              strong: '4.8-9.6mg',
              heavy: '9.6mg'
          },
          duration: {
              onset: '5-15 minutes',
              comeup: '15-30 minutes',
              peak: '1-2 hours',
              offset: '2-3 hours',
              total: '3-4 hours'
          },
          notes: 'Medical administration route. Slower onset than IV but sustained effect.'
      },
      Rectal: {
          dosage: {
              threshold: '0.7-1.4mg',
              light: '1.4-2.8mg',
              common: '2.8-5.6mg',
              strong: '5.6-11.2mg',
              heavy: '11.2mg'
          },
          duration: {
              onset: '5-15 minutes',
              comeup: '15-30 minutes',
              peak: '1-2 hours',
              offset: '2-3 hours',
              total: '3-4 hours'
          },
          notes: 'Higher bioavailability than oral. Faster onset. Less first-pass metabolism.'
      }
  },
      interactions: ['Alcohol', 'Benzodiazepines', 'Other opioids', 'MAOIs', 'CNS depressants'],
      harmReduction: [
        'Extremely potent - start with very low doses',
        'Always have naloxone available',
        'Never mix with other depressants',
        'High overdose risk - use extreme caution',
        'Be aware of potency differences from other opioids',
        'Use sterile equipment if injecting'
      ],
      legality: 'Prescription only. Schedule II controlled substance in the US.',
      chemistry: {
        formula: 'C17H19NO3',
        molecularWeight: '285.34 g/mol',
        class: 'Semi-synthetic opioid'
      },
      history: 'Hydromorphone was first synthesized in Germany in 1924. It has been used medically since the 1920s and remains an important analgesic for severe pain.',
      routes: ['Oral', 'Intravenous', 'Intramuscular', 'Subcutaneous', 'Rectal'],
      afterEffects: 'Rapid return to baseline but with high craving potential. Withdrawal can be intense.',
      riskLevel: 'very-high',
      aliases: ['dihydromorphinone']
    },
  {
      id: 'oxymorphone',
      name: 'Oxymorphone',
      commonNames: ['Opana', 'Numorphan', 'Omo', 'Blue Heaven'],
      category: 'opioids',
      class: 'Opioid Analgesic',
      description: 'Oxymorphone is a potent semi-synthetic opioid analgesic derived from thebaine. It is approximately 10 times more potent than morphine and is used for moderate to severe pain. Oxymorphone has poor oral bioavailability but is highly potent when administered parenterally.',
      effects: {
        positive: ['Extremely potent pain relief', 'Intense euphoria', 'Strong relaxation', 'Rapid onset'],
        neutral: ['Sedation', 'Pupil constriction', 'Constipation', 'Sweating'],
        negative: ['Severe respiratory depression', 'High overdose risk', 'Very high addiction potential', 'Nausea and vomiting', 'Dangerous withdrawal']
      },
      dosage: {
        threshold: '5-10mg (oral), 0.5-1mg (IV)',
        light: '10-20mg (oral)',
        common: '20-40mg (oral)',
        strong: '40-60mg (oral)',
        heavy: '60mg+ (oral)'
      },
      duration: {
        onset: '30-60 minutes (oral)',
        comeup: '45-90 minutes',
        peak: '1-2 hours',
        offset: '2-4 hours',
        total: '4-6 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '5-10mg (oral), 0.5-1mg (IV)',
              light: '10-20mg',
              common: '20-40mg',
              strong: '40-60mg',
              heavy: '60mg'
          },
          duration: {
              onset: '30-60 minutes (oral)',
              comeup: '45-90 minutes',
              peak: '1-2 hours',
              offset: '2-4 hours',
              total: '4-6 hours'
          },
          notes: 'Most common route for this substance.'
      },
      Intravenous: {
          dosage: {
              threshold: '5-10mg (oral), 0.5-1mg (IV)',
              light: '4-8mg',
              common: '8-16mg',
              strong: '16-24mg',
              heavy: '24mg'
          },
          duration: {
              onset: '10-30 seconds',
              comeup: '1-5 minutes',
              peak: '1-2 hours',
              offset: '1-2 hours',
              total: '2-3 hours'
          },
          notes: 'Immediate onset. 100% bioavailability. Very high risk. Requires sterile technique.'
      },
      Intramuscular: {
          dosage: {
              threshold: '5-10mg (oral), 0.5-1mg (IV)',
              light: '6-12mg',
              common: '12-24mg',
              strong: '24-36mg',
              heavy: '36mg'
          },
          duration: {
              onset: '5-15 minutes',
              comeup: '15-30 minutes',
              peak: '1-2 hours',
              offset: '2-4 hours',
              total: '4-6 hours'
          },
          notes: 'Medical administration route. Slower onset than IV but sustained effect.'
      },
      Rectal: {
          dosage: {
              threshold: '5-10mg (oral), 0.5-1mg (IV)',
              light: '7-14mg',
              common: '14-28mg',
              strong: '28-42mg',
              heavy: '42mg'
          },
          duration: {
              onset: '5-15 minutes',
              comeup: '15-30 minutes',
              peak: '1-2 hours',
              offset: '2-4 hours',
              total: '4-6 hours'
          },
          notes: 'Higher bioavailability than oral. Faster onset. Less first-pass metabolism.'
      }
  },
      interactions: ['Alcohol (dangerous - causes rapid release)', 'Benzodiazepines', 'Other opioids', 'MAOIs', 'CNS depressants'],
      harmReduction: [
        'Extremely potent - use extreme caution',
        'Never consume with alcohol - can cause dose dumping',
        'Always have naloxone available',
        'Do not crush extended-release tablets',
        'High overdose potential',
        'Seek immediate help if breathing problems occur'
      ],
      legality: 'Prescription only. Schedule II controlled substance in the US.',
      chemistry: {
        formula: 'C17H19NO4',
        molecularWeight: '301.33 g/mol',
        class: 'Semi-synthetic opioid'
      },
      history: 'Oxymorphone was developed in Germany in 1914. It has been used medically for decades but became more prominent with the opioid crisis.',
      routes: ['Oral', 'Intravenous', 'Intramuscular', 'Subcutaneous', 'Rectal'],
      afterEffects: 'Intense sedation. Withdrawal can be severe.',
      riskLevel: 'very-high',
      aliases: ['14-hydroxydihydromorphinone']
    },
  {
      id: 'methadone',
      name: 'Methadone',
      commonNames: ['Dolophine', 'Methadose', 'Diskets', 'Done', 'Fizzies'],
      category: 'opioids',
      class: 'Opioid Analgesic',
      description: 'Methadone is a synthetic opioid used for pain management and opioid dependence treatment. It has a long half-life (24-36 hours) making it suitable for maintenance therapy. Methadone acts as a μ-opioid receptor agonist and NMDA receptor antagonist, giving it unique properties among opioids.',
      effects: {
        positive: ['Long-lasting pain relief', 'Prevents opioid withdrawal', 'Blocks euphoria from other opioids at maintenance doses', 'Mood stabilization'],
        neutral: ['Sedation', 'Pupil constriction', 'Constipation', 'Sweating', 'QT interval prolongation'],
        negative: ['Respiratory depression', 'Cardiac arrhythmia risk', 'Addiction potential', 'Very long withdrawal', 'Overdose risk due to long half-life']
      },
      dosage: {
        threshold: '5-10mg',
        light: '10-20mg',
        common: '20-40mg',
        strong: '40-60mg',
        heavy: '60mg+'
      },
      duration: {
        onset: '30-60 minutes (oral)',
        comeup: '1-2 hours',
        peak: '2-4 hours',
        offset: '12-24 hours',
        total: '24-36 hours (analgesia), up to 48+ hours (withdrawal prevention)'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '5-10mg',
              light: '10-20mg',
              common: '20-40mg',
              strong: '40-60mg',
              heavy: '60mg+'
          },
          duration: {
              onset: '30-60 minutes',
              comeup: '1-2 hours',
              peak: '2-4 hours',
              offset: '12-24 hours',
              total: '24-36 hours'
          },
          notes: 'Primary route. Very long half-life. Accumulates with regular dosing. Used for maintenance and pain.'
      },
      Intravenous: {
          dosage: {
              threshold: '2-5mg',
              light: '5-10mg',
              common: '10-20mg',
              strong: '20-30mg',
              heavy: '30mg+'
          },
          duration: {
              onset: '30-60 seconds',
              comeup: '1-5 minutes',
              peak: '15-30 minutes',
              offset: '6-18 hours',
              total: '18-30 hours'
          },
          notes: 'Medical use only. Risk of QT prolongation. Long half-life complicates dosing.'
      },
      Intramuscular: {
          dosage: {
              threshold: '3-6mg',
              light: '6-12mg',
              common: '12-24mg',
              strong: '24-36mg',
              heavy: '36mg'
          },
          duration: {
              onset: '5-15 minutes',
              comeup: '15-30 minutes',
              peak: '2-4 hours',
              offset: '12-24 hours',
              total: '24-36 hours (analgesia), up to 48+ hours (withdrawal prevention)'
          },
          notes: 'Medical administration route. Slower onset than IV but sustained effect.'
      }
  },
      interactions: ['Many medications affect methadone levels', 'CYP450 inhibitors/inducers', 'Benzodiazepines (dangerous)', 'Alcohol', 'Other opioids', 'QT-prolonging medications'],
      harmReduction: [
        'Take only as prescribed - accumulation can cause delayed overdose',
        'Do not mix with benzodiazepines or alcohol',
        'Be aware that effects can last much longer than other opioids',
        'Have regular ECG monitoring for QT prolongation',
        'Never adjust dose without medical supervision',
        'Have naloxone available'
      ],
      legality: 'Prescription only. Schedule II controlled substance in the US. Highly regulated for opioid treatment programs.',
      chemistry: {
        formula: 'C21H27NO',
        molecularWeight: '309.44 g/mol',
        class: 'Synthetic opioid'
      },
      history: 'Methadone was developed in Germany in 1937 and was introduced to the US in 1947. It became widely used for opioid maintenance therapy starting in the 1960s.',
      routes: ['Oral', 'Intravenous', 'Intramuscular'],
      afterEffects: 'Long duration means effects persist. Withdrawal can last weeks and is often more prolonged than other opioids.',
      riskLevel: 'high',
      aliases: ['amidone', 'dolophine']
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
          dosage: {
              threshold: '12μg/hr',
              light: '12-25μg/hr',
              common: '25-50μg/hr',
              strong: '50-75μg/hr',
              heavy: '75μg/hr+'
          },
          duration: {
              onset: '6-12 hours',
              comeup: '12-24 hours',
              peak: '24-48 hours',
              offset: '12-24 hours',
              total: '72 hours'
          },
          notes: 'Patch for chronic pain. Slow onset. Sustained release over 72 hours.'
      },
      Intravenous: {
          dosage: {
              threshold: '15-25μg',
              light: '25-50μg',
              common: '50-100μg',
              strong: '100-200μg',
              heavy: '200μg+'
          },
          duration: {
              onset: '30-60 seconds',
              comeup: '1-3 minutes',
              peak: '5-15 minutes',
              offset: '30-60 minutes',
              total: '1-2 hours'
          },
          notes: 'Medical anesthesia. MICROGRAM dosing. Very high overdose risk.'
      },
      Intranasal: {
          dosage: {
              threshold: '25-50μg',
              light: '50-100μg',
              common: '100-200μg',
              strong: '200-300μg',
              heavy: '300μg+'
          },
          duration: {
              onset: '2-5 minutes',
              comeup: '5-15 minutes',
              peak: '15-30 minutes',
              offset: '30-90 minutes',
              total: '1-2 hours'
          },
          notes: 'Nasal spray. Rapid onset. High abuse potential in illicit form.'
      },
      Sublingual: {
          dosage: {
              threshold: '21.3-42.5μg',
              light: '42.5-85μg',
              common: '85-212.5μg',
              strong: '212.5-425μg',
              heavy: '425μg'
          },
          duration: {
              onset: '10-20 minutes',
              comeup: '20-40 minutes',
              peak: '15-30 minutes',
              offset: '30-60 minutes',
              total: '1-2 hours (IV), 72 hours (patch)'
          },
          notes: 'Faster onset than oral. Good bioavailability. Held under tongue.'
      },
      Buccal: {
          dosage: {
              threshold: '50-100μg',
              light: '100-200μg',
              common: '200-400μg',
              strong: '400-600μg',
              heavy: '600μg+'
          },
          duration: {
              onset: '5-15 minutes',
              comeup: '15-30 minutes',
              peak: '30-60 minutes',
              offset: '1-3 hours',
              total: '2-4 hours'
          },
          notes: 'Lozenges for breakthrough cancer pain. Very rapid onset for non-injectable route.'
      },
      Smoking: {
          dosage: {
              threshold: '12.5-25μg',
              light: '25-50μg',
              common: '50-125μg',
              strong: '125-250μg',
              heavy: '250μg'
          },
          duration: {
              onset: '5-15 seconds',
              comeup: '30-90 seconds',
              peak: '8-15 minutes',
              offset: '15-30 minutes',
              total: '1-2 hours'
          },
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
      id: 'carfentanil',
      name: 'Carfentanil',
      commonNames: ['Carfent', 'Drop Dead', 'Serial Killer'],
      category: 'opioids',
      class: 'Opioid Analgesic',
      description: 'Carfentanil is an extremely potent synthetic opioid, approximately 10,000 times more potent than morphine and 100 times more potent than fentanyl. It is used primarily as a large animal tranquilizer for elephants and other large mammals. Carfentanil has been found as an adulterant in illicit drugs and has caused numerous overdose deaths.',
      effects: {
        positive: ['Extremely potent analgesia (in veterinary use)'],
        neutral: ['Rapid onset', 'Potent sedation'],
        negative: ['EXTREME overdose risk', 'Respiratory depression', 'Fatal at microgram doses', 'Naloxone often requires multiple doses']
      },
      dosage: {
        threshold: '1-5μg',
        light: '5-10μg',
        common: 'Not applicable - too dangerous for human use',
        strong: 'Not applicable',
        heavy: 'Not applicable'
      },
      duration: {
        onset: 'Minutes',
        comeup: 'Very rapid',
        peak: 'Variable',
        offset: 'Hours',
        total: 'Variable'
      },
      interactions: ['All CNS depressants are extremely dangerous', 'Alcohol', 'Benzodiazepines', 'Other opioids'],
      harmReduction: [
        'EXTREMELY DANGEROUS - microgram doses can be fatal',
        'Avoid any substance that may contain carfentanil',
        'Multiple naloxone doses often required for overdose reversal',
        'Never use alone',
        'Test all substances',
        'Seek immediate medical attention for any suspected exposure',
        'Do not handle - can absorb through skin'
      ],
      legality: 'Schedule II controlled substance in the US. Not approved for human use. Strictly regulated.',
      chemistry: {
        formula: 'C24H30N2O3',
        molecularWeight: '394.51 g/mol',
        class: 'Synthetic opioid (piperidine derivative)'
      },
      history: 'Carfentanil was first synthesized in 1974 by Janssen Pharmaceuticals. It has been used to cut heroin and other drugs, leading to numerous overdose deaths.',
      routes: ['Not intended for human use'],
      afterEffects: 'Prolonged sedation. High fatality rate.',
      riskLevel: 'very-high',
      aliases: ['methyl 1-(2-phenylethyl)-4-(N-phenylpropanamido)piperidine-4-carboxylate']
    },
  {
      id: 'acetylfentanyl',
      name: 'Acetylfentanyl',
      commonNames: ['Acetyl', 'Acetylfent'],
      category: 'opioids',
      class: 'Opioid Analgesic',
      description: 'Acetylfentanyl is a synthetic opioid analgesic that is an analog of fentanyl. It is approximately 5-15 times more potent than heroin and has appeared as a novel psychoactive substance. Acetylfentanyl has been associated with numerous overdose deaths and is often sold as heroin or mixed with other opioids.',
      effects: {
        positive: ['Potent pain relief', 'Euphoria', 'Sedation'],
        neutral: ['Pupil constriction', 'Constipation', 'Sweating'],
        negative: ['High overdose risk', 'Respiratory depression', 'Addiction potential', 'Often mislabeled in illicit market']
      },
      dosage: {
        threshold: '10-25μg',
        light: '25-50μg',
        common: '50-150μg',
        strong: '150-300μg',
        heavy: '300μg+'
      },
      duration: {
        onset: 'Rapid',
        comeup: 'Minutes',
        peak: '30-60 minutes',
        offset: '1-2 hours',
        total: '2-4 hours'
      },
    routeData: {
      Intranasal: {
          dosage: {
              threshold: '7-17.5μg',
              light: '17.5-35μg',
              common: '35-105μg',
              strong: '105-210μg',
              heavy: '210μg'
          },
          duration: {
              onset: '5-15 minutes',
              comeup: '15-30 minutes',
              peak: '26-51 minutes',
              offset: '1-2 hours',
              total: '2-3 hours'
          },
          notes: 'Similar to insufflation. Nasal spray delivery.'
      },
      Intravenous: {
          dosage: {
              threshold: '4-10μg',
              light: '10-20μg',
              common: '20-60μg',
              strong: '60-120μg',
              heavy: '120μg'
          },
          duration: {
              onset: '10-30 seconds',
              comeup: '1-5 minutes',
              peak: '15-30 minutes',
              offset: '1-2 hours',
              total: '1-2 hours'
          },
          notes: 'Immediate onset. 100% bioavailability. Very high risk. Requires sterile technique.'
      },
      Smoking: {
          dosage: {
              threshold: '5-12.5μg',
              light: '12.5-25μg',
              common: '25-75μg',
              strong: '75-150μg',
              heavy: '150μg'
          },
          duration: {
              onset: '5-15 seconds',
              comeup: '30-90 seconds',
              peak: '15-30 minutes',
              offset: '1-2 hours',
              total: '1-2 hours'
          },
          notes: 'Very rapid onset. Shorter duration. Higher addiction potential.'
      }
  },
      interactions: ['All CNS depressants', 'Benzodiazepines', 'Alcohol', 'Other opioids'],
      harmReduction: [
        'Extremely potent - use extreme caution',
        'Always have naloxone available',
        'Never use alone',
        'Test substances when possible',
        'Start with very small amounts',
        'May require multiple naloxone doses for reversal'
      ],
      legality: 'Schedule I controlled substance in the US. Not approved for medical use.',
      chemistry: {
        formula: 'C23H30N2O2',
        molecularWeight: '366.50 g/mol',
        class: 'Synthetic opioid'
      },
      history: 'Acetylfentanyl was first synthesized in the 1960s but was not used medically. It emerged as a drug of abuse in 2013.',
      routes: ['Intranasal', 'Intravenous', 'Smoking'],
      afterEffects: 'Similar to fentanyl but shorter duration.',
      riskLevel: 'very-high',
      aliases: ['N-(1-phenethyl-4-piperidinyl)-N-phenylacetamide']
    },
  {
      id: 'buprenorphine',
      name: 'Buprenorphine',
      commonNames: ['Suboxone', 'Subutex', 'Bupe', 'Temgesic', 'Buprenex'],
      category: 'opioids',
      class: 'Opioid Analgesic',
      description: 'Buprenorphine is a semi-synthetic opioid derived from thebaine. It is a partial μ-opioid receptor agonist with high receptor affinity, meaning it can block the effects of other opioids. This property makes it useful for opioid maintenance therapy and pain management. It has a ceiling effect on respiratory depression, making it safer than full agonists.',
      effects: {
        positive: ['Pain relief', 'Prevents opioid withdrawal', 'Blocks effects of other opioids', 'Mood stabilization', 'Lower overdose risk than full agonists'],
        neutral: ['Pupil constriction', 'Constipation', 'Sedation', 'Sweating'],
        negative: ['Can precipitate withdrawal in opioid-dependent individuals', 'Addiction potential (lower than full agonists)', 'Headache', 'Nausea']
      },
      dosage: {
        threshold: '0.5-1mg',
        light: '1-2mg',
        common: '2-8mg (maintenance)',
        strong: '8-16mg',
        heavy: '16-32mg'
      },
      duration: {
        onset: '15-30 minutes (sublingual)',
        comeup: '30-60 minutes',
        peak: '1-2 hours',
        offset: '6-12 hours',
        total: '24-48 hours'
      },
    routeData: {
      Sublingual: {
          dosage: {
              threshold: '0.5-1mg',
              light: '1-2mg',
              common: '2-8mg',
              strong: '8-16mg',
              heavy: '16-32mg'
          },
          duration: {
              onset: '15-30 minutes',
              comeup: '30-60 minutes',
              peak: '1-2 hours',
              offset: '6-12 hours',
              total: '24-48 hours'
          },
          notes: 'Primary route for Suboxone/Subutex. Long duration due to high receptor affinity. Wait until in withdrawal to avoid precipitated withdrawal.'
      },
      Intravenous: {
          dosage: {
              threshold: '0.2-0.4mg',
              light: '0.4-0.8mg',
              common: '0.8-2mg',
              strong: '2-4mg',
              heavy: '4mg+'
          },
          duration: {
              onset: '30-60 seconds',
              comeup: '1-5 minutes',
              peak: '15-30 minutes',
              offset: '4-8 hours',
              total: '12-24 hours'
          },
          notes: 'Medical use. Suboxone contains naloxone - do not inject. Subutex can be injected but high risk.'
      },
      Transdermal: {
          dosage: {
              threshold: '5μg/hr',
              light: '5-10μg/hr',
              common: '10-20μg/hr',
              strong: '20μg/hr',
              heavy: '20μg/hr+'
          },
          duration: {
              onset: '12-24 hours',
              comeup: '24-48 hours',
              peak: '48-72 hours',
              offset: '24-48 hours',
              total: '7 days'
          },
          notes: 'Butrans patch. 7-day duration. Slow onset. Used for chronic pain.'
      },
      Intramuscular: {
          dosage: {
              threshold: '0.3-0.6mg',
              light: '0.6-1.2mg',
              common: '1.2-4.8mg',
              strong: '4.8-9.6mg',
              heavy: '9.6-19.2mg'
          },
          duration: {
              onset: '5-15 minutes',
              comeup: '15-30 minutes',
              peak: '1-2 hours',
              offset: '6-12 hours',
              total: '24-48 hours'
          },
          notes: 'Medical administration route. Slower onset than IV but sustained effect.'
      }
  },
      interactions: ['Other opioids (can block or cause withdrawal)', 'Benzodiazepines (still dangerous)', 'Alcohol', 'CYP3A4 inhibitors/inducers'],
      harmReduction: [
        'Wait until in moderate withdrawal before first dose to avoid precipitated withdrawal',
        'Can still overdose when combined with other depressants',
        'Do not inject Suboxone (contains naloxone)',
        'Have naloxone available',
        'Follow medical guidance for tapering',
        'Do not mix with benzodiazepines'
      ],
      legality: 'Prescription only. Schedule III controlled substance in the US. DATA-2000 waiver required to prescribe for opioid dependence.',
      chemistry: {
        formula: 'C29H41NO4',
        molecularWeight: '467.64 g/mol',
        class: 'Semi-synthetic opioid (thebaine derivative)'
      },
      history: 'Buprenorphine was first synthesized in 1969 and marketed as an analgesic. It was approved for opioid dependence treatment in the US in 2002.',
      routes: ['Sublingual', 'Intravenous (medical)', 'Transdermal (pain)', 'Implant'],
      afterEffects: 'Long duration of action. Milder withdrawal than full agonists.',
      riskLevel: 'moderate',
      aliases: ['21-cyclopropyl-7-[(1S)-1-hydroxy-1,2,2-trimethylpropyl]-6,14-endo-ethano-6,7,8,14-tetrahydrooripavine']
    },
  {
      id: 'tramadol',
      name: 'Tramadol',
      commonNames: ['Ultram', 'Tramal', 'Ultracet', 'Trammies', 'Trams'],
      category: 'opioids',
      class: 'Opioid Analgesic',
      description: 'Tramadol is a synthetic opioid analgesic that acts as a weak μ-opioid receptor agonist and also inhibits the reuptake of serotonin and norepinephrine. It is used for moderate pain and has a lower abuse potential than traditional opioids, though dependence and addiction still occur. Tramadol is metabolized to O-desmethyltramadol, which is significantly more potent.',
      effects: {
        positive: ['Pain relief', 'Mild euphoria', 'Energy boost', 'Mood elevation', 'Less respiratory depression than other opioids'],
        neutral: ['Sedation or stimulation depending on dose', 'Sweating', 'Pupil constriction'],
        negative: ['Seizure risk at high doses', 'Serotonin syndrome risk', 'Addiction potential', 'Nausea and vomiting', 'Withdrawal symptoms']
      },
      dosage: {
        threshold: '50-75mg',
        light: '75-150mg',
        common: '150-300mg',
        strong: '300-400mg',
        heavy: '400mg+ (high seizure risk)'
      },
      duration: {
        onset: '30-60 minutes (oral)',
        comeup: '45-90 minutes',
        peak: '2-3 hours',
        offset: '3-6 hours',
        total: '6-8 hours'
      },
      interactions: ['SSRIs/SNRIs (serotonin syndrome risk)', 'MAOIs', 'Tricyclic antidepressants', 'Benzodiazepines', 'Alcohol', 'Other opioids', 'Warfarin'],
      harmReduction: [
        'Do not exceed 400mg per day due to seizure risk',
        'Avoid if taking antidepressants',
        'Be aware of seizure risk at high doses',
        'Do not mix with other serotonergic drugs',
        'Have naloxone available',
        'Lower abuse potential than other opioids but still addictive'
      ],
      legality: 'Prescription only. Schedule IV controlled substance in the US.',
      chemistry: {
        formula: 'C16H25NO2',
        molecularWeight: '263.37 g/mol',
        class: 'Synthetic opioid (codone analog)'
      },
      history: 'Tramadol was developed in Germany in the 1970s and has been used medically since 1977. It became popular due to its perceived lower abuse potential.',
      routes: ['Oral', 'Intravenous', 'Intramuscular', 'Rectal'],
      afterEffects: 'Possible stimulation or sedation. Withdrawal includes both opioid and antidepressant-like symptoms.',
      riskLevel: 'moderate',
      aliases: ['(+/-)-cis-2-[(dimethylamino)methyl]-1-(3-methoxyphenyl)cyclohexanol']
    },
  {
      id: 'o-desmethyltramadol',
      name: 'O-Desmethyltramadol',
      commonNames: ['O-DSMT', 'Desmetramadol', 'OMPT'],
      category: 'opioids',
      class: 'Opioid Analgesic',
      description: 'O-Desmethyltramadol (O-DSMT) is the primary active metabolite of tramadol. It is a significantly more potent μ-opioid receptor agonist than tramadol itself, with approximately 200 times the affinity for μ-opioid receptors. O-DSMT has appeared as a research chemical and novel psychoactive substance.',
      effects: {
        positive: ['Potent pain relief', 'Euphoria', 'Relaxation'],
        neutral: ['Sedation', 'Pupil constriction', 'Sweating'],
        negative: ['Respiratory depression', 'Addiction potential', 'Nausea', 'Overdose risk', 'Seizure risk (lower than tramadol)']
      },
      dosage: {
        threshold: '25-50mg',
        light: '50-100mg',
        common: '100-200mg',
        strong: '200-300mg',
        heavy: '300mg+'
      },
      duration: {
        onset: '30-60 minutes (oral)',
        comeup: '45-90 minutes',
        peak: '2-3 hours',
        offset: '3-5 hours',
        total: '5-7 hours'
      },
      interactions: ['Other opioids', 'Benzodiazepines', 'Alcohol', 'CNS depressants'],
      harmReduction: [
        'More potent than tramadol - use with caution',
        'Have naloxone available',
        'Do not mix with other depressants',
        'Start with low doses',
        'Avoid if opioid-naive'
      ],
      legality: 'Unscheduled at US federal level. May be prosecuted under Federal Analogue Act as tramadol analog. Controlled in some jurisdictions. Not approved for medical use.',
      chemistry: {
        formula: 'C15H23NO2',
        molecularWeight: '249.35 g/mol',
        class: 'Synthetic opioid'
      },
      history: 'O-DSMT was identified as tramadol\'s active metabolite in the 1990s. It began appearing as a research chemical in the 2010s.',
      routes: ['Oral'],
      afterEffects: 'Similar to tramadol but without serotonergic effects.',
      riskLevel: 'moderate',
      aliases: ['desmetramadol', 'O-DSMT']
    },
  {
      id: 'tapentadol',
      name: 'Tapentadol',
      commonNames: ['Nucynta', 'Palexia', 'Taps'],
      category: 'opioids',
      class: 'Opioid Analgesic',
      description: 'Tapentadol is a synthetic opioid analgesic with dual mechanism of action: μ-opioid receptor agonism and norepinephrine reuptake inhibition. It is used for moderate to severe pain and has similar efficacy to oxycodone but with potentially improved gastrointestinal tolerability.',
      effects: {
        positive: ['Pain relief', 'Mood elevation', 'Less nausea than traditional opioids', 'Dual mechanism pain relief'],
        neutral: ['Sedation', 'Sweating', 'Pupil constriction'],
        negative: ['Addiction potential', 'Respiratory depression', 'Serotonin syndrome risk', 'Headache', 'Dizziness']
      },
      dosage: {
        threshold: '25-50mg',
        light: '50-100mg',
        common: '100-200mg',
        strong: '200-350mg',
        heavy: '350mg+'
      },
      duration: {
        onset: '30-60 minutes (oral)',
        comeup: '45-90 minutes',
        peak: '1-2 hours',
        offset: '2-4 hours',
        total: '4-6 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '25-50mg',
              light: '50-100mg',
              common: '100-200mg',
              strong: '200-350mg',
              heavy: '350mg'
          },
          duration: {
              onset: '30-60 minutes (oral)',
              comeup: '45-90 minutes',
              peak: '1-2 hours',
              offset: '2-4 hours',
              total: '4-6 hours'
          },
          notes: 'Most common route for this substance.'
      }
  },
      interactions: ['SSRIs/SNRIs', 'MAOIs', 'Other opioids', 'Benzodiazepines', 'Alcohol'],
      harmReduction: [
        'Have naloxone available',
        'Do not mix with antidepressants',
        'Be aware of dual mechanism - affects withdrawal profile',
        'Do not exceed prescribed doses',
        'Avoid combining with other depressants'
      ],
      legality: 'Prescription only. Schedule II controlled substance in the US.',
      chemistry: {
        formula: 'C14H23NO',
        molecularWeight: '221.34 g/mol',
        class: 'Synthetic opioid'
      },
      history: 'Tapentadol was developed by Grünenthal and approved in the US in 2008. It was designed to have improved tolerability over traditional opioids.',
      routes: ['Oral'],
      afterEffects: 'Similar to other opioids but with additional norepinephrine-related effects.',
      riskLevel: 'high',
      aliases: ['3-[(1R,2R)-2-(dimethylamino)-1-hydroxypropyl]phenol']
    },
  {
      id: 'desomorphine',
      name: 'Desomorphine',
      commonNames: ['Krokodil', 'Crocodil', 'Russian Magic', 'Zombie Drug'],
      category: 'opioids',
      class: 'Opioid Analgesic',
      description: 'Desomorphine is a synthetic opioid derived from morphine, approximately 8-10 times more potent than morphine with rapid onset. It gained notoriety as "Krokodil" when illicitly synthesized from codeine in Russia, often containing dangerous impurities that cause severe tissue damage, gangrene, and death. The name comes from the green, scaly appearance of skin at injection sites.',
      effects: {
        positive: ['Potent pain relief', 'Intense euphoria', 'Rapid onset'],
        neutral: ['Short duration requiring frequent redosing', 'Sedation'],
        negative: ['SEVERE tissue damage from impurities', 'Gangrene and limb loss', 'High addiction potential', 'Severe withdrawal', 'Organ damage', 'Death from infections or overdose']
      },
      dosage: {
        threshold: '1-2mg',
        light: '2-5mg',
        common: '5-10mg',
        strong: '10-20mg',
        heavy: '20mg+'
      },
      duration: {
        onset: 'Very rapid (IV)',
        comeup: 'Minutes',
        peak: '15-30 minutes',
        offset: '30-60 minutes',
        total: '1-2 hours'
      },
      interactions: ['All CNS depressants', 'Benzodiazepines', 'Alcohol', 'Other opioids'],
      harmReduction: [
        'EXTREMELY DANGEROUS - homemade versions contain toxic impurities',
        'Causes severe tissue necrosis and gangrene',
        'Seek immediate medical help if you have used',
        'Short duration leads to compulsive redosing',
        'High overdose risk',
        'Contaminants cause permanent damage',
        'Professional treatment is essential'
      ],
      legality: 'Schedule I controlled substance in the US. No accepted medical use in most countries.',
      chemistry: {
        formula: 'C17H21NO2',
        molecularWeight: '271.35 g/mol',
        class: 'Semi-synthetic opioid'
      },
      history: 'Desomorphine was first synthesized in 1932 in Switzerland. It was used briefly in Switzerland under the brand name Permonid. The illicit "Krokodil" phenomenon emerged in Russia around 2002.',
      routes: ['Intravenous (illicit production extremely dangerous)'],
      afterEffects: 'Severe tissue damage, infections, and extremely high addiction liability.',
      riskLevel: 'very-high',
      aliases: ['dihydrodesoxymorphine', 'Permonid']
    },
  {
      id: 'dihydrocodeine',
      name: 'Dihydrocodeine',
      commonNames: ['DF-118', 'DHC', 'Contugesic', 'Drocode'],
      category: 'opioids',
      class: 'Opioid Analgesic',
      description: 'Dihydrocodeine is a semi-synthetic opioid analgesic developed in Germany in 1908. It is used for moderate to severe pain and as a cough suppressant. Dihydrocodeine is approximately twice as potent as codeine and has a longer duration of action.',
      effects: {
        positive: ['Pain relief', 'Cough suppression', 'Mild euphoria', 'Relaxation'],
        neutral: ['Sedation', 'Pupil constriction', 'Constipation', 'Dizziness'],
        negative: ['Nausea and vomiting', 'Addiction potential', 'Respiratory depression at high doses', 'Withdrawal symptoms']
      },
      dosage: {
        threshold: '15-30mg',
        light: '30-60mg',
        common: '60-120mg',
        strong: '120-200mg',
        heavy: '200mg+'
      },
      duration: {
        onset: '30-45 minutes (oral)',
        comeup: '45-90 minutes',
        peak: '1.5-2 hours',
        offset: '3-5 hours',
        total: '4-6 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '15-30mg',
              light: '30-60mg',
              common: '60-120mg',
              strong: '120-200mg',
              heavy: '200mg'
          },
          duration: {
              onset: '30-45 minutes (oral)',
              comeup: '45-90 minutes',
              peak: '1.5-2 hours',
              offset: '3-5 hours',
              total: '4-6 hours'
          },
          notes: 'Most common route for this substance.'
      },
      Intramuscular: {
          dosage: {
              threshold: '9-18mg',
              light: '18-36mg',
              common: '36-72mg',
              strong: '72-120mg',
              heavy: '120mg'
          },
          duration: {
              onset: '5-15 minutes',
              comeup: '15-30 minutes',
              peak: '1.5-2 hours',
              offset: '3-5 hours',
              total: '4-6 hours'
          },
          notes: 'Medical administration route. Slower onset than IV but sustained effect.'
      },
      Rectal: {
          dosage: {
              threshold: '10.5-21mg',
              light: '21-42mg',
              common: '42-84mg',
              strong: '84-140mg',
              heavy: '140mg'
          },
          duration: {
              onset: '5-15 minutes',
              comeup: '15-30 minutes',
              peak: '1.5-2 hours',
              offset: '3-5 hours',
              total: '4-6 hours'
          },
          notes: 'Higher bioavailability than oral. Faster onset. Less first-pass metabolism.'
      }
  },
      interactions: ['Alcohol', 'Benzodiazepines', 'Other opioids', 'MAOIs', 'CNS depressants'],
      harmReduction: [
        'Do not exceed prescribed doses',
        'Avoid mixing with other depressants',
        'Have naloxone available',
        'Be aware of addiction potential',
        'Do not crush extended-release formulations'
      ],
      legality: 'Prescription only. Schedule II/V depending on formulation in the US.',
      chemistry: {
        formula: 'C18H23NO3',
        molecularWeight: '301.38 g/mol',
        class: 'Semi-synthetic opioid'
      },
      history: 'Dihydrocodeine was first synthesized in Germany in 1908. It has been used medically for over a century.',
      routes: ['Oral', 'Intramuscular', 'Subcutaneous', 'Rectal'],
      afterEffects: 'Similar to codeine but longer lasting.',
      riskLevel: 'moderate',
      aliases: ['DHC', 'drocode']
    },
  {
      id: 'tianeptine',
      name: 'Tianeptine',
      commonNames: ['Coaxil', 'Stablon', 'Tianaa', 'ZaZa', 'Gas Station Heroin'],
      category: 'opioids',
      class: 'Atypical Antidepressant/Opioid',
      description: 'Tianeptine is an atypical antidepressant with opioid receptor activity. At therapeutic doses it acts primarily as an antidepressant, but at higher doses it acts as a μ-opioid receptor agonist. It has gained notoriety in some regions as a drug of abuse, particularly in areas where it is sold over-the-counter or in gas stations.',
      effects: {
        positive: ['Antidepressant effects at therapeutic doses', 'Opioid-like euphoria at high doses', 'Anxiolytic effects', 'Pain relief'],
        neutral: ['Sedation', 'Changes in mood'],
        negative: ['High addiction potential at recreational doses', 'Withdrawal similar to opioids', 'Tolerance develops rapidly', 'Overdose risk', 'Seizures at high doses']
      },
      dosage: {
        threshold: '12.5-25mg',
        light: '25-50mg',
        common: '50-100mg (recreational)',
        strong: '100-200mg',
        heavy: '200mg+'
      },
      duration: {
        onset: '15-30 minutes (oral)',
        comeup: '30-60 minutes',
        peak: '1-2 hours',
        offset: '2-3 hours',
        total: '3-4 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '12.5-25mg',
              light: '25-50mg',
              common: '50-100mg',
              strong: '100-200mg',
              heavy: '200mg'
          },
          duration: {
              onset: '15-30 minutes (oral)',
              comeup: '30-60 minutes',
              peak: '1-2 hours',
              offset: '2-3 hours',
              total: '3-4 hours'
          },
          notes: 'Most common route for this substance.'
      },
      Insufflation: {
          dosage: {
              threshold: '8.8-17.5mg',
              light: '17.5-35mg',
              common: '35-70mg',
              strong: '70-140mg',
              heavy: '140mg'
          },
          duration: {
              onset: '5-15 minutes',
              comeup: '10-30 minutes',
              peak: '1-2 hours',
              offset: '2-3 hours',
              total: '2-3 hours'
          },
          notes: 'Faster onset than oral. Nasal irritation possible with repeated use.'
      },
      Intravenous: {
          dosage: {
              threshold: '5-10mg',
              light: '10-20mg',
              common: '20-40mg',
              strong: '40-80mg',
              heavy: '80mg'
          },
          duration: {
              onset: '10-30 seconds',
              comeup: '1-5 minutes',
              peak: '1-2 hours',
              offset: '1-2 hours',
              total: '2-3 hours'
          },
          notes: 'Immediate onset. 100% bioavailability. Very high risk. Requires sterile technique.'
      }
  },
      interactions: ['MAOIs', 'SSRIs', 'Benzodiazepines', 'Alcohol', 'Other opioids'],
      harmReduction: [
        'Avoid recreational use - rapid tolerance and dependence',
        'Withdrawal can be severe',
        'Do not combine with other opioids',
        'Be aware of dose escalation risk',
        'Have naloxone available',
        'Seek professional help for addiction'
      ],
      legality: 'Prescription only in some countries. Not FDA approved in the US. Scheduled in some states. Sold as supplement in some areas.',
      chemistry: {
        formula: 'C21H25ClN2O4S',
        molecularWeight: '436.96 g/mol',
        class: 'Tricyclic antidepressant derivative'
      },
      history: 'Tianeptine was developed in France and has been used as an antidepressant since the 1980s. Abuse potential became recognized in the 2000s.',
      routes: ['Oral', 'Insufflation', 'Intravenous (dangerous)'],
      afterEffects: 'Withdrawal symptoms similar to opioids. Rapid tolerance development.',
      riskLevel: 'high',
      aliases: ['Tianaa', 'ZaZa Red']
    },

    // ============================================
    // DEPRESSANTS - Gabapentinoids & Others
    // ============================================
];
