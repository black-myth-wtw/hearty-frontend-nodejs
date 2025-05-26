const path = require('path');

const OUTPUT_DIR = path.resolve(__dirname, './build');

const webpack_ssr_config = {
    mode: 'production',
    target: 'node',
    devtool: false,
    entry: {
        ssr_index: './project/list/backend/client/src/page/index.js'
    },
    output: {
        publicPath: '.',
        path: OUTPUT_DIR,
        filename: '[name].js',
        chunkFilename: '[name].js',
        library: {
            type: 'umd',
        }
    },
    stats: {
        preset: 'minimal'
    },
    module: {
        rules: [{
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                }
            }]
        }]
    }
};

module.exports = webpack_ssr_config;
