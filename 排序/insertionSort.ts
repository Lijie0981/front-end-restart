const insertionSort = (arr: number[] = []): number[] => {
    const len = arr.length;
    if (!len) {
      return [];
    }
    let prevIndex = 0;
    let current = arr[0];
    for (let i = 1; i < len; i ++) {
        prevIndex = i - 1;
        current = arr[i]
        while (prevIndex >=0 && arr[prevIndex] > current) {
            arr[prevIndex + 1] = arr[prevIndex];
            prevIndex--;
        }
        arr[prevIndex + 1] = current;
    }
    return arr;
};
