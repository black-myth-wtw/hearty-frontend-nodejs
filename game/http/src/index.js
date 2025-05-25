// const http = require('http');
// const fs = require('fs');
// const path = require('path');
// const url = require('url');
// const querystring = require('querystring');
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
// const player_won_code = 1,
//     player_won_sum = 3,
//     player_same_sum_code = 9;
//
// let player_won_count = 0,
//     player_same_count = 0,
//     player_same_sum = 2,
//     last_player_action = null;
//
// const TEMPLATE_DIR = path.resolve(__dirname, './template/index.html');
//
// const server = http.createServer((req, res) => {
//     const {pathname, query} = url.parse(req.url);
//
//     if (pathname === '/favicon.ico') {
//         res.writeHead(400, {'Content-Type': 'text/plain'});
//         res.end('');
//         return false;
//     }
//
//     if (pathname === '/game') {
//         if (player_won_count >= player_won_sum || player_same_sum === player_same_sum_code) {
//             res.writeHead(500);
//             res.end('你太厉害了!我不跟你玩儿了!');
//             return false;
//         }
//
//         if (player_same_count >= player_same_sum) {
//             player_same_sum = player_same_sum_code;
//             res.writeHead(400);
//             res.end('你作弊!');
//             return false;
//         }
//
//         const {action} = querystring.parse(query);
//
//         if (last_player_action && last_player_action === action) {
//             player_same_count++;
//         } else {
//             player_same_count = 0;
//         }
//         last_player_action = action;
//
//         const result = core.game(action);
//         if (result === player_won_code) player_won_count++;
//
//         res.writeHead(200);
//         res.end(game_result_config[result]);
//     }
//
//     if (pathname === '/') {
//         res.writeHead(200);
//         res.end(fs.readFileSync(TEMPLATE_DIR, 'utf-8'));
//     }
// });
//
// server.listen(PORT, () => {
//     console.log(`The http game client page is running at http://localhost:${PORT}!`);
// });

console.log('NodeJS《第十二课: http xhr 网络请求网页的模拟石头、剪刀与布游戏大赛》部分课程已完美的回溯完成!如需要检测执行结果,将以上代码注释解开即可!');
