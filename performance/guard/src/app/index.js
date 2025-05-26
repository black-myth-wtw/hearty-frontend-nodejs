const http = require('http');
const path = require('path');
const fs = require('fs');
const url = require('url');

const PORT = 3000;

// 内存堆栈溢出监控
// const leak = [];

const TEMPLATE_DIR = path.join(__dirname, './template/index.html');

const server = http.createServer((req, res) => {
    const {pathname} = url.parse(req.url);

    if (pathname === '/favicon.ico') {
        res.writeHead(400, {'Content-Type': 'text/plain'});
        res.end('');
        return false;
    }

    if (pathname === '/') {
        res.writeHead(200);
        // 异常错误捕获机制
        // console.log(window.location.href);
        // 内存堆栈溢出监控
        // leak.push(fs.readFileSync(TEMPLATE_DIR, 'utf-8'));
        res.end(fs.readFileSync(TEMPLATE_DIR, 'utf-8'));
    }
});

server.listen(PORT, () => {
    console.log(`The guard client page is running at http://localhost:${PORT}!`);
    // 心跳检测:僵尸进程查找简易版/完整版
    // while (true) {
    // }
});
