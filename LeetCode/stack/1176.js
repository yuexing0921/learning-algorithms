// https://leetcode-cn.com/problems/car-fleet-ii/

/**
 * @param {number[][]} cars
 * @return {number[]}
 */
var getCollisionTimes = function (cars) {
  if (cars.length === 1) {
    return [(-1).toFixed(5)];
  }
  let cur = cars[0];
  const stack = [];
  for (let i = 1; i < cars.length; i++) {
    const next = cars[i];
    const s = cur[1] - next[1],
      p = next[0] - cur[0];
    cur = next;
    // 汽车相遇
    if (s === 0) {
      stack.push(p.toFixed(5));
    } else if (s < 0) {
      // 汽车不相遇
      stack.push((-1).toFixed(5));
    } else {
      // 汽车相遇
      stack.push((p / s).toFixed(5));
    }
  }
  stack.push((-1).toFixed(5));
  console.log(stack);
  return stack;
};
getCollisionTimes([
  [3, 1],
  [9, 4],
  [19, 4],
]);
getCollisionTimes([
  [1, 2],
  [2, 1],
  [4, 3],
  [7, 2],
]);
getCollisionTimes([
  [3, 4],
  [5, 4],
  [6, 3],
  [9, 1],
]);
