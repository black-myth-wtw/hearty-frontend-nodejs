const protobuf = require('protocol-buffers');
const path = require('path');
const fs = require('fs');

const core = require('./core');
const data = require('./data');

const PORT = 4000;

const PROTO_DIR = path.resolve(__dirname, './proto/columns.proto');

const schema = protobuf(fs.readFileSync(PROTO_DIR, 'utf-8'), 'utf-8');

const tcp_server = core.rpc({
    requestSchema: schema.VideoRequest,
    responseSchema: schema.VideoResponse
});

const server = tcp_server.createServer((request, response) => {
    const {body: {column_id = 0}} = request;

    console.log(`极客时间 video 视频页面 rpc 网络请求的课程 ID 为 ${column_id}`);

    //......

    response.end({
        column: data.columns[0],
    });
});

server.listen(PORT, () => {
    console.log(`The framework koaless video page column rpc server is running at http://localhost:${PORT}!`);
});
