// https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/

// /**
//  * 350. 两个数组的交集 II
//  * 普通map
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number[]}
//  */
// var intersect = function (nums1, nums2) {
//   if (nums1.length < nums2.length) {
//     [nums2, nums1] = [nums1, nums2];
//   }
//   const res = [],
//     map = {};
//   nums1.forEach((val) => {
//     if (map[val]) {
//       map[val]++;
//     } else {
//       map[val] = 1;
//     }
//   });
//   nums2.forEach((val) => {
//     if (map[val] > 0) {
//       res.push(val);
//       map[val]--;
//     }
//   });
//   return res;
// };

/**
 * 350. 两个数组的交集 II
 * 双指针移动
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  // 从小到排列
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  let p1 = 0,
    p2 = 0;
  const res = [];
  while (p1 < nums1.length && p2 < nums2.length) {
    if (nums1[p1] < nums2[p2]) {
      // 如果p1 < p2
      p1++;
    } else if (nums1[p1] > nums2[p2]) {
      // 如果p1 > p2
      p2++;
    } else {
      res.push(nums1[p1]);
      p2++;
      p1++;
    }
  }
  return res;
};
