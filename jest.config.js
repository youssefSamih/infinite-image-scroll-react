module.exports = {
  moduleDirectories: ['node_modules', '__tests__', 'src'],
  modulePathIgnorePatterns: [
    'cypress',
    '__tests__/test-utils.tsx',
    '__tests__/integrations/profile-creation/SignupTestComponent',
    '__tests__/integrations/Invest-steps/InvestTestComponent',
    'src/ui/Icons',
    'interfaces',
    'pages',
  ],
  setupFiles: ['./setupTests.ts'],
  collectCoverageFrom: [
    'src/**/{!(styles|style|docsData|__coverage__|global_style),}.(ts|tsx)',
  ],
};
