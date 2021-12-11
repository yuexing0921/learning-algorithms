// https://leetcode-cn.com/problems/delete-node-in-a-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 删除一个节点
 * [4,5,1,9] 5
 * => [4,1,9]
 * 通常删除一个节点，只需要把上一个节点的next指向下下个节点就可以了
 * 但是本题是不知道上一个节点的，所以为了删除当前节点，需要构造一个上一个节点。
 * 1. 构造上一个节点
 *  node.val = node.next.val
 *  [4,5,1,9] => [4,1,1,9]
 * 2. 删除构造的上一个节点，把第2个节点【1】的next指向【9】
 *  node.next = node.next.next
 *  [4,5,1,9] => [4,1,9]
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};
