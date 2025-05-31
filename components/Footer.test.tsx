import React from 'react';
import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import Footer from './Footer';

const messages = {
  Footer: {
    rebelsoftTitle: "RebelSoft",
    copyright: "© 2025 RebelSoft. All rights reserved.",
    linksTitle: "Links",
    homeLink: "Home",
    aboutLink: "About",
    teamLink: "Team",
    portfolioLink: "Portfolio",
    contactLink: "Contact",
    contactTitle: "Contact",
    emailLabel: "Email: info@rebelsoft.com",
    phoneLabel: "Phone: +1 234 567 890"
  }
};

describe('Footer Component', () => {
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

  it('renders copyright text', () => {
    render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <Footer />
      </NextIntlClientProvider>
    );
    expect(screen.getByText(/© 2025 RebelSoft. All rights reserved./i)).toBeInTheDocument();
  });

  it('renders section titles "Links" and "Contact"', () => {
    render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <Footer />
      </NextIntlClientProvider>
    );
    expect(screen.getByRole('heading', { name: messages.Footer.linksTitle })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: messages.Footer.contactTitle })).toBeInTheDocument();
  });

  it('renders navigation links in the footer', () => {
    render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <Footer />
      </NextIntlClientProvider>
    );
    expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /About/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Team/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Portfolio/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Contact/i })).toBeInTheDocument();
  });
});
