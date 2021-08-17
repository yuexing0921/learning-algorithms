/**
 * 栈的
 * 主要特性：
 *  先入后出
 * 主要操作：
 *  出栈和入栈
 */

/**
 * 基础版stack，通过数组进行构造
 *
 */
export class Stack {
  constructor() {
    this.arr = [];
  }

  size() {
    return this.arr.length;
  }

  // 入栈 O=1
  push(ele) {
    this.arr.push(ele);
  }

  // 出栈 O=1
  pop() {
    return this.arr.pop();
  }

  // 查看下一个
  peek() {
    return this.arr[this.size() - 1];
  }

  isEmpty() {
    return this.arr.length === 0;
  }

  clear() {
    this.arr = [];
  }
}
