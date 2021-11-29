// https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 19. 删除链表的倒数第 N 个结点
 * 通过快慢指针(滑动窗口)来做处理
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0, head);
  right = left = dummy;
  let i = 0;
  while (right) {
    if (i === n) {
      if (!right.next) {
        // 滑动窗口结束, 删除节点
        left.next = left.next.next;
        return dummy.next;
      } else {
        left = left.next;
        right = right.next;
      }
    } else {
      right = right.next;
      ++i;
    }
  }
};
