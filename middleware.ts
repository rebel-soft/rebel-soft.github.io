// middleware.ts
import createMiddleware from 'next-intl/middleware';
import { routing } from '@/i18n/routing'; // Assuming your routing config is here

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(tw|en)/:path*']
};
