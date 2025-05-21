import React from 'react';
import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import PortfolioPage from './page';

const messages = {
  PortfolioPage: {
    title: 'CASE FILES',
    intro: "Proof of rebellion. Each project a testament to our relentless pursuit of innovation and defiance of the status quo. We don't just build; we conquer.",
    project1: {
      title: 'Operation: Chimera',
      description: 'A decentralized e-commerce platform built on the edge of impossibility. Result: Market disruption.'
    },
    project2: {
      title: 'Codename: Nightfall',
      description: 'AI-driven logistics system that redefined supply chain efficiency for a global powerhouse.'
    },
    project3: {
      title: 'Project: Uprising',
      description: 'Gamified mobile learning app that sparked a youth movement in education tech.'
    },
    project4: {
      title: 'Initiative: Overlord',
      description: 'Data analytics dashboard that provided actionable C-suite intelligence, turning data into dominance.'
    },
    linkText: 'ACCESS FILE'
  }
};

describe('PortfolioPage Component', () => {
  beforeEach(() => {
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });

  it('renders the main title', () => {
    render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <PortfolioPage />
      </NextIntlClientProvider>
    );
    expect(screen.getByRole('heading', { name: /CASE FILES/i, level: 1 })).toBeInTheDocument();
  });

  it('renders a project title', () => {
    render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <PortfolioPage />
      </NextIntlClientProvider>
    );
    // Project titles are H2s in the card structure
    expect(screen.getByRole('heading', { name: /Operation: Chimera/i, level: 2 })).toBeInTheDocument();
  });
});
