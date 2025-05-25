// const express = require('express');
// const path = require('path');
// const fs = require('fs');
//
// const core = require('./core');
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
// const PORT = 3000;
//
// const TEMPLATE_DIR = path.resolve(__dirname, './template/index.html');
//
// const app = express();
//
// app.get('/favicon.ico', (request, response) => {
//     response.status(400);
//     response.send('');
//     return false;
// });
//
// app.get('/game', (request, response, next) => {
//     if (player_win_count >= player_win_sum || player_same_sum === player_same_sum_code) {
//         response.status(500);
//         response.send('你太厉害了!我不跟你玩儿了!');
//         return false;
//     }
//
//     if (player_same_count >= player_same_sum) {
//         player_same_sum = player_same_sum_code;
//         response.status(400);
//         response.send('你作弊!');
//         return false;
//     }
//
//     next();
//
//     if (response.playerWon) player_win_count++;
// }, (request, response, next) => {
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
//     next();
// }, (request, response) => {
//     const {query} = request;
//     const {action} = query;
//
//     const result = core.game(action);
//     if (result === player_win_code) response.playerWon = true;
//
//     response.status(200);
//     response.send(game_result_config[result]);
// });
//
// app.get('/', (request, response) => {
//     response.status(200);
//     response.send(fs.readFileSync(TEMPLATE_DIR, 'utf-8'));
// });
//
// app.listen(PORT, () => {
//     console.log(`The express complete client page is running at http://localhost:${PORT}!`);
// });

console.log('NodeJS《第十三课: express 拥有强大的路由分发功能的模拟石头、剪刀与布游戏大赛-完整的 express 拥有强大的路由分发功能的模拟石头、剪刀与布游戏大赛》部分课程已完美的回溯完成!如需要检测执行结果,将以上代码注释解开即可!');
