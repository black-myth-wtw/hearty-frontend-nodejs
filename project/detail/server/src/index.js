const protobuf = require('protocol-buffers');
const fs = require('fs');
const path = require('path');

const core = require('./core');
const data = require('./data');

const PORT = 4000;

const PROTO_DIR = path.resolve(__dirname, './proto/columns.proto');

const schema = protobuf(fs.readFileSync(PROTO_DIR, 'utf-8'), 'utf-8');

const tcp_server = core.rpc({
    requestSchema: schema.DetailRequest,
    responseSchema: schema.DetailResponse,
});

const server = tcp_server.createServer((request, response) => {
    const {body: {column_id = 0}} = request;

    console.log(`极客时间 detail 详情页面网络请求的课程 ID 为 ${column_id}`);

    const columns = data.columns;

    //......

    response.end({
        column: columns[0],
        recommend_columns: [columns[2], columns[3]],
    });
});

server.listen(PORT, () => {
    console.log(`The detail page server is running at http://localhost:${PORT}!`);
});

