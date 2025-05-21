import React from 'react';
import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import BlogPostPage from './page'; // Assuming 'page.tsx' is the entry for BlogPostPage

const messages = {
  BlogPage: {
    title: 'REBEL INTEL', // For the "Back to REBEL INTEL" link
    readMore: 'Read Full Transmission', // Not used directly on this page, but part of BlogPage
    post1: {
      slug: 'static-sites-rebellion',
      title: 'Static Shock: Why Static Sites Are Leading a Digital Rebellion',
      summary: "They're fast, secure, and surprisingly powerful. We break down why static site generation is a core Rebel tactic for digital dominance.",
      date: '2024-07-26',
      author: 'Cipher',
      content: "The old guard clings to dynamic complexity. We champion static efficiency. It's not about limitations; it's about strategic superiority.\n\n### Speed & Security: Non-Negotiable\nStatic sites are pre-rendered HTML, CSS, and JavaScript. This translates to ludicrous speed and a drastically reduced attack surface. No databases to breach, no complex server-side processes to exploit during runtime. Pure, unadulterated performance.\n\n### The Rebel Advantage\nAt RebelSoft, we leverage cutting-edge frameworks like Next.js and Hugo to build static sites that are anything but 'basic'. We integrate headless CMS, serverless functions, and third-party APIs to deliver rich, interactive experiences without compromising on the core benefits of static architecture. This is the future – lean, mean, and incredibly potent."
    },
    post2: {
      slug: 'web3-beyond-the-battlecry',
      title: 'Web3: Beyond the Battlecry - Forging a Decentralized Reality',
      summary: "Blockchain, NFTs, DAOs – is it just noise, or the blueprint for the next digital revolution? A pragmatic Rebel perspective on the decentralized frontier.",
      date: '2024-07-20',
      author: 'Glitch',
      content: "The term Web3 echoes through the digital landscape, often more as a warcry than a well-defined strategy. But beyond the hype, fundamental shifts are occurring.\n\n### Core Tenets of the Uprising\nAt its heart, Web3 champions decentralization, user data sovereignty, and transparent, trustless systems. These aren't just buzzwords; they are the building blocks for a more equitable and resilient internet.\n\n### RebelSoft's Reconnaissance\nWe're not just observing; we're actively experimenting. From smart contract development to exploring decentralized identity solutions, RebelSoft is on the front lines, evaluating how Web3 technologies can be integrated into robust, real-world applications that provide tangible value, not just speculative excitement. The revolution will be built, not just tweeted."
    }
  }
};

describe('BlogPostPage Component', () => {
  beforeEach(() => {
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });

  describe('Post 1: Static Sites Rebellion', () => {
    const params = { slug: 'static-sites-rebellion', locale: 'en' };
    it('renders the post title', () => {
      render(
        <NextIntlClientProvider locale="en" messages={messages}>
          <BlogPostPage params={params} />
        </NextIntlClientProvider>
      );
      expect(screen.getByRole('heading', { name: /Static Shock: Why Static Sites Are Leading a Digital Rebellion/i, level: 1 })).toBeInTheDocument();
    });

    it('renders the post author', () => {
      render(
        <NextIntlClientProvider locale="en" messages={messages}>
          <BlogPostPage params={params} />
        </NextIntlClientProvider>
      );
      expect(screen.getByText(/by Cipher/i)).toBeInTheDocument();
    });
  });

  describe('Post 2: Web3 Beyond the Battlecry', () => {
    const params = { slug: 'web3-beyond-the-battlecry', locale: 'en' };
    it('renders the post title', () => {
      render(
        <NextIntlClientProvider locale="en" messages={messages}>
          <BlogPostPage params={params} />
        </NextIntlClientProvider>
      );
      expect(screen.getByRole('heading', { name: /Web3: Beyond the Battlecry - Forging a Decentralized Reality/i, level: 1 })).toBeInTheDocument();
    });

    it('renders the post author', () => {
      render(
        <NextIntlClientProvider locale="en" messages={messages}>
          <BlogPostPage params={params} />
        </NextIntlClientProvider>
      );
      expect(screen.getByText(/by Glitch/i)).toBeInTheDocument();
    });
  });
});
