// __mocks__/next-intl-server.js
module.exports = {
  getTranslations: jest.fn(async (options) => {
    // This is a simplified mock.
    // It assumes the 'messages' prop passed to NextIntlClientProvider in the test
    // contains the necessary translations for the given namespace.
    // You might need to make this more sophisticated if you have complex namespace logic.
    if (options && options.namespace && global.testMessages && global.testMessages[options.namespace]) {
      const namespaceMessages = global.testMessages[options.namespace];
      return (key) => namespaceMessages[key] || `${options.namespace}.${key} (mocked)`;
    }
    // Fallback for general keys if no namespace or specific messages found
    if (global.testMessages) {
        return (key) => global.testMessages[key] || `${key} (mocked global)`;
    }
    return (key) => `${key} (mocked fallback)`; // Default fallback
  }),
};
