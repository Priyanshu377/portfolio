const path = require('path');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/',
  outputDir: 'dist',
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`,
      },
    },
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, 'src/styles/variables.scss')],
    },
  },
};
 