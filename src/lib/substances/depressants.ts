// Depressants Substances

import type { Substance } from '../types';

export const depressants: Substance[] = [
  {
      id: 'alcohol',
      name: 'Alcohol',
      commonNames: ['Ethanol', 'Booze', 'Liquor', 'Spirits', 'Beer', 'Wine'],
      category: 'depressants',
      class: 'Depressant',
      description: 'Alcohol (ethanol) is one of the oldest and most widely used psychoactive substances in human history. It acts as a central nervous system depressant, enhancing the effects of the inhibitory neurotransmitter GABA while inhibiting the excitatory neurotransmitter NMDA. This produces the characteristic effects of relaxation, disinhibition, and impaired coordination. While socially accepted in many cultures, alcohol is responsible for significant harm globally, including addiction, liver disease, cardiovascular problems, and increased risk of accidents and violence.',
      effects: {
        positive: ['Relaxation and stress relief', 'Social disinhibition', 'Mild euphoria at low doses', 'Enhanced sociability', 'Increased confidence'],
        neutral: ['Impaired coordination and balance', 'Slurred speech', 'Slowed reaction times', 'Impaired judgment', 'Vasodilation (flushing)'],
        negative: ['Nausea and vomiting', 'Hangover (headache, dehydration)', 'Impaired memory ("blackouts")', 'Poor decision making', 'Addiction and dependence', 'Liver damage with chronic use', 'Increased risk of accidents', 'Violence and aggression', 'Alcohol poisoning risk']
      },
      dosage: {
        threshold: '1-2 drinks',
        light: '2-3 drinks',
        common: '3-5 drinks',
        strong: '5-8 drinks',
        heavy: '8+ drinks'
      },
      duration: {
        onset: '10-20 minutes',
        comeup: '20-40 minutes',
        peak: '45-90 minutes',
        offset: '2-3 hours',
        total: '3-6 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '1-2 drinks',
              light: '2-3 drinks',
              common: '3-5 drinks',
              strong: '5-8 drinks',
              heavy: '8+ drinks'
          },
          duration: {
              onset: '10-20 minutes',
              comeup: '20-40 minutes',
              peak: '45-90 minutes',
              offset: '2-3 hours',
              total: '3-6 hours'
          },
          notes: 'Only practical route. Food slows absorption. Carbonation speeds absorption. One drink = 14g ethanol.'
      }
  },
      interactions: ['Benzodiazepines (dangerous)', 'Opioids (dangerous)', 'Other depressants', 'Antidepressants', 'Antibiotics', 'Antihistamines', 'Cannabis'],
      harmReduction: [
        'Know your limits and drink slowly',
        'Alternate alcoholic drinks with water',
        'Never drink and drive',
        'Eat before and while drinking',
        'Avoid drinking games and rapid consumption',
        'Do not mix with other depressants',
        'Be aware of alcohol content in drinks',
        'Seek help if you cannot control your drinking'
      ],
      legality: 'Legal for adults in most countries with various restrictions on sale, public consumption, and driving. Age limits vary by jurisdiction.',
      chemistry: {
        formula: 'C2H5OH',
        molecularWeight: '46.07 g/mol',
        class: 'Alcohol'
      },
      history: 'Alcohol has been produced and consumed for thousands of years, with evidence of fermented beverages dating back to 7000 BCE. It has played significant roles in religious ceremonies, medicine, and social life throughout human history.',
      routes: ['Oral'],
      afterEffects: 'Hangover lasting several hours to a day. Chronic use leads to physical dependence with potentially dangerous withdrawal.',
      riskLevel: 'moderate',
      aliases: ['ethanol', 'ethyl alcohol', 'spirits']
    },

    // Dissociatives,
  {
      id: 'ghb',
      name: 'GHB',
      commonNames: ['G', 'Liquid E', 'Fantasy', 'Georgia Home Boy', 'Gamma Hydroxybutyrate'],
      category: 'depressants',
      class: 'GABA Metabolite',
      description: 'GHB (gamma-hydroxybutyric acid) is a naturally occurring neurotransmitter and psychoactive drug. It acts on GHB receptors and GABA-B receptors, producing euphoria, increased sociability, and relaxation at low doses, and sedation and unconsciousness at higher doses. GHB has legitimate medical uses for narcolepsy and alcohol dependence. It has a narrow therapeutic window, making overdose relatively easy. GHB has gained notoriety as a "date rape drug" due to its ability to cause unconsciousness and amnesia.',
      effects: {
        positive: ['Euphoria at low doses', 'Increased sociability', 'Relaxation', 'Enhanced tactile sensitivity', 'Increased libido', 'Sleep improvement'],
        neutral: ['Drowsiness', 'Reduced inhibitions', 'Altered perception', 'Dizziness'],
        negative: ['Narrow dose-response window', 'Unconsciousness at higher doses', 'Nausea and vomiting', 'Respiratory depression', 'Amnesia', 'Risk of overdose', 'Dangerous interactions with alcohol', 'Potential for abuse']
      },
      dosage: {
        threshold: '0.5-1g',
        light: '1-1.5g',
        common: '1.5-2.5g',
        strong: '2.5-3.5g',
        heavy: '3.5g+'
      },
      duration: {
        onset: '10-20 minutes',
        comeup: '20-40 minutes',
        peak: '1-2 hours',
        offset: '1-2 hours',
        total: '2-4 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '0.5-1g',
              light: '1-1.5g',
              common: '1.5-2.5g',
              strong: '2.5-3.5g',
              heavy: '3.5g+'
          },
          duration: {
              onset: '10-20 minutes',
              comeup: '20-40 minutes',
              peak: '1-2 hours',
              offset: '1-2 hours',
              total: '2-4 hours'
          },
          notes: 'Only practical route. Very narrow dose-response curve. Milliliters matter significantly.'
      }
  },
      interactions: ['Alcohol (extremely dangerous)', 'Benzodiazepines (dangerous)', 'Opioids', 'Other depressants', 'Ketamine'],
      harmReduction: [
        'NEVER combine with alcohol - can be fatal',
        'Measure doses carefully with accurate measuring device',
        'Start with low doses - individual sensitivity varies greatly',
        'Never accept GHB from strangers',
        'Have someone you trust present',
        'Do not drive while under the influence',
        'Be aware that effects can come on suddenly'
      ],
      legality: 'Controlled in most countries. Schedule I in the US, though Xyrem (prescription GHB) is Schedule III for narcolepsy treatment.',
      chemistry: {
        formula: 'C4H8O3',
        molecularWeight: '104.10 g/mol',
        class: 'Fatty acid derivative'
      },
      history: 'GHB was first synthesized in 1874. It was used as an anesthetic and later as a bodybuilding supplement before being scheduled due to abuse potential and use in sexual assault.',
      routes: ['Oral (liquid)', 'Oral (capsules)'],
      afterEffects: 'Grogginess. Unexpected sleep episodes possible.',
      riskLevel: 'high',
      aliases: ['gamma-hydroxybutyric acid', 'sodium oxybate']
    },
  {
      id: 'etizolam',
      name: 'Etizolam',
      commonNames: ['Etiz', 'Etilaam', 'Etizest', 'Depas'],
      category: 'depressants',
      class: 'Thienodiazepine',
      description: 'Etizolam is a thienodiazepine derivative, chemically related to benzodiazepines but with a thiophene ring instead of a benzene ring. It produces anxiolytic, hypnotic, and muscle relaxant effects similar to traditional benzodiazepines. Etizolam is notably more potent than diazepam (Valium) and has a shorter duration of action. It is medically prescribed in some countries for anxiety and insomnia but has become popular as a research chemical and recreational substance in regions where it is not controlled.',
      effects: {
        positive: ['Anxiety relief', 'Sleep induction', 'Muscle relaxation', 'Calming effects', 'Panic attack relief'],
        neutral: ['Sedation', 'Impaired coordination', 'Memory impairment', 'Slurred speech'],
        negative: ['High dependence potential', 'Severe withdrawal symptoms', 'Risk of overdose with other depressants', 'Memory problems', 'Respiratory depression', 'Paradoxical reactions in some users']
      },
      dosage: {
        threshold: '0.25-0.5mg',
        light: '0.5-1mg',
        common: '1-2mg',
        strong: '2-4mg',
        heavy: '4mg+'
      },
      duration: {
        onset: '15-30 minutes',
        comeup: '30-60 minutes',
        peak: '1-2 hours',
        offset: '3-5 hours',
        total: '4-8 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '0.25-0.5mg',
              light: '0.5-1mg',
              common: '1-2mg',
              strong: '2-4mg',
              heavy: '4mg+'
          },
          duration: {
              onset: '15-30 minutes',
              comeup: '30-60 minutes',
              peak: '1-2 hours',
              offset: '3-5 hours',
              total: '4-8 hours'
          },
          notes: 'Thienodiazepine. More potent than diazepam. Short-acting. High dependence potential.'
      },
      Sublingual: {
          dosage: {
              threshold: '0.25-0.5mg',
              light: '0.5-1mg',
              common: '1-2mg',
              strong: '2-4mg',
              heavy: '4mg+'
          },
          duration: {
              onset: '10-20 minutes',
              comeup: '20-40 minutes',
              peak: '1-1.5 hours',
              offset: '3-5 hours',
              total: '4-8 hours'
          },
          notes: 'Faster onset than oral. Used in some formulations.'
      }
  },
      interactions: ['Alcohol (dangerous)', 'Opioids (dangerous)', 'Other benzodiazepines', 'Barbiturates', 'GHB', 'Ketamine'],
      harmReduction: [
        'Never combine with alcohol or opioids',
        'Use the lowest effective dose',
        'Do not use daily to avoid dependence',
        'Taper off gradually - never stop abruptly',
        'Do not drive while under the influence',
        'Be aware of amnesiac effects',
        'Store safely to prevent accidental ingestion'
      ],
      legality: 'Controlled substance in many jurisdictions. Prescription-only in some countries. Schedule IV in the US (as of 2022).',
      chemistry: {
        formula: 'C17H15ClN4S',
        molecularWeight: '342.85 g/mol',
        class: 'Thienodiazepine'
      },
      history: 'Etizolam was developed in Japan and has been marketed there and in India for anxiety and sleep disorders. It gained popularity as a research chemical in the West.',
      routes: ['Oral', 'Sublingual'],
      afterEffects: 'Sedation can persist into the next day ("hangover effect").',
      riskLevel: 'high',
      aliases: ['4-(2-chlorophenyl)-2-ethyl-9-methyl-6H-thieno[3,2-f][1,2,4]triazolo[4,3-a][1,4]diazepine']
    },

    // Empathogen Research Chemicals,
  {
      id: 'gabapentin',
      name: 'Gabapentin',
      commonNames: ['Neurontin', 'Gaba', 'Gabbies', 'Johnny\'s'],
      category: 'depressants',
      class: 'Gabapentinoid',
      description: 'Gabapentin is a medication structurally similar to GABA, used primarily for neuropathic pain and seizures. It binds to voltage-gated calcium channels in the central nervous system. While originally developed to treat epilepsy, it is now widely prescribed for various conditions. Gabapentin has abuse potential, particularly when combined with opioids.',
      effects: {
        positive: ['Pain relief', 'Anxiety reduction', 'Relaxation', 'Improved sleep', 'Mild euphoria at higher doses'],
        neutral: ['Sedation', 'Dizziness', 'Fatigue', 'Peripheral edema'],
        negative: ['Dependency potential', 'Withdrawal symptoms', 'Ataxia', 'Cognitive impairment', 'Respiratory depression when combined with opioids']
      },
      dosage: {
        threshold: '100-300mg',
        light: '300-600mg',
        common: '600-1200mg',
        strong: '1200-2400mg',
        heavy: '2400mg+'
      },
      duration: {
        onset: '30-60 minutes',
        comeup: '1-2 hours',
        peak: '2-4 hours',
        offset: '4-8 hours',
        total: '6-12 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '100-300mg',
              light: '300-600mg',
              common: '600-1200mg',
              strong: '1200-2400mg',
              heavy: '2400mg'
          },
          duration: {
              onset: '30-60 minutes',
              comeup: '1-2 hours',
              peak: '2-4 hours',
              offset: '4-8 hours',
              total: '6-12 hours'
          },
          notes: 'Most common route for this substance.'
      }
  },
      interactions: ['Opioids (increases respiratory depression risk)', 'Alcohol', 'Benzodiazepines', 'Antacids (reduce absorption)'],
      harmReduction: [
        'Do not combine with opioids - increases overdose risk',
        'Taper off gradually to avoid withdrawal',
        'Do not drive until you know how it affects you',
        'Avoid alcohol while taking',
        'Be aware of dependence potential with regular use'
      ],
      legality: 'Prescription only. Not a controlled substance federally in the US but scheduled in some states.',
      chemistry: {
        formula: 'C9H17NO2',
        molecularWeight: '171.24 g/mol',
        class: 'Gabapentinoid'
      },
      history: 'Gabapentin was developed in the 1970s and approved for medical use in 1993. It was originally designed as a GABA mimetic but works through different mechanisms.',
      routes: ['Oral'],
      afterEffects: 'Sedation can persist. Withdrawal symptoms include anxiety, insomnia, and sweating.',
      riskLevel: 'moderate',
      aliases: ['1-(aminomethyl)cyclohexaneacetic acid']
    },
  {
      id: 'pregabalin',
      name: 'Pregabalin',
      commonNames: ['Lyrica', 'Pregabs', 'Pregs'],
      category: 'depressants',
      class: 'Gabapentinoid',
      description: 'Pregabalin is a gabapentinoid medication used for neuropathic pain, fibromyalgia, anxiety, and seizures. It is more potent than gabapentin with higher bioavailability. Pregabalin binds to voltage-gated calcium channels and has demonstrated abuse potential, leading to controlled substance scheduling in many countries.',
      effects: {
        positive: ['Pain relief', 'Anxiety reduction', 'Relaxation', 'Euphoria at higher doses', 'Improved sleep'],
        neutral: ['Sedation', 'Dizziness', 'Weight gain', 'Peripheral edema', 'Dry mouth'],
        negative: ['Dependency potential', 'Withdrawal symptoms', 'Cognitive impairment', 'Blurred vision', 'Respiratory depression when combined with other depressants']
      },
      dosage: {
        threshold: '25-75mg',
        light: '75-150mg',
        common: '150-300mg',
        strong: '300-450mg',
        heavy: '450mg+'
      },
      duration: {
        onset: '30-60 minutes',
        comeup: '1-2 hours',
        peak: '2-4 hours',
        offset: '4-8 hours',
        total: '6-12 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '25-75mg',
              light: '75-150mg',
              common: '150-300mg',
              strong: '300-450mg',
              heavy: '450mg'
          },
          duration: {
              onset: '30-60 minutes',
              comeup: '1-2 hours',
              peak: '2-4 hours',
              offset: '4-8 hours',
              total: '6-12 hours'
          },
          notes: 'Most common route for this substance.'
      }
  },
      interactions: ['Opioids', 'Alcohol', 'Benzodiazepines', 'CNS depressants'],
      harmReduction: [
        'More potent than gabapentin - use with caution',
        'High abuse potential - Schedule V in US',
        'Do not combine with other depressants',
        'Taper off gradually to avoid withdrawal',
        'Can cause severe withdrawal symptoms'
      ],
      legality: 'Prescription only. Schedule V controlled substance in the US. Controlled in many countries.',
      chemistry: {
        formula: 'C8H17NO2',
        molecularWeight: '159.23 g/mol',
        class: 'Gabapentinoid'
      },
      history: 'Pregabalin was developed as a successor to gabapentin and was approved in the US in 2004. It became a controlled substance due to abuse potential.',
      routes: ['Oral'],
      afterEffects: 'Sedation, potential withdrawal symptoms including anxiety and insomnia.',
      riskLevel: 'moderate',
      aliases: ['(S)-3-(aminomethyl)-5-methylhexanoic acid']
    },
  {
      id: 'phenibut',
      name: 'Phenibut',
      commonNames: ['Fenibut', 'Noofen', 'Phenny'],
      category: 'depressants',
      class: 'Gabapentinoid',
      description: 'Phenibut is a GABA analog with anxiolytic and nootropic effects, developed in Russia. It acts as a GABA-B receptor agonist and also affects voltage-gated calcium channels. Phenibut is used medically in Russia and some other countries but is sold as a supplement elsewhere. It has significant abuse potential and can cause severe withdrawal symptoms.',
      effects: {
        positive: ['Anxiety relief', 'Relaxation', 'Improved sleep', 'Social ease', 'Mild euphoria', 'Cognitive enhancement at low doses'],
        neutral: ['Sedation', 'Reduced inhibition', 'Increased sociability'],
        negative: ['High addiction potential', 'Severe withdrawal syndrome', 'Tolerance develops rapidly', 'Dizziness', 'Nausea', 'Delirium in withdrawal']
      },
      dosage: {
        threshold: '100-250mg',
        light: '250-500mg',
        common: '500-1000mg',
        strong: '1000-2000mg',
        heavy: '2000mg+'
      },
      duration: {
        onset: '1-2 hours (oral)',
        comeup: '2-3 hours',
        peak: '4-6 hours',
        offset: '6-12 hours',
        total: '10-24 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '100-250mg',
              light: '250-500mg',
              common: '500-1000mg',
              strong: '1000-2000mg',
              heavy: '2000mg'
          },
          duration: {
              onset: '1-2 hours (oral)',
              comeup: '2-3 hours',
              peak: '4-6 hours',
              offset: '6-12 hours',
              total: '10-24 hours'
          },
          notes: 'Most common route for this substance.'
      },
      Sublingual: {
          dosage: {
              threshold: '85-212.5mg',
              light: '212.5-425mg',
              common: '425-850mg',
              strong: '850-1700mg',
              heavy: '1700mg'
          },
          duration: {
              onset: '10-20 minutes',
              comeup: '20-40 minutes',
              peak: '4-6 hours',
              offset: '6-12 hours',
              total: '10-24 hours'
          },
          notes: 'Faster onset than oral. Good bioavailability. Held under tongue.'
      }
  },
      interactions: ['Alcohol (dangerous)', 'Benzodiazepines', 'GHB', 'Opioids', 'Other depressants'],
      harmReduction: [
        'Do not use more than 1-2 times per week to avoid dependence',
        'Tolerance develops rapidly - avoid daily use',
        'Withdrawal can be severe and prolonged - taper gradually',
        'Never combine with alcohol',
        'Start with low doses - effects are delayed',
        'Have a plan for stopping before starting'
      ],
      legality: 'Prescription only in Russia and some countries. Uncontrolled supplement in US, though FDA has issued warnings. Banned in some countries.',
      chemistry: {
        formula: 'C10H13NO2',
        molecularWeight: '179.22 g/mol',
        class: 'Gabapentinoid'
      },
      history: 'Phenibut was developed in the Soviet Union in the 1960s for cosmonauts to reduce stress without impairing performance. It has been used medically in Russia since.',
      routes: ['Oral', 'Sublingual'],
      afterEffects: 'Long duration. Withdrawal can include severe anxiety, insomnia, and psychotic symptoms.',
      riskLevel: 'moderate',
      aliases: ['β-phenyl-γ-aminobutyric acid', 'fenibut']
    },
  {
      id: 'f-phenibut',
      name: 'F-Phenibut',
      commonNames: ['Fluorophenibut', 'F-Phen'],
      category: 'depressants',
      class: 'Gabapentinoid',
      description: 'F-Phenibut (Fluorophenibut) is a fluorinated analog of phenibut with increased potency. The addition of a fluorine atom increases its ability to cross the blood-brain barrier. It is sold as a research chemical and has similar effects to phenibut but at lower doses.',
      effects: {
        positive: ['Anxiety relief', 'Relaxation', 'Improved sleep', 'Social ease'],
        neutral: ['Sedation', 'Reduced inhibition'],
        negative: ['High addiction potential', 'Severe withdrawal', 'Tolerance development', 'Less research than phenibut']
      },
      dosage: {
        threshold: '50-100mg',
        light: '100-200mg',
        common: '200-400mg',
        strong: '400-600mg',
        heavy: '600mg+'
      },
      duration: {
        onset: '1-2 hours',
        comeup: '2-3 hours',
        peak: '4-6 hours',
        offset: '6-10 hours',
        total: '8-15 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '50-100mg',
              light: '100-200mg',
              common: '200-400mg',
              strong: '400-600mg',
              heavy: '600mg'
          },
          duration: {
              onset: '1-2 hours',
              comeup: '2-3 hours',
              peak: '4-6 hours',
              offset: '6-10 hours',
              total: '8-15 hours'
          },
          notes: 'Most common route for this substance.'
      }
  },
      interactions: ['Alcohol', 'Benzodiazepines', 'GHB', 'Opioids', 'Other depressants'],
      harmReduction: [
        'More potent than phenibut - use lower doses',
        'Less research available - use with caution',
        'Avoid daily use to prevent dependence',
        'Taper gradually if physically dependent',
        'Never combine with alcohol'
      ],
      legality: 'Not scheduled in most countries. Sold as research chemical. May be controlled under analog acts.',
      chemistry: {
        formula: 'C10H12FNO2',
        molecularWeight: '197.21 g/mol',
        class: 'Gabapentinoid'
      },
      history: 'F-Phenibut emerged as a research chemical alternative to phenibut in the 2010s.',
      routes: ['Oral'],
      afterEffects: 'Similar to phenibut. Withdrawal risk significant.',
      riskLevel: 'moderate',
      aliases: ['fluorophenibut']
    },
  {
      id: 'baclofen',
      name: 'Baclofen',
      commonNames: ['Lioresal', 'Gablofen', 'Bac'],
      category: 'depressants',
      class: 'Muscle Relaxant',
      description: 'Baclofen is a GABA-B receptor agonist used as a muscle relaxant and antispasmodic. It is prescribed for muscle spasticity, particularly in multiple sclerosis and spinal cord injuries. Baclofen has been studied for alcohol and opioid dependence treatment. Withdrawal can be dangerous and potentially life-threatening.',
      effects: {
        positive: ['Muscle relaxation', 'Pain relief from spasms', 'Anxiety reduction', 'Possible anti-addiction effects'],
        neutral: ['Sedation', 'Drowsiness', 'Weakness', 'Dizziness'],
        negative: ['Withdrawal syndrome can be fatal', 'Seizures in withdrawal', 'Confusion', 'Respiratory depression at high doses']
      },
      dosage: {
        threshold: '5-10mg',
        light: '10-20mg',
        common: '20-40mg',
        strong: '40-80mg',
        heavy: '80mg+'
      },
      duration: {
        onset: '30-60 minutes (oral)',
        comeup: '1-2 hours',
        peak: '2-3 hours',
        offset: '4-6 hours',
        total: '6-8 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '5-10mg',
              light: '10-20mg',
              common: '20-40mg',
              strong: '40-80mg',
              heavy: '80mg'
          },
          duration: {
              onset: '30-60 minutes (oral)',
              comeup: '1-2 hours',
              peak: '2-3 hours',
              offset: '4-6 hours',
              total: '6-8 hours'
          },
          notes: 'Most common route for this substance.'
      },
      Intrathecal: {
          dosage: {
              threshold: '1.5-3mg',
              light: '3-6mg',
              common: '6-12mg',
              strong: '12-24mg',
              heavy: '24mg'
          },
          duration: {
              onset: '5-15 minutes',
              comeup: '15-30 minutes',
              peak: '3-5 hours',
              offset: '6-9 hours',
              total: '9-12 hours'
          },
          notes: 'Spinal administration. Very potent. Medical use only.'
      }
  },
      interactions: ['Alcohol', 'Benzodiazepines', 'Other muscle relaxants', 'Antidepressants', 'Opioids'],
      harmReduction: [
        'Never stop abruptly - withdrawal can be fatal',
        'Taper gradually under medical supervision',
        'High doses can cause respiratory depression',
        'Avoid combining with other depressants',
        'Seek medical help if doses are missed'
      ],
      legality: 'Prescription only. Not a controlled substance.',
      chemistry: {
        formula: 'C10H12ClNO2',
        molecularWeight: '213.66 g/mol',
        class: 'GABA derivative'
      },
      history: 'Baclofen was developed in the 1960s as a treatment for epilepsy but was found more effective for muscle spasticity.',
      routes: ['Oral', 'Intrathecal (pump)'],
      afterEffects: 'Muscle weakness. Withdrawal is medical emergency.',
      riskLevel: 'moderate',
      aliases: ['β-(4-chlorophenyl)-GABA']
    },
  {
      id: 'carisoprodol',
      name: 'Carisoprodol',
      commonNames: ['Soma', 'Somas', 'Dantrium', 'Soma Compound'],
      category: 'depressants',
      class: 'Muscle Relaxant',
      description: 'Carisoprodol is a muscle relaxant that acts centrally to relieve muscle pain and discomfort. It is metabolized to meprobamate, an anxiolytic with barbiturate-like effects. Carisoprodol has significant abuse potential and is scheduled in many jurisdictions.',
      effects: {
        positive: ['Muscle relaxation', 'Pain relief', 'Anxiety reduction', 'Mild euphoria', 'Sleepiness'],
        neutral: ['Sedation', 'Drowsiness', 'Dizziness', 'Impaired coordination'],
        negative: ['Addiction potential', 'Withdrawal symptoms', 'Overdose risk with other depressants', 'Seizures in withdrawal', 'Cognitive impairment']
      },
      dosage: {
        threshold: '100-200mg',
        light: '200-350mg',
        common: '350-700mg',
        strong: '700-1050mg',
        heavy: '1050mg+'
      },
      duration: {
        onset: '30-45 minutes',
        comeup: '45-90 minutes',
        peak: '1-2 hours',
        offset: '2-4 hours',
        total: '4-6 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '100-200mg',
              light: '200-350mg',
              common: '350-700mg',
              strong: '700-1050mg',
              heavy: '1050mg'
          },
          duration: {
              onset: '30-45 minutes',
              comeup: '45-90 minutes',
              peak: '1-2 hours',
              offset: '2-4 hours',
              total: '4-6 hours'
          },
          notes: 'Most common route for this substance.'
      }
  },
      interactions: ['Alcohol (dangerous)', 'Benzodiazepines', 'Opioids', 'Other muscle relaxants', 'CNS depressants'],
      harmReduction: [
        'Metabolizes to meprobamate - addictive potential',
        'Never mix with alcohol or other depressants',
        'Avoid long-term use - dependence develops quickly',
        'Taper gradually when stopping',
        'Schedule IV in US - controlled substance'
      ],
      legality: 'Prescription only. Schedule IV controlled substance in the US. Withdrawn from market in some countries.',
      chemistry: {
        formula: 'C12H24N2O4',
        molecularWeight: '260.33 g/mol',
        class: 'Carbamate derivative'
      },
      history: 'Carisoprodol was developed in the 1950s and has been used as a muscle relaxant since. Abuse potential led to increased regulation.',
      routes: ['Oral'],
      afterEffects: 'Drowsiness. Withdrawal can include anxiety, insomnia, and seizures.',
      riskLevel: 'moderate',
      aliases: ['isopropyl carbamate', 'N-isopropyl-2-methyl-2-propyl-1,3-propanediol dicarbamate']
    },
  {
      id: 'zolpidem',
      name: 'Zolpidem',
      commonNames: ['Ambien', 'Stilnox', 'Zolpimist', 'Edluar', 'Ambien CR'],
      category: 'depressants',
      class: 'Z-Drug',
      description: 'Zolpidem is a sedative-hypnotic medication used for short-term treatment of insomnia. It acts as a positive allosteric modulator at GABA-A receptors, preferentially at α1 subunits. Zolpidem is known for causing unusual behaviors including sleep-walking, sleep-eating, and sleep-driving in some individuals.',
      effects: {
        positive: ['Sleep induction', 'Rapid onset of sleep', 'Anxiety relief at low doses'],
        neutral: ['Sedation', 'Amnesia', 'Impaired coordination', 'Taste changes'],
        negative: ['Complex sleep behaviors (sleep-walking, driving)', 'Dependency potential', 'Withdrawal symptoms', 'Hallucinations if fighting sleep', 'Paradoxical effects']
      },
      dosage: {
        threshold: '2.5-5mg',
        light: '5-10mg',
        common: '10-20mg',
        strong: '20-30mg',
        heavy: '30mg+'
      },
      duration: {
        onset: '10-30 minutes',
        comeup: '15-30 minutes',
        peak: '30-90 minutes',
        offset: '1-3 hours',
        total: '2-4 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '2.5-5mg',
              light: '5-10mg',
              common: '10-20mg',
              strong: '20-30mg',
              heavy: '30mg'
          },
          duration: {
              onset: '10-30 minutes',
              comeup: '15-30 minutes',
              peak: '30-90 minutes',
              offset: '1-3 hours',
              total: '2-4 hours'
          },
          notes: 'Most common route for this substance.'
      },
      Sublingual: {
          dosage: {
              threshold: '2.1-4.3mg',
              light: '4.3-8.5mg',
              common: '8.5-17mg',
              strong: '17-25.5mg',
              heavy: '25.5mg'
          },
          duration: {
              onset: '10-20 minutes',
              comeup: '20-40 minutes',
              peak: '30-90 minutes',
              offset: '1-3 hours',
              total: '2-4 hours'
          },
          notes: 'Faster onset than oral. Good bioavailability. Held under tongue.'
      }
  },
      interactions: ['Alcohol (dangerous)', 'Benzodiazepines', 'Opioids', 'Other CNS depressants', 'Fluconazole', 'Ritonavir'],
      harmReduction: [
        'Take only when ready for bed immediately',
        'Do not take with alcohol',
        'Allow 7-8 hours for sleep',
        'Do not drive or operate machinery',
        'Be aware of potential sleep behaviors',
        'Short-term use only - dependence risk'
      ],
      legality: 'Prescription only. Schedule IV controlled substance in the US.',
      chemistry: {
        formula: 'C19H21N3O',
        molecularWeight: '307.39 g/mol',
        class: 'Imidazopyridine'
      },
      history: 'Zolpidem was developed in the 1980s and approved in the US in 1992 as a safer alternative to benzodiazepines for insomnia.',
      routes: ['Oral', 'Sublingual'],
      afterEffects: 'Morning grogginess possible. Memory loss for events after taking.',
      riskLevel: 'moderate',
      aliases: ['N,N-dimethyl-2-(6-methyl-2-(4-methylphenyl)imidazo[1,2-a]pyridin-3-yl)acetamide']
    },
  {
      id: 'zopiclone',
      name: 'Zopiclone',
      commonNames: ['Imovane', 'Zimovane', 'Zop', 'Zoppies'],
      category: 'depressants',
      class: 'Z-Drug',
      description: 'Zopiclone is a non-benzodiazepine hypnotic used for short-term treatment of insomnia. It acts on GABA-A receptors and produces sedative, anxiolytic, and muscle relaxant effects. Zopiclone is known for causing a metallic taste in the mouth.',
      effects: {
        positive: ['Sleep induction', 'Sleep maintenance', 'Anxiety reduction'],
        neutral: ['Sedation', 'Metallic taste', 'Dry mouth', 'Amnesia'],
        negative: ['Dependency potential', 'Withdrawal symptoms', 'Daytime drowsiness', 'Complex sleep behaviors', 'Tolerance development']
      },
      dosage: {
        threshold: '3.5-5mg',
        light: '5-7.5mg',
        common: '7.5-10mg',
        strong: '10-15mg',
        heavy: '15mg+'
      },
      duration: {
        onset: '15-30 minutes',
        comeup: '30-45 minutes',
        peak: '1-2 hours',
        offset: '2-4 hours',
        total: '4-6 hours'
      },
      interactions: ['Alcohol', 'Benzodiazepines', 'Opioids', 'CNS depressants', 'Erythromycin'],
      harmReduction: [
        'Do not take with alcohol',
        'Short-term use only',
        'Do not drive the next day if feeling drowsy',
        'Avoid abrupt discontinuation',
        'Lower doses for elderly'
      ],
      legality: 'Prescription only. Not scheduled in US (eszopiclone available instead). Controlled in some countries.',
      chemistry: {
        formula: 'C17H17ClN6O3',
        molecularWeight: '388.81 g/mol',
        class: 'Cyclopyrrolone'
      },
      history: 'Zopiclone was developed in the 1970s and has been used medically since 1986. Eszopiclone (Lunesta) is the active S-isomer.',
      routes: ['Oral'],
      afterEffects: 'Metallic taste, possible drowsiness. Withdrawal symptoms possible.',
      riskLevel: 'moderate',
      aliases: ['6-(5-chloro-2-pyridinyl)-7-oxo-6,7-dihydro-5H-pyrrolo[3,4-b]pyrazin-5-yl 4-methyl-1-piperazinecarboxylate']
    },
  {
      id: 'eszopiclone',
      name: 'Eszopiclone',
      commonNames: ['Lunesta', 'Estorra'],
      category: 'depressants',
      class: 'Z-Drug',
      description: 'Eszopiclone is the S-isomer of zopiclone, used for treatment of insomnia. It acts as a positive allosteric modulator at GABA-A receptors. Unlike some sleep medications, eszopiclone is approved for long-term use, though dependence risk still exists.',
      effects: {
        positive: ['Sleep induction', 'Sleep maintenance', 'Longer approved duration than other Z-drugs'],
        neutral: ['Sedation', 'Metallic taste', 'Dry mouth', 'Headache'],
        negative: ['Dependency potential', 'Complex sleep behaviors', 'Daytime drowsiness', 'Withdrawal symptoms', 'Anxiety']
      },
      dosage: {
        threshold: '0.5-1mg',
        light: '1-2mg',
        common: '2-3mg',
        strong: '3-4mg',
        heavy: '4mg+'
      },
      duration: {
        onset: '15-30 minutes',
        comeup: '30-45 minutes',
        peak: '1-2 hours',
        offset: '3-5 hours',
        total: '5-7 hours'
      },
      interactions: ['Alcohol', 'Benzodiazepines', 'Opioids', 'CNS depressants', 'CYP3A4 inhibitors'],
      harmReduction: [
        'Do not take with alcohol',
        'Allow 8 hours for sleep',
        'Do not drive if feeling drowsy',
        'Be aware of metallic taste side effect',
        'Taper gradually if used long-term'
      ],
      legality: 'Prescription only. Schedule IV controlled substance in the US.',
      chemistry: {
        formula: 'C17H17ClN6O3',
        molecularWeight: '388.81 g/mol',
        class: 'Cyclopyrrolone'
      },
      history: 'Eszopiclone was approved in the US in 2004 as the active isomer of zopiclone for insomnia treatment.',
      routes: ['Oral'],
      afterEffects: 'Metallic taste common. Morning drowsiness possible.',
      riskLevel: 'moderate',
      aliases: ['(S)-zopiclone']
    },
  {
      id: 'methaqualone',
      name: 'Methaqualone',
      commonNames: ['Quaalude', 'Ludes', 'Mandrax', 'Sopor', 'Parest'],
      category: 'depressants',
      class: 'Quinazolinone',
      description: 'Methaqualone is a sedative-hypnotic medication that was popular in the 1960s and 1970s. It acts as a positive allosteric modulator at GABA-A receptors. Methaqualone was widely abused for its euphoric and disinhibiting effects and was eventually scheduled and discontinued in most countries.',
      effects: {
        positive: ['Euphoria', 'Relaxation', 'Disinhibition', 'Sleep induction', 'Enhanced sociability'],
        neutral: ['Sedation', 'Dizziness', 'Slurred speech'],
        negative: ['High addiction potential', 'Overdose risk', 'Seizures at high doses', 'Respiratory depression', 'Tolerance development']
      },
      dosage: {
        threshold: '50-100mg',
        light: '100-150mg',
        common: '150-300mg',
        strong: '300-500mg',
        heavy: '500mg+'
      },
      duration: {
        onset: '20-45 minutes',
        comeup: '30-60 minutes',
        peak: '1-2 hours',
        offset: '2-4 hours',
        total: '4-8 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '50-100mg',
              light: '100-150mg',
              common: '150-300mg',
              strong: '300-500mg',
              heavy: '500mg'
          },
          duration: {
              onset: '20-45 minutes',
              comeup: '30-60 minutes',
              peak: '1-2 hours',
              offset: '2-4 hours',
              total: '4-8 hours'
          },
          notes: 'Most common route for this substance.'
      }
  },
      interactions: ['Alcohol (dangerous)', 'Benzodiazepines', 'Opioids', 'Other depressants'],
      harmReduction: [
        'No longer legally available in most countries',
        'High overdose potential',
        'Never combine with alcohol',
        'Tolerance develops quickly',
        'Seizure risk at high doses'
      ],
      legality: 'Schedule I controlled substance in the US. No accepted medical use. Illegal internationally.',
      chemistry: {
        formula: 'C16H14N2O',
        molecularWeight: '250.30 g/mol',
        class: 'Quinazolinone'
      },
      history: 'Methaqualone was developed in India in the 1950s as a malaria treatment. It became popular as a recreational drug in the 1960s-70s and was banned in the US in 1984.',
      routes: ['Oral'],
      afterEffects: 'Hangover, drowsiness. High addiction potential.',
      riskLevel: 'high',
      aliases: ['2-methyl-3-(2-methylphenyl)-4(3H)-quinazolinone']
    },
  {
      id: 'gbl',
      name: 'GBL',
      commonNames: ['Gamma-Butyrolactone', 'Blue Nitro', 'Revitalize Plus', 'Renewtrient'],
      category: 'depressants',
      class: 'Lactone',
      description: 'Gamma-Butyrolactone (GBL) is a prodrug of GHB, rapidly converted to GHB in the body by lactonase enzymes. It is used industrially as a solvent and is found in some cleaning products. GBL has abuse potential similar to GHB but is more potent and faster-acting.',
      effects: {
        positive: ['Euphoria', 'Relaxation', 'Increased sociability', 'Enhanced sensory perception', 'Sexual enhancement'],
        neutral: ['Sedation', 'Drowsiness', 'Decreased inhibitions'],
        negative: ['High overdose risk', 'Narrow therapeutic window', 'Vomiting while unconscious', 'Addiction potential', 'Severe withdrawal syndrome']
      },
      dosage: {
        threshold: '0.5-1ml',
        light: '1-1.5ml',
        common: '1.5-2.5ml',
        strong: '2.5-3.5ml',
        heavy: '3.5ml+'
      },
      duration: {
        onset: '10-20 minutes',
        comeup: '15-30 minutes',
        peak: '30-60 minutes',
        offset: '1-2 hours',
        total: '2-3 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '0.5-1ml',
              light: '1-1.5ml',
              common: '1.5-2.5ml',
              strong: '2.5-3.5ml',
              heavy: '3.5ml+'
          },
          duration: {
              onset: '10-20 minutes',
              comeup: '15-30 minutes',
              peak: '30-60 minutes',
              offset: '1-2 hours',
              total: '2-3 hours'
          },
          notes: 'More potent than GHB. Converts to GHB in body. Use accurate measurement. Bitter taste.'
      }
  },
      interactions: ['Alcohol (extremely dangerous)', 'Benzodiazepines', 'Opioids', 'Other CNS depressants'],
      harmReduction: [
        'More potent than GHB - dose carefully',
        'NEVER mix with alcohol - respiratory arrest risk',
        'Use accurate measurement - milliliters matter',
        'High addiction potential - avoid daily use',
        'Withdrawal can be life-threatening',
        'Do not drive for at least 8 hours after use'
      ],
      legality: 'List I chemical in the US (regulated as precursor). Controlled in many countries. Has legitimate industrial uses.',
      chemistry: {
        formula: 'C4H6O2',
        molecularWeight: '86.09 g/mol',
        class: 'Lactone'
      },
      history: 'GBL has been used industrially for decades. Its conversion to GHB in the body led to its abuse as a GHB substitute.',
      routes: ['Oral'],
      afterEffects: 'Possible drowsiness. Withdrawal with regular use is severe.',
      riskLevel: 'high',
      aliases: ['gamma-butyrolactone', 'butyrolactone']
    },
  {
      id: '1-4-butanediol',
      name: '1,4-Butanediol',
      commonNames: ['1,4-BD', 'BDO', 'One Comma Four', 'Fantasy'],
      category: 'depressants',
      class: 'Diol',
      description: '1,4-Butanediol (1,4-BD) is an industrial chemical that acts as a prodrug for GHB. It is metabolized by alcohol dehydrogenase to GHB in the body. 1,4-BD has slower onset than GHB or GBL but similar effects. It is used in the production of plastics and as a solvent.',
      effects: {
        positive: ['Euphoria', 'Relaxation', 'Increased sociability', 'Similar to GHB effects'],
        neutral: ['Sedation', 'Drowsiness', 'Slower onset than GBL'],
        negative: ['High overdose risk', 'Dangerous with alcohol (metabolism competition)', 'Addiction potential', 'Severe withdrawal', 'Vomiting while unconscious']
      },
      dosage: {
        threshold: '0.5-1g',
        light: '1-1.5g',
        common: '1.5-2.5g',
        strong: '2.5-4g',
        heavy: '4g+'
      },
      duration: {
        onset: '20-40 minutes',
        comeup: '30-60 minutes',
        peak: '1-2 hours',
        offset: '2-3 hours',
        total: '3-5 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '0.5-1g',
              light: '1-1.5g',
              common: '1.5-2.5g',
              strong: '2.5-4g',
              heavy: '4g'
          },
          duration: {
              onset: '20-40 minutes',
              comeup: '30-60 minutes',
              peak: '1-2 hours',
              offset: '2-3 hours',
              total: '3-5 hours'
          },
          notes: 'Most common route for this substance.'
      }
  },
      interactions: ['Alcohol (extremely dangerous - increases GHB levels)', 'Benzodiazepines', 'Opioids', 'Other CNS depressants'],
      harmReduction: [
        'Slower onset than GBL - do not redose early',
        'NEVER mix with alcohol',
        'Accurate measurement essential',
        'High addiction potential',
        'Withdrawal can be life-threatening',
        'Do not drive after use'
      ],
      legality: 'Unscheduled at US federal level. May be prosecuted under Federal Analogue Act. Controlled in some countries. Has legitimate industrial uses.',
      chemistry: {
        formula: 'C4H10O2',
        molecularWeight: '90.12 g/mol',
        class: 'Diol'
      },
      history: '1,4-Butanediol has industrial uses dating back decades. Its conversion to GHB led to abuse as a legal GHB alternative before scheduling.',
      routes: ['Oral'],
      afterEffects: 'Similar to GHB. Withdrawal syndrome with regular use.',
      riskLevel: 'high',
      aliases: ['1,4-butylene glycol', 'tetramethylene glycol']
    },
  {
      id: 'clonidine',
      name: 'Clonidine',
      commonNames: ['Catapres', 'Kapvay', 'Nexiclon', 'Clo'],
      category: 'depressants',
      class: 'Alpha-2 Agonist',
      description: 'Clonidine is an alpha-2 adrenergic receptor agonist used for hypertension, ADHD, and opioid withdrawal management. It reduces sympathetic nervous system activity, producing sedation and decreased anxiety. Clonidine is sometimes abused for its sedative effects.',
      effects: {
        positive: ['Anxiety reduction', 'Sedation', 'Helps with opioid withdrawal symptoms', 'Blood pressure reduction'],
        neutral: ['Drowsiness', 'Dry mouth', 'Constipation', 'Dizziness'],
        negative: ['Hypotension', 'Rebound hypertension if stopped abruptly', 'Bradycardia', 'Sedation can be excessive', 'Withdrawal syndrome']
      },
      dosage: {
        threshold: '0.05-0.1mg',
        light: '0.1-0.2mg',
        common: '0.2-0.4mg',
        strong: '0.4-0.6mg',
        heavy: '0.6mg+'
      },
      duration: {
        onset: '30-60 minutes',
        comeup: '1-2 hours',
        peak: '2-4 hours',
        offset: '6-12 hours',
        total: '8-24 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '0.1-0.1mg',
              light: '0.1-0.2mg',
              common: '0.2-0.4mg',
              strong: '0.4-0.6mg',
              heavy: '0.6mg'
          },
          duration: {
              onset: '30-60 minutes',
              comeup: '1-2 hours',
              peak: '2-4 hours',
              offset: '6-12 hours',
              total: '8-24 hours'
          },
          notes: 'Most common route for this substance.'
      },
      Transdermal: {
          dosage: {
              threshold: '0.1-0.1mg',
              light: '0.1-0.2mg',
              common: '0.2-0.5mg',
              strong: '0.5-0.7mg',
              heavy: '0.7mg'
          },
          duration: {
              onset: '1-3 hours',
              comeup: '2-4 hours',
              peak: '6-12 hours',
              offset: '18-36 hours',
              total: '24-72 hours'
          },
          notes: 'Very slow onset. Sustained release. Used for continuous delivery.'
      }
  },
      interactions: ['Beta-blockers', 'Tricyclic antidepressants', 'CNS depressants', 'Alcohol', 'Other alpha-2 agonists'],
      harmReduction: [
        'Do not stop abruptly - rebound hypertension risk',
        'Monitor blood pressure',
        'Can cause severe hypotension',
        'Avoid with other blood pressure medications without medical supervision',
        'Taper gradually when discontinuing'
      ],
      legality: 'Prescription only. Not a controlled substance.',
      chemistry: {
        formula: 'C9H9Cl2N3',
        molecularWeight: '230.09 g/mol',
        class: 'Imidazoline derivative'
      },
      history: 'Clonidine was developed in the 1960s as a nasal decongestant but was found to be effective for hypertension.',
      routes: ['Oral', 'Transdermal (patch)'],
      afterEffects: 'Drowsiness. Rebound hypertension if stopped abruptly.',
      riskLevel: 'low',
      aliases: ['2-[(2,6-dichlorophenyl)imino]imidazolidine']
    },
  {
      id: 'tizanidine',
      name: 'Tizanidine',
      commonNames: ['Zanaflex', 'Tiz'],
      category: 'depressants',
      class: 'Alpha-2 Agonist',
      description: 'Tizanidine is a short-acting alpha-2 adrenergic receptor agonist used as a muscle relaxant. It is effective for spasticity associated with multiple sclerosis and spinal cord injury. Tizanidine has sedative properties and some abuse potential.',
      effects: {
        positive: ['Muscle relaxation', 'Spasticity relief', 'Sedation', 'Anxiety reduction'],
        neutral: ['Drowsiness', 'Dry mouth', 'Weakness', 'Dizziness'],
        negative: ['Hypotension', 'Liver toxicity with long-term use', 'Rebound hypertension on withdrawal', 'Sedation']
      },
      dosage: {
        threshold: '2-4mg',
        light: '4-8mg',
        common: '8-12mg',
        strong: '12-20mg',
        heavy: '20mg+'
      },
      duration: {
        onset: '15-30 minutes',
        comeup: '30-60 minutes',
        peak: '1-2 hours',
        offset: '2-3 hours',
        total: '3-6 hours'
      },
      interactions: ['CYP1A2 inhibitors (fluvoxamine, ciprofloxacin)', 'Alcohol', 'Other alpha-2 agonists', 'Blood pressure medications', 'CNS depressants'],
      harmReduction: [
        'Do not combine with CYP1A2 inhibitors',
        'Can cause significant hypotension',
        'Liver function monitoring recommended',
        'Avoid abrupt discontinuation',
        'Do not drive if sedated'
      ],
      legality: 'Prescription only. Not a controlled substance.',
      chemistry: {
        formula: 'C9H8ClN5S',
        molecularWeight: '253.71 g/mol',
        class: 'Imidazoline derivative'
      },
      history: 'Tizanidine was developed as a muscle relaxant and approved in the US in 1996.',
      routes: ['Oral'],
      afterEffects: 'Drowsiness, muscle weakness. Rebound hypertension possible.',
      riskLevel: 'low',
      aliases: ['5-chloro-N-(4,5-dihydro-1H-imidazol-2-yl)-2,1,3-benzothiadiazol-4-amine']
    },
  {
      id: 'promethazine',
      name: 'Promethazine',
      commonNames: ['Phenergan', 'Prometh', 'Lean Base'],
      category: 'depressants',
      class: 'Antihistamine',
      description: 'Promethazine is a first-generation antihistamine with strong sedative, antiemetic, and anticholinergic properties. It is used for allergies, nausea, and motion sickness. Promethazine is commonly mixed with codeine in cough syrup ("lean") for recreational use.',
      effects: {
        positive: ['Sedation', 'Nausea relief', 'Allergy relief', 'Mild euphoria in combination'],
        neutral: ['Drowsiness', 'Dry mouth', 'Blurred vision', 'Constipation'],
        negative: ['Respiratory depression (especially with opioids)', 'Seizure risk', 'Neuroleptic malignant syndrome (rare)', 'Confusion', 'Hypotension']
      },
      dosage: {
        threshold: '12.5-25mg',
        light: '25-50mg',
        common: '50-75mg',
        strong: '75-100mg',
        heavy: '100mg+'
      },
      duration: {
        onset: '20-45 minutes',
        comeup: '30-60 minutes',
        peak: '2-3 hours',
        offset: '4-6 hours',
        total: '4-12 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '12.5-25mg',
              light: '25-50mg',
              common: '50-75mg',
              strong: '75-100mg',
              heavy: '100mg'
          },
          duration: {
              onset: '20-45 minutes',
              comeup: '30-60 minutes',
              peak: '2-3 hours',
              offset: '4-6 hours',
              total: '4-12 hours'
          },
          notes: 'Most common route for this substance.'
      },
      Intravenous: {
          dosage: {
              threshold: '5-10mg',
              light: '10-20mg',
              common: '20-30mg',
              strong: '30-40mg',
              heavy: '40mg'
          },
          duration: {
              onset: '10-30 seconds',
              comeup: '1-5 minutes',
              peak: '1-2 hours',
              offset: '2-3 hours',
              total: '2-6 hours'
          },
          notes: 'Immediate onset. 100% bioavailability. Very high risk. Requires sterile technique.'
      },
      Intramuscular: {
          dosage: {
              threshold: '7.5-15mg',
              light: '15-30mg',
              common: '30-45mg',
              strong: '45-60mg',
              heavy: '60mg'
          },
          duration: {
              onset: '5-15 minutes',
              comeup: '15-30 minutes',
              peak: '2-3 hours',
              offset: '4-6 hours',
              total: '4-12 hours'
          },
          notes: 'Medical administration route. Slower onset than IV but sustained effect.'
      },
      Rectal: {
          dosage: {
              threshold: '8.8-17.5mg',
              light: '17.5-35mg',
              common: '35-52.5mg',
              strong: '52.5-70mg',
              heavy: '70mg'
          },
          duration: {
              onset: '5-15 minutes',
              comeup: '15-30 minutes',
              peak: '2-3 hours',
              offset: '4-6 hours',
              total: '4-12 hours'
          },
          notes: 'Higher bioavailability than oral. Faster onset. Less first-pass metabolism.'
      },
      Topical: {
          dosage: {
              threshold: '12.5-25mg',
              light: '25-50mg',
              common: '50-75mg',
              strong: '75-100mg',
              heavy: '100mg'
          },
          duration: {
              onset: '1-5 minutes',
              comeup: '5-15 minutes',
              peak: '2-3 hours',
              offset: '4-6 hours',
              total: '4-12 hours'
          },
          notes: 'Medical use for local anesthesia. Minimal systemic effects.'
      }
  },
      interactions: ['Opioids (dangerous - respiratory depression)', 'Alcohol', 'Benzodiazepines', 'MAOIs', 'CNS depressants'],
      harmReduction: [
        'Dangerous when combined with opioids - respiratory depression',
        'Do not use in children under 2 - risk of fatal respiratory depression',
        'Avoid driving due to sedation',
        'Do not mix with other CNS depressants',
        'Can potentiate effects of other drugs'
      ],
      legality: 'Prescription only in most countries. Not a controlled substance itself but controlled when combined with opioids.',
      chemistry: {
        formula: 'C17H20N2S',
        molecularWeight: '284.42 g/mol',
        class: 'Phenothiazine derivative'
      },
      history: 'Promethazine was developed in the 1940s and has been used medically for decades. Its combination with codeine became popular recreationally in hip-hop culture.',
      routes: ['Oral', 'Intravenous', 'Intramuscular', 'Rectal', 'Topical'],
      afterEffects: 'Prolonged drowsiness, dry mouth. Hangover effect common.',
      riskLevel: 'low',
      aliases: ['10-(2-dimethylaminopropyl)phenothiazine']
    },
  {
      id: 'phenobarbital',
      name: 'Phenobarbital',
      commonNames: ['Luminal', 'Phenobarb', 'Phenobarbitone'],
      category: 'depressants',
      class: 'Barbiturate',
      description: 'Phenobarbital is a long-acting barbiturate used primarily for seizure disorders. It acts as a positive allosteric modulator at GABA-A receptors. While less commonly used for anxiety and sleep due to safety concerns, it remains an important anticonvulsant.',
      effects: {
        positive: ['Seizure control', 'Sedation', 'Anxiety relief', 'Sleep induction'],
        neutral: ['Drowsiness', 'Cognitive impairment', 'Ataxia'],
        negative: ['High overdose risk', 'Respiratory depression', 'Addiction potential', 'Long half-life causes accumulation', 'Skin reactions']
      },
      dosage: {
        threshold: '15-30mg',
        light: '30-60mg',
        common: '60-120mg',
        strong: '120-200mg',
        heavy: '200mg+'
      },
      duration: {
        onset: '30-60 minutes (oral)',
        comeup: '1-2 hours',
        peak: '4-12 hours',
        offset: '12-24 hours',
        total: '24-48+ hours'
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
              onset: '30-60 minutes (oral)',
              comeup: '1-2 hours',
              peak: '4-12 hours',
              offset: '12-24 hours',
              total: '24-48+ hours'
          },
          notes: 'Most common route for this substance.'
      },
      Intravenous: {
          dosage: {
              threshold: '6-12mg',
              light: '12-24mg',
              common: '24-48mg',
              strong: '48-80mg',
              heavy: '80mg'
          },
          duration: {
              onset: '10-30 seconds',
              comeup: '1-5 minutes',
              peak: '2-6 hours',
              offset: '6-12 hours',
              total: '12-24 hours'
          },
          notes: 'Immediate onset. 100% bioavailability. Very high risk. Requires sterile technique.'
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
              peak: '4-12 hours',
              offset: '12-24 hours',
              total: '24-48+ hours'
          },
          notes: 'Medical administration route. Slower onset than IV but sustained effect.'
      }
  },
      interactions: ['Alcohol (extremely dangerous)', 'Benzodiazepines', 'Opioids', 'Other barbiturates', 'MAOIs', 'Many drug interactions'],
      harmReduction: [
        'Very long half-life - effects accumulate',
        'Overdose can be fatal - narrow therapeutic window',
        'Never combine with alcohol',
        'Do not stop abruptly - seizure risk',
        'Many drug interactions - check before combining'
      ],
      legality: 'Prescription only. Schedule IV controlled substance in the US.',
      chemistry: {
        formula: 'C12H12N2O3',
        molecularWeight: '232.24 g/mol',
        class: 'Barbiturate'
      },
      history: 'Phenobarbital was first synthesized in 1912 and was the first widely used barbiturate. It remains an important anticonvulsant in developing countries.',
      routes: ['Oral', 'Intravenous', 'Intramuscular'],
      afterEffects: 'Prolonged sedation. Withdrawal can cause seizures.',
      riskLevel: 'high',
      aliases: ['5-ethyl-5-phenylbarbituric acid']
    },

    // ============================================
    // BENZODIAZEPINES
    // ============================================,
  {
      id: 'alprazolam',
      name: 'Alprazolam',
      commonNames: ['Xanax', 'Xanny', 'Bars', 'Ladders', 'Zannies', 'Blue Footballs'],
      category: 'depressants',
      class: 'Benzodiazepine',
      description: 'Alprazolam is a short-acting benzodiazepine used primarily for anxiety and panic disorders. It acts as a positive allosteric modulator at GABA-A receptors, producing anxiolytic, sedative, and muscle relaxant effects. Alprazolam is one of the most commonly prescribed and abused benzodiazepines, with significant dependence potential.',
      effects: {
        positive: ['Anxiety relief', 'Panic attack prevention', 'Relaxation', 'Sleep induction', 'Muscle relaxation'],
        neutral: ['Sedation', 'Impaired coordination', 'Anterograde amnesia', 'Slurred speech'],
        negative: ['High addiction potential', 'Severe withdrawal syndrome', 'Cognitive impairment', 'Paradoxical reactions', 'Overdose risk with other depressants', 'Blackouts']
      },
      dosage: {
        threshold: '0.25-0.5mg',
        light: '0.5-1mg',
        common: '1-2mg',
        strong: '2-4mg',
        heavy: '4mg+'
      },
      duration: {
        onset: '15-45 minutes (oral)',
        comeup: '30-60 minutes',
        peak: '1-2 hours',
        offset: '2-4 hours',
        total: '4-6 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '0.25-0.5mg',
              light: '0.5-1mg',
              common: '1-2mg',
              strong: '2-4mg',
              heavy: '4mg+'
          },
          duration: {
              onset: '15-45 minutes',
              comeup: '30-60 minutes',
              peak: '1-2 hours',
              offset: '2-4 hours',
              total: '4-6 hours'
          },
          notes: 'Short-acting. High potency. Very addictive. Withdrawal can cause seizures.'
      },
      Sublingual: {
          dosage: {
              threshold: '0.25-0.5mg',
              light: '0.5-1mg',
              common: '1-2mg',
              strong: '2-4mg',
              heavy: '4mg+'
          },
          duration: {
              onset: '10-20 minutes',
              comeup: '20-40 minutes',
              peak: '1-1.5 hours',
              offset: '2-4 hours',
              total: '4-6 hours'
          },
          notes: 'Faster onset than oral. Some formulations designed for sublingual use.'
      },
      Insufflation: {
          dosage: {
              threshold: '0.2-0.4mg',
              light: '0.4-0.8mg',
              common: '0.8-1.5mg',
              strong: '1.5-3mg',
              heavy: '3mg+'
          },
          duration: {
              onset: '5-15 minutes',
              comeup: '15-30 minutes',
              peak: '30-90 minutes',
              offset: '2-3 hours',
              total: '3-5 hours'
          },
          notes: 'Not recommended. Damages nasal tissue. Variable bioavailability. Higher addiction potential.'
      },
      Rectal: {
          dosage: {
              threshold: '0.2-0.4mg',
              light: '0.4-0.7mg',
              common: '0.7-1.4mg',
              strong: '1.4-2.8mg',
              heavy: '2.8mg'
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
      interactions: ['Alcohol (dangerous)', 'Opioids (dangerous)', 'Other benzodiazepines', 'CNS depressants', 'Ketoconazole', 'Grapefruit juice'],
      harmReduction: [
        'High addiction potential - avoid daily use',
        'Never combine with opioids or alcohol',
        'Withdrawal can be life-threatening - taper gradually',
        'Can cause blackouts and memory loss',
        'Do not drive while affected',
        'Short-acting - may cause interdose withdrawal'
      ],
      legality: 'Prescription only. Schedule IV controlled substance in the US.',
      chemistry: {
        formula: 'C17H13ClN4',
        molecularWeight: '308.76 g/mol',
        class: 'Triazolobenzodiazepine'
      },
      history: 'Alprazolam was first synthesized in 1969 and approved in the US in 1981. It became the most prescribed benzodiazepine in the US.',
      routes: ['Oral', 'Sublingual', 'Insufflation', 'Rectal'],
      afterEffects: 'Sedation, possible amnesia. Withdrawal symptoms can include seizures.',
      riskLevel: 'high',
      aliases: ['8-chloro-1-methyl-6-phenyl-4H-[1,2,4]triazolo[4,3-a][1,4]benzodiazepine']
    },
  {
      id: 'clonazepam',
      name: 'Clonazepam',
      commonNames: ['Klonopin', 'K-Pins', 'Klonos', 'Benzo'],
      category: 'depressants',
      class: 'Benzodiazepine',
      description: 'Clonazepam is a long-acting benzodiazepine used for seizures, panic disorder, and anxiety. It has high potency and a long half-life of 30-40 hours. Clonazepam acts on GABA-A receptors and is known for its effectiveness in preventing seizures.',
      effects: {
        positive: ['Anxiety relief', 'Seizure prevention', 'Panic attack relief', 'Muscle relaxation', 'Sleep improvement'],
        neutral: ['Sedation', 'Impaired coordination', 'Memory impairment', 'Dizziness'],
        negative: ['Addiction potential', 'Withdrawal syndrome', 'Depression', 'Cognitive impairment with long-term use', 'Overdose risk with other depressants']
      },
      dosage: {
        threshold: '0.25-0.5mg',
        light: '0.5-1mg',
        common: '1-2mg',
        strong: '2-4mg',
        heavy: '4mg+'
      },
      duration: {
        onset: '20-60 minutes (oral)',
        comeup: '1-2 hours',
        peak: '2-4 hours',
        offset: '8-12 hours',
        total: '12-48 hours'
      },
      interactions: ['Alcohol', 'Opioids', 'Other benzodiazepines', 'CNS depressants', 'Phenytoin', 'Carbamazepine'],
      harmReduction: [
        'Long half-life means accumulation with regular dosing',
        'Never combine with opioids or alcohol',
        'Taper gradually to avoid withdrawal seizures',
        'Can cause depression with long-term use',
        'Do not stop abruptly if taking regularly'
      ],
      legality: 'Prescription only. Schedule IV controlled substance in the US.',
      chemistry: {
        formula: 'C15H10ClN3O3',
        molecularWeight: '315.71 g/mol',
        class: 'Nitrobenzodiazepine'
      },
      history: 'Clonazepam was patented in 1960 and approved in the US in 1975. It has been widely used for seizure disorders.',
      routes: ['Oral', 'Intravenous', 'Intramuscular'],
      afterEffects: 'Long duration of action. Withdrawal can be prolonged due to long half-life.',
      riskLevel: 'moderate',
      aliases: ['5-(2-chlorophenyl)-7-nitro-1,3-dihydro-2H-1,4-benzodiazepin-2-one']
    },
  {
      id: 'lorazepam',
      name: 'Lorazepam',
      commonNames: ['Ativan', 'Lorrie', 'Temesta'],
      category: 'depressants',
      class: 'Benzodiazepine',
      description: 'Lorazepam is a intermediate-acting benzodiazepine used for anxiety, insomnia, seizures, and alcohol withdrawal. It has moderate potency and is commonly used in hospital settings. Lorazepam is metabolized by glucuronidation, making it suitable for patients with liver impairment.',
      effects: {
        positive: ['Anxiety relief', 'Sedation', 'Seizure control', 'Alcohol withdrawal management', 'Sleep induction'],
        neutral: ['Impaired coordination', 'Memory impairment', 'Dizziness', 'Weakness'],
        negative: ['Addiction potential', 'Withdrawal symptoms', 'Respiratory depression with other depressants', 'Paradoxical reactions']
      },
      dosage: {
        threshold: '0.5-1mg',
        light: '1-2mg',
        common: '2-4mg',
        strong: '4-6mg',
        heavy: '6mg+'
      },
      duration: {
        onset: '15-45 minutes (oral), 1-5 minutes (IV)',
        comeup: '30-90 minutes',
        peak: '2-4 hours',
        offset: '6-10 hours',
        total: '8-24 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '0.5-1mg',
              light: '1-2mg',
              common: '2-4mg',
              strong: '4-6mg',
              heavy: '6mg'
          },
          duration: {
              onset: '15-45 minutes (oral), 1-5 minutes (IV)',
              comeup: '30-90 minutes',
              peak: '2-4 hours',
              offset: '6-10 hours',
              total: '8-24 hours'
          },
          notes: 'Most common route for this substance.'
      },
      Intravenous: {
          dosage: {
              threshold: '0.2-0.4mg',
              light: '0.4-0.8mg',
              common: '0.8-1.6mg',
              strong: '1.6-2.4mg',
              heavy: '2.4mg'
          },
          duration: {
              onset: '10-30 seconds',
              comeup: '1-5 minutes',
              peak: '1-2 hours',
              offset: '3-5 hours',
              total: '4-12 hours'
          },
          notes: 'Immediate onset. 100% bioavailability. Very high risk. Requires sterile technique.'
      },
      Intramuscular: {
          dosage: {
              threshold: '0.3-0.6mg',
              light: '0.6-1.2mg',
              common: '1.2-2.4mg',
              strong: '2.4-3.6mg',
              heavy: '3.6mg'
          },
          duration: {
              onset: '5-15 minutes',
              comeup: '15-30 minutes',
              peak: '2-4 hours',
              offset: '6-10 hours',
              total: '8-24 hours'
          },
          notes: 'Medical administration route. Slower onset than IV but sustained effect.'
      },
      Sublingual: {
          dosage: {
              threshold: '0.4-0.9mg',
              light: '0.9-1.7mg',
              common: '1.7-3.4mg',
              strong: '3.4-5.1mg',
              heavy: '5.1mg'
          },
          duration: {
              onset: '10-20 minutes',
              comeup: '20-40 minutes',
              peak: '2-4 hours',
              offset: '6-10 hours',
              total: '8-24 hours'
          },
          notes: 'Faster onset than oral. Good bioavailability. Held under tongue.'
      }
  },
      interactions: ['Alcohol', 'Opioids', 'Other benzodiazepines', 'CNS depressants', 'Probenecid', 'Valproate'],
      harmReduction: [
        'Common in hospital settings for withdrawal management',
        'Never combine with opioids or alcohol',
        'Taper gradually when discontinuing',
        'Less affected by liver problems than other benzodiazepines',
        'Can cause prolonged sedation in elderly'
      ],
      legality: 'Prescription only. Schedule IV controlled substance in the US.',
      chemistry: {
        formula: 'C15H10Cl2N2O2',
        molecularWeight: '321.16 g/mol',
        class: 'Benzodiazepine'
      },
      history: 'Lorazepam was developed in 1963 and approved in the US in 1977. It has become a standard medication for alcohol withdrawal.',
      routes: ['Oral', 'Intravenous', 'Intramuscular', 'Sublingual'],
      afterEffects: 'Sedation, possible amnesia. Withdrawal symptoms similar to other benzodiazepines.',
      riskLevel: 'moderate',
      aliases: ['7-chloro-5-(2-chlorophenyl)-3-hydroxy-1,3-dihydro-2H-1,4-benzodiazepin-2-one']
    },
  {
      id: 'diazepam',
      name: 'Diazepam',
      commonNames: ['Valium', 'Vallies', 'Blues', 'Yellows'],
      category: 'depressants',
      class: 'Benzodiazepine',
      description: 'Diazepam is a long-acting benzodiazepine used for anxiety, muscle spasms, seizures, and alcohol withdrawal. It has active metabolites that extend its duration of action. Diazepam is a prototype benzodiazepine that has been widely used since the 1960s.',
      effects: {
        positive: ['Anxiety relief', 'Muscle relaxation', 'Seizure prevention', 'Sleep induction', 'Alcohol withdrawal relief'],
        neutral: ['Sedation', 'Impaired coordination', 'Memory impairment', 'Dizziness'],
        negative: ['Addiction potential', 'Withdrawal syndrome', 'Cognitive impairment', 'Overdose risk with depressants', 'Long-acting metabolites']
      },
      dosage: {
        threshold: '2-5mg',
        light: '5-10mg',
        common: '10-20mg',
        strong: '20-40mg',
        heavy: '40mg+'
      },
      duration: {
        onset: '15-45 minutes (oral)',
        comeup: '30-90 minutes',
        peak: '1-2 hours',
        offset: '12-24 hours',
        total: '24-48+ hours (with metabolites)'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '2-5mg',
              light: '5-10mg',
              common: '10-20mg',
              strong: '20-40mg',
              heavy: '40mg+'
          },
          duration: {
              onset: '15-45 minutes',
              comeup: '30-90 minutes',
              peak: '1-2 hours',
              offset: '12-24 hours',
              total: '24-48+ hours'
          },
          notes: 'Long-acting with active metabolites. Accumulates with regular dosing. Extended duration due to nordazepam metabolite.'
      },
      Intravenous: {
          dosage: {
              threshold: '1-2.5mg',
              light: '2.5-5mg',
              common: '5-10mg',
              strong: '10-20mg',
              heavy: '20mg+'
          },
          duration: {
              onset: '30-90 seconds',
              comeup: '1-5 minutes',
              peak: '5-15 minutes',
              offset: '6-12 hours',
              total: '12-24 hours'
          },
          notes: 'Medical use for seizures and anxiety. Very rapid onset. Long duration due to redistribution.'
      },
      Intramuscular: {
          dosage: {
              threshold: '1.2-3mg',
              light: '3-6mg',
              common: '6-12mg',
              strong: '12-24mg',
              heavy: '24mg'
          },
          duration: {
              onset: '5-15 minutes',
              comeup: '15-30 minutes',
              peak: '1-2 hours',
              offset: '12-24 hours',
              total: '24-48+ hours (with metabolites)'
          },
          notes: 'Medical administration route. Slower onset than IV but sustained effect.'
      },
      Rectal: {
          dosage: {
              threshold: '2-5mg',
              light: '5-10mg',
              common: '10-20mg',
              strong: '20-40mg',
              heavy: '40mg+'
          },
          duration: {
              onset: '5-15 minutes',
              comeup: '15-30 minutes',
              peak: '30-90 minutes',
              offset: '6-12 hours',
              total: '12-24 hours'
          },
          notes: 'Used for seizure emergencies. Faster onset than oral. Good bioavailability.'
      }
  },
      interactions: ['Alcohol', 'Opioids', 'Other benzodiazepines', 'CNS depressants', 'Cimetidine', 'Omeprazole', 'Fluoxetine'],
      harmReduction: [
        'Very long half-life with active metabolites',
        'Never combine with opioids or alcohol',
        'Accumulates with regular dosing',
        'Taper very gradually - active metabolites complicate withdrawal',
        'Be aware of drug interactions - many affect diazepam levels'
      ],
      legality: 'Prescription only. Schedule IV controlled substance in the US.',
      chemistry: {
        formula: 'C16H13ClN2O',
        molecularWeight: '284.74 g/mol',
        class: 'Benzodiazepine'
      },
      history: 'Diazepam was synthesized in 1959 and approved in 1963. It became one of the best-selling drugs in history.',
      routes: ['Oral', 'Intravenous', 'Intramuscular', 'Rectal'],
      afterEffects: 'Prolonged sedation due to active metabolites. Withdrawal can be extended.',
      riskLevel: 'moderate',
      aliases: ['7-chloro-1-methyl-5-phenyl-1,3-dihydro-2H-1,4-benzodiazepin-2-one']
    },
  {
      id: 'temazepam',
      name: 'Temazepam',
      commonNames: ['Restoril', 'Euhypnos', 'Normison', 'Jellies', 'Eggs'],
      category: 'depressants',
      class: 'Benzodiazepine',
      description: 'Temazepam is an intermediate-acting benzodiazepine used primarily for insomnia. It has a relatively short half-life of 8-20 hours, making it suitable for sleep induction and maintenance without excessive next-day sedation.',
      effects: {
        positive: ['Sleep induction', 'Sleep maintenance', 'Anxiety relief'],
        neutral: ['Sedation', 'Impaired coordination', 'Memory impairment'],
        negative: ['Dependency potential', 'Withdrawal symptoms', 'Complex sleep behaviors', 'Daytime drowsiness', 'Rebound insomnia']
      },
      dosage: {
        threshold: '7.5-15mg',
        light: '15-22.5mg',
        common: '22.5-30mg',
        strong: '30-45mg',
        heavy: '45mg+'
      },
      duration: {
        onset: '15-45 minutes (oral)',
        comeup: '30-60 minutes',
        peak: '1-2 hours',
        offset: '4-8 hours',
        total: '6-12 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '7.5-15mg',
              light: '15-22.5mg',
              common: '22.5-30mg',
              strong: '30-45mg',
              heavy: '45mg'
          },
          duration: {
              onset: '15-45 minutes (oral)',
              comeup: '30-60 minutes',
              peak: '1-2 hours',
              offset: '4-8 hours',
              total: '6-12 hours'
          },
          notes: 'Most common route for this substance.'
      }
  },
      interactions: ['Alcohol', 'Opioids', 'Other benzodiazepines', 'CNS depressants'],
      harmReduction: [
        'Use only when you have 7-8 hours for sleep',
        'Never combine with alcohol',
        'Can cause sleep behaviors like sleep-walking',
        'Tolerance develops with regular use',
        'Avoid long-term use - dependence risk'
      ],
      legality: 'Prescription only. Schedule IV controlled substance in the US.',
      chemistry: {
        formula: 'C16H13ClN2O2',
        molecularWeight: '300.74 g/mol',
        class: 'Benzodiazepine'
      },
      history: 'Temazepam was developed in 1964 and approved in the US in 1981. It has been widely used for insomnia.',
      routes: ['Oral'],
      afterEffects: 'Possible morning drowsiness. Rebound insomnia on discontinuation.',
      riskLevel: 'moderate',
      aliases: ['7-chloro-3-hydroxy-1-methyl-5-phenyl-1,3-dihydro-2H-1,4-benzodiazepin-2-one']
    },
  {
      id: 'flunitrazepam',
      name: 'Flunitrazepam',
      commonNames: ['Rohypnol', 'Roofies', 'Rophies', 'La Rocha', 'Forget Pill'],
      category: 'depressants',
      class: 'Benzodiazepine',
      description: 'Flunitrazepam is a potent intermediate-acting benzodiazepine with strong amnesic properties. It is known for its association with drug-facilitated sexual assault due to its ability to cause profound amnesia. Flunitrazepam is not approved for medical use in the US.',
      effects: {
        positive: ['Strong sedation', 'Sleep induction', 'Anxiety relief'],
        neutral: ['Profound amnesia', 'Impaired coordination', 'Muscle relaxation'],
        negative: ['High addiction potential', 'Severe amnesia (can last hours)', 'Dangerous with alcohol', 'Withdrawal seizures', 'Date rape association']
      },
      dosage: {
        threshold: '0.25-0.5mg',
        light: '0.5-1mg',
        common: '1-2mg',
        strong: '2-4mg',
        heavy: '4mg+'
      },
      duration: {
        onset: '15-30 minutes (oral)',
        comeup: '30-60 minutes',
        peak: '1-2 hours',
        offset: '4-8 hours',
        total: '8-12 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '0.3-0.5mg',
              light: '0.5-1mg',
              common: '1-2mg',
              strong: '2-4mg',
              heavy: '4mg'
          },
          duration: {
              onset: '15-30 minutes (oral)',
              comeup: '30-60 minutes',
              peak: '1-2 hours',
              offset: '4-8 hours',
              total: '8-12 hours'
          },
          notes: 'Most common route for this substance.'
      }
  },
      interactions: ['Alcohol (extremely dangerous)', 'Opioids', 'Other benzodiazepines', 'All CNS depressants'],
      harmReduction: [
        'Extremely potent - 10x stronger than diazepam',
        'Can cause complete amnesia for hours',
        'NEVER combine with alcohol',
        'Watch your drink in social settings',
        'High dependence potential',
        'Not legally available in many countries'
      ],
      legality: 'Not approved in the US. Schedule IV internationally but Schedule I in some states. Controlled worldwide.',
      chemistry: {
        formula: 'C16H12FN3O3',
        molecularWeight: '313.28 g/mol',
        class: 'Nitrobenzodiazepine'
      },
      history: 'Flunitrazepam was developed in the 1970s and used in Europe for insomnia. It became infamous as a date rape drug.',
      routes: ['Oral'],
      afterEffects: 'Prolonged sedation, amnesia. Withdrawal can be severe.',
      riskLevel: 'high',
      aliases: ['5-(2-fluorophenyl)-1-methyl-7-nitro-1,3-dihydro-2H-1,4-benzodiazepin-2-one']
    },
  {
      id: 'midazolam',
      name: 'Midazolam',
      commonNames: ['Versed', 'Dormicum', 'Hypnovel', 'Midaz'],
      category: 'depressants',
      class: 'Benzodiazepine',
      description: 'Midazolam is a short-acting benzodiazepine used primarily for procedural sedation and anesthesia. It has very rapid onset and produces profound amnesia. Midazolam is water-soluble, making it suitable for injection.',
      effects: {
        positive: ['Rapid sedation', 'Anxiolysis', 'Profound amnesia (beneficial for procedures)'],
        neutral: ['Impaired coordination', 'Slurred speech', 'Drowsiness'],
        negative: ['Respiratory depression', 'High addiction potential', 'Severe amnesia', 'Overdose risk', 'Paradoxical reactions']
      },
      dosage: {
        threshold: '1-2mg (IV)',
        light: '2-5mg (IV)',
        common: '5-10mg (IV)',
        strong: '10-20mg (IV)',
        heavy: '20mg+ (IV)'
      },
      duration: {
        onset: '1-5 minutes (IV), 10-20 minutes (oral)',
        comeup: '5-15 minutes',
        peak: '15-30 minutes',
        offset: '1-2 hours',
        total: '2-6 hours'
      },
    routeData: {
      Intravenous: {
          dosage: {
              threshold: '0.4-0.8mg',
              light: '0.8-2mg',
              common: '2-4mg',
              strong: '4-8mg',
              heavy: '8mg'
          },
          duration: {
              onset: '10-30 seconds',
              comeup: '1-5 minutes',
              peak: '8-15 minutes',
              offset: '1-2 hours',
              total: '1-3 hours'
          },
          notes: 'Immediate onset. 100% bioavailability. Very high risk. Requires sterile technique.'
      },
      Intramuscular: {
          dosage: {
              threshold: '0.6-1.2mg',
              light: '1.2-3mg',
              common: '3-6mg',
              strong: '6-12mg',
              heavy: '12mg'
          },
          duration: {
              onset: '5-15 minutes',
              comeup: '15-30 minutes',
              peak: '15-30 minutes',
              offset: '1-2 hours',
              total: '2-6 hours'
          },
          notes: 'Medical administration route. Slower onset than IV but sustained effect.'
      },
      Oral: {
          dosage: {
              threshold: '1-2mg',
              light: '2-5mg',
              common: '5-10mg',
              strong: '10-20mg',
              heavy: '20mg'
          },
          duration: {
              onset: '1-5 minutes (IV), 10-20 minutes (oral)',
              comeup: '5-15 minutes',
              peak: '15-30 minutes',
              offset: '1-2 hours',
              total: '2-6 hours'
          },
          notes: 'Most common route for this substance.'
      },
      Intranasal: {
          dosage: {
              threshold: '0.7-1.4mg',
              light: '1.4-3.5mg',
              common: '3.5-7mg',
              strong: '7-14mg',
              heavy: '14mg'
          },
          duration: {
              onset: '5-15 minutes',
              comeup: '15-30 minutes',
              peak: '13-26 minutes',
              offset: '1-2 hours',
              total: '2-5 hours'
          },
          notes: 'Similar to insufflation. Nasal spray delivery.'
      },
      Rectal: {
          dosage: {
              threshold: '0.7-1.4mg',
              light: '1.4-3.5mg',
              common: '3.5-7mg',
              strong: '7-14mg',
              heavy: '14mg'
          },
          duration: {
              onset: '5-15 minutes',
              comeup: '15-30 minutes',
              peak: '15-30 minutes',
              offset: '1-2 hours',
              total: '2-6 hours'
          },
          notes: 'Higher bioavailability than oral. Faster onset. Less first-pass metabolism.'
      }
  },
      interactions: ['Alcohol', 'Opioids', 'Other benzodiazepines', 'All CNS depressants', 'CYP3A4 inhibitors'],
      harmReduction: [
        'Should only be used in medical settings',
        'Can cause respiratory arrest',
        'Profound amnesia - you may not remember anything',
        'Never combine with other depressants',
        'Requires monitoring for respiratory depression'
      ],
      legality: 'Prescription only. Schedule IV controlled substance in the US. Typically restricted to hospital use.',
      chemistry: {
        formula: 'C18H13ClFN3',
        molecularWeight: '325.77 g/mol',
        class: 'Imidazobenzodiazepine'
      },
      history: 'Midazolam was developed in the 1970s and approved in the US in 1985. It has become standard for procedural sedation.',
      routes: ['Intravenous', 'Intramuscular', 'Oral', 'Intranasal', 'Rectal'],
      afterEffects: 'Amnesia, possible prolonged sedation. Short duration of action.',
      riskLevel: 'high',
      aliases: ['8-chloro-6-(2-fluorophenyl)-1-methyl-4H-imidazo[1,5-a][1,4]benzodiazepine']
    },
  {
      id: 'clonazolam',
      name: 'Clonazolam',
      commonNames: ['Clam', 'C-Lam', 'Clonitrazolam'],
      category: 'depressants',
      class: 'Benzodiazepine',
      description: 'Clonazolam is a designer benzodiazepine that is a hybrid of clonazepam and alprazolam. It is extremely potent, estimated at 2.5x stronger than clonazepam. Clonazolam has appeared as a research chemical and has no approved medical use.',
      effects: {
        positive: ['Extreme sedation', 'Anxiety relief', 'Muscle relaxation'],
        neutral: ['Strong amnesia', 'Impaired coordination', 'Dizziness'],
        negative: ['Very high addiction potential', 'Severe amnesia', 'Blackouts', 'Long withdrawal', 'High overdose risk']
      },
      dosage: {
        threshold: '0.1-0.25mg',
        light: '0.25-0.5mg',
        common: '0.5-1mg',
        strong: '1-2mg',
        heavy: '2mg+'
      },
      duration: {
        onset: '15-45 minutes (oral)',
        comeup: '30-60 minutes',
        peak: '1-3 hours',
        offset: '6-12 hours',
        total: '10-18 hours'
      },
      interactions: ['Alcohol (dangerous)', 'Opioids', 'Other benzodiazepines', 'All CNS depressants'],
      harmReduction: [
        'EXTREMELY potent - use volumetric dosing',
        'Can cause complete blackouts',
        'Never use with alcohol or opioids',
        'Long half-life - can accumulate',
        'Severe withdrawal risk',
        'No approved medical use - limited research'
      ],
      legality: 'Unscheduled at US federal level. May be prosecuted under Federal Analogue Act. Controlled in some US states. Not approved for medical use.',
      chemistry: {
        formula: 'C17H12ClN5O2',
        molecularWeight: '353.76 g/mol',
        class: 'Triazolobenzodiazepine'
      },
      history: 'Clonazolam was first synthesized in the 1970s but was never marketed medically. It appeared as a research chemical in the 2010s.',
      routes: ['Oral', 'Sublingual'],
      afterEffects: 'Prolonged sedation, amnesia. Withdrawal can be severe and prolonged.',
      riskLevel: 'high',
      aliases: ['6-(2-chlorophenyl)-1-methyl-8-nitro-4H-[1,2,4]triazolo[4,3-a][1,4]benzodiazepine']
    },
  {
      id: 'flualprazolam',
      name: 'Flualprazolam',
      commonNames: ['Flualp', 'Flam', 'F-Lam'],
      category: 'depressants',
      class: 'Benzodiazepine',
      description: 'Flualprazolam is a designer benzodiazepine similar to alprazolam but with a fluorine substitution. It is more potent than alprazolam and has appeared as a research chemical. Flualprazolam has no approved medical use.',
      effects: {
        positive: ['Anxiety relief', 'Sedation', 'Muscle relaxation'],
        neutral: ['Amnesia', 'Impaired coordination', 'Dizziness'],
        negative: ['High addiction potential', 'Blackouts', 'Overdose risk with depressants', 'Withdrawal syndrome']
      },
      dosage: {
        threshold: '0.25-0.5mg',
        light: '0.5-1mg',
        common: '1-2mg',
        strong: '2-3mg',
        heavy: '3mg+'
      },
      duration: {
        onset: '15-45 minutes (oral)',
        comeup: '30-60 minutes',
        peak: '1-3 hours',
        offset: '4-8 hours',
        total: '6-12 hours'
      },
      interactions: ['Alcohol', 'Opioids', 'Other benzodiazepines', 'CNS depressants'],
      harmReduction: [
        'More potent than alprazolam - dose carefully',
        'Can cause significant amnesia',
        'Never combine with alcohol or opioids',
        'Use volumetric dosing for accuracy',
        'No approved medical use'
      ],
      legality: 'Unscheduled at US federal level. May be prosecuted under Federal Analogue Act. Controlled in some US states. Not approved for medical use.',
      chemistry: {
        formula: 'C17H12ClFN4',
        molecularWeight: '326.76 g/mol',
        class: 'Triazolobenzodiazepine'
      },
      history: 'Flualprazolam was synthesized in the 1970s but never marketed. It appeared as a research chemical in the 2010s.',
      routes: ['Oral', 'Sublingual'],
      afterEffects: 'Sedation, possible amnesia. Withdrawal similar to other benzodiazepines.',
      riskLevel: 'high',
      aliases: ['8-chloro-6-(2-fluorophenyl)-1-methyl-4H-[1,2,4]triazolo[4,3-a][1,4]benzodiazepine']
    },
  {
      id: 'flubromazepam',
      name: 'Flubromazepam',
      commonNames: ['Flubro', 'FB'],
      category: 'depressants',
      class: 'Benzodiazepine',
      description: 'Flubromazepam is a long-acting designer benzodiazepine with a bromine substitution. It has a very long half-life of over 100 hours, leading to significant accumulation with regular dosing. Flubromazepam has no approved medical use.',
      effects: {
        positive: ['Anxiety relief', 'Sedation', 'Muscle relaxation'],
        neutral: ['Long duration', 'Impaired coordination', 'Memory impairment'],
        negative: ['Very long half-life causes accumulation', 'Addiction potential', 'Prolonged withdrawal', 'Overdose risk']
      },
      dosage: {
        threshold: '1-2mg',
        light: '2-4mg',
        common: '4-8mg',
        strong: '8-12mg',
        heavy: '12mg+'
      },
      duration: {
        onset: '30-90 minutes',
        comeup: '1-3 hours',
        peak: '2-6 hours',
        offset: '12-24 hours',
        total: '24-48+ hours'
      },
      interactions: ['Alcohol', 'Opioids', 'Other benzodiazepines', 'CNS depressants'],
      harmReduction: [
        'EXTREMELY long half-life - accumulates with regular use',
        'Effects can last 2+ days',
        'Withdrawal can be very prolonged',
        'Do not redose thinking it\'s worn off',
        'Never combine with other depressants'
      ],
      legality: 'Unscheduled at US federal level. May be prosecuted under Federal Analogue Act. Controlled in some US states. Not approved for medical use.',
      chemistry: {
        formula: 'C15H10BrFN2',
        molecularWeight: '333.16 g/mol',
        class: 'Benzodiazepine'
      },
      history: 'Flubromazepam was first synthesized in the 1960s but never marketed. It appeared as a research chemical around 2012.',
      routes: ['Oral', 'Sublingual'],
      afterEffects: 'Very prolonged sedation. Extended withdrawal due to long half-life.',
      riskLevel: 'moderate',
      aliases: ['7-bromo-5-(2-fluorophenyl)-1,3-dihydro-2H-1,4-benzodiazepin-2-one']
    },
  {
      id: 'diclazepam',
      name: 'Diclazepam',
      commonNames: ['DCZ', 'Chlorodiazepam', 'Ro5-3448'],
      category: 'depressants',
      class: 'Benzodiazepine',
      description: 'Diclazepam is a designer benzodiazepine that is a chlorinated analog of diazepam. It is metabolized to delorazepam, lorazepam, and lormetazepam, giving it a long duration of action. Diclazepam has no approved medical use.',
      effects: {
        positive: ['Anxiety relief', 'Sedation', 'Muscle relaxation'],
        neutral: ['Long duration', 'Impaired coordination', 'Memory impairment'],
        negative: ['Long half-life with active metabolites', 'Addiction potential', 'Accumulation', 'Withdrawal syndrome']
      },
      dosage: {
        threshold: '1-2mg',
        light: '2-4mg',
        common: '4-8mg',
        strong: '8-12mg',
        heavy: '12mg+'
      },
      duration: {
        onset: '30-60 minutes',
        comeup: '1-2 hours',
        peak: '2-4 hours',
        offset: '6-12 hours',
        total: '12-48 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '1-2mg',
              light: '2-4mg',
              common: '4-8mg',
              strong: '8-12mg',
              heavy: '12mg'
          },
          duration: {
              onset: '30-60 minutes',
              comeup: '1-2 hours',
              peak: '2-4 hours',
              offset: '6-12 hours',
              total: '12-48 hours'
          },
          notes: 'Most common route for this substance.'
      },
      Sublingual: {
          dosage: {
              threshold: '0.9-1.7mg',
              light: '1.7-3.4mg',
              common: '3.4-6.8mg',
              strong: '6.8-10.2mg',
              heavy: '10.2mg'
          },
          duration: {
              onset: '10-20 minutes',
              comeup: '20-40 minutes',
              peak: '2-4 hours',
              offset: '6-12 hours',
              total: '12-48 hours'
          },
          notes: 'Faster onset than oral. Good bioavailability. Held under tongue.'
      }
  },
      interactions: ['Alcohol', 'Opioids', 'Other benzodiazepines', 'CNS depressants'],
      harmReduction: [
        'Long-acting with active metabolites',
        'Effects can last 24+ hours',
        'Accumulates with regular dosing',
        'Withdrawal can be prolonged',
        'Do not combine with other depressants'
      ],
      legality: 'Unscheduled at US federal level. May be prosecuted under Federal Analogue Act. Controlled in some US states. Not approved for medical use.',
      chemistry: {
        formula: 'C16H12Cl2N2O',
        molecularWeight: '319.18 g/mol',
        class: 'Benzodiazepine'
      },
      history: 'Diclazepam was synthesized by Hoffman-La Roche in the 1960s but never marketed. It appeared as a research chemical around 2010.',
      routes: ['Oral', 'Sublingual'],
      afterEffects: 'Prolonged sedation. Extended withdrawal possible.',
      riskLevel: 'moderate',
      aliases: ['7-chloro-5-(2-chlorophenyl)-1-methyl-1,3-dihydro-2H-1,4-benzodiazepin-2-one']
    },
  {
      id: 'flubromazolam',
      name: 'Flubromazolam',
      commonNames: ['Flubro', 'FBM', 'Flubro-M'],
      category: 'depressants',
      class: 'Benzodiazepine',
      description: 'Flubromazolam is a very potent designer benzodiazepine, combining features of flubromazepam and alprazolam. It is extremely potent with effects beginning at microgram doses. Flubromazolam has no approved medical use and has caused hospitalizations.',
      effects: {
        positive: ['Extreme sedation', 'Anxiety relief'],
        neutral: ['Profound amnesia', 'Impaired coordination', 'Long duration'],
        negative: ['Very high overdose risk', 'Severe amnesia/blackouts', 'High addiction potential', 'Respiratory depression', 'Long withdrawal']
      },
      dosage: {
        threshold: '0.1-0.25mg',
        light: '0.25-0.5mg',
        common: '0.5-1mg',
        strong: '1-2mg',
        heavy: '2mg+'
      },
      duration: {
        onset: '15-45 minutes',
        comeup: '30-90 minutes',
        peak: '1-3 hours',
        offset: '6-12 hours',
        total: '12-18 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '0.1-0.3mg',
              light: '0.3-0.5mg',
              common: '0.5-1mg',
              strong: '1-2mg',
              heavy: '2mg'
          },
          duration: {
              onset: '15-45 minutes',
              comeup: '30-90 minutes',
              peak: '1-3 hours',
              offset: '6-12 hours',
              total: '12-18 hours'
          },
          notes: 'Most common route for this substance.'
      },
      Sublingual: {
          dosage: {
              threshold: '0.1-0.2mg',
              light: '0.2-0.4mg',
              common: '0.4-0.9mg',
              strong: '0.9-1.7mg',
              heavy: '1.7mg'
          },
          duration: {
              onset: '10-20 minutes',
              comeup: '20-40 minutes',
              peak: '1-3 hours',
              offset: '6-12 hours',
              total: '12-18 hours'
          },
          notes: 'Faster onset than oral. Good bioavailability. Held under tongue.'
      }
  },
      interactions: ['Alcohol (extremely dangerous)', 'Opioids', 'Other benzodiazepines', 'All CNS depressants'],
      harmReduction: [
        'EXTREMELY potent - use volumetric dosing only',
        'Can cause complete blackouts lasting many hours',
        'Never combine with other depressants',
        'Several hospitalizations reported',
        'Can cause prolonged sedation',
        'High dependence potential'
      ],
      legality: 'Unscheduled at US federal level. May be prosecuted under Federal Analogue Act. Controlled in some US states. Not approved for medical use.',
      chemistry: {
        formula: 'C17H12BrFN4',
        molecularWeight: '375.21 g/mol',
        class: 'Triazolobenzodiazepine'
      },
      history: 'Flubromazolam appeared as a research chemical around 2012. It has caused several hospitalizations due to its potency.',
      routes: ['Oral', 'Sublingual'],
      afterEffects: 'Prolonged sedation, amnesia. Withdrawal can be severe.',
      riskLevel: 'high',
      aliases: ['8-bromo-6-(2-fluorophenyl)-1-methyl-4H-[1,2,4]triazolo[4,3-a][1,4]benzodiazepine']
    },
  {
      id: 'bromazepam',
      name: 'Bromazepam',
      commonNames: ['Lexotan', 'Lexomil', 'Bromo', 'Bromies'],
      category: 'depressants',
      class: 'Benzodiazepine',
      description: 'Bromazepam is an intermediate-acting benzodiazepine used primarily for anxiety. It is particularly effective for somatic manifestations of anxiety and has less sedation than some other benzodiazepines.',
      effects: {
        positive: ['Anxiety relief', 'Muscle relaxation', 'Improved sleep', 'Less sedating than other benzos'],
        neutral: ['Mild sedation', 'Impaired coordination', 'Memory effects'],
        negative: ['Addiction potential', 'Withdrawal symptoms', 'Cognitive impairment with long-term use', 'Overdose risk with other depressants']
      },
      dosage: {
        threshold: '1.5-3mg',
        light: '3-6mg',
        common: '6-12mg',
        strong: '12-18mg',
        heavy: '18mg+'
      },
      duration: {
        onset: '30-60 minutes',
        comeup: '1-2 hours',
        peak: '2-3 hours',
        offset: '4-8 hours',
        total: '8-12 hours'
      },
      interactions: ['Alcohol', 'Opioids', 'Other benzodiazepines', 'CNS depressants'],
      harmReduction: [
        'Less sedating but still carries addiction risk',
        'Never combine with alcohol or opioids',
        'Taper gradually when discontinuing',
        'Not available in the US but common in Europe',
        'Avoid long-term daily use'
      ],
      legality: 'Prescription only. Not available in the US. Available in Europe, Canada, and other countries.',
      chemistry: {
        formula: 'C14H10BrN3O',
        molecularWeight: '316.15 g/mol',
        class: 'Benzodiazepine'
      },
      history: 'Bromazepam was developed in the 1960s and has been used medically since 1974. It is popular in Europe.',
      routes: ['Oral'],
      afterEffects: 'Less hangover than some benzodiazepines. Withdrawal similar to other benzos.',
      riskLevel: 'moderate',
      aliases: ['7-bromo-5-pyridin-2-yl-1,3-dihydro-2H-1,4-benzodiazepin-2-one']
    },
  {
      id: 'nitrazepam',
      name: 'Nitrazepam',
      commonNames: ['Mogadon', 'Nitrados', 'Nitrosun', 'Nitzies'],
      category: 'depressants',
      class: 'Benzodiazepine',
      description: 'Nitrazepam is a long-acting benzodiazepine used primarily for insomnia. It has a relatively long half-life of 15-38 hours, which can cause next-day sedation. Nitrazepam is also used for seizures in some cases.',
      effects: {
        positive: ['Sleep induction', 'Sleep maintenance', 'Anxiety relief', 'Seizure control'],
        neutral: ['Sedation', 'Impaired coordination', 'Memory impairment', 'Next-day drowsiness'],
        negative: ['Addiction potential', 'Withdrawal syndrome', 'Falls in elderly', 'Respiratory depression', 'Long half-life']
      },
      dosage: {
        threshold: '2.5-5mg',
        light: '5-10mg',
        common: '10-20mg',
        strong: '20-30mg',
        heavy: '30mg+'
      },
      duration: {
        onset: '20-50 minutes',
        comeup: '30-60 minutes',
        peak: '1-2 hours',
        offset: '8-12 hours',
        total: '12-24 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '2.5-5mg',
              light: '5-10mg',
              common: '10-20mg',
              strong: '20-30mg',
              heavy: '30mg'
          },
          duration: {
              onset: '20-50 minutes',
              comeup: '30-60 minutes',
              peak: '1-2 hours',
              offset: '8-12 hours',
              total: '12-24 hours'
          },
          notes: 'Most common route for this substance.'
      }
  },
      interactions: ['Alcohol', 'Opioids', 'Other benzodiazepines', 'CNS depressants', 'Cimetidine'],
      harmReduction: [
        'Long half-life can cause next-day impairment',
        'Never combine with alcohol or opioids',
        'Caution in elderly - fall risk',
        'Taper gradually when discontinuing',
        'Not available in the US'
      ],
      legality: 'Prescription only. Not available in the US. Available in UK, Australia, and other countries.',
      chemistry: {
        formula: 'C15H11N3O3',
        molecularWeight: '281.27 g/mol',
        class: 'Nitrobenzodiazepine'
      },
      history: 'Nitrazepam was first synthesized in the 1950s and has been used medically since 1965.',
      routes: ['Oral'],
      afterEffects: 'Next-day drowsiness common. Withdrawal similar to other benzodiazepines.',
      riskLevel: 'moderate',
      aliases: ['7-nitro-5-phenyl-1,3-dihydro-2H-1,4-benzodiazepin-2-one']
    },
  {
      id: 'flunitrazolam',
      name: 'Flunitrazolam',
      commonNames: ['FNTZ', 'Fluni-T'],
      category: 'depressants',
      class: 'Benzodiazepine',
      description: 'Flunitrazolam is an extremely potent designer benzodiazepine combining features of flunitrazepam and triazolam. It is active in microgram doses and has no approved medical use. Flunitrazolam is known for causing profound amnesia.',
      effects: {
        positive: ['Extreme sedation', 'Anxiety relief', 'Muscle relaxation'],
        neutral: ['Profound amnesia', 'Impaired coordination', 'Long duration'],
        negative: ['Very high overdose risk', 'Complete blackouts', 'High addiction potential', 'Respiratory depression', 'Dangerous withdrawal']
      },
      dosage: {
        threshold: '0.05-0.1mg',
        light: '0.1-0.25mg',
        common: '0.25-0.5mg',
        strong: '0.5-1mg',
        heavy: '1mg+'
      },
      duration: {
        onset: '10-30 minutes',
        comeup: '20-45 minutes',
        peak: '1-2 hours',
        offset: '4-8 hours',
        total: '6-12 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '0.1-0.1mg',
              light: '0.1-0.3mg',
              common: '0.3-0.5mg',
              strong: '0.5-1mg',
              heavy: '1mg'
          },
          duration: {
              onset: '10-30 minutes',
              comeup: '20-45 minutes',
              peak: '1-2 hours',
              offset: '4-8 hours',
              total: '6-12 hours'
          },
          notes: 'Most common route for this substance.'
      },
      Sublingual: {
          dosage: {
              threshold: '0-0.1mg',
              light: '0.1-0.2mg',
              common: '0.2-0.4mg',
              strong: '0.4-0.9mg',
              heavy: '0.9mg'
          },
          duration: {
              onset: '10-20 minutes',
              comeup: '20-40 minutes',
              peak: '1-2 hours',
              offset: '4-8 hours',
              total: '6-12 hours'
          },
          notes: 'Faster onset than oral. Good bioavailability. Held under tongue.'
      }
  },
      interactions: ['Alcohol (extremely dangerous)', 'Opioids', 'Other benzodiazepines', 'All CNS depressants'],
      harmReduction: [
        'ONE OF THE MOST POTENT BENZODIAZEPINES',
        'Active at microgram doses - volumetric dosing essential',
        'Can cause complete blackouts',
        'Never combine with any other depressants',
        'High risk of accidental overdose',
        'No medical use - limited safety data'
      ],
      legality: 'Unscheduled at US federal level. May be prosecuted under Federal Analogue Act. Controlled in some US states. Not approved for medical use.',
      chemistry: {
        formula: 'C17H13FN6O2',
        molecularWeight: '352.32 g/mol',
        class: 'Triazolobenzodiazepine'
      },
      history: 'Flunitrazolam appeared as a research chemical in the 2010s. It is notable for its extreme potency.',
      routes: ['Oral', 'Sublingual'],
      afterEffects: 'Prolonged sedation, amnesia. Severe withdrawal risk.',
      riskLevel: 'high',
      aliases: ['6-(2-fluorophenyl)-1-methyl-8-nitro-4H-[1,2,4]triazolo[4,3-a][1,4]benzodiazepine']
    },
  {
      id: 'deschloroetizolam',
      name: 'Deschloroetizolam',
      commonNames: ['DCE', 'Etizolam-2', 'DCZ'],
      category: 'depressants',
      class: 'Thienodiazepine',
      description: 'Deschloroetizolam is a designer thienodiazepine closely related to etizolam, missing the chlorine atom. It has similar effects to etizolam but with a longer duration and slightly lower potency.',
      effects: {
        positive: ['Anxiety relief', 'Sedation', 'Muscle relaxation', 'Sleep induction'],
        neutral: ['Amnesia', 'Impaired coordination', 'Dizziness'],
        negative: ['Addiction potential', 'Withdrawal symptoms', 'Longer duration than etizolam', 'Overdose risk with depressants']
      },
      dosage: {
        threshold: '0.5-1mg',
        light: '1-2mg',
        common: '2-4mg',
        strong: '4-6mg',
        heavy: '6mg+'
      },
      duration: {
        onset: '20-45 minutes',
        comeup: '30-60 minutes',
        peak: '1-3 hours',
        offset: '4-8 hours',
        total: '8-14 hours'
      },
      interactions: ['Alcohol', 'Opioids', 'Other benzodiazepines', 'CNS depressants'],
      harmReduction: [
        'Longer duration than etizolam - plan accordingly',
        'Never combine with alcohol or opioids',
        'Use volumetric dosing for accuracy',
        'Can cause significant amnesia',
        'No approved medical use'
      ],
      legality: 'Unscheduled at US federal level. May be prosecuted under Federal Analogue Act. Controlled in some US states. Not approved for medical use.',
      chemistry: {
        formula: 'C17H15N4S',
        molecularWeight: '307.39 g/mol',
        class: 'Thienodiazepine'
      },
      history: 'Deschloroetizolam appeared as a research chemical alternative to etizolam around 2014.',
      routes: ['Oral', 'Sublingual'],
      afterEffects: 'Sedation, possible amnesia. Withdrawal similar to etizolam.',
      riskLevel: 'moderate',
      aliases: ['2-ethyl-9-methyl-6-phenyl-4H-thieno[3,2-f][1,2,4]triazolo[4,3-a][1,4]diazepine']
    },
  {
      id: 'metizolam',
      name: 'Metizolam',
      commonNames: ['MTZ', 'Methylizolam'],
      category: 'depressants',
      class: 'Thienodiazepine',
      description: 'Metizolam is a designer thienodiazepine related to etizolam. It is the N-methyl analog of deschloroetizolam. Metizolam has similar effects to etizolam but with lower potency.',
      effects: {
        positive: ['Anxiety relief', 'Sedation', 'Muscle relaxation'],
        neutral: ['Amnesia', 'Impaired coordination', 'Dizziness'],
        negative: ['Addiction potential', 'Withdrawal symptoms', 'Overdose risk with other depressants']
      },
      dosage: {
        threshold: '1-2mg',
        light: '2-4mg',
        common: '4-8mg',
        strong: '8-12mg',
        heavy: '12mg+'
      },
      duration: {
        onset: '20-45 minutes',
        comeup: '30-60 minutes',
        peak: '1-3 hours',
        offset: '4-8 hours',
        total: '8-12 hours'
      },
      interactions: ['Alcohol', 'Opioids', 'Other benzodiazepines', 'CNS depressants'],
      harmReduction: [
        'Lower potency than etizolam',
        'Never combine with alcohol or opioids',
        'Use accurate measurement',
        'Can cause amnesia',
        'No approved medical use'
      ],
      legality: 'Unscheduled at US federal level. May be prosecuted under Federal Analogue Act. Controlled in some US states. Not approved for medical use.',
      chemistry: {
        formula: 'C16H13N4S',
        molecularWeight: '293.37 g/mol',
        class: 'Thienodiazepine'
      },
      history: 'Metizolam appeared as a research chemical in the 2010s.',
      routes: ['Oral', 'Sublingual'],
      afterEffects: 'Sedation, possible amnesia. Withdrawal similar to other thienodiazepines.',
      riskLevel: 'moderate',
      aliases: ['2-methyl-9-ethyl-6-phenyl-4H-thieno[3,2-f][1,2,4]triazolo[4,3-a][1,4]diazepine']
    },
  {
      id: 'pyrazolam',
      name: 'Pyrazolam',
      commonNames: ['PZM', 'Pyraz'],
      category: 'depressants',
      class: 'Benzodiazepine',
      description: 'Pyrazolam is a designer benzodiazepine developed in the 1970s but never marketed. It is known for being highly selective for α1 and α5 GABA-A subunits, giving it strong anxiolytic effects with relatively less sedation.',
      effects: {
        positive: ['Strong anxiety relief', 'Less sedation than other benzos', 'Muscle relaxation'],
        neutral: ['Mild sedation', 'Impaired coordination', 'Memory effects'],
        negative: ['Addiction potential', 'Withdrawal symptoms', 'Can still cause overdose with other depressants']
      },
      dosage: {
        threshold: '0.5-1mg',
        light: '1-2mg',
        common: '2-4mg',
        strong: '4-6mg',
        heavy: '6mg+'
      },
      duration: {
        onset: '30-60 minutes',
        comeup: '1-2 hours',
        peak: '2-3 hours',
        offset: '3-6 hours',
        total: '6-8 hours'
      },
      interactions: ['Alcohol', 'Opioids', 'Other benzodiazepines', 'CNS depressants'],
      harmReduction: [
        'Less sedating but still addictive',
        'Never combine with alcohol or opioids',
        'Primarily anxiolytic with less sedation',
        'Use accurate measurement',
        'No approved medical use'
      ],
      legality: 'Unscheduled at US federal level. May be prosecuted under Federal Analogue Act. Controlled in some US states. Not approved for medical use.',
      chemistry: {
        formula: 'C16H12BrN5',
        molecularWeight: '354.20 g/mol',
        class: 'Benzodiazepine'
      },
      history: 'Pyrazolam was developed in the 1970s but never marketed. It appeared as a research chemical around 2012.',
      routes: ['Oral', 'Sublingual'],
      afterEffects: 'Less hangover than some benzodiazepines. Withdrawal similar to other benzos.',
      riskLevel: 'moderate',
      aliases: ['8-bromo-1-methyl-6-phenyl-4H-[1,2,4]triazolo[4,3-a][1,4]benzodiazepine']
    },
  {
      id: 'lormetazepam',
      name: 'Lormetazepam',
      commonNames: ['Noctamid', 'Lormeta', 'Lorm'],
      category: 'depressants',
      class: 'Benzodiazepine',
      description: 'Lormetazepam is a short to intermediate-acting benzodiazepine used for insomnia. It is the N-methylated analog of lorazepam and has similar properties with a slightly shorter duration.',
      effects: {
        positive: ['Sleep induction', 'Anxiety relief', 'Muscle relaxation'],
        neutral: ['Sedation', 'Impaired coordination', 'Memory impairment'],
        negative: ['Addiction potential', 'Withdrawal symptoms', 'Daytime drowsiness', 'Overdose risk with other depressants']
      },
      dosage: {
        threshold: '0.5-1mg',
        light: '1-2mg',
        common: '2-4mg',
        strong: '4-6mg',
        heavy: '6mg+'
      },
      duration: {
        onset: '15-45 minutes',
        comeup: '30-60 minutes',
        peak: '1-2 hours',
        offset: '4-8 hours',
        total: '6-12 hours'
      },
      interactions: ['Alcohol', 'Opioids', 'Other benzodiazepines', 'CNS depressants'],
      harmReduction: [
        'Use only when you have time for full sleep',
        'Never combine with alcohol or opioids',
        'Can cause next-day drowsiness',
        'Taper gradually when discontinuing',
        'Not available in the US'
      ],
      legality: 'Prescription only. Not available in the US. Available in Europe and other countries.',
      chemistry: {
        formula: 'C16H12Cl2N2O2',
        molecularWeight: '335.18 g/mol',
        class: 'Benzodiazepine'
      },
      history: 'Lormetazepam was developed in the 1960s and has been used medically since the 1970s.',
      routes: ['Oral'],
      afterEffects: 'Possible morning drowsiness. Withdrawal similar to other benzodiazepines.',
      riskLevel: 'moderate',
      aliases: ['6-chloro-5-(2-chlorophenyl)-3-hydroxy-1-methyl-1,3-dihydro-2H-1,4-benzodiazepin-2-one']
    },
  {
      id: 'nifoxipam',
      name: 'Nifoxipam',
      commonNames: ['NFX', 'N-Desmethylflunitrazepam'],
      category: 'depressants',
      class: 'Benzodiazepine',
      description: 'Nifoxipam is a designer benzodiazepine that is the 3-hydroxy metabolite of flunitrazepam. It has similar effects to flunitrazepam but is less potent. Nifoxipam has no approved medical use.',
      effects: {
        positive: ['Sedation', 'Anxiety relief', 'Sleep induction'],
        neutral: ['Amnesia', 'Impaired coordination', 'Long duration'],
        negative: ['Addiction potential', 'Withdrawal symptoms', 'Overdose risk with other depressants']
      },
      dosage: {
        threshold: '0.5-1mg',
        light: '1-2mg',
        common: '2-4mg',
        strong: '4-6mg',
        heavy: '6mg+'
      },
      duration: {
        onset: '20-45 minutes',
        comeup: '30-90 minutes',
        peak: '1-3 hours',
        offset: '4-8 hours',
        total: '8-12 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '0.5-1mg',
              light: '1-2mg',
              common: '2-4mg',
              strong: '4-6mg',
              heavy: '6mg'
          },
          duration: {
              onset: '20-45 minutes',
              comeup: '30-90 minutes',
              peak: '1-3 hours',
              offset: '4-8 hours',
              total: '8-12 hours'
          },
          notes: 'Most common route for this substance.'
      },
      Sublingual: {
          dosage: {
              threshold: '0.4-0.9mg',
              light: '0.9-1.7mg',
              common: '1.7-3.4mg',
              strong: '3.4-5.1mg',
              heavy: '5.1mg'
          },
          duration: {
              onset: '10-20 minutes',
              comeup: '20-40 minutes',
              peak: '1-3 hours',
              offset: '4-8 hours',
              total: '8-12 hours'
          },
          notes: 'Faster onset than oral. Good bioavailability. Held under tongue.'
      }
  },
      interactions: ['Alcohol', 'Opioids', 'Other benzodiazepines', 'CNS depressants'],
      harmReduction: [
        'Related to flunitrazepam - can cause amnesia',
        'Never combine with alcohol or opioids',
        'Use accurate measurement',
        'Limited research available',
        'No approved medical use'
      ],
      legality: 'Unscheduled at US federal level. May be prosecuted under Federal Analogue Act. Controlled in some countries. Not approved for medical use.',
      chemistry: {
        formula: 'C15H10FN3O4',
        molecularWeight: '315.26 g/mol',
        class: 'Nitrobenzodiazepine'
      },
      history: 'Nifoxipam appeared as a research chemical in the 2010s.',
      routes: ['Oral', 'Sublingual'],
      afterEffects: 'Sedation, possible amnesia. Withdrawal similar to other benzodiazepines.',
      riskLevel: 'moderate',
      aliases: ['5-(2-fluorophenyl)-3-hydroxy-7-nitro-1,3-dihydro-2H-1,4-benzodiazepin-2-one']
    },

    // ============================================
    // STIMULANTS
    // ============================================
];
