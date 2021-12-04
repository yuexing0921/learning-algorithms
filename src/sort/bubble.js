//
/**
 * 冒泡排序: O(n^2) 稳定的排序方法
 * 1. 要把相邻的元素两两进行比较，根据大小交换元素的位置
 * 2. 每次都把大的元素往后挪
 * 重复遍历这个过程
 * @param arr
 */
export function bubbleSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      // 每次都找到相连元素
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
