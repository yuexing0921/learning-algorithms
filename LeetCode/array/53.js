// https://leetcode-cn.com/problems/maximum-subarray/
/**
 * 动态规划思想
 * @param {*} nums
 * @returns
 */
var maxSubArray = function (nums) {
  let pre = 0;
  let maxAns = nums[0];
  nums.forEach(function (n) {
    // 把上一个值缓存，获取最大的
    pre = Math.max(pre + n, n);
    // 和当前值进行比较，选最大的
    maxAns = Math.max(maxAns, pre);
  });
  return maxAns;
};
