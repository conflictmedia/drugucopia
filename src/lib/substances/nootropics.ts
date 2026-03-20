// Nootropics Substances

import type { Substance } from '../types';

export const nootropics: Substance[] = [
  {
      id: 'piracetam',
      name: 'Piracetam',
      commonNames: ['Nootropil', 'Pira', 'Nootrop'],
      category: 'nootropics',
      class: 'Racetam',
      description: 'Piracetam is the original nootropic compound, first synthesized in 1964. It is a cyclic derivative of GABA and is thought to enhance cognitive function through modulation of neurotransmitter systems and improved neuronal membrane fluidity. Piracetam is widely used as a cognitive enhancer and has a long history of relatively safe use.',
      effects: {
        positive: ['Improved memory and learning', 'Enhanced focus', 'Better verbal fluency', 'Neuroprotective properties'],
        neutral: ['Mild stimulation', 'Increased dream vividness'],
        negative: ['Headaches (common without choline source)', 'Mild anxiety', 'Sleep disruption if taken late']
      },
      dosage: {
        threshold: '400-800mg',
        light: '800-1600mg',
        common: '1600-3200mg',
        strong: '3200-4800mg',
        heavy: '4800mg+'
      },
      duration: {
        onset: '30-60 minutes',
        comeup: '1-2 hours',
        peak: '2-4 hours',
        offset: '4-6 hours',
        total: '6-8 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '400-800mg',
              light: '800-1600mg',
              common: '1600-3200mg',
              strong: '3200-4800mg',
              heavy: '4800mg'
          },
          duration: {
              onset: '30-60 minutes',
              comeup: '1-2 hours',
              peak: '2-4 hours',
              offset: '4-6 hours',
              total: '6-8 hours'
          },
          notes: 'Most common route for this substance.'
      }
  },
      interactions: ['Choline supplements (synergistic)', 'Other racetams', 'Stimulants'],
      harmReduction: [
        'Take with a choline source to prevent headaches',
        'Effects may take weeks of daily use to become noticeable',
        'Start with lower doses to assess tolerance',
        'Avoid taking late in the day',
        'Very low toxicity profile'
      ],
      legality: 'Unscheduled in US. Available as supplement. Prescription in some countries.',
      chemistry: {
        formula: 'C6H10N2O2',
        molecularWeight: '142.16 g/mol',
        class: 'Racetam'
      },
      history: 'Piracetam was first synthesized in 1964 by Romanian chemist Corneliu E. Giurgea, who coined the term "nootropic."',
      routes: ['Oral'],
      afterEffects: 'Generally minimal. Effects accumulate with regular use.',
      riskLevel: 'low',
      aliases: ['2-oxo-1-pyrrolidine acetamide']
    },
  {
      id: 'aniracetam',
      name: 'Aniracetam',
      commonNames: ['Ampamet', 'Draganon', 'Ani'],
      category: 'nootropics',
      class: 'Racetam',
      description: 'Aniracetam is a nootropic compound of the racetam family, more potent than piracetam. It has anxiolytic and mood-enhancing properties in addition to cognitive benefits. Aniracetam is fat-soluble and has a shorter half-life than piracetam.',
      effects: {
        positive: ['Enhanced creativity and holistic thinking', 'Reduced anxiety', 'Improved memory', 'Better mood', 'Enhanced verbal fluency'],
        neutral: ['Short duration', 'Fat-soluble (take with food)'],
        negative: ['Headaches without choline', 'Bitter taste']
      },
      dosage: {
        threshold: '200-400mg',
        light: '400-750mg',
        common: '750-1500mg',
        strong: '1500-2000mg',
        heavy: '2000mg+'
      },
      duration: {
        onset: '30-60 minutes',
        comeup: '45-90 minutes',
        peak: '1-3 hours',
        offset: '2-3 hours',
        total: '3-5 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '200-400mg',
              light: '400-750mg',
              common: '750-1500mg',
              strong: '1500-2000mg',
              heavy: '2000mg'
          },
          duration: {
              onset: '30-60 minutes',
              comeup: '45-90 minutes',
              peak: '1-3 hours',
              offset: '2-3 hours',
              total: '3-5 hours'
          },
          notes: 'Most common route for this substance.'
      }
  },
      interactions: ['Choline sources', 'Other racetams', 'Alcohol'],
      harmReduction: [
        'Take with fat-containing food for better absorption',
        'Take with choline to prevent headaches',
        'Short half-life - may need multiple doses',
        'More potent than piracetam - use lower doses'
      ],
      legality: 'Unscheduled in US. Not FDA approved. Available as supplement.',
      chemistry: {
        formula: 'C12H13NO3',
        molecularWeight: '219.24 g/mol',
        class: 'Racetam'
      },
      history: 'Aniracetam was developed in the 1970s as a more potent alternative to piracetam.',
      routes: ['Oral'],
      afterEffects: 'Minimal. Anxiolytic effects may persist.',
      riskLevel: 'low',
      aliases: ['1-(4-methoxybenzoyl)-2-pyrrolidinone']
    },
  {
      id: 'noopept',
      name: 'Noopept',
      commonNames: ['Omberacetam', 'GVS-111', 'Noo'],
      category: 'nootropics',
      class: 'Dipeptide',
      description: 'Noopept is a synthetic nootropic compound that is significantly more potent than piracetam. It is a dipeptide that may enhance memory, learning, and cognitive function. Noopept has neuroprotective properties and may promote BDNF and NGF expression.',
      effects: {
        positive: ['Enhanced memory and learning', 'Improved focus', 'Mild anxiolytic effect', 'Neuroprotective properties'],
        neutral: ['Very potent - low doses needed', 'Bitter taste'],
        negative: ['Headaches possible', 'Irritability in some users', 'Fatigue with high doses']
      },
      dosage: {
        threshold: '5-10mg',
        light: '10-20mg',
        common: '20-30mg',
        strong: '30-40mg',
        heavy: '40mg+'
      },
      duration: {
        onset: '20-40 minutes',
        comeup: '30-60 minutes',
        peak: '1-2 hours',
        offset: '2-4 hours',
        total: '3-5 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '5-10mg',
              light: '10-20mg',
              common: '20-30mg',
              strong: '30-40mg',
              heavy: '40mg'
          },
          duration: {
              onset: '20-40 minutes',
              comeup: '30-60 minutes',
              peak: '1-2 hours',
              offset: '2-4 hours',
              total: '3-5 hours'
          },
          notes: 'Most common route for this substance.'
      },
      Sublingual: {
          dosage: {
              threshold: '4.3-8.5mg',
              light: '8.5-17mg',
              common: '17-25.5mg',
              strong: '25.5-34mg',
              heavy: '34mg'
          },
          duration: {
              onset: '10-20 minutes',
              comeup: '20-40 minutes',
              peak: '1-2 hours',
              offset: '2-4 hours',
              total: '3-5 hours'
          },
          notes: 'Faster onset than oral. Good bioavailability. Held under tongue.'
      }
  },
      interactions: ['Choline sources', 'Other racetams', 'Stimulants'],
      harmReduction: [
        'Much more potent than piracetam - use milligram scale',
        'May work better with choline source',
        'Sublingual administration may improve absorption',
        'Take breaks to prevent tolerance',
        'Effects may accumulate over time'
      ],
      legality: 'Unscheduled in US. Available as supplement. Prescription in Russia.',
      chemistry: {
        formula: 'C17H22N2O4',
        molecularWeight: '318.37 g/mol',
        class: 'Dipeptide derivative'
      },
      history: 'Noopept was developed in Russia in the 1990s and is used there as a prescription nootropic.',
      routes: ['Oral', 'Sublingual'],
      afterEffects: 'Generally minimal. Some report lasting cognitive benefits.',
      riskLevel: 'low',
      aliases: ['N-phenylacetyl-L-prolylglycine ethyl ester']
    },
  {
      id: 'alpha-gpc',
      name: 'Alpha-GPC',
      commonNames: ['Choline Alfoscerate', 'GPC', 'Alpha-Glycerylphosphorylcholine'],
      category: 'nootropics',
      class: 'Choline Source',
      description: 'Alpha-GPC is a natural choline compound found in the brain. It is one of the most bioavailable forms of choline and is used to support cognitive function and acetylcholine production. Alpha-GPC is often stacked with racetams to prevent headaches and enhance effects.',
      effects: {
        positive: ['Enhanced memory', 'Improved focus', 'Better physical performance', 'Supports acetylcholine production', 'Enhanced dream recall'],
        neutral: ['Mild stimulation'],
        negative: ['Headaches at high doses', 'Fishy body odor at very high doses', 'Insomnia if taken late']
      },
      dosage: {
        threshold: '100-150mg',
        light: '150-300mg',
        common: '300-600mg',
        strong: '600-900mg',
        heavy: '900mg+'
      },
      duration: {
        onset: '30-60 minutes',
        comeup: '1-2 hours',
        peak: '2-4 hours',
        offset: '4-8 hours',
        total: '6-10 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '100-150mg',
              light: '150-300mg',
              common: '300-600mg',
              strong: '600-900mg',
              heavy: '900mg'
          },
          duration: {
              onset: '30-60 minutes',
              comeup: '1-2 hours',
              peak: '2-4 hours',
              offset: '4-8 hours',
              total: '6-10 hours'
          },
          notes: 'Most common route for this substance.'
      }
  },
      interactions: ['Racetams (synergistic)', 'Huperzine A', 'Acetylcholinesterase inhibitors'],
      harmReduction: [
        'Start with lower doses to assess tolerance',
        'Take earlier in the day',
        'Often paired with racetam nootropics',
        'Very safe supplement',
        'Stay hydrated'
      ],
      legality: 'Unscheduled. Available as dietary supplement in most countries.',
      chemistry: {
        formula: 'C8H20NO6P',
        molecularWeight: '257.22 g/mol',
        class: 'Phospholipid'
      },
      history: 'Alpha-GPC has been used in Europe as a prescription medication for cognitive decline since the 1980s.',
      routes: ['Oral'],
      afterEffects: 'None significant. Supports ongoing cognitive function.',
      riskLevel: 'low',
      aliases: ['L-α-glycerylphosphorylcholine']
    },
  {
      id: 'l-tyrosine',
      name: 'L-Tyrosine',
      commonNames: ['Tyrosine', 'Tyr'],
      category: 'nootropics',
      class: 'Amino Acid',
      description: 'L-Tyrosine is an amino acid that serves as a precursor to dopamine, norepinephrine, and epinephrine. It is used to enhance cognitive performance under stress, improve focus, and support mood. Tyrosine is particularly effective in situations involving stress, sleep deprivation, or demanding mental tasks.',
      effects: {
        positive: ['Improved focus under stress', 'Better working memory', 'Enhanced mood', 'Increased motivation', 'Reduced effects of sleep deprivation'],
        neutral: ['Mild stimulation', 'May reduce appetite'],
        negative: ['GI upset at high doses', 'Headache', 'May worsen anxiety in some', 'Interacts with thyroid medication']
      },
      dosage: {
        threshold: '250-500mg',
        light: '500-1000mg',
        common: '1000-2000mg',
        strong: '2000-4000mg',
        heavy: '4000mg+'
      },
      duration: {
        onset: '30-60 minutes',
        comeup: '45-90 minutes',
        peak: '1-3 hours',
        offset: '2-4 hours',
        total: '4-6 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '250-500mg',
              light: '500-1000mg',
              common: '1000-2000mg',
              strong: '2000-4000mg',
              heavy: '4000mg'
          },
          duration: {
              onset: '30-60 minutes',
              comeup: '45-90 minutes',
              peak: '1-3 hours',
              offset: '2-4 hours',
              total: '4-6 hours'
          },
          notes: 'Most common route for this substance.'
      }
  },
      interactions: ['Thyroid medications', 'MAOIs', 'Levodopa', 'Stimulants'],
      harmReduction: [
        'Take on empty stomach for better absorption',
        'Most effective under stress or sleep deprivation',
        'Do not take if you have thyroid conditions without consulting doctor',
        'Avoid taking late in the day',
        'Cycling may improve effectiveness'
      ],
      legality: 'Unscheduled. Available as dietary supplement.',
      chemistry: {
        formula: 'C9H11NO3',
        molecularWeight: '181.19 g/mol',
        class: 'Amino acid'
      },
      history: 'Tyrosine was first isolated from cheese protein in 1846. Its cognitive benefits were researched extensively in the late 20th century.',
      routes: ['Oral'],
      afterEffects: 'Minimal. Benefits most apparent during stressful situations.',
      riskLevel: 'low',
      aliases: ['4-hydroxyphenylalanine']
    },
  {
      id: 'n-acetyl-cysteine',
      name: 'N-Acetyl Cysteine',
      commonNames: ['NAC', 'Acetylcysteine', 'Fluimucil'],
      category: 'nootropics',
      class: 'Amino Acid Derivative',
      description: 'N-Acetyl Cysteine (NAC) is a supplement form of the amino acid cysteine. It serves as a precursor to glutathione, the body\'s master antioxidant. NAC has been studied for liver protection, respiratory health, psychiatric conditions, and reducing drug cravings. It may help protect against oxidative stress from drug use.',
      effects: {
        positive: ['Antioxidant support', 'Liver protection', 'Reduced drug cravings', 'Respiratory support', 'May help with OCD and addiction'],
        neutral: ['Unpleasant smell/taste', 'May cause GI upset'],
        negative: ['Nausea', 'Diarrhea at high doses', 'Rare allergic reactions']
      },
      dosage: {
        threshold: '200-400mg',
        light: '400-600mg',
        common: '600-1200mg',
        strong: '1200-1800mg',
        heavy: '1800mg+'
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
              threshold: '200-400mg',
              light: '400-600mg',
              common: '600-1200mg',
              strong: '1200-1800mg',
              heavy: '1800mg'
          },
          duration: {
              onset: '30-60 minutes',
              comeup: '1-2 hours',
              peak: '2-4 hours',
              offset: '4-8 hours',
              total: '6-12 hours'
          },
          notes: 'Most common route for this substance.'
      },
      Intravenous: {
          dosage: {
              threshold: '80-160mg',
              light: '160-240mg',
              common: '240-480mg',
              strong: '480-720mg',
              heavy: '720mg'
          },
          duration: {
              onset: '10-30 seconds',
              comeup: '1-5 minutes',
              peak: '1-2 hours',
              offset: '2-4 hours',
              total: '3-6 hours'
          },
          notes: 'Immediate onset. 100% bioavailability. Very high risk. Requires sterile technique.'
      },
      Inhalation: {
          dosage: {
              threshold: '120-240mg',
              light: '240-360mg',
              common: '360-720mg',
              strong: '720-1080mg',
              heavy: '1080mg'
          },
          duration: {
              onset: '10-30 seconds',
              comeup: '1-5 minutes',
              peak: '1-2 hours',
              offset: '2-5 hours',
              total: '4-7 hours'
          },
          notes: 'Rapid onset through lungs. Similar to smoking.'
      }
  },
      interactions: ['Activated charcoal', 'Nitroglycerin', 'Blood thinners', 'Immunosuppressants'],
      harmReduction: [
        'Take with food to reduce GI upset',
        'Stay hydrated',
        'Consider cycling - long-term high doses may be counterproductive',
        'May reduce effectiveness of some medications',
        'Useful for harm reduction after substance use'
      ],
      legality: 'Unscheduled. Available as supplement. Also FDA approved as prescription medication.',
      chemistry: {
        formula: 'C5H9NO3S',
        molecularWeight: '163.19 g/mol',
        class: 'Acetylated amino acid'
      },
      history: 'NAC was first developed in the 1960s and has been used medically for acetaminophen overdose since the 1970s.',
      routes: ['Oral', 'Intravenous (medical)', 'Inhalation (medical)'],
      afterEffects: 'None significant. Supports ongoing antioxidant status.',
      riskLevel: 'low',
      aliases: ['N-acetyl-L-cysteine']
    },

    // ============================================
    // DISSOCIATIVES - Research Chemicals
    // ============================================
];
