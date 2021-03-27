//vue.config.js
module.exports = {
  publicPath: './',
  outputDir: "dist",
  assetsDir: "static",
  indexPath: 'index.html',
  chainWebpack: (config) => {
    config.module
      .rule("eslint")
      .use("eslint-loader")
      .loader("eslint-loader")
      .tap((options) => {
        options.fix = true;
        return options;
      });
  },
  lintOnSave: false
};
