import type { Priority } from './types';

export const STORAGE_KEY = 'task-tracker-tasks';
export const PRIORITIES: readonly Priority[] = ['Low', 'Medium', 'High'];

export const SORT_OPTIONS = [
  { value: 'newest' as const, label: 'Newest first' },
  { value: 'oldest' as const, label: 'Oldest first' },
  { value: 'dueEarliest' as const, label: 'Due date (earliest)' },
  { value: 'dueLatest' as const, label: 'Due date (latest)' },
] as const;
