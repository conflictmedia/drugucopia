// Depressants Substances

import type { Substance } from '../types';

export const depressants: Substance[] = [
  {
      id: 'alcohol',
      name: 'Alcohol',
      commonNames: ['Ethanol', 'Booze', 'Liquor', 'Beer', 'Wine', 'Spirits'],
      category: 'depressants',
      class: 'Depressant',
      description: 'Alcohol (ethanol) is a central nervous system depressant that acts primarily by binding to GABA receptors and inhibiting NMDA glutamate receptors. It causes dose-dependent effects ranging from social disinhibition and euphoria to ataxia, sedation, and respiratory depression. Chronic use causes severe physical dependence.',
      effects: {
        positive: ['Relaxation', 'Social disinhibition', 'Euphoria', 'Anxiolysis'],
        neutral: ['Slurred speech', 'Flushing', 'Drowsiness', 'Impaired coordination (Ataxia)'],
        negative: ['Nausea/Vomiting', 'Blackouts (Amnesia)', 'Respiratory depression', 'Dehydration', 'Hangover', 'Liver damage', 'Violent behavior']
      },
      dosage: {
        threshold: '10-15ml pure ethanol',
        light: '15-30ml',
        common: '30-60ml',
        strong: '60-100ml',
        heavy: '100ml+'
      },
      routeData: {
        Oral: {
            dosage: {
                threshold: '0.5-1 Drink',
                light: '1-2 Drinks',
                common: '2-4 Drinks',
                strong: '4-7 Drinks',
                heavy: '7+ Drinks'
            },
            duration: {
                onset: '15-30 minutes',
                comeup: '30-45 minutes',
                peak: '45-90 minutes',
                offset: '2-4 hours',
                total: '3-6 hours'
            },
            notes: '1 Standard Drink = ~14g pure ethanol (12oz beer, 5oz wine, 1.5oz spirits). Food slows absorption significantly.'
        }
    },
      interactions: ['Benzodiazepines (Blackout/Death risk)', 'Opioids (Fatal respiratory depression)', 'GHB (Fatal)', 'Cocaine (Forms Cocaethylene - toxic)', 'Ketamine (Nausea/Spinning)'],
      harmReduction: [
        'Drink water between alcoholic beverages',
        'Eat food before drinking to slow absorption',
        'Know the "Recovery Position" in case someone passes out',
        'Never drive',
        'Avoid mixing with other depressants'
      ],
      legality: 'Legal (Age restricted 18+ or 21+).',
      chemistry: {
        formula: 'C2H6O',
        molecularWeight: '46.07 g/mol',
        class: 'Alcohol'
      },
      history: 'Prehistoric origin. Fermentation residues found from 7000 BCE.',
      routes: ['Oral'],
      afterEffects: 'Hangover (headache, nausea, anxiety), dehydration.',
      riskLevel: 'moderate',
      aliases: ['ethanol', 'ethyl alcohol']
    },
  {
      id: 'ghb',
      name: 'GHB',
      commonNames: ['G', 'Liquid G', 'Fantasy', 'Gina', 'Georgia Home Boy'],
      category: 'depressants',
      class: 'Neurotransmitter/Depressant',
      description: 'GHB (Gamma-Hydroxybutyrate) is a CNS depressant naturally occurring in the brain. It acts on the GHB receptor (stimulating) and GABA-B receptor (sedating). At low doses, it causes alcohol-like disinhibition and empathy (often called "Liquid Ecstasy"). At higher doses, it causes unrousable sleep ("G-Nap"). The dose-response curve is extremely steep.',
      effects: {
        positive: ['Euphoria', 'Empathy', 'Aphrodisiac effects', 'Disinhibition', 'Deep sleep'],
        neutral: ['Drowsiness', 'Dizziness'],
        negative: ['Unconsciousness ("G-ing out")', 'Nausea/Vomiting', 'Respiratory depression', 'Seizures (rare)', 'Bradychardia']
      },
      dosage: {
        threshold: '0.5-1g',
        light: '1-1.5g',
        common: '1.5-2.5g',
        strong: '2.5-3.5g',
        heavy: '3.5g+ (Risk of unconsciousness)'
      },
      routeData: {
        Oral: {
            dosage: {
                threshold: '0.5g',
                light: '1-1.5g',
                common: '1.5-2.5g',
                strong: '2.5-3.5g',
                heavy: '3.5g+'
            },
            duration: {
                onset: '10-20 minutes',
                comeup: '15-30 minutes',
                peak: '45-90 minutes',
                offset: '1.5-2.5 hours',
                total: '2-4 hours'
            },
            notes: 'Usually liquid. Concentration varies wildly (know your mg/ml). steep dose curve.'
        }
    },
      interactions: ['Alcohol (FATAL - most common cause of GHB death)', 'Benzodiazepines', 'Opioids', 'Ketamine'],
      harmReduction: [
        'NEVER mix with alcohol',
        'Use a pipette/syringe to measure exact ml',
        'Wait at least 2 hours before redosing',
        'If someone "G-outs", keep them on their side (recovery position) to prevent choking on vomit',
        'Dye your G blue/food coloring so it isn\'t mistaken for water'
      ],
      legality: 'Schedule I (Illicit) / Schedule III (Xyrem prescription) in US.',
      chemistry: {
        formula: 'C4H8O3',
        molecularWeight: '104.1 g/mol',
        class: 'Short-chain fatty acid'
      },
      history: 'Synthesized 1874. Used as anesthetic in 1960s. Sold at GNC as supplement in 1980s. Banned 2000.',
      routes: ['Oral'],
      afterEffects: 'Dopamine rebound (wakefulness/anxiety) after wearing off.',
      riskLevel: 'high',
      aliases: ['sodium oxybate', 'xyrem']
    },
  {
      id: 'gbl',
      name: 'GBL',
      commonNames: ['Wheel Cleaner', 'GBL', 'Comma'],
      category: 'depressants',
      class: 'Prodrug',
      description: 'GBL (Gamma-Butyrolactone) is a chemical solvent that converts into GHB in the body via lactonase enzymes. It is more potent by weight and has a faster onset than GHB. It is distinctively damaging to plastics and tastes chemically harsh/acrid.',
      effects: {
        positive: ['Euphoria', 'Aphrodisiac', 'Relaxation'],
        neutral: ['Sedation'],
        negative: ['Chemical burns (undiluted)', 'Nausea', 'Unconsciousness', 'Dependence (24/7 dosing)']
      },
      dosage: {
        threshold: '0.3-0.5ml',
        light: '0.5-1.0ml',
        common: '1.0-1.5ml',
        strong: '1.5-2.0ml',
        heavy: '2.0ml+ (Overdose risk)'
      },
      routeData: {
        Oral: {
             dosage: {
                threshold: '0.3ml',
                light: '0.5-0.9ml',
                common: '1.0-1.5ml',
                strong: '1.5-2.0ml',
                heavy: '2.0ml+'
            },
            duration: {
                onset: '10-15 minutes',
                comeup: '15-25 minutes',
                peak: '45-60 minutes',
                offset: '1-2 hours',
                total: '2-3 hours'
            },
            notes: 'MUST BE DILUTED. Pure GBL melts plastic and burns the throat. Converts to GHB in blood.'
        }
    },
      interactions: ['Alcohol (Fatal)', 'Depressants'],
      harmReduction: [
        'Dilute in a full glass of juice/soda',
        'Do not store in plastic cups/bottles (it will melt them)',
        'Dose is lower than GHB - be precise',
        'Addiction leads to severe withdrawal (delirium, tremors)'
      ],
      legality: 'List I Chemical (US). Controlled analogue.',
      chemistry: {
        formula: 'C4H6O2',
        molecularWeight: '86.09 g/mol',
        class: 'Lactone'
      },
      history: 'Industrial solvent used to clean rims/remove graffiti. Abused as GHB substitute.',
      routes: ['Oral'],
      afterEffects: 'Dopamine rebound.',
      riskLevel: 'high',
      aliases: ['gamma-butyrolactone']
    },
  {
      id: '1-4-butanediol',
      name: '1,4-Butanediol',
      commonNames: ['BDO', '1,4-B', 'One Comma Four'],
      category: 'depressants',
      class: 'Prodrug',
      description: '1,4-BDO is an industrial solvent that metabolizes into GHB via the enzyme Alcohol Dehydrogenase. Because it uses the same enzyme as alcohol, combining them is unpredictable and extremely dangerous. It has a slower onset than GHB/GBL and freezes at room temperature (20°C).',
      effects: {
        positive: ['Euphoria', 'Relaxation'],
        neutral: ['Drowsiness'],
        negative: ['Nausea (harder on stomach than GHB)', 'Unconsciousness', 'Toxic metabolites (aldehyde)']
      },
      dosage: {
        threshold: '0.5ml',
        light: '1.0ml',
        common: '1.5-2.5ml',
        strong: '2.5-3.5ml',
        heavy: '3.5ml+'
      },
      routeData: {
        Oral: {
             dosage: {
                threshold: '0.5ml',
                light: '1.0ml',
                common: '1.5-2.5ml',
                strong: '2.5-3.5ml',
                heavy: '3.5ml+'
            },
            duration: {
                onset: '30-60 minutes',
                comeup: '45-90 minutes',
                peak: '1.5-3 hours',
                offset: '2-3 hours',
                total: '3-5 hours'
            },
            notes: 'Variable onset depending on individual enzyme levels. Long duration.'
        }
    },
      interactions: ['Alcohol (Enzyme competition creates unpredictable toxicity and delayed overdose)', 'Depressants'],
      harmReduction: [
        'If it is frozen/solid, warm gently to liquefy and shake before measuring',
        'Do not drink alcohol before or after',
        'Tastes like plastic/chemical'
      ],
      legality: 'Federal Analogue (US). Industrial chemical.',
      chemistry: {
        formula: 'C4H10O2',
        molecularWeight: '90.12 g/mol',
        class: 'Diol'
      },
      history: 'Plastics manufacturing precursor.',
      routes: ['Oral'],
      afterEffects: 'Grogginess.',
      riskLevel: 'high',
      aliases: ['1,4-B', 'BDO']
    },
  {
      id: 'alprazolam',
      name: 'Alprazolam',
      commonNames: ['Xanax', 'Bars', 'Xans', 'Footballs'],
      category: 'depressants',
      class: 'Benzodiazepine',
      description: 'Alprazolam is a potent, short-acting benzodiazepine used for panic disorders. It binds to GABA-A receptors. It is notorious for causing "bartard" behavior (blackouts, stealing, disinhibited stupidity) and having a very harsh withdrawal profile.',
      effects: {
        positive: ['Anxiety elimination', 'Muscle relaxation', 'Sleep'],
        neutral: ['Amnesia', 'Time travel (blackouts)', 'Slurring'],
        negative: ['Delusions of sobriety', 'Blackouts', 'Rebound anxiety', 'Seizures (withdrawal)', 'Aggression (paradoxical)']
      },
      dosage: {
        threshold: '0.25mg',
        light: '0.25-0.5mg',
        common: '0.5-1.5mg',
        strong: '1.5-2mg',
        heavy: '2mg+'
      },
      routeData: {
        Oral: {
             dosage: {
                threshold: '0.25mg',
                light: '0.5mg',
                common: '1.0mg',
                strong: '2.0mg',
                heavy: '2mg+'
            },
            duration: {
                onset: '15-30 minutes',
                comeup: '30-45 minutes',
                peak: '1-2 hours',
                offset: '2-4 hours',
                total: '5-8 hours'
            },
            notes: 'Bitter taste. Street "bars" are often pressed with Flualprazolam, Etizolam, or Fentanyl.'
        }
    },
      interactions: ['Alcohol (Blackout city)', 'Opioids (Respiratory arrest)', 'Ketamine', 'Grapefruit Juice'],
      harmReduction: [
        'Delusions of sobriety lead to redosing—track your doses',
        'Do not drive',
        'Withdrawal can be fatal (seizures)—taper off slowly',
        'Test pressed pills for Fentanyl'
      ],
      legality: 'Schedule IV (US).',
      chemistry: {
        formula: 'C17H13ClN4',
        molecularWeight: '308.76 g/mol',
        class: 'Triazolobenzodiazepine'
      },
      history: 'Patented 1971. Approved 1981.',
      routes: ['Oral', 'Sublingual'],
      afterEffects: 'Rebound anxiety, memory loss.',
      riskLevel: 'high',
      aliases: ['xanax']
    },
  {
      id: 'etizolam',
      name: 'Etizolam',
      commonNames: ['Etiz', 'Etilaam', 'Etizest'],
      category: 'depressants',
      class: 'Thienodiazepine',
      description: 'Etizolam is a benzene ring analogue (thienodiazepine) where the benzene ring is replaced by a thiophene ring. It is shorter acting and less sedating than Xanax for some, but produces significant euphoria and anxiolysis. "Reverse tolerance" is sometimes reported.',
      effects: {
        positive: ['Euphoria', 'Anxiety relief', 'Mood lift'],
        neutral: ['Blepharospasm (eye twitching) with chronic use'],
        negative: ['Blackouts', 'Dependence', 'Compulsive redosing']
      },
      dosage: {
        threshold: '0.2mg',
        light: '0.5mg',
        common: '1-2mg',
        strong: '2-3mg',
        heavy: '3mg+'
      },
      routeData: {
        Oral: {
             dosage: {
                threshold: '0.2mg',
                light: '0.5-1.0mg',
                common: '1.0-2.0mg',
                strong: '2.0-3.0mg',
                heavy: '3.0mg+'
            },
            duration: {
                onset: '15-30 minutes',
                comeup: '30-45 minutes',
                peak: '1-2 hours',
                offset: '2-3 hours',
                total: '5-7 hours'
            },
            notes: 'Does not taste bitter like Alprazolam.'
        }
    },
      interactions: ['Alcohol', 'Opioids'],
      harmReduction: [
        'Cross-tolerance with benzodiazepines exists',
        'Do not mix with other depressants',
        'Rapid physical dependence'
      ],
      legality: 'Schedule I (US - some states), Schedule IV (Internationally).',
      chemistry: {
        formula: 'C17H15ClN4S',
        molecularWeight: '342.07 g/mol',
        class: 'Thienodiazepine'
      },
      history: 'Approved in Japan/Italy/India. RC in US.',
      routes: ['Oral', 'Sublingual'],
      afterEffects: 'Rebound anxiety.',
      riskLevel: 'high',
      aliases: ['depas']
    },
  {
      id: 'clonazepam',
      name: 'Clonazepam',
      commonNames: ['Klonopin', 'K-Pins', 'Rivotril'],
      category: 'depressants',
      class: 'Benzodiazepine',
      description: 'Clonazepam is a potent, long-acting benzodiazepine. It is very effective for generalized anxiety and preventing seizures. Because of its long half-life (30-40 hours), it doesn\'t produce the "rush" of Xanax, but accumulation in the body is a major risk.',
      effects: {
        positive: ['Long-lasting anxiety relief', 'Muscle relaxation'],
        neutral: ['Amnesia'],
        negative: ['Depression', 'Severe withdrawal', 'Motor impairment']
      },
      dosage: {
        threshold: '0.25mg',
        light: '0.25-0.5mg',
        common: '0.5-1.0mg',
        strong: '1.0-2.0mg',
        heavy: '2.0mg+'
      },
      routeData: {
        Oral: {
             dosage: {
                threshold: '0.25mg',
                light: '0.5mg',
                common: '1.0mg',
                strong: '2.0mg',
                heavy: '3mg+'
            },
            duration: {
                onset: '20-45 minutes',
                comeup: '1-2 hours',
                peak: '2-4 hours',
                offset: '8-12 hours',
                total: '8-12 hours (Effects), 1-3 Days (Half-life)'
            },
            notes: 'Taste is minty.'
        }
    },
      interactions: ['Alcohol', 'Opioids'],
      harmReduction: [
        'Do not redose daily; levels build up in blood leading to unintentional blackout days later',
        'Tapering is mandatory'
      ],
      legality: 'Schedule IV (US).',
      chemistry: {
        formula: 'C15H10ClN3O3',
        molecularWeight: '315.71 g/mol',
        class: 'Nitrobenzodiazepine'
      },
      history: 'Patented 1964.',
      routes: ['Oral'],
      afterEffects: 'Grogginess, depression.',
      riskLevel: 'moderate',
      aliases: ['klonopin']
    },
  {
      id: 'diazepam',
      name: 'Diazepam',
      commonNames: ['Valium', 'Vallies', 'Blues'],
      category: 'depressants',
      class: 'Benzodiazepine',
      description: 'Diazepam is the "gold standard" benzodiazepine. It has a rapid onset but a very long duration due to active metabolites (nordazepam). It has excellent muscle relaxant properties and is used to taper people off other benzos/alcohol.',
      effects: {
        positive: ['Muscle relaxation', 'Anxiolysis', 'Calm'],
        neutral: ['Sedation'],
        negative: ['Accumulation', 'Depression']
      },
      dosage: {
        threshold: '2.5mg',
        light: '2.5-5mg',
        common: '5-15mg',
        strong: '15-30mg',
        heavy: '30mg+'
      },
      routeData: {
        Oral: {
             dosage: {
                threshold: '2mg',
                light: '5-10mg',
                common: '10-20mg',
                strong: '20-40mg',
                heavy: '40mg+'
            },
            duration: {
                onset: '15-30 minutes',
                comeup: '30-60 minutes',
                peak: '1 hour',
                offset: '12-24 hours',
                total: '12-24 hours+'
            },
            notes: 'Metabolites stay in system for up to 200 hours.'
        }
    },
      interactions: ['Alcohol', 'Opioids'],
      harmReduction: [
        'Ideal for tapering',
        'Long half-life means one dose affects you for days'
      ],
      legality: 'Schedule IV (US).',
      chemistry: {
        formula: 'C16H13ClN2O',
        molecularWeight: '284.7 g/mol',
        class: 'Benzodiazepine'
      },
      history: 'Synthesized 1959. Top selling drug 1968-1982.',
      routes: ['Oral', 'IV', 'Rectal'],
      afterEffects: 'Lethargy.',
      riskLevel: 'moderate',
      aliases: ['valium']
    },
  {
      id: 'clonazolam',
      name: 'Clonazolam',
      commonNames: ['Clam', 'C-Lam'],
      category: 'depressants',
      class: 'Benzodiazepine',
      description: 'Clonazolam is one of the most potent and dangerous designer benzodiazepines. It is the triazolo-analogue of Clonazepam. Active in microgram ranges, it produces extreme euphoria (for a benzo) and massive amnesia. Tolerance builds incredibly fast, and withdrawal is notably severe.',
      effects: {
        positive: ['Strong euphoria', 'Anxiety annihilation', 'Muscle relaxation'],
        neutral: ['Complete amnesia (Blackout)', 'Delusions of sobriety'],
        negative: ['Seizures (withdrawal and overdose)', 'Unconscious behavior', 'Rapid tolerance', 'Death (when mixed)']
      },
      dosage: {
        threshold: '0.05mg (50μg)',
        light: '0.1-0.2mg',
        common: '0.2-0.4mg',
        strong: '0.5-1.0mg',
        heavy: '1.0mg+ (Blackout likely)'
      },
      routeData: {
        Oral: {
             dosage: {
                threshold: '0.1mg',
                light: '0.2mg',
                common: '0.4-0.5mg',
                strong: '0.8mg',
                heavy: '1mg+'
            },
            duration: {
                onset: '15-30 minutes',
                comeup: '30-60 minutes',
                peak: '1.5-3 hours',
                offset: '6-10 hours',
                total: '8-14 hours'
            },
            notes: 'EXTREMELY POTENT. Do not eyeball powder. Volumetric dosing required.'
        }
    },
      interactions: ['Alcohol (Blackout/Death)', 'Opioids', 'Depressants'],
      harmReduction: [
        'Avoid if possible - destroys tolerance to other benzos',
        'If using, keep doses <0.25mg',
        'Delusions of sobriety are extreme - you will think you are sober while stumbling/slurring',
        'Hide your stash from yourself after dosing'
      ],
      legality: 'Schedule I (US - some states), Federal Analogue.',
      chemistry: {
        formula: 'C17H12ClN5O2',
        molecularWeight: '353.76 g/mol',
        class: 'Triazolobenzodiazepine'
      },
      history: 'Designer drug appeared ~2014.',
      routes: ['Oral', 'Sublingual'],
      afterEffects: 'Rebound anxiety, seizure risk.',
      riskLevel: 'very-high',
      aliases: ['clam']
    },
  {
      id: 'flubromazolam',
      name: 'Flubromazolam',
      commonNames: ['Flam', 'Flubro'],
      category: 'depressants',
      class: 'Benzodiazepine',
      description: 'Flubromazolam is an ultra-potent, long-lasting designer benzodiazepine. It is notorious for causing multi-day blackouts from a single dose. It is hypnotic (sleep-inducing) rather than functional.',
      effects: {
        positive: ['Sleep', 'Sedation'],
        neutral: ['Amnesia (Lasting days)'],
        negative: ['Unwakeable sleep', 'Respiratory depression', 'Tolerance wrecking']
      },
      dosage: {
        threshold: '0.05mg',
        light: '0.1-0.2mg',
        common: '0.25-0.4mg',
        strong: '0.5mg+',
        heavy: '0.75mg+'
      },
      routeData: {
        Oral: {
             dosage: {
                threshold: '0.1mg',
                light: '0.15-0.25mg',
                common: '0.3-0.5mg',
                strong: '0.6mg+',
                heavy: '1mg'
            },
            duration: {
                onset: '30-60 minutes',
                comeup: '1-2 hours',
                peak: '3-6 hours',
                offset: '12-24 hours',
                total: '18-36 hours'
            },
            notes: 'Active in micrograms. Half-life is extremely long (100+ hours possible).'
        }
    },
      interactions: ['Everything'],
      harmReduction: [
        'Do not take if you have responsibilities in the next 2 days',
        'Volumetric dosing mandatory',
        'Easy to overdose'
      ],
      legality: 'Schedule I (US - some states).',
      chemistry: {
        formula: 'C17H12BrFN4',
        molecularWeight: '375.21 g/mol',
        class: 'Triazolobenzodiazepine'
      },
      history: 'Research chemical ~2013.',
      routes: ['Oral'],
      afterEffects: 'Groggy for days.',
      riskLevel: 'very-high',
      aliases: ['flam']
    },
  {
      id: 'phenibut',
      name: 'Phenibut',
      commonNames: ['Noofen', 'Fenibut'],
      category: 'depressants',
      class: 'Gabapentinoid',
      description: 'Phenibut is a gabapentinoid and GABA-B agonist developed in Russia. It reduces anxiety without significant sedation at normal doses, preserving cognition. At high doses, it acts as a heavy depressant.',
      effects: {
        positive: ['Social anxiety relief', 'Music enhancement', 'Mood lift', 'Motivation'],
        neutral: ['Dizziness'],
        negative: ['Nausea/Vomiting (common at high dose)', 'Addiction', 'Withdrawal (Hellish: insomnia/terror/hallucinations)']
      },
      dosage: {
        threshold: '250mg',
        light: '500-750mg',
        common: '1000-1500mg',
        strong: '1500-2500mg',
        heavy: '2500mg+'
      },
      routeData: {
        Oral: {
             dosage: {
                threshold: '250mg',
                light: '500-1000mg',
                common: '1000-1500mg',
                strong: '1500-2500mg',
                heavy: '2500mg+'
            },
            duration: {
                onset: '1.5-3 hours',
                comeup: '2-4 hours',
                peak: '4-8 hours',
                offset: '6-10 hours',
                total: '12-24 hours'
            },
            notes: 'HCL is acidic (damages teeth). FAA is neutral. Very slow onset - DO NOT REDOSE.'
        }
    },
      interactions: ['Alcohol (Vomiting/Blackout)', 'Benzodiazepines'],
      harmReduction: [
        'Max 1-2 times per week to avoid tolerance',
        'Withdrawal includes "Primal Fear" and insomnia lasting week+',
        'Acidic powder hurts stomach - take with food'
      ],
      legality: 'Unregulated supplement (US). Prescription (Russia/Ukraine).',
      chemistry: {
        formula: 'C10H13NO2',
        molecularWeight: '179.22 g/mol',
        class: 'Gabapentinoid'
      },
      history: 'Developed 1960s USSR for cosmonauts.',
      routes: ['Oral'],
      afterEffects: 'Afterglow or Rebound anxiety.',
      riskLevel: 'moderate',
      aliases: ['beta-phenyl-gaba']
    },
  {
      id: 'gabapentin',
      name: 'Gabapentin',
      commonNames: ['Neurontin', 'Gabbies', 'Johnnies'],
      category: 'depressants',
      class: 'Gabapentinoid',
      description: 'Gabapentin is used for nerve pain and seizures. It affects Voltage-Gated Calcium Channels (VGCC). Absorption is inversely proportional to dose (taking 300mg absorbs better than 1200mg at once). Requires staggering doses.',
      effects: {
        positive: ['Relaxation', 'Mood lift', 'Sociability', 'Closed eye visuals (high dose)'],
        neutral: ['Coordination loss'],
        negative: ['Brain fog', 'Dizziness', 'Withdrawal']
      },
      dosage: {
        threshold: '300mg',
        light: '600-900mg',
        common: '900-1800mg',
        strong: '1800-3000mg',
        heavy: '3000mg+'
      },
      routeData: {
        Oral: {
             dosage: {
                threshold: '300mg',
                light: '600-900mg',
                common: '1200-2400mg',
                strong: '2400mg+',
                heavy: 'Varies'
            },
            duration: {
                onset: '1-1.5 hours',
                comeup: '2 hours',
                peak: '3-5 hours',
                offset: '4-6 hours',
                total: '8-12 hours'
            },
            notes: 'Bioavailability drops as dose increases. Take 300mg every 30 mins with fatty food/soda for recreation.'
        }
    },
      interactions: ['Opioids (Potentiates respiratory depression)', 'Alcohol'],
      harmReduction: [
        'Stagger doses for effect',
        'Taper off',
        'Antacids reduce absorption'
      ],
      legality: 'Prescription (US).',
      chemistry: {
        formula: 'C9H17NO2',
        molecularWeight: '171.24 g/mol',
        class: 'Gabapentinoid'
      },
      history: 'Approved 1993.',
      routes: ['Oral'],
      afterEffects: 'Groggy.',
      riskLevel: 'low',
      aliases: ['neurontin']
    },
  {
      id: 'pregabalin',
      name: 'Pregabalin',
      commonNames: ['Lyrica', 'Buds', 'Pregab'],
      category: 'depressants',
      class: 'Gabapentinoid',
      description: 'Pregabalin is a more potent successor to Gabapentin with much higher bioavailability (>90%). It provides significant euphoria, energy (at onset), and dissociation at high doses. It has a high abuse potential.',
      effects: {
        positive: ['Strong euphoria', 'Energy/Motivation', 'Anxiolysis', 'Dissociation (high dose)'],
        neutral: ['Double vision', 'Drunken stumble', 'Edema (swelling)'],
        negative: ['Seizures (at high doses >600mg)', 'Addiction', 'Severe withdrawal']
      },
      dosage: {
        threshold: '50mg',
        light: '75-150mg',
        common: '200-450mg',
        strong: '450-600mg',
        heavy: '600mg+ (Seizure risk)'
      },
      routeData: {
        Oral: {
             dosage: {
                threshold: '50mg',
                light: '100-200mg',
                common: '300mg',
                strong: '450-600mg',
                heavy: '600mg+'
            },
            duration: {
                onset: '45-90 minutes',
                comeup: '1-2 hours',
                peak: '3-6 hours',
                offset: '4-6 hours',
                total: '8-14 hours'
            },
            notes: 'Empty stomach increases onset speed significantly.'
        }
    },
      interactions: ['Opioids (Fatal)', 'Alcohol', 'Benzodiazepines'],
      harmReduction: [
        'Do not exceed 600mg (seizure threshold lowers)',
        'Tolerance builds instantly',
        'Withdrawal is comparable to Benzos/Opioids',
        'Potentiates opioids dangerously'
      ],
      legality: 'Schedule V (US). Class C (UK).',
      chemistry: {
        formula: 'C8H17NO2',
        molecularWeight: '159.23 g/mol',
        class: 'Gabapentinoid'
      },
      history: 'Approved 2004.',
      routes: ['Oral', 'Insufflation'],
      afterEffects: 'Residual wobbliness.',
      riskLevel: 'moderate',
      aliases: ['lyrica']
    },
  {
      id: 'carisoprodol',
      name: 'Carisoprodol',
      commonNames: ['Soma', 'Dan'],
      category: 'depressants',
      class: 'Carbamate',
      description: 'Carisoprodol is a muscle relaxant that metabolizes into Meprobamate (a barbiturate-like sedative). It produces a unique "Soma Coma" euphoria and heavy body relaxation. It is highly addictive and dangerous when mixed.',
      effects: {
        positive: ['Physical euphoria', 'Muscle jelly feeling', 'Anxiety relief'],
        neutral: ['The "Soma Shuffles" (uncontrollable shaking)', 'Slurring'],
        negative: ['Seizures (high doses)', 'Coma', 'Respiratory depression']
      },
      dosage: {
        threshold: '250mg',
        light: '350mg',
        common: '350-700mg',
        strong: '700-1050mg',
        heavy: '1400mg+'
      },
      routeData: {
        Oral: {
             dosage: {
                threshold: '250mg',
                light: '350mg',
                common: '500-750mg',
                strong: '1000mg',
                heavy: '1000mg+'
            },
            duration: {
                onset: '20-40 minutes',
                comeup: '30-45 minutes',
                peak: '1-2 hours',
                offset: '2 hours',
                total: '3-5 hours'
            },
            notes: 'Rapid tolerance build.'
        }
    },
      interactions: ['Alcohol', 'Opioids ("Holy Trinity" - Soma+Opioid+Benzo = Fatal)'],
      harmReduction: [
        'The "Soma Shuffle" indicates overdose territory',
        'Seizures possible at high doses even without epilepsy history',
        'Avoid the Holy Trinity combination'
      ],
      legality: 'Schedule IV (US).',
      chemistry: {
        formula: 'C12H24N2O4',
        molecularWeight: '260.33 g/mol',
        class: 'Carbamate'
      },
      history: 'Approved 1959.',
      routes: ['Oral'],
      afterEffects: 'Rebound tension.',
      riskLevel: 'high',
      aliases: ['soma']
    },
  {
      id: 'zolpidem',
      name: 'Zolpidem',
      commonNames: ['Ambien', 'Ambien Walrus', 'Stilnox'],
      category: 'depressants',
      class: 'Z-Drug',
      description: 'Zolpidem is a hypnotic acting on the GABA-A receptor. While meant for sleep, if the user stays awake, it causes delirium, hallucinations, and amnesia (personified as the "Ambien Walrus").',
      effects: {
        positive: ['Sleep', 'Weird visuals (breathing walls)', 'Anxiety relief'],
        neutral: ['Complete Amnesia', 'Sleepwalking/Sleep-driving'],
        negative: ['Doing regretful things while unconscious', 'Falls']
      },
      dosage: {
        threshold: '5mg',
        light: '5-10mg',
        common: '10-15mg',
        strong: '15-20mg',
        heavy: '20mg+'
      },
      routeData: {
        Oral: {
             dosage: {
                threshold: '5mg',
                light: '10mg',
                common: '10-20mg',
                strong: '20mg+',
                heavy: 'N/A'
            },
            duration: {
                onset: '15-30 minutes',
                comeup: '20 minutes',
                peak: '1-2 hours',
                offset: '2-3 hours',
                total: '4-6 hours'
            },
            notes: 'Empty stomach required for effect.'
        },
        Insufflation: {
            dosage: {
                threshold: '5mg',
                light: '5-10mg',
                common: '10-15mg',
                strong: '20mg+',
                heavy: 'N/A'
            },
            duration: {
                onset: '5-10 minutes',
                comeup: '10-15 minutes',
                peak: '45-60 minutes',
                offset: '1-2 hours',
                total: '2-4 hours'
            },
            notes: 'Painful.'
        }
    },
      interactions: ['Alcohol', 'Depressants'],
      harmReduction: [
        'Hide your car keys and phone',
        'Women metabolize it slower (FDA recommends max 5mg for women)',
        'Hallucinations are deliriant-like (talking to people not there)'
      ],
      legality: 'Schedule IV (US).',
      chemistry: {
        formula: 'C19H21N3O',
        molecularWeight: '307.39 g/mol',
        class: 'Imidazopyridine'
      },
      history: 'Approved 1992.',
      routes: ['Oral', 'Insufflation'],
      afterEffects: 'Amnesia.',
      riskLevel: 'moderate',
      aliases: ['ambien']
    },
  {
      id: 'methaqualone',
      name: 'Methaqualone',
      commonNames: ['Quaalude', 'Ludes', 'Mandrax', 'Lemmons'],
      category: 'depressants',
      class: 'Quinazolinone',
      description: 'The legendary sedative of the 70s. Methaqualone provides a unique euphoric body high described as "drunk without the sloppy." It is extremely rare today, mostly found in South Africa (smoked as Mandrax).',
      effects: {
        positive: ['Euphoria', 'Tingling body high', 'Aphrodisiac', 'Relaxation'],
        neutral: ['Ataxia (Loss of motor control)'],
        negative: ['Seizures (overdose)', 'Coma', 'Death']
      },
      dosage: {
        threshold: '75mg',
        light: '150mg',
        common: '300mg',
        strong: '300-600mg',
        heavy: '600mg+'
      },
      routeData: {
        Oral: {
             dosage: {
                threshold: '75mg',
                light: '150mg',
                common: '300mg',
                strong: '450mg',
                heavy: '600mg+'
            },
            duration: {
                onset: '30-45 minutes',
                comeup: '30-60 minutes',
                peak: '1-2 hours',
                offset: '3-4 hours',
                total: '5-8 hours'
            },
            notes: 'Historically oral.'
        },
        Smoking: {
             dosage: {
                threshold: '50mg',
                light: '100mg',
                common: '200mg',
                strong: '300mg+',
                heavy: 'N/A'
            },
            duration: {
                onset: 'Seconds',
                comeup: 'Minutes',
                peak: '20-30 minutes',
                offset: '1 hour',
                total: '1-2 hours'
            },
            notes: 'Mandrax (Methaqualone + Diphenhydramine) is smoked in a "white pipe" in South Africa.'
        }
    },
      interactions: ['Alcohol (Fatal)'],
      harmReduction: [
        'True pharmaceutical Quaaludes do not exist anymore',
        'Analogs like SL-164 are convulsants (cause seizures)',
        'Highly addictive'
      ],
      legality: 'Schedule I (US/Global).',
      chemistry: {
        formula: 'C16H14N2O',
        molecularWeight: '250.3 g/mol',
        class: 'Quinazolinone'
      },
      history: 'Introduced 1965. Banned 1984 due to massive abuse.',
      routes: ['Oral', 'Smoking'],
      afterEffects: 'Grogginess.',
      riskLevel: 'high',
      aliases: ['714s']
    },
  {
      id: 'baclofen',
      name: 'Baclofen',
      commonNames: ['Lioresal', 'Gablofen'],
      category: 'depressants',
      class: 'GABA-B Agonist',
      description: 'Baclofen is a derivative of GABA primarily used to treat muscle spasticity. It acts on the GABA-B receptor (similar to Phenibut and GHB). High doses can be recreational but carry significant risks of respiratory depression and a dangerous withdrawal syndrome.',
      effects: {
        positive: ['Muscle relaxation', 'Anxiolysis', 'Mood lift'],
        neutral: ['Drowsiness', 'Nausea'],
        negative: ['Respiratory depression', 'Seizures (withdrawal/overdose)', 'Coma', 'Vertigo']
      },
      dosage: {
        threshold: '5-10mg',
        light: '10-20mg',
        common: '20-40mg',
        strong: '40-60mg',
        heavy: '60mg+'
      },
      routeData: {
        Oral: {
            dosage: {
                threshold: '10mg',
                light: '20mg',
                common: '30-50mg',
                strong: '60-80mg',
                heavy: '80mg+'
            },
            duration: {
                onset: '30-60 minutes',
                comeup: '1-2 hours',
                peak: '2-4 hours',
                offset: '4-6 hours',
                total: '6-10 hours'
            },
            notes: 'Absorption varies. Overdose can lead to coma lasting days.'
        }
    },
      interactions: ['Alcohol (Severe respiratory depression)', 'GHB', 'Opioids'],
      harmReduction: [
        'Never stop abruptly - withdrawal can cause fatal seizures and delirium',
        'Taper slowly',
        'Do not drive'
      ],
      legality: 'Prescription (US).',
      chemistry: {
        formula: 'C10H12ClNO2',
        molecularWeight: '213.66 g/mol',
        class: 'GABA analogue'
      },
      history: 'Synthesized 1962.',
      routes: ['Oral'],
      afterEffects: 'Grogginess.',
      riskLevel: 'moderate',
      aliases: ['lioresal']
    },
  {
      id: 'zopiclone',
      name: 'Zopiclone',
      commonNames: ['Imovane', 'Zimovane', 'Zop'],
      category: 'depressants',
      class: 'Z-Drug',
      description: 'Zopiclone is a hypnotic agent used in the treatment of insomnia. It is structurally different from benzodiazepines but binds to the same GABA receptor complex. It is infamous for causing a strong, persistent metallic taste.',
      effects: {
        positive: ['Sleep', 'Sedation'],
        neutral: ['Metallic taste (Dysgeusia)', 'Amnesia'],
        negative: ['Sleepwalking', 'Hallucinations (if fighting sleep)', 'Depression']
      },
      dosage: {
        threshold: '3.75mg',
        light: '3.75-7.5mg',
        common: '7.5-15mg',
        strong: '15-22.5mg',
        heavy: '22.5mg+'
      },
      routeData: {
        Oral: {
             dosage: {
                threshold: '3.75mg',
                light: '7.5mg',
                common: '15mg',
                strong: '22.5mg',
                heavy: '30mg+'
            },
            duration: {
                onset: '30-45 minutes',
                comeup: '45-60 minutes',
                peak: '1-2 hours',
                offset: '4-6 hours',
                total: '6-8 hours'
            },
            notes: 'Metallic taste can ruin food/water for the next day.'
        }
    },
      interactions: ['Alcohol', 'Benzodiazepines'],
      harmReduction: [
        'Take immediately before bed',
        'Short-term use only to avoid dependence'
      ],
      legality: 'Schedule IV (US).',
      chemistry: {
        formula: 'C17H17ClN6O3',
        molecularWeight: '388.81 g/mol',
        class: 'Cyclopyrrolone'
      },
      history: 'Introduced 1986.',
      routes: ['Oral'],
      afterEffects: 'Metallic taste, morning fog.',
      riskLevel: 'moderate',
      aliases: ['imovane']
    },
  {
      id: 'eszopiclone',
      name: 'Eszopiclone',
      commonNames: ['Lunesta'],
      category: 'depressants',
      class: 'Z-Drug',
      description: 'The active stereoisomer of Zopiclone. It is slightly more potent and has a longer half-life (6 hours) than Zopiclone or Zolpidem, making it better for sleep maintenance.',
      effects: {
        positive: ['Sleep'],
        neutral: ['Metallic taste'],
        negative: ['Next-day impairment', 'Complex sleep behaviors']
      },
      dosage: {
        threshold: '1mg',
        light: '1-2mg',
        common: '2-3mg',
        strong: '3mg+',
        heavy: 'N/A'
      },
      routeData: {
        Oral: {
             dosage: {
                threshold: '1mg',
                light: '2mg',
                common: '3mg',
                strong: '4mg+',
                heavy: 'N/A'
            },
            duration: {
                onset: '30-45 minutes',
                comeup: '1 hour',
                peak: '1-2 hours',
                offset: '5-7 hours',
                total: '7-8 hours'
            },
            notes: 'Longer duration than Ambien.'
        }
    },
      interactions: ['Alcohol', 'CNS Depressants'],
      harmReduction: [
        'Need 7-8 hours dedicated to sleep',
        'Do not take with high-fat meals (delays absorption)'
      ],
      legality: 'Schedule IV (US).',
      chemistry: {
        formula: 'C17H17ClN6O3',
        molecularWeight: '388.81 g/mol',
        class: 'Cyclopyrrolone'
      },
      history: 'Approved 2004.',
      routes: ['Oral'],
      afterEffects: 'Drowsiness.',
      riskLevel: 'moderate',
      aliases: ['lunesta']
    },
  {
      id: 'clonidine',
      name: 'Clonidine',
      commonNames: ['Catapres', 'Kapvay'],
      category: 'depressants',
      class: 'Alpha-2 Agonist',
      description: 'Clonidine acts on Alpha-2 adrenergic receptors in the brain to lower blood pressure and reduce sympathetic nervous system activity. It is used for ADHD, hypertension, and Opioid Withdrawal. It is not euphoric but heavily sedating.',
      effects: {
        positive: ['Relief from opioid withdrawal', 'Anxiety reduction', 'Sleep'],
        neutral: ['Dry mouth', 'Dizziness'],
        negative: ['Hypotension (Fainting)', 'Bradycardia', 'Rebound hypertension']
      },
      dosage: {
        threshold: '0.05mg',
        light: '0.1mg',
        common: '0.1-0.2mg',
        strong: '0.3mg',
        heavy: '0.4mg+'
      },
      routeData: {
        Oral: {
             dosage: {
                threshold: '0.05mg',
                light: '0.1mg',
                common: '0.2mg',
                strong: '0.3mg',
                heavy: '0.4mg+'
            },
            duration: {
                onset: '30-60 minutes',
                comeup: '1 hour',
                peak: '2-4 hours',
                offset: '4-8 hours',
                total: '6-12 hours'
            },
            notes: 'High doses cause dangerous drops in blood pressure.'
        }
    },
      interactions: ['Beta-blockers', 'Alcohol', 'Depressants'],
      harmReduction: [
        'Monitor blood pressure',
        'Stand up slowly to avoid fainting (Orthostatic hypotension)',
        'Do not stop abruptly after regular use'
      ],
      legality: 'Prescription (US).',
      chemistry: {
        formula: 'C9H9Cl2N3',
        molecularWeight: '230.09 g/mol',
        class: 'Imidazoline'
      },
      history: 'Patented 1961.',
      routes: ['Oral', 'Transdermal'],
      afterEffects: 'Lethargy.',
      riskLevel: 'low',
      aliases: ['catapres']
    },
  {
      id: 'tizanidine',
      name: 'Tizanidine',
      commonNames: ['Zanaflex'],
      category: 'depressants',
      class: 'Alpha-2 Agonist',
      description: 'A muscle relaxant structurally similar to Clonidine. It is used for spasms and cramping. It is highly sedating and can cause rapid drops in blood pressure.',
      effects: {
        positive: ['Muscle relaxation', 'Sleep'],
        neutral: ['Dry mouth', 'Dizziness'],
        negative: ['Hypotension', 'Liver damage (rare)', 'Fainting']
      },
      dosage: {
        threshold: '2mg',
        light: '2-4mg',
        common: '4-8mg',
        strong: '8-16mg',
        heavy: '16mg+'
      },
      routeData: {
        Oral: {
             dosage: {
                threshold: '2mg',
                light: '4mg',
                common: '6-8mg',
                strong: '12mg',
                heavy: '16mg+'
            },
            duration: {
                onset: '30-45 minutes',
                comeup: '45-60 minutes',
                peak: '1-2 hours',
                offset: '2-3 hours',
                total: '3-6 hours'
            },
            notes: 'Snorting burns intensely.'
        }
    },
      interactions: ['Ciprofloxacin (Dangerous - prevents metabolism)', 'Alcohol'],
      harmReduction: [
        'Take at night',
        'Watch for low blood pressure'
      ],
      legality: 'Prescription (US).',
      chemistry: {
        formula: 'C9H8ClN5S',
        molecularWeight: '253.71 g/mol',
        class: 'Imidazoline'
      },
      history: 'Approved 1996.',
      routes: ['Oral'],
      afterEffects: 'Grogginess.',
      riskLevel: 'low',
      aliases: ['zanaflex']
    },
  {
      id: 'promethazine',
      name: 'Promethazine',
      commonNames: ['Phenergan', 'Prometh', 'Lean'],
      category: 'depressants',
      class: 'Antihistamine',
      description: 'A first-generation antihistamine. It is sedating and anti-emetic (stops nausea). It is rarely recreational on its own (causes delirium/dysphoria) but is used to potentiate Opioids (Lean/Sizzurp) and reduce their itch/nausea.',
      effects: {
        positive: ['Potentiation of opioids', 'Nausea relief', 'Sleep'],
        neutral: ['Dry mouth', 'Blurred vision'],
        negative: ['Delirium (high doses)', 'Restless legs', 'Dysphoria']
      },
      dosage: {
        threshold: '25mg',
        light: '25-50mg',
        common: '50-75mg',
        strong: '75-100mg',
        heavy: '100mg+'
      },
      routeData: {
        Oral: {
             dosage: {
                threshold: '25mg',
                light: '25-50mg',
                common: '50-100mg',
                strong: '100mg+',
                heavy: 'N/A'
            },
            duration: {
                onset: '20-45 minutes',
                comeup: '45-60 minutes',
                peak: '2-4 hours',
                offset: '4-6 hours',
                total: '4-12 hours'
            },
            notes: 'Syrup or tablets.'
        }
    },
      interactions: ['Alcohol', 'Opioids (Increases sedation significantly)', 'MAOIs'],
      harmReduction: [
        'High doses are deliriant, not euphoric',
        'Can lower seizure threshold'
      ],
      legality: 'Prescription (US). OTC (UK/Canada).',
      chemistry: {
        formula: 'C17H20N2S',
        molecularWeight: '284.42 g/mol',
        class: 'Phenothiazine'
      },
      history: 'Introduced 1946.',
      routes: ['Oral', 'Rectal'],
      afterEffects: 'Brain fog, dry mouth.',
      riskLevel: 'low',
      aliases: ['phenergan']
    },
  {
      id: 'phenobarbital',
      name: 'Phenobarbital',
      commonNames: ['Luminal', 'Phenobarb'],
      category: 'depressants',
      class: 'Barbiturate',
      description: 'An old-school barbiturate used for epilepsy. Unlike short-acting barbiturates, it has little euphoria and extremely long duration (half-life up to 100 hours). It is toxic in overdose.',
      effects: {
        positive: ['Anxiety relief', 'Seizure cessation'],
        neutral: ['Heavy sedation', 'Clumsiness'],
        negative: ['Respiratory depression', 'Cognitive dulling', 'Death (overdose)']
      },
      dosage: {
        threshold: '30mg',
        light: '60-100mg',
        common: '100-200mg',
        strong: '200-400mg',
        heavy: '400mg+ (Dangerous)'
      },
      routeData: {
        Oral: {
             dosage: {
                threshold: '30mg',
                light: '60-100mg',
                common: '100-200mg',
                strong: '200-300mg',
                heavy: '300mg+'
            },
            duration: {
                onset: '30-60 minutes',
                comeup: '1-2 hours',
                peak: '6-12 hours',
                offset: '24 hours+',
                total: '24-48 hours'
            },
            notes: 'Accumulates in system. Therapeutic index is low.'
        }
    },
      interactions: ['Alcohol (Fatal)', 'Benzodiazepines'],
      harmReduction: [
        'Easier to die from than benzos',
        'Do not redose for days',
        'Tapering is medically necessary'
      ],
      legality: 'Schedule IV (US).',
      chemistry: {
        formula: 'C12H12N2O3',
        molecularWeight: '232.24 g/mol',
        class: 'Barbiturate'
      },
      history: 'Introduced 1912.',
      routes: ['Oral', 'IV'],
      afterEffects: 'Hangover lasting days.',
      riskLevel: 'high',
      aliases: ['luminal']
    },
  {
      id: 'lorazepam',
      name: 'Lorazepam',
      commonNames: ['Ativan'],
      category: 'depressants',
      class: 'Benzodiazepine',
      description: 'A potent, intermediate-duration benzodiazepine. It is highly effective for panic attacks and stopping seizures/bad trips. It is less "recreational" or "warm" than Xanax/Valium but highly functional for sedation.',
      effects: {
        positive: ['Panic relief', 'Trip killer', 'Sedation'],
        neutral: ['Amnesia', 'Motor loss'],
        negative: ['Delusions of sobriety', 'Blackouts']
      },
      dosage: {
        threshold: '0.5mg',
        light: '0.5-1mg',
        common: '1-2mg',
        strong: '2-4mg',
        heavy: '4mg+'
      },
      routeData: {
        Oral: {
             dosage: {
                threshold: '0.5mg',
                light: '1mg',
                common: '2mg',
                strong: '3mg',
                heavy: '4mg+'
            },
            duration: {
                onset: '30-45 minutes',
                comeup: '45-60 minutes',
                peak: '1-2 hours',
                offset: '6-8 hours',
                total: '8-10 hours'
            },
            notes: 'Sublingual use is faster.'
        }
    },
      interactions: ['Alcohol', 'Opioids'],
      harmReduction: [
        'Standard hospital benzo for agitation',
        'Can cause paradoxical rage in some'
      ],
      legality: 'Schedule IV (US).',
      chemistry: {
        formula: 'C15H10Cl2N2O2',
        molecularWeight: '321.16 g/mol',
        class: 'Benzodiazepine'
      },
      history: 'Patented 1963.',
      routes: ['Oral', 'Sublingual', 'IV', 'IM'],
      afterEffects: 'Sedation.',
      riskLevel: 'moderate',
      aliases: ['ativan']
    },
  {
      id: 'temazepam',
      name: 'Temazepam',
      commonNames: ['Restoril', 'Jellies', 'Eggs', 'Tems'],
      category: 'depressants',
      class: 'Benzodiazepine',
      description: 'One of the most euphoric/recreational pharmaceutical benzodiazepines. It is a hypnotic used for insomnia. In the UK, liquid-filled "eggs" were notorious for injection abuse (causing limb loss).',
      effects: {
        positive: ['Strong euphoria', 'Warmth', 'Relaxation', 'Sleep'],
        neutral: ['Amnesia'],
        negative: ['Severe addiction', 'Balance loss']
      },
      dosage: {
        threshold: '10mg',
        light: '15-20mg',
        common: '20-40mg',
        strong: '40-60mg',
        heavy: '60mg+'
      },
      routeData: {
        Oral: {
             dosage: {
                threshold: '10mg',
                light: '15mg',
                common: '30mg',
                strong: '45-60mg',
                heavy: '60mg+'
            },
            duration: {
                onset: '30-45 minutes',
                comeup: '45-60 minutes',
                peak: '1.5-2.5 hours',
                offset: '4-6 hours',
                total: '6-8 hours'
            },
            notes: 'High abuse potential.'
        }
    },
      interactions: ['Alcohol', 'Opioids'],
      harmReduction: [
        'Do not inject capsules (binders cause gangrene)',
        'High overdose risk with alcohol'
      ],
      legality: 'Schedule IV (US). Schedule 3 (UK).',
      chemistry: {
        formula: 'C16H13ClN2O2',
        molecularWeight: '300.74 g/mol',
        class: 'Benzodiazepine'
      },
      history: 'Patented 1962.',
      routes: ['Oral'],
      afterEffects: 'Hangover.',
      riskLevel: 'high',
      aliases: ['restoril']
    },
  {
      id: 'flunitrazepam',
      name: 'Flunitrazepam',
      commonNames: ['Rohypnol', 'Roofies', 'R2'],
      category: 'depressants',
      class: 'Benzodiazepine',
      description: 'Infamous as a "date rape drug" due to its potency and strong amnesia profile. It is a hypnotic benzodiazepine roughly 10x stronger than Valium. It produces strong sedation and a "drunken" state.',
      effects: {
        positive: ['Heavy sedation', 'Anxiolysis', 'Intoxication'],
        neutral: ['Total Amnesia'],
        negative: ['Blackouts', 'Respiratory depression', 'Paradoxical aggression']
      },
      dosage: {
        threshold: '0.5mg',
        light: '0.5-1mg',
        common: '1-2mg',
        strong: '2-4mg',
        heavy: '4mg+'
      },
      routeData: {
        Oral: {
             dosage: {
                threshold: '0.5mg',
                light: '1mg',
                common: '2mg',
                strong: '3mg+',
                heavy: 'N/A'
            },
            duration: {
                onset: '20-30 minutes',
                comeup: '45 minutes',
                peak: '1-2 hours',
                offset: '8-12 hours',
                total: '8-12 hours'
            },
            notes: 'Modern pills include blue dye to detect spiking in drinks.'
        }
    },
      interactions: ['Alcohol (Fatal/Blackout)', 'Opioids'],
      harmReduction: [
        'Do not leave drinks unattended',
        'Blue dye is a warning indicator'
      ],
      legality: 'Schedule IV (International). Illegal/Schedule I (US - some states) or Schedule IV (Federal but not approved).',
      chemistry: {
        formula: 'C16H12FN3O3',
        molecularWeight: '313.28 g/mol',
        class: 'Nitrobenzodiazepine'
      },
      history: 'Patented 1962.',
      routes: ['Oral'],
      afterEffects: 'Significant hangover.',
      riskLevel: 'high',
      aliases: ['rohypnol']
    },
  {
      id: 'midazolam',
      name: 'Midazolam',
      commonNames: ['Versed', 'Dormicum'],
      category: 'depressants',
      class: 'Benzodiazepine',
      description: 'A short-acting, extremely potent water-soluble benzodiazepine. Used for anesthesia and execution cocktails. It causes rapid, profound sedation and anterograde amnesia. Snorting causes intense pain.',
      effects: {
        positive: ['Instant sedation', 'Anxiety removal'],
        neutral: ['Total Amnesia'],
        negative: ['Respiratory arrest', 'Unconsciousness']
      },
      dosage: {
        threshold: '2-5mg (Oral)',
        light: '5-10mg',
        common: '10-15mg',
        strong: '15-30mg',
        heavy: '30mg+'
      },
      routeData: {
        Oral: {
             dosage: {
                threshold: '5mg',
                light: '7.5mg',
                common: '15mg',
                strong: '20mg+',
                heavy: 'N/A'
            },
            duration: {
                onset: '15-20 minutes',
                comeup: '20 minutes',
                peak: '30-60 minutes',
                offset: '1-2 hours',
                total: '2-4 hours'
            },
            notes: 'Low oral bioavailability (~35%).'
        },
        Insufflation: {
             dosage: {
                threshold: '2mg',
                light: '2.5-5mg',
                common: '5-10mg',
                strong: '15mg+',
                heavy: 'N/A'
            },
            duration: {
                onset: '2-5 minutes',
                comeup: '5-10 minutes',
                peak: '20-40 minutes',
                offset: '1 hour',
                total: '1.5-2.5 hours'
            },
            notes: 'Extremely painful burn.'
        }
    },
      interactions: ['Alcohol', 'Opioids (Fatal)'],
      harmReduction: [
        'Used in hospitals to make you forget surgery',
        'High overdose risk via IV/Snorting'
      ],
      legality: 'Schedule IV (US).',
      chemistry: {
        formula: 'C18H13ClFN3',
        molecularWeight: '325.77 g/mol',
        class: 'Imidazobenzodiazepine'
      },
      history: 'Approved 1982.',
      routes: ['IV', 'Oral', 'Insufflation', 'Rectal'],
      afterEffects: 'Grogginess.',
      riskLevel: 'high',
      aliases: ['versed']
    },
  {
      id: 'flualprazolam',
      name: 'Flualprazolam',
      commonNames: ['Flualp', 'Flu-Alp'],
      category: 'depressants',
      class: 'Benzodiazepine',
      description: 'A fluorinated analogue of Alprazolam. It is approx 2x more potent than Xanax and more sedating/hypnotic. It is common in fake Xanax "pressies".',
      effects: {
        positive: ['Anxiety relief', 'Heavy sedation', 'Sleep'],
        neutral: ['Amnesia'],
        negative: ['Blackouts', 'Rebound anxiety', 'Seizures (withdrawal)']
      },
      dosage: {
        threshold: '0.125mg',
        light: '0.25-0.5mg',
        common: '0.5-1.0mg',
        strong: '1.0-2.0mg',
        heavy: '2.0mg+'
      },
      routeData: {
        Oral: {
             dosage: {
                threshold: '0.1mg',
                light: '0.25mg',
                common: '0.5mg',
                strong: '1.0mg',
                heavy: '2.0mg+'
            },
            duration: {
                onset: '15-45 minutes',
                comeup: '30-60 minutes',
                peak: '1.5-3 hours',
                offset: '4-6 hours',
                total: '6-10 hours'
            },
            notes: 'Harder hitting and longer lasting than Xanax.'
        }
    },
      interactions: ['Alcohol', 'Opioids'],
      harmReduction: [
        'Assume any street Xanax bar contains this or Etizolam',
        'Dose low'
      ],
      legality: 'Schedule I (US - some states). RC (Global).',
      chemistry: {
        formula: 'C17H12ClFN4',
        molecularWeight: '326.76 g/mol',
        class: 'Triazolobenzodiazepine'
      },
      history: 'Patented 1976. RC market 2017.',
      routes: ['Oral'],
      afterEffects: 'Morning grogginess.',
      riskLevel: 'high',
      aliases: ['flualp']
    },
  {
      id: 'flubromazepam',
      name: 'Flubromazepam',
      commonNames: ['Flubromazepam', 'F-Pam'],
      category: 'depressants',
      class: 'Benzodiazepine',
      description: 'Not to be confused with Flubromazolam. Flubromazepam has an extremely long half-life (~106 hours). The onset is very slow (up to 4 hours), leading users to redose and blackout for days as it accumulates.',
      effects: {
        positive: ['Anxiety relief', 'Muscle relaxation'],
        neutral: ['Time dilation', 'Accumulation'],
        negative: ['Multi-day blackouts', 'Delusions of sobriety']
      },
      dosage: {
        threshold: '2-3mg',
        light: '4-6mg',
        common: '6-12mg',
        strong: '12-20mg',
        heavy: '20mg+'
      },
      routeData: {
        Oral: {
             dosage: {
                threshold: '2mg',
                light: '4-6mg',
                common: '8-12mg',
                strong: '15-20mg',
                heavy: '20mg+'
            },
            duration: {
                onset: '1-4 hours',
                comeup: '2-5 hours',
                peak: '5-8 hours',
                offset: '24 hours',
                total: '2-3 Days'
            },
            notes: 'DO NOT REDOSE. You will not feel it fully for 4 hours.'
        }
    },
      interactions: ['Alcohol', 'Depressants'],
      harmReduction: [
        'Dose once and wait 24 hours',
        'Do not drive for days after a heavy dose'
      ],
      legality: 'Unscheduled (US).',
      chemistry: {
        formula: 'C15H10BrFN2O',
        molecularWeight: '333.16 g/mol',
        class: 'Benzodiazepine'
      },
      history: 'Synthesized 1960. RC market 2012.',
      routes: ['Oral'],
      afterEffects: 'Lingering sedation.',
      riskLevel: 'moderate',
      aliases: ['jy-302']
    },
  {
      id: 'diclazepam',
      name: 'Diclazepam',
      commonNames: ['Chlorodiazepam'],
      category: 'depressants',
      class: 'Benzodiazepine',
      description: 'The chlorinated analogue of Diazepam. It metabolizes into Delorazepam, Lorazepam, and Lormetazepam. Primarily functional and used for tapering off other benzos due to its long half-life.',
      effects: {
        positive: ['Anxiety relief', 'Muscle relaxation'],
        neutral: ['Sedation'],
        negative: ['Depression', 'Accumulation']
      },
      dosage: {
        threshold: '0.5mg',
        light: '1mg',
        common: '2-3mg',
        strong: '3-5mg',
        heavy: '5mg+'
      },
      routeData: {
        Oral: {
             dosage: {
                threshold: '0.5mg',
                light: '1mg',
                common: '2-3mg',
                strong: '4mg',
                heavy: '6mg+'
            },
            duration: {
                onset: '45-90 minutes',
                comeup: '1-2 hours',
                peak: '3-5 hours',
                offset: '12-24 hours',
                total: '24 hours+'
            },
            notes: '1mg Diclazepam ≈ 10mg Diazepam.'
        }
    },
      interactions: ['Alcohol'],
      harmReduction: [
        'Use for tapering only, not recreational',
        'Effects are subtle'
      ],
      legality: 'Unscheduled (US).',
      chemistry: {
        formula: 'C16H12Cl2N2O',
        molecularWeight: '319.19 g/mol',
        class: 'Benzodiazepine'
      },
      history: 'Synthesized 1960. RC market 2010.',
      routes: ['Oral'],
      afterEffects: 'Lethargy.',
      riskLevel: 'moderate',
      aliases: ['2-chlorodiazepam']
    },
  {
      id: 'bromazepam',
      name: 'Bromazepam',
      commonNames: ['Lexotan', 'Lexomil'],
      category: 'depressants',
      class: 'Benzodiazepine',
      description: 'A brominated benzodiazepine used for anxiety. It is intermediate in duration and effects. Popular in Europe/South America.',
      effects: {
        positive: ['Anxiety relief', 'Mood lift'],
        neutral: ['Drowsiness'],
        negative: ['Amnesia']
      },
      dosage: {
        threshold: '1.5mg',
        light: '3mg',
        common: '6mg',
        strong: '12mg',
        heavy: '18mg+'
      },
      routeData: {
        Oral: {
             dosage: {
                threshold: '1.5mg',
                light: '3mg',
                common: '6mg',
                strong: '12mg',
                heavy: '18mg+'
            },
            duration: {
                onset: '15-30 minutes',
                comeup: '30-60 minutes',
                peak: '1-3 hours',
                offset: '4-8 hours',
                total: '8-12 hours'
            },
            notes: 'Standard therapeutic benzo.'
        }
    },
      interactions: ['Alcohol'],
      harmReduction: [
        'Standard benzo precautions'
      ],
      legality: 'Schedule IV (US - not marketed).',
      chemistry: {
        formula: 'C14H10BrN3O',
        molecularWeight: '316.16 g/mol',
        class: 'Benzodiazepine'
      },
      history: 'Patented 1961.',
      routes: ['Oral'],
      afterEffects: 'Mild hangover.',
      riskLevel: 'moderate',
      aliases: ['lexotan']
    },
  {
      id: 'nitrazepam',
      name: 'Nitrazepam',
      commonNames: ['Mogadon', 'Moggies'],
      category: 'depressants',
      class: 'Benzodiazepine',
      description: 'A hypnotic benzodiazepine used for severe insomnia. It is powerful and long-acting, often causing significant "hangover" effects the next day.',
      effects: {
        positive: ['Sleep', 'Sedation'],
        neutral: ['Motor impairment'],
        negative: ['Next day sedation', 'Falls in elderly']
      },
      dosage: {
        threshold: '2.5mg',
        light: '5mg',
        common: '10mg',
        strong: '20mg',
        heavy: '20mg+'
      },
      routeData: {
        Oral: {
             dosage: {
                threshold: '2.5mg',
                light: '5mg',
                common: '10mg',
                strong: '20mg+',
                heavy: 'N/A'
            },
            duration: {
                onset: '30-60 minutes',
                comeup: '1 hour',
                peak: '2-4 hours',
                offset: '12 hours',
                total: '12-24 hours'
            },
            notes: 'Strong hypnotic.'
        }
    },
      interactions: ['Alcohol', 'Opioids'],
      harmReduction: [
        'Do not drive the next morning'
      ],
      legality: 'Schedule IV (US - not marketed). Class C (UK).',
      chemistry: {
        formula: 'C15H11N3O3',
        molecularWeight: '281.26 g/mol',
        class: 'Nitrobenzodiazepine'
      },
      history: 'Patented 1961.',
      routes: ['Oral'],
      afterEffects: 'Heavy sedation next day.',
      riskLevel: 'moderate',
      aliases: ['mogadon']
    },
  {
      id: 'flunitrazolam',
      name: 'Flunitrazolam',
      commonNames: ['Flunitraz', 'F-Lam'],
      category: 'depressants',
      class: 'Benzodiazepine',
      description: 'An ultra-potent designer benzodiazepine analogue of Flunitrazepam (Rohypnol) and Clonazolam. It is active in the sub-milligram range and extremely hypnotic. High seizure risk reported upon withdrawal or even during use.',
      effects: {
        positive: ['Sleep', 'Knockout'],
        neutral: ['Blackout'],
        negative: ['Seizures (High risk)', 'Amnesia', 'Respiratory depression']
      },
      dosage: {
        threshold: '0.05mg',
        light: '0.1-0.2mg',
        common: '0.2-0.5mg',
        strong: '0.5mg+',
        heavy: '1mg+'
      },
      routeData: {
        Oral: {
             dosage: {
                threshold: '0.05mg',
                light: '0.1mg',
                common: '0.25mg',
                strong: '0.5mg+',
                heavy: '1mg+'
            },
            duration: {
                onset: '10-20 minutes',
                comeup: '20-30 minutes',
                peak: '1-2 hours',
                offset: '3-5 hours',
                total: '4-8 hours'
            },
            notes: 'Short acting but brutally potent. Seizures reported at 0.5mg.'
        }
    },
      interactions: ['Alcohol', 'Depressants'],
      harmReduction: [
        'Avoid - safer alternatives exist',
        'Seizure risk is abnormally high for a benzo',
        'Volumetric dosing mandatory'
      ],
      legality: 'Unscheduled (US).',
      chemistry: {
        formula: 'C17H13FN6O2',
        molecularWeight: '352.33 g/mol',
        class: 'Triazolobenzodiazepine'
      },
      history: 'RC market 2016.',
      routes: ['Oral', 'Sublingual'],
      afterEffects: 'Rebound anxiety.',
      riskLevel: 'very-high',
      aliases: ['flunitrazolam']
    },
  {
      id: 'deschloroetizolam',
      name: 'Deschloroetizolam',
      commonNames: ['Etizolam-2', 'DCE'],
      category: 'depressants',
      class: 'Thienodiazepine',
      description: 'The chlorinated analogue of Etizolam. It is significantly weaker (less potent) and longer lasting than Etizolam. Generally considered a poor replacement.',
      effects: {
        positive: ['Anxiety relief'],
        neutral: ['Sedation'],
        negative: ['Accumulation']
      },
      dosage: {
        threshold: '2mg',
        light: '3-5mg',
        common: '6-12mg',
        strong: '12-20mg',
        heavy: '20mg+'
      },
      routeData: {
        Oral: {
             dosage: {
                threshold: '2mg',
                light: '4mg',
                common: '10mg',
                strong: '15mg+',
                heavy: 'N/A'
            },
            duration: {
                onset: '30-45 minutes',
                comeup: '1 hour',
                peak: '2-4 hours',
                offset: '4-6 hours',
                total: '6-10 hours'
            },
            notes: 'Requires much higher doses than Etizolam.'
        }
    },
      interactions: ['Alcohol'],
      harmReduction: [
        'Don\'t expect an Etizolam rush'
      ],
      legality: 'Unscheduled (US).',
      chemistry: {
        formula: 'C17H15N4S',
        molecularWeight: '307.4 g/mol',
        class: 'Thienodiazepine'
      },
      history: 'RC market 2014.',
      routes: ['Oral'],
      afterEffects: 'Mild sedation.',
      riskLevel: 'low',
      aliases: ['dce']
    },
  {
      id: 'metizolam',
      name: 'Metizolam',
      commonNames: ['Desmethyletizolam'],
      category: 'depressants',
      class: 'Thienodiazepine',
      description: 'A thienodiazepine analogue of Etizolam. It has a longer half-life and is roughly half the potency of Etizolam.',
      effects: {
        positive: ['Anxiety relief', 'Hypnosis'],
        neutral: ['Sedation'],
        negative: ['Amnesia']
      },
      dosage: {
        threshold: '1mg',
        light: '2mg',
        common: '3-4mg',
        strong: '5-8mg',
        heavy: '8mg+'
      },
      routeData: {
        Oral: {
             dosage: {
                threshold: '1mg',
                light: '2mg',
                common: '4mg',
                strong: '6mg+',
                heavy: 'N/A'
            },
            duration: {
                onset: '30-60 minutes',
                comeup: '45-90 minutes',
                peak: '2-4 hours',
                offset: '4-6 hours',
                total: '8-12 hours'
            },
            notes: 'Longer acting than Etizolam.'
        }
    },
      interactions: ['Alcohol'],
      harmReduction: [
        'Standard benzo precautions'
      ],
      legality: 'Unscheduled (US).',
      chemistry: {
        formula: 'C16H13N4S',
        molecularWeight: '293.37 g/mol',
        class: 'Thienodiazepine'
      },
      history: 'RC market 2015.',
      routes: ['Oral'],
      afterEffects: 'Sedation.',
      riskLevel: 'moderate',
      aliases: ['metizolam']
    },
  {
      id: 'pyrazolam',
      name: 'Pyrazolam',
      commonNames: ['Pyraz'],
      category: 'depressants',
      class: 'Benzodiazepine',
      description: 'A designer benzodiazepine that is highly selective for anxiolysis (anxiety relief) with very little sedation or recreational value. It is the most "functional" benzo.',
      effects: {
        positive: ['Pure anxiety relief', 'Clear headedness'],
        neutral: ['Lack of euphoria'],
        negative: ['Delusions of sobriety (at high doses)']
      },
      dosage: {
        threshold: '0.5mg',
        light: '0.5-1mg',
        common: '1-2mg',
        strong: '2-4mg',
        heavy: '4mg+'
      },
      routeData: {
        Oral: {
             dosage: {
                threshold: '0.5mg',
                light: '1mg',
                common: '2mg',
                strong: '3mg+',
                heavy: 'N/A'
            },
            duration: {
                onset: '15-30 minutes',
                comeup: '30 minutes',
                peak: '1-2 hours',
                offset: '4-6 hours',
                total: '6-10 hours'
            },
            notes: 'Excreted unchanged by kidneys (no liver metabolism).'
        }
    },
      interactions: ['Alcohol'],
      harmReduction: [
        'Safe for those with liver issues (water soluble)',
        'Don\'t chase a high, it won\'t happen'
      ],
      legality: 'Unscheduled (US).',
      chemistry: {
        formula: 'C16H12BrN5',
        molecularWeight: '354.21 g/mol',
        class: 'Benzodiazepine'
      },
      history: 'Synthesized 1970s. RC market 2012.',
      routes: ['Oral'],
      afterEffects: 'Minimal.',
      riskLevel: 'low',
      aliases: ['pyrazolam']
    },
  {
      id: 'lormetazepam',
      name: 'Lormetazepam',
      commonNames: ['Noctamid'],
      category: 'depressants',
      class: 'Benzodiazepine',
      description: 'A methyl derivative of Lorazepam. Strong hypnotic used for insomnia in elderly patients.',
      effects: {
        positive: ['Sleep'],
        neutral: ['Sedation'],
        negative: ['Amnesia', 'Falls']
      },
      dosage: {
        threshold: '0.5mg',
        light: '0.5-1mg',
        common: '1-2mg',
        strong: '2mg+',
        heavy: 'N/A'
      },
      routeData: {
        Oral: {
             dosage: {
                threshold: '0.5mg',
                light: '1mg',
                common: '1-2mg',
                strong: '2mg+',
                heavy: 'N/A'
            },
            duration: {
                onset: '20-30 minutes',
                comeup: '30 minutes',
                peak: '1 hour',
                offset: '6-8 hours',
                total: '8-10 hours'
            },
            notes: 'High oral bioavailability.'
        }
    },
      interactions: ['Alcohol'],
      harmReduction: [
        'Standard benzo precautions'
      ],
      legality: 'Schedule IV (US - not marketed).',
      chemistry: {
        formula: 'C16H12Cl2N2O2',
        molecularWeight: '335.2 g/mol',
        class: 'Benzodiazepine'
      },
      history: 'Patented 1961.',
      routes: ['Oral'],
      afterEffects: 'Drowsiness.',
      riskLevel: 'moderate',
      aliases: ['noctamid']
    },
  {
      id: 'nifoxipam',
      name: 'Nifoxipam',
      commonNames: ['3-hydroxy-desmethyl-flunitrazepam'],
      category: 'depressants',
      class: 'Benzodiazepine',
      description: 'A metabolite of Flunitrazepam. It is less potent and euphoric than its parent. Quality of batches varies wildly (poor solubility).',
      effects: {
        positive: ['Sleep', 'Relaxation'],
        neutral: ['Sedation'],
        negative: ['Amnesia']
      },
      dosage: {
        threshold: '0.5mg',
        light: '1-2mg',
        common: '2-4mg',
        strong: '4-8mg',
        heavy: '8mg+'
      },
      routeData: {
        Oral: {
             dosage: {
                threshold: '0.5mg',
                light: '1mg',
                common: '2mg',
                strong: '5mg',
                heavy: 'N/A'
            },
            duration: {
                onset: '30-45 minutes',
                comeup: '1 hour',
                peak: '2-3 hours',
                offset: '4-6 hours',
                total: '8-12 hours'
            },
            notes: 'Sublingual works better due to poor oral bioavailability.'
        }
    },
      interactions: ['Alcohol'],
      harmReduction: [
        'Variable batch quality makes dosing hard'
      ],
      legality: 'Unscheduled (US).',
      chemistry: {
        formula: 'C15H10FN3O4',
        molecularWeight: '315.26 g/mol',
        class: 'Nitrobenzodiazepine'
      },
      history: 'RC market 2014.',
      routes: ['Oral', 'Sublingual'],
      afterEffects: 'Grogginess.',
      riskLevel: 'moderate',
      aliases: ['nifoxipam']
    }
];
