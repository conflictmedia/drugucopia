// Deliriants Substances

import type { Substance } from '../types';

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
        neutral: ['Anticholinergic effects', 'Mydriasis', 'Tachycardia'],
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
          dosage: {
              threshold: 'Variable/unpredictable',
              light: 'NOT RECOMMENDED',
              common: 'DANGEROUS',
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
          notes: 'EXTREMELY DANGEROUS. Toxic dose very close to active dose. NOT RECOMMENDED under any circumstances.'
      },
      Smoking: {
          dosage: {
              threshold: 'Variable and unpredictable',
              light: 'Not recommended',
              common: 'NOT SAFE',
              strong: 'LIFE THREATENING',
              heavy: 'LIKELY FATAL'
          },
          duration: {
              onset: '5-15 seconds',
              comeup: '30-90 seconds',
              peak: '2-6 hours',
              offset: '6-24 hours',
              total: '12-36 hours'
          },
          notes: 'Very rapid onset. Shorter duration. Higher addiction potential.'
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
        formula: 'Various tropane alkaloids',
        molecularWeight: 'Variable',
        class: 'Tropane alkaloid'
      },
      history: 'Datura has been used for millennia in various cultures for its psychoactive properties. It has a long history of association with witchcraft and poisoning.',
      routes: ['Oral (seeds, leaves, tea)', 'Smoking'],
      afterEffects: 'Extended recovery. Memory problems may persist. Psychological trauma common.',
      riskLevel: 'very-high',
      aliases: ['Datura stramonium', 'scopolamine', 'atropine', 'hyoscyamine']
    },
  {
      id: 'muscimol',
      name: 'Muscimol',
      commonNames: ['Amanita muscaria', 'Fly Agaric', 'Amanita'],
      category: 'deliriants',
      class: 'Ibotenic Acid Derivative',
      description: 'Muscimol is a psychoactive compound found in Amanita muscaria and related mushrooms. It is a potent GABA-A receptor agonist, producing sedative-hypnotic and deliriant effects. Unlike classic psychedelics, muscimol produces a unique state of altered consciousness. The mushrooms also contain ibotenic acid, a neurotoxin that converts to muscimol with proper preparation.',
      effects: {
        positive: ['Unique altered state', 'Dream-like experiences', 'Euphoria at low doses', 'Sleep enhancement'],
        neutral: ['Sedation', 'Dissociation', 'Muscle twitching'],
        negative: ['Nausea and vomiting', 'Confusion', 'Loss of coordination', 'Unpredictable effects', 'Delirium at high doses', 'Seizures in rare cases']
      },
      dosage: {
        threshold: '3-5mg',
        light: '5-10mg',
        common: '10-15mg',
        strong: '15-25mg',
        heavy: '25mg+'
      },
      duration: {
        onset: '30-90 minutes',
        comeup: '1-2 hours',
        peak: '2-4 hours',
        offset: '3-6 hours',
        total: '6-10 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '3-5mg',
              light: '5-10mg',
              common: '10-15mg',
              strong: '15-25mg',
              heavy: '25mg+'
          },
          duration: {
              onset: '30-90 minutes',
              comeup: '1-2 hours',
              peak: '2-4 hours',
              offset: '3-6 hours',
              total: '6-10 hours'
          },
          notes: 'Prepared Amanita muscaria. Proper preparation converts ibotenic acid to muscimol. Unique GABA-A agonist.'
      }
  },
      interactions: ['Alcohol', 'Benzodiazepines', 'Other GABAergics', 'Stimulants'],
      harmReduction: [
        'Proper preparation converts ibotenic acid to muscimol',
        'Raw mushrooms contain neurotoxic ibotenic acid',
        'Effects are dose-dependent and unpredictable',
        'Not a classic psychedelic - different safety profile',
        'Have a sitter present',
        'Avoid combining with other GABAergics',
        'Start with low doses'
      ],
      legality: 'Unscheduled in US. Mushrooms are legal to possess. Controlled in some countries.',
      chemistry: {
        formula: 'C4H6N2O2',
        molecularWeight: '114.10 g/mol',
        class: 'Ibotenic acid derivative'
      },
      history: 'Amanita muscaria has been used for thousands of years, possibly by Viking berserkers and Siberian shamans.',
      routes: ['Oral (prepared mushroom)', 'Tea'],
      afterEffects: 'Sedation, possible hangover. Vivid dreams.',
      riskLevel: 'high',
      aliases: ['pantherine', 'agarine']
    },

    // ============================================
    // EMPATHOGENS - Benzofurans
    // ============================================
];
