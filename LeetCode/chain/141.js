// https://leetcode-cn.com/problems/linked-list-cycle/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 1. JSON.strinfiy
 * @param {ListNode} head
 * @return {boolean}
 */
// var hasCycle = function (head) {
//   try {
//     JSON.stringify(head);
//     return false;
//   } catch (e) {
//     return true;
//   }
// };

/**
 * 2. 标记法
 * @param {ListNode} head
 * @return {boolean}
 */
// var hasCycle = function (head) {
//   while (head) {
//     if (head.__tag) {
//       return true;
//     }
//     head.__tag = true;
//     head = head.next;
//   }
//   return false;
// };

/**
 * 3. 快慢指针
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let slow = head,
    fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
};
