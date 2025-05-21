import React from 'react';
import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import ServicesPage from './page';

const messages = {
  ServicesPage: {
    title: 'OUR ARSENAL',
    intro: "We don't offer services; we provide strategic advantages. Here's how we wage war on mediocrity and engineer victory for your venture.",
    service1: {
      title: 'Strategic Web Offensive',
      description: 'Full-stack web solutions designed to conquer your market. From lightning-fast APIs to immersive front-ends, we build digital weapons tailored to your objectives.'
    },
    service2: {
      title: 'Mobile Infiltration Units',
      description: 'Cross-platform mobile applications that are fast, intuitive, and ruthlessly effective. iOS & Android, native or hybrid – we deploy the right tools for the mission.'
    },
    service3: {
      title: 'Psychological Warfare (UI/UX)',
      description: 'User interfaces and experiences engineered to captivate, convert, and command loyalty. We turn casual users into die-hard advocates through intelligent design.'
    },
    service4: {
      title: 'Cloud Fortress Architecture',
      description: 'Scalable, secure, and resilient cloud infrastructure. We design and deploy digital fortresses on AWS, Azure, and GCP that anticipate every threat and opportunity.'
    },
    cta: 'INITIATE PROJECT'
  }
};

describe('ServicesPage Component', () => {
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
        <ServicesPage />
      </NextIntlClientProvider>
    );
    expect(screen.getByRole('heading', { name: /OUR ARSENAL/i, level: 1 })).toBeInTheDocument();
  });

  it('renders a service title', () => {
    render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <ServicesPage />
      </NextIntlClientProvider>
    );
    expect(screen.getByRole('heading', { name: /Strategic Web Offensive/i, level: 2 })).toBeInTheDocument();
  });
});
