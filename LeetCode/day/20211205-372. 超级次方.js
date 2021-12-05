/**
 * 这题要具备快速幂的知识，最好去看下 50
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
const mod = 1337;
function quickPow(x, n) {
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  let res = 1;
  while (n) {
    // 等同于 n % 2 === 1
    // 因为二进制尾数为1，底数才有效
    if (n & 1) {
      res *= x % mod;
    }
    x *= x % mod;
    // 等同于 n / 2
    n = n >>> 1;
  }
  return res;
}
var superPow = function (x, arr) {
  const len = arr.length;
  x = x % mod;
  let res = 1;
  for (let i = len - 1; i >= 0; i--) {
    res = (res * quickPow(x, arr[i])) % mod;
    x = quickPow(x, 10);
  }
  return res;
};
