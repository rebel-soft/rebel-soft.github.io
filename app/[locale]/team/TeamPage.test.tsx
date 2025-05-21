import React from 'react';
import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import TeamPage from './page';

const messages = {
  TeamPage: {
    title: 'MEET THE OPERATIVES',
    intro: "These are the architects of the digital frontier, the commanders of code. We don't just write software; we launch digital rebellions.",
    member1: {
      name: 'Cipher',
      title: 'Chief Systems Architect',
      bio: "A ghost in the machine, Cipher has spent a decade forging unbreakable digital fortresses and pioneering next-gen infrastructures. If it's complex, they've already mastered it."
    },
    member2: {
      name: 'Glitch',
      title: 'Lead Interface Forger',
      bio: "Glitch doesn't just design UIs; they sculpt experiences that defy convention. With an arsenal of front-end tech, they turn vision into visceral reality."
    }
  }
};

describe('TeamPage Component', () => {
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
        <TeamPage />
      </NextIntlClientProvider>
    );
    expect(screen.getByRole('heading', { name: /MEET THE OPERATIVES/i, level: 1 })).toBeInTheDocument();
  });

  it('renders a team member name', () => {
    render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <TeamPage />
      </NextIntlClientProvider>
    );
    // Member names are typically H2s in the card structure
    expect(screen.getByRole('heading', { name: /Cipher/i, level: 2 })).toBeInTheDocument();
  });
});
