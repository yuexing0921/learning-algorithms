// https://leetcode-cn.com/problems/buddy-strings/
/**
 * 难点在于审题
 * 1. 长度不一样，直接false
 * 2. 字符串相等，则看有没有重复字符
 * 3. 字符串不相等
 *  交换一个位置之后，还能相等，说明至多存在两处不同
 *  再多一处就是错误的
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
  const len = s.length,
    len2 = goal.length;
  // 长度不一样
  if (len !== len2) {
    return false;
  }
  // 字符串相同，看看有没有重复字符串
  if (s === goal) {
    // 方法1：用map比较，简单易懂
    // const map = {};
    // for (let i = 0; i < len; i++) {
    //   if (map[s[i]]) {
    //     return true;
    //   } else {
    //     map[s[i]] = 1;
    //   }
    // }
    // 方法2：用数组存储进行比较
    const count = new Array(26).fill(0);
    for (let i = 0; i < len; i++) {
      count[s[i].charCodeAt() - "a".charCodeAt()]++;
      if (count[s.charCodeAt() - "a".charCodeAt()] > 1) {
        return true;
      }
    }
    return false;
  } else {
    let [first, second] = [-1, -1];
    for (let i = 0; i < len; i++) {
      if (s[i] !== goal[i]) {
        if (first === -1) {
          first = i;
        } else if (second === -1) {
          second = i;
        } else {
          // 再多一处就是错误的;
          return false;
        }
      }
    }
    // 交换位置之后还想同
    return (
      second !== -1 && s[first] === goal[second] && s[second] === goal[first]
    );
  }
};
console.log(buddyStrings("ab", "ab"));
