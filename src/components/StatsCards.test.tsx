import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { StatsCards } from './StatsCards';

describe('StatsCards', () => {
  it('renders total, pending, and done stats', () => {
    render(<StatsCards total={10} pending={4} donePercent={60} />);

    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('60%')).toBeInTheDocument();
    expect(screen.getByText('Total')).toBeInTheDocument();
    expect(screen.getByText('Pending')).toBeInTheDocument();
    expect(screen.getByText('Done')).toBeInTheDocument();
  });
});
