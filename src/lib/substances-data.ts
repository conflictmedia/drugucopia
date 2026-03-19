// Psychoactive Substances Documentation Data

export interface RouteDosageDuration {
  dosage: {
    threshold: string;
    light: string;
    common: string;
    strong: string;
    heavy: string;
  };
  duration: {
    onset: string;
    comeup: string;
    peak: string;
    offset: string;
    total: string;
  };
  notes?: string;
}

export interface Substance {
  id: string;
  name: string;
  commonNames: string[];
  category: SubstanceCategory;
  class: string;
  description: string;
  effects: {
    positive: string[];
    neutral: string[];
    negative: string[];
  };
  dosage: {
    threshold: string;
    light: string;
    common: string;
    strong: string;
    heavy: string;
  };
  duration: {
    onset: string;
    comeup: string;
    peak: string;
    offset: string;
    total: string;
  };
  routeData?: Record<string, RouteDosageDuration>;
  interactions: string[];
  harmReduction: string[];
  legality: string;
  chemistry: {
    formula: string;
    molecularWeight: string;
    class: string;
  };
  history: string;
  routes: string[];
  afterEffects: string;
  riskLevel: 'low' | 'moderate' | 'high' | 'very-high';
  aliases: string[];
}

export type SubstanceCategory = 
  | 'stimulants'
  | 'depressants'
  | 'hallucinogens'
  | 'dissociatives'
  | 'empathogens'
  | 'cannabinoids'
  | 'opioids'
  | 'deliriants'
  | 'nootropics';

