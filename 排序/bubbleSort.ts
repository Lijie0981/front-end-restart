const bubbleSort = (arr: number[] = []): number[] => {
  const len = arr.length;
  if (!len) {
      return [];
  }
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j]
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};
console.log(bubbleSort([2, 1, 2, 3, 4, 5, 8]));
console.log(bubbleSort([1,2,3,4,5,6,7,8]));
console.log(bubbleSort([]));

// 比较相邻的元素。如果第一个比第二个大，就交换他们两个。

// 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数。

// 针对所有的元素重复以上的步骤，除了最后一个。

// 持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。

// 冒泡排序的重点：第二个循环的长度是 len - 第一个循环的当前次数。
