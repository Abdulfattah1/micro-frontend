const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');
const { merge } = require('webpack-merge');
const webpackCommon = require('./webpack.common');
const devConfig = {
    mode: "development",
    output: {
        filename: '[name][contenthash].js',
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'AuthApp',
            exposes: {
                './AuthIndex': './src/bootstrap.js'
            },
            shared: packageJson.dependencies
        }),
    ]
}


module.exports = merge(webpackCommon, devConfig);