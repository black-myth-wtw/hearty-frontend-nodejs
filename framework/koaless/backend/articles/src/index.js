const url = require('url');
const querystring = require('querystring');

const core = require('./core');
const data = require('./data');

const PORT = 4001;

const server = core.http((req, res) => {
    const {pathname, query} = url.parse(req.url);

    if (pathname === '/favicon.ico') {
        res.writeHead(400, {'Content-Type': 'text/plain'});
        res.end('');
        return false;
    }

    const {column_id = 0} = querystring.parse(query);

    console.log(`极客时间 video 视频页面 http 网络请求的课程 ID 为 ${column_id}`);

    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(data.articles));
});

server.listen(PORT, () => {
    console.log(`The framework koaless video page articles http server is running at http://localhost:${PORT}!`);
});
