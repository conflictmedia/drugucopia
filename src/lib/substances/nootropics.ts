// Psychoactive Substances Documentation - Nootropics

import { Substance } from './types';

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
        dosage: { threshold: '400-800mg', light: '800-1600mg', common: '1600-3200mg', strong: '3200-4800mg', heavy: '4800mg' },
        duration: { onset: '30-60 minutes', comeup: '1-2 hours', peak: '2-4 hours', offset: '4-6 hours', total: '6-8 hours' },
        notes: 'Most common route. Effects may accumulate with regular use.'
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
    id: 'modafinil',
    name: 'Modafinil',
    commonNames: ['Provigil', 'Moda', 'Modalert', 'Smart Drug'],
    category: 'nootropics',
    class: 'Eugeroic',
    description: 'Modafinil is a wakefulness-promoting agent used for narcolepsy, shift work sleep disorder, and sleep apnea. It has a unique mechanism involving orexin/hypocretin systems and weak dopamine reuptake inhibition. Modafinil is popular off-label as a cognitive enhancer.',
    effects: {
      positive: ['Wakefulness', 'Improved focus', 'Cognitive enhancement', 'Mood elevation', 'No significant crash'],
      neutral: ['Mild stimulation', 'Decreased appetite', 'Headache'],
      negative: ['Insomnia if taken late', 'Anxiety', 'Skin reactions (rare but serious)', 'Dependency potential (low)']
    },
    dosage: {
      threshold: '50-100mg',
      light: '100-200mg',
      common: '200-400mg',
      strong: '400-600mg',
      heavy: '600mg+'
    },
    duration: {
      onset: '30-60 minutes',
      comeup: '1-2 hours',
      peak: '2-4 hours',
      offset: '4-8 hours',
      total: '12-15 hours'
    },
    routeData: {
      Oral: {
        dosage: { threshold: '50-100mg', light: '100-200mg', common: '200-400mg', strong: '400-600mg', heavy: '600mg+' },
        duration: { onset: '30-60 minutes', comeup: '1-2 hours', peak: '2-4 hours', offset: '4-8 hours', total: '12-15 hours' },
        notes: 'Wakefulness-promoting agent. Very long half-life (12-15 hours). Take early in day. Food delays but does not reduce absorption.'
      }
    },
    interactions: ['Hormonal contraceptives (reduced effectiveness)', 'CYP2C19 substrates', 'CYP3A4 inducers', 'Alcohol'],
    harmReduction: [
      'Take early in morning - long half-life affects sleep',
      'Stay hydrated',
      'Can reduce effectiveness of birth control',
      'Less abuse potential than traditional stimulants',
      'Watch for skin rashes - seek medical attention if severe'
    ],
    legality: 'Prescription only. Schedule IV controlled substance in the US.',
    chemistry: {
      formula: 'C15H15NO2S',
      molecularWeight: '273.35 g/mol',
      class: 'Sulfinylacetamide'
    },
    history: 'Modafinil was developed in France in the 1970s and approved in the US in 1998. It has gained popularity as a "smart drug" for cognitive enhancement.',
    routes: ['Oral'],
    afterEffects: 'Possible insomnia if taken late. Generally no significant crash.',
    riskLevel: 'low',
    aliases: ['2-[(diphenylmethyl)sulfinyl]acetamide']
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
        dosage: { threshold: '5-10mg', light: '10-20mg', common: '20-30mg', strong: '30-40mg', heavy: '40mg' },
        duration: { onset: '20-40 minutes', comeup: '30-60 minutes', peak: '1-2 hours', offset: '2-4 hours', total: '3-5 hours' },
        notes: 'Most common route. Effects may accumulate over time.'
      },
      Sublingual: {
        dosage: { threshold: '4.3-8.5mg', light: '8.5-17mg', common: '17-25.5mg', strong: '25.5-34mg', heavy: '34mg' },
        duration: { onset: '10-20 minutes', comeup: '20-40 minutes', peak: '1-2 hours', offset: '2-4 hours', total: '3-5 hours' },
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
  }
];
