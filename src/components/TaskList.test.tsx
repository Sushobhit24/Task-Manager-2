import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TaskList } from './TaskList';

const mockTasks = [
  {
    id: 1,
    title: 'Task 1',
    priority: 'High' as const,
    completed: false,
    dueDate: null,
    createdAt: Date.now(),
  },
  {
    id: 2,
    title: 'Task 2',
    priority: 'Low' as const,
    completed: true,
    dueDate: null,
    createdAt: Date.now(),
  },
];

describe('TaskList', () => {
  it('renders empty state when no tasks', () => {
    render(
      <TaskList tasks={[]} onToggleComplete={vi.fn()} onDelete={vi.fn()} />
    );

    expect(screen.getByText('No tasks found')).toBeInTheDocument();
    expect(screen.getByText(/add a new task above or adjust your filters/i)).toBeInTheDocument();
  });

  it('renders task items when tasks exist', () => {
    render(
      <TaskList
        tasks={mockTasks}
        onToggleComplete={vi.fn()}
        onDelete={vi.fn()}
      />
    );

    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
  });
});
