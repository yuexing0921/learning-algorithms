// 二分查找

/**
 * 二分查找*普通循环
 * @param {*} key 
 * @param {*} arr 
 */
export function search(key, arr) {
    // 初始化查找范围坐标
    let leftIndex = 0, rightIndex = arr.length - 1;

    // 切分范围不能重叠, 一旦左边的起始值大于右边，说明检测过了
    while (leftIndex <= rightIndex) {

        // 代码核心
        // 1. 要向下取整，假如数组只有一个元素，如向上取整，就是1，那就数组下标越界了
        // 2. 一定要加上起始值，因为往右查找时，算出他们的中间值之后，还需要加上起始值才是最终的mid
        const mid = Math.floor((rightIndex - leftIndex) / 2) + leftIndex

        if (key < arr[mid]) {
            // key小于mid值， 需要继续向左查找，右坐标往左移位mid - 1
            rightIndex = mid - 1
            // console.log("右", rightIndex)
        } else if (key > arr[mid]) {
            // key大于mid值, 需要继续向右查找，左坐标往右移位mid + 1
            leftIndex = mid + 1
            // console.log("左", rightIndex)
        } else {
            // 两者相等，查找终止，直接返回
            return mid
        }
    }
    // 如果都没有找到，直接返回 -1
    return -1
}

/**
 * 二分查找*递归查找
 * @param {*} key 
 * @param {*} arr 
 */
export function recursionSearch(key, arr) {
    return recursionBinarySearch(key, arr, 0, arr.length - 1)
}

function recursionBinarySearch(key, arr, leftIndex, rightIndex) {
    if (leftIndex <= rightIndex) {
        const mid = Math.floor((rightIndex - leftIndex) / 2) + leftIndex
        if (key < arr[mid]) {
            rightIndex = mid - 1
            // console.log("左", mid, rightIndex)
            return recursionBinarySearch(key, arr, leftIndex, rightIndex)
        } else if (key > arr[mid]) {
            leftIndex = mid + 1
            // console.log("右", mid, rightIndex)
            return recursionBinarySearch(key, arr, leftIndex, rightIndex)
        } else {
            // 找到目标
            return mid
        }
    } else {
        // 左坐标超过右坐标
        return -1
    }
}
// console.log(recursionSearch(11, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]))