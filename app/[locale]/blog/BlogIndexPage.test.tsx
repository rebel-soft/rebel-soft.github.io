import React from 'react';
import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import BlogIndexPage from './page';

const messages = {
  BlogPage: {
    title: 'REBEL INTEL',
    intro: "Dispatches from the digital front lines. Thoughts, tactics, and tech deep-dives from the Rebel crew. Knowledge is power.",
    readMore: 'Read Full Transmission',
    post1: {
      slug: 'static-sites-rebellion',
      title: 'Static Shock: Why Static Sites Are Leading a Digital Rebellion',
      summary: "They're fast, secure, and surprisingly powerful. We break down why static site generation is a core Rebel tactic for digital dominance.",
      date: '2024-07-26',
      author: 'Cipher',
    },
    post2: {
      slug: 'web3-beyond-the-battlecry',
      title: 'Web3: Beyond the Battlecry - Forging a Decentralized Reality',
      summary: "Blockchain, NFTs, DAOs – is it just noise, or the blueprint for the next digital revolution? A pragmatic Rebel perspective on the decentralized frontier.",
      date: '2024-07-20',
      author: 'Glitch',
    }
  }
};

describe('BlogIndexPage Component', () => {
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
        <BlogIndexPage />
      </NextIntlClientProvider>
    );
    expect(screen.getByRole('heading', { name: /REBEL INTEL/i, level: 1 })).toBeInTheDocument();
  });

  it('renders a blog post title link', () => {
    render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <BlogIndexPage />
      </NextIntlClientProvider>
    );
    // Post titles are H2s and also links in the card structure
    expect(screen.getByRole('link', { name: /Static Shock: Why Static Sites Are Leading a Digital Rebellion/i })).toBeInTheDocument();
  });
});
