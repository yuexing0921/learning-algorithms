// https://leetcode-cn.com/problems/find-mode-in-binary-search-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 501. 二叉搜索树中的众数 - 中序遍历递归
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function (root) {
  let base = 0,
    res = [],
    maxCount = 0,
    count = 0;
  const handle = function (val) {
    if (val === base) {
      count++;
    } else {
      count = 1;
      base = val;
    }
    if (count === maxCount) {
      // 重复的选项，比如：[1,null,2] => [2,1]
      res.push(base);
    }

    if (count > maxCount) {
      maxCount = count;
      res = [base];
    }
  };
  const inorder = function (node) {
    if (!node) return;
    inorder(node.left);
    handle(node.val);
    inorder(node.right);
  };
  inorder(root);
  return [res];
};
