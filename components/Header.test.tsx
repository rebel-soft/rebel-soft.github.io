import React from 'react';
import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import Header from './Header';

// Mock translations for Header
const messages = {
  Header: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    blog: 'Intel',
    team: 'Team',
    portfolio: 'Portfolio',
    contact: 'Contact',
  },
  LocaleSwitcher: { // Assuming LocaleSwitcher is part of Header and might need this
    locale: 'Language: {locale}',
  }
};

describe('Header Component', () => {
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

  it('renders navigation links with correct text', () => {
    render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <Header />
      </NextIntlClientProvider>
    );

    expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /About/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Services/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Intel/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Team/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Portfolio/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Contact/i })).toBeInTheDocument();
  });
});
