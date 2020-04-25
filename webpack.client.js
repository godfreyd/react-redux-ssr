const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
    // Inform webpack that we're building a bundle
    // for Node, rather than for the browser
    target: 'web',

    // Tell webpack the root file of our
    // client application
    entry: './src/client/client.js',

    // Tell webpack where to put the output file
    // that is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
}

module.exports = merge(baseConfig, config);