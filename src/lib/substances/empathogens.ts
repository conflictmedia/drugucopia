// Psychoactive Substances Documentation - Empathogens

import { Substance } from './types';

export const empathogens: Substance[] = [
  {
    id: 'mdma',
    name: 'MDMA',
    commonNames: ['Ecstasy', 'Molly', 'E', 'Rolls', 'Beans'],
    category: 'empathogens',
    class: 'Phenethylamine',
    description: 'MDMA (3,4-methylenedioxymethamphetamine) is a synthetic psychoactive drug with both stimulant and psychedelic properties. It is classified as an entactogen or empathogen for its ability to enhance feelings of emotional closeness and empathy. MDMA acts primarily as a releasing agent for serotonin, dopamine, and norepinephrine, while also acting as a serotonin reuptake inhibitor. The MDMA experience is characterized by increased energy, emotional warmth, distorted perception of time, and enhanced enjoyment of sensory experiences. MDMA has shown significant therapeutic potential for PTSD treatment.',
    effects: {
      positive: ['Intense feelings of empathy and connection', 'Enhanced appreciation of music and touch', 'Reduced anxiety and fear', 'Increased sociability and openness', 'Mild euphoria and sense of well-being', 'Therapeutic processing of trauma'],
      neutral: ['Increased energy and alertness', 'Jaw clenching and teeth grinding', 'Increased heart rate and blood pressure', 'Suppressed appetite', 'Dilated pupils', 'Enhanced sensory perception'],
      negative: ['Dehydration or over-hydration', 'Hyperthermia in hot environments', 'Depression during comedown', 'Memory and cognitive issues with frequent use', 'Neurotoxicity with heavy use', 'Teeth damage from clenching']
    },
    dosage: {
      threshold: '30-50mg',
      light: '50-75mg',
      common: '75-125mg',
      strong: '125-175mg',
      heavy: '175mg+'
    },
    duration: {
      onset: '20-40 minutes',
      comeup: '30-60 minutes',
      peak: '2-3 hours',
      offset: '2-3 hours',
      total: '4-6 hours'
    },
    routeData: {
      Oral: {
        dosage: { threshold: '30-50mg', light: '50-75mg', common: '75-125mg', strong: '125-175mg', heavy: '175mg+' },
        duration: { onset: '20-40 minutes', comeup: '30-60 minutes', peak: '2-3 hours', offset: '2-3 hours', total: '4-6 hours' },
        notes: 'Most common route. Effects felt in 30-60 minutes. Redosing less effective due to serotonin depletion.'
      },
      Insufflation: {
        dosage: { threshold: '20-40mg', light: '40-60mg', common: '60-100mg', strong: '100-140mg', heavy: '140mg+' },
        duration: { onset: '5-15 minutes', comeup: '15-30 minutes', peak: '1-2 hours', offset: '1-2 hours', total: '2-4 hours' },
        notes: 'Faster onset but painful. Shorter duration. Higher neurotoxicity risk.'
      },
      Rectal: {
        dosage: { threshold: '25-40mg', light: '40-60mg', common: '60-100mg', strong: '100-140mg', heavy: '140mg+' },
        duration: { onset: '10-20 minutes', comeup: '20-40 minutes', peak: '2-3 hours', offset: '2-3 hours', total: '4-6 hours' },
        notes: 'Higher bioavailability (~95%). Lower dose needed. Often called \'plugging\'.'
      },
      Sublingual: {
        dosage: { threshold: '25.5-42.5mg', light: '42.5-63.8mg', common: '63.8-106.3mg', strong: '106.3-148.8mg', heavy: '148.8mg' },
        duration: { onset: '10-20 minutes', comeup: '20-40 minutes', peak: '2-3 hours', offset: '2-3 hours', total: '4-6 hours' },
        notes: 'Faster onset than oral. Good bioavailability. Held under tongue.'
      }
    },
    interactions: ['SSRIs (reduce effects, risk of serotonin syndrome)', 'MAOIs (dangerous)', 'Other stimulants', 'Alcohol', 'Tramadol', 'Lithium'],
    harmReduction: [
      'Test substances with reagent kits - many "Molly" contains adulterants',
      'Stay cool and take breaks from dancing',
      'Drink water but do not over-hydrate (500ml per hour)',
      'Wait at least 1-3 months between uses to reduce neurotoxicity',
      'Take supplements (antioxidants, magnesium, 5-HTP after)',
      'Avoid mixing with other substances',
      'Do not use if you have heart conditions',
      'Have trusted friends present'
    ],
    legality: 'Illegal in most countries. Schedule I controlled substance. Special exemptions exist for clinical research and some therapeutic applications.',
    chemistry: {
      formula: 'C11H15NO2',
      molecularWeight: '193.25 g/mol',
      class: 'Phenethylamine derivative'
    },
    history: 'MDMA was first synthesized in 1912 but remained obscure until rediscovered by Alexander Shulgin in the 1970s. It gained popularity in psychotherapy before becoming a popular recreational drug. It was made illegal in the US in 1985.',
    routes: ['Oral', 'Insufflation', 'Rectal', 'Sublingual'],
    afterEffects: 'Comedown lasting 1-3 days including fatigue, low mood, and difficulty concentrating. More severe with frequent use.',
    riskLevel: 'moderate',
    aliases: ['3,4-methylenedioxymethamphetamine', 'methylsafrylamine']
  },
  {
    id: 'mda',
    name: 'MDA',
    commonNames: ['Sass', 'Sally', 'Mellow Drug of America', 'Love Drug'],
    category: 'empathogens',
    class: 'Phenethylamine',
    description: 'MDA (3,4-methylenedioxyamphetamine) is a synthetic empathogen and stimulant closely related to MDMA. It produces stronger visual and psychedelic effects than MDMA with somewhat less emphasis on emotional openness. MDA has a longer duration and is often considered more "trippy." MDA acts as a releasing agent for serotonin, dopamine, and norepinephrine, with more pronounced effects on serotonin receptors compared to MDMA.',
    effects: {
      positive: ['Euphoria', 'Empathy and connection', 'Enhanced sensory perception', 'Visual effects', 'Energy and stimulation'],
      neutral: ['Jaw clenching', 'Nystagmus (eye wiggles)', 'Increased heart rate', 'Sweating', 'Long duration'],
      negative: ['Neurotoxicity with heavy use', 'Comedown', 'Dehydration risk', 'Hyperthermia', 'More neurotoxic than MDMA']
    },
    dosage: {
      threshold: '30-50mg',
      light: '50-100mg',
      common: '100-150mg',
      strong: '150-200mg',
      heavy: '200mg+'
    },
    duration: {
      onset: '30-60 minutes',
      comeup: '45-90 minutes',
      peak: '2-4 hours',
      offset: '3-5 hours',
      total: '6-10 hours'
    },
    routeData: {
      Oral: {
        dosage: { threshold: '30-50mg', light: '50-100mg', common: '100-150mg', strong: '150-200mg', heavy: '200mg' },
        duration: { onset: '30-60 minutes', comeup: '45-90 minutes', peak: '2-4 hours', offset: '3-5 hours', total: '6-10 hours' },
        notes: 'Most common route for this substance.'
      },
      Insufflation: {
        dosage: { threshold: '21-35mg', light: '35-70mg', common: '70-105mg', strong: '105-140mg', heavy: '140mg' },
        duration: { onset: '5-15 minutes', comeup: '10-30 minutes', peak: '2-3 hours', offset: '2-4 hours', total: '5-8 hours' },
        notes: 'Faster onset than oral. Nasal irritation possible with repeated use.'
      }
    },
    interactions: ['SSRIs (reduce effects)', 'MAOIs (dangerous)', 'Other stimulants', 'Alcohol', 'Tramadol'],
    harmReduction: [
      'More neurotoxic than MDMA - use less frequently',
      'Longer duration - plan accordingly',
      'Stay cool and hydrated but do not over-hydrate',
      'Test substances - MDA is often sold as MDMA',
      'Wait at least 1-3 months between uses',
      'More psychedelic than MDMA - different headspace'
    ],
    legality: 'Schedule I controlled substance in the US. Illegal internationally.',
    chemistry: {
      formula: 'C10H13NO2',
      molecularWeight: '179.22 g/mol',
      class: 'Phenethylamine'
    },
    history: 'MDA was first synthesized in 1910 and was used in psychotherapy before becoming a popular recreational drug. It was scheduled in 1970.',
    routes: ['Oral', 'Insufflation'],
    afterEffects: 'Comedown lasting 1-2 days. More draining than MDMA.',
    riskLevel: 'moderate',
    aliases: ['3,4-methylenedioxyamphetamine', 'tenamfetamine']
  }
];
