//leetcode-cn.com/problems/balanced-binary-tree/
// 110. 平衡二叉树
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {};

setTimeout(() => {
  console.log("1-1");
  Promise.resolve().then(() => {
    console.log("1-2");
  });
});

console.log("2-1");
Promise.resolve().then(() => {
  console.log("3-1");
  setTimeout(() => {
    console.log("3-2");
  });
});

new Promise((resolve, reject) => {
  console.log("4-1");
  resolve();
}).then(() => {
  console.log("4-2");
});
// 2-1
// 4-1
// 3-1
// 4-2
// 1-1
// 1-2
// 3-2
