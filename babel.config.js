const babel_config = {
    sourceType: 'unambiguous',
    presets: [[
        '@babel/preset-env',
        {
            useBuiltIns: 'usage',
            modules: false,
            loose: false,
            corejs: {
                version: 3,
                proposals: true,
            }
        }
    ], [
        '@babel/preset-react',
        {
            runtime: 'automatic',
        }
    ]],
    plugins: []
};

module.exports = babel_config;
