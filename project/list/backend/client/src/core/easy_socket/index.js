const easy_socket = require('./src');

const PACKAGE_HEADER_LENGTH = 8,
    PACKAGE_SEQ_LENGTH = 4;

module.exports = ({requestSchema, responseSchema}) => {
    easy_socket.isReceiveComplete = buffer => {
        if (buffer.length <= PACKAGE_HEADER_LENGTH) return 0;
        const body_length = buffer.readInt32BE(PACKAGE_SEQ_LENGTH);
        return body_length + PACKAGE_HEADER_LENGTH;
    };

    easy_socket.encode = (data, seq) => {
        const header = Buffer.alloc(PACKAGE_HEADER_LENGTH);
        header.writeInt32BE(seq);
        const body = requestSchema.encode(data),
            body_length = body.length;
        header.writeInt32BE(body_length, PACKAGE_SEQ_LENGTH);
        return Buffer.concat([header, body]);
    };

    easy_socket.decode = buffer => {
        const seq = buffer.readInt32BE();
        const body = buffer.slice(PACKAGE_HEADER_LENGTH);
        const result = responseSchema.decode(body);

        return {
            result,
            seq,
        };
    };

    return easy_socket;
};
