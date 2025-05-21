import React from 'react';
import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import HomePage from './page'; // Assuming 'page.tsx' is the entry for HomePage

// Mock translations for HomePage
const messages = {
  HomePage: {
    welcome: 'REBEL: INITIATE',
    tagline: 'We forge disruptive software for the brave. Welcome to the rebellion.',
    cta: 'Discover Our Arsenal',
    portfolio: 'View Case Files',
  },
};

describe('HomePage Component', () => {
  beforeEach(() => {
    // IntersectionObserver isn't available in test environment
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });

  it('renders the main welcome heading', () => {
    render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <HomePage />
      </NextIntlClientProvider>
    );
    expect(screen.getByRole('heading', { name: /REBEL: INITIATE/i })).toBeInTheDocument();
  });

  it('renders the tagline', () => {
    render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <HomePage />
      </NextIntlClientProvider>
    );
    expect(screen.getByText(/We forge disruptive software for the brave. Welcome to the rebellion./i)).toBeInTheDocument();
  });

  it('renders CTA buttons', () => {
    render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <HomePage />
      </NextIntlClientProvider>
    );
    expect(screen.getByRole('link', { name: /Discover Our Arsenal/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /View Case Files/i })).toBeInTheDocument();
  });
});
