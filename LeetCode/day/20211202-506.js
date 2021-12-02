// https://leetcode-cn.com/problems/relative-ranks/
/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  var map = {
    0: "Gold Medal",
    1: "Silver Medal",
    2: "Bronze Medal",
  };
  const n = score.length;
  const m = {};
  score.forEach((val, index) => {
    m[val] = index;
  });
  score.sort((a, b) => b - a);
  const ant = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    const val = score[i],
      idx = m[val];
    if (i < 3) {
      ant[idx] = map[i];
    } else {
      ant[idx] = "" + (i + 1);
    }
  }
  return ant;
};
