const path = require('path');
const theme = require('./src/config/style/theme');

const { colors, font } = theme;

module.exports = [
  [
    'use-babel-config',
    {
      presets: ['react-app'],
      plugins: [
        [
          'import',
          {
            libraryName: 'antd',
            style: true,
          },
        ],
        /*[
          'module-resolver',
          {
            root: 'src',
          },
        ],*/
      ],
    },
  ],
  config => {
    const newConfig = config;

    let rule = newConfig.module.rules.find(rule => rule.oneOf);

    rule.oneOf.unshift({
      test: /\.less$/,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
        },
        {
          loader: 'less-loader',
          options: {
            javascriptEnabled: true,
            modifyVars: {
              'primary-color': colors.primary,
              'text-color-secondary': colors.secondary,
              'link-color': colors.link,
              'success-color': colors.success,
              'warning-color': colors.warning,
              'error-color': colors.error,
              'font-size-base': font.size.normal,
              'text-color': colors.text,
            },
          },
        },
      ],
    });

    newConfig.resolve.alias = {
      components: path.resolve(__dirname, 'src/components'),
      config: path.resolve(__dirname, 'src/config'),
      pages: path.resolve(__dirname, 'src/pages'),
      images: path.resolve(__dirname, 'src/static/images'),
      data: path.resolve(__dirname, 'src/static/data'),
      redux: path.resolve(__dirname, 'src/redux'),
      utils: path.resolve(__dirname, 'src/utils'),
      api: path.resolve(__dirname, 'src/api'),
      interfaces: path.resolve(__dirname, 'src/interfaces'),
    };

    return newConfig;
  },
];
