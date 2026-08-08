import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import ProjectCard from './ProjectCard';

describe('ProjectCard', () => {
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

  it('renders an accessible project region with clear links', () => {
    render(
      <MemoryRouter>
        <ProjectCard
          title="GlobeLog"
          githubUrl="https://github.com/rud-y/worldexplore"
          slug="globelog"
          index={0}
          total={6}
          image={{
            src: '/images/globelog_2.jpg',
            width: 200,
            height: 200,
            alt: 'GlobeLog screenshot',
          }}
        />
      </MemoryRouter>,
    );

    const project = screen.getByRole('article', { name: 'GlobeLog' });
    expect(project).toHaveAttribute('tabindex', '0');
    expect(screen.getByText('Project 1 of 6.')).toBeInTheDocument();
    expect(
      screen.getByRole('link', {
        name: 'View details for GlobeLog, project 1 of 6',
      }),
    ).toHaveAttribute('href', '/globelog');
    expect(
      screen.getByRole('link', {
        name: 'GlobeLog on GitHub (opens in a new tab)',
      }),
    ).toHaveAttribute('href', 'https://github.com/rud-y/worldexplore');
  });
});
