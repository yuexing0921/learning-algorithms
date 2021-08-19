// https://leetcode-cn.com/problems/minimum-remove-to-make-valid-parentheses/

// 示例 1：
// 输入：s = "lee(t(c)o)de)"
// 输出："lee(t(c)o)de"
// 解释："lee(t(co)de)" , "lee(t(c)ode)" 也是一个可行答案。

// 示例 2：
// 输入：s = "a)b(c)d"
// 输出："ab(c)d"

// 示例 3：
// 输入：s = "))(("
// 输出：""
// 解释：空字符串也是有效的

// 示例 4：
// 输入：s = "(a(b(c)d)"
// 输出："a(b(c)d)"

// "())()(((" => "()()"
/**
 * 解题思路：
 *
 * 中等
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  const stack = {}, // 不是平衡括号字符串
    stackIndex = []; // 用于记录栈的索引
  for (var i = 0; i < s.length; i++) {
    const item = s[i];
    if (!/[\(|\)]/.test(item)) {
      continue;
    }

    // peek
    const peekIndex = stackIndex[stackIndex.length - 1];
    const peek = stack[peekIndex];
    if (peek && item === ")" && peek === "(") {
      // pop
      delete stack[peekIndex];
      stackIndex.pop();
    } else {
      stackIndex.push(i);
      stack[i] = item;
    }
  }

  return s
    .split("")
    .filter((k, index) => !stack[index])
    .join("");
};
console.log(minRemoveToMakeValid("(a))(b)((("));
