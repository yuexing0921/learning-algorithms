// https://leetcode-cn.com/problems/remove-linked-list-elements/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// /**
//  * 203. 移除链表元素 - 普通迭代法
//  * @param {ListNode} head
//  * @param {number} val
//  * @return {ListNode}
//  */
// var removeElements = function (head, val) {
//   const ret = new ListNode(val, head);
//   let curr = ret;
//   while (curr.next) {
//     if (curr.next.val === val) {
//       // 删除当前节点
//       curr.next = curr.next.next;
//       continue;
//     }
//     // 移动到下一个节点
//     curr = curr.next;
//   }
//   return ret.next;
// };

/**
 * 203. 移除链表元素 - 递归法
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  if (head == null) return null; //设置终止递归

  if (head.val == val) return removeElements(head.next, val);
  else {
    // 如果不相等，则移动指针
    head.next = removeElements(head.next, val);
    return head;
  }
};
