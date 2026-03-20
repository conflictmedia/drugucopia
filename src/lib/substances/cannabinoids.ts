// Psychoactive Substances Documentation - Cannabinoids

import { Substance } from './types';

export const cannabinoids: Substance[] = [
  {
    id: 'thc',
    name: 'THC',
    commonNames: ['Delta-9-THC', 'Marijuana', 'Cannabis', 'Weed', 'Pot', 'Dank'],
    category: 'cannabinoids',
    class: 'Cannabinoid',
    description: 'Delta-9-tetrahydrocannabinol (THC) is the primary psychoactive compound in cannabis. It acts primarily as a partial agonist at cannabinoid receptors CB1 and CB2, producing the characteristic effects of cannabis intoxication including euphoria, relaxation, altered perception, and increased appetite. THC has been used for thousands of years for both recreational and medicinal purposes, with modern research validating its efficacy for chronic pain, nausea, and various other conditions.',
    effects: {
      positive: ['Relaxation and stress relief', 'Euphoria and elevated mood', 'Enhanced sensory perception', 'Increased appreciation of music and food', 'Creativity enhancement', 'Pain relief', 'Nausea relief'],
      neutral: ['Altered perception of time', 'Increased appetite ("munchies")', 'Dry mouth', 'Red eyes', 'Slowed reaction time'],
      negative: ['Anxiety and paranoia', 'Impaired memory and cognition', 'Panic attacks in susceptible individuals', 'Coordination impairment', 'Increased heart rate', 'Possible exacerbation of mental health issues', 'Cannabis use disorder']
    },
    dosage: {
      threshold: '1-2.5mg',
      light: '2.5-5mg',
      common: '5-15mg',
      strong: '15-30mg',
      heavy: '30mg+'
    },
    duration: {
      onset: '5-15s (smoking/vaping), 30-90min (edibles)',
      comeup: '15-30min (smoking), 1-2hrs (edibles)',
      peak: '30-60min (smoking), 2-4hrs (edibles)',
      offset: '1-3 hours (smoking), 4-8 hours (edibles)',
      total: '2-4 hours (smoking), 6-12 hours (edibles)'
    },
    routeData: {
      Smoking: {
        dosage: { threshold: '0.5-1.3mg', light: '1.3-2.5mg', common: '2.5-7.5mg', strong: '7.5-15mg', heavy: '15mg' },
        duration: { onset: '5-15 seconds', comeup: '30-90 seconds', peak: '15-30 minutes', offset: '1-2 hours', total: '1-2 hours' },
        notes: 'Very rapid onset. Shorter duration. Higher addiction potential.'
      },
      Oral: {
        dosage: { threshold: '2.5-5mg', light: '5-10mg', common: '10-25mg', strong: '25-50mg', heavy: '50mg+' },
        duration: { onset: '30-90 minutes', comeup: '1-2 hours', peak: '2-4 hours', offset: '4-8 hours', total: '6-12 hours' },
        notes: 'Edibles. Converted to 11-hydroxy-THC in liver. Delayed onset, longer duration, more intense body high.'
      },
      Sublingual: {
        dosage: { threshold: '2-5mg', light: '5-10mg', common: '10-20mg', strong: '20-40mg', heavy: '40mg+' },
        duration: { onset: '15-45 minutes', comeup: '30-60 minutes', peak: '2-3 hours', offset: '2-4 hours', total: '4-8 hours' },
        notes: 'Tinctures. Faster onset than edibles. Moderate duration.'
      },
      Topical: {
        dosage: { threshold: '1-2.5mg', light: '2.5-5mg', common: '5-15mg', strong: '15-30mg', heavy: '30mg' },
        duration: { onset: '1-5 minutes', comeup: '5-15 minutes', peak: '30-60min (smoking), 2-4hrs (edibles)', offset: '1-3 hours (smoking), 4-8 hours (edibles)', total: '2-4 hours (smoking), 6-12 hours (edibles)' },
        notes: 'Medical use for local anesthesia. Minimal systemic effects.'
      }
    },
    interactions: ['Alcohol', 'Other depressants', 'Stimulants', 'SSRIs', 'Antipsychotics'],
    harmReduction: [
      'Start low and go slow, especially with edibles',
      'Wait at least 2 hours before redosing edibles',
      'Avoid driving while impaired',
      'Be aware that edible effects are stronger and longer-lasting',
      'Choose a safe, comfortable environment',
      'Have snacks and water available',
      'Avoid if you have a personal or family history of psychosis',
      'CBD can help counteract anxiety from too much THC'
    ],
    legality: 'Varies widely. Legal for recreational use in some jurisdictions. Medical use legal in many more. Still federally illegal in the US but legal in many states.',
    chemistry: {
      formula: 'C21H30O2',
      molecularWeight: '314.46 g/mol',
      class: 'Cannabinoid'
    },
    history: 'Cannabis has been used for thousands of years for fiber, medicine, and psychoactive purposes. THC was first isolated in 1964. The plant has a complex legal and cultural history, with prohibition in the 20th century followed by ongoing legalization efforts.',
    routes: ['Inhalation (smoking, vaping)', 'Oral (edibles, tinctures)', 'Sublingual', 'Topical'],
    afterEffects: 'Possible grogginess or residual effects the next day. Some report enhanced mood and relaxation.',
    riskLevel: 'low',
    aliases: ['delta-9-tetrahydrocannabinol', 'tetrahydrocannabinol']
  },
  {
    id: 'cbd',
    name: 'CBD',
    commonNames: ['Cannabidiol', 'Cannabidiol Oil', 'Hemp Oil'],
    category: 'cannabinoids',
    class: 'Cannabinoid',
    description: 'Cannabidiol (CBD) is a non-intoxicating phytocannabinoid found in cannabis plants. Unlike THC, CBD does not produce euphoria or impairment at typical doses. It has gained significant popularity for its potential therapeutic applications, including anxiety, pain, inflammation, and seizure disorders. CBD modulates the endocannabinoid system and has various mechanisms of action including weak CB1/CB2 receptor activity, serotonin receptor modulation, and inhibition of fatty acid amide hydrolase (FAAH).',
    effects: {
      positive: ['Relaxation without intoxication', 'Anxiety relief', 'Pain reduction', 'Anti-inflammatory effects', 'Seizure reduction (in specific conditions)', 'Improved sleep quality'],
      neutral: ['Mild sedation at high doses', 'Dry mouth', 'Appetite changes'],
      negative: ['Drowsiness at high doses', 'Potential drug interactions', 'GI upset', 'Liver enzyme elevation (at very high doses)']
    },
    dosage: {
      threshold: '5-10mg',
      light: '10-25mg',
      common: '25-50mg',
      strong: '50-100mg',
      heavy: '100mg+'
    },
    duration: {
      onset: '15-45 minutes (sublingual), 30-90 minutes (oral)',
      comeup: '30-60 minutes',
      peak: '1-3 hours',
      offset: '2-4 hours',
      total: '4-6 hours'
    },
    routeData: {
      Oral: {
        dosage: { threshold: '5-10mg', light: '10-25mg', common: '25-50mg', strong: '50-100mg', heavy: '100mg' },
        duration: { onset: '30-90 minutes', comeup: '30-60 minutes', peak: '1-3 hours', offset: '2-4 hours', total: '4-6 hours' },
        notes: 'Lower bioavailability (6-20%). Food increases absorption. Long-lasting effects.'
      },
      Sublingual: {
        dosage: { threshold: '4.3-8.5mg', light: '8.5-21.3mg', common: '21.3-42.5mg', strong: '42.5-85mg', heavy: '85mg' },
        duration: { onset: '15-45 minutes', comeup: '30-60 minutes', peak: '1-3 hours', offset: '2-4 hours', total: '4-6 hours' },
        notes: 'Faster onset than oral. Good bioavailability. Held under tongue.'
      }
    },
    interactions: ['CYP450 substrates', 'Blood thinners', 'Grapefruit juice', 'Certain antiepileptics'],
    harmReduction: [
      'Start with low doses and titrate up',
      'Check for drug interactions if on medications',
      'Quality varies widely - choose reputable brands',
      'Not all products contain the advertised amount of CBD',
      'Full-spectrum products may contain trace THC'
    ],
    legality: 'Legal federally in the US when derived from hemp (<0.3% THC). Legal in many countries with varying regulations.',
    chemistry: {
      formula: 'C21H30O2',
      molecularWeight: '314.46 g/mol',
      class: 'Cannabinoid'
    },
    history: 'CBD was first isolated in 1940. It gained significant attention in the 2010s for its therapeutic potential, particularly after success stories involving childhood epilepsy.',
    routes: ['Oral (oils, capsules, edibles)', 'Sublingual (tinctures)', 'Topical', 'Inhalation'],
    afterEffects: 'None significant. May contribute to improved sleep quality.',
    riskLevel: 'low',
    aliases: ['cannabidiol']
  }
];
