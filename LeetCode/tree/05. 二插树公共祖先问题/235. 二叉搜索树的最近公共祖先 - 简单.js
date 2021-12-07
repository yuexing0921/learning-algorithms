// https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * 235. 二叉搜索树的最近公共祖先 - 递归实现方式
 * 1. p、q在root左子树
 * 2. p、q在root右子树
 * 3. p、q在root左右两边，那么root就是他们的最近公共祖先
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (root === null) return root;
  // 1. p、q在root左子树
  if (root.val > p.val && root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q);
  }
  // 2. p、q在root右子树
  if (root.val < p.val && root.val < q.val) {
    return lowestCommonAncestor(root.right, p, q);
  }
  // p、q在root左右两边，那么root就是他们的最近公共祖先
  return root;
};

/**
 * 235. 二叉搜索树的最近公共祖先 - 迭代实现方式
 * 1. p、q在root左子树
 * 2. p、q在root右子树
 * 3. p、q在root左右两边，那么root就是他们的最近公共祖先
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  while (root) {
    // 1. p、q在root左子树
    if (root.val > p.val && root.val > q.val) {
      root = root.left;
      continue;
    }
    // 2. p、q在root右子树
    if (root.val < p.val && root.val < q.val) {
      root = root.right;
      continue;
    }
    return root;
  }
  return null;
};
