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

  it('renders navigation links', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    expect(screen.getByTitle('About')).toBeInTheDocument();
    expect(screen.getByTitle('Portfolio')).toBeInTheDocument();
    expect(screen.getByTitle('Contact')).toBeInTheDocument();
    expect(screen.getByText('RUDY')).toBeInTheDocument();
  });
});
