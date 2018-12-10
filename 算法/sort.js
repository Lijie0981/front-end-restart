function bubble(arr) {
    if (!arr || arr.length < 2) {
        return arr || false;
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
        }
    }
    return arr;
}
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let centerIndex = Math.floor(arr.length / 2);
    let center = arr.splice(centerIndex, 1)[0];
    let left = [];
    let right = [];
    for(let i = 0;i < arr.length; i++) {
        if (arr[i] < center) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([center], quickSort(right));
}
console.log(quickSort([1, 2, 0, 12, 7, 9, 3]));

function Find(target, array) {
    let i = 0;
    let j = array[i].length - 1;
    while (i < array.length && j >= 0) {
        if (array[i][j] < target) {
            i++;
        } else if (array[i][j] > target) {
            j--;
        } else {
            return true;
        }
    }
    return false;
}

//测试用例
console.log(Find(10, [
    [1, 2, 3, 4], 
    [5, 9, 10, 11], 
    [13, 20, 21, 23]
    ])
);

function febb(n) {
    if (n === 1 || n === 2) {
        return 1;
    } else if (n >= 3) {
        let a = 1;
        let b = 1;
        let sum =0;
        for (let i = 3; i <= n;i++){
            sum = a + b;
            a = b;
            b = sum;
        }
        return sum;
    }
};
