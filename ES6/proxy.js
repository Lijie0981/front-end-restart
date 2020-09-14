let target = {};
let proxy = new Proxy(target, {
    get(target, prop) {
        if(prop in target) {
            return target[prop];
        } else {
            return 0;
        }
    }
});
proxy.test = 5;
