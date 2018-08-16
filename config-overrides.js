const WriteFilePlugin = require('write-file-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const path = require('path');
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const styledComponentsTransformer = createStyledComponentsTransformer();


module.exports = {
  entry: './src', // A directory
// entry: './src/index', // An extensionless file

  output: {
      filename: './bundle.js'
  },

  resolve: {
      extensions: ['.js', '.jsx'] // Looks for index.js first, then falls back to index.jsx
   // extensions: ['.jsx', '.js']    Looks for index.jsx first, then falls back to index.js
  }
};
/* config-overrides.js */
module.exports = function override(config, env) {
  
  if (env === 'development') {
    // For url resource with publicPath
    config.output.publicPath = '/client/build/';
    config.plugins.push(new WriteFilePlugin());
    config.output.path = path.join(__dirname, './build');
 
    config.plugins.push(new StylelintPlugin({
      files: ['src/**/*.tsx', 'src/**/*.ts']
    }));
  }

  // For typescript-plugin-styled-component override ts-loader
  const rule = config.module.rules.filter(l => l.oneOf)[0];
  const tsLoader = rule.oneOf.filter(l => String(l.test) === String(/\.(ts|tsx)$/))[0];
  tsLoader.use[0].options.getCustomTransformers = () => ({
    before: [styledComponentsTransformer]
  });

  return config;
}
