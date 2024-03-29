// https://leetcode-cn.com/problems/combinations/
// 77. 组合
/**
 * 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = (n, k) => {
  const res = [];
  const backTacking = function (start, path) {
    if (path.length === k) {
      // 递归终止条件
      // 放入结果集
      res.push(path.slice());
      return;
    }
    // 剪纸操作：k是组合的个数，path是当前的个数（不能超过组合k），
    for (let i = start; i <= n - (k - path.length) + 1; i++) {
      path.push(i);
      backTacking(i + 1, path);
      path.pop(); // 回溯，撤销处理结果
    }
  };
  backTacking(1, []);
  return res;
};
console.log(combine(4, 4));
