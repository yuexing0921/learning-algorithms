// https://leetcode-cn.com/problems/maximum-average-subarray-i/
// /**
//  * 暴力解法，会超出时间限制，因为在k窗口内重复计算了多个
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// var findMaxAverage = function (nums, k) {
//   let queue = [],
//     maxAvg = Number.NEGATIVE_INFINITY;
//   const n = nums.length;
//   for (let i = 0; i < n; i++) {
//     queue.push(nums[i]);

//     if (queue.length === k) {
//       let sum = 0,
//         temp = 0;
//       queue.forEach((k) => (sum += k));
//       temp = sum / k;
//       if (maxAvg < temp) {
//         maxAvg = temp;
//       }
//       queue.shift();
//     }
//   }
//   return maxAvg;
// };

/**
 * 滑动窗口解法2，
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) sum += nums[i];

  let maxSum = sum;
  for (let i = k; i < nums.length; i++) {
    sum = sum + nums[i] - nums[i - k];
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum / k;
};
