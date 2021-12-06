// https://leetcode-cn.com/problems/maximum-binary-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 双指针递归的方式的
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  if (!nums || !nums.length) {
    return null;
  }
  if (nums.length < 2) {
    return new TreeNode(nums ? nums[0] : 0);
  }

  const max = findMax(nums);
  const root = new TreeNode(nums[max]);
  root.left = constructMaximumBinaryTree(nums.slice(0, max));
  root.right = constructMaximumBinaryTree(nums.slice(max + 1));
  return root;
};

function findMax(nums) {
  let left = 1,
    right = nums.length - 1,
    max = 0;
  while (left <= right) {
    if (nums[left] > nums[right] && nums[left] > nums[max]) {
      max = left;
    } else if (nums[right] > nums[max]) {
      max = right;
    }
    left++;
    right--;
  }
  return max;
}

const findMax = function (nums, start, end) {
  let max = start;
  while (start <= end) {
    if (nums[start] > nums[end] && nums[start] > nums[max]) {
      max = start;
    } else if (nums[end] > nums[max]) {
      max = end;
    }
    start++;
    end--;
  }
  return max;
};
/**
 * 优化版本
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  const buildTree = (arr, start, end) => {
    if (start > end) {
      return null;
    }
    if (start === end) {
      return new TreeNode(arr[end]);
    }
    const max = findMax(arr, start, end);
    const root = new TreeNode(arr[max]);
    root.left = buildTree(arr, start, max - 1);
    root.right = buildTree(arr, max + 1, end);
    return root;
  };
  return buildTree(nums, 0, nums.length - 1);
};
