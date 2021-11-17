// https://leetcode-cn.com/problems/3sum-closest/
/**
 * 这题和15题基本类似，排序 + 双指针
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  const len = nums.length;
  nums.sort((a, b) => a - b);
  let result = nums[0] + nums[1] + nums[len - 1];
  if (result === target) {
    return result;
  }
  for (let i = 0; i < len - 2; i++) {
    const n1 = nums[i];
    // 过滤重复的n1
    if (i > 0 && n1 === nums[i - 1]) {
      continue;
    }
    let [left, right] = [i + 1, len - 1];
    while (left < right) {
      const [n2, n3] = [nums[left], nums[right]];
      const sum = n1 + n2 + n3;

      if (sum - target > 0) {
        right--;
      } else if (sum - target < 0) {
        left++;
      } else {
        return sum;
      }

      if (Math.abs(sum - target) < Math.abs(result - target)) {
        result = sum;
      }
    }
  }
  return result;
};
console.log(threeSumClosest([-1, 2, 1, -4], 1));
