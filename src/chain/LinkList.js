var LinkNode = function (val, next) {
  this.val = val || 0;
  this.next = next;
};
var MyLinkedList = function () {
  this.head = null;
  this.tail = null;
  this.size = 0;
};
/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.getNode = function (index) {
  if (index < 0 || index >= this.size) {
    return null;
  }
  let curr = new LinkNode(0, this.head);
  while (index-- >= 0) {
    curr = curr.next;
  }
  return curr;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  const node = this.getNode(index);
  return node ? node.val : -1;
};

/**
 * 添加到头部
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const node = new LinkNode(val, this.head);
  this.head = node;
  this.size++;
  if (!this.tail) {
    this.tail = node;
  }
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const node = new LinkNode(val, null);
  if (this.tail) {
    // 尾结点next指向当前节点
    this.tail.next = node;
    // 尾结点指向当前节点
    this.tail = node;
  } else {
    this.tail = node;
    this.head = node;
  }
  this.size++;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this.size) {
    return;
  }
  if (index <= 0) {
    this.addAtHead(val);
  } else if (index === this.size) {
    this.addAtTail(val);
  } else {
    // 获取目标的上一个节点
    const prev = this.getNode(index - 1);
    prev.next = new LinkNode(val, prev.next);
    this.size++;
  }
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) {
    return;
  }

  if (index == 0) {
    this.head = this.head.next;
  } else {
    // 获取上一个节点
    const prev = this.getNode(index - 1);
    // 对index节点进行移除
    prev.next = prev.next.next;
    if (index === this.size - 1) {
      // 如果是尾结点
      this.tail = prev;
    }
  }
  this.size--;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
