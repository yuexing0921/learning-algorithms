// https://leetcode-cn.com/problems/maximize-sum-of-array-after-k-negations/
/**
 * 暴力策略，人生的有的时候，就不要讲究太多的技巧，有那点心思可以多做一些其他的事情了
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
  while (k) {
    let min = 0;
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] < nums[min]) {
        // 获取最小值
        min = i;
      }
    }
    nums[min] *= -1;
    k--;
  }
  return nums.reduce((prev, next) => prev + next);
};
