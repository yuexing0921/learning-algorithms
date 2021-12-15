// https://leetcode-cn.com/problems/swap-nodes-in-pairs/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 24. 两两交换链表中的节点
 * 解法来源：
 * https://leetcode-cn.com/problems/swap-nodes-in-pairs/solution/24-liang-liang-jiao-huan-lian-biao-zhong-2kiy/
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  const dummy = new ListNode(0, head);
  let curr = dummy;
  while (curr.next && curr.next.next) {
    const first = curr.next,
      second = curr.next.next;

    // 1. first.next指向second.next
    first.next = second.next;
    // 2. second.next指向first
    second.next = first;
    // 3. curr.next 指向second
    curr.next = second;

    // 循环指向下一个节点a
    curr = first;
  }
  return dummy.next;
};
