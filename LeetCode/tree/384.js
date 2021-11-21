// https://leetcode-cn.com/problems/shuffle-an-array/
//  384. 打乱数组
/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  const nums = this.nums.slice();
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    const rand = getRandom(i, len);
    // [nums[i],nums[rand]] = [nums[rand],nums[i]]
    const temp = nums[i];
    nums[i] = nums[rand];
    nums[rand] = temp;
  }
  return nums;
};

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
