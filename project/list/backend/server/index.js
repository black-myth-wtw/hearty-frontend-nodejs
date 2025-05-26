const protobuf = require('protocol-buffers');
const fs = require('fs');
const path = require('path');

const core = require('./core');
const data = require('./data');

const PORT = 4000;

const columns_sort_config = {
    0: (a, b) => a.id - b.id,
    1: (a, b) => a.id - b.id,
    2: (a, b) => b.sub_count - a.sub_count,
    3: (a, b) => b.column_price - a.column_price,
};

const PROTO_DIR = path.resolve(__dirname, './proto/columns.proto');

const schema = protobuf(fs.readFileSync(PROTO_DIR, 'utf-8'), 'utf-8');

const tcp_server = core.rpc({
    requestSchema: schema.ListRequest,
    responseSchema: schema.ListResponse,
});

const server = tcp_server.createServer((request, response) => {
    const {body: {sort = 0, filter = 0}} = request;

    const {columns} = data;

    console.log(`极客时间 list 课程列表页面网络请求的列表筛选条件为: 排序(sort)-${sort}, 过滤(filter)-${filter}`);

    response.end({
        columns: columns.sort(columns_sort_config[sort]).filter(current_column => filter ? filter === current_column.type : current_column)
    });
});

server.listen(PORT, () => {
    console.log(`The list page server is running at http://localhost:${PORT}!`);
});
