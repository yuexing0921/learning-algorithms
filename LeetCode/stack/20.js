// https://leetcode-cn.com/problems/valid-parentheses/

/**
 * 简单
 * 使用栈来运算-用数组模拟栈
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 === 1) {
    return false;
  }
  const stack = [];
  for (var i = 0; i < s.length; i++) {
    const c = s.charAt(i);
    if (c === "{" || c === "[" || c === "(") {
      stack.push(c);
    } else {
      // peek一个
      const peek = stack[stack.length - 1];
      const str = peek + c;
      if (str === "{}" || str === "()" || str === "[]") {
        stack.pop();
      } else {
        return false;
      }
    }
    // if (/\{|\(|\[/.test(c)) {
    //   stack.push(c);
    // }
  }

  return stack.length === 0;
};
