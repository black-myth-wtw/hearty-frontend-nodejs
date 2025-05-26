process.on('message', message => {
    console.log(`child process received message:`, message);

    const child_process_message = 'hehehehehehehehehehe!!!!!!!!';
    console.log(`child process send message:`, child_process_message);
    process.send(child_process_message);
});
