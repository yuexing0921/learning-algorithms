// https://leetcode-cn.com/problems/merge-two-binary-trees/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 617. 合并二叉树 - dfs
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  if (!root1 && !root2) {
    return null;
  }
  if (!root1 && root2) {
    return root2;
  }
  if (root1 && !root2) {
    return root1;
  }
  const root = new TreeNode(root1.val + root2.val);
  root.left = mergeTrees(root1.left, root2.left);
  root.right = mergeTrees(root1.right, root2.right);
  return root;
};
/**
 * 617. 合并二叉树 - bfs-队列
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  if (root1 === null) return root2;
  if (root2 === null) return root1;
  const queue = [root1, root2];

  while (queue.length) {
    const t1 = queue.shift();
    const t2 = queue.shift();
    t1.val += t2.val;
    if (t1.left && t2.left) {
      queue.push(t1.left);
      queue.push(t2.left);
    }
    if (t1.right && t2.right) {
      queue.push(t1.right);
      queue.push(t2.right);
    }
    if (t1.left === null && t2.left) {
      t1.left = t2.left;
    }
    if (t1.right === null && t2.right) {
      t1.right = t2.right;
    }
  }
  return root1;
};

/**
 * 617. 合并二叉树 - bfs-栈
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  if (root1 === null) return root2;
  if (root2 === null) return root1;
  const stack = [root1, root2];

  while (stack.length) {
    const t1 = stack.pop();
    const t2 = stack.pop();
    t1.val += t2.val;
    if (t1.left && t2.left) {
      stack.push(t2.left);
      stack.push(t1.left);
    }
    if (t1.right && t2.right) {
      stack.push(t2.right);
      stack.push(t1.right);
    }
    if (t1.left === null && t2.left) {
      t1.left = t2.left;
    }
    if (t1.right === null && t2.right) {
      t1.right = t2.right;
    }
  }
  return root1;
};
