const webpack = require('./webpack.config.js');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx)"
  ],
    addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@chakra-ui/storybook-addon"
  ],
    webpackFinal: (config, mode) => webpack({config, mode}),
    features: {emotionAlias: false},
    framework: "@storybook/react",
    core: {
      builder: "webpack5"
    },
    refs: {
        '@chakra-ui/react': {
            disable: true,
        },
    },
}
