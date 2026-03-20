// Hallucinogens Substances

import type { Substance } from '../types';

export const hallucinogens: Substance[] = [
  {
      id: 'lsd',
      name: 'LSD',
      commonNames: ['Acid', 'Tabs', 'Lucy', 'Blotter', 'Doses', 'Microdots'],
      category: 'hallucinogens',
      class: 'Lysergamide',
      description: 'LSD (Lysergic acid diethylamide) is a potent semi-synthetic psychedelic. It acts primarily as a partial agonist at the 5-HT2A serotonin receptor. It is known for its long duration (8-12 hours), visual hallucinations (tracers, patterns), and profound changes in consciousness and thought loops.',
      effects: {
        positive: ['Euphoria', 'Giggliness', 'Creativity', 'Music appreciation', 'Closed/Open eye visuals', 'Spiritual insight'],
        neutral: ['Pupil dilation', 'Time distortion', 'Tracers', 'Muscle tension'],
        negative: ['Anxiety', 'Paranoia', 'Thought loops', 'Confusion', 'Vasoconstriction', 'Insomnia']
      },
      dosage: {
        threshold: '15-25μg',
        light: '25-75μg',
        common: '75-150μg',
        strong: '150-300μg',
        heavy: '300μg+'
      },
      routeData: {
        Sublingual: {
            dosage: {
                threshold: '15μg',
                light: '25-75μg',
                common: '75-150μg',
                strong: '150-300μg',
                heavy: '300μg+'
            },
            duration: {
                onset: '30-60 minutes',
                comeup: '45-90 minutes',
                peak: '3-5 hours',
                offset: '3-5 hours',
                total: '8-12 hours'
            },
            notes: 'Tabs are typically 60-100μg, despite dealers claiming "double dipped" or 200μg+.'
        },
        Oral: {
             dosage: {
                threshold: '15μg',
                light: '25-75μg',
                common: '75-150μg',
                strong: '150-300μg',
                heavy: '300μg+'
            },
            duration: {
                onset: '30-90 minutes',
                comeup: '60-90 minutes',
                peak: '3-5 hours',
                offset: '3-5 hours',
                total: '8-12 hours'
            },
            notes: 'Swallowing tabs. Slightly slower onset than sublingual. NBOMes are inactive if swallowed (LSD is active).'
        }
    },
      interactions: ['SSRIs (Diminished effects)', 'Lithium (Risk of seizures)', 'Tramadol (Seizure risk)', 'Cannabis (Intensifies trip/Anxiety)'],
      harmReduction: [
        'Test your tabs (Ehrlich reagent turns purple)',
        'If it\'s bitter, it\'s a spitter (NBOMe warning)',
        'Set and Setting are crucial',
        'Have a trip sitter'
      ],
      legality: 'Schedule I (US).',
      chemistry: {
        formula: 'C20H25N3O',
        molecularWeight: '323.43 g/mol',
        class: 'Lysergamide'
      },
      history: 'Synthesized 1938 by Albert Hofmann. Discovered 1943. Bicycle Day (April 19).',
      routes: ['Sublingual', 'Oral', 'IV'],
      afterEffects: 'Afterglow or fatigue.',
      riskLevel: 'low',
      aliases: ['lysergic acid diethylamide']
    },
  {
      id: 'psilocybin',
      name: 'Psilocybin Mushrooms',
      commonNames: ['Shrooms', 'Magic Mushrooms', 'Mushies', 'Caps', 'Boomers'],
      category: 'hallucinogens',
      class: 'Tryptamine',
      description: 'Psilocybin mushrooms (Psilocybe cubensis and others) contain Psilocybin, which metabolizes into Psilocin in the body. Psilocin is a serotonin agonist. The experience is often described as more "earthy," emotional, and sedating than LSD, with a shorter duration.',
      effects: {
        positive: ['Euphoria', 'Laughter', 'Spiritual experience', 'Connection to nature', 'Visuals (breathing/melting)'],
        neutral: ['Time distortion', 'Yawning', 'Pupil dilation', 'Tearing eyes'],
        negative: ['Nausea/Vomiting ("Gut rot")', 'Anxiety', 'Confusion', 'Fear']
      },
      dosage: {
        threshold: '0.25g (Dried)',
        light: '0.5-1.5g',
        common: '1.5-3.0g',
        strong: '3.0-5.0g',
        heavy: '5.0g+ ("Heroic Dose")'
      },
      routeData: {
        Oral: {
             dosage: {
                threshold: '0.25g',
                light: '1g',
                common: '2.5g',
                strong: '4g',
                heavy: '5g+'
            },
            duration: {
                onset: '20-40 minutes',
                comeup: '30-60 minutes',
                peak: '2-3 hours',
                offset: '2 hours',
                total: '4-6 hours'
            },
            notes: 'Lemon Tek (soaking in lemon juice) converts Psilocybin to Psilocin before ingestion, reducing nausea and onset time.'
        }
    },
      interactions: ['SSRIs (Diminished effects)', 'MAOIs (Potentiates strongly)', 'Cannabis'],
      harmReduction: [
        'Identify species correctly (avoid poisonous lookalikes)',
        'Nausea is common during come-up (ginger helps)',
        'Emotional waves are normal'
      ],
      legality: 'Schedule I (US). Decriminalized in some cities (Denver, Oakland, etc.) and Oregon/Colorado.',
      chemistry: {
        formula: 'C12H17N2O4P',
        molecularWeight: '284.25 g/mol',
        class: 'Tryptamine'
      },
      history: 'Used for millennia by Mazatec people. Introduced to west by R. Gordon Wasson (1957).',
      routes: ['Oral'],
      afterEffects: 'Afterglow, mild fatigue.',
      riskLevel: 'low',
      aliases: ['4-PO-DMT']
    },
  {
      id: 'dmt',
      name: 'DMT',
      commonNames: ['Dimitri', 'The Spirit Molecule', 'Deemz', 'Changa'],
      category: 'hallucinogens',
      class: 'Tryptamine',
      description: 'N,N-DMT is a powerful, short-acting psychedelic tryptamine found in many plants and animals. When vaporized, it produces an immediate, intense "breakthrough" experience involving immersion in geometric landscapes and encounters with autonomous entities ("Machine Elves").',
      effects: {
        positive: ['Life-changing spiritual insight', 'Entity contact', 'Complex geometry', 'Euphoria'],
        neutral: ['Complete loss of reality', 'Body dissolution'],
        negative: ['Terror (if fought)', 'Jarring onset', 'Harsh smoke']
      },
      dosage: {
        threshold: '5-10mg',
        light: '10-20mg',
        common: '20-30mg (Breakthrough range)',
        strong: '30-50mg',
        heavy: '50mg+ (Blackout risk)'
      },
      routeData: {
        Inhalation: {
             dosage: {
                threshold: '5mg',
                light: '10-15mg',
                common: '25-35mg',
                strong: '40mg+',
                heavy: '50mg+'
            },
            duration: {
                onset: '10-30 seconds',
                comeup: '1 minute',
                peak: '5-15 minutes',
                offset: '5-10 minutes',
                total: '15-20 minutes'
            },
            notes: 'Vaporized (freebase). Must hold hits in long. Burning it destroys the molecule.'
        },
        Oral: {
             dosage: {
                threshold: '30mg',
                light: '50mg',
                common: '100mg+',
                strong: '150mg',
                heavy: 'N/A'
            },
            duration: {
                onset: '30-60 minutes',
                comeup: '1 hour',
                peak: '2-3 hours',
                offset: '2 hours',
                total: '4-6 hours'
            },
            notes: 'Ayahuasca/Pharmahuasca. REQUIRES MAOI (Harmalas) to be active orally.'
        }
    },
      interactions: ['MAOIs (Required for oral, but dangerous if on SSRIs)', 'SSRIs'],
      harmReduction: [
        'Set down glass pipes immediately (loss of motor control)',
        'Sitter recommended to hold pipe/watch body',
        'Do not fight the experience'
      ],
      legality: 'Schedule I (US). Religious exemptions for Ayahuasca churches.',
      chemistry: {
        formula: 'C12H16N2',
        molecularWeight: '188.27 g/mol',
        class: 'Tryptamine'
      },
      history: 'Synthesized 1931. Psychedelic effects found 1956.',
      routes: ['Vaped', 'Oral (Ayahuasca)', 'IV'],
      afterEffects: 'Quick baseline return. Afterglow.',
      riskLevel: 'moderate',
      aliases: ['N,N-DMT']
    },
  {
      id: 'mescaline',
      name: 'Mescaline',
      commonNames: ['Peyote', 'San Pedro', 'Buttons', 'Cactus'],
      category: 'hallucinogens',
      class: 'Phenethylamine',
      description: 'Mescaline is a phenethylamine psychedelic found in Peyote and San Pedro cacti. It acts on 5-HT2A receptors. It is known for its gentle, empathetic, and visually geometric "organic" nature. It has a very long duration and significant body load (nausea) during the come-up.',
      effects: {
        positive: ['Euphoria', 'Connection to earth', 'Geometry', 'Insight'],
        neutral: ['Sedation', 'Pupil dilation'],
        negative: ['Severe Nausea/Vomiting ("Purging")', 'Muscle tension', 'Vasoconstriction']
      },
      dosage: {
        threshold: '50-100mg',
        light: '100-200mg',
        common: '200-400mg',
        strong: '400-600mg',
        heavy: '600mg+'
      },
      routeData: {
        Oral: {
             dosage: {
                threshold: '100mg',
                light: '200mg',
                common: '350mg',
                strong: '500mg',
                heavy: '700mg+'
            },
            duration: {
                onset: '45-90 minutes',
                comeup: '2 hours',
                peak: '4-6 hours',
                offset: '4 hours',
                total: '10-14 hours'
            },
            notes: 'Dosages refer to pure HCL salt. Cacti potency varies wildly.'
        }
    },
      interactions: ['MAOIs', 'Stimulants'],
      harmReduction: [
        'Nausea is almost guaranteed - ginger or anti-emetics help',
        'Long duration requires full day commitment'
      ],
      legality: 'Schedule I (US). Peyote legal for Native American Church. San Pedro legal for ornamental use (gray area).',
      chemistry: {
        formula: 'C11H17NO3',
        molecularWeight: '211.26 g/mol',
        class: 'Phenethylamine'
      },
      history: 'Used for 5000+ years in Mexico/North America. Isolated 1897.',
      routes: ['Oral'],
      afterEffects: 'Fatigue, residual stimulation.',
      riskLevel: 'low',
      aliases: ['3,4,5-trimethoxyphenethylamine']
    },
  {
      id: '1p-lsd',
      name: '1P-LSD',
      commonNames: ['1P', '1-Propionyl'],
      category: 'hallucinogens',
      class: 'Lysergamide',
      description: '1P-LSD is a semi-synthetic analogue of LSD. It is a prodrug, meaning it hydrolyzes into LSD in the body. Consequently, its effects, potency, and duration are virtually indistinguishable from LSD-25.',
      effects: {
        positive: ['Indistinguishable from LSD', 'Visuals', 'Euphoria'],
        neutral: ['Time distortion'],
        negative: ['Anxiety', 'Confusion']
      },
      dosage: {
        threshold: '20μg',
        light: '50-75μg',
        common: '100-150μg',
        strong: '200-300μg',
        heavy: '300μg+'
      },
      routeData: {
        Oral: {
             dosage: {
                threshold: '20μg',
                light: '50μg',
                common: '100μg',
                strong: '200μg',
                heavy: '300μg+'
            },
            duration: {
                onset: '45-90 minutes',
                comeup: '1-2 hours',
                peak: '3-5 hours',
                offset: '3-5 hours',
                total: '8-12 hours'
            },
            notes: 'Blotters usually accurately dosed at 100μg (unlike street acid).'
        }
    },
      interactions: ['SSRIs', 'Lithium'],
      harmReduction: [
        'Treat exactly as LSD',
        'Long duration'
      ],
      legality: 'Gray Area/Illegal (Analogue Act US). Banned in UK/Germany.',
      chemistry: {
        formula: 'C23H29N3O2',
        molecularWeight: '379.5 g/mol',
        class: 'Lysergamide'
      },
      history: 'Appeared on RC market 2015.',
      routes: ['Oral', 'Sublingual'],
      afterEffects: 'Afterglow.',
      riskLevel: 'low',
      aliases: ['1-propionyl-lysergic acid diethylamide']
    },
  {
      id: '4-aco-dmt',
      name: '4-AcO-DMT',
      commonNames: ['Psilacetin', 'Synthetic Shrooms'],
      category: 'hallucinogens',
      class: 'Tryptamine',
      description: '4-AcO-DMT (O-Acetylpsilocin) is a semi-synthetic tryptamine believed to be a prodrug for Psilocin (like Psilocybin). The effects are nearly identical to mushrooms, though some users report it being "warmer" or less nauseating.',
      effects: {
        positive: ['Euphoria', 'Relaxation', 'Visuals', 'Insight'],
        neutral: ['Sedation', 'Yawning'],
        negative: ['Nausea (less than mushrooms)', 'Anxiety']
      },
      dosage: {
        threshold: '5-10mg',
        light: '10-20mg',
        common: '20-30mg',
        strong: '30-50mg',
        heavy: '50mg+'
      },
      routeData: {
        Oral: {
             dosage: {
                threshold: '5mg',
                light: '15mg',
                common: '25mg',
                strong: '40mg',
                heavy: '50mg+'
            },
            duration: {
                onset: '20-40 minutes',
                comeup: '45-60 minutes',
                peak: '2-3 hours',
                offset: '2-3 hours',
                total: '4-7 hours'
            },
            notes: 'Powder form degrades into 4-HO-DMT (Psilocin) over time (turns goo/brown).'
        }
    },
      interactions: ['SSRIs', 'MAOIs'],
      harmReduction: [
        'Volumetric dosing recommended',
        'Easier to dose accurately than mushrooms'
      ],
      legality: 'Schedule I (US - Analogue Act).',
      chemistry: {
        formula: 'C14H18N2O2',
        molecularWeight: '246.3 g/mol',
        class: 'Tryptamine'
      },
      history: 'Synthesized by Albert Hofmann 1963. RC market ~2010.',
      routes: ['Oral', 'Insufflation', 'Rectal'],
      afterEffects: 'Afterglow.',
      riskLevel: 'low',
      aliases: ['psilacetin']
    },
  {
      id: '5-meo-dmt',
      name: '5-MeO-DMT',
      commonNames: ['The Toad', 'Five', 'Bufo'],
      category: 'hallucinogens',
      class: 'Tryptamine',
      description: '5-MeO-DMT is the most potent naturally occurring psychedelic. Found in *Bufo alvarius* toad venom. It is distinct from N,N-DMT; it has few visuals but causes "The Void" or "White Light" - total ego death and dissolution into nothingness. It can be physically dangerous (respiratory depression).',
      effects: {
        positive: ['Non-dual consciousness', 'Rebirth', 'Total release'],
        neutral: ['Whiteout (loss of memory)', 'Body load'],
        negative: ['Respiratory depression', 'Vomiting/Choking', 'Terror', 'Screaming/Thrashing']
      },
      dosage: {
        threshold: '1-2mg',
        light: '3-6mg',
        common: '6-12mg',
        strong: '12-20mg',
        heavy: '20mg+ (Dangerous)'
      },
      routeData: {
        Inhalation: {
             dosage: {
                threshold: '2mg',
                light: '5mg',
                common: '10mg',
                strong: '15mg',
                heavy: '20mg+'
            },
            duration: {
                onset: '10-30 seconds',
                comeup: '1-2 minutes',
                peak: '5-15 minutes',
                offset: '10-20 minutes',
                total: '20-40 minutes'
            },
            notes: 'Synthetic or Toad Venom (venom requires higher weight dose). Dosing must be precise.'
        }
    },
      interactions: ['MAOIs (FATAL - Serotonin Syndrome)', 'SSRIs', 'Stimulants'],
      harmReduction: [
        'Sitter is MANDATORY - users often vomit or thrash while unconscious',
        'Recovery position',
        'Do not mix with MAOIs (Ayahuasca)',
        'Respect the potency - it is not recreational'
      ],
      legality: 'Schedule I (US).',
      chemistry: {
        formula: 'C13H18N2O',
        molecularWeight: '218.3 g/mol',
        class: 'Tryptamine'
      },
      history: 'Traditional use questionable. Synthesized 1936. Popularized 1990s.',
      routes: ['Vaporized', 'Insufflated', 'IV'],
      afterEffects: 'Reactivation (flashbacks) common in weeks following.',
      riskLevel: 'high',
      aliases: ['5-methoxy-N,N-dimethyltryptamine']
    },
  {
      id: '2c-b',
      name: '2C-B',
      commonNames: ['Nexus', 'Bees', 'Venus'],
      category: 'hallucinogens',
      class: 'Phenethylamine',
      description: '2C-B is a popular psychedelic phenethylamine. It is often described as a "beginner psychedelic" or a mix between LSD and MDMA (though distinct from both). It provides visuals and tactile enhancement with a manageable, clear headspace and minimal ego dissolution.',
      effects: {
        positive: ['Visuals (Neon/Cartoon)', 'Touch enhancement', 'Libido boost', 'Giggliness', 'Music enhancement'],
        neutral: ['Body load', 'Temperature fluctuation'],
        negative: ['Nausea (common)', 'Headache']
      },
      dosage: {
        threshold: '5mg',
        light: '10-15mg',
        common: '15-25mg',
        strong: '25-40mg',
        heavy: '40mg+'
      },
      routeData: {
        Oral: {
             dosage: {
                threshold: '5mg',
                light: '15mg',
                common: '22mg',
                strong: '30mg',
                heavy: '40mg+'
            },
            duration: {
                onset: '45-75 minutes',
                comeup: '30 minutes',
                peak: '2-4 hours',
                offset: '2 hours',
                total: '5-8 hours'
            },
            notes: 'Common in "Nexus Flip" (2C-B + MDMA).'
        },
        Insufflation: {
             dosage: {
                threshold: '2mg',
                light: '5-10mg',
                common: '10-18mg',
                strong: '20mg+',
                heavy: 'N/A'
            },
            duration: {
                onset: '5-10 minutes',
                comeup: '15 minutes',
                peak: '1-2 hours',
                offset: '2 hours',
                total: '3-5 hours'
            },
            notes: 'EXTREMELY PAINFUL. Feels like lava. 2x potency of oral.'
        }
    },
      interactions: ['Cannabis (Potentiates visuals greatly)', 'MAOIs'],
      harmReduction: [
        'Take on empty stomach to reduce nausea',
        'Snorting is very painful and damaging',
        'Steep dose curve above 25mg'
      ],
      legality: 'Schedule I (US).',
      chemistry: {
        formula: 'C10H14BrNO2',
        molecularWeight: '260.13 g/mol',
        class: '2C-x'
      },
      history: 'Synthesized by Shulgin 1974. Sold legally as aphrodisiac "Erox" until 1995.',
      routes: ['Oral', 'Insufflation', 'Rectal'],
      afterEffects: 'Mild fatigue.',
      riskLevel: 'low',
      aliases: ['4-bromo-2,5-dimethoxyphenethylamine']
    },
  {
      id: 'salvia',
      name: 'Salvia Divinorum',
      commonNames: ['Salvia', 'Sally D', 'Diviner\'s Sage'],
      category: 'hallucinogens',
      class: 'Diterpenoid',
      description: 'Salvia is a plant containing Salvinorin A, a potent Kappa-Opioid agonist (not serotonergic). It produces bizarre, often dysphoric, dissociative hallucinations. Users often report becoming inanimate objects (a chair, a wheel) or feeling gravity shift ("Salvia Gravity").',
      effects: {
        positive: ['Unique reality shift'],
        neutral: ['Becoming objects', 'Merging with floor', 'Uncontrollable laughter'],
        negative: ['Dysphoria', 'Fear', 'Heat flashes', 'Confusion', 'Amnesia']
      },
      dosage: {
        threshold: 'Leaves',
        light: '5x Extract',
        common: '10x-20x Extract',
        strong: '40x Extract',
        heavy: '80x Extract'
      },
      routeData: {
        Smoking: {
             dosage: {
                threshold: 'N/A',
                light: 'Small pinch 5x',
                common: 'Large pinch 10x',
                strong: 'Small pinch 20x+',
                heavy: 'N/A'
            },
            duration: {
                onset: '20-60 seconds',
                comeup: '1-2 minutes',
                peak: '5-10 minutes',
                offset: '20 minutes',
                total: '30-45 minutes'
            },
            notes: 'Requires high heat (torch lighter). Rapid, jarring onset.'
        },
        Sublingual: {
             dosage: {
                threshold: '10g fresh leaves',
                light: '20g fresh',
                common: '30g fresh',
                strong: '50g+',
                heavy: 'N/A'
            },
            duration: {
                onset: '15-20 minutes',
                comeup: '30 minutes',
                peak: '1 hour',
                offset: '1 hour',
                total: '2-3 hours'
            },
            notes: '"Quid" method. Gentler, more trance-like.'
        }
    },
      interactions: ['None specific, but best used alone.'],
      harmReduction: [
        'Sitter mandatory - people often walk around unconscious',
        'Remove sharp objects',
        'Start with plain leaf or 5x, not 80x'
      ],
      legality: 'Illegal in many US states. Legal in others.',
      chemistry: {
        formula: 'C23H28O8',
        molecularWeight: '432.47 g/mol',
        class: 'Diterpene'
      },
      history: 'Mazatec divination tool.',
      routes: ['Smoking', 'Quid (Chewing)'],
      afterEffects: 'Sweating, confusion.',
      riskLevel: 'moderate',
      aliases: ['salvinorin a']
    },
  {
      id: '4-ho-met',
      name: '4-HO-MET',
      commonNames: ['Metocin', 'Colour'],
      category: 'hallucinogens',
      class: 'Tryptamine',
      description: 'An analogue of Psilocin. Known as "shrooms lite" or "recreational shrooms." It offers intense neon visuals and laughter with a very light headspace (less confusion/introspection than mushrooms).',
      effects: {
        positive: ['Visuals', 'Humor/Laughing', 'Euphoria', 'Easy headspace'],
        neutral: ['Temperature fluctuation'],
        negative: ['Nausea', 'Anxiety (rare)']
      },
      dosage: {
        threshold: '5-10mg',
        light: '10-15mg',
        common: '20-30mg',
        strong: '30-45mg',
        heavy: '50mg+'
      },
      routeData: {
        Oral: {
             dosage: {
                threshold: '5mg',
                light: '15mg',
                common: '25mg',
                strong: '40mg',
                heavy: '50mg+'
            },
            duration: {
                onset: '20-40 minutes',
                comeup: '45 minutes',
                peak: '2-3 hours',
                offset: '2 hours',
                total: '4-6 hours'
            },
            notes: 'Very common RC.'
        }
    },
      interactions: ['SSRIs', 'MAOIs'],
      harmReduction: [
        'Standard psychedelic safety'
      ],
      legality: 'Gray area (US).',
      chemistry: {
        formula: 'C13H20N2O',
        molecularWeight: '220.31 g/mol',
        class: 'Tryptamine'
      },
      history: 'Shulgin synthesized.',
      routes: ['Oral', 'Insufflation'],
      afterEffects: 'Mood lift.',
      riskLevel: 'low',
      aliases: ['metocin']
    },
  {
      id: '5-meo-dipt',
      name: '5-MeO-DiPT',
      commonNames: ['Foxy', 'Foxy Methoxy'],
      category: 'hallucinogens',
      class: 'Tryptamine',
      description: 'A tactile and auditory psychedelic. It is stimulating and entactogenic, often used for sex. It has a significant "body load" (GI distress, muscle tension) that some find unpleasant.',
      effects: {
        positive: ['Tactile enhancement', 'Libido', 'Music enhancement'],
        neutral: ['Body tension'],
        negative: ['Diarrhea ("The Foxy Trots")', 'Nausea', 'Restlessness']
      },
      dosage: {
        threshold: '2-4mg',
        light: '4-8mg',
        common: '8-15mg',
        strong: '15-25mg',
        heavy: '25mg+'
      },
      routeData: {
        Oral: {
             dosage: {
                threshold: '3mg',
                light: '6mg',
                common: '12mg',
                strong: '20mg',
                heavy: '25mg+'
            },
            duration: {
                onset: '20-40 minutes',
                comeup: '1 hour',
                peak: '2-3 hours',
                offset: '2 hours',
                total: '4-8 hours'
            },
            notes: 'Steep dose curve.'
        }
    },
      interactions: ['MAOIs', 'SSRIs'],
      harmReduction: [
        'Imodium (Loperamide) helps with stomach issues',
        'Stay hydrated'
      ],
      legality: 'Schedule I (US).',
      chemistry: {
        formula: 'C14H20N2O',
        molecularWeight: '232.32 g/mol',
        class: 'Tryptamine'
      },
      history: 'Shulgin (TiHKAL).',
      routes: ['Oral'],
      afterEffects: 'Muscle tension.',
      riskLevel: 'moderate',
      aliases: ['foxy']
    },
  {
      id: 'lsa',
      name: 'LSA',
      commonNames: ['Morning Glory', 'HBWR', 'Woodrose'],
      category: 'hallucinogens',
      class: 'Lysergamide',
      description: 'LSA (Lysergic Acid Amide) is a precursor to LSD found in seeds (Morning Glory, Hawaiian Baby Woodrose). It is sedative and psychedelic but causes intense vasoconstriction and nausea.',
      effects: {
        positive: ['Dreamy state', 'Sedation', 'Visuals (mild)'],
        neutral: ['Heavy legs'],
        negative: ['Severe Nausea', 'Vasoconstriction (leg cramps)', 'Stomach pain']
      },
      dosage: {
        threshold: 'Variable',
        light: '3-6 seeds (HBWR)',
        common: '7-12 seeds (HBWR)',
        strong: '12+ seeds (HBWR)',
        heavy: 'N/A'
      },
      routeData: {
        Oral: {
             dosage: {
                threshold: '1 seed',
                light: '4 seeds',
                common: '8 seeds',
                strong: '12 seeds',
                heavy: '15+'
            },
            duration: {
                onset: '1-2 hours',
                comeup: '2 hours',
                peak: '3-5 hours',
                offset: '2 hours',
                total: '6-10 hours'
            },
            notes: 'Cold Water Extraction (CWE) reduces nausea but reduces potency.'
        }
    },
      interactions: ['Vasoconstrictors'],
      harmReduction: [
        'Wash seeds (remove pesticides)',
        'Vasodilators (Garlic, Ibuprofen) help leg pain',
        'Extract to avoid eating plant matter'
      ],
      legality: 'Seeds legal. LSA illegal (Schedule III US).',
      chemistry: {
        formula: 'C16H17N3O',
        molecularWeight: '267.33 g/mol',
        class: 'Lysergamide'
      },
      history: 'Indigenous use.',
      routes: ['Oral'],
      afterEffects: 'Leg pain, fatigue.',
      riskLevel: 'moderate',
      aliases: ['ergine']
    },
  {
      id: '2c-i',
      name: '2C-I',
      commonNames: ['Smiles'],
      category: 'hallucinogens',
      class: 'Phenethylamine',
      description: 'A stimulating member of the 2C family. It is very visual and energetic but can feel "chemical" or stimulating to the point of discomfort.',
      effects: {
        positive: ['Energy', 'Visuals', 'Analysis'],
        neutral: ['Muscle tension'],
        negative: ['Overstimulation', 'Jaw clenching']
      },
      dosage: {
        threshold: '5mg',
        light: '10-15mg',
        common: '15-25mg',
        strong: '25-35mg',
        heavy: '35mg+'
      },
      routeData: {
        Oral: {
             dosage: {
                threshold: '5mg',
                light: '12mg',
                common: '20mg',
                strong: '30mg',
                heavy: '35mg+'
            },
            duration: {
                onset: '45-75 minutes',
                comeup: '1 hour',
                peak: '2-4 hours',
                offset: '2-3 hours',
                total: '6-10 hours'
            },
            notes: 'Long lasting stimulation.'
        }
    },
      interactions: ['MAOIs', 'Stimulants'],
      harmReduction: [
        'Magnesium for jaw tension',
        'Do not combine with other stimulants'
      ],
      legality: 'Schedule I (US).',
      chemistry: {
        formula: 'C10H14INO2',
        molecularWeight: '307.13 g/mol',
        class: '2C-x'
      },
      history: 'Shulgin (PiHKAL).',
      routes: ['Oral'],
      afterEffects: 'Insomnia.',
      riskLevel: 'moderate',
      aliases: ['2,5-dimethoxy-4-iodophenethylamine']
    },
  {
      id: '25i-nbome',
      name: '25I-NBOMe',
      commonNames: ['25i', 'N-Bomb', 'Smiles'],
      category: 'hallucinogens',
      class: 'Phenethylamine',
      description: 'A potent full agonist 5-HT2A psychedelic. It was often sold as fake LSD. Unlike LSD, it is bitter, metallic, and numbs the tongue. It is DANGEROUS; unlike partial agonists (LSD/Shrooms), full agonism can cause fatal vasoconstriction and seizures at normal doses.',
      effects: {
        positive: ['Complex visuals'],
        neutral: ['Numbing mouth'],
        negative: ['Seizures', 'Vasoconstriction (Limb loss risk)', 'Confusion', 'Death']
      },
      dosage: {
        threshold: '50-200μg',
        light: '200-500μg',
        common: '500-700μg',
        strong: '700-1000μg',
        heavy: '1000μg+ (DANGEROUS)'
      },
      routeData: {
        Sublingual: {
             dosage: {
                threshold: '50μg',
                light: '300μg',
                common: '600μg',
                strong: '900μg',
                heavy: '1200μg+'
            },
            duration: {
                onset: '30-60 minutes',
                comeup: '1-2 hours',
                peak: '2-4 hours',
                offset: '3-4 hours',
                total: '8-12 hours'
            },
            notes: 'Not active if swallowed (destroyed by stomach acid). Must be held in mouth. "If it\'s bitter it\'s a spitter".'
        }
    },
      interactions: ['Caffeine', 'Stimulants', 'Cannabis (Seizure risk)'],
      harmReduction: [
        'Avoid if possible',
        'Never snort powder (lethal)',
        'If your "acid" numbs your tongue, spit it out'
      ],
      legality: 'Schedule I (US).',
      chemistry: {
        formula: 'C18H22INO3',
        molecularWeight: '427.28 g/mol',
        class: 'NBOMe'
      },
      history: 'Discovered 2003. Fake acid epidemic 2010-2015.',
      routes: ['Sublingual', 'Buccal'],
      afterEffects: 'Headache, confusion.',
      riskLevel: 'very-high',
      aliases: ['2c-i-nbome']
    }
];
