// https://leetcode-cn.com/problems/monotonic-array/

/**
 * 判断一个数组是否是单调栈
 * 首先至少三个元素
 * 其次，前两个元素的栈确定了后续栈的单调性
 * 最后，从第三个栈依次开始依次判断
 *
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  if (nums.length < 3) {
    return true;
  }
  let r = nums[1] - nums[0],
    result = true;
  let cur = nums[1];
  for (let i = 2; i < nums.length; i++) {
    const cr = nums[i] - cur;
    // 前面是递减，现在是递增，说明是不是单调栈
    if (cr > 0 && r < 0) {
      result = false;
      break;
    }
    // 前面是递增，现在是递减，说明是不是单调栈
    if (cr < 0 && r > 0) {
      result = false;
      break;
    }

    // 如果前面是0，但是现在确定了单调性，则把单调性确定下
    if (r == 0 && cr != 0) {
      r = cr;
    }

    cur = nums[i];
  }

  //   if (r === 0) {
  //     console.log(result, "平衡");
  //   } else {
  //     console.log(result, r > 0 ? "递增" : "递减");
  //   }

  return result;
};
isMonotonic([11, 11, 9, 4, 3, 3, 3, 1, -1, -1, 3, 3, 3, 5, 5, 5]);
isMonotonic([1, 2, 2, 3]);
isMonotonic([6, 5, 4, 4]);
isMonotonic([1, 3, 2]);
isMonotonic([1, 2, 4, 5]);
isMonotonic([1, 1, 1]);
