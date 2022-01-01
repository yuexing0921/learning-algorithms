// https://leetcode-cn.com/problems/convert-1d-array-into-2d-array/
/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function (original, m, n) {
  const len = original.length;
  if (m * n !== len) return [];
  const result = [];
  let temp = [];
  original.forEach((k) => {
    temp.push(k);
    if (temp.length === n) {
      result.push(temp);
      temp = [];
    }
  });
  return result;
};
