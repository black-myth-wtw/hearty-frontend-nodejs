const path = require('path');

const OUTPUT_DIR = path.resolve(__dirname, './build');

const webpack_component_config = {
    mode: 'production',
    target: 'web',
    devtool: false,
    entry: {
        component_index: './project/list/component/index.js'
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

module.exports = webpack_component_config;
