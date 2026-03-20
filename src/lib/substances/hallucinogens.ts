// Hallucinogens Substances

import type { Substance } from '../types';

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
          dosage: {
              threshold: '20-30μg',
              light: '30-75μg',
              common: '75-150μg',
              strong: '150-300μg',
              heavy: '300μg+'
          },
          duration: {
              onset: '20-45 minutes',
              comeup: '45-90 minutes',
              peak: '3-5 hours',
              offset: '3-5 hours',
              total: '8-12 hours'
          },
          notes: 'Held under tongue. May have slightly faster onset. Same dosage range as oral.'
      },
      Oral: {
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
          dosage: {
              threshold: '0.5-1g dried',
              light: '1-1.5g dried',
              common: '1.5-3g dried',
              strong: '3-5g dried',
              heavy: '5g+ dried'
          },
          duration: {
              onset: '20-40 minutes',
              comeup: '30-60 minutes',
              peak: '2-3 hours',
              offset: '2-3 hours',
              total: '4-6 hours'
          },
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
          dosage: {
              threshold: '3-6mg',
              light: '6-12mg',
              common: '12-24mg',
              strong: '24-36mg',
              heavy: '36mg'
          },
          duration: {
              onset: '10-30 seconds',
              comeup: '1-5 minutes',
              peak: '3-9 minutes',
              offset: '6-12 minutes',
              total: '9-18 minutes'
          },
          notes: 'Rapid onset through lungs. Similar to smoking.'
      },
      Oral: {
          dosage: {
              threshold: '30-50mg',
              light: '50-100mg',
              common: '100-150mg',
              strong: '150-200mg',
              heavy: '200mg+'
          },
          duration: {
              onset: '30-60 minutes',
              comeup: '30-60 minutes',
              peak: '1-2 hours',
              offset: '1-2 hours',
              total: '3-5 hours'
          },
          notes: 'Requires MAOI to be orally active. Traditional ayahuasca preparation. Much longer duration.'
      },
      Insufflation: {
          dosage: {
              threshold: '15-30mg',
              light: '30-50mg',
              common: '50-80mg',
              strong: '80-120mg',
              heavy: '120mg+'
          },
          duration: {
              onset: '2-5 minutes',
              comeup: '5-15 minutes',
              peak: '20-40 minutes',
              offset: '20-40 minutes',
              total: '45-90 minutes'
          },
          notes: 'Painful. Less common route. Moderate duration between smoked and oral.'
      },
      Intravenous: {
          dosage: {
              threshold: '2-4mg',
              light: '4-8mg',
              common: '8-16mg',
              strong: '16-24mg',
              heavy: '24mg'
          },
          duration: {
              onset: '10-30 seconds',
              comeup: '1-5 minutes',
              peak: '3-8 minutes',
              offset: '5-10 minutes',
              total: '8-15 minutes'
          },
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
    },

    // Empathogens,
  {
      id: 'mescaline',
      name: 'Mescaline',
      commonNames: ['Peyote', 'San Pedro', 'Cactus', 'Buttons'],
      category: 'hallucinogens',
      class: 'Phenethylamine',
      description: 'Mescaline is a naturally occurring psychedelic alkaloid found in several species of cactus, most notably peyote (Lophophora williamsii) and San Pedro (Echinopsis pachanoi). It is one of the oldest known psychedelic substances, with evidence of use dating back over 5,000 years. Mescaline acts primarily as a serotonin receptor agonist, producing visual hallucinations, altered states of consciousness, and profound introspective experiences. The experience is known for its distinctive visual character, often described as more colorful and geometric compared to other psychedelics.',
      effects: {
        positive: ['Profound spiritual and mystical experiences', 'Enhanced appreciation of nature', 'Deep introspection and self-reflection', 'Visual hallucinations with distinct geometric patterns', 'Sense of interconnectedness', 'Long-lasting therapeutic insights'],
        neutral: ['Nausea and vomiting during come-up', 'Visual distortions and color enhancement', 'Altered perception of time', 'Changes in body sensation', 'Pupil dilation'],
        negative: ['Severe nausea and vomiting', 'Anxiety and paranoia', 'Headache', 'Exhaustion from long duration', 'Difficulty integrating experiences', 'Exacerbation of mental health conditions']
      },
      dosage: {
        threshold: '50-100mg',
        light: '100-200mg',
        common: '200-400mg',
        strong: '400-600mg',
        heavy: '600mg+'
      },
      duration: {
        onset: '45-90 minutes',
        comeup: '1-2 hours',
        peak: '4-6 hours',
        offset: '4-6 hours',
        total: '10-14 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '50-100mg',
              light: '100-200mg',
              common: '200-400mg',
              strong: '400-600mg',
              heavy: '600mg'
          },
          duration: {
              onset: '45-90 minutes',
              comeup: '1-2 hours',
              peak: '4-6 hours',
              offset: '4-6 hours',
              total: '10-14 hours'
          },
          notes: 'Most common route for this substance.'
      },
      Sublingual: {
          dosage: {
              threshold: '42.5-85mg',
              light: '85-170mg',
              common: '170-340mg',
              strong: '340-510mg',
              heavy: '510mg'
          },
          duration: {
              onset: '10-20 minutes',
              comeup: '20-40 minutes',
              peak: '4-6 hours',
              offset: '4-6 hours',
              total: '10-14 hours'
          },
          notes: 'Faster onset than oral. Good bioavailability. Held under tongue.'
      }
  },
      interactions: ['SSRIs', 'MAOIs', 'Antipsychotics', 'Tramadol', 'Stimulants'],
      harmReduction: [
        'Prepare for nausea during come-up - fasting may help',
        'Set and setting are crucial',
        'Have a trip-sitter for such a long experience',
        'Start with lower doses to assess sensitivity',
        'Avoid if you have heart conditions',
        'Be in a safe environment for the long duration',
        'Have food and water available',
        'Allow time for recovery after the experience'
      ],
      legality: 'Illegal in most countries. Schedule I controlled substance. Religious exemptions exist for Native American Church peyote ceremonies in the US.',
      chemistry: {
        formula: 'C11H17NO3',
        molecularWeight: '211.26 g/mol',
        class: 'Phenethylamine derivative'
      },
      history: 'Mescaline has been used for thousands of years by indigenous peoples of the Americas in religious ceremonies. Peyote use was documented by Spanish conquistadors in the 16th century. Mescaline was first isolated in 1897 and synthesized in 1919.',
      routes: ['Oral (cactus material, extract)', 'Sublingual'],
      afterEffects: 'Prolonged afterglow possible. Fatigue from long duration. Some report lasting positive changes.',
      riskLevel: 'moderate',
      aliases: ['3,4,5-trimethoxyphenethylamine']
    },

    // Depressants,
  {
      id: '1p-lsd',
      name: '1P-LSD',
      commonNames: ['1-Propionyl-LSD', '1P', 'Legal Acid'],
      category: 'hallucinogens',
      class: 'Lysergamide',
      description: '1P-LSD (1-propionyl-lysergic acid diethylamide) is a semisynthetic psychedelic of the lysergamide class. It is a prodrug that metabolizes into LSD in the body, producing similar effects. 1P-LSD was developed as a legal alternative to LSD and became popular in the research chemical market. The effects are virtually identical to LSD, though some users report a slightly slower onset. Like LSD, it acts primarily as a serotonin receptor agonist, producing profound alterations in perception, thought, and mood.',
      effects: {
        positive: ['Profound psychedelic experiences', 'Enhanced appreciation of music and art', 'Spiritual insights', 'Increased creativity', 'Therapeutic potential', 'Sense of interconnectedness'],
        neutral: ['Visual distortions and hallucinations', 'Altered perception of time', 'Pupil dilation', 'Mild increase in heart rate', 'Changes in thought patterns'],
        negative: ['Anxiety and panic', 'Confusion and disorientation', 'Difficult emotional experiences', 'HPPD risk (rare)', 'Exacerbation of mental health conditions']
      },
      dosage: {
        threshold: '20-30μg',
        light: '30-75μg',
        common: '75-150μg',
        strong: '150-300μg',
        heavy: '300μg+'
      },
      duration: {
        onset: '45-90 minutes',
        comeup: '1-2 hours',
        peak: '3-5 hours',
        offset: '3-5 hours',
        total: '8-12 hours'
      },
    routeData: {
      Sublingual: {
          dosage: {
              threshold: '17-25.5μg',
              light: '25.5-63.8μg',
              common: '63.8-127.5μg',
              strong: '127.5-255μg',
              heavy: '255μg'
          },
          duration: {
              onset: '10-20 minutes',
              comeup: '20-40 minutes',
              peak: '3-5 hours',
              offset: '3-5 hours',
              total: '8-12 hours'
          },
          notes: 'Faster onset than oral. Good bioavailability. Held under tongue.'
      },
      Oral: {
          dosage: {
              threshold: '20-30μg',
              light: '30-75μg',
              common: '75-150μg',
              strong: '150-300μg',
              heavy: '300μg'
          },
          duration: {
              onset: '45-90 minutes',
              comeup: '1-2 hours',
              peak: '3-5 hours',
              offset: '3-5 hours',
              total: '8-12 hours'
          },
          notes: 'Most common route for this substance.'
      }
  },
      interactions: ['SSRIs (reduce effects)', 'MAOIs', 'Antipsychotics', 'Tramadol', 'Lithium'],
      harmReduction: [
        'Set and setting are crucial',
        'Have a trusted trip-sitter present',
        'Start with a low dose',
        'Avoid if you have a history of psychosis',
        'Do not drive or operate machinery',
        'Wait several days between experiences'
      ],
      legality: 'Controlled in many jurisdictions. Was legal as a research chemical but many countries have now scheduled it.',
      chemistry: {
        formula: 'C23H29N3O2',
        molecularWeight: '379.50 g/mol',
        class: 'Lysergamide'
      },
      history: '1P-LSD appeared on the research chemical market around 2015 as a legal LSD alternative. It was developed to circumvent drug laws, though many countries have since scheduled it.',
      routes: ['Sublingual', 'Oral'],
      afterEffects: 'Similar to LSD afterglow lasting 1-2 days.',
      riskLevel: 'moderate',
      aliases: ['1-propionyl-LSD']
    },
  {
      id: '4-aco-dmt',
      name: '4-AcO-DMT',
      commonNames: ['Psilacetin', 'O-Acetylpsilocin', 'Synthetic Mushrooms'],
      category: 'hallucinogens',
      class: 'Tryptamine',
      description: '4-AcO-DMT (O-acetylpsilocin) is a synthetic psychedelic tryptamine that is structurally similar to psilocin, the active metabolite of psilocybin. It acts as a prodrug, metabolizing into psilocin in the body. The effects are often described as very similar to magic mushrooms, though some users report subtle differences including a more "synthetic" feel. Like psilocin, it acts primarily as a serotonin receptor agonist.',
      effects: {
        positive: ['Profound psychedelic experiences', 'Spiritual insights', 'Emotional processing', 'Enhanced appreciation of nature', 'Therapeutic potential', 'Visual hallucinations'],
        neutral: ['Visual distortions', 'Altered perception of time', 'Body load', 'Pupil dilation', 'Yawning'],
        negative: ['Nausea', 'Anxiety and panic', 'Confusion', 'Headache', 'Exacerbation of mental health conditions']
      },
      dosage: {
        threshold: '5-10mg',
        light: '10-20mg',
        common: '20-35mg',
        strong: '35-50mg',
        heavy: '50mg+'
      },
      duration: {
        onset: '20-40 minutes',
        comeup: '30-60 minutes',
        peak: '2-4 hours',
        offset: '2-3 hours',
        total: '4-6 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '5-10mg',
              light: '10-20mg',
              common: '20-35mg',
              strong: '35-50mg',
              heavy: '50mg'
          },
          duration: {
              onset: '20-40 minutes',
              comeup: '30-60 minutes',
              peak: '2-4 hours',
              offset: '2-3 hours',
              total: '4-6 hours'
          },
          notes: 'Most common route for this substance.'
      },
      Insufflation: {
          dosage: {
              threshold: '3.5-7mg',
              light: '7-14mg',
              common: '14-24.5mg',
              strong: '24.5-35mg',
              heavy: '35mg'
          },
          duration: {
              onset: '5-15 minutes',
              comeup: '10-30 minutes',
              peak: '2-3 hours',
              offset: '2-3 hours',
              total: '3-5 hours'
          },
          notes: 'Faster onset than oral. Nasal irritation possible with repeated use.'
      }
  },
      interactions: ['SSRIs (reduce effects)', 'MAOIs', 'Antipsychotics', 'Tramadol'],
      harmReduction: [
        'Set and setting are crucial',
        'Have a trusted trip-sitter present',
        'Start with a low dose',
        'Avoid if you have a history of psychosis',
        'Do not drive or operate machinery',
        'Stay hydrated'
      ],
      legality: 'Controlled in many jurisdictions. Illegal in the UK, US, and many other countries.',
      chemistry: {
        formula: 'C14H18N2O2',
        molecularWeight: '246.31 g/mol',
        class: 'Tryptamine'
      },
      history: '4-AcO-DMT was first synthesized by Albert Hofmann in 1958 alongside psilocybin. It gained popularity in the research chemical market in the 2010s as a legal alternative to magic mushrooms.',
      routes: ['Oral', 'Insufflation'],
      afterEffects: 'Afterglow lasting 1-2 days.',
      riskLevel: 'moderate',
      aliases: ['psilacetin', 'O-acetylpsilocin']
    },
  {
      id: '5-meo-dmt',
      name: '5-MeO-DMT',
      commonNames: ['Five', 'The God Molecule', 'Bufo'],
      category: 'hallucinogens',
      class: 'Tryptamine',
      description: '5-MeO-DMT (5-methoxy-N,N-dimethyltryptamine) is an extremely potent naturally-occurring psychedelic tryptamine. It is found in several plant species and in the venom of the Colorado River toad (Bufo alvarius). Unlike N,N-DMT, 5-MeO-DMT produces a more "void-like" experience with less visual complexity but profound ego dissolution. The experience is often described as merging with the universe or encountering the divine. It is considered one of the most powerful psychedelics known.',
      effects: {
        positive: ['Profound spiritual experiences', 'Complete ego dissolution', 'Sense of unity with everything', 'Life-changing insights', 'Rapid onset of effects'],
        neutral: ['Intense body sensations', 'Reduced visual complexity compared to DMT', 'Altered perception of time', 'Rapid onset'],
        negative: ['Overwhelming intensity', 'Fear and panic', 'Difficulty integrating experiences', 'Physical discomfort', 'Potential for psychological distress']
      },
      dosage: {
        threshold: '1-3mg',
        light: '3-7mg',
        common: '7-15mg',
        strong: '15-25mg',
        heavy: '25mg+'
      },
      duration: {
        onset: '10-30 seconds',
        comeup: '30-60 seconds',
        peak: '5-20 minutes',
        offset: '15-30 minutes',
        total: '20-45 minutes'
      },
    routeData: {
      Inhalation: {
          dosage: {
              threshold: '0.6-1.8mg',
              light: '1.8-4.2mg',
              common: '4.2-9mg',
              strong: '9-15mg',
              heavy: '15mg'
          },
          duration: {
              onset: '10-30 seconds',
              comeup: '1-5 minutes',
              peak: '3-12 minutes',
              offset: '9-18 minutes',
              total: '12-27 minutes'
          },
          notes: 'Rapid onset through lungs. Similar to smoking.'
      },
      Insufflation: {
          dosage: {
              threshold: '3-7mg',
              light: '7-15mg',
              common: '15-25mg',
              strong: '25-40mg',
              heavy: '40mg+'
          },
          duration: {
              onset: '1-3 minutes',
              comeup: '3-10 minutes',
              peak: '10-30 minutes',
              offset: '20-40 minutes',
              total: '30-60 minutes'
          },
          notes: 'Very potent. Use accurate milligram scale. Painful but effective.'
      },
      Oral: {
          dosage: {
              threshold: '1-3mg',
              light: '3-7mg',
              common: '7-15mg',
              strong: '15-25mg',
              heavy: '25mg'
          },
          duration: {
              onset: '10-30 seconds',
              comeup: '30-60 seconds',
              peak: '5-20 minutes',
              offset: '15-30 minutes',
              total: '20-45 minutes'
          },
          notes: 'Most common route for this substance.'
      }
  },
      interactions: ['MAOIs (dangerous)', 'SSRIs', 'Antipsychotics', 'Tramadol'],
      harmReduction: [
        'Always have an experienced sitter present',
        'Use an accurate scale - doses are tiny',
        'Be in a safe, comfortable environment',
        'Be prepared for overwhelming intensity',
        'Avoid if you have heart conditions',
        'Allow time for integration after experience',
        'Do not stand or move during experience'
      ],
      legality: 'Illegal in most countries. Schedule I controlled substance in the US. Some jurisdictions have religious exemptions.',
      chemistry: {
        formula: 'C13H18N2O',
        molecularWeight: '218.30 g/mol',
        class: 'Tryptamine'
      },
      history: '5-MeO-DMT has been used traditionally in South American shamanic practices. It gained Western attention through the work of researchers like Alexander Shulgin and more recently through the Church of the Tree of Life.',
      routes: ['Vaporization/inhalation', 'Insufflation', 'Oral (with MAOI)'],
      afterEffects: 'Rapid return to baseline. Many report lasting positive changes in perspective.',
      riskLevel: 'high',
      aliases: ['5-methoxy-N,N-dimethyltryptamine', 'O-methyl-bufotenin']
    },
  {
      id: '2c-b',
      name: '2C-B',
      commonNames: ['Bees', 'Nexus', 'Bromo', 'Venus', 'Erox'],
      category: 'hallucinogens',
      class: 'Phenethylamine',
      description: '2C-B (2,5-dimethoxy-4-bromophenethylamine) is a synthetic psychedelic of the 2C family, first synthesized by Alexander Shulgin in 1974. It produces a unique combination of psychedelic and empathogenic effects, often described as a cross between LSD and MDMA. 2C-B is known for its colorful visual effects, enhanced tactile sensitivity, and relatively gentle headspace compared to other psychedelics. It was briefly sold commercially as an aphrodisiac under the name "Eros" before being banned.',
      effects: {
        positive: ['Enhanced appreciation of music and art', 'Increased empathy and emotional openness', 'Colorful visual effects', 'Enhanced tactile sensation', 'Mild euphoria', 'Relatively clear headspace'],
        neutral: ['Visual distortions', 'Altered perception of time', 'Body load', 'Pupil dilation', 'Increased heart rate'],
        negative: ['Nausea during come-up', 'Anxiety and paranoia', 'Confusion at higher doses', 'Potential for overwhelming experiences', 'Exacerbation of mental health conditions']
      },
      dosage: {
        threshold: '5-10mg',
        light: '10-15mg',
        common: '15-25mg',
        strong: '25-35mg',
        heavy: '35mg+'
      },
      duration: {
        onset: '30-60 minutes',
        comeup: '30-60 minutes',
        peak: '2-4 hours',
        offset: '2-3 hours',
        total: '4-8 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '5-10mg',
              light: '10-15mg',
              common: '15-25mg',
              strong: '25-35mg',
              heavy: '35mg'
          },
          duration: {
              onset: '30-60 minutes',
              comeup: '30-60 minutes',
              peak: '2-4 hours',
              offset: '2-3 hours',
              total: '4-8 hours'
          },
          notes: 'Most common route for this substance.'
      },
      Insufflation: {
          dosage: {
              threshold: '3.5-7mg',
              light: '7-10.5mg',
              common: '10.5-17.5mg',
              strong: '17.5-24.5mg',
              heavy: '24.5mg'
          },
          duration: {
              onset: '5-15 minutes',
              comeup: '10-30 minutes',
              peak: '2-3 hours',
              offset: '2-3 hours',
              total: '3-6 hours'
          },
          notes: 'Faster onset than oral. Nasal irritation possible with repeated use.'
      }
  },
      interactions: ['MAOIs', 'SSRIs', 'Antipsychotics', 'Other stimulants', 'Alcohol'],
      harmReduction: [
        'Set and setting are important',
        'Have a trusted sitter present',
        'Start with a low dose to assess sensitivity',
        'Avoid combining with other substances',
        'Stay hydrated but do not over-hydrate',
        'Do not drive or operate machinery'
      ],
      legality: 'Illegal in most countries. Schedule I controlled substance in the US and many other jurisdictions.',
      chemistry: {
        formula: 'C10H14BrNO2',
        molecularWeight: '260.13 g/mol',
        class: 'Phenethylamine (2C family)'
      },
      history: '2C-B was first synthesized by Alexander Shulgin in 1974. It was briefly marketed as an aphrodisiac before being scheduled in the 1990s. It became popular in the rave and club scene.',
      routes: ['Oral', 'Insufflation (painful)'],
      afterEffects: 'Mild afterglow possible. Some report fatigue the next day.',
      riskLevel: 'moderate',
      aliases: ['2,5-dimethoxy-4-bromophenethylamine']
    },

    // Dissociative Research Chemicals,
  {
      id: 'salvia',
      name: 'Salvia divinorum',
      commonNames: ['Salvia', 'Diviner\'s Sage', 'Sally D', 'Maria Pastora', 'Magic Mint'],
      category: 'hallucinogens',
      class: 'Diterpenoid',
      description: 'Salvia divinorum is a psychoactive plant native to the Sierra Mazateca region of Oaxaca, Mexico. Its active compound, salvinorin A, is the most potent naturally occurring psychedelic known, active at microgram doses. Unlike classic psychedelics, salvinorin A is a kappa opioid receptor agonist rather than a serotonin receptor agonist. This produces a unique and often disorienting experience characterized by complete dissolution of reality, encounters with entities, and travel to alternate dimensions. The Mazatec people have used salvia for centuries in spiritual divination ceremonies.',
      effects: {
        positive: ['Profound spiritual experiences', 'Complete reality dissolution', 'Entity encounters', 'Alternate dimension experiences', 'Rapid return to baseline'],
        neutral: ['Dissociation', 'Altered perception of reality', 'Uncontrollable laughter', 'Loss of motor control'],
        negative: ['Overwhelming intensity', 'Dysphoria and fear', 'Confusion', 'Loss of awareness of surroundings', 'Risk of injury from movement', 'Difficulty integrating experiences']
      },
      dosage: {
        threshold: '0.1-0.3mg salvinorin A',
        light: '0.3-0.5mg',
        common: '0.5-1mg',
        strong: '1-2mg',
        heavy: '2mg+'
      },
      duration: {
        onset: '30-60 seconds (smoked)',
        comeup: '1-2 minutes',
        peak: '5-15 minutes',
        offset: '15-30 minutes',
        total: '20-45 minutes'
      },
    routeData: {
      Smoking: {
          dosage: {
              threshold: '0.1-0.3mg salvinorin A',
              light: '0.3-0.5mg',
              common: '0.5-1mg',
              strong: '1-2mg',
              heavy: '2mg+'
          },
          duration: {
              onset: '30-60 seconds',
              comeup: '1-2 minutes',
              peak: '5-15 minutes',
              offset: '15-30 minutes',
              total: '20-45 minutes'
          },
          notes: 'Very rapid onset. Intense but short experience. Use extracts with caution.'
      },
      Sublingual: {
          dosage: {
              threshold: '0.3-0.5mg salvinorin A',
              light: '0.5-1mg',
              common: '1-2mg',
              strong: '2-3mg',
              heavy: '3mg+'
          },
          duration: {
              onset: '10-20 minutes',
              comeup: '15-30 minutes',
              peak: '30-60 minutes',
              offset: '30-60 minutes',
              total: '1-2 hours'
          },
          notes: 'Quid method. Chewed leaves. Slower onset, longer duration, gentler experience.'
      }
  },
      interactions: ['Other psychedelics', 'Cannabis', 'Dissociatives'],
      harmReduction: [
        'Always have a sitter present - you may lose awareness of your surroundings',
        'Be in a safe, seated position before beginning',
        'Start with very low doses',
        'Be prepared for complete reality dissolution',
        'Use in a quiet, safe environment',
        'Allow time for integration',
        'Avoid combining with other substances'
      ],
      legality: 'Legal in some jurisdictions, controlled in others. Many US states have scheduled it. Legal in most of Europe.',
      chemistry: {
        formula: 'C23H28O8 (salvinorin A)',
        molecularWeight: '432.46 g/mol',
        class: 'Diterpenoid'
      },
      history: 'Salvia has been used by Mazatec shamans for centuries in divination and healing ceremonies. Western awareness began in the 1930s, with salvinorin A isolated in 1982.',
      routes: ['Smoking (dried leaves or extract)', 'Sublingual (fresh leaves)', 'Quid (chewed leaves)'],
      afterEffects: 'Rapid return to baseline. Some report lingering introspection.',
      riskLevel: 'high',
      aliases: ['salvinorin A', 'Diviner\'s sage']
    },

    // ============================================
    // OPIOIDS
    // ============================================,
  {
      id: '4-ho-met',
      name: '4-HO-MET',
      commonNames: ['Metocin', 'Colour', '4-HO'],
      category: 'hallucinogens',
      class: 'Tryptamine',
      description: '4-HO-MET is a synthetic psychedelic tryptamine, structurally similar to psilocin. It is known for producing more visual and recreational effects compared to other tryptamines, with less deep psychological introspection. 4-HO-MET is often described as more "playful" and less challenging than mushrooms.',
      effects: {
        positive: ['Strong visual effects', 'Euphoria', 'Less intense than psilocybin', 'More recreational', 'Color enhancement'],
        neutral: ['Visual hallucinations', 'Body high', 'Altered thought patterns'],
        negative: ['Nausea', 'Anxiety', 'Confusion at high doses', 'Headache']
      },
      dosage: {
        threshold: '5-10mg',
        light: '10-20mg',
        common: '20-35mg',
        strong: '35-50mg',
        heavy: '50mg+'
      },
      duration: {
        onset: '20-40 minutes',
        comeup: '30-60 minutes',
        peak: '2-4 hours',
        offset: '2-3 hours',
        total: '4-6 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '5-10mg',
              light: '10-20mg',
              common: '20-35mg',
              strong: '35-50mg',
              heavy: '50mg'
          },
          duration: {
              onset: '20-40 minutes',
              comeup: '30-60 minutes',
              peak: '2-4 hours',
              offset: '2-3 hours',
              total: '4-6 hours'
          },
          notes: 'Most common route for this substance.'
      },
      Insufflation: {
          dosage: {
              threshold: '3.5-7mg',
              light: '7-14mg',
              common: '14-24.5mg',
              strong: '24.5-35mg',
              heavy: '35mg'
          },
          duration: {
              onset: '5-15 minutes',
              comeup: '10-30 minutes',
              peak: '2-3 hours',
              offset: '2-3 hours',
              total: '3-5 hours'
          },
          notes: 'Faster onset than oral. Nasal irritation possible with repeated use.'
      }
  },
      interactions: ['SSRIs', 'MAOIs', 'Antipsychotics', 'Tramadol'],
      harmReduction: [
        'Known for being more recreational than other tryptamines',
        'Still a powerful psychedelic - respect it',
        'Strong visuals even at moderate doses',
        'Have a sitter present',
        'Set and setting still important'
      ],
      legality: 'Schedule I in US. Controlled in some countries. Unscheduled in others.',
      chemistry: {
        formula: 'C13H20N2O',
        molecularWeight: '220.31 g/mol',
        class: 'Tryptamine'
      },
      history: '4-HO-MET was first synthesized by Albert Hofmann but gained popularity as a research chemical in the 2010s.',
      routes: ['Oral', 'Insufflation'],
      afterEffects: 'Generally mild comedown. Some report afterglow.',
      riskLevel: 'moderate',
      aliases: ['metocin', '4-hydroxy-N-methyl-N-ethyltryptamine']
    },
  {
      id: '5-meo-dipt',
      name: '5-MeO-DiPT',
      commonNames: ['Foxy', 'Foxy Methoxy', '5-MeO'],
      category: 'hallucinogens',
      class: 'Tryptamine',
      description: '5-MeO-DiPT is a psychedelic tryptamine with unique properties. Unlike most psychedelics, it produces relatively mild visual effects but strong tactile and auditory enhancement. It is known for its aphrodisiac qualities and body-focused effects.',
      effects: {
        positive: ['Enhanced tactile sensation', 'Auditory enhancement', 'Aphrodisiac effects', 'Unique body high'],
        neutral: ['Mild visuals', 'Body load', 'Altered perception'],
        negative: ['Nausea', 'Anxiety', 'Body tension', 'Uncomfortable body sensations', 'Bitter taste']
      },
      dosage: {
        threshold: '5-8mg',
        light: '8-15mg',
        common: '15-25mg',
        strong: '25-35mg',
        heavy: '35mg+'
      },
      duration: {
        onset: '30-60 minutes',
        comeup: '45-90 minutes',
        peak: '2-4 hours',
        offset: '2-3 hours',
        total: '4-6 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '5-8mg',
              light: '8-15mg',
              common: '15-25mg',
              strong: '25-35mg',
              heavy: '35mg'
          },
          duration: {
              onset: '30-60 minutes',
              comeup: '45-90 minutes',
              peak: '2-4 hours',
              offset: '2-3 hours',
              total: '4-6 hours'
          },
          notes: 'Most common route for this substance.'
      },
      Insufflation: {
          dosage: {
              threshold: '3.5-5.6mg',
              light: '5.6-10.5mg',
              common: '10.5-17.5mg',
              strong: '17.5-24.5mg',
              heavy: '24.5mg'
          },
          duration: {
              onset: '5-15 minutes',
              comeup: '10-30 minutes',
              peak: '2-3 hours',
              offset: '2-3 hours',
              total: '3-5 hours'
          },
          notes: 'Faster onset than oral. Nasal irritation possible with repeated use.'
      }
  },
      interactions: ['SSRIs', 'MAOIs', 'Antipsychotics', 'Tramadol'],
      harmReduction: [
        'Known for body-focused effects rather than visuals',
        'Unique among tryptamines',
        'Body load can be uncomfortable',
        'Stay hydrated',
        'Have a sitter present',
        'Not recommended for those sensitive to body load'
      ],
      legality: 'Schedule I in US. Controlled in many countries.',
      chemistry: {
        formula: 'C14H20N2O',
        molecularWeight: '232.32 g/mol',
        class: 'Tryptamine'
      },
      history: '5-MeO-DiPT was first synthesized by Alexander Shulgin and described in his book TiHKAL.',
      routes: ['Oral', 'Insufflation'],
      afterEffects: 'Possible hangover. Body tension may linger.',
      riskLevel: 'moderate',
      aliases: ['5-methoxy-N,N-diisopropyltryptamine', 'foxy methoxy']
    },

    // ============================================
    // HALLUCINOGENS - Lysergamides
    // ============================================,
  {
      id: 'lsa',
      name: 'LSA',
      commonNames: ['Ergine', 'Morning Glory', 'Hawaiian Baby Woodrose', 'HBWR'],
      category: 'hallucinogens',
      class: 'Ergoline',
      description: 'LSA (Lysergic Acid Amide) is a naturally occurring psychedelic compound found in morning glory seeds and Hawaiian baby woodrose seeds. It is structurally related to LSD but produces milder and more sedating effects. LSA has been used traditionally by indigenous peoples of Mexico.',
      effects: {
        positive: ['Mild psychedelic effects', 'Dreamlike state', 'Introspection', 'Natural origin'],
        neutral: ['Sedation', 'Body heaviness', 'Closed-eye visuals', 'Long duration'],
        negative: ['Severe nausea and vomiting', 'Vasoconstriction', 'Body aches', 'Lethargy', 'Leg cramps']
      },
      dosage: {
        threshold: '50-100 seeds (morning glory), 1-2 seeds (HBWR)',
        light: '100-150 seeds (MG), 2-4 seeds (HBWR)',
        common: '150-300 seeds (MG), 4-8 seeds (HBWR)',
        strong: '300-500 seeds (MG), 8-12 seeds (HBWR)',
        heavy: '500+ seeds (MG), 12+ seeds (HBWR)'
      },
      duration: {
        onset: '45-90 minutes',
        comeup: '1-2 hours',
        peak: '4-6 hours',
        offset: '3-5 hours',
        total: '8-12 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '50-100 seeds (morning glory), 1-2 seeds (HBWR)',
              light: '100-150 seeds (MG), 2-4 seeds (HBWR)',
              common: '150-300 seeds (MG), 4-8 seeds (HBWR)',
              strong: '300-500 seeds (MG), 8-12 seeds (HBWR)',
              heavy: '500-12seeds'
          },
          duration: {
              onset: '45-90 minutes',
              comeup: '1-2 hours',
              peak: '4-6 hours',
              offset: '3-5 hours',
              total: '8-12 hours'
          },
          notes: 'Most common route for this substance.'
      }
  },
      interactions: ['SSRIs', 'MAOIs', 'Antipsychotics', 'Ergot derivatives'],
      harmReduction: [
        'Expect nausea - have ginger or anti-nausea medication ready',
        'Non-polar extraction can reduce nausea',
        'Commercial seeds may be coated with pesticides - wash thoroughly',
        'HBWR seeds are much more potent than morning glory',
        'Laying down can help with body discomfort',
        'Have a long period available - it lasts a while'
      ],
      legality: 'LSA is Schedule III in US. Seeds are legal to possess but extraction/consumption is illegal.',
      chemistry: {
        formula: 'C16H18N2O',
        molecularWeight: '254.33 g/mol',
        class: 'Ergoline alkaloid'
      },
      history: 'LSA has been used by indigenous Mexicans for centuries. It was identified as the active compound in ololiuqui in 1960.',
      routes: ['Oral (chewing seeds, extraction)'],
      afterEffects: 'Fatigue, body aches. Possible lingering sedation.',
      riskLevel: 'moderate',
      aliases: ['lysergic acid amide', 'ergine']
    },

    // ============================================
    // HALLUCINOGENS - 2C Series
    // ============================================,
  {
      id: '2c-i',
      name: '2C-I',
      commonNames: ['I-DOTS', '2CI'],
      category: 'hallucinogens',
      class: 'Phenethylamine',
      description: '2C-I is a psychedelic phenethylamine of the 2C family, structurally similar to 2C-B with an iodine atom instead of bromine. It is known for producing strong visual effects and stimulation. 2C-I is more stimulating and longer lasting than 2C-B.',
      effects: {
        positive: ['Strong visuals', 'Stimulation', 'Euphoria', 'Enhanced appreciation of music'],
        neutral: ['Long duration', 'Energy increase', 'Visual enhancement'],
        negative: ['Body load', 'Anxiety', 'Overstimulation', 'Insomnia']
      },
      dosage: {
        threshold: '5-10mg',
        light: '10-15mg',
        common: '15-25mg',
        strong: '25-40mg',
        heavy: '40mg+'
      },
      duration: {
        onset: '45-90 minutes',
        comeup: '1-2 hours',
        peak: '3-5 hours',
        offset: '3-4 hours',
        total: '6-10 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '5-10mg',
              light: '10-15mg',
              common: '15-25mg',
              strong: '25-40mg',
              heavy: '40mg'
          },
          duration: {
              onset: '45-90 minutes',
              comeup: '1-2 hours',
              peak: '3-5 hours',
              offset: '3-4 hours',
              total: '6-10 hours'
          },
          notes: 'Most common route for this substance.'
      },
      Insufflation: {
          dosage: {
              threshold: '3.5-7mg',
              light: '7-10.5mg',
              common: '10.5-17.5mg',
              strong: '17.5-28mg',
              heavy: '28mg'
          },
          duration: {
              onset: '5-15 minutes',
              comeup: '10-30 minutes',
              peak: '2-4 hours',
              offset: '2-3 hours',
              total: '5-8 hours'
          },
          notes: 'Faster onset than oral. Nasal irritation possible with repeated use.'
      }
  },
      interactions: ['SSRIs', 'MAOIs', 'Stimulants', 'Other psychedelics'],
      harmReduction: [
        'More stimulating than 2C-B',
        'Long duration - plan accordingly',
        'Body load can be significant',
        'Stay hydrated but not excessively',
        'Have a sitter present'
      ],
      legality: 'Schedule I in US. Controlled in many countries.',
      chemistry: {
        formula: 'C10H14INO2',
        molecularWeight: '307.13 g/mol',
        class: 'Phenethylamine'
      },
      history: '2C-I was synthesized by Alexander Shulgin and described in his book PiHKAL. It became popular in the 2000s.',
      routes: ['Oral', 'Insufflation (very painful)'],
      afterEffects: 'Stimulation may persist. Difficulty sleeping.',
      riskLevel: 'moderate',
      aliases: ['2,5-dimethoxy-4-iodophenethylamine']
    },

    // ============================================
    // HALLUCINOGENS - NBOMe Series (Warning)
    // ============================================,
  {
      id: '25i-nbome',
      name: '25I-NBOMe',
      commonNames: ['N-Bomb', 'Smiles', '25I', 'Solaris'],
      category: 'hallucinogens',
      class: 'Phenethylamine',
      description: '25I-NBOMe is a highly potent synthetic psychedelic of the NBOMe series. It acts as a potent 5-HT2A receptor agonist. WARNING: 25I-NBOMe has been responsible for numerous deaths and hospitalizations. It has a very narrow therapeutic window and unpredictable potency. Often sold as LSD, it is far more dangerous.',
      effects: {
        positive: ['Intense visuals at safe doses', 'Psychedelic effects'],
        neutral: ['Very potent - active in micrograms'],
        negative: ['HIGH OVERDOSE RISK', 'Vasoconstriction', 'Seizures', 'Death reported at common doses', 'Unpredictable potency', 'Often mislabeled as LSD', 'Many hospitalizations']
      },
      dosage: {
        threshold: '50-150μg',
        light: '150-300μg',
        common: '300-500μg (DANGEROUS)',
        strong: '500-1000μg (HIGHLY DANGEROUS)',
        heavy: '1000μg+ (POTENTIALLY FATAL)'
      },
      duration: {
        onset: '30-60 minutes (sublingual)',
        comeup: '1-2 hours',
        peak: '2-4 hours',
        offset: '2-4 hours',
        total: '6-10 hours'
      },
    routeData: {
      Sublingual: {
          dosage: {
              threshold: '42.5-127.5μg',
              light: '127.5-255μg',
              common: '300-500μg (DANGEROUS)',
              strong: '500-1000μg (HIGHLY DANGEROUS)',
              heavy: '850μg'
          },
          duration: {
              onset: '10-20 minutes',
              comeup: '20-40 minutes',
              peak: '2-4 hours',
              offset: '2-4 hours',
              total: '6-10 hours'
          },
          notes: 'Faster onset than oral. Good bioavailability. Held under tongue.'
      },
      Buccal: {
          dosage: {
              threshold: '42.5-127.5μg',
              light: '127.5-255μg',
              common: '300-500μg (DANGEROUS)',
              strong: '500-1000μg (HIGHLY DANGEROUS)',
              heavy: '850μg'
          },
          duration: {
              onset: '5-15 minutes',
              comeup: '15-30 minutes',
              peak: '2-4 hours',
              offset: '2-4 hours',
              total: '6-10 hours'
          },
          notes: 'Absorbed through cheek lining. Faster than oral.'
      },
      Insufflation: {
          dosage: {
              threshold: '35-105μg',
              light: '105-210μg',
              common: '300-500μg (DANGEROUS)',
              strong: '500-1000μg (HIGHLY DANGEROUS)',
              heavy: '700μg'
          },
          duration: {
              onset: '5-15 minutes',
              comeup: '10-30 minutes',
              peak: '2-3 hours',
              offset: '2-3 hours',
              total: '5-8 hours'
          },
          notes: 'Faster onset than oral. Nasal irritation possible with repeated use.'
      }
  },
      interactions: ['ALL COMBINATIONS ARE DANGEROUS', 'MAOIs', 'SSRIs', 'Stimulants'],
      harmReduction: [
        'NOT RECOMMENDED - many deaths reported',
        'If you must use: test your substance - often sold as LSD',
        'If you took what you thought was LSD and it\'s bitter/numbing, spit it out',
        'Never insufflate - many deaths from this route',
        'Vasoconstriction can be severe and dangerous',
        'Have emergency services available',
        'Consider avoiding this substance entirely'
      ],
      legality: 'Schedule I in US. Illegal internationally. Many countries have emergency scheduled it due to deaths.',
      chemistry: {
        formula: 'C18H22INO3',
        molecularWeight: '427.28 g/mol',
        class: 'Phenethylamine (NBOMe series)'
      },
      history: '25I-NBOMe was discovered in 2003. It appeared as a "legal LSD" around 2010 and quickly gained notoriety for causing deaths.',
      routes: ['Sublingual', 'Buccal', 'Insufflation (DANGEROUS)'],
      afterEffects: 'May include prolonged vasoconstriction, psychological distress. High risk of lasting harm from overdose.',
      riskLevel: 'very-high',
      aliases: ['2C-I-NBOMe', '25I']
    },

    // ============================================
    // DELIRIANTS
    // ============================================
];
