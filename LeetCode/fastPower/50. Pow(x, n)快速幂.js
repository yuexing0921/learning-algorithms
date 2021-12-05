// https://leetcode-cn.com/problems/powx-n/
/**
 *  解法来源https://www.bilibili.com/video/BV16Z4y1M7y1?from=search&seid=10530338942721217401&spm_id_from=333.337.0.0
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  // 碰到负数的情况下，要进行特殊处理
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  if (n === 0) return 1;

  let r = 1;
  while (n) {
    // 等同于 n % 2 === 1
    if (n & 1) {
      // 在二进制中，只有尾数为1的才有结果
      // 具体看：https://leetcode-cn.com/problems/powx-n/solution/50-powx-n-kuai-su-mi-qing-xi-tu-jie-by-jyd/
      r *= x;
    }
    x *= x;
    // 等同于 n/2
    n = n >>> 1;
  }

  return r;
};
