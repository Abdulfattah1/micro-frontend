const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { merge } = require('webpack-merge');
const WebpackCommon = require('./webpack.common');
const packageJson = require('../package.json');
const devConfig = {
    mode: 'development',
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                'marketingApp': 'marketingApp@http://localhost:8081/remoteEntry.js'
            },
            shared: {
                ...packageJson.dependencies
            }
        })
    ],
}

module.exports = merge(WebpackCommon, devConfig);