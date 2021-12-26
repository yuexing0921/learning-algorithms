// https://leetcode-cn.com/problems/occurrences-after-bigram/
/**
 * 1078. Bigram 分词
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function (text, first, second) {
  const arr = text.split(" ");
  const res = [];
  for (let i = 2; i < arr.length; i++) {
    if (arr[i - 2] === first && arr[i - 1] === second) {
      res.push(arr[i]);
    }
  }
  return res;
};
