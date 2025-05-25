const Koa = require('koa');

const game = require('./game');

const game_result_config = {
    0: '平局!',
    1: '你赢了!',
    '-1': '你输了!'
};

const player_win_code = 1,
    player_win_sum = 3,
    player_same_sum_code = 9;

let player_win_count = 0,
    player_same_count = 0,
    player_same_sum = 2,
    last_player_action = null;

const game_koa = new Koa();

game_koa.use(async (ctx, next) => {
    const {response} = ctx;

    if (player_win_count >= player_win_sum || player_same_sum === player_same_sum_code) {
        response.status = 500;
        response.body = '你太厉害了!我不跟你玩儿了!';
        return false;
    }

    if (player_same_count >= player_same_sum) {
        player_same_sum = player_same_sum_code;
        response.status = 400;
        response.body = '你作弊!';
        return false;
    }

    await next();

    if (ctx.playerWon) player_win_count++;
});

game_koa.use(async (ctx, next) => {
    const {request} = ctx;

    const {query} = request;
    const {action} = query;

    if (last_player_action && last_player_action === action) {
        player_same_count++;
    } else {
        player_same_count = 0;
    }
    last_player_action = action;

    await next();
});

game_koa.use(async ctx => {
    const {request, response} = ctx;

    const {query} = request;
    const {action} = query;

    await new Promise(resolve => {
        const timer_koa_async = setTimeout(() => {
            const result = game(action);
            if (result === player_win_code) ctx.playerWon = true;

            response.status = 200;
            response.body = game_result_config[result];
            resolve();
            clearTimeout(timer_koa_async);
        }, 888);
    });
});

module.exports = game_koa;
