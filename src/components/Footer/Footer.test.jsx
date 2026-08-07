import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Footer from './Footer';

describe('Footer', () => {
  it('renders copyright with the current year', () => {
    const year = new Date().getFullYear();
    render(<Footer />);

    expect(screen.getByText(String(year))).toBeInTheDocument();
    expect(screen.getByText(/Rudolf Zachar/)).toBeInTheDocument();
  });
});
