import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AppFooter } from './AppFooter';

describe('AppFooter', () => {
  it('renders footer text', () => {
    render(<AppFooter />);

    expect(
      screen.getByText(/designed and developed by sushobhit kumar/i)
    ).toBeInTheDocument();
  });
});
