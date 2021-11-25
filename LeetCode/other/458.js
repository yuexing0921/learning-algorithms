// https://leetcode-cn.com/problems/poor-pigs/

/**
 * 解题思路
 *  https://leetcode-cn.com/problems/poor-pigs/solution/geekplayers-leetcode-ac-qing-xi-yi-dong-0kc15/
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function (buckets, minutesToDie, minutesToTest) {
  if (buckets == 1) {
    return 0;
  }
  const edgeLen = minutesToTest / minutesToDie + 1;
  let pigs = 0;
  while (Math.pow(edgeLen, pigs) < buckets) {
    pigs++;
  }
  return pigs;
};
