const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');
const { merge } = require('webpack-merge');
const webpackCommon = require('./webpack.common');
const devConfig = {
    mode: "development",
    output: {
        publicPath: 'http://localhost:8082/'
    },
    devServer: {
        port: 8082,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'authApp',
            filename: 'remoteEntry.js',
            exposes: {
                './authIndex': './src/bootstrap.js'
            },
            shared: packageJson.dependencies
        }),
    ]
}


module.exports = merge(webpackCommon, devConfig);