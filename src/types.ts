export type Priority = 'Low' | 'Medium' | 'High';

export interface Task {
  id: number;
  title: string;
  priority: Priority;
  completed: boolean;
  dueDate: string | null;
  createdAt: number;
}

export type SortOption = 'newest' | 'oldest' | 'dueEarliest' | 'dueLatest';

export interface AddTaskInput {
  title: string;
  priority: Priority;
  dueDate: string | null;
}
