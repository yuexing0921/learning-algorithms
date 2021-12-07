// https://leetcode-cn.com/problems/find-bottom-left-tree-value/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 513.找树左下角的值：层序遍历（最佳方法）
 * 这道题最好的方式
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function (root) {
  if (!root) {
    return 0;
  }
  const queue = [];
  let res;
  while (queue.length) {
    const n = queue.length;
    for (let i = 0; i < n; i++) {
      const node = queue.shift();
      // 如果是第一个说明是最左边的
      if (i === 0) {
        res = node.val;
      }
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  return res;
};
/**
 * 513.找树左下角的值：递归方式
 * 这道题最好的方式
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function (root) {
  let res = 0;
  let maxDepth = -1;
  const dfs = (node, depth) => {
    if (!node) {
      return;
    }
    // 更新最大深度，这里面默认做了选择，只有最左边的才会选中
    if (depth > maxDepth) {
      maxDepth = depth;
      res = node.val;
    }
    node.left && dfs(node.left, depth + 1);
    node.right && dfs(node.right, depth + 1);
  };
  dfs(root, 0);
  return res;
};
