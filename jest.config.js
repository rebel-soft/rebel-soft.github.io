module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest', // If you have JS files to transform
  },
  moduleNameMapper: {
    // Handle CSS imports (if you're not using CSS Modules)
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    // Handle image imports
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
    // Alias for @/ components
    '^@/(.*)$': '<rootDir>/$1',
    // Mock next-intl navigation
    '^next-intl/navigation$': '<rootDir>/__mocks__/next-intl-navigation.js',
  },
  // Ignore Next.js build directory
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/app/[locale]/blog/[slug]/BlogPostPage.test.tsx'
  ],
  transformIgnorePatterns: ['/node_modules/(?!next-intl|use-intl)/'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json', // Use a separate tsconfig for tests if needed
    },
  },
};
