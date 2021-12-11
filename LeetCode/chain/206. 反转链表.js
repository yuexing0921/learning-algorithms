// https://leetcode-cn.com/problems/reverse-linked-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 反转链表 普通迭代法 三部曲
 * 1. 设立prev = null，保存下一个指针next
 *    const next = curr.next;
 * 2. 把next指向 prev
 *    curr.next = prev;
 * 3. prev往前挪一位
 *    prev = curr;
 * 4. 当前指针指向下一个节点next
 *    curr = next;
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null; // 上一个节点
  let curr = head; // 移动的当前节点
  while (curr) {
    const next = curr.next; // 保存下一个节点
    // 1. curr.next 指向 prev(上一个指针)
    curr.next = prev;
    // 2. prev往前移动到curr(当前指针)
    prev = curr;
    // 3. curr移动到next
    curr = next;
  }
  return prev;
};
/**
 * 递归方式1
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseList = function (head) {
  const reverse = function (prev, node) {
    if (node == null) {
      return prev;
    }
    const next = node.next; // 保存下一个节点
    node.next = prev; // 指向上一个指针
    prev = node; // 上一个指针移位到当前指针
    return reverse(prev, next); // 当前指针移动到下一个指针
  };
  return reverse(null, head);
};
/**
 * 递归方式
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (head == null || head.next == null) return head;
  const p = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return p;
};
