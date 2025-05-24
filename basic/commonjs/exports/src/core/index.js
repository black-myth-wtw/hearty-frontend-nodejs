console.log('require ING!!!!!!!!');

exports.name = 'black_myth_wtw';
exports.age = 19;
exports.gender = 'male';
exports.birthday = '1941-06-28';
exports.hobby = {
    sports: ['basketball', 'computer games']
};


const timer_main = setTimeout(() => {
    /**
     * {
     *     name: 'black*myth*wtw',
     *     age: 22,
     *     gender: 'female',
     *     birthday: '1968-05-11',
     *     hobby: {
     *         sports: ['tennis', 'table tennis']
     *     }
     * }
     */
    console.log(exports);
    console.log(exports.name);                   // 'black*myth*wtw'
    console.log(exports.age);                    // 22
    console.log(exports.gender);                 // 'female'
    console.log(exports.birthday);               // '1968-05-11'
    console.log(exports.hobby.sports.join(',')); // 'tennis,table tennis'

    exports.name = 'black#myth#wtw';
    exports.age = 25;
    exports.gender = 'male';
    exports.birthday = '1993-04-27';
    exports.hobby = {
        sports: ['Elden Ring', 'Black Myth WuKong']
    };

    clearTimeout(timer_main);
}, 1888);

const timer_final = setTimeout(() => {
    /**
     * {
     *     name: 'black$myth$wtw',
     *     age: 28,
     *     gender: 'female',
     *     birthday: '1994-03-10',
     *     hobby: {
     *         sports: ['running', 'swimming']
     *     }
     * }
     */
    console.log(exports);
    console.log(exports.name);                   // 'black$myth$wtw'
    console.log(exports.age);                    // 28
    console.log(exports.gender);                 // 'female'
    console.log(exports.birthday);               // '1994-03-10'
    console.log(exports.hobby.sports.join(',')); // 'running,swimming'

    exports.name = 'black@myth@wtw';
    exports.age = 31;
    exports.gender = 'female';
    exports.birthday = '1999-09-09';
    exports.hobby = {
        sports: ['volleyball', 'skiing']
    };

    clearTimeout(timer_final);
}, 3888);

