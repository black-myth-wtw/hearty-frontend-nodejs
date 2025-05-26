// const Koa = require('koa');
// const KoaStatic = require('koa-static');
// const KoaMount = require('koa-mount');
// const fs = require('fs');
// const path = require('path');
//
// const PORT = 3000;
//
// const STATIC_DIR = path.resolve(__dirname, './source');
// const TEMPLATE_DIR = path.resolve(__dirname, './template/index.html');
//
// const koa = new Koa();
//
// const file = fs.readFileSync(TEMPLATE_DIR);
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
// koa.use(KoaMount('/', ctx => {
//     const {response} = ctx;
//     response.status = 200;
//     response.type = 'html';
//     response.body = file;
// }));
//
// koa.listen(PORT, () => {
//     console.log(`The performance tools client page is running at http://localhost:${PORT}!`);
// });

console.log('NodeJS《第二十五课: performance http xhr 网络请求性能优化的 javascript 代码优化》部分课程已完美的回溯完成!如需要检测执行结果,将以上代码注释解开即可!');
