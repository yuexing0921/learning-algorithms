/**
 * 关键词相同的数据元素将保持原有位置不变，所以该算法是稳定的
 *
 * 插入排序(抽牌排序法) O(n^2) 稳定的排序方法
 * 插入排序适用于已经有部分数据已经排好，并且排好的部分越大越好。
 * 注意：一般在输入规模大于1000的场合下不建议使用插入排序
 * @param {*} arr
 */
export function sort(arr) {
  if (!arr || arr.length < 2) {
    return arr;
  }
  const swap = function (arr, a, b) {
    arr[a] = arr[a] ^ arr[b];
    arr[b] = arr[a] ^ arr[b];
    arr[a] = arr[a] ^ arr[b];
  };
  for (let i = 1; i < arr.length; i++) {
    // 每次和上一个做比较
    for (let j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
      swap(arr, j, j + 1);
    }
  }
  return arr;
}
