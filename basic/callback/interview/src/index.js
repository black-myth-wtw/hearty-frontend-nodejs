// const interview = (round, callback) => {
//     const timer_interview = setTimeout(() => {
//         const interview_access_random = Math.random();
//         if (interview_access_random <= .8) {
//             callback(null, 'success!');
//         } else {
//             const error = new Error('failed!');
//             error.round = round;
//             callback(error);
//         }
//         clearTimeout(timer_interview);
//     }, 888);
// };
//
// interview(1, err => {
//     if (err) return console.error(`cry at ${err.round} round!${err.message}`);
//     interview(2, err => {
//         if (err) return console.error(`cry at round ${err.round}!${err.message}`);
//         interview(3, (err, result) => {
//             if (err) return console.error(`cry at round ${err.round}!${err.message}`);
//             console.log(`smile!${result}`);
//         });
//     });
// });

console.log('NodeJS《第八课: callback 回调函数-callback 回调函数示例:面试》部分课程已完美的回溯完成!如需要检测执行结果,将以上代码注释解开即可!');
