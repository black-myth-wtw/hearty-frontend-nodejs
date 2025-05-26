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
// const template_context = vm.createContext({
//     black_myth_wtw,
//     _(val) {
//         if (!val) return '';
//         return val.replace(/&/g, '&amp;')
//             .replace(/</g, '&lt;')
//             .replace(/>/g, '&gt;')
//             .replace(/'/g, '&#39;')
//             .replace(/"/g, '&quot;');
//     },
//     include({black_myth_wtw_include}) {
//         return `<s>${black_myth_wtw_include.hobby.sports.join(',')}</s>`;
//     }
// });
//
// const es6_template_string = `<p>Hi, My name is <b>${black_myth_wtw.name}</b>, <i>${black_myth_wtw.age}</i> year's old, I'm a <strong>${black_myth_wtw.gender ? 'boy' : 'girl'}</strong>, My birthday is <span>${black_myth_wtw.birthday}</span>, I love <s>${black_myth_wtw.hobby.sports.join(',')}</s></p>`;
// console.log(es6_template_string);
//
// const vm_template_string_start = '`<p>Hi, My name is <b>${black_myth_wtw.name}</b>, <i>${black_myth_wtw.age}</i> year\'s old, I\'m a <strong>${black_myth_wtw.gender ? \'boy\' : \'girl\'}</strong>, My birthday is <span>${black_myth_wtw.birthday}</span>, I love <s>${black_myth_wtw.hobby.sports.join(\',\')}</s></p>`';
// const vm_template_string_start_transform = vm.runInNewContext(vm_template_string_start, {
//     black_myth_wtw,
// });
// console.log(vm_template_string_start_transform);
//
// const vm_template_string_main = "`<p>Hi, My name is <b>${black_myth_wtw.name}</b>, <i>${black_myth_wtw.age}</i> year's old, I'm a <strong>${black_myth_wtw.gender ? 'boy' : 'girl'}</strong>, My birthday is <span>${black_myth_wtw.birthday}</span>, I love <s>${black_myth_wtw.hobby.sports.join(',')}</s></p>`";
// const vm_template_string_main_transform = vm.runInNewContext(vm_template_string_main, {
//     black_myth_wtw,
// });
// console.log(vm_template_string_main_transform);
//
// const vm_template_string_end = `\`<p>Hi, My name is <b>${black_myth_wtw.name}</b>, <i>${black_myth_wtw.age}</i> year's old, I'm a <strong>${black_myth_wtw.gender ? 'boy' : 'girl'}</strong>, My birthday is <span>${black_myth_wtw.birthday}</span>, I love <s>${black_myth_wtw.hobby.sports.join(',')}</s></p>\``;
// const vm_template_string_end_transform = vm.runInNewContext(vm_template_string_end, {
//     black_myth_wtw,
// })
// console.log(vm_template_string_end_transform);
//
// const vm_template_string_replace = '`${_(\`<p>Hi, My name is <b>${black_myth_wtw.name}</b>, <i>${black_myth_wtw.age}</i> year\'s old, I\'m a <strong>${black_myth_wtw.gender ? \'boy\' : \'girl\'}</strong>, My birthday is <span>${black_myth_wtw.birthday}</span>, I love <s>${black_myth_wtw.hobby.sports.join(\',\')}</s></p>\`)}`';
// const vm_template_string_replace_transform = vm.runInNewContext(
//     vm_template_string_replace,
//     template_context,
// );
// console.log(vm_template_string_replace_transform);
//
// const vm_template_string_include = '`${_(\`<p>Hi, My name is <b>${black_myth_wtw.name}</b>, <i>${black_myth_wtw.age}</i> year\'s old, I\'m a <strong>${black_myth_wtw.gender ? \'boy\' : \'girl\'}</strong>, My birthday is <span>${black_myth_wtw.birthday}</span>, I love ${include({black_myth_wtw_include: black_myth_wtw})}</p>\`)}`';
// const vm_template_string_include_transform = vm.runInNewContext(vm_template_string_include, template_context);
// console.log(vm_template_string_include_transform);

console.log('NodeJS《第十八课: template 模板引擎-template vm 模拟模板引擎-简易的 template vm 模拟模板引擎》部分课程已完美的回溯完成!如需要检测执行结果,将以上代码注释解开即可!');
