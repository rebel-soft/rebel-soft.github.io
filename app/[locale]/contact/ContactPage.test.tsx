import React from 'react';
import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import ContactPage from './page';

const messages = {
  ContactPage: {
    title: 'INITIATE CONTACT',
    subtitle: "Ready to start a revolution? Or just want to talk cutting-edge tech? We're on the frequency.",
    emailLabel: 'SECURE COMLINK',
    email: 'info@rebelsoft.com',
    phoneLabel: 'DIRECT LINE',
    phone: '+1 234 567 890',
    addressLabel: 'FIELD OFFICE',
    address: '123 Software St, Tech City, Country'
  }
};

describe('ContactPage Component', () => {
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
        <ContactPage />
      </NextIntlClientProvider>
    );
    expect(screen.getByRole('heading', { name: /INITIATE CONTACT/i, level: 1 })).toBeInTheDocument();
  });

  it('renders an email label', () => {
    render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <ContactPage />
      </NextIntlClientProvider>
    );
    expect(screen.getByText(/SECURE COMLINK/i)).toBeInTheDocument();
  });
});
