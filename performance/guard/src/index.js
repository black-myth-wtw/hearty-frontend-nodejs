// const cluster = require('cluster');
// // const os = require('os');
//
// const core = require('./core');
//
// const memory_leak_sum = 700;
// //     heart_beat_sum = 3;
// //
// // let heart_beat_count = 0;
//
// if (cluster.isMaster) {
//     // for (let i = 0; i < os.cpus().length; i++) {
//     // 心跳检测:僵尸进程查找简易版
//     // const worker = cluster.fork();
//     // const timer_hear_beat = setInterval(() => {
//     //     worker.send('ping!!!');
//     //     console.log('ping!!!');
//     //     heart_beat_count++;
//     //     if (heart_beat_count >= heart_beat_sum) {
//     //         heart_beat_count = 0;
//     //         process.kill(worker.process.pid);
//     //         clearInterval(timer_hear_beat);
//     //     }
//     // }, 888);
//     //
//     // worker.on('message', (message) => {
//     //     if (message === 'pong!!!') {
//     //         console.log('pong!!!');
//     //         heart_beat_count--;
//     //     }
//     // });
//
//     // 心跳检测:僵尸进程查找完整版
//     let worker = core.heart_beat(cluster);
//
//     // 监视子进程断链退出补救措施:延时重载
//     cluster.on('exit', () => {
//         clearInterval(worker.timer_heart_beat);
//         const timer_exit = setTimeout(() => {
//             worker = core.heart_beat(cluster);
//             clearTimeout(timer_exit);
//         }, 888);
//     });
//     // }
// } else {
//     // 异常错误捕获机制
//     process.on('uncaughtException', (error) => {
//         console.log(`The uncaught exception occur: ${error.message}!`);
//         process.exit(1);
//     });
//
//     // 内存堆栈溢出监控
//     const timer_memory_leak = setInterval(() => {
//         const memory_usage = process.memoryUsage().rss;
//         const memory_usage_transform = (memory_usage / 1024 / 1024).toFixed(2);
//         // console.log(`内存大小为: ${memory_usage_transform}MB!`);
//         if (memory_usage_transform >= memory_leak_sum) {
//             console.log('oom!');
//             process.exit(1);
//             clearInterval(timer_memory_leak)
//         }
//     }, 888);
//
//     // 心跳检测:僵尸进程查找简易版/完整版
//     process.on('message', (message) => {
//         if (message === 'ping!!!') {
//             process.send('pong!!!');
//         }
//     });
//
//     require('./app');
// }

console.log('NodeJS《第二十八课: performance http xhr 网络请求性能优化的 guard 进程守护与管理》部分课程已完美的回溯完成!如需要检测执行结果,将以上代码注释解开即可!');
