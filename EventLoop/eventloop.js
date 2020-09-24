setTimeout(() => {
   console.log('quick timer');
}, 0);

new Promise((resolve, reject) => {
   console.log('init promise');
   process.nextTick(resolve);
}).then(() => console.log('promise.then'));

process.nextTick(() => {
   console.log('nextTick');
});

setImmediate(() => {
   console.log('immediate');
});

console.log(__filename);
console.log(__dirname);
var fs = require('fs');
var path = require('path');
var filepath = path.resolve(__dirname, '../a.txt');
console.log(fs.existsSync(filepath));