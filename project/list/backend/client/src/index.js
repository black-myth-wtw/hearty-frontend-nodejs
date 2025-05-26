// const Koa = require('koa');
// const KoaStatic = require('koa-static');
// const KoaMount = require('koa-mount');
// const path = require('path');
// const fs = require('fs');
// const protobuf = require('protocol-buffers');
// const {renderToString} = require('react-dom/server');
//
// const template_source = require('./template');
// const core = require('./core');
// const {App} = require('../../build/ssr_index');
//
// const PORT = 3000;
//
// const PROTO_DIR = path.resolve(__dirname, './proto/columns.proto');
// const STATIC_DIR = path.resolve(__dirname, './source');
// const TEMPLATE_DIR = path.resolve(__dirname, './template/index.html');
//
// const schema = protobuf(fs.readFileSync(PROTO_DIR, 'utf-8'), 'utf-8');
//
// const socket = core.easy_socket({
//     requestSchema: schema.ListRequest,
//     responseSchema: schema.ListResponse,
// });
//
// const koa = new Koa();
//
// koa.use(KoaStatic(STATIC_DIR));
//
// koa.use(KoaMount('/favicon.ico', ctx => {
//     const {response} = ctx;
//     response.status = 400;
//     response.body = '';
//     return false;
// }));
//
// koa.use(KoaMount('/api', async ctx => {
//     const {request, response} = ctx;
//
//     let {query: {sort = 0, filter = 0}} = request;
//
//     sort = Number.isNaN(sort) ? 0 : +sort;
//     filter = Number.isNaN(filter) ? 0 : +filter;
//
//     const result = await new Promise((resolve, reject) => {
//         socket.write({
//             sort,
//             filter,
//         }, (err, data) => {
//             err ? reject(err) : resolve(data);
//         });
//     });
//
//     response.status = 200;
//     try {
//         response.body = result;
//     } catch (err) {
//         response.status = 500;
//         response.body = err.stack;
//     }
// }));
//
// koa.use(KoaMount('/', async ctx => {
//     const {request, response} = ctx;
//
//     let {query: {sort = 0, filter = 0}} = request;
//
//     sort = Number.isNaN(sort) ? 0 : +sort;
//     filter = Number.isNaN(filter) ? 0 : +filter;
//
//     const template = template_source(TEMPLATE_DIR);
//
//     const result = await new Promise((resolve, reject) => {
//         socket.write({
//             sort,
//             filter,
//         }, (err, data) => {
//             err ? reject(err) : resolve(data);
//         });
//     });
//
//     const react_list_string = renderToString(App(result));
//
//     response.status = 200;
//     try {
//         response.body = template({
//             react_list_string,
//             react_list_data: result,
//             react_list_sort: sort,
//             react_list_filter: filter,
//         })
//     } catch (err) {
//         response.status = 500;
//         response.body = err.stack;
//     }
// }));
//
// koa.listen(PORT, () => {
//     console.log(`The list client page is running at http://localhost:${PORT}!`);
// });

console.log('NodeJS《第二十二课: 极客时间 list 课程列表页面》部分课程已完美的回溯完成!如需要检测执行结果,将以上代码注释解开即可!');
