const postcssPresetEnv = require('postcss-preset-env');
module.exports = {
  plugins: [
    postcssPresetEnv({
      browsers: ['>0.50%', 'not ie 11', 'not op_mini all']
    }),
    require('cssnano')({
      preset: 'advanced',
    }),
    require('autoprefixer')
  ]
};
