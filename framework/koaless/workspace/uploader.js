const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const mkdirp = require('mkdirp');
const memory_fs = require('memory-fs');
const copy = require('copy-dir');

const uploader = (home_dir, workspace_name) => {
    const SOURCE_BASE_DIR = path.resolve(__dirname, workspace_name, 'src'),
        SOURCE_STATIC_DIR = path.resolve(SOURCE_BASE_DIR, 'source'),
        SOURCE_CONFIG_FILE_DIR = path.resolve(SOURCE_BASE_DIR, 'config/index.js'),
        SOURCE_TEMPLATE_FILE_DIR = path.resolve(SOURCE_BASE_DIR, 'template/index.html');

    const GENERATE_BASE_DIR = path.resolve(home_dir, workspace_name, 'src'),
        GENERATE_STATIC_DIR = path.resolve(GENERATE_BASE_DIR, 'source'),
        GENERATE_CONFIG_DIR = path.resolve(GENERATE_BASE_DIR, 'config'),
        GENERATE_TEMPLATE_DIR = path.resolve(GENERATE_BASE_DIR, 'template'),
        GENERATE_CONFIG_FILE_DIR = path.resolve(GENERATE_CONFIG_DIR, 'index.js'),
        GENERATE_TEMPLATE_FILE_DIR = path.resolve(GENERATE_TEMPLATE_DIR, 'index.tpl');

    mkdirp.sync(GENERATE_BASE_DIR);
    mkdirp.sync(GENERATE_CONFIG_DIR);
    mkdirp.sync(GENERATE_TEMPLATE_DIR);

    copy.sync(SOURCE_STATIC_DIR, GENERATE_STATIC_DIR, {
        overwrite: true,
    });

    fs.createReadStream(SOURCE_TEMPLATE_FILE_DIR, 'utf-8').pipe(fs.createWriteStream(GENERATE_TEMPLATE_FILE_DIR, 'utf-8'));

    const mfs = new memory_fs();

    const compiler = webpack({
        mode: 'development',
        devtool: false,
        target: 'node',
        entry: {
            [workspace_name]: SOURCE_CONFIG_FILE_DIR,
        },
        output: {
            publicPath: '.',
            path: `/${workspace_name}`,
            filename: '[name].js',
            chunkFilename: '[name].js',
            // libraryTarget: 'umd',
        },
        module: {
            // rules: [{
            //     test: /\.js[x]?$/,
            //     exclude: /node_modules/,
            //     use: [{
            //         loader: 'babel-loader',
            //         options: {
            //             cacheDirectory: true,
            //         }
            //     }]
            // }, {
            rules: [{
                test: /\.proto$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'text-loader',
                }]
            }]
        }
    });

    compiler.outputFileSystem = mfs;

    compiler.run(err => {
        if (err) return console.error(err);
        const content = mfs.readFileSync(`/${workspace_name}/${workspace_name}.js`, 'utf-8');
        fs.writeFileSync(GENERATE_CONFIG_FILE_DIR, content, 'utf-8');
    });
};

module.exports = uploader;
