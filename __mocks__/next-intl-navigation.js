// __mocks__/next-intl-navigation.js
const React = require('react');

const Link = ({ href, children, ...props }) => {
  return React.createElement('a', { href, ...props }, children);
};

const usePathname = () => '/mock-path';
const useRouter = () => ({
  push: jest.fn(),
  replace: jest.fn(),
  refresh: jest.fn(),
  back: jest.fn(),
  forward: jest.fn(),
});

const redirect = jest.fn();
const permanentRedirect = jest.fn();
const getPathname = jest.fn(() => '/mock-path'); // Added getPathname

exports.Link = Link;
exports.usePathname = usePathname;
exports.useRouter = useRouter;
exports.redirect = redirect;
exports.permanentRedirect = permanentRedirect;
exports.getPathname = getPathname; // Export getPathname

// Mock createNavigation
exports.createNavigation = jest.fn(() => ({
  Link,
  redirect,
  usePathname,
  useRouter,
  getPathname,
}));
