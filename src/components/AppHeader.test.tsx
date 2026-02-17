import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AppHeader } from './AppHeader';

describe('AppHeader', () => {
  it('renders title and tagline', () => {
    render(<AppHeader total={0} pending={0} donePercent={0} />);

    expect(screen.getByText('Task Manager')).toBeInTheDocument();
    expect(screen.getByText(/stay organized, get things done/i)).toBeInTheDocument();
  });

  it('displays stats', () => {
    render(<AppHeader total={10} pending={3} donePercent={70} />);

    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('70%')).toBeInTheDocument();
  });
});
