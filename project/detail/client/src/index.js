// const Koa = require('koa');
// const KoaStatic = require('koa-static');
// const KoaMount = require('koa-mount');
// const fs = require('fs');
// const path = require('path');
// const protobuf = require('protocol-buffers');
//
// const core = require('./core');
// const template_source = require('./template');
//
// const PORT = 3000;
//
// const STATIC_DIR = path.resolve(__dirname, './source');
// const TEMPLATE_DIR = path.resolve(__dirname, './template/index.html');
// const PROTO_DIR = path.resolve(__dirname, './proto/columns.proto');
//
// const schema = protobuf(fs.readFileSync(PROTO_DIR, 'utf-8'), 'utf-8');
//
// const socket = core.easy_socket({
//     requestSchema: schema.DetailRequest,
//     responseSchema: schema.DetailResponse,
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
// koa.use(KoaMount('/', async ctx => {
//     const {request, response} = ctx;
//
//     const {query: {column_id = 0}} = request;
//
//     const template = template_source(TEMPLATE_DIR);
//
//     const result = await new Promise((resolve, reject) => {
//         socket.write({
//             column_id,
//         }, (err, data) => {
//             err ? reject(err) : resolve(data);
//         });
//     });
//
//     response.status = 200;
//
//     try {
//         response.body = template(result);
//     } catch (err) {
//         response.status = 500;
//         response.body = err.stack;
//     }
// }));
//
// koa.listen(PORT, () => {
//     console.log(`The detail client page is running at http://localhost:${PORT}!`);
// });

console.log('NodeJS《第十九课: 极客时间 detail 课程详情页面》部分课程已完美的回溯完成!如需要检测执行结果,将以上代码注释解开即可!');
