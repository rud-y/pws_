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

  it('renders project title, links, and image', () => {
    render(
      <MemoryRouter>
        <ProjectCard
          title="GlobeLog"
          ariaLabel="GlobeLog project"
          githubUrl="https://github.com/rud-y/worldexplore"
          slug="globelog"
          image={{
            src: '/images/globelog_2.jpg',
            width: 200,
            height: 200,
            alt: 'GlobeLog screenshot',
          }}
        />
      </MemoryRouter>,
    );

    expect(screen.getByText('GlobeLog')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute(
      'href',
      'https://github.com/rud-y/worldexplore',
    );
    expect(screen.getByRole('link', { name: 'Show more' })).toHaveAttribute(
      'href',
      '/globelog',
    );
    expect(screen.getByAltText('GlobeLog screenshot')).toHaveAttribute(
      'src',
      '/images/globelog_2.jpg',
    );
  });
});
