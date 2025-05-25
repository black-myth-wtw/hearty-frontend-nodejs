// const net = require('net');
//
// const HOST = '127.0.0.1',
//     PORT = 4000;
//
// const PACKAGE_HEADER_LENGTH = 4,
//     PACKAGE_BODY_LENGTH = 4;
//
// const lesson_ids = [
//         "136797",
//         "136798",
//         "136799",
//         "136800",
//         "136801",
//         "136803",
//         "136804",
//         "136806",
//         "136807",
//         "136808",
//         "136809",
//         "141994",
//         "143517",
//         "143557",
//         "143564",
//         "143644",
//         "146470",
//         "146569",
//         "146582"
//     ],
//     lesson_ids_length = lesson_ids.length;
//
// let index = 0,
//     seq = 0,
//     id = null;
//
// const socket = new net.Socket();
//
// socket.connect({
//     host: HOST,
//     port: PORT,
//     keepAlive: true,
// });
//
// const encode = (id) => {
//     const header = Buffer.alloc(PACKAGE_HEADER_LENGTH);
//     header.writeInt32BE(++seq);
//     console.log(`极客时间课程包头为 ${seq} 所对应的课程 ID 为 ${id}`);
//     const body = Buffer.alloc(PACKAGE_BODY_LENGTH);
//     body.writeInt32BE(id);
//     return Buffer.concat([header, body]);
// };
//
// const decode = buffer => {
//     const seq = buffer.readInt32BE();
//     const body = buffer.slice(PACKAGE_HEADER_LENGTH),
//         result = body.toString().trim();
//
//     return {
//         result,
//         seq,
//     }
// };
//
// setInterval(() => {
//     index = Math.floor(Math.random() * lesson_ids_length);
//     id = lesson_ids[index];
//     socket.write(encode(id));
// }, 50);
//
// // for (let i = 0; i < 200; i++) {
// //     index = Math.floor(Math.random() * lesson_ids_length);
// //     id = lesson_ids[index];
// //     socket.write(encode(id));
// // }
//
// socket.on('data', data => {
//     const {seq, result} = decode(data);
//
//     console.log(`极客时间课程包头为 ${seq} 所对应的课程名称为 ${result}`);
// });

console.log('NodeJS《第十六课: rpc 基于 tcp/udp 协议的网络请求,二进制数据传输-half-duplex 半双工通信-完整的 half-duplex 半双工通信》部分课程已完美的回溯完成!如需要检测执行结果,将以上代码注释解开即可!');
