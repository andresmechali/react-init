const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, '../components'),
      '@pages': path.resolve(__dirname, '../pages'),
      '@utils': path.resolve(__dirname, '../utils'),
      '@images': path.resolve(__dirname, '../static/images'),
      '@data': path.resolve(__dirname, '../static/data'),
      '@config': path.resolve(__dirname, '../config'),
      '@api': path.resolve(__dirname, '../api'),
      '@interfaces': path.resolve(__dirname, '../interfaces'),
    },
  },
};
