module.exports = {
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],

  core: {
    builder: '@storybook/builder-vite',
  },

  features: {
    postcss: false,
  },

  framework: '@storybook/react',

  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],

  typescript: {
    check: true,
  },
};
