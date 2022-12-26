const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const webpackCommon = require('./webpack.common');
const packageJson = require('../package.json');

const config = {
    mode: 'development',
    devServer: {
        port: 8081,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'marketingApp',
            filename: 'remoteEntry.js',
            exposes: {
                './marketingIndex': './src/bootstrap.js'
            },
            shared: {
                ...packageJson.dependencies
            }
        })
    ]
}

module.exports = merge(webpackCommon, config);