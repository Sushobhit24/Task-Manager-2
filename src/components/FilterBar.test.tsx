import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { FilterBar } from './FilterBar';

const defaultProps = {
  priorityFilter: 'All',
  onPriorityFilterChange: vi.fn(),
  sortBy: 'newest' as const,
  onSortChange: vi.fn(),
  priorityCounts: { All: 5, Low: 2, Medium: 2, High: 1 },
};

describe('FilterBar', () => {
  it('renders priority filter buttons', () => {
    render(<FilterBar {...defaultProps} />);

    expect(screen.getByRole('button', { name: /all 5/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /low 2/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /medium 2/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /high 1/i })).toBeInTheDocument();
  });

  it('calls onPriorityFilterChange when filter button is clicked', async () => {
    const user = userEvent.setup();
    const onPriorityFilterChange = vi.fn();
    render(
      <FilterBar {...defaultProps} onPriorityFilterChange={onPriorityFilterChange} />
    );

    await user.click(screen.getByRole('button', { name: /high 1/i }));

    expect(onPriorityFilterChange).toHaveBeenCalledWith('High');
  });

  it('renders sort dropdown', () => {
    render(<FilterBar {...defaultProps} />);

    const select = screen.getByLabelText(/sort tasks/i);
    expect(select).toBeInTheDocument();
    expect(select).toHaveValue('newest');
  });

  it('calls onSortChange when sort option changes', async () => {
    const user = userEvent.setup();
    const onSortChange = vi.fn();
    render(<FilterBar {...defaultProps} onSortChange={onSortChange} />);

    const select = screen.getByLabelText(/sort tasks/i);
    await user.selectOptions(select, 'oldest');

    expect(onSortChange).toHaveBeenCalledWith('oldest');
  });
});
