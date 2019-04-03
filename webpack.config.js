const Encore = require('@symfony/webpack-encore');
const HtmlWebpackPlugin = require('html-webpack-plugin');

Encore
  .setOutputPath('dist')
  .setPublicPath('/')

  .addEntry('app', './src/index.js')

  .splitEntryChunks()
  .enableSingleRuntimeChunk()

  .cleanupOutputBeforeBuild()

  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction())

  .configureBabel(babelConfig => {
    babelConfig.presets.push('@vue/babel-preset-jsx');
  }, {
    useBuiltIns: 'usage',
    corejs: 3,
  })

  .enableVueLoader()

  .addPlugin(new HtmlWebpackPlugin({
    template: 'index.html',
  }))
;

module.exports = Encore.getWebpackConfig();
