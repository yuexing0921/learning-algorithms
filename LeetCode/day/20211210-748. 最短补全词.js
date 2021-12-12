// 748. 最短补全词

/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
const a = "a".charCodeAt(),
  z = "z".charCodeAt(),
  A = "A".charCodeAt(),
  Z = "Z".charCodeAt();
var shortestCompletingWord = function (licensePlate, words) {
  const counter = function (strs) {
    const cnts = new Array(26);
    cnts.fill(0);
    for (let i = 0; i < strs.length; i++) {
      const c = strs.charCodeAt(i);
      if (c >= a && c <= z) cnts[c - a]++;
      else if (c >= A && c <= Z) {
        cnts[c - A]++;
      }
    }
    return cnts;
  };

  const cnts = counter(licensePlate);
  let ans;
  for (const word of words)
    if (ans == undefined || word.length < ans.length) {
      const ws = counter(word);
      let i = 0;
      for (; i < cnts.length && ws[i] >= cnts[i]; i++) {}
      if (i == cnts.length) ans = word;
    }
  return ans;
};
