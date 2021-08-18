// https://leetcode-cn.com/problems/build-an-array-with-stack-operations/

/**
 * 考察点：主要是考察栈的操作，什么情况下应该pop，什么情况下应该peek
 * 示例 1：
 * 输入：target = [1,3], n = 3
 * 输出：["Push","Push","Pop","Push"]
 *
 * 示例 2：
 * 输入：target = [1,2,3], n = 3
 * 输出：["Push","Push","Push"]
 *
 * 示例 3：
 * 输入：target = [1,2], n = 4
 * 输出：["Push","Push"]
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
  const stack = [];
  const _stack = [];
  for (let i = 0; i < n; i++) {
    stack.push(i + 1);
    _stack.push("Push");

    // peek
    const peek = target[stack.length - 1];
    if (peek != stack[stack.length - 1]) {
      _stack.push("Pop");
      stack.pop();
    }

    // 如果栈的数量和目标数量一致，哪怕n还需要继续循环也应该停止
    // 比如 [1, 2], 4，这个时候到2已经结束了，如果继续循环，本来应该输出
    // [ 'Push', 'Push'],结果输出了[ 'Push', 'Push', 'Push', 'Pop', 'Push', 'Pop' ]
    if (stack.length === target.length) {
      return _stack;
    }
  }
  return _stack;
};

buildArray([1, 2], 4);
