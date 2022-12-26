const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { merge } = require('webpack-merge');
const webpackCommon = require('./webpack.common');
const packageJson = require('../package.json');

const domain = process.env.NODE_PRODUCTION;
const prodConfig = {
    mode: 'production',
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                'marketingApp': `marketingApp@${domain}/marketing/remoteEntry.js`
            },
            shared: packageJson.dependencies
        })
    ]
}

module.exports = merge(webpackCommon, prodConfig);