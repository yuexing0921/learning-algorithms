// https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/solution/shuang-zhi-zhen-fang-fa-shi-jian-fu-za-d-tf2s/
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  // 定义左右双指针
  let [left, right] = [0, numbers.length - 1];
  while (left < right) {
    const l = numbers[left],
      r = numbers[right];
    if (l + r > target) {
      right--;
    } else if (l + r < target) {
      left++;
    } else {
      // numbers 的下标 从 1 开始计数
      return [left + 1, right + 1];
    }
  }
  return [];
};
