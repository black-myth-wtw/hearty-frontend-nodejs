const net = require('net');

const PORT = 4000;

const PACKAGE_HEADER_LENGTH = 4;

const lessons = {
    136797: "01 | 课程介绍",
    136798: "02 | 内容综述",
    136799: "03 | Node.js是什么？",
    136800: "04 | Node.js可以用来做什么？",
    136801: "05 | 课程实战项目介绍",
    136803: "06 | 什么是技术预研？",
    136804: "07 | Node.js开发环境安装",
    136806: "08 | 第一个Node.js程序：石头剪刀布游戏",
    136807: "09 | 模块：CommonJS规范",
    136808: "10 | 模块：使用模块规范改造石头剪刀布游戏",
    136809: "11 | 模块：npm",
    141994: "12 | 模块：Node.js内置模块",
    143517: "13 | 异步：非阻塞I/O",
    143557: "14 | 异步：异步编程之callback",
    143564: "15 | 异步：事件循环",
    143644: "16 | 异步：异步编程之Promise",
    146470: "17 | 异步：异步编程之async/await",
    146569: "18 | HTTP：什么是HTTP服务器？",
    146582: "19 | HTTP：简单实现一个HTTP服务器"
};

const encode = (data, seq) => {
    const header = Buffer.alloc(PACKAGE_HEADER_LENGTH);
    header.writeInt32BE(seq);
    const body = Buffer.from(data);
    return Buffer.concat([header, body]);
};

const decode = buffer => {
    const seq = buffer.readInt32BE();
    const body = buffer.slice(PACKAGE_HEADER_LENGTH),
        result = body.readInt32BE();
    return {
        result,
        seq,
    };
};

const server = net.createServer(socket => {
    socket.on('data', data => {
        const timer_half_duplex = setTimeout(() => {
            // console.log(data);
            const {seq, result: id} = decode(data);
            const buffer_encode = encode(lessons[id], seq);
            socket.write(buffer_encode);
            clearTimeout(timer_half_duplex);
        }, 888);
    });
});

server.listen(PORT, () => {
    console.log(`The rpc simplex server is running at http://localhost:${PORT}!`);
});
