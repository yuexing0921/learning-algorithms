// https://leetcode-cn.com/problems/maximum-frequency-stack/

/**
 * 又是一个栈的题，这次题目的
 */
var FreqStack = function () {
  this.map = {};
  this.freqStack = {};
  this.max = 0;
};

/**
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function (val) {
  const freq = (this.map[val] || 0) + 1;
  this.map[val] = freq;

  const stack = this.freqStack[freq] || [];
  stack.push(val);
  this.freqStack[freq] = stack;
  this.max = Math.max(this.max, freq);
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function () {
  const stack = this.freqStack[this.max];

  const val = stack.pop();

  this.map[val] -= 1;

  if (!stack.length) {
    delete this.freqStack[this.max];
    this.max--;
  }
  //   console.log(val);
  return val;
};

// 输入：
// ["FreqStack","push","push","push","push","push","push","pop","pop","pop","pop"],
// [[],[5],[7],[5],[7],[4],[5],[],[],[],[]]
// 输出：[null,null,null,null,null,null,null,5,7,5,4]
// 解释：
// 执行六次 .push 操作后，栈自底向上为 [5,7,5,7,4,5]。然后：

// pop() -> 返回 5，因为 5 是出现频率最高的。
// 栈变成 [5,7,5,7,4]。

// pop() -> 返回 7，因为 5 和 7 都是频率最高的，但 7 最接近栈顶。
// 栈变成 [5,7,5,4]。

// pop() -> 返回 5 。
// 栈变成 [5,7,4]。

// pop() -> 返回 4 。
// 栈变成 [5,7]。

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
var s = new FreqStack();
s.push(5);
s.push(7);
s.push(5);
s.push(7);
s.push(4);
s.push(5);
s.pop();
s.pop();
s.pop();
s.pop();
