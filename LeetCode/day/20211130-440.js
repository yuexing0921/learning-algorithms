// https://leetcode-cn.com/problems/nth-digit/
/**
 * 找规律
 * bucket1：1-9 1*9个数字 cur * base
 * bucket2：10-99 2*9*10个数字
 * bucket3：100-999 3*90*10个数字
 * ...
 * 解法：
 * 1. 把n依次去遍历不同的位数，找到在对应的桶内
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
  let cur = 1, // 代表是在哪个区间
    base = 9,
    bucket = cur * base;
  // 找到对应的bucket
  while (n > bucket) {
    n = n - bucket;
    cur++;
    base = 10 * base;
    bucket = cur * base;
  }
  // 得到所在位数中数组的下标
  const index = n - 1;
  // 得到所在位数中的起始数字
  const start = Math.floor(Math.pow(10, cur - 1));
  // 得到包含目标值的数字
  const num = start + Math.floor(index / cur);
  // 根据偏移量返回目标值
  return Number((num + "")[index % cur]);
};
findNthDigit(11);
findNthDigit(100);
findNthDigit(1001);
