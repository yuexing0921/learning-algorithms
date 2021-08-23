// https://leetcode-cn.com/problems/monotone-increasing-digits/

/**
 * 个位数自己就可以满足
 * 超过个位数，就看是不是单调递增，如果是单调递增也是自身
 * 如果不是，则依次递减，直到算出符合要求的递增数
 * @param {number} n
 * @return {number}
 */
// 暴力解法，时间复杂度极其高，计算963856657时，需要12.9秒
// var monotoneIncreasingDigits = function (n) {
//   if (n < 10) {
//     return n;
//   }

//   const numToArr = (n) => n.toString().split("");

//   // 判断这个数字本身是否是递增数
//   const isIncrease = (arr) =>
//     arr.slice(1).every((cur, index) => cur - arr[index] >= 0);
//   let result;
//   for (let i = n; i >= 9; i--) {
//     if (isIncrease(numToArr(i))) {
//       result = i;
//       break;
//     }
//   }
//   console.log(result);
//   return result;
// };

monotoneIncreasingDigits(10);
monotoneIncreasingDigits(1234);
monotoneIncreasingDigits(332);
monotoneIncreasingDigits(1231);
console.time("963856657:");
monotoneIncreasingDigits(963856657);
console.timeEnd("963856657:");
