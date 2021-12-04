// 选择排序算法
/**
 * 原理是：O(n^2) 不稳定的排序方法
 * 1. 从待排序的数据元素中选出最小的一个元素，存放在序列的起始位置
 * 2. 再从剩余的未排序元素中寻找到最小（大）元素，然后放到已排序的序列的末尾
 * 3. 以此类推，直到全部待排序的数据元素的个数为零
 * @param {*} array
 * @returns
 */
export function selectionSort(array) {
  const len = array.length;
  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (min !== i) {
      swap(array, i, min);
    }
  }
  return array;
}
/**
 * 交换两个数组中的两个位置
 * @param {*} array
 * @param {*} idx
 * @param {*} min
 */
let swap = function (array, idx, min) {
  let aux = array[idx];
  array[idx] = array[min];
  array[min] = aux;
};
