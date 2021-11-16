// https://leetcode-cn.com/problems/remove-all-adjacent-duplicates-in-string/

/**
 * 利用栈的方式输出
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    const ch = s.charAt(i);
    // peek一个
    const peek = arr[arr.length - 1];
    if (ch === peek) {
      arr.pop();
    } else {
      arr.push(ch);
    }
  }
  return arr.join("");
};
