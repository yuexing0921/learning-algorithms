// 声明链表的节点
export class Node {
  constructor(value) {
    this.val = value;
    this.next = undefined;
  }
}
// 声明链表的数据结构
export class NodeList {
  constructor(arr) {
    // 拿到一个头部节点
    let head = new Node(arr.shift());
    // 下一个节点，自动指向头部
    let next = head;
    arr.forEach((item) => {
      // 下一个节点指向
      next.next = new Node(item);
      next = next.next;
    });
    return head;
  }
  add(val){
    const 
  }
}

// 交换两个节点的值
function swap(p, q) {
  let val = p.val;
  p.val = q.val;
  q.val = val;
}

// 寻找基准元素的节点
function partion(begin, end) {
  let val = begin.val;
  let p = begin;
  let q = begin.next;
  while (q !== end) {
    if (q.val < val) {
      p = p.next;
      swap(p, q);
    }
    q = q.next;
  }
  // 让基准元素放到中间去
  swap(p, begin);
  return p;
}

// 快速排序
export function sort(begin, end) {
  if (begin !== end) {
    let part = partion(begin, end);
    // 左边排序
    sort(begin, part);
    // 右边排序
    sort(part.next, end);
  }
}
