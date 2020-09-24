Array.prototype.flat = function(depth) {
    let res = [],
        dep = depth || 1,
        count = 0;
    let flatMap = (arr) => {
        arr.map((item, index, array) => {
            if(Array.isArray(item) && count < dep) {
                res.push(flatMap(item));
                count++;
            } else {
                res.push(item);
            }
            if(index === array.length -1) count = 0;
        });
    }
    flatMap(this);
    return res;
}