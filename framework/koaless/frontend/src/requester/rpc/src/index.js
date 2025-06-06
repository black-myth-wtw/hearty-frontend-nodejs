const Easy_Socket = require('easy_sock');
const protobuf = require('protocol-buffers');

const PACKAGE_HEADER_LENGTH = 8,
    PACKAGE_SEQ_LENGTH = 4;

let socket = null;

module.exports = {
    compile: config => {
        const {ip, port, timeout, protobufFile, requestSchema, responseSchema} = config;

        const schema = protobuf(protobufFile, 'utf-8'),
            request_schema = schema[requestSchema],
            response_schema = schema[responseSchema];

        socket = new Easy_Socket({
            ip,
            port,
            timeout,
            keepAlive: true,
        });


        socket.isReceiveComplete = buffer => {
            if (buffer.length <= PACKAGE_HEADER_LENGTH) return 0;
            const body_length = buffer.readInt32BE(PACKAGE_SEQ_LENGTH);
            return body_length + PACKAGE_HEADER_LENGTH;
        };

        socket.encode = (data, seq) => {
            const header = Buffer.alloc(PACKAGE_HEADER_LENGTH);
            header.writeInt32BE(seq);
            const body = request_schema.encode(data),
                body_length = body.length;
            header.writeInt32BE(body_length, PACKAGE_SEQ_LENGTH);
            return Buffer.concat([header, body]);
        };

        socket.decode = buffer => {
            const seq = buffer.readInt32BE();
            const body = buffer.slice(PACKAGE_HEADER_LENGTH);
            const result = response_schema.decode(body);
            return {
                result,
                seq,
            };
        };
    },
    request: query => {
        return new Promise((resolve, reject) => {
            socket.write({
                ...query
            }, (err, data) => {
                err ? reject(err) : resolve(data);
            });
        });
    }
};
