// const Koa = require('koa');
// const KoaStatic = require('koa-static');
// const KoaMount = require('koa-mount');
// const {graphqlHTTP} = require('koa-graphql');
// const fs = require('fs');
// const path = require('path');
//
// const schema = require('./schema');
//
// const PORT = 3000;
//
// const TEMPLATE_DIR = path.resolve(__dirname, './template/index.html');
// const STATIC_DIR = path.resolve(__dirname, './source');
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
// koa.use(KoaMount('/api', graphqlHTTP({
//     schema: schema.comments,
// })));
//
// koa.use(KoaMount('/', ctx => {
//     const {response} = ctx;
//     response.status = 200;
//     try {
//         response.body = fs.readFileSync(TEMPLATE_DIR, 'utf-8');
//     } catch (err) {
//         response.status = 500;
//         response.body = err.stack;
//     }
// }));
//
// koa.listen(PORT, () => {
//     console.log(`The video client page is running at http://localhost:${PORT}!`);
// });

console.log('NodeJS《第二十一课: 极客时间 video 课程视频页面》部分课程已完美的回溯完成!如需要检测执行结果,将以上代码注释解开即可!');
