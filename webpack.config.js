const { ModulesOption } = require('@babel/preset-env/lib/options');
const path = require('path');

module.exports = {
  mode: 'production',
  target: 'node',
  entry: '/index.ts',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json', '.ts', '.node'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  externals: {
    robotjs: 'commonjs robotjs',
  },
};