function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function (...ar) {
                return curried.apply(this, args.concat(ar));
            }
        }
    }
}   