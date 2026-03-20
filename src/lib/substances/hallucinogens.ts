// Psychoactive Substances Documentation - Hallucinogens

import { Substance } from './types';

export const hallucinogens: Substance[] = [
  {
    id: 'lsd',
    name: 'LSD',
    commonNames: ['Acid', 'Tabs', 'Blotter', 'Lucy', 'Doses'],
    category: 'hallucinogens',
    class: 'Lysergamide',
    description: 'LSD (Lysergic acid diethylamide) is one of the most potent psychedelic substances known, active at microgram doses. It was first synthesized by Albert Hofmann in 1938 from ergot fungus. LSD primarily acts as a serotonin receptor agonist, particularly at the 5-HT2A receptor, producing profound alterations in perception, thought, and mood. The LSD experience, often called a "trip," can last 8-12 hours and is characterized by visual and auditory hallucinations, synesthesia, altered sense of time and self, and profound introspective experiences. LSD has shown promise in therapeutic applications for depression, anxiety, and addiction.',
    effects: {
      positive: ['Profound sense of interconnectedness', 'Enhanced appreciation of music and art', 'Spiritual or mystical experiences', 'Increased creativity and novel thinking', 'Therapeutic insights and emotional processing', 'Sense of wonder and awe'],
      neutral: ['Visual distortions and hallucinations', 'Altered perception of time', 'Synesthesia (sensory crossover)', 'Changes in thought patterns', 'Pupil dilation', 'Mild increase in heart rate and blood pressure'],
      negative: ['Anxiety and panic (bad trips)', 'Confusion and disorientation', 'Difficult emotional experiences', 'Temporary paranoia', 'HPPD (Hallucinogen Persisting Perception Disorder) in rare cases', 'Exacerbation of underlying mental health conditions']
    },
    dosage: {
      threshold: '20-30μg',
      light: '30-75μg',
      common: '75-150μg',
      strong: '150-300μg',
      heavy: '300μg+'
    },
    duration: {
      onset: '30-60 minutes',
      comeup: '1-2 hours',
      peak: '3-5 hours',
      offset: '3-5 hours',
      total: '8-12 hours'
    },
    routeData: {
      Sublingual: {
        dosage: { threshold: '20-30μg', light: '30-75μg', common: '75-150μg', strong: '150-300μg', heavy: '300μg+' },
        duration: { onset: '20-45 minutes', comeup: '45-90 minutes', peak: '3-5 hours', offset: '3-5 hours', total: '8-12 hours' },
        notes: 'Held under tongue. May have slightly faster onset. Same dosage range as oral.'
      },
      Oral: {
        dosage: { threshold: '20-30μg', light: '30-75μg', common: '75-150μg', strong: '150-300μg', heavy: '300μg+' },
        duration: { onset: '30-60 minutes', comeup: '1-2 hours', peak: '3-5 hours', offset: '3-5 hours', total: '8-12 hours' },
        notes: 'Standard route. Blotter, liquid, or tablet. Very potent. Long duration. Set and setting crucial.'
      }
    },
    interactions: ['SSRIs (reduce effects)', 'MAOIs', 'Antipsychotics', 'Tramadol', 'Lithium'],
    harmReduction: [
      'Set and setting are crucial - be in a safe, comfortable environment',
      'Have a trusted trip-sitter present',
      'Start with a low dose and wait full duration before redosing',
      'Avoid if you have a personal or family history of psychosis',
      'Do not drive or operate machinery',
      'Stay hydrated but do not over-hydrate',
      'Have a plan for difficult experiences',
      'Wait 3-4 days between trips to reset tolerance'
    ],
    legality: 'Illegal in most countries. Schedule I controlled substance with no recognized medical use (despite research suggesting therapeutic potential).',
    chemistry: {
      formula: 'C20H25N3O',
      molecularWeight: '323.43 g/mol',
      class: 'Lysergamide'
    },
    history: 'LSD was first synthesized by Albert Hofmann in 1938, with its psychedelic properties discovered accidentally in 1943. It was researched for therapeutic applications in the 1950s-60s before being made illegal. The counterculture movement embraced LSD before it was banned in 1968.',
    routes: ['Sublingual', 'Oral'],
    afterEffects: 'Afterglow lasting 1-2 days with enhanced mood and introspection. Fatigue from long duration.',
    riskLevel: 'moderate',
    aliases: ['lysergic acid diethylamide', 'lysergide']
  },
  {
    id: 'psilocybin',
    name: 'Psilocybin',
    commonNames: ['Magic Mushrooms', 'Shrooms', 'Mushies', 'Boomers', 'Caps'],
    category: 'hallucinogens',
    class: 'Tryptamine',
    description: 'Psilocybin is a naturally occurring psychedelic compound found in over 200 species of mushrooms, primarily in the genus Psilocybe. When ingested, psilocybin is rapidly dephosphorylated to psilocin, the active compound that produces psychedelic effects. Psilocin acts primarily as a serotonin receptor agonist, particularly at 5-HT2A receptors. The psilocybin experience typically lasts 4-6 hours and is characterized by visual distortions, altered perception of time and space, and profound changes in consciousness. Recent research has demonstrated significant therapeutic potential for depression, anxiety, and addiction.',
    effects: {
      positive: ['Spiritual or mystical experiences', 'Enhanced connection to nature', 'Emotional breakthrough and processing', 'Increased creativity and open-mindedness', 'Therapeutic insights', 'Lasting positive changes in personality and well-being'],
      neutral: ['Visual distortions and patterns', 'Altered perception of time', 'Changes in body sensation', 'Synesthesia', 'Yawning', 'Pupil dilation'],
      negative: ['Anxiety and panic', 'Nausea and stomach discomfort', 'Confusion and disorientation', 'Headache', 'Difficult psychological experiences', 'Exacerbation of mental health conditions']
    },
    dosage: {
      threshold: '0.5-1g dried mushrooms',
      light: '1-1.5g dried mushrooms',
      common: '1.5-3g dried mushrooms',
      strong: '3-5g dried mushrooms',
      heavy: '5g+ dried mushrooms'
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
        dosage: { threshold: '0.5-1g dried', light: '1-1.5g dried', common: '1.5-3g dried', strong: '3-5g dried', heavy: '5g+ dried' },
        duration: { onset: '20-40 minutes', comeup: '30-60 minutes', peak: '2-3 hours', offset: '2-3 hours', total: '4-6 hours' },
        notes: 'Consumed as dried mushrooms or tea. Tea may have faster onset. Effects depend on mushroom species.'
      }
    },
    interactions: ['SSRIs (reduce effects)', 'MAOIs', 'Antipsychotics', 'Tramadol', 'Alcohol'],
    harmReduction: [
      'Set and setting are crucial - choose a safe, comfortable environment',
      'Have a trusted trip-sitter present',
      'Start with a low dose to assess sensitivity',
      'Avoid if you have a personal or family history of psychosis',
      'Do not drive or operate machinery',
      'Properly identify mushrooms to avoid toxic species',
      'Stay hydrated and have snacks available',
      'Prepare for potential nausea during come-up'
    ],
    legality: 'Illegal in most countries. However, several jurisdictions have decriminalized or are considering therapeutic exemptions. Schedule I in the US.',
    chemistry: {
      formula: 'C12H17N2O4P',
      molecularWeight: '284.25 g/mol',
      class: 'Tryptamine derivative'
    },
    history: 'Psilocybin mushrooms have been used for thousands of years in religious and healing ceremonies by indigenous peoples of Mesoamerica. Western awareness increased after R. Gordon Wasson\'s 1957 Life magazine article. Psilocybin was synthesized by Albert Hofmann in 1958.',
    routes: ['Oral (eating, tea)', 'Lemon tek (acidic extraction)'],
    afterEffects: 'Afterglow lasting 1-3 days. Some report improved mood and outlook for weeks after.',
    riskLevel: 'moderate',
    aliases: ['4-PO-DMT', 'psilocybine']
  },
  {
    id: 'dmt',
    name: 'DMT',
    commonNames: ['Dimitri', 'Spirit Molecule', 'Deemz', 'Spice', 'Changa'],
    category: 'hallucinogens',
    class: 'Tryptamine',
    description: 'N,N-Dimethyltryptamine (DMT) is a powerful psychedelic compound found naturally in many plants and animals, including humans. When vaporized and inhaled, DMT produces an extremely intense but short-acting psychedelic experience, often described as a "breakthrough" to another dimension. The experience is characterized by vivid visual hallucinations, encounters with seemingly autonomous entities, and a sense of entering an entirely different reality. DMT acts primarily as a serotonin receptor agonist. Unlike other psychedelics, the DMT experience is remarkably consistent across users, with common themes of geometric patterns, entities, and alternate dimensions.',
    effects: {
      positive: ['Profound spiritual experiences', 'Sense of entering alternate dimensions', 'Encounters with entities', 'Complete dissolution of ego', 'Life-changing insights', 'Sense of returning "home"'],
      neutral: ['Intense visual hallucinations', 'Geometric patterns and fractals', 'Altered perception of time', 'Body load sensations', 'Rapid onset of effects'],
      negative: ['Overwhelming intensity', 'Fear and panic', 'Difficulty integrating experiences', 'Challenging entity encounters', 'Physical discomfort', 'Hypertension and rapid heart rate']
    },
    dosage: {
      threshold: '5-10mg',
      light: '10-20mg',
      common: '20-40mg',
      strong: '40-60mg',
      heavy: '60mg+'
    },
    duration: {
      onset: '10-30 seconds',
      comeup: '1-2 minutes',
      peak: '5-15 minutes',
      offset: '10-20 minutes',
      total: '15-30 minutes'
    },
    routeData: {
      Inhalation: {
        dosage: { threshold: '3-6mg', light: '6-12mg', common: '12-24mg', strong: '24-36mg', heavy: '36mg' },
        duration: { onset: '10-30 seconds', comeup: '1-5 minutes', peak: '3-9 minutes', offset: '6-12 minutes', total: '9-18 minutes' },
        notes: 'Rapid onset through lungs. Similar to smoking.'
      },
      Oral: {
        dosage: { threshold: '30-50mg', light: '50-100mg', common: '100-150mg', strong: '150-200mg', heavy: '200mg+' },
        duration: { onset: '30-60 minutes', comeup: '30-60 minutes', peak: '1-2 hours', offset: '1-2 hours', total: '3-5 hours' },
        notes: 'Requires MAOI to be orally active. Traditional ayahuasca preparation. Much longer duration.'
      },
      Insufflation: {
        dosage: { threshold: '15-30mg', light: '30-50mg', common: '50-80mg', strong: '80-120mg', heavy: '120mg+' },
        duration: { onset: '2-5 minutes', comeup: '5-15 minutes', peak: '20-40 minutes', offset: '20-40 minutes', total: '45-90 minutes' },
        notes: 'Painful. Less common route. Moderate duration between smoked and oral.'
      },
      Intravenous: {
        dosage: { threshold: '2-4mg', light: '4-8mg', common: '8-16mg', strong: '16-24mg', heavy: '24mg' },
        duration: { onset: '10-30 seconds', comeup: '1-5 minutes', peak: '3-8 minutes', offset: '5-10 minutes', total: '8-15 minutes' },
        notes: 'Immediate onset. 100% bioavailability. Very high risk. Requires sterile technique.'
      }
    },
    interactions: ['MAOIs (dangerous combination without knowledge)', 'SSRIs', 'Antipsychotics', 'Tramadol'],
    harmReduction: [
      'Have an experienced sitter present',
      'Use a proper vaporization device - avoid combustion',
      'Be in a safe, comfortable environment',
      'Start with lower doses to gauge sensitivity',
      'Avoid if you have heart conditions',
      'Be prepared for overwhelming intensity',
      'Allow time for integration after experience',
      'Do not stand or move during experience'
    ],
    legality: 'Illegal in most countries. Schedule I controlled substance. Ayahuasca (which contains DMT) has religious exemptions in some jurisdictions.',
    chemistry: {
      formula: 'C12H16N2',
      molecularWeight: '188.27 g/mol',
      class: 'Tryptamine derivative'
    },
    history: 'DMT has been used for millennia in the form of ayahuasca by indigenous Amazonian peoples. It was first synthesized in 1931 and its psychoactive properties were discovered in 1956. Rick Strassman\'s research in the 1990s popularized it as "the spirit molecule."',
    routes: ['Vaporization/inhalation', 'Oral (with MAOI - ayahuasca)', 'Insufflation', 'Intravenous'],
    afterEffects: 'Rapid return to baseline. Many report lasting positive effects and increased appreciation for life.',
    riskLevel: 'moderate',
    aliases: ['N,N-DMT', 'N,N-dimethyltryptamine']
  }
];
