// https://leetcode-cn.com/problems/implement-strstr/

/**
 * 暴力解法
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  const len1 = haystack.length,
    len2 = needle.length;
  let i, j;
  for (j = 0, i = 0; i < len1 && j < len2; i++) {
    if (haystack.charAt(i) === needle.charAt(j)) {
      ++j;
    } else {
      //不匹配时
      // 将 i 本次匹配的开始位置的下一字符
      i = i - j;
      // 将 j 重新指向模式串的头部，
      j = 0;
    }
  }
  return j === len2 ? i - j : -1;
};

strStr("hello", "ll");
