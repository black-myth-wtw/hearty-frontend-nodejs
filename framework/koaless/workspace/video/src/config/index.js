const config = {
    column: {
        protocol: 'rpc',
        ip: '127.0.0.1',
        port: 4000,
        timeout: 6666,
        protobufFile: require('../proto/play.proto'),
        requestSchema: 'VideoRequest',
        responseSchema: 'VideoResponse',
        before: data => data,
        then: result => result.column,
        catch: error => console.error(error)
    },
    articleList: {
        protocol: 'http',
        url: 'http://127.0.0.1:4001',
        before: data => data,
        then: result => JSON.parse(result).data.list,
        catch: data => console.error(data)
    }
};

module.exports = config;
