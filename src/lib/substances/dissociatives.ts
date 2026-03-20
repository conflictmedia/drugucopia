// Psychoactive Substances Documentation - Dissociatives

import { Substance } from './types';

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
        dosage: { threshold: '7-21mg', light: '21-42mg', common: '42-70mg', strong: '70-140mg', heavy: '140mg' },
        duration: { onset: '5-15 minutes', comeup: '15-30 minutes', peak: '26-51 minutes', offset: '1-2 hours', total: '1-3 hours' },
        notes: 'Similar to insufflation. Nasal spray delivery.'
      },
      Intramuscular: {
        dosage: { threshold: '10-25mg', light: '25-50mg', common: '50-100mg', strong: '100-150mg', heavy: '150mg+' },
        duration: { onset: '2-5 minutes', comeup: '5-15 minutes', peak: '20-40 minutes', offset: '45-90 minutes', total: '1-2 hours' },
        notes: 'Medical and recreational use. Rapid onset. More reliable absorption than insufflation.'
      },
      Intravenous: {
        dosage: { threshold: '5-15mg', light: '15-30mg', common: '30-60mg', strong: '60-100mg', heavy: '100mg+' },
        duration: { onset: '30-60 seconds', comeup: '1-5 minutes', peak: '10-20 minutes', offset: '30-60 minutes', total: '45-90 minutes' },
        notes: 'Medical anesthesia. Very rapid onset. Requires medical supervision.'
      },
      Oral: {
        dosage: { threshold: '50-100mg', light: '100-200mg', common: '200-400mg', strong: '400-600mg', heavy: '600mg+' },
        duration: { onset: '15-30 minutes', comeup: '30-60 minutes', peak: '1-2 hours', offset: '2-4 hours', total: '4-6 hours' },
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
        dosage: { threshold: '1.5-2.5mg', light: '2.5-5mg', common: '5-7.5mg', strong: '7.5-15mg', heavy: '15mg' },
        duration: { onset: '30-60 minutes', comeup: '1-2 hours', peak: '3-5 hours', offset: '3-6 hours', total: '6-12 hours' },
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
    routes: ['Oral'],
    afterEffects: 'Afterglow or hangover depending on dose. Some report lingering dissociation. Depression possible with frequent use.',
    riskLevel: 'moderate',
    aliases: ['dextromethorphan', 'DM']
  }
];
