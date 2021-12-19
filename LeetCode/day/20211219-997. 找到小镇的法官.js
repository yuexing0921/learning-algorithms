/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  const believe = new Array(n + 1).fill(0),
    unbelieving = new Array(n + 1).fill(0);

  for (const t of trust) {
    believe[t[1]]++;
    unbelieving[t[0]]++;
  }
  for (let i = 1; i <= n; i++) {
    // 不相信任何人 && 被所有人相信
    if (unbelieving[i] == 0 && believe[i] == n - 1) return i;
  }
  return -1;
};

findJudge(3, [
  [1, 3],
  [2, 3],
]);
