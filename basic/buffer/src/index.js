// const protobuf = require('protocol-buffers');
// const path = require('path');
// const fs = require('fs');
//
// const PROTO_DIR = path.resolve(__dirname, './proto/black_myth_wtw.proto');
//
// const buffer_start = Buffer.from('hello buffer!!!!!!!!');
// const buffer_main = Buffer.from([1, 2, 3, 4]);
// const buffer_end = Buffer.alloc(4);
//
// const schema = protobuf(fs.readFileSync(PROTO_DIR, 'utf-8'), 'utf-8');
//
// const black_myth_wtw = {
//     name: 'black-myth-wtw',
//     age: 32,
//     gender: true,
//     birthday: '1993-06-30',
//     hobby: {
//         sports: ['basketball', 'computer games']
//     }
// };
//
// console.log(buffer_start);
// console.log(buffer_main);
// console.log(buffer_end);
//
// // buffer_main.writeInt16BE(32768, 2);
// buffer_main.writeInt16BE(32767, 2);
// console.log(buffer_main);
//
// // buffer_main.writeInt16BE(512, 3);
// // console.log(buffer_main);
//
// buffer_end.writeInt16BE(512, 2);
// console.log(buffer_end);
// buffer_end.writeInt16LE(512, 2);
// console.log(buffer_end);
// buffer_end.writeInt32BE(512);
// console.log(buffer_end);
// buffer_end.writeInt32LE(512);
// console.log(buffer_end);
//
// const buffer_encode = schema.Black_Myth_WTW.encode(black_myth_wtw);
// console.log(buffer_encode);
// const decode_result = schema.Black_Myth_WTW.decode(buffer_encode);
// console.log(decode_result);

console.log('NodeJS《第十五课: buffer 二进制数据传输》部分课程已完美的回溯完成!如需要检测执行结果,将以上代码注释解开即可!');
