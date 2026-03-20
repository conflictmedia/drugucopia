// Nootropics Substances

import type { Substance } from '../types';

export const nootropics: Substance[] = [
  {
      id: 'piracetam',
      name: 'Piracetam',
      commonNames: ['Nootropil', 'Pira'],
      category: 'nootropics',
      class: 'Racetam',
      description: 'Piracetam is the original nootropic, synthesized in 1964. It is a cyclic derivative of GABA but does not act on GABA receptors directly. Instead, it modulates AMPA receptors and improves membrane fluidity. It is considered very safe but requires high daily doses to be effective.',
      effects: {
        positive: ['Memory enhancement', 'Improved verbal fluency', 'Focus', 'Neuroprotection'],
        neutral: ['Vivid dreams'],
        negative: ['Headache (Choline depletion)', 'Brain fog (if no choline taken)', 'GI upset']
      },
      dosage: {
        threshold: '800mg',
        light: '1200-2400mg',
        common: '2400-4800mg',
        strong: '4800mg+',
        heavy: 'N/A'
      },
      routeData: {
        Oral: {
            dosage: {
                threshold: '800mg',
                light: '1.6g',
                common: '3.2-4.8g',
                strong: '4.8g+',
                heavy: 'N/A'
            },
            duration: {
                onset: '30-60 minutes',
                comeup: '1 hour',
                peak: '2-4 hours',
                offset: '4-6 hours',
                total: '6-8 hours'
            },
            notes: 'Requires a choline source (Alpha-GPC/CDP-Choline) to prevent headaches.'
        }
    },
      interactions: ['Blood thinners (Piracetam has mild blood thinning effect)'],
      harmReduction: [
        'Take with Choline',
        'Effects are cumulative over weeks ("Attack dose" helps start)',
        'Very low toxicity'
      ],
      legality: 'Unscheduled (US). Prescription (Europe).',
      chemistry: {
        formula: 'C6H10N2O2',
        molecularWeight: '142.16 g/mol',
        class: 'Racetam'
      },
      history: 'Synthesized 1964 by Corneliu Giurgea.',
      routes: ['Oral'],
      afterEffects: 'None.',
      riskLevel: 'low',
      aliases: ['2-oxo-1-pyrrolidineacetamide']
    },
  {
      id: 'aniracetam',
      name: 'Aniracetam',
      commonNames: ['Draganon', 'Ani'],
      category: 'nootropics',
      class: 'Racetam',
      description: 'Aniracetam is a fat-soluble racetam. It is more potent than Piracetam and is known for having a significant anxiolytic (anti-anxiety) and mood-boosting effect, along with enhanced creativity and "holistic" thinking.',
      effects: {
        positive: ['Anxiolysis', 'Creativity', 'Verbal fluency', 'Visual saturation'],
        neutral: ['Short duration'],
        negative: ['Headache', 'Nausea']
      },
      dosage: {
        threshold: '250mg',
        light: '400-750mg',
        common: '750-1500mg',
        strong: '1500mg+',
        heavy: 'N/A'
      },
      routeData: {
        Oral: {
            dosage: {
                threshold: '250mg',
                light: '500mg',
                common: '750mg',
                strong: '1500mg',
                heavy: 'N/A'
            },
            duration: {
                onset: '20-40 minutes',
                comeup: '30 minutes',
                peak: '1-2 hours',
                offset: '2-3 hours',
                total: '3-5 hours'
            },
            notes: 'MUST take with fat source (Fish oil, milk, etc) for absorption.'
        }
    },
      interactions: ['Alcohol'],
      harmReduction: [
        'Short duration means frequent redosing needed',
        'Take with Choline'
      ],
      legality: 'Unscheduled (US). Prescription (Europe).',
      chemistry: {
        formula: 'C12H13NO3',
        molecularWeight: '219.24 g/mol',
        class: 'Racetam'
      },
      history: 'Developed 1970s.',
      routes: ['Oral'],
      afterEffects: 'None.',
      riskLevel: 'low',
      aliases: ['1-p-anisoyl-2-pyrrolidinone']
    },
  {
      id: 'noopept',
      name: 'Noopept',
      commonNames: ['Omberacetam', 'GVS-111'],
      category: 'nootropics',
      class: 'Peptide',
      description: 'Noopept is a peptide nootropic related to the racetam family. It is roughly 1000x more potent than Piracetam by weight. It increases NGF and BDNF expression in the hippocampus. It is known for a "laser focus" effect but can cause irritability ("Noopept rage").',
      effects: {
        positive: ['Memory', 'Focus', 'Color enhancement', 'Neuroprotection'],
        neutral: ['Short term memory suppression (at high doses)'],
        negative: ['Irritability', 'Brain fog (high doses)', 'Headache']
      },
      dosage: {
        threshold: '5mg',
        light: '10-20mg',
        common: '20-30mg',
        strong: '30-50mg',
        heavy: '50mg+'
      },
      routeData: {
        Sublingual: {
            dosage: {
                threshold: '5mg',
                light: '10mg',
                common: '20mg',
                strong: '30mg+',
                heavy: 'N/A'
            },
            duration: {
                onset: '5-15 minutes',
                comeup: '15 minutes',
                peak: '1-2 hours',
                offset: '2-3 hours',
                total: '3-4 hours'
            },
            notes: 'Sublingual has much higher bioavailability than oral.'
        },
        Oral: {
             dosage: {
                threshold: '10mg',
                light: '15mg',
                common: '30mg',
                strong: '50mg+',
                heavy: 'N/A'
            },
            duration: {
                onset: '30-60 minutes',
                comeup: '30 minutes',
                peak: '1-2 hours',
                offset: '2-3 hours',
                total: '4 hours'
            },
            notes: 'Oral bioavailability is very low (~10%).'
        }
    },
      interactions: ['Stimulants'],
      harmReduction: [
        'Don\'t "mega dose" - effectiveness drops and side effects rise',
        'Take breaks (cycling) every few months'
      ],
      legality: 'Unscheduled (US). Prescription (Russia).',
      chemistry: {
        formula: 'C17H22N2O4',
        molecularWeight: '318.37 g/mol',
        class: 'Peptide'
      },
      history: 'Patented Russia 1996.',
      routes: ['Oral', 'Sublingual', 'Intranasal'],
      afterEffects: 'None.',
      riskLevel: 'low',
      aliases: ['omberacetam']
    },
  {
      id: 'alpha-gpc',
      name: 'Alpha-GPC',
      commonNames: ['Choline Alfoscerate'],
      category: 'nootropics',
      class: 'Choline Source',
      description: 'Alpha-GPC is a highly bioavailable source of choline that crosses the blood-brain barrier efficiently. It is a precursor to acetylcholine. It is primarily used to potentiate other nootropics (like Racetams) and prevent headaches caused by choline depletion.',
      effects: {
        positive: ['Memory', 'Physical power output', 'Growth Hormone release'],
        neutral: ['Stimulation'],
        negative: ['Depression (if acetylcholine is too high)', 'Headache (too much)', 'TMAO increase (heart risk with chronic use)']
      },
      dosage: {
        threshold: '150mg',
        light: '300mg',
        common: '300-600mg',
        strong: '600-1200mg',
        heavy: '1200mg+'
      },
      routeData: {
        Oral: {
             dosage: {
                threshold: '150mg',
                light: '300mg',
                common: '600mg',
                strong: '900mg',
                heavy: '1200mg'
            },
            duration: {
                onset: '30-60 minutes',
                comeup: 'N/A',
                peak: '2-4 hours',
                offset: 'N/A',
                total: '4-6 hours'
            },
            notes: 'Powder is hygroscopic (turns to liquid slush in air) - keep sealed.'
        }
    },
      interactions: ['Racetams (Synergistic)'],
      harmReduction: [
        'Stop if you feel depressed/lethargic (Too much Acetylcholine)',
        'Eat garlic (Allicin) to prevent TMAO formation'
      ],
      legality: 'Supplement (US).',
      chemistry: {
        formula: 'C8H20NO6P',
        molecularWeight: '257.22 g/mol',
        class: 'Phospholipid'
      },
      history: 'Isolated 1980s.',
      routes: ['Oral'],
      afterEffects: 'None.',
      riskLevel: 'low',
      aliases: ['l-alpha-glycerylphosphorylcholine']
    },
  {
      id: 'l-tyrosine',
      name: 'L-Tyrosine',
      commonNames: ['Tyrosine'],
      category: 'nootropics',
      class: 'Amino Acid',
      description: 'L-Tyrosine is a precursor to Dopamine, Norepinephrine, and Epinephrine. It is most effective at restoring cognitive function during acute stress (cold, sleep deprivation, loud noise). It helps replenish dopamine after stimulant use.',
      effects: {
        positive: ['Stress resilience', 'Working memory under stress', 'Wakefulness'],
        neutral: ['Mild stimulation'],
        negative: ['Anxiety', 'Thyroid interaction']
      },
      dosage: {
        threshold: '500mg',
        light: '500-1000mg',
        common: '1000-2000mg',
        strong: '2000-3000mg',
        heavy: '3000mg+'
      },
      routeData: {
        Oral: {
             dosage: {
                threshold: '500mg',
                light: '1g',
                common: '2g',
                strong: '3g',
                heavy: 'N/A'
            },
            duration: {
                onset: '30-60 minutes',
                comeup: 'N/A',
                peak: '1-2 hours',
                offset: '2-3 hours',
                total: '3-5 hours'
            },
            notes: 'Take on empty stomach (competes with other amino acids).'
        }
    },
      interactions: ['MAOIs (Dangerous - Hypertension)', 'Levodopa', 'Thyroid meds'],
      harmReduction: [
        'NALT (N-Acetyl-L-Tyrosine) is often sold but has poor conversion to Tyrosine',
        'Use L-Tyrosine instead'
      ],
      legality: 'Supplement (US).',
      chemistry: {
        formula: 'C9H11NO3',
        molecularWeight: '181.19 g/mol',
        class: 'Amino Acid'
      },
      history: 'Discovered 1846.',
      routes: ['Oral'],
      afterEffects: 'None.',
      riskLevel: 'low',
      aliases: ['tyrosine']
    },
  {
      id: 'n-acetyl-cysteine',
      name: 'NAC',
      commonNames: ['N-Acetyl Cysteine'],
      category: 'nootropics',
      class: 'Amino Acid',
      description: 'NAC is a precursor to Glutathione (the body\'s master antioxidant) and modulates Glutamate. It is highly effective for reducing drug cravings (cocaine, nicotine, etc.), OCD symptoms, and protecting the liver from toxicity.',
      effects: {
        positive: ['Liver protection', 'Reduced cravings', 'Mucus thinning', 'Mood stabilization'],
        neutral: ['Anhedonia (blunting of emotions) with chronic use'],
        negative: ['GI upset', 'Sulphur smell', 'Reduced efficacy of stimulants (blunts euphoria)']
      },
      dosage: {
        threshold: '600mg',
        light: '600mg',
        common: '1200mg',
        strong: '1800-2400mg',
        heavy: '2400mg+'
      },
      routeData: {
        Oral: {
             dosage: {
                threshold: '600mg',
                light: '600mg',
                common: '1200mg',
                strong: '1800mg',
                heavy: '2400mg'
            },
            duration: {
                onset: '1 hour',
                comeup: 'N/A',
                peak: 'N/A',
                offset: 'N/A',
                total: 'Half-life ~6 hours'
            },
            notes: 'Take on empty stomach for brain effects. Take with food for liver effects.'
        }
    },
      interactions: ['Stimulants (Reduces euphoria)', 'Alcohol (Must take BEFORE alcohol, taking after can worsen liver damage)'],
      harmReduction: [
        'Cycle it to avoid anhedonia',
        'Take >1hr before drinking alcohol to protect liver',
        'Smells like rotten eggs (normal)'
      ],
      legality: 'Supplement (US).',
      chemistry: {
        formula: 'C5H9NO3S',
        molecularWeight: '163.2 g/mol',
        class: 'Amino Acid'
      },
      history: 'Approved 1963.',
      routes: ['Oral', 'IV'],
      afterEffects: 'None.',
      riskLevel: 'low',
      aliases: ['acetylcysteine']
    }
];
