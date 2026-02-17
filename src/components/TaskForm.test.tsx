import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { TaskForm } from './TaskForm';

describe('TaskForm', () => {
  it('renders form elements', () => {
    const onAddTask = vi.fn();
    render(<TaskForm onAddTask={onAddTask} />);

    expect(screen.getByText('Add a new task.')).toBeInTheDocument();
    expect(screen.getByLabelText(/task title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/priority/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/due date/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /add task/i })).toBeInTheDocument();
  });

  it('calls onAddTask with form data when submitted', async () => {
    const user = userEvent.setup();
    const onAddTask = vi.fn();
    render(<TaskForm onAddTask={onAddTask} />);

    const titleInput = screen.getByPlaceholderText(/what needs to be done/i);
    await user.type(titleInput, 'Buy groceries');
    await user.click(screen.getByRole('button', { name: /add task/i }));

    expect(onAddTask).toHaveBeenCalledWith(
      expect.objectContaining({
        title: 'Buy groceries',
        priority: 'Medium',
      })
    );
  });

  it('does not call onAddTask when title is empty', async () => {
    const user = userEvent.setup();
    const onAddTask = vi.fn();
    render(<TaskForm onAddTask={onAddTask} />);

    await user.click(screen.getByRole('button', { name: /add task/i }));

    expect(onAddTask).not.toHaveBeenCalled();
  });

  it('resets form after successful submit', async () => {
    const user = userEvent.setup();
    const onAddTask = vi.fn();
    render(<TaskForm onAddTask={onAddTask} />);

    const titleInput = screen.getByPlaceholderText(/what needs to be done/i);
    await user.type(titleInput, 'New task');
    await user.click(screen.getByRole('button', { name: /add task/i }));

    expect(titleInput).toHaveValue('');
  });
});
