// https://leetcode-cn.com/problems/minimum-add-to-make-parentheses-valid/

// 示例 1：
// 输入："())"
// 输出：1

// 示例 2：
// 输入："((("
// 输出：3

// 示例 3：
// 输入："()"
// 输出：0

// 示例 4：
// 输入："()))(("
// 输出：4

// 示例
// "((())" => 1

/**
 * 中等
 * 重要是栈的操作
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === "(") {
      stack.push(c);
    } else {
      // peek 关键操作
      if (stack[stack.length - 1] === "(") {
        stack.pop();
      } else {
        stack.push(c);
      }
    }
  }
  return stack.length;
};

minAddToMakeValid("())");
