// const Koa = require('koa');
// const KoaMount = require('koa-mount');
// const fs = require('fs');
// const path = require('path');
//
// const core = require('./core');
//
// const PORT = 3000;
//
// const game_result_config = {
//     0: '平局!',
//     1: '你赢了!',
//     '-1': '你输了!'
// };
//
// const player_win_code = 1,
//     player_win_sum = 3,
//     player_same_sum_code = 9;
//
// let player_win_count = 0,
//     player_same_count = 0,
//     player_same_sum = 2,
//     last_player_action = null;
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
// koa.use(KoaMount('/game', ctx => {
//     const {request, response} = ctx;
//
//     if (player_win_count >= player_win_sum || player_same_sum === player_same_sum_code) {
//         response.status = 500;
//         response.body = '你太厉害了!我不跟你玩儿了!';
//         return false;
//     }
//
//     if (player_same_count >= player_same_sum) {
//         player_same_sum = player_same_sum_code;
//         response.status = 400;
//         response.body = '你作弊!';
//         return false;
//     }
//
//     const {query} = request;
//     const {action} = query;
//
//     if (last_player_action && last_player_action === action) {
//         player_same_count++;
//     } else {
//         player_same_count = 0;
//     }
//     last_player_action = action;
//
//     const result = core.game(action);
//     if (result === player_win_code) player_win_count++;
//
//     response.status = 200;
//     response.body = game_result_config[result];
// }));
//
// koa.use(KoaMount('/', ctx => {
//     const {response} = ctx;
//
//     response.status = 200;
//     response.body = fs.readFileSync(TEMPLATE_DIR, 'utf-8');
// }));
//
// koa.listen(PORT, () => {
//     console.log(`The koa simple client page is running at http://localhost:${PORT}!`);
// });

console.log('NodeJS《第十四课: koa 采用 async/await 解决了处理异步事件问题的模拟石头、剪刀与布游戏大赛-简易的 koa 采用 async/await 解决了处理异步事件问题的模拟石头、剪刀与布游戏大赛》部分课程已完美的回溯完成!如需要检测执行结果,将以上代码注释解开即可!');
