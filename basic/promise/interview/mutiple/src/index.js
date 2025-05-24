// const interview = name => {
//     return new Promise((resolve, reject) => {
//         const timer_interview = setTimeout(() => {
//             const interview_access_random = Math.random();
//             if (interview_access_random <= .8) {
//                 resolve('success!');
//             } else {
//                 const error = new Error('failed!');
//                 error.name = name;
//                 reject(error);
//             }
//             clearTimeout(timer_interview);
//         }, 888);
//     });
// };
//
// Promise.all([interview('Tencent'), interview('Alibaba'), interview('Game Science')]).then(results => {
//     const results_length = results.length;
//     console.log(`smile!${results[results_length - 1]}`);
// }).catch(err => console.error(`cry at company ${err.name}!${err.message}`));

console.log('NodeJS《第九课: promise 异步状态机-promise 异步状态机示例:面试-多次同步执行的 promise 异步状态机示例》部分课程已完美的回溯完成!如需要检测执行结果,将以上代码注释解开即可!');
