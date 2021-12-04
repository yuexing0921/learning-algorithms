// 异或操作
/**
 * 1: n^n = 0 ; 0^n = n
 * 2: 满足结合律&交换律
 *  交换律: a^b = b^a
 *  结合律: a^b^c = a^(b^c)
 * 3: 在内存中必须是两个不同的地址才会交换
 */
/**
 * 交换数组中的两个数字
 * @param {*} a
 * @param {*} b
 */
export function xor(arr, a, b) {
  arr[a] = arr[a] ^ arr[b];
  arr[b] = arr[a] ^ arr[b];
  arr[a] = arr[a] ^ arr[b];
  return arr;
}

/**
 * 提取数字最右侧的1
 * @param {*} num
 */
export function rightmost(num) {
  console.log(num + "二进制: ", num.toString(2));
  const result = num & (~num + 1);
  console.log(result, result.toString(2));
  return result;
}
rightmost(99);
rightmost(1);
rightmost(2);
rightmost(3);
rightmost(4);
rightmost(10);
