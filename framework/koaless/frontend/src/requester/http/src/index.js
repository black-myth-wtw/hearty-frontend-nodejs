const request = require('request');
const querystring = require('querystring');

let url = null;

module.exports = {
    compile: config => url = config.url,
    request: query => {
        return new Promise((resolve, reject) => {
            request.get(`${url}?${querystring.stringify(query)}`, 'utf-8', (error, response) => {
                error ? reject(error) : resolve(response.body);
            });
        });
    }
};
