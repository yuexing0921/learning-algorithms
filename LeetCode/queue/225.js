// https://leetcode-cn.com/problems/implement-stack-using-queues/
/**
 * Initialize your data structure here.
 */
var MyStack = function () {
  this.stack = {};
  this.count = 0;
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.stack[this.count++] = x;
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
  let item;
  if (this.count !== 0) {
    item = this.stack[this.count - 1];
    delete this.stack[this.count - 1];
    this.count--;
  }
  return item;
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.stack[this.count - 1];
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.count === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
var myStack = new MyStack();
myStack.push(1);
myStack.push(2);
console.log(myStack.top()); // 返回 2
console.log(myStack.pop()); // 返回 2
