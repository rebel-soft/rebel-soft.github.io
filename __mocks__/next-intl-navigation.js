// __mocks__/next-intl-navigation.js
import React from 'react';

// Mock the Link component
export const Link = ({ href, children, ...props }) => {
  return React.createElement('a', { href, ...props }, children);
};

// Mock other exports as needed, e.g., usePathname, useRouter
export const usePathname = () => '/mock-path';
export const useRouter = () => ({
  push: jest.fn(),
  replace: jest.fn(),
  refresh: jest.fn(),
  back: jest.fn(),
  forward: jest.fn(),
});

// If you use redirect or permanentRedirect, mock them too
export const redirect = jest.fn();
export const permanentRedirect = jest.fn();
