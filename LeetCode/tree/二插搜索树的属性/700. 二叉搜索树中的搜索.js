// https://leetcode-cn.com/problems/search-in-a-binary-search-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 700. 二叉搜索树中的搜索
 * 二插搜索树满足如下性质：（left < root < right）
 * 左子树所有节点的元素值均小于根的元素值
 * 右子树所有节点的元素值均大于根的元素值
 */
// /**
//  * 1. 递归法
//  * @param {*} root
//  * @param {*} val
//  * @returns
//  */
// var searchBST = function (root, val) {
//   if (!root) {
//     return null;
//   }
//   if (root.val === val) {
//     return root;
//   }
//   return searchBST(val < root.val ? root.left : root.right, val);
// };

/**
 * 2. 迭代法
 * @param {*} root
 * @param {*} val
 * @returns
 */
var searchBST = function (root, val) {
  while (root) {
    if (root.val === val) return root;
    root = val < root.val ? root.left : root.right;
  }
  return null;
};
