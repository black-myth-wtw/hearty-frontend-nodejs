const vm = require('vm');
const fs = require('fs');

const template_source = {};

const template_context = vm.createContext({
    _(val) {
        if (!val) return '';
        return val.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');
    },
    include(data, name, content) {
        const template = template_source[name] || create_template(name, content);
        return template(data);
    }
});

function create_template(name, content) {
    template_source[name] = vm.runInNewContext(`
        (function (data) {
            with(data) {
                return \`${typeof content === 'undefined' ? fs.readFileSync(name, 'utf-8') : content}\`;
            }
        });
    `, template_context);
    return template_source[name];
}

module.exports = create_template;
