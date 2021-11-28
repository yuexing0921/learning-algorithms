//https://leetcode-cn.com/problems/contains-duplicate-ii/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const set = new Set();
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    if (set.has(nums[i])) {
      return true;
    }
    set.add(nums[i]);
    if (set.size > k) {
      //把最新加入的元素删除
      set.delete(nums[i - k]);
    }
  }
  return false;
};
