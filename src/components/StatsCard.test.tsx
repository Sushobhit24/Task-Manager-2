import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { StatsCard } from './StatsCard';

describe('StatsCard', () => {
  it('renders value and label', () => {
    render(
      <StatsCard icon={<span data-testid="icon" />} value={42} label="Total" />
    );

    expect(screen.getByText('42')).toBeInTheDocument();
    expect(screen.getByText('Total')).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('renders percentage value', () => {
    render(
      <StatsCard
        icon={<span />}
        value="75%"
        label="Done"
      />
    );

    expect(screen.getByText('75%')).toBeInTheDocument();
  });
});
