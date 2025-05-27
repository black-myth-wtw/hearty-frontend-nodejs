const fs = require('fs');
const path = require('path');

const requester_source = {};

function factory(config) {
    let before = config.before || (data => data),
        then = config.then || (result => result),
        catch_config = config.catch || (error => console.error(error));

    const {protocol} = config;

    const requester_generate = requester_source[protocol];

    requester_generate.compile(config);

    return async data => {
        try {
            before = before(data);
        } catch (error) {
            console.error(error.message);
            return Promise.resolve(null);
        }

        return {
            result: await requester_generate.request(data).then(then).catch(catch_config),
        };
    }
}

factory.createRequester = function (name, requester) {
    const REQUESTER_DEFAULT_DIR = path.resolve(__dirname, '../requester', name),
        REQUESTER_DEFAULT_FILE_DIR = path.resolve(__dirname, '../requester', 'index.js');
    if (fs.existsSync(REQUESTER_DEFAULT_DIR)) {
        requester_source[name] = require(REQUESTER_DEFAULT_FILE_DIR)[name];
    } else {
        requester_source[name] = requester;
    }
};

module.exports = factory;
