import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { SearchBar } from './SearchBar';

describe('SearchBar', () => {
  it('renders search input with placeholder', () => {
    render(<SearchBar value="" onChange={vi.fn()} />);

    const input = screen.getByPlaceholderText(/search tasks/i);
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('');
  });

  it('calls onChange when user types', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<SearchBar value="" onChange={onChange} />);

    const input = screen.getByLabelText(/search tasks by title/i);
    await user.type(input, 'test');

    expect(onChange).toHaveBeenCalled();
  });

  it('displays current value', () => {
    render(<SearchBar value="my search" onChange={vi.fn()} />);

    expect(screen.getByDisplayValue('my search')).toBeInTheDocument();
  });
});
