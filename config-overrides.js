const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackResolve,
  useEslintRc,
  useBabelRc,
} = require('customize-cra');
const theme = require('./src/config/style/theme');
const webpackConfig = require('./src/config/webpack.config');

const { colors, font } = theme;

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      // General
      'primary-color': colors.primary,
      'text-color-secondary': colors.secondary,
      'link-color': colors.link,
      'success-color': colors.success,
      'warning-color': colors.warning,
      'error-color': colors.error,
      'font-size-base': font.size.normal,
      'text-color': colors.text,
    },
  }),
  addWebpackResolve(webpackConfig.resolve),
  useEslintRc(),
  useBabelRc(),
);
