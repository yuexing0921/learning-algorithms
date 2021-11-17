// https://leetcode-cn.com/problems/two-sum

/**
 * 1. 暴力算法, 通过依次遍历, 这种算法不可能成功，会超出时间
 * 注意边界条件：
 *  1. 答案中不可以包含重复的三元组。
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function (nums) {
//   const arr = [];
//   nums.sort();
//   const len = nums.length;
//   if (len < 3) return [];
//   if (nums[len - 1] === nums[0] && nums[0] === 0) {
//     return [[0, 0, 0]];
//   }
//   if (nums[len - 1] === nums[0] || nums[0] >= 0) {
//     return [];
//   }
//   for (let i = 0; i < len - 2; i++) {
//     for (let j = i + 1; j < len - 1; j++) {
//       for (let k = j + 1; k < len; k++) {
//         if (nums[i] + nums[j] + nums[k] === 0) {
//           arr.push(`${nums[i]}, ${nums[j]}, ${nums[k]}`);
//         }
//       }
//     }
//   }
//   return Array.from(new Set(arr)).map((i) => i.split(","));
// };

/**
 * 2. 双指针法则
 *  注意n1、n2、n3的重复值过滤
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const len = nums.length;
  const res = [];
  if (len < 3) {
    return res;
  }
  // 升序排列 -4,-1,0,1,3,5 时间复杂度：O(nlogn)
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    const n1 = nums[i];
    // 当前元素 > 0 , 那么sum就无法为0了，因为前面已经做了一次升序排列
    if (n1 > 0) {
      return res;
    }
    // 过滤重复的n1值
    if (i > 0 && n1 === nums[i - 1]) {
      continue;
    }
    // 开始双指针
    let [left, right] = [i + 1, len - 1];
    while (left < right) {
      const [n2, n3] = [nums[left], nums[right]];
      // sum
      const sum = n1 + n2 + n3;
      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        // 答案放入res内
        res.push([n1, n2, n3]);
        // todo 过滤掉重复的n2、n3值
        while (left < right && nums[left] == n2) left++; // 直到指向不一样的数
        while (left < right && nums[right] == n3) right--; // 直到指向不一样的数
      }
    }
  }
  return res;
};

const nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));
// console.log(nums.sort((a, b) => a - b));
