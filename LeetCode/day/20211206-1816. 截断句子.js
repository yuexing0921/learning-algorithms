// https://leetcode-cn.com/problems/truncate-sentence/
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
  let idx = 0;
  let i = 0;
  for (; i < s.length; i++) {
    if (s.charAt(i) === " ") {
      idx++;
    }
    if (idx === k) {
      break;
    }
  }
  return idx === k ? s.substring(0, i) : s;
};
