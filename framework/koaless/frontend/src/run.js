const Koa = require('koa');
const KoaStatic = require('koa-static');
const KoaMount = require('koa-mount');

const factory = require('./factory');
const template_source = require('./template');

const PORT = 3000;

const run = route_config => {
    const koa = new Koa();

    Object.entries(route_config).forEach(([route_name, {
        config,
        template: {
            template_name,
            template_str,
        },
        source: {
            source_name,
        }
    }]) => {
        const route_koa = new Koa();

        route_koa.use(async (ctx, next) => {
            const {request: {pathname}, response} = ctx;
            if (pathname === '/favicon.ico') {
                response.status = 400;
                response.body = '';
                return false;
            }

            await next();
        });

        route_koa.use(async ctx => {
            const {request: {query}, response} = ctx;

            const result_request = {};

            const config_source = eval(config);

            const config_compile = Object.entries(config_source).reduce((ret, [config_source_key, config_source_value]) => {
                const {protocol} = config_source_value;
                factory.createRequester(protocol);
                ret[config_source_key] = factory(config_source_value);
                return ret;
            }, {});

            await Promise.all(Object.entries(config_compile).map(([config_compile_key, config_compile_value]) => {
                return config_compile_value(query).then(({result}) => {
                    result_request[config_compile_key] = result;
                    return result;
                }).catch(error => console.error(error));
            }));

            const template = template_source(template_name, template_str);

            response.status = 200;

            try {
                response.body = template(result_request);
            } catch (error) {
                response.status = 500;
                response.body = error.stack;
            }
        });

        koa.use(KoaStatic(source_name));
        koa.use(KoaMount(route_name, route_koa));
    });

    koa.listen(PORT, () => {
        console.log(`The framework koaless video client page is running at http://localhost:${PORT}!`);
    });
};

module.exports = run;
