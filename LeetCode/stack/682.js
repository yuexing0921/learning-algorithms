// https://leetcode-cn.com/problems/baseball-game/

// 输入：ops = ["5","2","C","D","+"]
// 输出：30
// 解释：
// "5" - 记录加 5 ，记录现在是 [5]
// "2" - 记录加 2 ，记录现在是 [5, 2]
// "C" - 使前一次得分的记录无效并将其移除，记录现在是 [5].
// "D" - 记录加 2 * 5 = 10 ，记录现在是 [5, 10].
// "+" - 记录加 5 + 10 = 15 ，记录现在是 [5, 10, 15].
// 所有得分的总和 5 + 10 + 15 = 30

/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  const stack = [];
  for (let i = 0; i < ops.length; i++) {
    const o = ops[i];
    const sl = stack.length;
    switch (o) {
      case "+":
        stack.push(stack[sl - 1] + stack[sl - 2]);
        continue;
      case "D":
        stack.push(stack[sl - 1] * 2);
        continue;
      case "C":
        stack.pop();
        continue;
      default:
        stack.push(+o);
    }
  }
  console.log(stack);
  return stack.reduce((a, c) => a + c);
};

calPoints(["5", "2", "C", "D", "+"]); // 30
calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]); // 27
calPoints(["1"]); //1
