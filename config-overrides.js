const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
const path = require('path')

module.exports = function override(config, env) {
  // do stuff with the webpack config...

  config = injectBabelPlugin(
    // importing less
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
    config,
  );

  config = rewireLess.withLoaderOptions({
    modifyVars: require('./src/styles/theme.js'),
    javascriptEnabled: true,
    })(config, env);

  return config;
};