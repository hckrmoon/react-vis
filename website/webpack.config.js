const {resolve} = require('path');

module.exports = {

  output: {
    publicPath: 'website/dist/'
  },

  resolve: {
    modules: [
      resolve(__dirname, '../src'),
      resolve(__dirname, '../node_modules')
    ],

    alias: {
      react: resolve(__dirname, './node_modules/react')
    }
  }

};
