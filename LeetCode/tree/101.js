// https://leetcode-cn.com/problems/symmetric-tree/
//  101. 对称二叉树
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// /**
//  * 1.递归法01- 101. 对称二叉树
//  * @param {TreeNode} root
//  * @return {boolean}
//  */
// var isSymmetric = function (root) {
//   const check = (left, right) => {
//     // 递归三部曲，确定终止条件
//     if (!left && !right) {
//       // 如果都为空，则为true
//       return true;
//     } else if (!left && right) {
//       // 如果左空，右有
//       return false;
//     } else if (left && !right) {
//       // 如果左有，右空
//       return false;
//     } else if (left.val !== right.val) {
//       // 如果两边的值不对
//       return false;
//     }
//     return check(left.left, right.right) && check(left.right, right.left);
//   };
//   return check(root, root);
// };
// /**
//  * 2.递归法02(极简代码)- 101. 对称二叉树
//  * @param {TreeNode} root
//  * @return {boolean}
//  */
// var isSymmetric = function (root) {
//   const check = (node1, node2) => {
//     // 递归三部曲，确定终止条件
//     // 如果都为空
//     if (!node1 && !node2) return true;
//     // 如果任一方没有值
//     if (!node1 || !node2) return false;

//     return (
//       node1.val === node2.val &&
//       check(node1.left, node2.right) &&
//       check(node1.right, node2.left)
//     );
//   };
//   return check(root, root);
// };
// /**
//  * 3.队列-迭代法01 - 101. 对称二叉树
//  * @param {TreeNode} root
//  * @return {boolean}
//  */
// var isSymmetric = function (root) {
//   if (!root) {
//     return true;
//   }
//   const queue = [];

//   queue.push(root.left);
//   queue.push(root.right);

//   while (queue.length) {
//     const left = queue.shift();
//     const right = queue.shift();
//     if (!left && !right) {
//       continue;
//     }
//     if (!left || !right || left.val !== right.val) {
//       return false;
//     }
//     queue.push(left.left);
//     queue.push(right.right);
//     queue.push(left.right);
//     queue.push(right.left);
//   }
//   return true;
// };

/**
 * 4.栈-迭代法02 - 101. 对称二叉树
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) {
    return true;
  }
  const stack = [];

  stack.push(root.left);
  stack.push(root.right);

  while (stack.length) {
    const left = queue.pop();
    const right = queue.pop();
    if (!left && !right) {
      continue;
    }
    if (!left || !right || left.val !== right.val) {
      return false;
    }
    queue.push(left.left);
    queue.push(right.right);
    queue.push(left.right);
    queue.push(right.left);
  }
  return true;
};
