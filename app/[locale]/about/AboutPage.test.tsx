import React from 'react';
import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import AboutPage from './page';

const messages = {
  AboutPage: {
    title: 'REBEL: DECLASSIFIED',
    companyIntro: "They said it couldn't be done. They said stick to the script. We tore up the script. Rebel is a collective of elite coders and system architects, building the future one line of defiant code at a time.",
    missionTitle: 'THE REBEL MANIFESTO',
    missionText: "To dismantle outdated paradigms and engineer revolutionary software solutions that empower our clients to dominate their domain. We thrive on challenge and deliver results that speak louder than words.",
    valuesTitle: "CORE PROTOCOLS",
    value1: "1. Defy mediocrity: We don't do 'good enough'.",
    value2: "2. Innovate fearlessly: If it's not groundbreaking, it's not Rebel.",
    value3: "3. Execute with precision: Flawless code, every time.",
    value4: "4. Client success is the mission: We're partners in your rebellion."
  }
};

describe('AboutPage Component', () => {
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
        <AboutPage />
      </NextIntlClientProvider>
    );
    expect(screen.getByRole('heading', { name: /REBEL: DECLASSIFIED/i, level: 1 })).toBeInTheDocument();
  });

  it('renders the mission title section', () => {
    render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <AboutPage />
      </NextIntlClientProvider>
    );
    expect(screen.getByRole('heading', { name: /THE REBEL MANIFESTO/i, level: 2 })).toBeInTheDocument();
  });
});
