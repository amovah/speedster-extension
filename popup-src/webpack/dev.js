/* eslint-disable */

const webpack = require('webpack');
const { resolve } = require('path');
const common = require('./common.js');
const dotenv = require('dotenv');

let envs = {};
const result = dotenv.config();
if (result.parsed) {
  envs = result.parsed;
}

module.exports = Object.assign({}, common, {
  mode: 'development',
  watch: true,
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      ...envs,
    }),
  ],
  devtool: 'source-map',
})
