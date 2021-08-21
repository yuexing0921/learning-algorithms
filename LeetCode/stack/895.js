// https://leetcode-cn.com/problems/maximum-frequency-stack/

var FreqStack = function () {
  this.countStack = {};
  this.freqStack = {};
  this.max = 0;
};

/**
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function (val) {
  const freq = (this.countStack[val] || 0) + 1;
  this.countStack[val] = freq;

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

  this.countStack[val] -= 1;

  // 更新maxFreq
  if (!stack.length) {
    this.max--;
  }
  return val;
};

// var FreqStack = function () {
//   this.maxFreq = 0;
//   // FV MAP
//   this.FreqToVal = new Map();
//   this.ValToFreq = new Map();
// };

// /**
//  * @param {number} val
//  * @return {void}
//  */
// FreqStack.prototype.push = function (val) {
//   // 修改VF表
//   let freq = this.ValToFreq.has(val) ? this.ValToFreq.get(val) + 1 : 1;
//   this.ValToFreq.set(val, freq);
//   // 修改FV表：在对应freq对应的列表上加上val
//   if (!this.FreqToVal.has(freq)) {
//     this.FreqToVal.set(freq, []);
//   }
//   this.FreqToVal.get(freq).push(val);
//   this.maxFreq = Math.max(this.maxFreq, freq);
// };

// /**
//  * @return {number}
//  */
// FreqStack.prototype.pop = function () {
//   // 修改FV表： pop出一个maxFreq 对应的元素v
//   let vals = this.FreqToVal.get(this.maxFreq);
//   let v = vals.pop();
//   // 修改VF表，使v对应的freq-1
//   freq = this.ValToFreq.get(v) - 1;
//   this.ValToFreq.set(v, freq);
//   // 更新maxFreq
//   if (!vals.length) {
//     this.maxFreq--;
//   }
//   console.log(v);
//   return v;
// };

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
