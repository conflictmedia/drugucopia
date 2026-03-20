// Dissociatives Substances

import type { Substance } from '../types';

export const dissociatives: Substance[] = [
  {
      id: 'ketamine',
      name: 'Ketamine',
      commonNames: ['K', 'Special K', 'Ket', 'Vitamin K'],
      category: 'dissociatives',
      class: 'Arylcyclohexylamine',
      description: 'Ketamine is a dissociative anesthetic developed in the 1960s that has both medical applications and recreational use. It acts primarily as an NMDA receptor antagonist, producing anesthesia, analgesia, and at sub-anesthetic doses, dissociative and psychedelic effects. The ketamine experience is characterized by feelings of detachment from the body and environment, often described as a "K-hole" at higher doses. Ketamine has shown remarkable efficacy in treating treatment-resistant depression and is being studied for other mental health applications.',
      effects: {
        positive: ['Dissociation from pain and discomfort', 'Antidepressant effects', 'Out-of-body experiences', 'Therapeutic insights', 'Euphoria at lower doses', 'Rapid antidepressant action'],
        neutral: ['Dissociative state', 'Numbness', 'Altered perception of body and space', 'Visual distortions', 'Changes in thought patterns'],
        negative: ['Nausea and vomiting', 'Confusion and disorientation', 'Bladder damage with chronic use', 'Memory impairment', 'Difficulty moving', 'Risk of injury due to numbness', 'Psychological dependence']
      },
      dosage: {
        threshold: '10-30mg',
        light: '30-60mg',
        common: '60-100mg',
        strong: '100-200mg',
        heavy: '200mg+'
      },
      duration: {
        onset: '5-15 minutes (insufflated)',
        comeup: '10-20 minutes',
        peak: '30-60 minutes',
        offset: '1-2 hours',
        total: '1-3 hours'
      },
    routeData: {
      Intranasal: {
          dosage: {
              threshold: '7-21mg',
              light: '21-42mg',
              common: '42-70mg',
              strong: '70-140mg',
              heavy: '140mg'
          },
          duration: {
              onset: '5-15 minutes',
              comeup: '15-30 minutes',
              peak: '26-51 minutes',
              offset: '1-2 hours',
              total: '1-3 hours'
          },
          notes: 'Similar to insufflation. Nasal spray delivery.'
      },
      Intramuscular: {
          dosage: {
              threshold: '10-25mg',
              light: '25-50mg',
              common: '50-100mg',
              strong: '100-150mg',
              heavy: '150mg+'
          },
          duration: {
              onset: '2-5 minutes',
              comeup: '5-15 minutes',
              peak: '20-40 minutes',
              offset: '45-90 minutes',
              total: '1-2 hours'
          },
          notes: 'Medical and recreational use. Rapid onset. More reliable absorption than insufflation.'
      },
      Intravenous: {
          dosage: {
              threshold: '5-15mg',
              light: '15-30mg',
              common: '30-60mg',
              strong: '60-100mg',
              heavy: '100mg+'
          },
          duration: {
              onset: '30-60 seconds',
              comeup: '1-5 minutes',
              peak: '10-20 minutes',
              offset: '30-60 minutes',
              total: '45-90 minutes'
          },
          notes: 'Medical anesthesia. Very rapid onset. Requires medical supervision.'
      },
      Oral: {
          dosage: {
              threshold: '50-100mg',
              light: '100-200mg',
              common: '200-400mg',
              strong: '400-600mg',
              heavy: '600mg+'
          },
          duration: {
              onset: '15-30 minutes',
              comeup: '30-60 minutes',
              peak: '1-2 hours',
              offset: '2-4 hours',
              total: '4-6 hours'
          },
          notes: 'Lower bioavailability (~20%). Longer duration. Often used for depression treatment protocols.'
      }
  },
      interactions: ['Alcohol', 'Benzodiazepines', 'Opioids', 'Other depressants', 'Stimulants'],
      harmReduction: [
        'Use in a safe environment - you may be unable to move',
        'Have a sitter present',
        'Avoid combining with other depressants',
        'Start with lower doses to assess sensitivity',
        'Do not drive or operate machinery',
        'Stay hydrated',
        'Be aware of bladder issues with chronic use',
        'Space out use to reduce dependence risk'
      ],
      legality: 'Schedule III controlled substance in the US. Prescription only for medical use. Illegal for non-medical use in most jurisdictions.',
      chemistry: {
        formula: 'C13H16ClNO',
        molecularWeight: '237.73 g/mol',
        class: 'Arylcyclohexylamine'
      },
      history: 'Ketamine was developed in 1962 as a safer alternative to PCP. It was approved for human use in 1970 and widely used as a battlefield anesthetic during the Vietnam War. Its antidepressant properties were discovered in the 2000s.',
      routes: ['Intranasal', 'Intramuscular', 'Intravenous', 'Oral'],
      afterEffects: 'Drowsiness and cognitive impairment can last several hours. Antidepressant effects may persist for days to weeks.',
      riskLevel: 'moderate',
      aliases: ['2-(2-chlorophenyl)-2-(methylamino)cyclohexanone']
    },
  {
      id: 'dxm',
      name: 'DXM',
      commonNames: ['Dextromethorphan', 'Robo', 'Dex', 'Triple C', 'Skittles'],
      category: 'dissociatives',
      class: 'Morphinan',
      description: 'Dextromethorphan (DXM) is a dissociative substance and cough suppressant found in many over-the-counter cold and cough medications. At therapeutic doses, it acts as a cough suppressant without significant psychoactive effects. At higher doses, DXM acts as an NMDA receptor antagonist, producing dissociative and psychedelic effects. The DXM experience is dose-dependent, ranging from mild intoxication at lower doses to full dissociative experiences at higher doses. Many products containing DXM also contain other active ingredients that can be dangerous at recreational doses.',
      effects: {
        positive: ['Dissociation from pain', 'Euphoria', 'Closed-eye visuals', 'Music enhancement', 'Introspection', 'Sense of detachment'],
        neutral: ['Dissociative state', 'Altered perception', 'Numbness', 'Changes in thought patterns', 'Motor impairment'],
        negative: ['Nausea and vomiting', 'Itching and skin irritation', 'Confusion and disorientation', 'Rapid heart rate', 'High blood pressure', 'Risk of serotonin syndrome', 'Psychological distress', 'Liver damage if product contains acetaminophen']
      },
      dosage: {
        threshold: '1.5-2.5mg/kg',
        light: '2.5-5mg/kg',
        common: '5-7.5mg/kg',
        strong: '7.5-15mg/kg',
        heavy: '15mg/kg+'
      },
      duration: {
        onset: '30-60 minutes',
        comeup: '1-2 hours',
        peak: '3-5 hours',
        offset: '3-6 hours',
        total: '6-12 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '1.5-2.5mg',
              light: '2.5-5mg',
              common: '5-7.5mg',
              strong: '7.5-15mg',
              heavy: '15mg'
          },
          duration: {
              onset: '30-60 minutes',
              comeup: '1-2 hours',
              peak: '3-5 hours',
              offset: '3-6 hours',
              total: '6-12 hours'
          },
          notes: 'Most common route for this substance.'
      }
  },
      interactions: ['MAOIs (dangerous)', 'SSRIs (serotonin syndrome risk)', 'Alcohol', 'Other dissociatives', 'Stimulants', 'Antihistamines'],
      harmReduction: [
        'Only use products with DXM as the sole active ingredient',
        'Avoid products with acetaminophen, guaifenesin, or other additives',
        'Start with lower doses to assess sensitivity',
        'Do not combine with MAOIs or SSRIs',
        'Be in a safe environment',
        'Have a trip-sitter for higher doses',
        'Stay hydrated',
        'Avoid frequent use due to potential brain damage'
      ],
      legality: 'Legal over-the-counter in most countries. Some jurisdictions have age restrictions or require ID for purchase. Some US states have restricted sales.',
      chemistry: {
        formula: 'C18H25NO',
        molecularWeight: '271.40 g/mol',
        class: 'Morphinan derivative'
      },
      history: 'DXM was developed in the 1950s as a non-addictive alternative to codeine cough suppressants. Recreational use emerged in the 1960s-70s. It remains legal but with increasing restrictions.',
      routes: ['Oral (syrup, capsules, lozenges)'],
      afterEffects: 'Afterglow or hangover depending on dose. Some report lingering dissociation. Depression possible with frequent use.',
      riskLevel: 'moderate',
      aliases: ['dextromethorphan', 'DM']
    },

    // Cannabinoids,
  {
      id: '3-meo-pcp',
      name: '3-MeO-PCP',
      commonNames: ['Mxe\'s Cousin', '3-Methoxyphencyclidine', 'Moxie'],
      category: 'dissociatives',
      class: 'Arylcyclohexylamine',
      description: '3-MeO-PCP (3-methoxyphencyclidine) is a dissociative anesthetic of the arylcyclohexylamine class, structurally related to PCP and ketamine. It is known for producing long-lasting dissociative effects with pronounced mania and stimulation compared to other dissociatives. 3-MeO-PCP acts primarily as an NMDA receptor antagonist. Unlike ketamine, it has significant dopamine reuptake inhibition properties, contributing to its more stimulating character. The substance is known for its long duration and unpredictable potency.',
      effects: {
        positive: ['Intense dissociation', 'Euphoria and mania', 'Enhanced appreciation of music', 'Out-of-body experiences', 'Stimulation and energy'],
        neutral: ['Numbness', 'Altered perception of body and space', 'Changes in thought patterns', 'Motor incoordination'],
        negative: ['Mania and grandiose thinking', 'Confusion and disorientation', 'Memory impairment', 'Risk of psychotic episodes', 'Urinary retention', 'Long duration can be exhausting']
      },
      dosage: {
        threshold: '3-5mg',
        light: '5-10mg',
        common: '10-20mg',
        strong: '20-30mg',
        heavy: '30mg+'
      },
      duration: {
        onset: '30-60 minutes (oral)',
        comeup: '1-2 hours',
        peak: '3-5 hours',
        offset: '6-12 hours',
        total: '8-18 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '3-5mg',
              light: '5-10mg',
              common: '10-20mg',
              strong: '20-30mg',
              heavy: '30mg'
          },
          duration: {
              onset: '30-60 minutes (oral)',
              comeup: '1-2 hours',
              peak: '3-5 hours',
              offset: '6-12 hours',
              total: '8-18 hours'
          },
          notes: 'Most common route for this substance.'
      },
      Insufflation: {
          dosage: {
              threshold: '2.1-3.5mg',
              light: '3.5-7mg',
              common: '7-14mg',
              strong: '14-21mg',
              heavy: '21mg'
          },
          duration: {
              onset: '5-15 minutes',
              comeup: '10-30 minutes',
              peak: '2-4 hours',
              offset: '5-9 hours',
              total: '6-14 hours'
          },
          notes: 'Faster onset than oral. Nasal irritation possible with repeated use.'
      },
      Sublingual: {
          dosage: {
              threshold: '2.6-4.3mg',
              light: '4.3-8.5mg',
              common: '8.5-17mg',
              strong: '17-25.5mg',
              heavy: '25.5mg'
          },
          duration: {
              onset: '10-20 minutes',
              comeup: '20-40 minutes',
              peak: '3-5 hours',
              offset: '6-12 hours',
              total: '8-18 hours'
          },
          notes: 'Faster onset than oral. Good bioavailability. Held under tongue.'
      }
  },
      interactions: ['Alcohol', 'Benzodiazepines', 'Other dissociatives', 'Stimulants', 'Antidepressants'],
      harmReduction: [
        'Use an accurate milligram scale - active doses are very small',
        'Have a sitter present',
        'Be in a safe environment',
        'Avoid combining with other substances',
        'Be aware of the long duration',
        'Do not redose - wait for full effects',
        'Avoid if you have mental health conditions'
      ],
      legality: 'Controlled in many jurisdictions. Illegal in the UK, Germany, and several US states.',
      chemistry: {
        formula: 'C17H25NO',
        molecularWeight: '259.39 g/mol',
        class: 'Arylcyclohexylamine'
      },
      history: '3-MeO-PCP was first synthesized in the 1970s but remained obscure until appearing on the research chemical market around 2010.',
      routes: ['Oral', 'Insufflation', 'Sublingual'],
      afterEffects: 'Long afterglow or hangover possible. Can affect mood for days.',
      riskLevel: 'high',
      aliases: ['3-methoxyphencyclidine']
    },
  {
      id: '2-fdck',
      name: '2-FDCK',
      commonNames: ['2-Fluorodeschloroketamine', '2-FK', 'Fluoroketamine'],
      category: 'dissociatives',
      class: 'Arylcyclohexylamine',
      description: '2-FDCK (2-fluorodeschloroketamine) is a dissociative anesthetic structurally related to ketamine, with a fluorine atom substituted for the chlorine atom. It produces effects similar to ketamine but with a longer duration and slightly different character. Like ketamine, it acts primarily as an NMDA receptor antagonist. The fluorine substitution makes the compound more stable, leading to slower metabolism and extended effects.',
      effects: {
        positive: ['Dissociative effects', 'Euphoria', 'Antidepressant potential', 'Pain relief', 'Out-of-body experiences at higher doses'],
        neutral: ['Numbness', 'Altered perception', 'Motor incoordination', 'Changes in thought patterns'],
        negative: ['Nausea', 'Confusion', 'Bladder irritation with chronic use', 'Memory impairment', 'Disorientation']
      },
      dosage: {
        threshold: '10-20mg',
        light: '20-40mg',
        common: '40-80mg',
        strong: '80-150mg',
        heavy: '150mg+'
      },
      duration: {
        onset: '5-15 minutes (insufflated)',
        comeup: '15-30 minutes',
        peak: '1-2 hours',
        offset: '2-4 hours',
        total: '3-6 hours'
      },
    routeData: {
      Insufflation: {
          dosage: {
              threshold: '7-14mg',
              light: '14-28mg',
              common: '28-56mg',
              strong: '56-105mg',
              heavy: '105mg'
          },
          duration: {
              onset: '5-15 minutes',
              comeup: '10-30 minutes',
              peak: '1-2 hours',
              offset: '2-3 hours',
              total: '2-5 hours'
          },
          notes: 'Faster onset than oral. Nasal irritation possible with repeated use.'
      },
      Oral: {
          dosage: {
              threshold: '10-20mg',
              light: '20-40mg',
              common: '40-80mg',
              strong: '80-150mg',
              heavy: '150mg'
          },
          duration: {
              onset: '5-15 minutes (insufflated)',
              comeup: '15-30 minutes',
              peak: '1-2 hours',
              offset: '2-4 hours',
              total: '3-6 hours'
          },
          notes: 'Most common route for this substance.'
      },
      Intramuscular: {
          dosage: {
              threshold: '6-12mg',
              light: '12-24mg',
              common: '24-48mg',
              strong: '48-90mg',
              heavy: '90mg'
          },
          duration: {
              onset: '5-15 minutes',
              comeup: '15-30 minutes',
              peak: '1-2 hours',
              offset: '2-4 hours',
              total: '3-6 hours'
          },
          notes: 'Medical administration route. Slower onset than IV but sustained effect.'
      }
  },
      interactions: ['Alcohol', 'Benzodiazepines', 'Other dissociatives', 'Depressants'],
      harmReduction: [
        'Have a sitter present',
        'Be in a safe environment',
        'Avoid combining with depressants',
        'Use sterile equipment',
        'Stay hydrated',
        'Avoid chronic use due to bladder risks'
      ],
      legality: 'Not explicitly controlled in many jurisdictions but may fall under analogue acts.',
      chemistry: {
        formula: 'C13H16FNO',
        molecularWeight: '221.27 g/mol',
        class: 'Arylcyclohexylamine'
      },
      history: '2-FDCK appeared on the research chemical market as a ketamine alternative, gaining popularity in the 2010s.',
      routes: ['Insufflation', 'Oral', 'Intramuscular'],
      afterEffects: 'Afterglow or grogginess possible.',
      riskLevel: 'moderate',
      aliases: ['2-fluorodeschloroketamine', '2-FK']
    },

    // Stimulant Research Chemicals,
  {
      id: 'nitrous-oxide',
      name: 'Nitrous Oxide',
      commonNames: ['N2O', 'Laughing Gas', 'Whippets', 'Nos', 'Nangs'],
      category: 'dissociatives',
      class: 'NMDA Antagonist',
      description: 'Nitrous oxide (N2O) is a colorless, non-flammable gas with a slightly sweet odor and taste. It has legitimate medical uses as an anesthetic and analgesic, and is also used as a propellant in whipped cream canisters. When inhaled, nitrous oxide produces rapid-onset dissociative effects, euphoria, and laughter. The effects are extremely short-lived, lasting only 1-5 minutes. Chronic use can lead to vitamin B12 deficiency and neurological damage.',
      effects: {
        positive: ['Rapid euphoria', 'Laughter and giggling', 'Dissociative effects', 'Pain relief', 'Short duration'],
        neutral: ['Dissociation', 'Altered perception', 'Dizziness', 'Slurred speech'],
        negative: ['Vitamin B12 depletion with chronic use', 'Risk of falls or accidents', 'Potential for hypoxia', 'Nerve damage with heavy use', 'Headache', 'Nausea']
      },
      dosage: {
        threshold: '1-2 inhalations',
        light: '2-4 inhalations',
        common: '4-8 inhalations',
        strong: '8-15 inhalations',
        heavy: '15+ inhalations'
      },
      duration: {
        onset: '5-15 seconds',
        comeup: '10-30 seconds',
        peak: '30-60 seconds',
        offset: '1-2 minutes',
        total: '1-5 minutes'
      },
    routeData: {
      Inhalation: {
          dosage: {
              threshold: '0.6-1.2inhalations',
              light: '1.2-2.4inhalations',
              common: '2.4-4.8inhalations',
              strong: '4.8-9inhalations',
              heavy: '9inhalations'
          },
          duration: {
              onset: '10-30 seconds',
              comeup: '1-5 minutes',
              peak: '18-36 seconds',
              offset: '1-2 minutes',
              total: '1-3 minutes'
          },
          notes: 'Rapid onset through lungs. Similar to smoking.'
      }
  },
      interactions: ['Other depressants', 'Stimulants', 'Ketamine'],
      harmReduction: [
        'Never use without adequate oxygen - breathe air between doses',
        'Never put a bag over your head',
        'Use while seated to prevent falls',
        'Take B12 supplements with regular use',
        'Avoid chronic heavy use to prevent nerve damage',
        'Do not drive while under the influence',
        'Use balloons or proper equipment - never direct from canister'
      ],
      legality: 'Legal for food and medical use. Recreational use is illegal in some jurisdictions. Many places have restricted sales of whipped cream chargers.',
      chemistry: {
        formula: 'N2O',
        molecularWeight: '44.01 g/mol',
        class: 'Inorganic gas'
      },
      history: 'Nitrous oxide was discovered in 1772. Its anesthetic properties were recognized in the 1840s. Recreational use became popular in the 18th century and continues today.',
      routes: ['Inhalation'],
      afterEffects: 'Brief headache possible. Generally quick return to baseline.',
      riskLevel: 'low',
      aliases: ['dinitrogen monoxide', 'laughing gas']
    },
  {
      id: 'methoxetamine',
      name: 'Methoxetamine',
      commonNames: ['MXE', 'Mexxy', 'M-Ket'],
      category: 'dissociatives',
      class: 'Arylcyclohexylamine',
      description: 'Methoxetamine (MXE) is a dissociative anesthetic of the arylcyclohexylamine class, structurally related to ketamine. It produces longer-lasting dissociative effects than ketamine and has been studied for its antidepressant properties. MXE was developed as a legal alternative to ketamine.',
      effects: {
        positive: ['Dissociative euphoria', 'Antidepressant effects', 'Pain relief', 'Enhanced introspection', 'Longer duration than ketamine'],
        neutral: ['Dissociation', 'Numbness', 'Motor impairment'],
        negative: ['Bladder toxicity with heavy use', 'Addiction potential', 'Psychosis at high doses', 'Depersonalization', 'Memory impairment']
      },
      dosage: {
        threshold: '5-15mg',
        light: '15-30mg',
        common: '30-50mg',
        strong: '50-75mg',
        heavy: '75mg+'
      },
      duration: {
        onset: '15-45 minutes',
        comeup: '30-60 minutes',
        peak: '1-2 hours',
        offset: '2-4 hours',
        total: '4-6 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '5-15mg',
              light: '15-30mg',
              common: '30-50mg',
              strong: '50-75mg',
              heavy: '75mg'
          },
          duration: {
              onset: '15-45 minutes',
              comeup: '30-60 minutes',
              peak: '1-2 hours',
              offset: '2-4 hours',
              total: '4-6 hours'
          },
          notes: 'Most common route for this substance.'
      },
      Insufflation: {
          dosage: {
              threshold: '3.5-10.5mg',
              light: '10.5-21mg',
              common: '21-35mg',
              strong: '35-52.5mg',
              heavy: '52.5mg'
          },
          duration: {
              onset: '5-15 minutes',
              comeup: '10-30 minutes',
              peak: '1-2 hours',
              offset: '2-3 hours',
              total: '3-5 hours'
          },
          notes: 'Faster onset than oral. Nasal irritation possible with repeated use.'
      },
      Sublingual: {
          dosage: {
              threshold: '4.3-12.8mg',
              light: '12.8-25.5mg',
              common: '25.5-42.5mg',
              strong: '42.5-63.8mg',
              heavy: '63.8mg'
          },
          duration: {
              onset: '10-20 minutes',
              comeup: '20-40 minutes',
              peak: '1-2 hours',
              offset: '2-4 hours',
              total: '4-6 hours'
          },
          notes: 'Faster onset than oral. Good bioavailability. Held under tongue.'
      }
  },
      interactions: ['MAOIs (dangerous)', 'Other dissociatives', 'Stimulants', 'Depressants'],
      harmReduction: [
        'Lower doses than ketamine - it\'s more potent',
        'Longer duration - plan accordingly',
        'Bladder toxicity with heavy use',
        'Avoid daily use',
        'Have a sitter present',
        'Do not combine with MAOIs'
      ],
      legality: 'Schedule I in US. Controlled in many countries. Banned in UK and EU.',
      chemistry: {
        formula: 'C15H21NO2',
        molecularWeight: '247.33 g/mol',
        class: 'Arylcyclohexylamine'
      },
      history: 'MXE emerged as a research chemical around 2010. It was developed as a ketamine alternative with longer duration.',
      routes: ['Oral', 'Insufflation', 'Sublingual'],
      afterEffects: 'Dissociation may linger. Antidepressant effects may last days.',
      riskLevel: 'moderate',
      aliases: ['2-(3-methoxyphenyl)-2-(ethylamino)cyclohexanone']
    },
  {
      id: 'o-pce',
      name: 'O-PCE',
      commonNames: ['Deschloroketamine analog', 'O-PCE', 'DCK analog'],
      category: 'dissociatives',
      class: 'Arylcyclohexylamine',
      description: 'O-PCE (2-oxo-PCE) is a dissociative research chemical of the arylcyclohexylamine class. It is structurally similar to ketamine and DCK. O-PCE produces dissociative effects with less anesthetic properties compared to ketamine, and is known for its stimulant-like qualities.',
      effects: {
        positive: ['Dissociative euphoria', 'Increased sociability', 'Stimulating qualities', 'Enhanced music appreciation'],
        neutral: ['Dissociation', 'Motor impairment', 'Nystagmus'],
        negative: ['Addiction potential', 'Bladder issues with heavy use', 'Psychosis at high doses', 'Memory problems']
      },
      dosage: {
        threshold: '5-15mg',
        light: '15-30mg',
        common: '30-50mg',
        strong: '50-80mg',
        heavy: '80mg+'
      },
      duration: {
        onset: '15-30 minutes',
        comeup: '30-60 minutes',
        peak: '1-2 hours',
        offset: '2-3 hours',
        total: '3-5 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '5-15mg',
              light: '15-30mg',
              common: '30-50mg',
              strong: '50-80mg',
              heavy: '80mg'
          },
          duration: {
              onset: '15-30 minutes',
              comeup: '30-60 minutes',
              peak: '1-2 hours',
              offset: '2-3 hours',
              total: '3-5 hours'
          },
          notes: 'Most common route for this substance.'
      },
      Insufflation: {
          dosage: {
              threshold: '3.5-10.5mg',
              light: '10.5-21mg',
              common: '21-35mg',
              strong: '35-56mg',
              heavy: '56mg'
          },
          duration: {
              onset: '5-15 minutes',
              comeup: '10-30 minutes',
              peak: '1-2 hours',
              offset: '2-3 hours',
              total: '2-4 hours'
          },
          notes: 'Faster onset than oral. Nasal irritation possible with repeated use.'
      },
      Sublingual: {
          dosage: {
              threshold: '4.3-12.8mg',
              light: '12.8-25.5mg',
              common: '25.5-42.5mg',
              strong: '42.5-68mg',
              heavy: '68mg'
          },
          duration: {
              onset: '10-20 minutes',
              comeup: '20-40 minutes',
              peak: '1-2 hours',
              offset: '2-3 hours',
              total: '3-5 hours'
          },
          notes: 'Faster onset than oral. Good bioavailability. Held under tongue.'
      }
  },
      interactions: ['MAOIs', 'Other dissociatives', 'Stimulants', 'Depressants'],
      harmReduction: [
        'More potent than ketamine - use lower doses',
        'Less anesthetic than ketamine',
        'Has stimulant qualities',
        'Avoid daily use',
        'Have a sitter present',
        'Limited research on safety'
      ],
      legality: 'Unscheduled at US federal level. May be prosecuted under Federal Analogue Act. Controlled in some countries.',
      chemistry: {
        formula: 'C14H19NO',
        molecularWeight: '217.31 g/mol',
        class: 'Arylcyclohexylamine'
      },
      history: 'O-PCE was developed as a research chemical and appeared on the market around 2015.',
      routes: ['Oral', 'Insufflation', 'Sublingual'],
      afterEffects: 'May include stimulation and mild dissociation.',
      riskLevel: 'moderate',
      aliases: ['2-oxo-PCE', '2-oxo-PCM']
    },

    // ============================================
    // HALLUCINOGENS - Tryptamines
    // ============================================
];
