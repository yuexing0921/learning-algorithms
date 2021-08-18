// https://leetcode-cn.com/problems/min-stack/

/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = {};
  this.count = 0;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack[this.count++] = val;
};

/**
 *
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.count !== 0) {
    delete this.stack[this.count - 1];
    this.count--;
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.count - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  let min = this.stack[this.count - 1];
  for (let i = 0; i < this.count; i++) {
    const item = this.stack[i];
    if (min > item) {
      min = item;
    }
  }
  return min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
let minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin());
minStack.pop();
console.log(minStack.top());
console.log(minStack.getMin());
