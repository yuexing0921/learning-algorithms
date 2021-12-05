// https://leetcode-cn.com/problems/intersection-of-two-linked-lists/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 160. 相交链表 - hash表(方法一)
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) {
    return null;
  }
  let nextA = headA,
    nextB = headB;
  const set = new Set();
  while (nextA) {
    set.add(nextA);
    nextA = nextA.next;
  }
  while (nextB) {
    if (set.has(nextB)) {
      return nextB;
    }
    nextB = nextB.next;
  }
  return null;
};

/**
 * 160. 相交链表 - 双指针的方式(方法一)
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (headA == null || headB == null) {
    return null;
  }
  let pA = headA,
    pB = headB;
  while (pA !== pB) {
    pA = pA === null ? headB : pA.next;
    pB = pB === null ? headA : pB.next;
  }
  return pB;
};
