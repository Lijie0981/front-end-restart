const selectionSort = (arr: number[] = []): number[] => {
  const len = arr.length;
  let minIndex = 0;
  let temp = null;
  if (!len) {
    return [];
  }
  for (let i = 0; i < len; i++) {
    minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
};
console.log(selectionSort([0, 2, 34, 1, 3, 5]));
// 选择排序的重点：第二轮循环找的是最下值，第一轮循环的作用是将最小值移动到前面。
