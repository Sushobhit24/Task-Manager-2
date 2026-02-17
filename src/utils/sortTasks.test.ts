import { describe, it, expect } from 'vitest';
import { sortTasks } from './sortTasks';
import type { Task } from '../types';

const baseTask: Task = {
  id: 0,
  title: '',
  priority: 'Medium',
  completed: false,
  dueDate: null,
  createdAt: 0,
};

describe('sortTasks', () => {
  it('sorts by newest first', () => {
    const tasks: Task[] = [
      { ...baseTask, id: 1, createdAt: 1000 },
      { ...baseTask, id: 2, createdAt: 3000 },
      { ...baseTask, id: 3, createdAt: 2000 },
    ];

    const result = sortTasks(tasks, 'newest');

    expect(result[0].id).toBe(2);
    expect(result[1].id).toBe(3);
    expect(result[2].id).toBe(1);
  });

  it('sorts by oldest first', () => {
    const tasks: Task[] = [
      { ...baseTask, id: 1, createdAt: 3000 },
      { ...baseTask, id: 2, createdAt: 1000 },
      { ...baseTask, id: 3, createdAt: 2000 },
    ];

    const result = sortTasks(tasks, 'oldest');

    expect(result[0].id).toBe(2);
    expect(result[1].id).toBe(3);
    expect(result[2].id).toBe(1);
  });

  it('sorts by due date earliest', () => {
    const tasks: Task[] = [
      { ...baseTask, id: 1, dueDate: '2025-03-01', createdAt: 1 },
      { ...baseTask, id: 2, dueDate: '2025-01-15', createdAt: 2 },
      { ...baseTask, id: 3, dueDate: '2025-02-01', createdAt: 3 },
    ];

    const result = sortTasks(tasks, 'dueEarliest');

    expect(result[0].id).toBe(2);
    expect(result[1].id).toBe(3);
    expect(result[2].id).toBe(1);
  });

  it('sorts by due date latest', () => {
    const tasks: Task[] = [
      { ...baseTask, id: 1, dueDate: '2025-01-15', createdAt: 1 },
      { ...baseTask, id: 2, dueDate: '2025-03-01', createdAt: 2 },
      { ...baseTask, id: 3, dueDate: '2025-02-01', createdAt: 3 },
    ];

    const result = sortTasks(tasks, 'dueLatest');

    expect(result[0].id).toBe(2);
    expect(result[1].id).toBe(3);
    expect(result[2].id).toBe(1);
  });
});
