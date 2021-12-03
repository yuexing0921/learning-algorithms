// https://leetcode-cn.com/problems/binary-tree-paths/
// 257. 二叉树的所有路径
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// /**
// * 深度递归
// 输入：root = [1,2,3,null,5]
// 输出：["1->2->5","1->3"]
//  * @param {TreeNode} root
//  * @return {string[]}
//  */
// var binaryTreePaths = function (root) {
//   const paths = [];
//   const dfs = function (node, path) {
//     if (node) {
//       path += "" + node.val;
//       if (!node.left && !node.right) {
//         paths.push(path);
//       } else {
//         path += "->";
//         dfs(node.left, path);
//         dfs(node.right, path);
//       }
//     }
//   };
//   dfs(root, "");
//   return paths;
// };
/**
 * DFS
 * @param {*} root
 * @returns
 */
var binaryTreePaths = function (root) {
  const paths = [];
  const dfs = (root, path) => {
    //传入递归的节点和路径数组
    if (root) {
      path += root.val.toString(); //加入当前节点
      //叶子结点就将所有连接起来的节点字符串加入paths中 也就是其中一条路径
      if (root.left === null && root.right === null) {
        paths.push(path);
      } else {
        path += "->"; //不是叶子节点继续递归左右子树
        dfs(root.left, path);
        dfs(root.right, path);
      }
    }
  };
  dfs(root, "");
  return paths;
};

/**
 * BFS
 * @param {*} root
 * @returns
 */
var binaryTreePaths = function (root) {
  if (!root) {
    return null;
  }
  const queue = [root];
  const paths = ["" + root.val];
  const res = [];
  while (queue.length > 0) {
    const node = queue.shift();
    const path = paths.shift();
    if (!node.left && !node.right) {
      // 如果左右节点都为空了
      res.push(path);
    }
    if (node.left) {
      queue.push(node.left);
      paths.push(path + "->" + node.left.val);
    }
    if (node.right) {
      queue.push(node.right);
      paths.push(path + "->" + node.right.val);
    }
  }
  return res;
};
