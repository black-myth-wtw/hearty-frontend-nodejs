const glob = require('glob');
const path = require('path');
const fs = require('fs');

const run = require('./run');

module.exports = (generate_home_dir) => {
    glob(`${generate_home_dir}/**/src/template/index.tpl`, (err, template_files) => {
        if (err) return console.error(err.message);

        const template_files_length = template_files.length;

        let route_config = {};

        template_files.forEach(async (template_file, template_index) => {
            const business_regexp = /business\/(.+)\/src\/template\/index\.tpl/,
                business_match = business_regexp.exec(template_file),
                business_name = business_match[1];

            const SOURCE_SRC_DIR = path.resolve(generate_home_dir, business_name, 'src'),
                SOURCE_CONFIG_FILE_DIR = path.resolve(SOURCE_SRC_DIR, 'config/index.js'),
                SOURCE_TEMPLATE_FILE_DIR = path.resolve(SOURCE_SRC_DIR, 'template/index.tpl'),
                SOURCE_STATIC_DIR = path.resolve(SOURCE_SRC_DIR, 'source');

            const config = await new Promise((resolve, reject) => {
                fs.readFile(SOURCE_CONFIG_FILE_DIR, 'utf-8', (err, data) => {
                    err ? reject(err) : resolve(data);
                });
            });

            const template_str = await new Promise((resolve, reject) => {
                fs.readFile(SOURCE_TEMPLATE_FILE_DIR, 'utf-8', (err, data) => {
                    err ? reject(err) : resolve(data);
                });
            });

            route_config = {
                ...route_config,
                [`/${business_name}`]: {
                    config,
                    template: {
                        template_name: SOURCE_TEMPLATE_FILE_DIR,
                        template_str,
                    },
                    source: {
                        source_name: SOURCE_STATIC_DIR,
                    }
                }
            };

            if (template_index === template_files_length - 1) {
                run(route_config);
            }
        });
    });
};
