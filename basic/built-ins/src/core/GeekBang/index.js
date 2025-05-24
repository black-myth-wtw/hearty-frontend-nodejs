const EventEmitter = require('events').EventEmitter;

const lesson_sum = 100;

let lesson_count = 0;

class GeekBang extends EventEmitter {
    constructor() {
        super();
        const timer_lesson = setInterval(() => {
            this.emit('lesson', {price: Math.floor(Math.random() * 100 + 1)});
            lesson_count++;
            if (lesson_count >= lesson_sum) {
                lesson_count = 0;
                clearInterval(timer_lesson);
            }
        }, 666);
    }
}

module.exports = GeekBang;
