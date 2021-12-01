// https://leetcode-cn.com/problems/consecutive-characters/
// 1446. 连续字符
/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
  let cnt = 1,
    ant = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      cnt++;
      ant = Math.max(cnt, ant);
    } else {
      cnt = 1;
    }
  }
  return ant;
};
