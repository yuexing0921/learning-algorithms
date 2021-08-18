// https://leetcode-cn.com/problems/remove-outermost-parentheses/

/**
 * 简单
 * 通过化解字符串中的原语
 *
 * 解题的关键是如何拆分原语
 *
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (S) {
  // 1. 最简解答
  // https://leetcode-cn.com/problems/remove-outermost-parentheses/solution/ji-shu-fa-shan-chu-zui-wai-ceng-de-gua-h-55id/
  let count = 0,
    ans = "";
  for (let i = 0; i < S.length; i++) {
    if (S[i] === "(" && count++ > 0) ans += "(";
    if (S[i] === ")" && count-- > 1) ans += ")";
  }
  console.log(ans);
  return ans;
  // // 2. 上一种的细化
  // let count = 0;
  // let ans = "";
  // for(let i = 0; i < S.length; i++) {
  //   const c = S[i];
  //   if(c === "("){}
  // }

  // 2. 通过栈的方式
  // const arr = [];
  // const map = { "{": "}" };
  // for (var i = 0; i < S.length; i++) {
  //   const c = S.charAt(i);
  //   if()
  // }
};

// removeOuterParentheses("(()())(())");
removeOuterParentheses("(()())(())(()(()))");
// removeOuterParentheses("()()");
