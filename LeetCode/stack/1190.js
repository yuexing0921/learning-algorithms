// https://leetcode-cn.com/problems/reverse-substrings-between-each-pair-of-parentheses/

/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
  const stack = [];
  let str = "";
  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i);
    if (c === "(") {
      stack.push(str);
      str = "";
    } else if (c === ")") {
      const pop = stack.pop();
      str = pop + str.split("").reverse().join("");
    } else {
      str += c;
    }
  }
  return str;
};

// 示例 1：
// 输入：s = "(abcd)"
// 输出："dcba"
reverseParentheses("(abcd)");
// 示例 2：
// 输入：s = "(u(love)i)"
// 输出："iloveu"
// 解释：先反转子字符串 "love" ，然后反转整个字符串。
reverseParentheses("(u(love)i)");
// 示例 3：
// 输入：s = "(ed(et(oc))el)"
// 输出："leetcode"
// 解释：先反转子字符串 "oc" ，接着反转 "etco" ，然后反转整个字符串。
reverseParentheses("(ed(et(oc))el)");

// 示例 4：
// 输入：s = "a(bcdefghijkl(mno)p)q"
// 输出："apmnolkjihgfedcbq"
reverseParentheses("a(bcdefghijkl(mno)p)q");
