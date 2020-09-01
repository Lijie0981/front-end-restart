// 不通用
let state = {
    count: 1
};
let listen = [];
function subscribe(cb) {
    listen.push(cb);
    return function unsybscrube () {
        const index = listeners.indexOf(cb);
        listeners.splice(index, 1);
    }
}
function stateChange(state) {
    state = state;
    listen.forEach(item => item());
}

class StateStore {
    constructor(state, reducer) {
        this.state = state;
        this.reducer = reducer;
        this.listeners = [];
        this.dispatch({type: Symbol()});
    }
    dispatch(action) {
        this.state = this.reducer(this.state, action);
        this.listeners.forEach(item => {
            item()
        });
    }
    subscribe(cb) {
        this.listeners.push(cb);
    }
    getState() {
        return state;
    }
}
let count = new StateStore(function (state, action) {
    // xxx
}, {count: 1});
// plan -> reducer
// stateChange -> dispatch