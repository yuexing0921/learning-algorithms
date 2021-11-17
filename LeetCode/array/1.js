// https://leetcode-cn.com/problems/two-sum/

/**
 * 1. 暴力解法
 * 通过依次往下循环，然后不断的找到对应的值
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[j] + nums[i] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return [];
// };

/**
 * 2. hash解法
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const x = nums[i];
    if (map.has(target - x)) {
      return [map.get(target - x), i];
    } else {
      map.set(x, i);
    }
  }
  return [];
};

twoSum([2, 7, 11, 15], 9);
