// https://leetcode-cn.com/problems/merge-two-sorted-lists/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 合并两个有序数组，递归法
 * 假设两个数字n1和n2，逻辑上来说，只有两种可能
 * 1. n1 > n2 排序 [n2,n1]
 *      return [n2, n1]
 * 2. 其他情况
 *      return [n1, n2]
 *
 * 每次都是把自己返回，然后形成新的数组，同理链表也是这样
 *
 * 1. l1.val > l2.val 排序 l2 => l1
 *    l2.next = l1.next
 *
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (l1 === null) return l2;
  if (l2 === null) return l1;

  if (l1.val > l2.val) {
    // 不断next下去，一直找到比它大的值
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  } else {
    // 同上
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  }
};

/**
 * 合并两个有序数组，迭代法，暴力解法
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  const dummy = new ListNode();

  let curr = dummy;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }
  curr.next = l1 === null ? l2 : l1;
  return dummy.next;
};
