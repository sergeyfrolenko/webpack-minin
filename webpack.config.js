const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    main: './main.js',
    analytics: './analytics.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'public')
  }
}