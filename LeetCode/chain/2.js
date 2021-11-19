// https://leetcode-cn.com/problems/add-two-numbers/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // 为了操作方便，生成一个虚拟节点。
  let dummy = new ListNode(0);
  let curr = dummy;
  // 进位符号
  let carry = 0;
  while (l1 || l2) {
    const v1 = l1 ? l1.val : 0;
    const v2 = l2 ? l2.val : 0;
    const total = v1 + v2 + carry;
    // 取模是为了获取0-9的位数
    curr.next = new ListNode(total % 10);
    // 获取进位，因为顶多只能进位1，所以需用Math.floor向下取整
    carry = Math.floor(total / 10);
    // 虚拟节点往下移动
    curr = curr.next;
    // 移动l1和l2
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  // 如果进位大于0，需用进一步移位
  if (carry > 0) {
    curr.next = new ListNode(carry);
  }
  return dummy.next;
};
