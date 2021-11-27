// https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head) {
    return head;
  }
  // 这是核心，在头部添加一个节点。本来[1,1,3]变成[0,1,1,3]
  const dummyNode = new ListNode(0, head);
  let curr = dummyNode;
  while (curr.next && curr.next.next) {
    if (curr.next.val === curr.next.next.val) {
      const x = curr.next.val;
      while (curr.next && curr.next.val == x) {
        curr.next = curr.next.next;
      }
    } else {
      curr = curr.next;
    }
  }
  return dummyNode.next;
};
