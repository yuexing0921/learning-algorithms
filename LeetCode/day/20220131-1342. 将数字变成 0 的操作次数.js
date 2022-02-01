// https://leetcode-cn.com/problems/number-of-steps-to-reduce-a-number-to-zero/

/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  if (num < 0) {
    return 0;
  }
  let i = 0;
  while (num > 0) {
    if ((num & 1) === 0) {
      num = num / 2;
    } else {
      num = num - 1;
    }
    i++;
  }
  return i;
};
