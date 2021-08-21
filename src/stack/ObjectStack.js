/**
 * 通过Object构造队列
 *
 */
export class ObjectStack {
  constructor() {
    this.stack = {};
    this.count = 0;
  }

  size() {
    return this.count;
  }

  // 入栈
  push(ele) {
    this.stack[this.count++] = ele;
  }

  // 出栈
  pop() {
    if (this.count === 0) {
      return;
    }

    const item = this.stack[this.count - 1];

    delete this.stack[this.count--];
    return item;
  }

  // 查看下一个
  peek() {
    return this.stack[this.count - 1];
  }

  isEmpty() {
    return this.count === 0;
  }

  clear() {
    this.stack = {};
    this.count = 0;
  }
}
