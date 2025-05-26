// const vm = require('vm');
//
// const black_myth_wtw = {
//     name: 'black-myth-wtw',
//     age: 32,
//     gender: true,
//     birthday: '1994-03-10',
//     hobby: {
//         sports: ['basketball', 'computer games', 'Elden Ring', 'Black Myth WuKong']
//     }
// };
//
// const template_source = {
//     templateA: '`${_(\`<p>Hi, My name is <b>${black_myth_wtw_transform.name}</b>, <i>${black_myth_wtw_transform.age}</i> year\'s old, I\'m a <strong>${black_myth_wtw_transform.gender ? \'boy\' : \'girl\'}</strong>, My birthday is <span>${black_myth_wtw_transform.birthday}</span>, I love ${include(\'templateB\', {black_myth_wtw_include: black_myth_wtw_transform})}</p>\`)}`',
//     templateB: '`<s>${black_myth_wtw_include.hobby.sports.join(\',\')}</s>`'
// };
//
// const template_context = vm.createContext({
//     _(val) {
//         if (!val) return '';
//         return val.replace(/&/g, '&amp;')
//             .replace(/</g, '&lt;')
//             .replace(/>/g, '&gt;')
//             .replace(/'/g, '&#39;')
//             .replace(/"/g, '&quot;');
//     },
//     include(name, data) {
//         const template = template_source[name];
//         return template(data);
//     }
// });
//
// Object.entries(template_source).forEach(([template_key, template_value]) => {
//     template_source[template_key] = vm.runInNewContext(`
//         (function (data) {
//             with(data) {
//                 return ${template_value};
//             }
//         });
//     `, template_context);
// });
//
// const template_transform = template_source['templateA'];
// const template_transform_result = template_transform({
//     black_myth_wtw_transform: black_myth_wtw,
// });
// console.log(template_transform_result);

console.log('NodeJS《第十八课: template 模板引擎-template vm 模拟模板引擎-完整的 template vm 模拟模板引擎》部分课程已完美的回溯完成!如需要检测执行结果,将以上代码注释解开即可!');
