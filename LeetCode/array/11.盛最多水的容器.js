// https://leetcode-cn.com/problems/container-with-most-water/
/**
 * 双指针解
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  right = height.length - 1;
  let ans = 0;
  while (left < right) {
    const area = (right - left) * Math.min(height[left], height[right]);
    // 如果左边的比右边的矮，则需要继续移动
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
    ans = Math.max(ans, area);
  }
  return ans;
};
