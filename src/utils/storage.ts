import type { Task } from '../types';
import { STORAGE_KEY } from '../constants';

export function loadTasks(): Task[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.map((t) => ({
      ...t,
      createdAt: t.createdAt ?? t.id ?? Date.now(),
    }));
  } catch {
    return [];
  }
}

export function saveTasks(tasks: Task[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

export function nextId(tasks: Task[]): number {
  const ids = tasks.map((t) => t.id).filter((n) => typeof n === 'number');
  return ids.length ? Math.max(...ids) + 1 : 1;
}
