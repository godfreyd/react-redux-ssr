const { resolve } = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const postcssLoader = {
    loader: 'postcss-loader',
    options: {
        config: { path: resolve(__dirname, 'postcss.config') },
        sourceMap: true
    }
};

const cssLoader = {
    loader: 'css-loader',
    options: { importLoaders: 1, sourceMap: true }
};

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
        path: resolve(__dirname, 'public')
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    // ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'style-loader',
                    cssLoader,
                    // postcssLoader
                ]
            },
            {
                test: /\.(jpg|gif|png|eot|otf|woff2?|ttf)$/,
                use: 'file-loader'
            },
            {
                test: /\.(svg)$/,
                use: [
                    {
                        loader: 'svg-url-loader',
                        options: {
                            dataUrlLimit: 1024
                        }
                    },
                    {
                        loader: 'svgo-loader',
                        options: {
                            plugins: [
                                { removeTitle: true },
                                { convertColors: { shorthex: false } },
                                { convertPathData: false }
                            ]
                        }
                    }
                ]
            }
        ]
    },
}

module.exports = merge(baseConfig, config);