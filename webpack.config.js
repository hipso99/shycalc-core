const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'shycalc-core.js',
    library: 'shycalc',
    libraryTarget: 'commonjs2'
  },
};
