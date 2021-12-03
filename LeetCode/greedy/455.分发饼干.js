// https://leetcode-cn.com/problems/assign-cookies/

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  // 从大到小排列
  g.sort((a, b) => b - a);
  s.sort((a, b) => b - a);

  let j = 0,
    res = 0;
  for (let i = 0; i < g.length; i++) {
    // 依次遍历胃口和饼干的大小，如果满足了，则饼干的往前挪一步
    if (j < s.length && g[i] <= s[j]) {
      res++;
      j++;
    }
  }
  return res;
};
