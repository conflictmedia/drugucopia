import type { Substance } from '../types';

export const cannabinoids: Substance[] = [
  {
      id: 'thc',
      name: 'THC',
      commonNames: ['Delta-9-THC', 'Marijuana', 'Cannabis', 'Weed', 'Pot', 'Dank', 'Flower', 'Bud'],
      category: 'cannabinoids',
      class: 'Cannabinoid',
      description: 'Delta-9-tetrahydrocannabinol (THC) is the primary psychoactive compound in cannabis. It acts primarily as a partial agonist at cannabinoid receptors CB1 and CB2, producing the characteristic effects of cannabis intoxication including euphoria, relaxation, altered perception, and increased appetite. THC has been used for thousands of years for both recreational and medicinal purposes, with modern research validating its efficacy for chronic pain, nausea, and various other conditions.',
      effects: {
        positive: ['Relaxation and stress relief', 'Euphoria and elevated mood', 'Enhanced sensory perception', 'Increased appreciation of music and food', 'Creativity enhancement', 'Pain relief', 'Nausea relief'],
        neutral: ['Altered perception of time', 'Increased appetite ("munchies")', 'Dry mouth (cottonmouth)', 'Red eyes', 'Slowed reaction time', 'Sedation'],
        negative: ['Anxiety and paranoia', 'Impaired memory and cognition', 'Panic attacks in susceptible individuals', 'Coordination impairment', 'Increased heart rate (tachycardia)', 'Orthostatic hypotension (dizziness on standing)', 'Cannabis use disorder']
      },
      dosage: {
        threshold: '2-5mg',
        light: '5-10mg',
        common: '10-20mg',
        strong: '20-50mg',
        heavy: '50mg+'
      },
      routeData: {
        Smoking: {
          dosage: {
              threshold: '2-3mg',
              light: '3-10mg',
              common: '10-20mg',
              strong: '20-50mg',
              heavy: '50mg+'
          },
          duration: {
              onset: '0-10 minutes',
              comeup: '5-15 minutes',
              peak: '15-30 minutes',
              offset: '45-180 minutes',
              total: '2-4 hours'
          },
          notes: 'Includes vaporization. Very rapid onset. Peak effects occur quickly. Dosage refers to estimated pure THC content, not total plant weight.'
      },
      Oral: {
          dosage: {
              threshold: '2-5mg',
              light: '5-10mg',
              common: '10-25mg',
              strong: '25-50mg',
              heavy: '50-80mg+'
          },
          duration: {
              onset: '45-120 minutes',
              comeup: '1.5-2 hours',
              peak: '2-5 hours',
              offset: '4-8 hours',
              total: '6-12 hours'
          },
          notes: 'Edibles. Converted to 11-hydroxy-THC in liver (more potent/psychoactive). Significantly delayed onset and longer duration than smoking.'
      },
      Sublingual: {
          dosage: {
              threshold: '2-5mg',
              light: '5-10mg',
              common: '10-20mg',
              strong: '20-40mg',
              heavy: '40mg+'
          },
          duration: {
              onset: '15-45 minutes',
              comeup: '30-60 minutes',
              peak: '2-3 hours',
              offset: '3-5 hours',
              total: '4-8 hours'
          },
          notes: 'Tinctures/Oils held under tongue. Faster onset than edibles if absorbed properly through mucosa; otherwise acts as oral.'
      },
      Topical: {
          dosage: {
              threshold: 'N/A',
              light: 'N/A',
              common: 'Variable',
              strong: 'N/A',
              heavy: 'N/A'
          },
          duration: {
              onset: '15-30 minutes (Local)',
              comeup: 'N/A',
              peak: 'N/A',
              offset: 'N/A',
              total: '2-4 hours (Local relief)'
          },
          notes: 'Standard topicals (creams/lotions) are non-psychoactive and do not cross the blood-brain barrier. Used for local pain/inflammation only. Transdermal patches are the exception and can be psychoactive.'
      }
  },
      interactions: ['Alcohol (significantly potentiates impairment)', 'Benzodiazepines', 'Opioids', 'SSRIs', 'Antipsychotics'],
      harmReduction: [
        'Start low and go slow, especially with edibles (effects are delayed)',
        'Wait at least 2 hours before redosing edibles',
        'Avoid driving or operating machinery',
        'Edibles produce 11-hydroxy-THC which is more potent than smoked THC',
        'Have CBD available; it can modulate the CB1 receptor and reduce anxiety/paranoia',
        'Stay hydrated to combat dry mouth',
        'Avoid if you have a personal or family history of schizophrenia or psychosis'
      ],
      legality: 'Varies widely. Legal for recreational use in Canada and many US states. Federally illegal in the US (Schedule I). Medical use permitted in many jurisdictions.',
      chemistry: {
        formula: 'C21H30O2',
        molecularWeight: '314.47 g/mol',
        class: 'Cannabinoid'
      },
      history: 'Cannabis has been used for over 5,000 years. THC was first isolated and synthesized by Raphael Mechoulam in 1964. Prohibition began largely in the 20th century, with a modern trend toward decriminalization and legalization.',
      routes: ['Inhalation (smoking, vaping)', 'Oral (edibles, capsules)', 'Sublingual (tinctures)', 'Topical', 'Transdermal'],
      afterEffects: 'Possible "brain fog," grogginess, or lethargy the next day (often called a "weed hangover"). Some report afterglow or improved mood.',
      riskLevel: 'low',
      aliases: ['delta-9-tetrahydrocannabinol', 'tetrahydrocannabinol', 'delta-9']
    },
];
