const glob = require('glob');
const path = require('path');

const uploader = require('./uploader');

const GENERATE_HOME_DIR = path.resolve(process.cwd(), 'framework/koaless/business');

glob('./framework/koaless/workspace/**/template/index.html', (err, template_files) => {
    if (err) return console.error(err.message);

    template_files.forEach(template_file => {
        const workspace_regexp = /workspace\/(.+)\/src\/template\/index\.html/,
            workspace_match = workspace_regexp.exec(template_file),
            workspace_name = workspace_match[1];

        uploader(GENERATE_HOME_DIR, workspace_name);
    });
});
