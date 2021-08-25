/**
 * 先进先出
 */
export default class Queue {
  constructor() {
    this.count = 0;
    this.current = 0;
    this.items = {};
  }

  /**
   * 进队列
   * @param {*} item
   */
  enqueue(item) {
    this.items[this.count++] = item;
  }

  /**
   * 出队列
   */
  dequeue() {
    if (this.isEmpty()) {
      return;
    }
    const item = this.items[this.current];
    this.current++;
    return item;
  }

  /**
   * 查看最近一次入队列的值
   */
  peek() {
    return this.items[this.current];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.count - this.current;
  }

  clear() {
    this.count = 0;
    this.current = 0;
    this.items = {};
  }
}
