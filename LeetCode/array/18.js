// https://leetcode-cn.com/problems/4sum/
/**
 * 和15基本一样
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const len = nums.length;
  if (len < 4) {
    return [];
  }
  // 升序排列 0，1，3，5
  nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i < len - 3; i++) {
    let n1 = nums[i];
    // 去重n1重复项
    if (i > 0 && n1 === nums[i - 1]) {
      continue;
    }
    for (let j = i + 1; j < len - 2; j++) {
      // 去除n2
      let n2 = nums[j];
      if (j > i + 1 && n2 === nums[j - 1]) {
        continue;
      }
      let left = j + 1,
        right = len - 1;
      while (left < right) {
        let n3 = nums[left],
          n4 = nums[right];
        const sum = n1 + n2 + n3 + n4;
        if (sum < target) {
          left++;
        } else if (sum > target) {
          right--;
        } else {
          res.push([n1, n2, n3, n4]);
          while (left < right && n3 === nums[left]) left++;
          while (left < right && n4 === nums[right]) right--;
        }
      }
    }
  }
  return res;
};
console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
