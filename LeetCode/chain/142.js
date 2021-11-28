// https://leetcode-cn.com/problems/linked-list-cycle-ii/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 1. hash表
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  const set = new Set();
  while (head) {
    if (set.has(head)) {
      return head;
    }
    set.add(head);
    head = head.next;
  }
  return null;
};

/**
 * 2. 快慢指针
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let fast = head,
    slow = head;
  while (fast) {
    slow = slow.next;
    if (!fast.next) {
      return null;
    }
    fast = fast.next.next;
    // 如果出现了环，则需要重新
    if (slow === fast) {
      let fast = head;
      while (fast !== slow) {
        fast = fast.next;
        slow = slow.next;
      }

      return fast;
    }
  }
  return null;
};
