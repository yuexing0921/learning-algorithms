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
