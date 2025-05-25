// const Koa = require('koa');
// const KoaMount = require('koa-mount');
// const fs = require('fs');
// const path = require('path');
//
// const core = require('./core');
//
// const PORT = 3000;
//
// const TEMPLATE_DIR = path.resolve(__dirname, './template/index.html');
//
// const koa = new Koa();
//
// koa.use(KoaMount('/favicon.ico', ctx => {
//     const {response} = ctx;
//     response.status = 400;
//     response.body = '';
//     return false;
// }));
//
// koa.use(KoaMount('/game', core.game_koa));
//
// koa.use(KoaMount('/', ctx => {
//     const {response} = ctx;
//
//     response.status = 200;
//     response.body = fs.readFileSync(TEMPLATE_DIR, 'utf-8');
// }));
//
// koa.listen(PORT, () => {
//     console.log(`The koa async client page is running at http://localhost:${PORT}!`);
// });

console.log('NodeJS《第十四课: koa 采用 async/await 解决了处理异步事件问题的模拟石头、剪刀与布游戏大赛-模块化的 koa 采用 async/await 解决了处理异步事件问题的模拟石头、剪刀与布游戏大赛》部分课程已完美的回溯完成!如需要检测执行结果,将以上代码注释解开即可!');
