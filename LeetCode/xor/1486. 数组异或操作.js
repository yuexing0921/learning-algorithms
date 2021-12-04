// https://leetcode-cn.com/problems/xor-operation-in-an-array/
/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
  let res = start;
  let i = 1;
  while (i < n) {
    res ^= start + 2 * i;
    i++;
  }
  return res;
};
