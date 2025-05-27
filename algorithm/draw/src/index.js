const lesson_ids = [
    "136797",
    "136798",
    "136799",
    "136800",
    "136801",
    "136803",
    "136804",
    "136806",
    "136807",
    "136808",
    "136809",
    "141994",
    "143517",
    "143557",
    "143564",
    "143644",
    "146470",
    "146569",
    "146582"
];

let index = 0,
    lesson_ids_length = lesson_ids.length;

// 简易的 draw 抽奖算法
// const simple_draw_algorithm = (count) => {
//     for (let i = 0; i < count; i++) {
//         index = Math.floor(Math.random() * lesson_ids_length);
//         console.log(lesson_ids[index]);
//     }
// };
// console.log('抽三: ');
// simple_draw_algorithm(3);
//
// console.log('抽十: ');
// simple_draw_algorithm(10);

// 普通的 draw 抽奖算法
// const normal_draw_algorithm = (count) => {
//     for (let i = 0; i < count; i++) {
//         index = Math.floor(Math.random() * lesson_ids_length);
//         console.log(lesson_ids[index]);
//         lesson_ids.splice(index, 1);
//         lesson_ids_length = lesson_ids.length;
//     }
// };
// console.time('normal_draw_algorithm');
// console.log('抽三: ');
// normal_draw_algorithm(3);
//
// console.log('抽十: ');
// normal_draw_algorithm(10);
// console.timeEnd('normal_draw_algorithm');

// 完整的 draw 抽奖算法
// const complete_draw_algorithm = (count) => {
//     for (let i = 0; i < count; i++) {
//         index = Math.floor(Math.random() * lesson_ids_length);
//         console.log(lesson_ids[index]);
//         lesson_ids[index] = lesson_ids[lesson_ids_length - 1];
//         lesson_ids.length--;
//         lesson_ids_length = lesson_ids.length;
//     }
// };
// console.time('complete_draw_algorithm');
// console.log('抽三: ');
// complete_draw_algorithm(3);
//
// console.log('抽十: ');
// complete_draw_algorithm(10);
// console.timeEnd('complete_draw_algorithm');

console.log('NodeJS《第三十一课: algorithm 算法-draw 抽奖算法》部分课程已完美的回溯完成!如需要检测执行结果,将以上代码注释解开即可!');
