// https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 105. 从前序与中序遍历序列构造二叉树-1、递归法
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = (preorder, inorder) => {
  if (preorder.length === 0) return null;

  const rootVal = preorder[0];
  const mid = inorder.findIndex((k) => k === rootVal);
  const root = new TreeNode(rootVal);
  // preorder[1,2,5,4,6,7,3,8,9]
  // inorder[5,2,6,4,7,1,8,3,9]
  // mid = 5
  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
  return root;
};
