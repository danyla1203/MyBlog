const path = require('path');

module.exports = {
  entry: './components/index.js',
  mode: "development",
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: 'bundle.js'
  },

  module: {
      rules: [
          { test: /\.js$/, use: "babel-loader" }
      ]
  }

};