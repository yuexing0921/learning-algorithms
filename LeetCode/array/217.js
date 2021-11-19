// https://leetcode-cn.com/problems/contains-duplicate/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let [left, right] = [0, nums.length - 1];
  const map = {};
  while (left < right) {
    const l = nums[left],
      r = nums[right];
    if (l === r) {
      return true;
    } else if (map[r] || map[l]) {
      return true;
    } else {
      map[r] = 1;
      map[l] = 1;
    }

    left++;
    right--;
  }
  return false;
};
