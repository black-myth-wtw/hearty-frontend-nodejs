const heart_beat_sum = 3;

let heart_beat_count = 0;

const heart_beat = cluster => {
    let worker = cluster.fork();

    const timer_heart_beat = setInterval(() => {
        worker.send('ping!!!');
        heart_beat_count++;

        if (heart_beat_count >= heart_beat_sum) {
            process.kill(worker.process.pid);
            heart_beat_count = 0;
            clearInterval(timer_heart_beat);
        }
    }, 888);

    worker.on('message', (message) => {
        if (message === 'pong!!!') {
            heart_beat_count--;
        }
    });

    return {
        worker,
        timer_heart_beat,
    };
};

module.exports = heart_beat;
