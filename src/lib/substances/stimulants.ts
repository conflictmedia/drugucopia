// Stimulants Substances

import type { Substance } from '../types';

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
          dosage: {
              threshold: '10-20mg',
              light: '20-50mg',
              common: '50-150mg',
              strong: '150-300mg',
              heavy: '300mg'
          },
          duration: {
              onset: '10-30 minutes',
              comeup: '30-60 minutes',
              peak: '1-2 hours',
              offset: '3-5 hours',
              total: '4-6 hours'
          },
          notes: 'Most common route for this substance.'
      },
      Sublingual: {
          dosage: {
              threshold: '8.5-17mg',
              light: '17-42.5mg',
              common: '42.5-127.5mg',
              strong: '127.5-255mg',
              heavy: '255mg'
          },
          duration: {
              onset: '10-20 minutes',
              comeup: '20-40 minutes',
              peak: '1-2 hours',
              offset: '3-5 hours',
              total: '4-6 hours'
          },
          notes: 'Faster onset than oral. Good bioavailability. Held under tongue.'
      },
      Rectal: {
          dosage: {
              threshold: '7-14mg',
              light: '14-35mg',
              common: '35-105mg',
              strong: '105-210mg',
              heavy: '210mg'
          },
          duration: {
              onset: '5-15 minutes',
              comeup: '15-30 minutes',
              peak: '1-2 hours',
              offset: '3-5 hours',
              total: '4-6 hours'
          },
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
          dosage: {
              threshold: '0.3-0.5mg',
              light: '0.5-1mg',
              common: '1-2mg',
              strong: '2-4mg',
              heavy: '4mg'
          },
          duration: {
              onset: '5-15 seconds',
              comeup: '30-90 seconds',
              peak: '5-15 minutes',
              offset: '15-60 minutes',
              total: '1-2 hours'
          },
          notes: 'Very rapid onset. Shorter duration. Higher addiction potential.'
      },
      Oral: {
          dosage: {
              threshold: '0.5-1mg',
              light: '1-2mg',
              common: '2-4mg',
              strong: '4-8mg',
              heavy: '8mg'
          },
          duration: {
              onset: 'Immediate (smoking/vaping)',
              comeup: '5-10 minutes',
              peak: '10-30 minutes',
              offset: '30-120 minutes',
              total: '1-2 hours'
          },
          notes: 'Most common route for this substance.'
      },
      Transdermal: {
          dosage: {
              threshold: '0.6-1.2mg',
              light: '1.2-2.4mg',
              common: '2.4-4.8mg',
              strong: '4.8-9.6mg',
              heavy: '9.6mg'
          },
          duration: {
              onset: '1-3 hours',
              comeup: '2-4 hours',
              peak: '30-90 minutes',
              offset: '90-360 minutes',
              total: '3-6 hours'
          },
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
          dosage: {
              threshold: '3.5-7mg',
              light: '7-21mg',
              common: '21-42mg',
              strong: '42-70mg',
              heavy: '70mg'
          },
          duration: {
              onset: '5-15 minutes',
              comeup: '10-30 minutes',
              peak: '11-23 minutes',
              offset: '23-45 minutes',
              total: '34-68 minutes'
          },
          notes: 'Faster onset than oral. Nasal irritation possible with repeated use.'
      },
      Smoking: {
          dosage: {
              threshold: '2.5-5mg',
              light: '5-15mg',
              common: '15-30mg',
              strong: '30-50mg',
              heavy: '50mg'
          },
          duration: {
              onset: '5-15 seconds',
              comeup: '30-90 seconds',
              peak: '8-15 minutes',
              offset: '15-30 minutes',
              total: '23-45 minutes'
          },
          notes: 'Very rapid onset. Shorter duration. Higher addiction potential.'
      },
      Intravenous: {
          dosage: {
              threshold: '2-4mg',
              light: '4-12mg',
              common: '12-24mg',
              strong: '24-40mg',
              heavy: '40mg'
          },
          duration: {
              onset: '10-30 seconds',
              comeup: '1-5 minutes',
              peak: '8-15 minutes',
              offset: '15-30 minutes',
              total: '23-45 minutes'
          },
          notes: 'Immediate onset. 100% bioavailability. Very high risk. Requires sterile technique.'
      },
      Oral: {
          dosage: {
              threshold: '5-10mg',
              light: '10-30mg',
              common: '30-60mg',
              strong: '60-100mg',
              heavy: '100mg'
          },
          duration: {
              onset: '1-5 minutes (insufflated)',
              comeup: '5-15 minutes',
              peak: '15-30 minutes',
              offset: '30-60 minutes',
              total: '45-90 minutes'
          },
          notes: 'Most common route for this substance.'
      },
      Topical: {
          dosage: {
              threshold: '5-10mg',
              light: '10-30mg',
              common: '30-60mg',
              strong: '60-100mg',
              heavy: '100mg'
          },
          duration: {
              onset: '1-5 minutes',
              comeup: '5-15 minutes',
              peak: '15-30 minutes',
              offset: '30-60 minutes',
              total: '45-90 minutes'
          },
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
          dosage: {
              threshold: '5-10mg',
              light: '10-25mg',
              common: '25-50mg',
              strong: '50-100mg',
              heavy: '100mg'
          },
          duration: {
              onset: '15-30 minutes (oral)',
              comeup: '30-60 minutes',
              peak: '2-4 hours',
              offset: '6-12 hours',
              total: '8-24 hours'
          },
          notes: 'Most common route for this substance.'
      },
      Insufflation: {
          dosage: {
              threshold: '3.5-7mg',
              light: '7-17.5mg',
              common: '17.5-35mg',
              strong: '35-70mg',
              heavy: '70mg'
          },
          duration: {
              onset: '5-15 minutes',
              comeup: '10-30 minutes',
              peak: '2-3 hours',
              offset: '5-9 hours',
              total: '6-18 hours'
          },
          notes: 'Faster onset than oral. Nasal irritation possible with repeated use.'
      },
      Smoking: {
          dosage: {
              threshold: '2.5-5mg',
              light: '5-12.5mg',
              common: '12.5-25mg',
              strong: '25-50mg',
              heavy: '50mg'
          },
          duration: {
              onset: '5-15 seconds',
              comeup: '30-90 seconds',
              peak: '1-2 hours',
              offset: '3-6 hours',
              total: '4-12 hours'
          },
          notes: 'Very rapid onset. Shorter duration. Higher addiction potential.'
      },
      Intravenous: {
          dosage: {
              threshold: '2-4mg',
              light: '4-10mg',
              common: '10-20mg',
              strong: '20-40mg',
              heavy: '40mg'
          },
          duration: {
              onset: '10-30 seconds',
              comeup: '1-5 minutes',
              peak: '1-2 hours',
              offset: '3-6 hours',
              total: '4-12 hours'
          },
          notes: 'Immediate onset. 100% bioavailability. Very high risk. Requires sterile technique.'
      },
      Rectal: {
          dosage: {
              threshold: '3.5-7mg',
              light: '7-17.5mg',
              common: '17.5-35mg',
              strong: '35-70mg',
              heavy: '70mg'
          },
          duration: {
              onset: '5-15 minutes',
              comeup: '15-30 minutes',
              peak: '2-4 hours',
              offset: '6-12 hours',
              total: '8-24 hours'
          },
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
    },
    
    // Hallucinogens,
  {
      id: '3-mmc',
      name: '3-MMC',
      commonNames: ['3-Methylmethcathinone', 'Mephedrone Alternative', '3-M'],
      category: 'stimulants',
      class: 'Cathinone',
      description: '3-MMC (3-methylmethcathinone) is a synthetic stimulant of the cathinone class, structurally similar to mephedrone (4-MMC). It produces stimulating and mildly empathogenic effects, often described as a less intense version of mephedrone. 3-MMC acts as a releasing agent for serotonin, dopamine, and norepinephrine. It gained popularity after mephedrone was banned, becoming one of the most commonly used "legal highs" in Europe before being scheduled in many countries.',
      effects: {
        positive: ['Increased energy and alertness', 'Mild euphoria', 'Enhanced sociability', 'Increased empathy', 'Enhanced appreciation of music'],
        neutral: ['Increased heart rate and blood pressure', 'Dilated pupils', 'Suppressed appetite', 'Increased body temperature'],
        negative: ['Anxiety and paranoia', 'Insomnia', 'Dehydration', 'Jaw clenching', 'Comedown symptoms', 'Potential for compulsive redosing', 'Cardiovascular strain']
      },
      dosage: {
        threshold: '30-50mg',
        light: '50-100mg',
        common: '100-200mg',
        strong: '200-300mg',
        heavy: '300mg+'
      },
      duration: {
        onset: '15-30 minutes',
        comeup: '30-45 minutes',
        peak: '1-2 hours',
        offset: '2-3 hours',
        total: '3-5 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '30-50mg',
              light: '50-100mg',
              common: '100-200mg',
              strong: '200-300mg',
              heavy: '300mg'
          },
          duration: {
              onset: '15-30 minutes',
              comeup: '30-45 minutes',
              peak: '1-2 hours',
              offset: '2-3 hours',
              total: '3-5 hours'
          },
          notes: 'Most common route for this substance.'
      },
      Insufflation: {
          dosage: {
              threshold: '21-35mg',
              light: '35-70mg',
              common: '70-140mg',
              strong: '140-210mg',
              heavy: '210mg'
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
      Rectal: {
          dosage: {
              threshold: '21-35mg',
              light: '35-70mg',
              common: '70-140mg',
              strong: '140-210mg',
              heavy: '210mg'
          },
          duration: {
              onset: '5-15 minutes',
              comeup: '15-30 minutes',
              peak: '1-2 hours',
              offset: '2-3 hours',
              total: '3-5 hours'
          },
          notes: 'Higher bioavailability than oral. Faster onset. Less first-pass metabolism.'
      }
  },
      interactions: ['MAOIs', 'SSRIs', 'Other stimulants', 'Alcohol', 'Tramadol'],
      harmReduction: [
        'Start with low doses to assess tolerance',
        'Stay hydrated but do not over-hydrate',
        'Avoid redosing to prevent binge patterns',
        'Do not combine with other stimulants',
        'Test substances for purity',
        'Allow time between sessions for recovery',
        'Avoid if you have heart conditions'
      ],
      legality: 'Controlled in many countries. Illegal in the UK, EU, and many other jurisdictions.',
      chemistry: {
        formula: 'C11H15NO',
        molecularWeight: '177.24 g/mol',
        class: 'Cathinone'
      },
      history: '3-MMC gained popularity after mephedrone was banned in 2010. It became one of the most prevalent research chemicals in Europe until widespread scheduling.',
      routes: ['Oral', 'Insufflation', 'Rectal'],
      afterEffects: 'Comedown lasting hours to days. Depression and fatigue possible.',
      riskLevel: 'high',
      aliases: ['3-methylmethcathinone']
    },
  {
      id: '4-mmc',
      name: '4-MMC (Mephedrone)',
      commonNames: ['Mephedrone', 'M-Cat', 'Meow Meow', 'Drone', 'Miaow'],
      category: 'stimulants',
      class: 'Cathinone',
      description: '4-MMC (mephedrone, 4-methylmethcathinone) is a synthetic stimulant of the cathinone class, chemically similar to MDMA and amphetamines. It produces powerful stimulant and empathogenic effects, often described as a cross between MDMA and cocaine. Mephedrone acts as a releasing agent for serotonin, dopamine, and norepinephrine. It became extremely popular in the late 2000s as a "legal high" before being banned across most jurisdictions. Known for its intense euphoria but also significant addiction potential.',
      effects: {
        positive: ['Intense euphoria', 'Increased energy and alertness', 'Strong empathy and sociability', 'Enhanced appreciation of music', 'Increased confidence'],
        neutral: ['Increased heart rate and blood pressure', 'Dilated pupils', 'Suppressed appetite', 'Increased body temperature', 'Jaw clenching'],
        negative: ['High addiction potential', 'Severe comedown', 'Anxiety and paranoia', 'Cardiovascular strain', 'Insomnia', 'Nose damage from insufflation', 'Potential for compulsive redosing']
      },
      dosage: {
        threshold: '25-50mg',
        light: '50-100mg',
        common: '100-200mg',
        strong: '200-300mg',
        heavy: '300mg+'
      },
      duration: {
        onset: '10-20 minutes (insufflated)',
        comeup: '15-30 minutes',
        peak: '1-2 hours',
        offset: '1-2 hours',
        total: '2-4 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '25-50mg',
              light: '50-100mg',
              common: '100-200mg',
              strong: '200-300mg',
              heavy: '300mg'
          },
          duration: {
              onset: '10-20 minutes (insufflated)',
              comeup: '15-30 minutes',
              peak: '1-2 hours',
              offset: '1-2 hours',
              total: '2-4 hours'
          },
          notes: 'Most common route for this substance.'
      },
      Insufflation: {
          dosage: {
              threshold: '17.5-35mg',
              light: '35-70mg',
              common: '70-140mg',
              strong: '140-210mg',
              heavy: '210mg'
          },
          duration: {
              onset: '5-15 minutes',
              comeup: '10-30 minutes',
              peak: '1-2 hours',
              offset: '1-2 hours',
              total: '2-3 hours'
          },
          notes: 'Faster onset than oral. Nasal irritation possible with repeated use.'
      },
      Rectal: {
          dosage: {
              threshold: '17.5-35mg',
              light: '35-70mg',
              common: '70-140mg',
              strong: '140-210mg',
              heavy: '210mg'
          },
          duration: {
              onset: '5-15 minutes',
              comeup: '15-30 minutes',
              peak: '1-2 hours',
              offset: '1-2 hours',
              total: '2-4 hours'
          },
          notes: 'Higher bioavailability than oral. Faster onset. Less first-pass metabolism.'
      }
  },
      interactions: ['MAOIs', 'SSRIs', 'Other stimulants', 'Alcohol', 'Tramadol', 'Cocaine'],
      harmReduction: [
        'Never use alone - have someone present',
        'Avoid redosing to prevent addiction patterns',
        'Stay hydrated but do not over-hydrate',
        'Test substances for purity',
        'Do not combine with other stimulants',
        'Avoid insufflation to protect nasal tissue',
        'Wait between sessions to reduce tolerance'
      ],
      legality: 'Illegal in most countries. Schedule I controlled substance in the US. Class B drug in the UK.',
      chemistry: {
        formula: 'C11H15NO',
        molecularWeight: '177.24 g/mol',
        class: 'Cathinone'
      },
      history: 'Mephedrone was first synthesized in 1929 but remained obscure until reappearing in the 2000s. It became one of the most popular "legal highs" before being banned in the UK in 2010 and subsequently worldwide.',
      routes: ['Oral', 'Insufflation', 'Rectal'],
      afterEffects: 'Severe comedown lasting 1-3 days. Depression, fatigue, and cravings common.',
      riskLevel: 'very-high',
      aliases: ['4-methylmethcathinone', 'mephedrone']
    },

    // Depressant Research Chemicals,
  {
      id: 'amphetamine',
      name: 'Amphetamine',
      commonNames: ['Adderall', 'Speed', 'Dexedrine', 'Uppers', 'Bennies'],
      category: 'stimulants',
      class: 'Phenethylamine',
      description: 'Amphetamine is a central nervous system stimulant that increases the activity of dopamine, norepinephrine, and serotonin in the brain. It is used medically for ADHD and narcolepsy. Amphetamine produces increased energy, focus, and euphoria, with significant potential for abuse and dependence.',
      effects: {
        positive: ['Increased alertness and energy', 'Enhanced focus and concentration', 'Euphoria', 'Decreased appetite', 'Increased motivation'],
        neutral: ['Increased heart rate and blood pressure', 'Dilated pupils', 'Dry mouth', 'Sweating', 'Insomnia'],
        negative: ['Anxiety and paranoia', 'Addiction potential', 'Cardiovascular stress', 'Weight loss', 'Psychosis with heavy use', 'Depression during withdrawal', 'Sleep disruption']
      },
      dosage: {
        threshold: '5-10mg',
        light: '10-25mg',
        common: '25-50mg',
        strong: '50-100mg',
        heavy: '100mg+'
      },
      duration: {
        onset: '20-45 minutes (oral)',
        comeup: '30-60 minutes',
        peak: '2-4 hours',
        offset: '2-4 hours',
        total: '4-8 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '5-10mg',
              light: '10-25mg',
              common: '25-50mg',
              strong: '50-100mg',
              heavy: '100mg+'
          },
          duration: {
              onset: '20-45 minutes',
              comeup: '30-60 minutes',
              peak: '2-4 hours',
              offset: '2-4 hours',
              total: '4-8 hours'
          },
          notes: 'Medical use for ADHD. Mixed amphetamine salts (Adderall) or dextroamphetamine. Extended-release forms last 8-12 hours.'
      },
      Insufflation: {
          dosage: {
              threshold: '3-8mg',
              light: '8-20mg',
              common: '20-40mg',
              strong: '40-70mg',
              heavy: '70mg+'
          },
          duration: {
              onset: '5-15 minutes',
              comeup: '15-30 minutes',
              peak: '1-2 hours',
              offset: '2-3 hours',
              total: '3-5 hours'
          },
          notes: 'Faster onset. Shorter duration. Higher addiction potential. Nasal irritation.'
      },
      Smoking: {
          dosage: {
              threshold: '3-7mg',
              light: '7-15mg',
              common: '15-30mg',
              strong: '30-50mg',
              heavy: '50mg+'
          },
          duration: {
              onset: '5-15 seconds',
              comeup: '30-90 seconds',
              peak: '30-90 minutes',
              offset: '1-2 hours',
              total: '2-4 hours'
          },
          notes: 'Very rapid onset. Highest addiction potential. Often methamphetamine rather than amphetamine.'
      },
      Intravenous: {
          dosage: {
              threshold: '2-5mg',
              light: '5-15mg',
              common: '15-30mg',
              strong: '30-50mg',
              heavy: '50mg+'
          },
          duration: {
              onset: '10-30 seconds',
              comeup: '30-90 seconds',
              peak: '30-90 minutes',
              offset: '1-2 hours',
              total: '2-4 hours'
          },
          notes: 'Very high addiction potential. Immediate onset. High overdose risk.'
      }
  },
      interactions: ['MAOIs (dangerous)', 'SSRIs', 'Other stimulants', 'Alcohol', 'Benzodiazepines', 'Antipsychotics'],
      harmReduction: [
        'Stay hydrated but do not over-hydrate',
        'Avoid use if you have heart conditions',
        'Do not mix with other stimulants or alcohol',
        'Be aware of addiction potential',
        'Get adequate sleep and nutrition',
        'Avoid daily use to prevent tolerance and dependence'
      ],
      legality: 'Schedule II controlled substance in the US. Prescription only for ADHD and narcolepsy.',
      chemistry: {
        formula: 'C9H13N',
        molecularWeight: '135.21 g/mol',
        class: 'Phenethylamine'
      },
      history: 'Amphetamine was first synthesized in 1887. It was used militarily in WWII and became widely prescribed in the 20th century before restrictions were implemented.',
      routes: ['Oral', 'Insufflation', 'Smoking', 'Intravenous'],
      afterEffects: 'Comedown can include depression, fatigue, and cravings. Sleep disruption common.',
      riskLevel: 'moderate',
      aliases: ['alpha-methylphenethylamine', 'racemic amphetamine']
    },
  {
      id: 'dextroamphetamine',
      name: 'Dextroamphetamine',
      commonNames: ['Dexedrine', 'Dexies', 'Dextrostat', 'Dex'],
      category: 'stimulants',
      class: 'Phenethylamine',
      description: 'Dextroamphetamine is the dextrorotatory isomer of amphetamine. It is more potent as a CNS stimulant than levoamphetamine and is used medically for ADHD and narcolepsy. Dextroamphetamine produces stronger central effects with fewer peripheral side effects than racemic amphetamine.',
      effects: {
        positive: ['Increased focus and concentration', 'Enhanced energy', 'Euphoria', 'Alertness', 'Decreased appetite'],
        neutral: ['Increased heart rate', 'Dry mouth', 'Insomnia', 'Sweating'],
        negative: ['Addiction potential', 'Anxiety', 'Cardiovascular stress', 'Withdrawal symptoms', 'Psychosis at high doses']
      },
      dosage: {
        threshold: '5-10mg',
        light: '10-20mg',
        common: '20-40mg',
        strong: '40-60mg',
        heavy: '60mg+'
      },
      duration: {
        onset: '20-45 minutes (oral)',
        comeup: '30-60 minutes',
        peak: '2-4 hours',
        offset: '2-4 hours',
        total: '4-8 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '5-10mg',
              light: '10-20mg',
              common: '20-40mg',
              strong: '40-60mg',
              heavy: '60mg'
          },
          duration: {
              onset: '20-45 minutes (oral)',
              comeup: '30-60 minutes',
              peak: '2-4 hours',
              offset: '2-4 hours',
              total: '4-8 hours'
          },
          notes: 'Most common route for this substance.'
      },
      Insufflation: {
          dosage: {
              threshold: '3.5-7mg',
              light: '7-14mg',
              common: '14-28mg',
              strong: '28-42mg',
              heavy: '42mg'
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
      interactions: ['MAOIs', 'SSRIs', 'Other stimulants', 'Alcohol', 'Antipsychotics'],
      harmReduction: [
        'More potent than racemic amphetamine',
        'Stay hydrated',
        'Avoid use with heart conditions',
        'Do not mix with other stimulants',
        'Be aware of addiction potential'
      ],
      legality: 'Schedule II controlled substance in the US. Prescription only.',
      chemistry: {
        formula: 'C9H13N',
        molecularWeight: '135.21 g/mol',
        class: 'Phenethylamine'
      },
      history: 'Dextroamphetamine was developed in the early 20th century and has been used medically since the 1930s.',
      routes: ['Oral', 'Insufflation'],
      afterEffects: 'Comedown with fatigue and possible depression. Sleep disruption.',
      riskLevel: 'moderate',
      aliases: ['(S)-amphetamine', 'd-amphetamine']
    },
  {
      id: 'lisdexamfetamine',
      name: 'Lisdexamfetamine',
      commonNames: ['Vyvanse', 'Lisdex', 'LDX'],
      category: 'stimulants',
      class: 'Prodrug',
      description: 'Lisdexamfetamine is a prodrug of dextroamphetamine, attached to the amino acid lysine. It must be metabolized in the body to become active, which provides a delayed onset and longer duration. This design reduces abuse potential compared to immediate-release amphetamines.',
      effects: {
        positive: ['Improved focus and concentration', 'Long-lasting energy', 'Lower abuse potential than other amphetamines', 'Euphoria'],
        neutral: ['Long duration', 'Gradual onset', 'Insomnia if taken late'],
        negative: ['Addiction potential', 'Appetite suppression', 'Cardiovascular effects', 'Anxiety']
      },
      dosage: {
        threshold: '10-20mg',
        light: '20-40mg',
        common: '40-70mg',
        strong: '70-100mg',
        heavy: '100mg+'
      },
      duration: {
        onset: '45-90 minutes',
        comeup: '1-2 hours',
        peak: '3-5 hours',
        offset: '3-5 hours',
        total: '10-14 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '10-20mg',
              light: '20-40mg',
              common: '40-70mg',
              strong: '70-100mg',
              heavy: '100mg'
          },
          duration: {
              onset: '45-90 minutes',
              comeup: '1-2 hours',
              peak: '3-5 hours',
              offset: '3-5 hours',
              total: '10-14 hours'
          },
          notes: 'Most common route for this substance.'
      }
  },
      interactions: ['MAOIs', 'SSRIs', 'Other stimulants', 'Alcohol', 'Antacids (affect absorption)'],
      harmReduction: [
        'Prodrug - takes longer to kick in, be patient',
        'Do not snort - requires metabolism to work',
        'Long duration - plan accordingly',
        'Less abuse potential but still addictive',
        'Do not take late in day to avoid sleep issues'
      ],
      legality: 'Schedule II controlled substance in the US. Prescription only.',
      chemistry: {
        formula: 'C15H25N3O',
        molecularWeight: '263.38 g/mol',
        class: 'Prodrug'
      },
      history: 'Lisdexamfetamine was developed to reduce abuse potential and was approved in the US in 2007.',
      routes: ['Oral'],
      afterEffects: 'Gradual comedown. Less crash than immediate-release amphetamines.',
      riskLevel: 'moderate',
      aliases: ['L-lysine-dextroamphetamine']
    },
  {
      id: 'methylphenidate',
      name: 'Methylphenidate',
      commonNames: ['Ritalin', 'Concerta', 'Focalin', 'Speed', 'Vitamin R'],
      category: 'stimulants',
      class: 'Piperidine',
      description: 'Methylphenidate is a CNS stimulant used primarily for ADHD. It works by blocking the reuptake of dopamine and norepinephrine. Methylphenidate is structurally different from amphetamine but produces similar effects. It has significant abuse potential.',
      effects: {
        positive: ['Improved focus and attention', 'Increased energy', 'Euphoria', 'Wakefulness', 'Decreased appetite'],
        neutral: ['Increased heart rate and blood pressure', 'Dry mouth', 'Insomnia', 'Sweating'],
        negative: ['Addiction potential', 'Anxiety and nervousness', 'Cardiovascular effects', 'Psychosis at high doses', 'Withdrawal symptoms']
      },
      dosage: {
        threshold: '5-10mg',
        light: '10-20mg',
        common: '20-40mg',
        strong: '40-60mg',
        heavy: '60mg+'
      },
      duration: {
        onset: '15-30 minutes (IR)',
        comeup: '30-60 minutes',
        peak: '1-3 hours',
        offset: '2-3 hours',
        total: '3-5 hours (IR)'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '5-10mg',
              light: '10-20mg',
              common: '20-40mg',
              strong: '40-60mg',
              heavy: '60mg+'
          },
          duration: {
              onset: '15-30 minutes',
              comeup: '30-60 minutes',
              peak: '1-3 hours',
              offset: '2-3 hours',
              total: '3-5 hours'
          },
          notes: 'IR formulation. Extended-release (Concerta, Ritalin LA) lasts 8-12 hours. Different release profiles affect duration.'
      },
      Insufflation: {
          dosage: {
              threshold: '3-8mg',
              light: '8-15mg',
              common: '15-30mg',
              strong: '30-45mg',
              heavy: '45mg+'
          },
          duration: {
              onset: '5-15 minutes',
              comeup: '15-30 minutes',
              peak: '45-90 minutes',
              offset: '1-2 hours',
              total: '2-4 hours'
          },
          notes: 'Faster onset. Shorter duration. Nasal irritation. Higher abuse potential.'
      },
      Intravenous: {
          dosage: {
              threshold: '2-5mg',
              light: '5-10mg',
              common: '10-20mg',
              strong: '20-35mg',
              heavy: '35mg+'
          },
          duration: {
              onset: '10-30 seconds',
              comeup: '30-90 seconds',
              peak: '15-30 minutes',
              offset: '30-60 minutes',
              total: '1-2 hours'
          },
          notes: 'Very high addiction potential. Insoluble fillers cause vascular damage. Not recommended.'
      }
  },
      interactions: ['MAOIs (dangerous)', 'SSRIs', 'Other stimulants', 'Alcohol', 'Antipsychotics', 'Anticonvulsants'],
      harmReduction: [
        'Stay hydrated',
        'Avoid use with heart conditions',
        'Do not crush extended-release formulations',
        'Be aware of addiction potential',
        'Do not mix with other stimulants',
        'Take early in day to avoid sleep disruption'
      ],
      legality: 'Schedule II controlled substance in the US. Prescription only.',
      chemistry: {
        formula: 'C14H19NO2',
        molecularWeight: '233.31 g/mol',
        class: 'Piperidine derivative'
      },
      history: 'Methylphenidate was first synthesized in 1944 and approved for medical use in the US in 1955. It became widely used for ADHD starting in the 1960s.',
      routes: ['Oral', 'Insufflation', 'Intravenous'],
      afterEffects: 'Comedown can include fatigue, depression, and irritability.',
      riskLevel: 'moderate',
      aliases: ['methyl 2-phenyl-2-(piperidin-2-yl)acetate']
    },
  {
      id: 'dexmethylphenidate',
      name: 'Dexmethylphenidate',
      commonNames: ['Focalin', 'Focalin XR', 'd-MPH'],
      category: 'stimulants',
      class: 'Piperidine',
      description: 'Dexmethylphenidate is the dextrorotatory isomer of methylphenidate. It is the pharmacologically active isomer and is approximately twice as potent as racemic methylphenidate. It is used for ADHD treatment.',
      effects: {
        positive: ['Improved focus', 'Increased energy', 'More potent than racemic MPH', 'Euphoria'],
        neutral: ['Increased heart rate', 'Insomnia', 'Dry mouth'],
        negative: ['Addiction potential', 'Anxiety', 'Cardiovascular effects', 'Withdrawal']
      },
      dosage: {
        threshold: '2.5-5mg',
        light: '5-10mg',
        common: '10-20mg',
        strong: '20-30mg',
        heavy: '30mg+'
      },
      duration: {
        onset: '15-30 minutes (IR)',
        comeup: '30-60 minutes',
        peak: '1-3 hours',
        offset: '2-3 hours',
        total: '3-5 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '2.5-5mg',
              light: '5-10mg',
              common: '10-20mg',
              strong: '20-30mg',
              heavy: '30mg'
          },
          duration: {
              onset: '15-30 minutes (IR)',
              comeup: '30-60 minutes',
              peak: '1-3 hours',
              offset: '2-3 hours',
              total: '3-5 hours'
          },
          notes: 'Most common route for this substance.'
      }
  },
      interactions: ['MAOIs', 'SSRIs', 'Other stimulants', 'Alcohol'],
      harmReduction: [
        'Twice as potent as regular methylphenidate',
        'Use lower doses',
        'Same precautions as methylphenidate',
        'Be aware of addiction potential'
      ],
      legality: 'Schedule II controlled substance in the US. Prescription only.',
      chemistry: {
        formula: 'C14H19NO2',
        molecularWeight: '233.31 g/mol',
        class: 'Piperidine derivative'
      },
      history: 'Dexmethylphenidate was developed to provide a more targeted treatment with fewer side effects. Approved in the US in 2001.',
      routes: ['Oral'],
      afterEffects: 'Similar to methylphenidate but potentially smoother.',
      riskLevel: 'moderate',
      aliases: ['(R)-methylphenidate', 'd-threo-methylphenidate']
    },
  {
      id: 'modafinil',
      name: 'Modafinil',
      commonNames: ['Provigil', 'Moda', 'Modalert', 'Smart Drug'],
      category: 'stimulants',
      class: 'Eugeroic',
      description: 'Modafinil is a wakefulness-promoting agent used for narcolepsy, shift work sleep disorder, and sleep apnea. It has a unique mechanism involving orexin/hypocretin systems and weak dopamine reuptake inhibition. Modafinil is popular off-label as a cognitive enhancer.',
      effects: {
        positive: ['Wakefulness', 'Improved focus', 'Cognitive enhancement', 'Mood elevation', 'No significant crash'],
        neutral: ['Mild stimulation', 'Decreased appetite', 'Headache'],
        negative: ['Insomnia if taken late', 'Anxiety', 'Skin reactions (rare but serious)', 'Dependency potential (low)']
      },
      dosage: {
        threshold: '50-100mg',
        light: '100-200mg',
        common: '200-400mg',
        strong: '400-600mg',
        heavy: '600mg+'
      },
      duration: {
        onset: '30-60 minutes',
        comeup: '1-2 hours',
        peak: '2-4 hours',
        offset: '4-8 hours',
        total: '12-15 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '50-100mg',
              light: '100-200mg',
              common: '200-400mg',
              strong: '400-600mg',
              heavy: '600mg+'
          },
          duration: {
              onset: '30-60 minutes',
              comeup: '1-2 hours',
              peak: '2-4 hours',
              offset: '4-8 hours',
              total: '12-15 hours'
          },
          notes: 'Wakefulness-promoting agent. Very long half-life (12-15 hours). Take early in day. Food delays but does not reduce absorption.'
      }
  },
      interactions: ['Hormonal contraceptives (reduced effectiveness)', 'CYP2C19 substrates', 'CYP3A4 inducers', 'Alcohol'],
      harmReduction: [
        'Take early in morning - long half-life affects sleep',
        'Stay hydrated',
        'Can reduce effectiveness of birth control',
        'Less abuse potential than traditional stimulants',
        'Watch for skin rashes - seek medical attention if severe'
      ],
      legality: 'Prescription only. Schedule IV controlled substance in the US.',
      chemistry: {
        formula: 'C15H15NO2S',
        molecularWeight: '273.35 g/mol',
        class: 'Sulfinylacetamide'
      },
      history: 'Modafinil was developed in France in the 1970s and approved in the US in 1998. It has gained popularity as a "smart drug" for cognitive enhancement.',
      routes: ['Oral'],
      afterEffects: 'Possible insomnia if taken late. Generally no significant crash.',
      riskLevel: 'low',
      aliases: ['2-[(diphenylmethyl)sulfinyl]acetamide']
    },
  {
      id: 'armodafinil',
      name: 'Armodafinil',
      commonNames: ['Nuvigil', 'Armoda', 'R-modafinil'],
      category: 'stimulants',
      class: 'Eugeroic',
      description: 'Armodafinil is the R-enantiomer of modafinil, with a longer half-life than the racemic mixture. It provides more sustained wakefulness and is used for the same conditions as modafinil.',
      effects: {
        positive: ['Long-lasting wakefulness', 'Improved focus', 'Cognitive enhancement', 'More sustained effect than modafinil'],
        neutral: ['Mild stimulation', 'Decreased appetite', 'Headache'],
        negative: ['Insomnia if taken late', 'Anxiety', 'Longer duration can affect sleep more']
      },
      dosage: {
        threshold: '50-75mg',
        light: '75-150mg',
        common: '150-250mg',
        strong: '250-350mg',
        heavy: '350mg+'
      },
      duration: {
        onset: '30-60 minutes',
        comeup: '1-2 hours',
        peak: '2-4 hours',
        offset: '6-10 hours',
        total: '15-20 hours'
      },
      interactions: ['Hormonal contraceptives', 'CYP2C19 substrates', 'CYP3A4 inducers', 'Alcohol'],
      harmReduction: [
        'Longer lasting than modafinil - take earlier',
        'Can affect sleep more than modafinil',
        'Same precautions as modafinil',
        'Use lower doses than modafinil'
      ],
      legality: 'Prescription only. Schedule IV controlled substance in the US.',
      chemistry: {
        formula: 'C15H15NO2S',
        molecularWeight: '273.35 g/mol',
        class: 'Sulfinylacetamide'
      },
      history: 'Armodafinil was approved in the US in 2007 as an improvement over modafinil with longer duration.',
      routes: ['Oral'],
      afterEffects: 'Can affect sleep significantly due to long half-life.',
      riskLevel: 'low',
      aliases: ['(R)-modafinil']
    },
  {
      id: 'adrafinil',
      name: 'Adrafinil',
      commonNames: ['Olmifon', 'Adra'],
      category: 'stimulants',
      class: 'Eugeroic',
      description: 'Adrafinil is a prodrug of modafinil, converted in the liver to the active compound. It was developed in France and is available without prescription in some countries. Adrafinil has similar effects to modafinil but requires higher doses and puts more stress on the liver.',
      effects: {
        positive: ['Wakefulness', 'Improved focus', 'Cognitive enhancement', 'Alertness'],
        neutral: ['Delayed onset (requires conversion)', 'Mild stimulation', 'Decreased appetite'],
        negative: ['Liver strain with regular use', 'Less potent than modafinil', 'Takes longer to work', 'Insomnia']
      },
      dosage: {
        threshold: '150-300mg',
        light: '300-600mg',
        common: '600-1200mg',
        strong: '1200-1800mg',
        heavy: '1800mg+'
      },
      duration: {
        onset: '1-2 hours',
        comeup: '2-3 hours',
        peak: '3-5 hours',
        offset: '4-8 hours',
        total: '12-16 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '150-300mg',
              light: '300-600mg',
              common: '600-1200mg',
              strong: '1200-1800mg',
              heavy: '1800mg'
          },
          duration: {
              onset: '1-2 hours',
              comeup: '2-3 hours',
              peak: '3-5 hours',
              offset: '4-8 hours',
              total: '12-16 hours'
          },
          notes: 'Most common route for this substance.'
      }
  },
      interactions: ['Liver enzyme inducers/inhibitors', 'Blood thinners', 'Alcohol'],
      harmReduction: [
        'Requires conversion by liver - takes longer to work',
        'Higher doses needed than modafinil',
        'Liver monitoring recommended with regular use',
        'Do not use daily for extended periods',
        'Take early in day due to long duration'
      ],
      legality: 'Uncontrolled in US. Prescription only in some countries. Not FDA approved.',
      chemistry: {
        formula: 'C15H15NO3S',
        molecularWeight: '289.35 g/mol',
        class: 'Sulfinylacetamide'
      },
      history: 'Adrafinil was developed in France in the 1970s. It was marketed in Europe until 2011 when production stopped.',
      routes: ['Oral'],
      afterEffects: 'Similar to modafinil. Liver stress with regular use.',
      riskLevel: 'low',
      aliases: ['2-benzhydrylsulfinylacetohydroxamic acid']
    },
  {
      id: 'ephedrine',
      name: 'Ephedrine',
      commonNames: ['Ephedra', 'Ma Huang', 'Eph', 'Bronkaid'],
      category: 'stimulants',
      class: 'Alkaloid',
      description: 'Ephedrine is a naturally occurring alkaloid from the Ephedra plant. It acts as a sympathomimetic amine, stimulating both α and β adrenergic receptors. Ephedrine has been used for asthma, nasal congestion, and weight loss, with significant cardiovascular effects.',
      effects: {
        positive: ['Increased energy', 'Bronchodilation', 'Appetite suppression', 'Improved athletic performance', 'Nasal decongestion'],
        neutral: ['Increased heart rate', 'Elevated blood pressure', 'Sweating', 'Mild euphoria'],
        negative: ['Cardiovascular strain', 'Anxiety', 'Insomnia', 'Risk of stroke', 'Addiction potential', 'Tolerance development']
      },
      dosage: {
        threshold: '5-10mg',
        light: '10-25mg',
        common: '25-50mg',
        strong: '50-75mg',
        heavy: '75mg+'
      },
      duration: {
        onset: '15-45 minutes (oral)',
        comeup: '30-60 minutes',
        peak: '1-2 hours',
        offset: '2-4 hours',
        total: '4-6 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '5-10mg',
              light: '10-25mg',
              common: '25-50mg',
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
          notes: 'Both α and β adrenergic effects. Used for asthma, nasal congestion, weight loss. Cardiovascular effects significant.'
      },
      Intravenous: {
          dosage: {
              threshold: '2-4mg',
              light: '4-10mg',
              common: '10-20mg',
              strong: '20-30mg',
              heavy: '30mg'
          },
          duration: {
              onset: '10-30 seconds',
              comeup: '1-5 minutes',
              peak: '1-2 hours',
              offset: '1-2 hours',
              total: '2-3 hours'
          },
          notes: 'Immediate onset. 100% bioavailability. Very high risk. Requires sterile technique.'
      },
      Intramuscular: {
          dosage: {
              threshold: '3-6mg',
              light: '6-15mg',
              common: '15-30mg',
              strong: '30-45mg',
              heavy: '45mg'
          },
          duration: {
              onset: '5-15 minutes',
              comeup: '15-30 minutes',
              peak: '1-2 hours',
              offset: '2-4 hours',
              total: '4-6 hours'
          },
          notes: 'Medical administration route. Slower onset than IV but sustained effect.'
      }
  },
      interactions: ['Caffeine (increases cardiovascular strain)', 'Other stimulants', 'MAOIs', 'Beta blockers', 'Theophylline'],
      harmReduction: [
        'Do not combine with caffeine - dangerous cardiovascular effects',
        'Avoid if you have heart conditions or high blood pressure',
        'Do not use for extended periods',
        'Tolerance develops quickly',
        'Many countries restrict sales due to methamphetamine production'
      ],
      legality: 'Regulated in most countries. Available OTC in limited amounts in some US states. Prescription in many countries.',
      chemistry: {
        formula: 'C10H15NO',
        molecularWeight: '165.23 g/mol',
        class: 'Phenethylamine alkaloid'
      },
      history: 'Ephedrine has been used in Chinese medicine for over 5000 years. It was isolated in 1885 and became widely used medically.',
      routes: ['Oral', 'Intravenous', 'Intramuscular'],
      afterEffects: 'Fatigue, possible depression. Cardiovascular effects may persist.',
      riskLevel: 'moderate',
      aliases: ['(1R,2S)-2-(methylamino)-1-phenylpropan-1-ol']
    },
  {
      id: 'propylhexedrine',
      name: 'Propylhexedrine',
      commonNames: ['Benzedrex', 'Hex', 'Prop', 'Inhaler'],
      category: 'stimulants',
      class: 'Cyclohexylamine',
      description: 'Propylhexedrine is a stimulant originally developed as a substitute for amphetamine. It is found in nasal inhalers (Benzedrex) and has gained popularity as a legal stimulant. Propylhexedrine produces effects similar to amphetamine but with more peripheral cardiovascular effects.',
      effects: {
        positive: ['Stimulation', 'Euphoria', 'Nasal decongestion', 'Increased alertness'],
        neutral: ['Increased heart rate', 'Elevated blood pressure', 'Vasoconstriction'],
        negative: ['Strong cardiovascular effects', 'Risk of heart attack or stroke', 'Psychosis at high doses', 'Addiction potential', 'Lavender smell/taste from inhaler']
      },
      dosage: {
        threshold: '12.5-25mg',
        light: '25-50mg',
        common: '50-100mg',
        strong: '100-150mg',
        heavy: '150mg+'
      },
      duration: {
        onset: '15-45 minutes (oral)',
        comeup: '30-60 minutes',
        peak: '1-3 hours',
        offset: '2-4 hours',
        total: '4-8 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '12.5-25mg',
              light: '25-50mg',
              common: '50-100mg',
              strong: '100-150mg',
              heavy: '150mg'
          },
          duration: {
              onset: '15-45 minutes (oral)',
              comeup: '30-60 minutes',
              peak: '1-3 hours',
              offset: '2-4 hours',
              total: '4-8 hours'
          },
          notes: 'Most common route for this substance.'
      },
      Insufflation: {
          dosage: {
              threshold: '8.8-17.5mg',
              light: '17.5-35mg',
              common: '35-70mg',
              strong: '70-105mg',
              heavy: '105mg'
          },
          duration: {
              onset: '5-15 minutes',
              comeup: '10-30 minutes',
              peak: '1-2 hours',
              offset: '2-3 hours',
              total: '3-6 hours'
          },
          notes: 'Faster onset than oral. Nasal irritation possible with repeated use.'
      }
  },
      interactions: ['MAOIs', 'Other stimulants', 'Caffeine', 'Antidepressants'],
      harmReduction: [
        'Strong cardiovascular effects - use extreme caution',
        'Extract carefully if using inhaler - lavender oil is toxic',
        'Do not combine with other stimulants',
        'High risk of heart problems',
        'Not intended for recreational use'
      ],
      legality: 'OTC as nasal inhaler in US. Abuse can lead to restrictions.',
      chemistry: {
        formula: 'C10H21N',
        molecularWeight: '155.28 g/mol',
        class: 'Cyclohexylamine'
      },
      history: 'Propylhexedrine was developed in the 1940s as a substitute for amphetamine in inhalers. It has become a substance of abuse.',
      routes: ['Oral', 'Insufflation'],
      afterEffects: 'Significant crash, cardiovascular strain.',
      riskLevel: 'high',
      aliases: ['N,a-dimethyl-cyclohexaneethylamine']
    },
  {
      id: 'phentermine',
      name: 'Phentermine',
      commonNames: ['Adipex', 'Ionamin', 'Fastin', 'Phen'],
      category: 'stimulants',
      class: 'Amphetamine Derivative',
      description: 'Phentermine is a stimulant similar to amphetamine, used primarily for weight loss. It acts as a sympathomimetic amine, suppressing appetite and increasing energy. Phentermine is one of the most commonly prescribed weight loss medications.',
      effects: {
        positive: ['Appetite suppression', 'Weight loss', 'Increased energy', 'Mild euphoria'],
        neutral: ['Increased heart rate', 'Elevated blood pressure', 'Insomnia', 'Dry mouth'],
        negative: ['Cardiovascular effects', 'Addiction potential', 'Anxiety', 'Dependence', 'Pulmonary hypertension (rare)']
      },
      dosage: {
        threshold: '8-15mg',
        light: '15-30mg',
        common: '30-37.5mg',
        strong: '37.5-75mg',
        heavy: '75mg+'
      },
      duration: {
        onset: '30-60 minutes',
        comeup: '1-2 hours',
        peak: '2-4 hours',
        offset: '4-8 hours',
        total: '8-12 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '8-15mg',
              light: '15-30mg',
              common: '30-37.5mg',
              strong: '37.5-75mg',
              heavy: '75mg'
          },
          duration: {
              onset: '30-60 minutes',
              comeup: '1-2 hours',
              peak: '2-4 hours',
              offset: '4-8 hours',
              total: '8-12 hours'
          },
          notes: 'Most common route for this substance.'
      }
  },
      interactions: ['MAOIs (dangerous)', 'Other stimulants', 'SSRIs', 'Alcohol', 'Blood pressure medications'],
      harmReduction: [
        'Take early in day to avoid sleep disruption',
        'Monitor blood pressure regularly',
        'Not recommended for long-term use',
        'Do not combine with other stimulants',
        'Lower doses for those sensitive to stimulants'
      ],
      legality: 'Schedule IV controlled substance in the US. Prescription only for weight loss.',
      chemistry: {
        formula: 'C10H15N',
        molecularWeight: '149.23 g/mol',
        class: 'Amphetamine derivative'
      },
      history: 'Phentermine was approved for weight loss in the US in 1959. It remains one of the most prescribed weight loss drugs.',
      routes: ['Oral'],
      afterEffects: 'Possible fatigue, hunger return. Tolerance to appetite suppression develops.',
      riskLevel: 'moderate',
      aliases: ['α,α-dimethylphenethylamine']
    },
  {
      id: 'pma',
      name: 'PMA',
      commonNames: ['Para-Methoxyamphetamine', 'Death', 'Dr. Death', 'Chicken Yellow'],
      category: 'stimulants',
      class: 'Phenethylamine',
      description: 'PMA (para-methoxyamphetamine) is a highly dangerous stimulant and serotonergic drug often sold as MDMA. It has a delayed onset and much lower therapeutic index than MDMA, making overdose common. PMA has been responsible for numerous deaths.',
      effects: {
        positive: ['Mild stimulation', 'Some euphoria (weak compared to MDMA)'],
        neutral: ['Delayed onset (leads to dangerous redosing)', 'Increased body temperature'],
        negative: ['EXTREMELY dangerous', 'High overdose risk', 'Severe hyperthermia', 'Serotonin syndrome', 'Respiratory failure', 'Many deaths reported', 'Often mislabeled as MDMA']
      },
      dosage: {
        threshold: '20-40mg',
        light: '40-60mg',
        common: '60-100mg (DANGEROUS)',
        strong: '100mg+ (LIFE THREATENING)',
        heavy: '150mg+ (LIKELY FATAL)'
      },
      duration: {
        onset: '1-2 hours (dangerously delayed)',
        comeup: '1-2 hours',
        peak: '2-4 hours',
        offset: '4-6 hours',
        total: '6-10 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '20-40mg',
              light: '40-60mg',
              common: '60-100mg (DANGEROUS)',
              strong: '100mg',
              heavy: '150mg'
          },
          duration: {
              onset: '1-2 hours (dangerously delayed)',
              comeup: '1-2 hours',
              peak: '2-4 hours',
              offset: '4-6 hours',
              total: '6-10 hours'
          },
          notes: 'Most common route for this substance.'
      }
  },
      interactions: ['MAOIs (potentially fatal)', 'SSRIs', 'Other stimulants', 'MDMA', 'All serotonergic drugs'],
      harmReduction: [
        'EXTREMELY DANGEROUS - many deaths reported',
        'Often sold as MDMA - test your substances',
        'Delayed onset leads to dangerous redosing',
        'If you took what you thought was MDMA and nothing happens - DO NOT REDOSE',
        'Seek medical help immediately if hyperthermia occurs',
        'No safe recreational dose',
        'Has killed many people who thought they were taking MDMA'
      ],
      legality: 'Schedule I controlled substance in the US. Illegal internationally.',
      chemistry: {
        formula: 'C10H15NO',
        molecularWeight: '165.23 g/mol',
        class: 'Phenethylamine'
      },
      history: 'PMA emerged as a street drug in the 1970s. It has caused numerous deaths when sold as MDMA due to its delayed onset and toxicity.',
      routes: ['Oral'],
      afterEffects: 'If survived, potential organ damage from hyperthermia.',
      riskLevel: 'very-high',
      aliases: ['4-methoxyamphetamine']
    },
  {
      id: 'pmma',
      name: 'PMMA',
      commonNames: ['Para-Methoxymethamphetamine', 'Dr. Death II'],
      category: 'stimulants',
      class: 'Phenethylamine',
      description: 'PMMA (para-methoxymethamphetamine) is the N-methylated analog of PMA and shares its dangerous profile. Like PMA, it is often sold as MDMA and has caused numerous deaths due to its delayed onset and toxicity.',
      effects: {
        positive: ['Mild effects at best'],
        neutral: ['Delayed onset', 'Long duration'],
        negative: ['EXTREMELY dangerous', 'High overdose risk', 'Hyperthermia', 'Serotonin syndrome', 'Death', 'Often mislabeled as MDMA', 'More toxic than MDMA at same doses']
      },
      dosage: {
        threshold: '20-40mg',
        light: '40-60mg',
        common: 'NOT SAFE',
        strong: 'LIFE THREATENING',
        heavy: 'LIKELY FATAL'
      },
      duration: {
        onset: '1-2 hours',
        comeup: '1-2 hours',
        peak: '2-6 hours',
        offset: '4-8 hours',
        total: '8-12 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '20-40mg',
              light: '40-60mg',
              common: 'NOT SAFE',
              strong: 'LIFE THREATENING',
              heavy: 'LIKELY FATAL'
          },
          duration: {
              onset: '1-2 hours',
              comeup: '1-2 hours',
              peak: '2-6 hours',
              offset: '4-8 hours',
              total: '8-12 hours'
          },
          notes: 'Most common route for this substance.'
      }
  },
      interactions: ['All serotonergic drugs are dangerous', 'MAOIs', 'SSRIs', 'Other stimulants'],
      harmReduction: [
        'EXTREMELY DANGEROUS - do not take',
        'Often sold as MDMA - test substances',
        'Delayed onset causes dangerous redosing',
        'Seek medical help if suspected ingestion',
        'Many deaths reported',
        'Not a safe alternative to anything'
      ],
      legality: 'Schedule I controlled substance in the US. Illegal internationally.',
      chemistry: {
        formula: 'C11H17NO',
        molecularWeight: '179.26 g/mol',
        class: 'Phenethylamine'
      },
      history: 'PMMA has been found in pills sold as MDMA and has caused numerous deaths worldwide.',
      routes: ['Oral'],
      afterEffects: 'If survived, potential organ damage.',
      riskLevel: 'very-high',
      aliases: ['4-methoxymethamphetamine']
    },
  {
      id: '4f-mph',
      name: '4F-MPH',
      commonNames: ['4-Fluoromethylphenidate', '4F'],
      category: 'stimulants',
      class: 'Research Chemical',
      description: '4F-MPH is a fluorinated analog of methylphenidate that appeared as a research chemical. It is significantly more potent than methylphenidate and has a longer duration. Limited research exists on its safety profile.',
      effects: {
        positive: ['Focus enhancement', 'Stimulation', 'Euphoria', 'Long duration'],
        neutral: ['Increased heart rate', 'Appetite suppression', 'Dry mouth'],
        negative: ['Anxiety', 'Insomnia', 'Cardiovascular strain', 'Addiction potential', 'Limited research']
      },
      dosage: {
        threshold: '2-5mg',
        light: '5-10mg',
        common: '10-20mg',
        strong: '20-30mg',
        heavy: '30mg+'
      },
      duration: {
        onset: '20-40 minutes',
        comeup: '30-60 minutes',
        peak: '2-4 hours',
        offset: '3-6 hours',
        total: '6-10 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '2-5mg',
              light: '5-10mg',
              common: '10-20mg',
              strong: '20-30mg',
              heavy: '30mg'
          },
          duration: {
              onset: '20-40 minutes',
              comeup: '30-60 minutes',
              peak: '2-4 hours',
              offset: '3-6 hours',
              total: '6-10 hours'
          },
          notes: 'Most common route for this substance.'
      },
      Insufflation: {
          dosage: {
              threshold: '1.4-3.5mg',
              light: '3.5-7mg',
              common: '7-14mg',
              strong: '14-21mg',
              heavy: '21mg'
          },
          duration: {
              onset: '5-15 minutes',
              comeup: '10-30 minutes',
              peak: '2-3 hours',
              offset: '2-5 hours',
              total: '5-8 hours'
          },
          notes: 'Faster onset than oral. Nasal irritation possible with repeated use.'
      }
  },
      interactions: ['MAOIs', 'Other stimulants', 'SSRIs', 'Alcohol'],
      harmReduction: [
        'More potent than methylphenidate - use lower doses',
        'Long duration - plan accordingly',
        'Limited research - unknown long-term effects',
        'Do not combine with other stimulants',
        'Use accurate milligram scale'
      ],
      legality: 'Unscheduled at US federal level. May be prosecuted under Federal Analogue Act. Controlled in some US states and other countries. Not approved for medical use.',
      chemistry: {
        formula: 'C14H18FNO2',
        molecularWeight: '251.30 g/mol',
        class: 'Piperidine derivative'
      },
      history: '4F-MPH appeared as a research chemical in the 2010s as an alternative to methylphenidate.',
      routes: ['Oral', 'Insufflation'],
      afterEffects: 'Long comedown possible. Sleep disruption.',
      riskLevel: 'moderate',
      aliases: ['4-fluoromethylphenidate']
    },
  {
      id: '4f-eph',
      name: '4F-EPH',
      commonNames: ['4-Fluoroethylphenidate'],
      category: 'stimulants',
      class: 'Research Chemical',
      description: '4F-EPH is a stimulant research chemical related to methylphenidate. It has an ethyl group instead of a methyl group and a fluorine substitution. Limited information exists about its effects and safety.',
      effects: {
        positive: ['Stimulation', 'Focus enhancement', 'Euphoria'],
        neutral: ['Increased heart rate', 'Appetite suppression'],
        negative: ['Anxiety', 'Insomnia', 'Cardiovascular effects', 'Limited research']
      },
      dosage: {
        threshold: '5-10mg',
        light: '10-20mg',
        common: '20-40mg',
        strong: '40-60mg',
        heavy: '60mg+'
      },
      duration: {
        onset: '20-40 minutes',
        comeup: '30-60 minutes',
        peak: '2-3 hours',
        offset: '2-4 hours',
        total: '4-8 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '5-10mg',
              light: '10-20mg',
              common: '20-40mg',
              strong: '40-60mg',
              heavy: '60mg'
          },
          duration: {
              onset: '20-40 minutes',
              comeup: '30-60 minutes',
              peak: '2-3 hours',
              offset: '2-4 hours',
              total: '4-8 hours'
          },
          notes: 'Most common route for this substance.'
      },
      Insufflation: {
          dosage: {
              threshold: '3.5-7mg',
              light: '7-14mg',
              common: '14-28mg',
              strong: '28-42mg',
              heavy: '42mg'
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
      interactions: ['MAOIs', 'Other stimulants', 'SSRIs'],
      harmReduction: [
        'Limited research available',
        'Start with low doses',
        'Do not combine with other stimulants',
        'Use accurate measurement'
      ],
      legality: 'Unscheduled at US federal level. May be prosecuted under Federal Analogue Act. Controlled in some US states. Not approved for medical use.',
      chemistry: {
        formula: 'C15H20FNO2',
        molecularWeight: '265.32 g/mol',
        class: 'Piperidine derivative'
      },
      history: '4F-EPH appeared as a research chemical in the 2010s.',
      routes: ['Oral', 'Insufflation'],
      afterEffects: 'Comedown similar to other stimulants.',
      riskLevel: 'moderate',
      aliases: ['4-fluoroethylphenidate']
    },
  {
      id: 'alpha-pvp',
      name: 'α-PVP',
      commonNames: ['Flakka', 'Gravel', 'Alpha-PVP', 'A-PVP'],
      category: 'stimulants',
      class: 'Cathinone',
      description: 'α-PVP (alpha-Pyrrolidinopentiophenone) is a powerful synthetic stimulant of the cathinone class. It is a norepinephrine-dopamine reuptake inhibitor known for producing intense stimulation, euphoria, and high addiction potential. α-PVP has been associated with numerous cases of bizarre behavior, psychosis, and deaths.',
      effects: {
        positive: ['Intense euphoria', 'Strong stimulation', 'Increased energy', 'Increased focus'],
        neutral: ['Increased heart rate', 'Insomnia', 'Suppressed appetite'],
        negative: ['Very high addiction potential', 'Severe paranoia and psychosis', 'Hyperthermia', 'Dangerous behavior', 'Cardiovascular strain', 'Many reports of bizarre behavior', 'Death from overdose']
      },
      dosage: {
        threshold: '2-5mg',
        light: '5-10mg',
        common: '10-20mg',
        strong: '20-40mg',
        heavy: '40mg+'
      },
      duration: {
        onset: '10-30 minutes (insufflated)',
        comeup: '15-45 minutes',
        peak: '1-3 hours',
        offset: '2-4 hours',
        total: '4-6 hours'
      },
    routeData: {
      Insufflation: {
          dosage: {
              threshold: '1.4-3.5mg',
              light: '3.5-7mg',
              common: '7-14mg',
              strong: '14-28mg',
              heavy: '28mg'
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
      Oral: {
          dosage: {
              threshold: '2-5mg',
              light: '5-10mg',
              common: '10-20mg',
              strong: '20-40mg',
              heavy: '40mg'
          },
          duration: {
              onset: '10-30 minutes (insufflated)',
              comeup: '15-45 minutes',
              peak: '1-3 hours',
              offset: '2-4 hours',
              total: '4-6 hours'
          },
          notes: 'Most common route for this substance.'
      },
      Smoking: {
          dosage: {
              threshold: '1-2.5mg',
              light: '2.5-5mg',
              common: '5-10mg',
              strong: '10-20mg',
              heavy: '20mg'
          },
          duration: {
              onset: '5-15 seconds',
              comeup: '30-90 seconds',
              peak: '1-2 hours',
              offset: '1-2 hours',
              total: '2-3 hours'
          },
          notes: 'Very rapid onset. Shorter duration. Higher addiction potential.'
      }
  },
      interactions: ['All combinations dangerous', 'Other stimulants', 'Alcohol', 'Depressants'],
      harmReduction: [
        'NOT RECOMMENDED - high addiction and danger potential',
        'Very potent - use milligram scale',
        'Associated with dangerous and bizarre behavior',
        'High risk of psychosis',
        'Do not redose - compulsive redosing common',
        'Have someone present who can call for help',
        'Avoid if you have any mental health conditions'
      ],
      legality: 'Schedule I in US. Controlled internationally. Emergency scheduled in many countries due to dangers.',
      chemistry: {
        formula: 'C15H21NO',
        molecularWeight: '231.33 g/mol',
        class: 'Pyrovalerone cathinone'
      },
      history: 'α-PVP was developed in the 1960s but gained notoriety around 2013-2015 as "flakka" in Florida.',
      routes: ['Insufflation', 'Oral', 'Smoking'],
      afterEffects: 'Severe comedown, craving, possible psychosis. Extended recovery.',
      riskLevel: 'very-high',
      aliases: ['alpha-pyrrolidinopentiophenone', 'flakka']
    },
  {
      id: '3-fpm',
      name: '3-FPM',
      commonNames: ['3-Fluorophenmetrazine', '3-F'],
      category: 'stimulants',
      class: 'Phenmetrazine Derivative',
      description: '3-FPM (3-Fluorophenmetrazine) is a stimulant research chemical derived from phenmetrazine. It is known for producing functional stimulation with less euphoria and compulsion than other stimulants. 3-FPM is often used for productivity enhancement due to its relatively clear-headed effects.',
      effects: {
        positive: ['Functional stimulation', 'Increased focus', 'Mild euphoria', 'Productivity enhancement', 'Less compulsive than other stimulants'],
        neutral: ['Mild stimulation', 'Appetite suppression', 'Increased heart rate'],
        negative: ['Anxiety at high doses', 'Insomnia', 'Vasoconstriction', 'Headache', 'Addiction potential']
      },
      dosage: {
        threshold: '10-20mg',
        light: '20-40mg',
        common: '40-80mg',
        strong: '80-120mg',
        heavy: '120mg+'
      },
      duration: {
        onset: '20-40 minutes (oral)',
        comeup: '30-60 minutes',
        peak: '2-3 hours',
        offset: '2-3 hours',
        total: '4-6 hours'
      },
    routeData: {
      Oral: {
          dosage: {
              threshold: '10-20mg',
              light: '20-40mg',
              common: '40-80mg',
              strong: '80-120mg',
              heavy: '120mg'
          },
          duration: {
              onset: '20-40 minutes (oral)',
              comeup: '30-60 minutes',
              peak: '2-3 hours',
              offset: '2-3 hours',
              total: '4-6 hours'
          },
          notes: 'Most common route for this substance.'
      },
      Insufflation: {
          dosage: {
              threshold: '7-14mg',
              light: '14-28mg',
              common: '28-56mg',
              strong: '56-84mg',
              heavy: '84mg'
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
      interactions: ['MAOIs', 'Other stimulants', 'SSRIs'],
      harmReduction: [
        'Considered more functional than recreational',
        'Still has addiction potential - avoid daily use',
        'Less compulsive than many stimulants',
        'Stay hydrated',
        'Avoid late in the day',
        'Use accurate milligram scale'
      ],
      legality: 'Unscheduled at US federal level. May be prosecuted under Federal Analogue Act. Controlled in some countries.',
      chemistry: {
        formula: 'C11H14FNO',
        molecularWeight: '195.23 g/mol',
        class: 'Phenmetrazine derivative'
      },
      history: '3-FPM was developed as a research chemical and appeared around 2014 as a functional stimulant.',
      routes: ['Oral', 'Insufflation'],
      afterEffects: 'Mild comedown. Sleep disruption.',
      riskLevel: 'moderate',
      aliases: ['3-fluorophenmetrazine']
    }
];
