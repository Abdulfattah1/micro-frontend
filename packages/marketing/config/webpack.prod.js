const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');
const webpackCommon = require('./webpack.common');

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name][contenthash].js'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'marketingApp',
            filename: 'remoteEntry.js',
            exposes: {
                './marketingIndex': './src/bootstrap.js'
            },
            shared: packageJson.dependencies
        })
    ]
}

module.exports = merge(webpackCommon, prodConfig);