let state = {
    count: 1
};
let listen = [];
function subscribe(cb) {
    listen.push(cb);
    return function unsubscribe () {
        const index = listeners.indexOf(cb);
        listeners.splice(index, 1);
    }
}
function stateChange(state) {
    state = state;
    listen.forEach(item => item());
}
let unsubscribe = subscribe(() => {
    console.log(state);
});

