const RPC = require('./src');

const PACKAGE_HEADER_LENGTH = 8,
    PACKAGE_SEQ_LENGTH = 4;

module.exports = ({requestSchema, responseSchema}) => {
    return new RPC({
        encode: (data, seq) => {
            const header = Buffer.alloc(PACKAGE_HEADER_LENGTH);
            header.writeInt32BE(seq);
            const body = responseSchema.encode(data),
                body_length = body.length;
            header.writeInt32BE(body_length, PACKAGE_SEQ_LENGTH);
            return Buffer.concat([header, body]);
        },
        decode: buffer => {
            const seq = buffer.readInt32BE();
            const body = buffer.slice(PACKAGE_HEADER_LENGTH);
            const result = requestSchema.decode(body);

            return {
                result,
                seq,
            };
        },
        is_receive_complete: buffer => {
            if (buffer.length <= PACKAGE_HEADER_LENGTH) return 0;
            const body_length = buffer.readInt32BE(PACKAGE_SEQ_LENGTH);
            return body_length + PACKAGE_HEADER_LENGTH;
        }
    });
};
