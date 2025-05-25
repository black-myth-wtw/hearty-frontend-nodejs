const game = player_action => {
    const computer_selections = ['scissor', 'rock', 'paper'];

    if (!computer_selections.includes(player_action)) {
        console.error('您输入的模拟石头、剪刀与布游戏大赛手势不符合规范!请重新输入!【scissor rock or paper】');
        process.exit(1);
    }

    const computer_selections_length = computer_selections.length;

    const computer_random = Math.floor(Math.random() * computer_selections_length);

    const computer_action = computer_selections[computer_random];

    let player_win_index = computer_random + 1;
    if (player_win_index >= computer_selections_length) player_win_index = 0;

    console.log('第一届模拟石头、剪刀与布游戏大赛正式开始!');
    console.log(`玩家: ${player_action}, 电脑: ${computer_action}`);
    if (player_action === computer_action) {
        console.log('平局!');
        return 0;
    } else if (player_action === computer_selections[player_win_index]) {
        console.log('玩家赢!');
        return 1;
    } else {
        console.log('电脑赢!');
        return -1;
    }
};

module.exports = game;