export interface CategoryInfo {
  id: SubstanceCategory;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export const categories: CategoryInfo[] = [
  {
    id: 'stimulants',
    name: 'Stimulants',
    description: 'Substances that increase activity in the central nervous system, leading to enhanced alertness, attention, and energy.',
    icon: 'Zap',
    color: 'amber'
  },
  {
    id: 'depressants',
    name: 'Depressants',
    description: 'Substances that slow down brain function and central nervous system activity, producing calming and sedative effects.',
    icon: 'Moon',
    color: 'indigo'
  },
  {
    id: 'hallucinogens',
    name: 'Hallucinogens',
    description: 'Substances that cause profound alterations in perception, thought, and mood, often leading to visual and auditory hallucinations.',
    icon: 'Sparkles',
    color: 'purple'
  },
  {
    id: 'dissociatives',
    name: 'Dissociatives',
    description: 'Substances that produce feelings of detachment from reality and oneself, often described as an out-of-body experience.',
    icon: 'Split',
    color: 'cyan'
  },
  {
    id: 'empathogens',
    name: 'Empathogens',
    description: 'Substances that enhance feelings of empathy, emotional openness, and interpersonal connection.',
    icon: 'Heart',
    color: 'pink'
  },
  {
    id: 'cannabinoids',
    name: 'Cannabinoids',
    description: 'Compounds that act on cannabinoid receptors, producing a range of effects including relaxation and altered perception.',
    icon: 'Leaf',
    color: 'green'
  },
  {
    id: 'opioids',
    name: 'Opioids',
    description: 'Substances that act on opioid receptors, primarily used for pain relief but with high potential for dependence.',
    icon: 'Pill',
    color: 'red'
  },
  {
    id: 'deliriants',
    name: 'Deliriants',
    description: 'Substances that cause delirium, characterized by confusion, disorientation, and realistic hallucinations.',
    icon: 'Ghost',
    color: 'slate'
  },
  {
    id: 'nootropics',
    name: 'Nootropics',
    description: 'Cognitive enhancers that may improve memory, focus, creativity, or other mental functions with low toxicity and minimal side effects.',
    icon: 'Brain',
    color: 'teal'
  }
];

export const categoryColors: Record<SubstanceCategory, string> = {
  stimulants: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
  depressants: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/20',
  hallucinogens: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
  dissociatives: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/20',
  empathogens: 'text-pink-500 bg-pink-500/10 border-pink-500/20',
  cannabinoids: 'text-green-500 bg-green-500/10 border-green-500/20',
  opioids: 'text-red-500 bg-red-500/10 border-red-500/20',
  deliriants: 'text-slate-500 bg-slate-500/10 border-slate-500/20',
  nootropics: 'text-teal-500 bg-teal-500/10 border-teal-500/20'
};

export const substances: Substance[] = [
  // Stimulants
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
      'Oral': {
        dosage: { threshold: '10-20mg', light: '20-50mg', common: '50-150mg', strong: '150-300mg', heavy: '300mg+' },
        duration: { onset: '10-30 minutes', comeup: '30-60 minutes', peak: '1-2 hours', offset: '3-5 hours', total: '4-6 hours' },
        notes: 'Standard oral consumption. Absorption rate varies with food intake.'
      },
      'Sublingual': {
        dosage: { threshold: '5-10mg', light: '10-30mg', common: '30-100mg', strong: '100-200mg', heavy: '200mg+' },
        duration: { onset: '5-15 minutes', comeup: '15-30 minutes', peak: '45-90 minutes', offset: '2-4 hours', total: '3-5 hours' },
        notes: 'Faster absorption than oral. More efficient bioavailability.'
      },
      'Rectal': {
        dosage: { threshold: '5-15mg', light: '15-40mg', common: '40-120mg', strong: '120-250mg', heavy: '250mg+' },
        duration: { onset: '5-15 minutes', comeup: '15-30 minutes', peak: '45-90 minutes', offset: '3-5 hours', total: '4-6 hours' },
        notes: 'Higher bioavailability than oral. Faster onset.'
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
    routes: ['Oral', 'Sublingual', 'Rectal'],
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
    description: 'Nicotine is a potent parasympathomimetic alkaloid found in the nightshade family of plants, predominantly in tobacco. It acts as a stimulant in mammals and is one of the most addictive substances known. Nicotine stimulates nicotinic acetylcholine receptors in the brain, leading to the release of dopamine, norepinephrine, and other neurotransmitters. This results in increased alertness, improved concentration, and a sense of relaxation. Despite its stimulant properties, nicotine can also produce calming effects, particularly in stressful situations.',
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
      'Inhalation': {
        dosage: { threshold: '0.5-1mg', light: '1-2mg', common: '2-4mg', strong: '4-8mg', heavy: '8mg+' },
        duration: { onset: '10-20 seconds', comeup: '1-3 minutes', peak: '5-15 minutes', offset: '20-40 minutes', total: '30-60 minutes' },
        notes: 'Fastest onset of any route. Smoking delivers additional carcinogens. Vaping is relatively less harmful.'
      },
      'Oral': {
        dosage: { threshold: '1-2mg', light: '2-4mg', common: '4-8mg', strong: '8-12mg', heavy: '12mg+' },
        duration: { onset: '15-30 minutes', comeup: '20-40 minutes', peak: '30-60 minutes', offset: '1-2 hours', total: '2-4 hours' },
        notes: 'Gum, lozenges, and pouches. Slower but longer-lasting than inhalation. First-pass metabolism reduces bioavailability.'
      },
      'Transdermal': {
        dosage: { threshold: '7mg/24h patch', light: '7-14mg/24h', common: '14-21mg/24h', strong: '21mg+/24h', heavy: 'Multiple patches' },
        duration: { onset: '1-2 hours', comeup: '2-4 hours', peak: '4-8 hours', offset: '8-12 hours', total: '16-24 hours' },
        notes: 'Steady-state delivery throughout the day. No peaks or troughs. Best for cessation therapy.'
      },
      'Nasal': {
        dosage: { threshold: '0.5mg', light: '0.5-1mg', common: '1-2mg', strong: '2-3mg', heavy: '3mg+' },
        duration: { onset: '1-3 minutes', comeup: '3-5 minutes', peak: '10-20 minutes', offset: '20-30 minutes', total: '30-60 minutes' },
        notes: 'Nasal spray form. Rapid absorption similar to smoking without combustion products.'
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
    routes: ['Inhalation', 'Oral', 'Transdermal', 'Nasal'],
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
    description: 'Cocaine is a powerful stimulant and local anesthetic derived from the leaves of the coca plant (Erythroxylum coca), native to South America. It acts as a serotonin-norepinephrine-dopamine reuptake inhibitor (SNDRI), producing intense euphoria, increased energy, and heightened alertness. Cocaine blocks the reuptake of these neurotransmitters, leading to their accumulation in the synaptic cleft and resulting in its characteristic effects.',
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
      'Insufflation': {
        dosage: { threshold: '5-10mg', light: '10-30mg', common: '30-60mg', strong: '60-100mg', heavy: '100mg+' },
        duration: { onset: '1-5 minutes', comeup: '5-15 minutes', peak: '15-30 minutes', offset: '30-60 minutes', total: '45-90 minutes' },
        notes: 'Most common recreational route. Damages nasal tissue over time. Lower bioavailability than IV (~60%).'
      },
      'Oral': {
        dosage: { threshold: '50-75mg', light: '75-150mg', common: '150-300mg', strong: '300-500mg', heavy: '500mg+' },
        duration: { onset: '10-30 minutes', comeup: '30-60 minutes', peak: '1-2 hours', offset: '1-3 hours', total: '2-4 hours' },
        notes: 'Lowest bioavailability. Much higher doses needed. Slower onset but longer duration. Traditional coca leaf chewing is very mild.'
      },
      'Smoking': {
        dosage: { threshold: '3-5mg', light: '5-15mg', common: '15-30mg', strong: '30-60mg', heavy: '60mg+' },
        duration: { onset: '3-10 seconds', comeup: '30-60 seconds', peak: '5-10 minutes', offset: '10-20 minutes', total: '15-30 minutes' },
        notes: 'Crack cocaine (freebase). Extremely rapid onset and intense high. Very short duration drives compulsive redosing. Highest addiction potential.'
      },
      'Intravenous': {
        dosage: { threshold: '3-8mg', light: '8-20mg', common: '20-40mg', strong: '40-75mg', heavy: '75mg+' },
        duration: { onset: '5-30 seconds', comeup: '1-3 minutes', peak: '5-15 minutes', offset: '20-40 minutes', total: '30-60 minutes' },
        notes: '100% bioavailability. Most intense rush. Highest risk of overdose and disease transmission. Requires sterile equipment.'
      },
      'Topical': {
        dosage: { threshold: 'Medical use only', light: 'N/A', common: 'N/A', strong: 'N/A', heavy: 'N/A' },
        duration: { onset: '2-5 minutes', comeup: '5-10 minutes', peak: '15-30 minutes', offset: '30-60 minutes', total: '45-90 minutes' },
        notes: 'Medical/dental use only as a local anesthetic. Not used recreationally via this route.'
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
    routes: ['Insufflation', 'Smoking', 'Intravenous', 'Oral', 'Topical'],
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
    description: 'Methamphetamine is a potent central nervous system stimulant of the phenethylamine class. It acts primarily as a releasing agent for dopamine, norepinephrine, and serotonin, producing intense euphoria, increased energy, and heightened focus. Methamphetamine is structurally similar to amphetamine but has greater lipid solubility, allowing it to cross the blood-brain barrier more rapidly and produce more intense effects.',
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
      'Oral': {
        dosage: { threshold: '5-10mg', light: '10-25mg', common: '25-50mg', strong: '50-100mg', heavy: '100mg+' },
        duration: { onset: '15-30 minutes', comeup: '30-60 minutes', peak: '2-4 hours', offset: '6-12 hours', total: '8-24 hours' },
        notes: 'Slowest onset but longest duration. Smoothest experience of all routes. Lower bioavailability than other routes.'
      },
      'Insufflation': {
        dosage: { threshold: '3-8mg', light: '8-20mg', common: '20-40mg', strong: '40-80mg', heavy: '80mg+' },
        duration: { onset: '5-10 minutes', comeup: '15-30 minutes', peak: '1-3 hours', offset: '4-8 hours', total: '6-12 hours' },
        notes: 'Faster onset than oral. Damages nasal tissue. Strong rush but shorter duration than oral.'
      },
      'Smoking': {
        dosage: { threshold: '3-5mg', light: '5-15mg', common: '15-30mg', strong: '30-60mg', heavy: '60mg+' },
        duration: { onset: '5-20 seconds', comeup: '1-5 minutes', peak: '30-90 minutes', offset: '4-8 hours', total: '6-12 hours' },
        notes: 'Very rapid onset with intense rush. Less harmful to lungs than crack cocaine but still damaging. High addiction potential.'
      },
      'Intravenous': {
        dosage: { threshold: '2-5mg', light: '5-15mg', common: '15-30mg', strong: '30-60mg', heavy: '60mg+' },
        duration: { onset: '5-30 seconds', comeup: '1-3 minutes', peak: '30-60 minutes', offset: '4-8 hours', total: '6-12 hours' },
        notes: '100% bioavailability. Most intense rush. Extreme addiction potential. High risk of overdose and disease transmission.'
      },
      'Rectal': {
        dosage: { threshold: '3-8mg', light: '8-20mg', common: '20-40mg', strong: '40-80mg', heavy: '80mg+' },
        duration: { onset: '5-20 minutes', comeup: '15-30 minutes', peak: '1-3 hours', offset: '6-10 hours', total: '8-14 hours' },
        notes: 'Higher bioavailability than oral. Faster onset. Avoids nasal damage.'
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
  
  // Hallucinogens
  {
    id: 'lsd',
    name: 'LSD',
    commonNames: ['Acid', 'Tabs', 'Blotter', 'Lucy', 'Doses'],
    category: 'hallucinogens',
    class: 'Lysergamide',
    description: 'LSD (Lysergic acid diethylamide) is one of the most potent psychedelic substances known, active at microgram doses. It was first synthesized by Albert Hofmann in 1938 from ergot fungus. LSD primarily acts as a serotonin receptor agonist, particularly at the 5-HT2A receptor, producing profound alterations in perception, thought, and mood.',
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
      'Sublingual': {
        dosage: { threshold: '20-30μg', light: '30-75μg', common: '75-150μg', strong: '150-300μg', heavy: '300μg+' },
        duration: { onset: '30-60 minutes', comeup: '1-2 hours', peak: '3-5 hours', offset: '3-5 hours', total: '8-12 hours' },
        notes: 'Most common route. Hold under tongue for 15 minutes for best absorption. Blotter paper is the standard delivery mechanism.'
      },
      'Oral': {
        dosage: { threshold: '25-35μg', light: '35-80μg', common: '80-160μg', strong: '160-320μg', heavy: '320μg+' },
        duration: { onset: '45-90 minutes', comeup: '1.5-2.5 hours', peak: '3-5 hours', offset: '3-5 hours', total: '9-13 hours' },
        notes: 'Swallowing blotter directly. Slightly slower and less efficient than sublingual. Food may delay onset.'
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
    description: 'Psilocybin is a naturally occurring psychedelic compound found in over 200 species of mushrooms, primarily in the genus Psilocybe. When ingested, psilocybin is rapidly dephosphorylated to psilocin, the active compound that produces psychedelic effects. Psilocin acts primarily as a serotonin receptor agonist, particularly at 5-HT2A receptors.',
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
      'Oral': {
        dosage: { threshold: '0.5-1g', light: '1-1.5g', common: '1.5-3g', strong: '3-5g', heavy: '5g+' },
        duration: { onset: '20-40 minutes', comeup: '30-60 minutes', peak: '2-3 hours', offset: '2-3 hours', total: '4-6 hours' },
        notes: 'Standard eating of dried mushrooms. Chew well for best absorption. Food may delay onset.'
      },
      'Lemon Tek': {
        dosage: { threshold: '0.3-0.7g', light: '0.7-1.2g', common: '1.2-2.5g', strong: '2.5-4g', heavy: '4g+' },
        duration: { onset: '10-20 minutes', comeup: '20-40 minutes', peak: '1.5-2.5 hours', offset: '1.5-2.5 hours', total: '3-5 hours' },
        notes: 'Acidic pre-digestion converts psilocybin to psilocin. Faster and more intense onset. Shorter overall duration. Can reduce nausea for some users.'
      },
      'Tea': {
        dosage: { threshold: '0.5-1g', light: '1-1.5g', common: '1.5-3g', strong: '3-5g', heavy: '5g+' },
        duration: { onset: '15-30 minutes', comeup: '20-40 minutes', peak: '2-3 hours', offset: '2-3 hours', total: '4-6 hours' },
        notes: 'Brewing mushrooms in hot (not boiling) water. May reduce nausea compared to eating directly. Strain out mushroom material.'
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
    routes: ['Oral', 'Lemon Tek', 'Tea'],
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
    description: 'N,N-Dimethyltryptamine (DMT) is a powerful psychedelic compound found naturally in many plants and animals, including humans. When vaporized and inhaled, DMT produces an extremely intense but short-acting psychedelic experience, often described as a "breakthrough" to another dimension.',
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
      'Inhalation': {
        dosage: { threshold: '5-10mg', light: '10-20mg', common: '20-40mg', strong: '40-60mg', heavy: '60mg+' },
        duration: { onset: '10-30 seconds', comeup: '1-2 minutes', peak: '5-15 minutes', offset: '10-20 minutes', total: '15-30 minutes' },
        notes: 'Vaporization is standard. Use low-temperature device. Do not combust. Three big hits is the traditional method for a breakthrough.'
      },
      'Oral': {
        dosage: { threshold: '25-50mg', light: '50-75mg', common: '75-150mg', strong: '150-200mg', heavy: '200mg+' },
        duration: { onset: '30-45 minutes', comeup: '1-2 hours', peak: '2-3 hours', offset: '2-3 hours', total: '4-6 hours' },
        notes: 'Requires MAOI (ayahuasca). Orally inactive without MAOI. Dramatically extended experience. Extreme caution with MAOI combinations required.'
      },
      'Insufflation': {
        dosage: { threshold: '10-20mg', light: '20-40mg', common: '40-60mg', strong: '60-100mg', heavy: '100mg+' },
        duration: { onset: '3-5 minutes', comeup: '5-10 minutes', peak: '15-25 minutes', offset: '15-25 minutes', total: '30-60 minutes' },
        notes: 'Slower onset than vaporization. More gradual come-up. Painful on nasal tissue. Less common route.'
      },
      'Intravenous': {
        dosage: { threshold: '5-10mg', light: '10-20mg', common: '20-30mg', strong: '30-50mg', heavy: '50mg+' },
        duration: { onset: '5-20 seconds', comeup: '30-60 seconds', peak: '5-15 minutes', offset: '10-20 minutes', total: '15-30 minutes' },
        notes: 'Research context only. Extremely rapid onset. Full effects within seconds. Rarely used recreationally.'
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
    routes: ['Inhalation', 'Oral', 'Insufflation', 'Intravenous'],
    afterEffects: 'Rapid return to baseline. Many report lasting positive effects and increased appreciation for life.',
    riskLevel: 'moderate',
    aliases: ['N,N-DMT', 'N,N-dimethyltryptamine']
  },

  // Empathogens
  {
    id: 'mdma',
    name: 'MDMA',
    commonNames: ['Ecstasy', 'Molly', 'E', 'Rolls', 'Beans'],
    category: 'empathogens',
    class: 'Phenethylamine',
    description: 'MDMA (3,4-methylenedioxymethamphetamine) is a synthetic psychoactive drug with both stimulant and psychedelic properties. It is classified as an entactogen or empathogen for its ability to enhance feelings of emotional closeness and empathy. MDMA acts primarily as a releasing agent for serotonin, dopamine, and norepinephrine.',
    effects: {
      positive: ['Intense feelings of empathy and connection', 'Enhanced appreciation of music and touch', 'Reduced anxiety and fear', 'Increased sociability and openness', 'Mild euphoria and sense of well-being', 'Therapeutic processing of trauma'],
      neutral: ['Increased energy and alertness', 'Jaw clenching and teeth grinding', 'Increased heart rate and blood pressure', 'Suppressed appetite', 'Dilated pupils', 'Enhanced sensory perception'],
      negative: ['Dehydration or over-hydration', 'Hyperthermia in hot environments', 'Depression during comedown', 'Memory and cognitive issues with frequent use', 'Neurotoxicity with heavy use', 'Teeth damage from clenching']
    },
    dosage: {
      threshold: '30-50mg',
      light: '50-75mg',
      common: '75-125mg',
      strong: '125-175mg',
      heavy: '175mg+'
    },
    duration: {
      onset: '20-40 minutes',
      comeup: '30-60 minutes',
      peak: '2-3 hours',
      offset: '2-3 hours',
      total: '4-6 hours'
    },
    routeData: {
      'Oral': {
        dosage: { threshold: '30-50mg', light: '50-75mg', common: '75-125mg', strong: '125-175mg', heavy: '175mg+' },
        duration: { onset: '20-40 minutes', comeup: '30-60 minutes', peak: '2-3 hours', offset: '2-3 hours', total: '4-6 hours' },
        notes: 'Most common route. Swallowed as powder, crystal, or pill. Food may delay but not reduce effects.'
      },
      'Insufflation': {
        dosage: { threshold: '20-40mg', light: '40-60mg', common: '60-100mg', strong: '100-150mg', heavy: '150mg+' },
        duration: { onset: '5-15 minutes', comeup: '15-30 minutes', peak: '1.5-2.5 hours', offset: '1.5-2.5 hours', total: '3-5 hours' },
        notes: 'Faster onset than oral. Shorter duration. Very painful. Higher bioavailability. Damages nasal tissue.'
      },
      'Rectal': {
        dosage: { threshold: '20-35mg', light: '35-60mg', common: '60-100mg', strong: '100-140mg', heavy: '140mg+' },
        duration: { onset: '10-20 minutes', comeup: '20-40 minutes', peak: '2-3 hours', offset: '2-3 hours', total: '4-6 hours' },
        notes: 'Highest bioavailability. Faster onset than oral. Less dosage needed. Avoids first-pass metabolism.'
      },
      'Sublingual': {
        dosage: { threshold: '25-45mg', light: '45-70mg', common: '70-115mg', strong: '115-165mg', heavy: '165mg+' },
        duration: { onset: '10-25 minutes', comeup: '20-45 minutes', peak: '2-3 hours', offset: '2-3 hours', total: '4-6 hours' },
        notes: 'Dissolve under tongue. Faster onset than swallowing. Bitter taste. Moderate bioavailability improvement.'
      }
    },
    interactions: ['SSRIs (reduce effects, risk of serotonin syndrome)', 'MAOIs (dangerous)', 'Other stimulants', 'Alcohol', 'Tramadol', 'Lithium'],
    harmReduction: [
      'Test substances with reagent kits - many "Molly" contains adulterants',
      'Stay cool and take breaks from dancing',
      'Drink water but do not over-hydrate (500ml per hour)',
      'Wait at least 1-3 months between uses to reduce neurotoxicity',
      'Take supplements (antioxidants, magnesium, 5-HTP after)',
      'Avoid mixing with other substances',
      'Do not use if you have heart conditions',
      'Have trusted friends present'
    ],
    legality: 'Illegal in most countries. Schedule I controlled substance. Special exemptions exist for clinical research and some therapeutic applications.',
    chemistry: {
      formula: 'C11H15NO2',
      molecularWeight: '193.25 g/mol',
      class: 'Phenethylamine derivative'
    },
    history: 'MDMA was first synthesized in 1912 but remained obscure until rediscovered by Alexander Shulgin in the 1970s. It gained popularity in psychotherapy before becoming a popular recreational drug. It was made illegal in the US in 1985.',
    routes: ['Oral', 'Insufflation', 'Rectal', 'Sublingual'],
    afterEffects: 'Comedown lasting 1-3 days including fatigue, low mood, and difficulty concentrating. More severe with frequent use.',
    riskLevel: 'moderate',
    aliases: ['3,4-methylenedioxymethamphetamine', 'methylsafrylamine']
  },

  // Depressants
  {
    id: 'alcohol',
    name: 'Alcohol',
    commonNames: ['Ethanol', 'Booze', 'Liquor', 'Spirits', 'Beer', 'Wine'],
    category: 'depressants',
    class: 'Depressant',
    description: 'Alcohol (ethanol) is one of the oldest and most widely used psychoactive substances in human history. It acts as a central nervous system depressant, enhancing the effects of the inhibitory neurotransmitter GABA while inhibiting the excitatory neurotransmitter NMDA. This produces the characteristic effects of relaxation, disinhibition, and impaired coordination.',
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
      'Oral': {
        dosage: { threshold: '1-2 standard drinks', light: '2-3 drinks', common: '3-5 drinks', strong: '5-8 drinks', heavy: '8+ drinks' },
        duration: { onset: '10-20 minutes', comeup: '20-40 minutes', peak: '45-90 minutes', offset: '2-3 hours', total: '3-6 hours' },
        notes: 'Standard drinking. Food slows absorption. Carbonation may speed absorption. One standard drink = 14g pure ethanol.'
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

  // Dissociatives
  {
    id: 'ketamine',
    name: 'Ketamine',
    commonNames: ['K', 'Special K', 'Ket', 'Vitamin K'],
    category: 'dissociatives',
    class: 'Arylcyclohexylamine',
    description: 'Ketamine is a dissociative anesthetic developed in the 1960s that has both medical applications and recreational use. It acts primarily as an NMDA receptor antagonist, producing anesthesia, analgesia, and at sub-anesthetic doses, dissociative and psychedelic effects. The ketamine experience is characterized by feelings of detachment from the body and environment, often described as a "K-hole" at higher doses.',
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
      'Insufflation': {
        dosage: { threshold: '10-30mg', light: '30-60mg', common: '60-100mg', strong: '100-200mg', heavy: '200mg+' },
        duration: { onset: '5-15 minutes', comeup: '10-20 minutes', peak: '30-60 minutes', offset: '1-2 hours', total: '1-3 hours' },
        notes: 'Most common recreational route. Good bioavailability. Moderate onset speed. Less invasive than IM/IV.'
      },
      'Intramuscular': {
        dosage: { threshold: '25-40mg', light: '40-75mg', common: '75-125mg', strong: '125-200mg', heavy: '200mg+' },
        duration: { onset: '5-10 minutes', comeup: '5-15 minutes', peak: '20-45 minutes', offset: '45-90 minutes', total: '1-2.5 hours' },
        notes: 'Medical standard route. Consistent absorption. Good for controlled dosing. Requires sterile technique.'
      },
      'Intravenous': {
        dosage: { threshold: '10-20mg', light: '20-40mg', common: '40-75mg', strong: '75-150mg', heavy: '150mg+' },
        duration: { onset: '30-60 seconds', comeup: '2-5 minutes', peak: '10-25 minutes', offset: '20-40 minutes', total: '30-75 minutes' },
        notes: 'Fastest onset. Used in medical anesthesia. Very short duration. Requires medical expertise. Not appropriate for recreational use.'
      },
      'Oral': {
        dosage: { threshold: '50-75mg', light: '75-150mg', common: '150-300mg', strong: '300-500mg', heavy: '500mg+' },
        duration: { onset: '15-30 minutes', comeup: '30-60 minutes', peak: '45-90 minutes', offset: '2-4 hours', total: '3-6 hours' },
        notes: 'Low bioavailability (~17%). Much higher doses needed. Longer duration. Less common route.'
      },
      'Sublingual': {
        dosage: { threshold: '25-50mg', light: '50-100mg', common: '100-200mg', strong: '200-300mg', heavy: '300mg+' },
        duration: { onset: '5-15 minutes', comeup: '10-25 minutes', peak: '30-60 minutes', offset: '1-2 hours', total: '1.5-3 hours' },
        notes: 'Better bioavailability than oral. Hold dissolved ketamine under tongue. Bypasses some first-pass metabolism.'
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
    routes: ['Insufflation', 'Intramuscular', 'Intravenous', 'Oral', 'Sublingual'],
    afterEffects: 'Drowsiness and cognitive impairment can last several hours. Antidepressant effects may persist for days to weeks.',
    riskLevel: 'moderate',
    aliases: ['2-(2-chlorophenyl)-2-(methylamino)cyclohexanone']
  },

  // Cannabinoids
  {
    id: 'thc',
    name: 'THC',
    commonNames: ['Delta-9-THC', 'Marijuana', 'Cannabis', 'Weed', 'Pot', 'Dank'],
    category: 'cannabinoids',
    class: 'Cannabinoid',
    description: 'Delta-9-tetrahydrocannabinol (THC) is the primary psychoactive compound in cannabis. It acts primarily as a partial agonist at cannabinoid receptors CB1 and CB2, producing the characteristic effects of cannabis intoxication including euphoria, relaxation, altered perception, and increased appetite.',
    effects: {
      positive: ['Relaxation and stress relief', 'Euphoria and elevated mood', 'Enhanced sensory perception', 'Increased appreciation of music and food', 'Creativity enhancement', 'Pain relief', 'Nausea relief'],
      neutral: ['Altered perception of time', 'Increased appetite ("munchies")', 'Dry mouth', 'Red eyes', 'Slowed reaction time'],
      negative: ['Anxiety and paranoia', 'Impaired memory and cognition', 'Panic attacks in susceptible individuals', 'Coordination impairment', 'Increased heart rate', 'Possible exacerbation of mental health issues', 'Cannabis use disorder']
    },
    dosage: {
      threshold: '1-2.5mg',
      light: '2.5-5mg',
      common: '5-15mg',
      strong: '15-30mg',
      heavy: '30mg+'
    },
    duration: {
      onset: 'Minutes (smoking/vaping), 30-90min (edibles)',
      comeup: '15-30min (smoking), 1-2hrs (edibles)',
      peak: '30-60min (smoking), 2-4hrs (edibles)',
      offset: '1-3 hours (smoking), 4-8 hours (edibles)',
      total: '2-4 hours (smoking), 6-12 hours (edibles)'
    },
    routeData: {
      'Inhalation': {
        dosage: { threshold: '1-2.5mg THC', light: '2.5-5mg', common: '5-10mg', strong: '10-20mg', heavy: '20mg+' },
        duration: { onset: '1-5 minutes', comeup: '5-15 minutes', peak: '20-45 minutes', offset: '1-2 hours', total: '2-3 hours' },
        notes: 'Smoking or vaping dried flower. Very fast onset. Easy to titrate dose. Vaping at lower temperatures produces cleaner vapor.'
      },
      'Oral': {
        dosage: { threshold: '2.5-5mg', light: '5-10mg', common: '10-25mg', strong: '25-50mg', heavy: '50mg+' },
        duration: { onset: '30-90 minutes', comeup: '1-2 hours', peak: '2-4 hours', offset: '4-8 hours', total: '6-12 hours' },
        notes: 'Edibles and capsules. Much longer onset and duration. Effects are stronger and more body-focused. Very easy to accidentally overdose - wait at least 2 hours before redosing.'
      },
      'Sublingual': {
        dosage: { threshold: '1-2.5mg', light: '2.5-5mg', common: '5-15mg', strong: '15-30mg', heavy: '30mg+' },
        duration: { onset: '15-30 minutes', comeup: '20-45 minutes', peak: '1-2 hours', offset: '2-4 hours', total: '3-6 hours' },
        notes: 'Tinctures held under tongue. Faster than edibles, slower than inhalation. More predictable than edibles.'
      },
      'Topical': {
        dosage: { threshold: 'N/A (non-psychoactive)', light: 'N/A', common: 'N/A', strong: 'N/A', heavy: 'N/A' },
        duration: { onset: '15-45 minutes', comeup: 'N/A', peak: '2-4 hours', offset: 'Gradual', total: '4-6 hours' },
        notes: 'Creams and balms. Non-psychoactive - does not cross blood-brain barrier. Localized pain and inflammation relief only.'
      }
    },
    interactions: ['Alcohol', 'Other depressants', 'Stimulants', 'SSRIs', 'Antipsychotics'],
    harmReduction: [
      'Start low and go slow, especially with edibles',
      'Wait at least 2 hours before redosing edibles',
      'Avoid driving while impaired',
      'Be aware that edible effects are stronger and longer-lasting',
      'Choose a safe, comfortable environment',
      'Have snacks and water available',
      'Avoid if you have a personal or family history of psychosis',
      'CBD can help counteract anxiety from too much THC'
    ],
    legality: 'Varies widely. Legal for recreational use in some jurisdictions. Medical use legal in many more. Still federally illegal in the US but legal in many states.',
    chemistry: {
      formula: 'C21H30O2',
      molecularWeight: '314.46 g/mol',
      class: 'Cannabinoid'
    },
    history: 'Cannabis has been used for thousands of years for fiber, medicine, and psychoactive purposes. THC was first isolated in 1964. The plant has a complex legal and cultural history, with prohibition in the 20th century followed by ongoing legalization efforts.',
    routes: ['Inhalation', 'Oral', 'Sublingual', 'Topical'],
    afterEffects: 'Possible grogginess or residual effects the next day. Some report enhanced mood and relaxation.',
    riskLevel: 'low',
    aliases: ['delta-9-tetrahydrocannabinol', 'tetrahydrocannabinol']
  },

  // Opioids
  {
    id: 'heroin',
    name: 'Heroin',
    commonNames: ['H', 'Dope', 'Smack', 'Junk', 'Horse', 'Brown'],
    category: 'opioids',
    class: 'Opioid',
    description: 'Heroin (diacetylmorphine) is an opioid drug derived from morphine, which comes from the opium poppy. It acts primarily on mu-opioid receptors, producing intense euphoria, pain relief, and sedation. Heroin is highly addictive and carries significant risks of overdose, particularly given its variable purity and presence of adulterants like fentanyl.',
    effects: {
      positive: ['Intense euphoria', 'Powerful pain relief', 'Deep relaxation', 'Relief from anxiety and stress', 'Warm sensation throughout body'],
      neutral: ['Sedation', 'Pupil constriction', 'Constipation', 'Itching', 'Nausea'],
      negative: ['Extreme addiction potential', 'Respiratory depression (overdose risk)', 'Risk of death from overdose', 'Severe withdrawal symptoms', 'Risk of infectious disease from injection', 'Social and financial destruction', 'Cognitive impairment with chronic use']
    },
    dosage: {
      threshold: '5-10mg',
      light: '10-20mg',
      common: '20-40mg',
      strong: '40-60mg',
      heavy: '60mg+'
    },
    duration: {
      onset: 'Seconds (IV), 5-10min (snorted)',
      comeup: '1-5 minutes',
      peak: '15-30 minutes',
      offset: '2-4 hours',
      total: '4-6 hours'
    },
    routeData: {
      'Intravenous': {
        dosage: { threshold: '3-5mg', light: '5-15mg', common: '15-30mg', strong: '30-50mg', heavy: '50mg+' },
        duration: { onset: '5-30 seconds', comeup: '1-3 minutes', peak: '10-20 minutes', offset: '2-4 hours', total: '3-5 hours' },
        notes: 'Most intense rush. 100% bioavailability. HIGHEST overdose risk. Disease transmission risk. Requires sterile equipment. NEVER share needles.'
      },
      'Insufflation': {
        dosage: { threshold: '5-10mg', light: '10-25mg', common: '25-50mg', strong: '50-80mg', heavy: '80mg+' },
        duration: { onset: '5-10 minutes', comeup: '5-15 minutes', peak: '15-30 minutes', offset: '2-4 hours', total: '3-5 hours' },
        notes: 'Snorting. Lower bioavailability than IV (~45%). Nasal tissue damage over time. Transition from this route to IV is common and extremely dangerous.'
      },
      'Smoking': {
        dosage: { threshold: '10-15mg', light: '15-30mg', common: '30-60mg', strong: '60-100mg', heavy: '100mg+' },
        duration: { onset: '3-10 minutes', comeup: '5-15 minutes', peak: '20-40 minutes', offset: '2-4 hours', total: '3-5 hours' },
        notes: 'Chasing the dragon. Lower bioavailability. Avoids injection risks. Still highly addictive.'
      },
      'Intramuscular': {
        dosage: { threshold: '5-10mg', light: '10-20mg', common: '20-40mg', strong: '40-60mg', heavy: '60mg+' },
        duration: { onset: '5-15 minutes', comeup: '10-20 minutes', peak: '15-35 minutes', offset: '2-4 hours', total: '3-5 hours' },
        notes: 'Muscling. More painful than IV. Slower onset. Risk of abscesses. Still very high overdose risk.'
      }
    },
    interactions: ['Benzodiazepines (extremely dangerous)', 'Alcohol (dangerous)', 'Other opioids', 'Stimulants', 'Antihistamines'],
    harmReduction: [
      'Never use alone - have someone who can call for help',
      'Always have naloxone (Narcan) available',
      'Test substances for fentanyl',
      'Never combine with benzodiazepines or alcohol',
      'Use sterile equipment',
      'Start with small amounts due to variable purity',
      'Consider medication-assisted treatment (methadone, buprenorphine)',
      'Seek help for addiction'
    ],
    legality: 'Illegal in all countries. Schedule I controlled substance with severe penalties for possession, distribution, and manufacture.',
    chemistry: {
      formula: 'C21H23NO5',
      molecularWeight: '369.41 g/mol',
      class: 'Semi-synthetic opioid'
    },
    history: 'Heroin was first synthesized in 1874 and was originally marketed as a non-addictive morphine substitute. It was used medicinally before its addictive properties were fully understood. It has been illegal for non-medical use in most countries since the early 20th century.',
    routes: ['Intravenous', 'Insufflation', 'Smoking', 'Intramuscular'],
    afterEffects: 'Severe withdrawal symptoms begin within 6-24 hours and peak at 2-3 days. Post-acute withdrawal can last months.',
    riskLevel: 'very-high',
    aliases: ['diacetylmorphine', 'diamorphine']
  },

  // Additional substances without route data
  {
    id: 'kratom',
    name: 'Kratom',
    commonNames: ['Mitragyna speciosa', 'Kratom', 'Kray', 'Thang', 'Ketum'],
    category: 'opioids',
    class: 'Opioid-like',
    description: 'Kratom (Mitragyna speciosa) is a tropical tree native to Southeast Asia whose leaves contain psychoactive compounds, primarily mitragynine and 7-hydroxymitragynine. At low doses, kratom has stimulant effects; at higher doses, it has opioid-like effects. It acts on mu, delta, and kappa opioid receptors, though with a different profile than traditional opioids.',
    effects: {
      positive: ['Pain relief', 'Energy and focus (low doses)', 'Anxiety relief', 'Mood elevation', 'Opioid withdrawal relief', 'Relaxation (higher doses)'],
      neutral: ['Altered perception', 'Appetite suppression', 'Sweating', 'Itching'],
      negative: ['Nausea and vomiting', 'Constipation', 'Dependence with regular use', 'Withdrawal symptoms', 'Dizziness', 'Respiratory depression at very high doses', 'Potential liver toxicity']
    },
    dosage: {
      threshold: '1-2g',
      light: '2-4g',
      common: '4-8g',
      strong: '8-15g',
      heavy: '15g+'
    },
    duration: {
      onset: '10-20 minutes',
      comeup: '20-40 minutes',
      peak: '1-2 hours',
      offset: '2-4 hours',
      total: '4-6 hours'
    },
    routeData: {
      'Oral': {
        dosage: { threshold: '1-2g', light: '2-4g', common: '4-8g', strong: '8-15g', heavy: '15g+' },
        duration: { onset: '10-20 minutes', comeup: '20-40 minutes', peak: '1-2 hours', offset: '2-4 hours', total: '4-6 hours' },
        notes: 'Powder or capsules. Toss and wash or mix with liquid. Most common method.'
      },
      'Tea': {
        dosage: { threshold: '1-2g', light: '2-4g', common: '4-8g', strong: '8-15g', heavy: '15g+' },
        duration: { onset: '15-30 minutes', comeup: '20-40 minutes', peak: '1-2 hours', offset: '2-3 hours', total: '3-5 hours' },
        notes: 'Brewing leaves or powder in hot water. Slightly faster onset. May reduce nausea compared to powder.'
      }
    },
    interactions: ['Other opioids', 'Benzodiazepines', 'Alcohol', 'Antidepressants', 'Stimulants'],
    harmReduction: [
      'Start with low doses to assess sensitivity',
      'Avoid daily use to prevent dependence',
      'Take breaks to maintain effectiveness',
      'Do not combine with other depressants',
      'Be aware of strain differences (red, white, green)',
      'Stay hydrated',
      'Monitor for signs of dependence',
      'Do not drive while impaired'
    ],
    legality: 'Legal in most US states but regulated in some. Banned in several countries and some US states. FDA has issued warnings but no federal ban.',
    chemistry: {
      formula: 'C22H31NO6 (mitragynine)',
      molecularWeight: '398.49 g/mol',
      class: 'Indole alkaloid'
    },
    history: 'Kratom has been used traditionally in Southeast Asia for centuries as a stimulant for laborers and as a remedy for various ailments. It gained popularity in the West in the 2000s as a natural supplement and opioid alternative.',
    routes: ['Oral', 'Tea'],
    afterEffects: 'Mild afterglow possible. Withdrawal symptoms can occur with regular use.',
    riskLevel: 'moderate',
    aliases: ['mitragynine', 'Mitragyna speciosa']
  },
  {
    id: 'nitrous-oxide',
    name: 'Nitrous Oxide',
    commonNames: ['N2O', 'Laughing Gas', 'Whippets', 'Nos', 'Nangs'],
    category: 'dissociatives',
    class: 'NMDA Antagonist',
    description: 'Nitrous oxide (N2O) is a colorless, non-flammable gas with a slightly sweet odor and taste. It has legitimate medical uses as an anesthetic and analgesic, and is also used as a propellant in whipped cream canisters. When inhaled, nitrous oxide produces rapid-onset dissociative effects, euphoria, and laughter.',
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
      'Inhalation': {
        dosage: { threshold: '1-2 breaths from balloon', light: '2-4 breaths', common: '1 full balloon', strong: '2-3 balloons', heavy: '3+ balloons' },
        duration: { onset: '5-15 seconds', comeup: '10-30 seconds', peak: '30-60 seconds', offset: '1-2 minutes', total: '1-5 minutes' },
        notes: 'Use a balloon as intermediary - never directly from canister. Breathe air between doses. Sit or lie down to prevent falls.'
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
    id: 'mescaline',
    name: 'Mescaline',
    commonNames: ['Peyote', 'San Pedro', 'Cactus', 'Buttons'],
    category: 'hallucinogens',
    class: 'Phenethylamine',
    description: 'Mescaline is a naturally occurring psychedelic alkaloid found in several species of cactus, most notably peyote (Lophophora williamsii) and San Pedro (Echinopsis pachanoi). It is one of the oldest known psychedelic substances, with evidence of use dating back over 5,000 years.',
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
      'Oral': {
        dosage: { threshold: '50-100mg', light: '100-200mg', common: '200-400mg', strong: '400-600mg', heavy: '600mg+' },
        duration: { onset: '45-90 minutes', comeup: '1-2 hours', peak: '4-6 hours', offset: '4-6 hours', total: '10-14 hours' },
        notes: 'Cactus material, dried buttons, or extracted HCl salt. Fasting before use reduces nausea. Very bitter taste.'
      },
      'Sublingual': {
        dosage: { threshold: '40-80mg', light: '80-160mg', common: '160-320mg', strong: '320-480mg', heavy: '480mg+' },
        duration: { onset: '30-60 minutes', comeup: '45-90 minutes', peak: '3.5-5.5 hours', offset: '3-5 hours', total: '8-12 hours' },
        notes: 'Dissolved salt form held under tongue. Faster onset, better bioavailability. Extremely bitter.'
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
    routes: ['Oral', 'Sublingual'],
    afterEffects: 'Prolonged afterglow possible. Fatigue from long duration. Some report lasting positive changes.',
    riskLevel: 'moderate',
    aliases: ['3,4,5-trimethoxyphenethylamine']
  },
  {
    id: 'dxm',
    name: 'DXM',
    commonNames: ['Dextromethorphan', 'Robo', 'Dex', 'Triple C', 'Skittles'],
    category: 'dissociatives',
    class: 'Morphinan',
    description: 'Dextromethorphan (DXM) is a dissociative substance and cough suppressant found in many over-the-counter cold and cough medications. At therapeutic doses, it acts as a cough suppressant without significant psychoactive effects. At higher doses, DXM acts as an NMDA receptor antagonist, producing dissociative and psychedelic effects.',
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
      'Oral': {
        dosage: { threshold: '1.5-2.5mg/kg', light: '2.5-5mg/kg', common: '5-7.5mg/kg', strong: '7.5-15mg/kg', heavy: '15mg/kg+' },
        duration: { onset: '30-60 minutes', comeup: '1-2 hours', peak: '3-5 hours', offset: '3-6 hours', total: '6-12 hours' },
        notes: 'Only use products with DXM as the SOLE active ingredient. Gel caps have faster onset than syrup. Avoid anything with acetaminophen, guaifenesin, or antihistamines.'
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
  },
  {
    id: 'salvia',
    name: 'Salvia divinorum',
    commonNames: ['Salvia', 'Diviner\'s Sage', 'Sally D', 'Maria Pastora', 'Magic Mint'],
    category: 'hallucinogens',
    class: 'Diterpenoid',
    description: 'Salvia divinorum is a psychoactive plant native to the Sierra Mazateca region of Oaxaca, Mexico. Its active compound, salvinorin A, is the most potent naturally occurring psychedelic known, active at microgram doses. Unlike classic psychedelics, salvinorin A is a kappa opioid receptor agonist rather than a serotonin receptor agonist.',
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
      'Smoking': {
        dosage: { threshold: '1/4 leaf (weak extract)', light: '0.1g 5x extract', common: '0.1g 10x extract', strong: '0.1g 20x extract', heavy: '0.2g+ 20x+' },
        duration: { onset: '30-60 seconds', comeup: '1-2 minutes', peak: '5-15 minutes', offset: '15-30 minutes', total: '20-45 minutes' },
        notes: 'Most common method. Use a lighter with a powerful flame, hold smoke in. Onset within 1-2 hits. Sit or lie down before inhaling.'
      },
      'Sublingual': {
        dosage: { threshold: '2-8g fresh leaves', light: '8-16g fresh leaves', common: '16-30g fresh leaves', strong: '30-50g fresh leaves', heavy: '50g+ fresh leaves' },
        duration: { onset: '5-15 minutes', comeup: '15-30 minutes', peak: '30-60 minutes', offset: '30-60 minutes', total: '1-2 hours' },
        notes: 'Traditional Mazatec method. Chew fresh leaves slowly (quid) and hold juice under tongue. Milder, more gradual experience. Much longer duration than smoking.'
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
    routes: ['Smoking', 'Sublingual'],
    afterEffects: 'Rapid return to baseline. Some report lingering introspection.',
    riskLevel: 'high',
    aliases: ['salvinorin A', 'Diviner\'s sage']
  },
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
      'Oral': {
        dosage: { threshold: '5-10mg', light: '10-25mg', common: '25-50mg', strong: '50-100mg', heavy: '100mg+' },
        duration: { onset: '20-45 minutes', comeup: '30-60 minutes', peak: '2-4 hours', offset: '2-4 hours', total: '4-8 hours' },
        notes: 'Standard therapeutic route. Smooth onset. Empty stomach speeds absorption.'
      },
      'Insufflation': {
        dosage: { threshold: '3-7mg', light: '7-20mg', common: '20-40mg', strong: '40-75mg', heavy: '75mg+' },
        duration: { onset: '5-15 minutes', comeup: '15-30 minutes', peak: '1-2 hours', offset: '2-3 hours', total: '3-6 hours' },
        notes: 'Faster onset. Nasal tissue damage. Higher addiction potential due to rapid onset. Not recommended.'
      },
      'Intravenous': {
        dosage: { threshold: '2-5mg', light: '5-15mg', common: '15-30mg', strong: '30-60mg', heavy: '60mg+' },
        duration: { onset: '10-30 seconds', comeup: '1-5 minutes', peak: '20-60 minutes', offset: '1-3 hours', total: '2-5 hours' },
        notes: '100% bioavailability. Intense rush. Very high addiction potential. Serious health risks.'
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
    routes: ['Oral', 'Insufflation', 'Intravenous'],
    afterEffects: 'Comedown can include depression, fatigue, and cravings. Sleep disruption common.',
    riskLevel: 'moderate',
    aliases: ['alpha-methylphenethylamine', 'racemic amphetamine']
  },
  {
    id: 'ghb',
    name: 'GHB',
    commonNames: ['G', 'Liquid E', 'Fantasy', 'Georgia Home Boy', 'Gamma Hydroxybutyrate'],
    category: 'depressants',
    class: 'GABA Metabolite',
    description: 'GHB (gamma-hydroxybutyric acid) is a naturally occurring neurotransmitter and psychoactive drug. It acts on GHB receptors and GABA-B receptors, producing euphoria, increased sociability, and relaxation at low doses, and sedation and unconsciousness at higher doses.',
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
      'Oral': {
        dosage: { threshold: '0.5-1g', light: '1-1.5g', common: '1.5-2.5g', strong: '2.5-3.5g', heavy: '3.5g+' },
        duration: { onset: '10-20 minutes', comeup: '20-40 minutes', peak: '1-2 hours', offset: '1-2 hours', total: '2-4 hours' },
        notes: 'Dilute in water before drinking. Use a measuring syringe for accuracy. NEVER combine with alcohol. Effects can differ greatly between individuals.'
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
    routes: ['Oral'],
    afterEffects: 'Grogginess. Unexpected sleep episodes possible.',
    riskLevel: 'high',
    aliases: ['gamma-hydroxybutyric acid', 'sodium oxybate']
  },
  {
    id: 'alprazolam',
    name: 'Alprazolam',
    commonNames: ['Xanax', 'Xanny', 'Bars', 'Ladders', 'Zannies', 'Blue Footballs'],
    category: 'depressants',
    class: 'Benzodiazepine',
    description: 'Alprazolam is a short-acting benzodiazepine used primarily for anxiety and panic disorders. It acts as a positive allosteric modulator at GABA-A receptors, producing anxiolytic, sedative, and muscle relaxant effects. Alprazolam is one of the most commonly prescribed and abused benzodiazepines, with significant dependence potential.',
    effects: {
      positive: ['Anxiety relief', 'Panic attack prevention', 'Relaxation', 'Sleep induction', 'Muscle relaxation'],
      neutral: ['Sedation', 'Impaired coordination', 'Anterograde amnesia', 'Slurred speech'],
      negative: ['High addiction potential', 'Severe withdrawal syndrome', 'Cognitive impairment', 'Paradoxical reactions', 'Overdose risk with other depressants', 'Blackouts']
    },
    dosage: {
      threshold: '0.25-0.5mg',
      light: '0.5-1mg',
      common: '1-2mg',
      strong: '2-4mg',
      heavy: '4mg+'
    },
    duration: {
      onset: '15-45 minutes (oral)',
      comeup: '30-60 minutes',
      peak: '1-2 hours',
      offset: '2-4 hours',
      total: '4-6 hours'
    },
    routeData: {
      'Oral': {
        dosage: { threshold: '0.25-0.5mg', light: '0.5-1mg', common: '1-2mg', strong: '2-4mg', heavy: '4mg+' },
        duration: { onset: '15-45 minutes', comeup: '30-60 minutes', peak: '1-2 hours', offset: '2-4 hours', total: '4-6 hours' },
        notes: 'Standard route. Can be taken with food to reduce GI upset.'
      },
      'Sublingual': {
        dosage: { threshold: '0.25-0.5mg', light: '0.5-1mg', common: '1-2mg', strong: '2-4mg', heavy: '4mg+' },
        duration: { onset: '5-15 minutes', comeup: '15-30 minutes', peak: '45-90 minutes', offset: '2-3 hours', total: '3-5 hours' },
        notes: 'Dissolve under tongue. Faster onset than oral. Useful for panic attacks requiring rapid relief.'
      },
      'Rectal': {
        dosage: { threshold: '0.2-0.4mg', light: '0.4-0.8mg', common: '0.8-1.5mg', strong: '1.5-3mg', heavy: '3mg+' },
        duration: { onset: '10-20 minutes', comeup: '20-40 minutes', peak: '1-2 hours', offset: '2-4 hours', total: '3-5 hours' },
        notes: 'Higher bioavailability. Faster than oral. Avoids first-pass metabolism.'
      }
    },
    interactions: ['Alcohol (dangerous)', 'Opioids (dangerous)', 'Other benzodiazepines', 'CNS depressants', 'Ketoconazole', 'Grapefruit juice'],
    harmReduction: [
      'High addiction potential - avoid daily use',
      'Never combine with opioids or alcohol',
      'Withdrawal can be life-threatening - taper gradually',
      'Can cause blackouts and memory loss',
      'Do not drive while affected',
      'Short-acting - may cause interdose withdrawal'
    ],
    legality: 'Prescription only. Schedule IV controlled substance in the US.',
    chemistry: {
      formula: 'C17H13ClN4',
      molecularWeight: '308.76 g/mol',
      class: 'Triazolobenzodiazepine'
    },
    history: 'Alprazolam was first synthesized in 1969 and approved in the US in 1981. It became the most prescribed benzodiazepine in the US.',
    routes: ['Oral', 'Sublingual', 'Rectal'],
    afterEffects: 'Sedation, possible amnesia. Withdrawal symptoms can include seizures.',
    riskLevel: 'high',
    aliases: ['8-chloro-1-methyl-6-phenyl-4H-[1,2,4]triazolo[4,3-a][1,4]benzodiazepine']
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
      'Oral': {
        dosage: { threshold: '50-100mg', light: '100-200mg', common: '200-400mg', strong: '400-600mg', heavy: '600mg+' },
        duration: { onset: '30-60 minutes', comeup: '1-2 hours', peak: '2-4 hours', offset: '4-8 hours', total: '12-15 hours' },
        notes: 'Only intended for oral use. Take in the morning due to long duration. Food may delay onset slightly.'
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
    id: 'fentanyl',
    name: 'Fentanyl',
    commonNames: ['Duragesic', 'Sublimaze', 'China White', 'Apache', 'Dance Fever'],
    category: 'opioids',
    class: 'Opioid Analgesic',
    description: 'Fentanyl is a potent synthetic opioid approximately 50-100 times more potent than morphine. It is used medically for anesthesia and severe pain management. Illicitly manufactured fentanyl has become a major cause of opioid overdose deaths. Fentanyl acts as a μ-opioid receptor agonist with rapid onset and short duration.',
    effects: {
      positive: ['Extremely potent pain relief', 'Intense euphoria', 'Strong sedation', 'Rapid onset'],
      neutral: ['Pupil constriction', 'Sedation', 'Constipation', 'Sweating'],
      negative: ['Severe respiratory depression', 'Very high overdose risk', 'High addiction potential', 'Nausea and vomiting', 'Chest wall rigidity']
    },
    dosage: {
      threshold: '25-50μg',
      light: '50-100μg',
      common: '100-250μg',
      strong: '250-500μg',
      heavy: '500μg+'
    },
    duration: {
      onset: '1-2 minutes (IV), 5-15 minutes (transdermal)',
      comeup: '5-15 minutes',
      peak: '15-30 minutes',
      offset: '30-60 minutes',
      total: '1-2 hours (IV), 72 hours (patch)'
    },
    routeData: {
      'Transdermal': {
        dosage: { threshold: '12.5μg/h patch', light: '12.5-25μg/h', common: '25-50μg/h', strong: '50-100μg/h', heavy: '100μg/h+' },
        duration: { onset: '12-24 hours (to steady state)', comeup: '24-48 hours', peak: 'Continuous delivery', offset: '12-24 hours post-removal', total: '72 hours per patch' },
        notes: 'Medical use only. Slow, continuous absorption through skin. Takes many hours to reach steady state. Apply to clean, dry, hairless skin.'
      },
      'Intravenous': {
        dosage: { threshold: '5-15μg', light: '15-30μg', common: '30-75μg', strong: '75-150μg', heavy: '150μg+' },
        duration: { onset: '1-2 minutes', comeup: '2-5 minutes', peak: '5-15 minutes', offset: '20-40 minutes', total: '30-60 minutes' },
        notes: 'Medical anesthesia context. Extremely rapid. Microgram doses - any imprecision is life-threatening. Requires medical expertise.'
      },
      'Sublingual': {
        dosage: { threshold: '50-100μg', light: '100-200μg', common: '200-400μg', strong: '400-800μg', heavy: '800μg+' },
        duration: { onset: '5-15 minutes', comeup: '15-30 minutes', peak: '20-40 minutes', offset: '30-90 minutes', total: '1-2 hours' },
        notes: 'Prescription sublingual films/tablets (Subsys, Abstral). Medical use only for cancer pain breakthrough.'
      },
      'Intranasal': {
        dosage: { threshold: '20-50μg', light: '50-100μg', common: '100-200μg', strong: '200-400μg', heavy: '400μg+' },
        duration: { onset: '5-10 minutes', comeup: '10-20 minutes', peak: '15-30 minutes', offset: '30-60 minutes', total: '45-90 minutes' },
        notes: 'Illicit use of IV formulation or pharmaceutical spray. EXTREMELY dangerous. Rapid onset with very narrow margin of safety.'
      },
      'Smoking': {
        dosage: { threshold: '20-50μg', light: '50-100μg', common: '100-200μg', strong: '200-400μg', heavy: '400μg+' },
        duration: { onset: '1-5 minutes', comeup: '3-10 minutes', peak: '10-25 minutes', offset: '20-50 minutes', total: '30-75 minutes' },
        notes: 'Illicit use only. High overdose risk. Doses extremely difficult to control. Many deaths from this route.'
      }
    },
    interactions: ['All CNS depressants are dangerous', 'Benzodiazepines', 'Alcohol', 'Other opioids', 'MAOIs', 'CYP3A4 inhibitors'],
    harmReduction: [
      'EXTREMELY potent - micrograms can be fatal',
      'Always have multiple doses of naloxone available',
      'Test substances with fentanyl test strips',
      'Never use alone',
      'Start with tiny amounts if substance may contain fentanyl',
      'Do not handle powder - can absorb through skin',
      'Call emergency services immediately if overdose suspected'
    ],
    legality: 'Prescription only. Schedule II controlled substance in the US. Illicit manufacture and distribution carries severe penalties.',
    chemistry: {
      formula: 'C22H28N2O',
      molecularWeight: '336.47 g/mol',
      class: 'Synthetic opioid (piperidine derivative)'
    },
    history: 'Fentanyl was first synthesized in 1960 by Janssen Pharmaceuticals. It became widely used medically and later became a major public health concern when illicitly manufactured fentanyl began appearing in street drugs.',
    routes: ['Transdermal', 'Intravenous', 'Intranasal', 'Sublingual', 'Smoking'],
    afterEffects: 'Short duration but intense. High risk of fatal overdose.',
    riskLevel: 'very-high',
    aliases: ['N-(1-phenethyl-4-piperidinyl)-N-phenylpropanamide']
  },
  {
    id: '2c-b',
    name: '2C-B',
    commonNames: ['Bees', 'Nexus', 'Bromo', 'Venus', 'Erox'],
    category: 'hallucinogens',
    class: 'Phenethylamine',
    description: '2C-B (2,5-dimethoxy-4-bromophenethylamine) is a synthetic psychedelic of the 2C family, first synthesized by Alexander Shulgin in 1974. It produces a unique combination of psychedelic and empathogenic effects, often described as a cross between LSD and MDMA.',
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
      'Oral': {
        dosage: { threshold: '5-10mg', light: '10-15mg', common: '15-25mg', strong: '25-35mg', heavy: '35mg+' },
        duration: { onset: '30-60 minutes', comeup: '30-60 minutes', peak: '2-4 hours', offset: '2-3 hours', total: '4-8 hours' },
        notes: 'Standard route. Stomach contents can affect onset. Capsules are most common.'
      },
      'Insufflation': {
        dosage: { threshold: '3-7mg', light: '7-12mg', common: '12-20mg', strong: '20-30mg', heavy: '30mg+' },
        duration: { onset: '5-15 minutes', comeup: '10-20 minutes', peak: '1-2.5 hours', offset: '1-2 hours', total: '3-5 hours' },
        notes: 'WARNING: Extremely painful. Often described as one of the most painful drug insufflations. Faster onset and shorter duration. Lower dose needed.'
      },
      'Rectal': {
        dosage: { threshold: '4-8mg', light: '8-13mg', common: '13-22mg', strong: '22-30mg', heavy: '30mg+' },
        duration: { onset: '10-20 minutes', comeup: '20-40 minutes', peak: '1.5-3.5 hours', offset: '2-3 hours', total: '4-7 hours' },
        notes: 'Higher bioavailability than oral. Avoids the severe pain of insufflation. Faster onset than oral.'
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
    routes: ['Oral', 'Insufflation', 'Rectal'],
    afterEffects: 'Mild afterglow possible. Some report fatigue the next day.',
    riskLevel: 'moderate',
    aliases: ['2,5-dimethoxy-4-bromophenethylamine']
  },
  {
    id: 'piracetam',
    name: 'Piracetam',
    commonNames: ['Nootropil', 'Pira', 'Nootrop'],
    category: 'nootropics',
    class: 'Racetam',
    description: 'Piracetam is the original nootropic compound, first synthesized in 1964. It is a cyclic derivative of GABA and is thought to enhance cognitive function through modulation of neurotransmitter systems and improved neuronal membrane fluidity. Piracetam is widely used as a cognitive enhancer and has a long history of relatively safe use.',
    effects: {
      positive: ['Improved memory and learning', 'Enhanced focus', 'Better verbal fluency', 'Neuroprotective properties'],
      neutral: ['Mild stimulation', 'Increased dream vividness'],
      negative: ['Headaches (common without choline source)', 'Mild anxiety', 'Sleep disruption if taken late']
    },
    dosage: {
      threshold: '400-800mg',
      light: '800-1600mg',
      common: '1600-3200mg',
      strong: '3200-4800mg',
      heavy: '4800mg+'
    },
    duration: {
      onset: '30-60 minutes',
      comeup: '1-2 hours',
      peak: '2-4 hours',
      offset: '4-6 hours',
      total: '6-8 hours'
    },
    interactions: ['Choline supplements (synergistic)', 'Other racetams', 'Stimulants'],
    harmReduction: [
      'Take with a choline source to prevent headaches',
      'Effects may take weeks of daily use to become noticeable',
      'Start with lower doses to assess tolerance',
      'Avoid taking late in the day',
      'Very low toxicity profile'
    ],
    legality: 'Unscheduled in US. Available as supplement. Prescription in some countries.',
    chemistry: {
      formula: 'C6H10N2O2',
      molecularWeight: '142.16 g/mol',
      class: 'Racetam'
    },
    history: 'Piracetam was first synthesized in 1964 by Romanian chemist Corneliu E. Giurgea, who coined the term "nootropic."',
    routes: ['Oral'],
    afterEffects: 'Generally minimal. Effects accumulate with regular use.',
    riskLevel: 'low',
    aliases: ['2-oxo-1-pyrrolidine acetamide']
  },
];

// Helper functions
export function getSubstanceById(id: string): Substance | undefined {
  return substances.find(s => s.id === id);
}

export function getSubstancesByCategory(category: SubstanceCategory): Substance[] {
  return substances.filter(s => s.category === category);
}

export function getCategoryInfo(category: SubstanceCategory): CategoryInfo | undefined {
  return categories.find(c => c.id === category);
}

export function searchSubstances(query: string): Substance[] {
  const lowerQuery = query.toLowerCase();
  return substances.filter(s => 
    s.name.toLowerCase().includes(lowerQuery) ||
    s.commonNames.some(n => n.toLowerCase().includes(lowerQuery)) ||
    s.aliases.some(a => a.toLowerCase().includes(lowerQuery)) ||
    s.description.toLowerCase().includes(lowerQuery)
  );
}
