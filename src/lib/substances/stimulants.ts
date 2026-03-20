// Psychoactive Substances Documentation - Stimulants

import { Substance } from './types';

export const stimulants: Substance[] = [
  {
    id: 'caffeine',
    name: 'Caffeine',
    commonNames: ['Coffee', 'Tea', 'Energy Drinks', 'Guarana'],
    category: 'stimulants',
    class: 'Xanthine',
    description: 'Caffeine is the most widely consumed psychoactive substance in the world. It is a natural compound found in coffee beans, tea leaves, cocoa beans, and other plant sources. Caffeine works by blocking adenosine receptors in the brain, which prevents the onset of drowsiness and promotes alertness. It also increases dopamine signaling, contributing to its mood-enhancing effects and mild addictive potential. As a central nervous system stimulant, caffeine is commonly used to improve concentration, reduce fatigue, and enhance physical performance.',
    effects: {
      positive: ['Increased alertness and wakefulness', 'Enhanced cognitive function and focus', 'Improved physical performance and endurance', 'Elevated mood and reduced perception of fatigue', 'Enhanced reaction time and coordination'],
      neutral: ['Increased heart rate and blood pressure', 'Diuretic effects', 'Mild appetite suppression', 'Increased metabolic rate'],
      negative: ['Anxiety and restlessness', 'Insomnia and sleep disruption', 'Digestive issues and stomach upset', 'Headaches and migraines', 'Dependency and withdrawal symptoms', 'Jitters and tremors']
    },
    dosage: {
      threshold: '10-20mg',
      light: '20-50mg',
      common: '50-150mg',
      strong: '150-300mg',
      heavy: '300mg+'
    },
    duration: {
      onset: '10-30 minutes',
      comeup: '30-60 minutes',
      peak: '1-2 hours',
      offset: '3-5 hours',
      total: '4-6 hours'
    },
    routeData: {
      Oral: {
        dosage: { threshold: '10-20mg', light: '20-50mg', common: '50-150mg', strong: '150-300mg', heavy: '300mg' },
        duration: { onset: '10-30 minutes', comeup: '30-60 minutes', peak: '1-2 hours', offset: '3-5 hours', total: '4-6 hours' },
        notes: 'Most common route for this substance.'
      },
      Sublingual: {
        dosage: { threshold: '8.5-17mg', light: '17-42.5mg', common: '42.5-127.5mg', strong: '127.5-255mg', heavy: '255mg' },
        duration: { onset: '10-20 minutes', comeup: '20-40 minutes', peak: '1-2 hours', offset: '3-5 hours', total: '4-6 hours' },
        notes: 'Faster onset than oral. Good bioavailability. Held under tongue.'
      },
      Rectal: {
        dosage: { threshold: '7-14mg', light: '14-35mg', common: '35-105mg', strong: '105-210mg', heavy: '210mg' },
        duration: { onset: '5-15 minutes', comeup: '15-30 minutes', peak: '1-2 hours', offset: '3-5 hours', total: '4-6 hours' },
        notes: 'Higher bioavailability than oral. Faster onset. Less first-pass metabolism.'
      }
    },
    interactions: ['MAOIs', 'Certain antibiotics', 'Bronchodilators', 'Anticoagulants'],
    harmReduction: [
      'Avoid consuming more than 400mg per day for adults',
      'Do not mix with other stimulants without research',
      'Stay hydrated while consuming caffeine',
      'Avoid consumption late in the day to prevent sleep disruption',
      'Be aware of caffeine content in beverages and supplements',
      'Reduce intake gradually to avoid withdrawal symptoms'
    ],
    legality: 'Legal and unregulated in most jurisdictions. Widely available in foods, beverages, and supplements.',
    chemistry: {
      formula: 'C8H10N4O2',
      molecularWeight: '194.19 g/mol',
      class: 'Xanthine alkaloid'
    },
    history: 'Caffeine has been consumed for thousands of years, with tea cultivation in China dating back to 2700 BCE. Coffee consumption began in Ethiopia around the 9th century and spread throughout the Arab world. By the 17th century, coffee houses had become popular in Europe. Today, caffeine is the most widely used psychoactive substance globally.',
    routes: ['Oral (beverages, pills, food)', 'Sublingual', 'Rectal'],
    afterEffects: 'May include fatigue, headache, and irritability as effects wear off. Regular consumers may experience withdrawal.',
    riskLevel: 'low',
    aliases: ['1,3,7-trimethylxanthine', 'guaranine', 'theine', 'mateine']
  },
  {
    id: 'nicotine',
    name: 'Nicotine',
    commonNames: ['Tobacco', 'Vape', 'E-cigarettes', 'Pouches', 'Gum'],
    category: 'stimulants',
    class: 'Alkaloid',
    description: 'Nicotine is a potent parasympathomimetic alkaloid found in the nightshade family of plants, predominantly in tobacco. It acts as a stimulant in mammals and is one of the most addictive substances known. Nicotine stimulates nicotinic acetylcholine receptors in the brain, leading to the release of dopamine, norepinephrine, and other neurotransmitters. This results in increased alertness, improved concentration, and a sense of relaxation. Despite its stimulant properties, nicotine can also produce calming effects, particularly in stressful situations. The substance is primarily consumed through tobacco products, though nicotine replacement therapies and electronic cigarettes have become increasingly common.',
    effects: {
      positive: ['Increased alertness and concentration', 'Mild euphoria and mood elevation', 'Appetite suppression', 'Temporary stress relief and relaxation', 'Enhanced cognitive performance'],
      neutral: ['Increased heart rate and blood pressure', 'Constriction of blood vessels', 'Increased respiratory rate'],
      negative: ['High addiction potential', 'Increased risk of cardiovascular disease', 'Respiratory issues from smoke inhalation', 'Anxiety and irritability during withdrawal', 'Potential harm during pregnancy', 'Cancer risk from tobacco products']
    },
    dosage: {
      threshold: '0.5-1mg',
      light: '1-2mg',
      common: '2-4mg',
      strong: '4-8mg',
      heavy: '8mg+'
    },
    duration: {
      onset: 'Immediate (smoking/vaping)',
      comeup: '5-10 minutes',
      peak: '10-30 minutes',
      offset: '30-120 minutes',
      total: '1-2 hours'
    },
    routeData: {
      Smoking: {
        dosage: { threshold: '0.3-0.5mg', light: '0.5-1mg', common: '1-2mg', strong: '2-4mg', heavy: '4mg' },
        duration: { onset: '5-15 seconds', comeup: '30-90 seconds', peak: '5-15 minutes', offset: '15-60 minutes', total: '1-2 hours' },
        notes: 'Very rapid onset. Shorter duration. Higher addiction potential.'
      },
      Oral: {
        dosage: { threshold: '0.5-1mg', light: '1-2mg', common: '2-4mg', strong: '4-8mg', heavy: '8mg' },
        duration: { onset: 'Immediate (smoking/vaping)', comeup: '5-10 minutes', peak: '10-30 minutes', offset: '30-120 minutes', total: '1-2 hours' },
        notes: 'Most common route for this substance.'
      },
      Transdermal: {
        dosage: { threshold: '0.6-1.2mg', light: '1.2-2.4mg', common: '2.4-4.8mg', strong: '4.8-9.6mg', heavy: '9.6mg' },
        duration: { onset: '1-3 hours', comeup: '2-4 hours', peak: '30-90 minutes', offset: '90-360 minutes', total: '3-6 hours' },
        notes: 'Very slow onset. Sustained release. Used for continuous delivery.'
      }
    },
    interactions: ['MAOIs', 'Antipsychotics', 'Insulin', 'Bronchodilators', 'Caffeine'],
    harmReduction: [
      'Consider harm reduction alternatives like nicotine replacement therapy',
      'Be aware of the high addiction potential',
      'Avoid use during pregnancy',
      'Do not combine with other substances without research',
      'Monitor cardiovascular health with regular use',
      'Consider tapering off rather than abrupt cessation'
    ],
    legality: 'Legal in most countries for adults, but restricted in advertising and public use. Tobacco products are heavily regulated and taxed.',
    chemistry: {
      formula: 'C10H14N2',
      molecularWeight: '162.23 g/mol',
      class: 'Pyridine alkaloid'
    },
    history: 'Nicotine has been used for thousands of years, with indigenous peoples of the Americas using tobacco in religious and medicinal contexts. Tobacco was introduced to Europe in the 16th century and became a global commodity. The addictive properties of nicotine were scientifically documented in the 20th century.',
    routes: ['Inhalation (smoking, vaping)', 'Oral (gum, lozenges, pouches)', 'Transdermal (patches)', 'Nasal (spray)'],
    afterEffects: 'Cravings, irritability, and difficulty concentrating as effects subside. Withdrawal symptoms can last weeks.',
    riskLevel: 'high',
    aliases: ['3-(1-methyl-2-pyrrolidinyl)pyridine']
  },
  {
    id: 'cocaine',
    name: 'Cocaine',
    commonNames: ['Coke', 'Blow', 'Snow', 'White', 'Charlie'],
    category: 'stimulants',
    class: 'Tropane Alkaloid',
    description: 'Cocaine is a powerful stimulant and local anesthetic derived from the leaves of the coca plant (Erythroxylum coca), native to South America. It acts as a serotonin-norepinephrine-dopamine reuptake inhibitor (SNDRI), producing intense euphoria, increased energy, and heightened alertness. Cocaine blocks the reuptake of these neurotransmitters, leading to their accumulation in the synaptic cleft and resulting in its characteristic effects. The drug has a long history of use, both medicinally as a local anesthetic and recreationally for its stimulant properties. Cocaine is known for its high addiction potential and significant cardiovascular risks.',
    effects: {
      positive: ['Intense euphoria and sense of well-being', 'Increased energy and alertness', 'Enhanced confidence and sociability', 'Decreased appetite', 'Heightened sensory perception'],
      neutral: ['Increased heart rate and blood pressure', 'Dilated pupils', 'Elevated body temperature', 'Increased respiration rate'],
      negative: ['High addiction potential', 'Anxiety, paranoia, and panic attacks', 'Cardiovascular complications', 'Nasal damage from insufflation', 'Risk of overdose', 'Severe comedown and depression', 'Psychosis with prolonged use']
    },
    dosage: {
      threshold: '5-10mg',
      light: '10-30mg',
      common: '30-60mg',
      strong: '60-100mg',
      heavy: '100mg+'
    },
    duration: {
      onset: '1-5 minutes (insufflated)',
      comeup: '5-15 minutes',
      peak: '15-30 minutes',
      offset: '30-60 minutes',
      total: '45-90 minutes'
    },
    routeData: {
      Insufflation: {
        dosage: { threshold: '3.5-7mg', light: '7-21mg', common: '21-42mg', strong: '42-70mg', heavy: '70mg' },
        duration: { onset: '5-15 minutes', comeup: '10-30 minutes', peak: '11-23 minutes', offset: '23-45 minutes', total: '34-68 minutes' },
        notes: 'Faster onset than oral. Nasal irritation possible with repeated use.'
      },
      Smoking: {
        dosage: { threshold: '2.5-5mg', light: '5-15mg', common: '15-30mg', strong: '30-50mg', heavy: '50mg' },
        duration: { onset: '5-15 seconds', comeup: '30-90 seconds', peak: '8-15 minutes', offset: '15-30 minutes', total: '23-45 minutes' },
        notes: 'Very rapid onset. Shorter duration. Higher addiction potential.'
      },
      Intravenous: {
        dosage: { threshold: '2-4mg', light: '4-12mg', common: '12-24mg', strong: '24-40mg', heavy: '40mg' },
        duration: { onset: '10-30 seconds', comeup: '1-5 minutes', peak: '8-15 minutes', offset: '15-30 minutes', total: '23-45 minutes' },
        notes: 'Immediate onset. 100% bioavailability. Very high risk. Requires sterile technique.'
      },
      Oral: {
        dosage: { threshold: '5-10mg', light: '10-30mg', common: '30-60mg', strong: '60-100mg', heavy: '100mg' },
        duration: { onset: '1-5 minutes (insufflated)', comeup: '5-15 minutes', peak: '15-30 minutes', offset: '30-60 minutes', total: '45-90 minutes' },
        notes: 'Most common route for this substance.'
      },
      Topical: {
        dosage: { threshold: '5-10mg', light: '10-30mg', common: '30-60mg', strong: '60-100mg', heavy: '100mg' },
        duration: { onset: '1-5 minutes', comeup: '5-15 minutes', peak: '15-30 minutes', offset: '30-60 minutes', total: '45-90 minutes' },
        notes: 'Medical use for local anesthesia. Minimal systemic effects.'
      }
    },
    interactions: ['Alcohol (forms cocaethylene)', 'MAOIs', 'SSRIs', 'Other stimulants', 'Opioids'],
    harmReduction: [
      'Never use alone - have someone present who can call for help',
      'Avoid mixing with alcohol or other substances',
      'Test substances for purity and adulterants',
      'Use sterile equipment to prevent infection',
      'Stay hydrated but do not over-hydrate',
      'Be aware of signs of overdose: chest pain, seizures, severe agitation',
      'Space out use to reduce addiction risk'
    ],
    legality: 'Illegal in most countries. Schedule I/II controlled substance with severe legal penalties for possession, distribution, and manufacture.',
    chemistry: {
      formula: 'C17H21NO4',
      molecularWeight: '303.35 g/mol',
      class: 'Tropane alkaloid'
    },
    history: 'Coca leaves have been used for thousands of years by indigenous South Americans. Cocaine was first isolated in 1859 and was used medicinally and in beverages (including early Coca-Cola) until the early 20th century. Its addictive properties led to strict regulation.',
    routes: ['Insufflation (snorting)', 'Smoking (freebase/crack)', 'Intravenous', 'Oral (rare)', 'Topical (medical use)'],
    afterEffects: 'Severe comedown including depression, fatigue, anxiety, and intense cravings. Can last hours to days.',
    riskLevel: 'very-high',
    aliases: ['benzoylmethylecgonine', 'methyl benzoylecgonine']
  },
  {
    id: 'methamphetamine',
    name: 'Methamphetamine',
    commonNames: ['Meth', 'Crystal', 'Ice', 'Crank', 'Speed', 'Glass'],
    category: 'stimulants',
    class: 'Phenethylamine',
    description: 'Methamphetamine is a potent central nervous system stimulant of the phenethylamine class. It acts primarily as a releasing agent for dopamine, norepinephrine, and serotonin, producing intense euphoria, increased energy, and heightened focus. Methamphetamine is structurally similar to amphetamine but has greater lipid solubility, allowing it to cross the blood-brain barrier more rapidly and produce more intense effects. The drug has legitimate medical applications for ADHD and obesity treatment under the brand name Desoxyn, but is primarily known for its recreational use and high addiction potential. Chronic use can lead to significant neurotoxic effects and cognitive impairment.',
    effects: {
      positive: ['Intense euphoria and sense of well-being', 'Greatly increased energy and alertness', 'Enhanced focus and concentration', 'Decreased need for sleep', 'Increased confidence and sociability', 'Suppressed appetite'],
      neutral: ['Increased heart rate and blood pressure', 'Dilated pupils', 'Elevated body temperature', 'Dry mouth', 'Increased libido'],
      negative: ['Very high addiction potential', 'Severe anxiety and paranoia', 'Psychosis and hallucinations', 'Cardiovascular damage', 'Severe dental problems ("meth mouth")', 'Skin picking and sores', 'Cognitive impairment with chronic use', 'Severe depression during withdrawal', 'Weight loss and malnutrition']
    },
    dosage: {
      threshold: '5-10mg',
      light: '10-25mg',
      common: '25-50mg',
      strong: '50-100mg',
      heavy: '100mg+'
    },
    duration: {
      onset: '15-30 minutes (oral)',
      comeup: '30-60 minutes',
      peak: '2-4 hours',
      offset: '6-12 hours',
      total: '8-24 hours'
    },
    routeData: {
      Oral: {
        dosage: { threshold: '5-10mg', light: '10-25mg', common: '25-50mg', strong: '50-100mg', heavy: '100mg' },
        duration: { onset: '15-30 minutes (oral)', comeup: '30-60 minutes', peak: '2-4 hours', offset: '6-12 hours', total: '8-24 hours' },
        notes: 'Most common route for this substance.'
      },
      Insufflation: {
        dosage: { threshold: '3.5-7mg', light: '7-17.5mg', common: '17.5-35mg', strong: '35-70mg', heavy: '70mg' },
        duration: { onset: '5-15 minutes', comeup: '10-30 minutes', peak: '2-3 hours', offset: '5-9 hours', total: '6-18 hours' },
        notes: 'Faster onset than oral. Nasal irritation possible with repeated use.'
      },
      Smoking: {
        dosage: { threshold: '2.5-5mg', light: '5-12.5mg', common: '12.5-25mg', strong: '25-50mg', heavy: '50mg' },
        duration: { onset: '5-15 seconds', comeup: '30-90 seconds', peak: '1-2 hours', offset: '3-6 hours', total: '4-12 hours' },
        notes: 'Very rapid onset. Shorter duration. Higher addiction potential.'
      },
      Intravenous: {
        dosage: { threshold: '2-4mg', light: '4-10mg', common: '10-20mg', strong: '20-40mg', heavy: '40mg' },
        duration: { onset: '10-30 seconds', comeup: '1-5 minutes', peak: '1-2 hours', offset: '3-6 hours', total: '4-12 hours' },
        notes: 'Immediate onset. 100% bioavailability. Very high risk. Requires sterile technique.'
      },
      Rectal: {
        dosage: { threshold: '3.5-7mg', light: '7-17.5mg', common: '17.5-35mg', strong: '35-70mg', heavy: '70mg' },
        duration: { onset: '5-15 minutes', comeup: '15-30 minutes', peak: '2-4 hours', offset: '6-12 hours', total: '8-24 hours' },
        notes: 'Higher bioavailability than oral. Faster onset. Less first-pass metabolism.'
      }
    },
    interactions: ['MAOIs', 'SSRIs', 'Other stimulants', 'Alcohol', 'Opioids', 'Antipsychotics'],
    harmReduction: [
      'Never use alone - have someone present who can call for help',
      'Avoid mixing with other substances',
      'Stay hydrated and eat regularly despite suppressed appetite',
      'Practice good dental hygiene',
      'Test substances for purity',
      'Use sterile equipment to prevent infection',
      'Limit frequency of use and duration of binges',
      'Be aware of signs of psychosis and seek help if needed'
    ],
    legality: 'Illegal in most countries. Schedule II controlled substance in the US (limited medical use). Severe legal penalties for possession and distribution.',
    chemistry: {
      formula: 'C10H15N',
      molecularWeight: '149.23 g/mol',
      class: 'Phenethylamine derivative'
    },
    history: 'Methamphetamine was first synthesized in 1893. It was used by both Axis and Allied forces during World War II for its stimulant effects. Post-war, it became available commercially and was used for various medical conditions before its addictive properties led to strict regulation.',
    routes: ['Oral', 'Insufflation', 'Smoking', 'Intravenous', 'Rectal'],
    afterEffects: 'Severe crash including depression, extreme fatigue, anxiety, and intense cravings. Post-acute withdrawal can last months.',
    riskLevel: 'very-high',
    aliases: ['N-methylamphetamine', 'desoxyephedrine', 'meth']
  }
];
