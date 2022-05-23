const {merge} = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');

const maxAssetSize = 512000;

const webpackProd = {
    mode: 'production',
    devtool: false,
    optimization: {
        splitChunks: {
            chunks: 'async',
            minChunks: 1,
            minSize: 30 * 1024,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            enforceSizeThreshold: 50000,
            maxSize: maxAssetSize,
        },
        minimize: true,
        minimizer: [new TerserPlugin()]
    },
    performance: {
        hints: false,
        maxEntrypointSize: maxAssetSize,
        maxAssetSize: maxAssetSize
    }
}

module.exports = async ({ config, mode }) => mode === "PRODUCTION" ? merge(config, webpackProd) : config;
