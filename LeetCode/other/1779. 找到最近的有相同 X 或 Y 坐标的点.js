/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function (x, y, points) {
  let min = -1,
    idx = -1;
  for (let i = 0; i < points.length; i++) {
    const [x2, y2] = points[i];
    if (x === x2 || y === y2) {
      const distance = Math.abs(x - x2) + Math.abs(y - y2);
      if (min === -1 || distance < min) {
        min = distance;
        idx = i;
      }
    }
  }
  return idx;
};
