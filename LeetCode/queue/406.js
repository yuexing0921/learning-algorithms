// https://leetcode-cn.com/problems/queue-reconstruction-by-height/

/**
 * 
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  let queue = [];
  people.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]));

  for (let i = 0; i < people.length; i++) {
    queue.splice(people[i][1], 0, people[i]);
  }
  console.log(queue);
  return queue;
};

reconstructQueue([
  [7, 0],
  [4, 4],
  [7, 1],
  [5, 0],
  [6, 1],
  [5, 2],
]);
