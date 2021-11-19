/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 普通迭代法
 * @param {ListNode} head
 * @return {ListNode}
 */
// var reverseList = function (head) {
//   let prev = null; // 上一个节点
//   let curr = head; // 移动的当前节点
//   while (curr) {
//     const next = curr.next; // 保存下一个节点
//     curr.next = prev; // 指向上一个指针
//     prev = curr; // 上一个指针移位到当前指针
//     curr = next; // 当前指针移动到下一个指针
//   }
//   return prev;
// };

/**
 * 递归方式
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    if(head == null || head.next == null) return head;
    const p = reverseList(head.next);
    head.next.next = head
    head.next = null
    return p
}