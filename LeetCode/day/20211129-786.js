// https://leetcode-cn.com/problems/k-th-smallest-prime-fraction/

/**
 * // 786. 第 K 个最小的素数分数
 * 暴力搜索
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function (arr, k) {
  //   const n = arr.length;
  //   const frac = [];
  //   for (let i = 0; i < n; ++i) {
  //     for (let j = i + 1; j < n; ++j) {
  //       frac.push([arr[i], arr[j]]);
  //     }
  //   }
  //   frac.sort((x, y) => x[0] * y[1] - y[0] * x[1]);
  //   return frac[k - 1];

  const n = arr.length;
  const frac = [];
  for (let i = 0; i < n; i++) {
    // 类似滑动窗口概念
    for (let j = i + 1; j < n; j++) {
      frac.push([arr[i], arr[j]]);
    }
  }
  frac.sort((a, b) => a[0] * b[1] - b[0] * a[1]);
  return frac[k - 1];
};
