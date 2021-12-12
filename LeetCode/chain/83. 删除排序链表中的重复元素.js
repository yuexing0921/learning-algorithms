// https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 83. 删除排序链表中的重复元素
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let curr = head;
  while (curr && curr.next) {
    const next = curr.next;
    // 如果和下一个相等，则next指针指向下下个
    if (curr.val == next.val) {
      curr.next = next.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
};
