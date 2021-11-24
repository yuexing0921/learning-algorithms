// https://leetcode-cn.com/problems/reconstruct-original-digits-from-english/
/**
 * 10个数字
 * 1:one
 * 2:two
 * 3:three
 * 4:four
 * 5:five
 * 6:six
 * 7:seven
 * 8:eight
 * 9:nine
 * 0:zero
 * 字符对应出现数字的位置
 * o:1、2、4、0
 * n:1、7、9
 * e:1、3、5、7、8、9、0
 * t:2、3、8
 * w:2
 *
 * @param {string} s
 * @return {string}
 */
var originalDigits = function (s) {
  const c = new Map();
  for (const ch of s) {
    c.set(ch, (c.get(ch) || 0) + 1);
  }

  const cnt = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    8: 0,
    9: 0,
  };
  // 先确定出现1次的字符
  cnt[0] = c.get("z") || 0; // zero
  cnt[2] = c.get("w") || 0; // two
  cnt[4] = c.get("u") || 0; // four
  cnt[6] = c.get("x") || 0; // six
  cnt[8] = c.get("g") || 0; // eight

  // 在确定出现2次的字符
  // 比如eightthree，那么h就出现了两次，把8出现的次数减少，就是确定3的次数，
  cnt[3] = (c.get("h") || 0) - cnt[8]; // three
  cnt[5] = (c.get("f") || 0) - cnt[4];
  cnt[7] = (c.get("s") || 0) - cnt[6];

  cnt[1] = (c.get("o") || 0) - cnt[0] - cnt[2] - cnt[4];
  // night, 如果把568的选择排除之后，就是9了
  cnt[9] = (c.get("i") || 0) - cnt[5] - cnt[6] - cnt[8];

  const ans = [];
  for (let i = 0; i < 10; ++i) {
    let n = cnt[i];
    while (n--) {
      ans.push(i);
    }
  }
  return ans.join("");
};
console.log(originalDigits("zerozero"));
