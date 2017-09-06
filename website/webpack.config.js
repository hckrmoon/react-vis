const {resolve} = require('path');

module.exports = {

  output: {
    publicPath: 'website/dist/'
  },

  resolve: {
    modules: [
      resolve(__dirname, '../src'),
      resolve(__dirname, '../node_modules'),
      resolve(__dirname, '../showcase/node_modules')
    ],

    alias: {
      react: resolve(__dirname, './node_modules/react')
    }
  }

};
