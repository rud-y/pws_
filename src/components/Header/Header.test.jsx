import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import Header from './Header';

describe('Header', () => {
  beforeEach(() => {
    vi.stubGlobal(
      'IntersectionObserver',
      class {
        constructor(callback) {
          this.callback = callback;
        }
        observe(node) {
          this.callback([{ isIntersecting: true, target: node }]);
        }
        unobserve() {}
        disconnect() {}
      },
    );
  });

  it('renders accessible navigation links', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole('navigation', { name: 'Primary' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'About Rudy Zachar' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Portfolio projects' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Contact information' }),
    ).toBeInTheDocument();
  });
});
