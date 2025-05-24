// const loop = {
//     queue: [],
//     eventQueue: [],
//     timeoutQueue: [],
//     init() {
//         while (this.queue.length) {
//             const callback = this.queue.shift();
//             callback();
//         }
//         setInterval(() => this.init(), 50);
//     },
//     addListener(callback) {
//         this.queue.push(callback);
//     }
// };
//
// loop.init();
//
// loop.addListener(() => {
//     console.log('loop start!!!!!!!!');
// });
//
// const timer_start = setTimeout(() => {
//     loop.addListener(() => {
//         console.log('loop main!!!!!!!!');
//         clearTimeout(timer_start);
//     });
// }, 666);
//
// loop.addListener(() => {
//     const timer_main = setTimeout(() => {
//         console.log('loop aside!!!!!!!!');
//         clearTimeout(timer_main);
//     }, 1888);
// });
//
// // const timer_end = setTimeout(() => {
// //     loop.addListener(() => {
// //         const timer_final = setTimeout(() => {
// //             console.log('loop end!!!!!!!!');
// //             clearTimeout(timer_final);
// //             clearTimeout(timer_end);
// //         }, 888);
// //     });
// // }, 2666);
//
// const timer_end = setTimeout(() => {
//     loop.addListener(() => {
//         // const timer_final = setTimeout(() => {
//         console.log('loop end!!!!!!!!');
//         // clearTimeout(timer_final);
//         clearTimeout(timer_end);
//         // }, 888);
//     });
// }, 2666);

console.log('NodeJS《第七课: loop 事件循环机制》部分课程已完美的回溯完成!如需要检测执行结果,将以上代码注释解开即可!');
