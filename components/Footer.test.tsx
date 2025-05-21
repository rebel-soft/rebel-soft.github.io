import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
// No next-intl needed here as Footer uses static text or already translated text via props if any.
// However, if Footer started using useTranslations, we'd need NextIntlClientProvider.

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
    render(<Footer />);
    expect(screen.getByText(/© 2025 RebelSoft. All rights reserved./i)).toBeInTheDocument();
  });

  it('renders section titles "Links" and "Contact"', () => {
    render(<Footer />);
    // These texts are part of the design and not from translation files for Footer
    expect(screen.getByText('Links')).toBeInTheDocument(); // Assuming 'Links' is a direct text
    expect(screen.getByText('Contact')).toBeInTheDocument(); // Assuming 'Contact' is a direct text
  });

  it('renders navigation links in the footer', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /About/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Team/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Portfolio/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Contact/i })).toBeInTheDocument();
  });
});
