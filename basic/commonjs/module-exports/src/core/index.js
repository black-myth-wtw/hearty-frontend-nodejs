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
     *     name: 'black_myth_wtw',
     *     age: 19,
     *     gender: 'male',
     *     birthday: '1941-06-28',
     *     hobby: {
     *         sports: ['basketball', 'computer games']
     *     }
     * }
     */
    console.log(exports);
    console.log(exports.name);                   // 'black_myth_wtw'
    console.log(exports.age);                    // 19
    console.log(exports.gender);                 // 'male'
    console.log(exports.birthday);               // '1941-06-28'
    console.log(exports.hobby.sports.join(',')); // 'basketball,computer games'

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
     *     name: 'black#myth#wtw',
     *     age: 25,
     *     gender: 'male',
     *     birthday: '1993-04-27',
     *     hobby: {
     *         sports: ['Elden Ring', 'Black Myth WuKong']
     *     }
     * }
     */
    console.log(exports);
    console.log(exports.name);                   // 'black#myth#wtw'
    console.log(exports.age);                    // 25
    console.log(exports.gender);                 // 'male'
    console.log(exports.birthday);               // '1993-04-27'
    console.log(exports.hobby.sports.join(',')); // 'Elden Ring,Black Myth WuKong'

    exports.name = 'black@myth@wtw';
    exports.age = 31;
    exports.gender = 'female';
    exports.birthday = '1999-09-09';
    exports.hobby = {
        sports: ['volleyball', 'skiing']
    };

    clearTimeout(timer_final);
}, 3888);

module.exports = {
    name: 'black-myth-wtw',
    age: 34,
    gender: 'female',
    birthday: '2025-05-25',
    hobby: {
        sports: ['badminton', 'soccer', 'football']
    }
};

