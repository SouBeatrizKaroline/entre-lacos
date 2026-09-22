import { Memory } from '../types';

/**
 * Utilitários para criação e consulta de memórias relacionais
 */
export function createMemory(data: Omit<Memory, 'timestamp'>): Memory {
  return {
    ...data,
    timestamp: Date.now(),
  };
}

export function hasMemory(memories: Memory[], memoryId: string): boolean {
  return memories.some((m) => m.id === memoryId);
}

export function getMemoriesByDomain(memories: Memory[], domain: Memory['domain']): Memory[] {
  return memories.filter((m) => m.domain === domain);
}
