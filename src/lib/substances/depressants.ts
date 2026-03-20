// Psychoactive Substances Documentation - Depressants

import { Substance } from './types';

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
        dosage: { threshold: '1-2 drinks', light: '2-3 drinks', common: '3-5 drinks', strong: '5-8 drinks', heavy: '8+ drinks' },
        duration: { onset: '10-20 minutes', comeup: '20-40 minutes', peak: '45-90 minutes', offset: '2-3 hours', total: '3-6 hours' },
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
        dosage: { threshold: '0.5-1g', light: '1-1.5g', common: '1.5-2.5g', strong: '2.5-3.5g', heavy: '3.5g+' },
        duration: { onset: '10-20 minutes', comeup: '20-40 minutes', peak: '1-2 hours', offset: '1-2 hours', total: '2-4 hours' },
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
  }
];
