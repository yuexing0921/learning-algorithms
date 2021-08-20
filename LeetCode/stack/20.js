// https://leetcode-cn.com/problems/valid-parentheses/
// 示例 1：
// 输入：s = "()"
// 输出：true

// 示例 2：
// 输入：s = "()[]{}"
// 输出：true

// 示例 3：
// 输入：s = "(]"
// 输出：false

// 示例 4：
// 输入：s = "([)]"
// 输出：false

// 示例 5：
// 输入：s = "{[]}"
// 输出：true

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

// 早期解法
// var isValid = function(s) {
//   var stack = []
//   if(s.length % 2 !== 0){
//       return false
//   }
//   let i = 0;
//   const map = {
//       "(":")",
//       "[":"]",
//       "{":"}",
//   }
//   let len = s.length
//   while(i < len ){
//       const chart = s[i]
//       switch(chart){
//           case '(':
//           case '{':
//           case '[':
//               stack.push(chart);
//               break;
//           default:
//               if(chart !== map[stack.pop()]){
//                   return false
//               }
//       }
//       i++
//   }
//   return stack.length === 0
// };
