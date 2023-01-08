const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { merge } = require('webpack-merge');
const WebpackCommon = require('./webpack.common');
const packageJson = require('../package.json');
const devConfig = {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:8080/'
    },
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
                'marketingApp': 'marketingApp@http://localhost:8081/remoteEntry.js',
                'authApp': 'authApp@http://localhost:8082/remoteEntry.js'
            },
            shared: {
                ...packageJson.dependencies
            }
        })
    ],
}

module.exports = merge(WebpackCommon, devConfig);