// https://leetcode-cn.com/problems/palindrome-linked-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 234. 回文链表
 * 方法1: 通过把链表的值，放入到数组中，然后进行快慢指针
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  const vals = [];
  while (head) {
    vals.push(head.val);
    head = head.next;
  }
  let left = 0;
  right = vals.length - 1;
  while (left < right) {
    if (vals[left] !== vals[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

/**
 * 234. 回文链表
 * 这个方法的前提是，对于反转链表毕竟熟悉了，不熟悉的可以刷206题
 * 方法2: 通过快慢指针，把链表进行对折
 * 1. 找到链表的中间节点
 * 2. 反转后半部分链表[1->2->3->2->1] => [1->2->3<-1<-2]
 * 3. 判定是否回文，遍历两个链表，如果两个链表不一致则不是，
 * 4. 返回3结果之前，对反转的链表进行再次重置
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head || !head.next) {
    return true;
  }
  //   1. 找到链表的中间节点
  let mid = findMidByChain(head);

  // 2. 反转后半部分链表
  let midHead = reverseChain(mid.next);

  // 3. 判定是否回文，遍历两个链表，如果两个链表不一致则不是
  let chain1 = head;
  let chain2 = midHead;
  let res = true;
  while (res && chain2) {
    if (chain1.val !== chain2.val) {
      res = false;
    }
    chain1 = chain1.next;
    chain2 = chain2.next;
  }

  // 4. 返回3结果之前，对反转的链表进行再次重置
  mid.next = reverseChain(midHead);
  return res;
};
function findMidByChain(head) {
  let fast = head;
  let slow = head;
  while (fast.next !== null && fast.next.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}

function reverseChain(head) {
  let prev = null,
    curr = head;
  // 反转链表三部曲
  while (curr) {
    const next = curr.next;
    // 当前next指向prev（上一个）
    curr.next = prev;
    // 上一个指向当前
    prev = curr;
    // 当前指向next
    curr = next;
  }
  return prev;
}
