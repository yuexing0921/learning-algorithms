// https://leetcode-cn.com/problems/remove-linked-list-elements/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 203. 移除链表元素 - 迭代法（最符合直觉）
 * 1. 设立一个前置虚拟节点
 * 2. curr.next.val === val // 如果前置节点的下一个节点和val相等
 *      curr.next = curr.next.next // 一个节点删除，直接挪到下下个节点
 * 3. 如果不相等
 *      curr = curr.next // 前置节点进行前移一格
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  const dummy = new ListNode(0, head);
  let curr = dummy;
  while (curr.next) {
    if (curr.next.val === val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return dummy.next;
};
/**
 * 203. 移除链表元素 - 递归法
 * 递归三部曲：终止条件、本级应该做什么、返回上一层的值应该是什么
 * 1. 递归终止条件，head == null
 * 2. 本级应该做什么：
 *      相等：原地删除， head = head.next
 *      不相等：head.next = head.next
 * 3. 返回上一层
 *    return head
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  if (head === null) return head;

  if (head.val === val) {
    head = removeElements(head.next, val);
  } else {
    head.next = removeElements(head.next, val);
  }
  return head;
};
