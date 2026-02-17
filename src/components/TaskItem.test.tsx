import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { TaskItem } from './TaskItem';

const mockTask = {
  id: 1,
  title: 'Test Task',
  priority: 'High' as const,
  completed: false,
  dueDate: null,
  createdAt: Date.now(),
};

describe('TaskItem', () => {
  it('renders task title and priority', () => {
    render(
      <TaskItem
        task={mockTask}
        onToggleComplete={vi.fn()}
        onDelete={vi.fn()}
      />
    );

    expect(screen.getByText('Test Task')).toBeInTheDocument();
    expect(screen.getByText('High')).toBeInTheDocument();
  });

  it('calls onToggleComplete when checkbox is clicked', async () => {
    const user = userEvent.setup();
    const onToggleComplete = vi.fn();
    render(
      <TaskItem
        task={mockTask}
        onToggleComplete={onToggleComplete}
        onDelete={vi.fn()}
      />
    );

    const checkbox = screen.getByRole('checkbox');
    await user.click(checkbox);

    expect(onToggleComplete).toHaveBeenCalledWith(1);
  });

  it('calls onDelete when delete button is clicked', async () => {
    const user = userEvent.setup();
    const onDelete = vi.fn();
    render(
      <TaskItem
        task={mockTask}
        onToggleComplete={vi.fn()}
        onDelete={onDelete}
      />
    );

    const deleteButton = screen.getByRole('button', { name: /delete task/i });
    await user.click(deleteButton);

    expect(onDelete).toHaveBeenCalledWith(1);
  });

  it('displays due date when provided', () => {
    const taskWithDueDate = {
      ...mockTask,
      dueDate: '2025-02-20',
    };

    render(
      <TaskItem
        task={taskWithDueDate}
        onToggleComplete={vi.fn()}
        onDelete={vi.fn()}
      />
    );

    expect(screen.getByText(/due:/i)).toBeInTheDocument();
  });
});
