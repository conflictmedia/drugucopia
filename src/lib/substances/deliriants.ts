// Psychoactive Substances Documentation - Deliriants

import { Substance } from './types';

export const deliriants: Substance[] = [
  {
    id: 'datura',
    name: 'Datura',
    commonNames: ['Jimson Weed', 'Devil\'s Trumpet', 'Thorn Apple', 'Moonflower'],
    category: 'deliriants',
    class: 'Tropane Alkaloid',
    description: 'Datura is a genus of plants containing potent deliriant alkaloids including scopolamine, hyoscyamine, and atropine. It has been used traditionally for its psychoactive properties but is notorious for its extreme danger. Datura produces true hallucinations (inability to distinguish from reality), extreme confusion, and has an extremely unfavorable safety profile. The difference between a psychoactive dose and a fatal dose is small.',
    effects: {
      positive: ['None reliably positive'],
      neutral: ['Anticholinergic effects', 'Mydriasis (pupil dilation)', 'Tachycardia', 'Dry mouth', 'Hyperthermia'],
      negative: ['EXTREMELY DANGEROUS', 'True hallucinations (can\'t distinguish from reality)', 'Complete delirium', 'Amnesia', 'Hyperthermia', 'Tachycardia', 'Death from overdose', 'Toxic dose close to active dose', 'Weeks of memory loss', 'Permanent damage possible']
    },
    dosage: {
      threshold: 'Variable and unpredictable',
      light: 'Not recommended',
      common: 'NOT SAFE',
      strong: 'LIFE THREATENING',
      heavy: 'LIKELY FATAL'
    },
    duration: {
      onset: '30-60 minutes',
      comeup: '1-2 hours',
      peak: '4-12 hours',
      offset: '12-48 hours',
      total: '24-72+ hours'
    },
    routeData: {
      Oral: {
        dosage: { threshold: 'Variable/unpredictable', light: 'NOT RECOMMENDED', common: 'DANGEROUS', strong: 'LIFE THREATENING', heavy: 'LIKELY FATAL' },
        duration: { onset: '30-60 minutes', comeup: '1-2 hours', peak: '4-12 hours', offset: '12-48 hours', total: '24-72+ hours' },
        notes: 'EXTREMELY DANGEROUS. Toxic dose very close to active dose. NOT RECOMMENDED under any circumstances.'
      }
    },
    interactions: ['ALL combinations are dangerous', 'Other anticholinergics', 'Alcohol', 'Any CNS active substance'],
    harmReduction: [
      'EXTREMELY DANGEROUS - not recommended under any circumstances',
      'Toxic dose is very close to active dose',
      'Potency varies wildly between plants and parts',
      'Causes true hallucinations that seem completely real',
      'Users have injured themselves during delirium',
      'Medical attention often required',
      'Deaths are common',
      'Can cause permanent memory and cognitive damage',
      'Many who try it once never try it again'
    ],
    legality: 'Plant is legal in most places. Extraction and use of alkaloids is illegal in many jurisdictions.',
    chemistry: {
      formula: 'Various tropane alkaloids (scopolamine C17H21NO4)',
      molecularWeight: '303.35 g/mol (scopolamine)',
      class: 'Tropane alkaloid'
    },
    history: 'Datura has been used for millennia in various cultures for its psychoactive properties. It has a long history of association with witchcraft and poisoning. Used by some indigenous cultures for ritual purposes.',
    routes: ['Oral (seeds, leaves, tea)', 'Smoking'],
    afterEffects: 'Extended recovery period. Memory problems may persist. Psychological trauma common.',
    riskLevel: 'very-high',
    aliases: ['Datura stramonium', 'scopolamine', 'atropine', 'hyoscyamine']
  },
  {
    id: 'diphenhydramine',
    name: 'Diphenhydramine',
    commonNames: ['Benadryl', 'DPH', 'Diph', 'Dimedrol'],
    category: 'deliriants',
    class: 'Antihistamine',
    description: 'Diphenhydramine is a first-generation antihistamine commonly used for allergies, insomnia, and motion sickness. At doses significantly above the therapeutic range, it produces deliriant effects characterized by realistic hallucinations, extreme drowsiness, and confusion. DPH is one of the most commonly abused over-the-counter medications, despite its generally unpleasant effects profile at recreational doses.',
    effects: {
      positive: ['None commonly reported', 'Sometimes used for sleep at therapeutic doses'],
      neutral: ['Sedation', 'Dry mouth', 'Blurred vision', 'Urinary retention'],
      negative: ['Confusion and delirium', 'Realistic hallucinations', 'Extreme drowsiness', 'Motor impairment', 'Rapid heart rate', 'Anxiety and restlessness', 'Memory loss', 'Risk of injury from delirious behavior', 'Seizure risk at very high doses']
    },
    dosage: {
      threshold: '100-200mg',
      light: '200-350mg',
      common: '350-500mg',
      strong: '500-700mg',
      heavy: '700mg+'
    },
    duration: {
      onset: '30-60 minutes',
      comeup: '1-2 hours',
      peak: '3-5 hours',
      offset: '4-8 hours',
      total: '6-12 hours'
    },
    routeData: {
      Oral: {
        dosage: { threshold: '100-200mg', light: '200-350mg', common: '350-500mg', strong: '500-700mg', heavy: '700mg' },
        duration: { onset: '30-60 minutes', comeup: '1-2 hours', peak: '3-5 hours', offset: '4-8 hours', total: '6-12 hours' },
        notes: 'Only practical route. Effects are generally unpleasant. High doses are dangerous.'
      }
    },
    interactions: ['MAOIs', 'Alcohol', 'Other anticholinergics', 'CNS depressants', 'SSRIs'],
    harmReduction: [
      'Not recommended for recreational use',
      'Effects are generally unpleasant and confusing',
      'Do not combine with other anticholinergics',
      'Avoid driving or operating machinery',
      'Stay hydrated',
      'Have a sitter if using recreationally',
      'Be aware that hallucinations seem completely real'
    ],
    legality: 'Legal over-the-counter in most countries. No prescription required. Age restrictions may apply in some jurisdictions.',
    chemistry: {
      formula: 'C17H21NO',
      molecularWeight: '255.36 g/mol',
      class: 'Ethanolamine antihistamine'
    },
    history: 'Diphenhydramine was first synthesized in 1943 and became available over-the-counter. It remains one of the most commonly used antihistamines.',
    routes: ['Oral'],
    afterEffects: 'Hangover-like symptoms, residual drowsiness, cognitive impairment lasting several hours to days.',
    riskLevel: 'high',
    aliases: ['2-(diphenylmethoxy)-N,N-dimethylethanamine']
  },
  {
    id: 'dimenhydrinate',
    name: 'Dimenhydrinate',
    commonNames: ['Dramamine', 'Gravol', 'Dime', 'Dimehydramine'],
    category: 'deliriants',
    class: 'Antihistamine',
    description: 'Dimenhydrinate is an over-the-counter medication used for motion sickness and nausea. It is a combination of diphenhydramine and 8-chlorotheophylline. At high doses, it produces deliriant effects similar to diphenhydramine but with additional stimulant properties from the theophylline component. The experience is generally considered unpleasant and can be dangerous at recreational doses.',
    effects: {
      positive: ['Effective for motion sickness at therapeutic doses', 'Some report mild euphoria at low recreational doses'],
      neutral: ['Sedation at therapeutic doses', 'Stimulation at recreational doses', 'Dry mouth'],
      negative: ['Delirium at recreational doses', 'Realistic hallucinations', 'Extreme drowsiness or paradoxical stimulation', 'Motor impairment', 'Rapid heart rate', 'Memory loss', 'Risk of injury', 'Seizure risk at very high doses']
    },
    dosage: {
      threshold: '150-300mg',
      light: '300-500mg',
      common: '500-800mg',
      strong: '800-1200mg',
      heavy: '1200mg+'
    },
    duration: {
      onset: '30-60 minutes',
      comeup: '1-2 hours',
      peak: '3-5 hours',
      offset: '4-8 hours',
      total: '6-12 hours'
    },
    routeData: {
      Oral: {
        dosage: { threshold: '150-300mg', light: '300-500mg', common: '500-800mg', strong: '800-1200mg', heavy: '1200mg' },
        duration: { onset: '30-60 minutes', comeup: '1-2 hours', peak: '3-5 hours', offset: '4-8 hours', total: '6-12 hours' },
        notes: 'Only practical route. Contains ~50% diphenhydramine by weight. Unpleasant effects at recreational doses.'
      }
    },
    interactions: ['MAOIs', 'Alcohol', 'Other anticholinergics', 'CNS depressants'],
    harmReduction: [
      'Not recommended for recreational use',
      'Effects are generally unpleasant',
      'Do not combine with other anticholinergics',
      'Have a sitter if using recreationally',
      'Be aware hallucinations seem completely real'
    ],
    legality: 'Legal over-the-counter in most countries.',
    chemistry: {
      formula: 'C17H21NO · C7H7ClN4O2',
      molecularWeight: '469.96 g/mol (combination)',
      class: 'Antihistamine combination'
    },
    history: 'Dimenhydrinate was developed in the 1940s as a motion sickness medication. It has been widely available over-the-counter since.',
    routes: ['Oral'],
    afterEffects: 'Hangover-like symptoms, cognitive impairment.',
    riskLevel: 'high',
    aliases: ['dramamine', 'N,N-dimethyl-2-(diphenylmethoxy)ethanamine 8-chlorotheophyllinate']
  }
];
