// const glob = require('glob');
// const path = require('path');
// const fs = require('fs');
//
// const run = require('./run');
//
// (async () => {
//     const SOURCE_BASE_DIR = path.resolve(process.cwd(), 'framework/koaless/business');
//
//     glob('./framework/koaless/business/**/src/template/index.tpl', (err, template_files) => {
//         if (err) return console.error(err.message);
//
//         const template_files_length = template_files.length;
//
//         let route_config = {};
//
//         template_files.forEach(async (template_file, template_index) => {
//             const business_regexp = /business\/(.+)\/src\/template\/index\.tpl/,
//                 business_match = business_regexp.exec(template_file),
//                 business_name = business_match[1];
//
//             const SOURCE_SRC_DIR = path.resolve(SOURCE_BASE_DIR, business_name, 'src'),
//                 SOURCE_CONFIG_FILE_DIR = path.resolve(SOURCE_SRC_DIR, 'config/index.js'),
//                 SOURCE_TEMPLATE_FILE_DIR = path.resolve(SOURCE_SRC_DIR, 'template/index.tpl'),
//                 SOURCE_STATIC_DIR = path.resolve(SOURCE_SRC_DIR, 'source');
//
//             const config = await new Promise((resolve, reject) => {
//                 fs.readFile(SOURCE_CONFIG_FILE_DIR, 'utf-8', (err, data) => {
//                     err ? reject(err) : resolve(data);
//                 });
//             });
//
//             const template_str = await new Promise((resolve, reject) => {
//                 fs.readFile(SOURCE_TEMPLATE_FILE_DIR, 'utf-8', (err, data) => {
//                     err ? reject(err) : resolve(data);
//                 });
//             });
//
//             route_config = {
//                 ...route_config,
//                 [`/${business_name}`]: {
//                     config,
//                     template: {
//                         template_name: SOURCE_TEMPLATE_FILE_DIR,
//                         template_str,
//                     },
//                     source: {
//                         source_name: SOURCE_STATIC_DIR,
//                     }
//                 }
//             };
//
//             if (template_index === template_files_length - 1) {
//                 run(route_config);
//             }
//         });
//     });
// })();

console.log('NodeJS《第三十课: framework koaless 封装底层逻辑,隐藏细节,简易配置拼接各类网络请求数据,展示平台网页》部分课程已完美的回溯完成!如需要检测执行结果,将以上代码注释解开即可!');
