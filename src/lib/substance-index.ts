// Psychoactive Substances Documentation - Main Export File

// Re-export types
export type { 
  Substance, 
  SubstanceCategory, 
  CategoryInfo, 
  RouteDosageDuration 
} from './types';

// Re-export categories
export { categories, categoryColors } from './categories';

// Re-export substances by category
export { stimulants } from './substances/stimulants';
export { hallucinogens } from './substances/hallucinogens';
export { depressants } from './substances/depressants';
export { dissociatives } from './substances/dissociatives';
export { empathogens } from './substances/empathogens';
export { cannabinoids } from './substances/cannabinoids';
export { opioids } from './substances/opioids';
export { deliriants } from './substances/deliriants';
export { nootropics } from './substances/nootropics';

// Import for helper functions
import { Substance, SubstanceCategory, CategoryInfo } from './types';
import { categories } from './categories';
import { stimulants } from './substances/stimulants';
import { hallucinogens } from './substances/hallucinogens';
import { depressants } from './substances/depressants';
import { dissociatives } from './substances/dissociatives';
import { empathogens } from './substances/empathogens';
import { cannabinoids } from './substances/cannabinoids';
import { opioids } from './substances/opioids';
import { deliriants } from './substances/deliriants';
import { nootropics } from './substances/nootropics';

// Combine all substances into a single array
export const substances: Substance[] = [
  ...stimulants,
  ...hallucinogens,
  ...depressants,
  ...dissociatives,
  ...empathogens,
  ...cannabinoids,
  ...opioids,
  ...deliriants,
  ...nootropics
];

// Map for quick category lookup
const substancesByCategory: Record<SubstanceCategory, Substance[]> = {
  stimulants,
  hallucinogens,
  depressants,
  dissociatives,
  empathogens,
  cannabinoids,
  opioids,
  deliriants,
  nootropics
};

/**
 * Get a substance by its unique ID
 * @param id - The unique identifier of the substance
 * @returns The substance object or undefined if not found
 */
export function getSubstanceById(id: string): Substance | undefined {
  return substances.find(s => s.id === id);
}

/**
 * Get all substances in a specific category
 * @param category - The category to filter by
 * @returns Array of substances in the specified category
 */
export function getSubstancesByCategory(category: SubstanceCategory): Substance[] {
  return substancesByCategory[category] || [];
}

/**
 * Get category information by category ID
 * @param category - The category ID
 * @returns The category information object or undefined if not found
 */
export function getCategoryInfo(category: SubstanceCategory): CategoryInfo | undefined {
  return categories.find(c => c.id === category);
}

/**
 * Search substances by name, common names, aliases, or description
 * @param query - The search query
 * @returns Array of matching substances
 */
export function searchSubstances(query: string): Substance[] {
  const lowerQuery = query.toLowerCase().trim();
  if (!lowerQuery) return [];
  
  return substances.filter(s => 
    s.name.toLowerCase().includes(lowerQuery) ||
    s.commonNames.some(n => n.toLowerCase().includes(lowerQuery)) ||
    s.aliases.some(a => a.toLowerCase().includes(lowerQuery)) ||
    s.description.toLowerCase().includes(lowerQuery)
  );
}

/**
 * Get all substance IDs
 * @returns Array of all substance IDs
 */
export function getAllSubstanceIds(): string[] {
  return substances.map(s => s.id);
}

/**
 * Get all substance names
 * @returns Array of all substance names
 */
export function getAllSubstanceNames(): string[] {
  return substances.map(s => s.name);
}

/**
 * Get substances by risk level
 * @param riskLevel - The risk level to filter by ('low' | 'moderate' | 'high' | 'very-high')
 * @returns Array of substances with the specified risk level
 */
export function getSubstancesByRiskLevel(riskLevel: 'low' | 'moderate' | 'high' | 'very-high'): Substance[] {
  return substances.filter(s => s.riskLevel === riskLevel);
}

/**
 * Get substances that have a specific route of administration
 * @param route - The route to search for
 * @returns Array of substances that have the specified route
 */
export function getSubstancesByRoute(route: string): Substance[] {
  return substances.filter(s => s.routes.includes(route));
}

/**
 * Get substances that interact with a specific substance or drug class
 * @param interaction - The interaction to search for
 * @returns Array of substances that have the specified interaction
 */
export function getSubstancesByInteraction(interaction: string): Substance[] {
  const lowerInteraction = interaction.toLowerCase();
  return substances.filter(s => 
    s.interactions.some(i => i.toLowerCase().includes(lowerInteraction))
  );
}

/**
 * Get total count of substances
 * @returns Total number of substances
 */
export function getSubstanceCount(): number {
  return substances.length;
}

/**
 * Get count of substances per category
 * @returns Object with category IDs as keys and counts as values
 */
export function getSubstanceCountByCategory(): Record<SubstanceCategory, number> {
  return {
    stimulants: stimulants.length,
    hallucinogens: hallucinogens.length,
    depressants: depressants.length,
    dissociatives: dissociatives.length,
    empathogens: empathogens.length,
    cannabinoids: cannabinoids.length,
    opioids: opioids.length,
    deliriants: deliriants.length,
    nootropics: nootropics.length
  };
}

// Category constants for convenience
export const CATEGORY_IDS = {
  STIMULANTS: 'stimulants' as SubstanceCategory,
  HALLUCINOGENS: 'hallucinogens' as SubstanceCategory,
  DEPRESSANTS: 'depressants' as SubstanceCategory,
  DISSOCIATIVES: 'dissociatives' as SubstanceCategory,
  EMPATHOGENS: 'empathogens' as SubstanceCategory,
  CANNABINOIDS: 'cannabinoids' as SubstanceCategory,
  OPIOIDS: 'opioids' as SubstanceCategory,
  DELIRIANTS: 'deliriants' as SubstanceCategory,
  NOOTROPICS: 'nootropics' as SubstanceCategory
};

// Risk level constants
export const RISK_LEVELS = {
  LOW: 'low' as const,
  MODERATE: 'moderate' as const,
  HIGH: 'high' as const,
  VERY_HIGH: 'very-high' as const
};
