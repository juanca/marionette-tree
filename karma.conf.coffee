webpackConfig = require('./webpack.config.coffee')
webpackConfig.entry = {}

module.exports = (config)  ->
  config.set
    frameworks: ['jasmine']
    browsers: ['Chrome']

    files: [
      './spec/**/*.coffee'
    ]

    preprocessors:
      './helpers/**/*': ['webpack']
      './spec/**/*': ['webpack']

    webpack: webpackConfig

    webpackMiddleware:
      noInfo: true