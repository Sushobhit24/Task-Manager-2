import { describe, it, expect, beforeEach } from 'vitest';
import { STORAGE_KEY } from '../constants';
import { loadTasks, saveTasks, nextId } from './storage';

describe('storage utils', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe('loadTasks', () => {
    it('returns empty array when storage is empty', () => {
      expect(loadTasks()).toEqual([]);
    });

    it('returns parsed tasks from localStorage', () => {
      const tasks = [
        { id: 1, title: 'Task 1', priority: 'High', completed: false, dueDate: null, createdAt: 1 },
      ];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));

      expect(loadTasks()).toEqual(tasks);
    });

    it('returns empty array when stored data is invalid', () => {
      localStorage.setItem(STORAGE_KEY, 'invalid json');
      expect(loadTasks()).toEqual([]);
    });
  });

  describe('saveTasks', () => {
    it('saves tasks to localStorage', () => {
      const tasks = [
        { id: 1, title: 'Task', priority: 'Low' as const, completed: false, dueDate: null, createdAt: 1 },
      ];
      saveTasks(tasks);

      const stored = localStorage.getItem(STORAGE_KEY);
      expect(JSON.parse(stored!)).toEqual(tasks);
    });
  });

  describe('nextId', () => {
    it('returns 1 for empty array', () => {
      expect(nextId([])).toBe(1);
    });

    it('returns max id + 1 for non-empty array', () => {
      const tasks = [
        { id: 1, title: '', priority: 'Low' as const, completed: false, dueDate: null, createdAt: 1 },
        { id: 5, title: '', priority: 'Low' as const, completed: false, dueDate: null, createdAt: 1 },
      ];
      expect(nextId(tasks)).toBe(6);
    });
  });
});
