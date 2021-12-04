// https://leetcode-cn.com/problems/ransom-note/
/**
 * 所有字符的，用hash表是一个比较好的选择
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) {
    return false;
  }
  const cnt = new Array(26).fill(0);
  const aIndex = "a".charCodeAt();
  for (const c of magazine) {
    // 统计杂志的字符数
    cnt[c.charCodeAt() - aIndex]++;
  }
  for (const c of ransomNote) {
    const charIdx = c.charCodeAt() - aIndex;
    cnt[charIdx]--;
    // 说明杂志的字符不够用了
    if (cnt[charIdx] < 0) {
      return false;
    }
  }
  return true;
};
