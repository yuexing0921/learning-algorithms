// https://leetcode-cn.com/problems/sort-of-stacks-lcci/
var SortedStack = function () {
  this.count = 0;
  this.stack = {};
};

/**
 * @param {number} val
 * @return  {void}
 */
SortedStack.prototype.push = function (val) {
  this.stack[this.count++] = val;

  let len = this.count;
  // 核心代码
  while (len > 0) {
    // peek
    const cur = this.stack[len - 1],
      peek = this.stack[len - 2];
    // 对队列进行升序排序
    if (peek && cur > peek) {
      this.stack[len - 2] = cur;
      this.stack[len - 1] = peek;
    }
    len--;
  }
};

/**
 * @return {void}
 */
SortedStack.prototype.pop = function () {
  if (this.isEmpty()) {
    return;
  }
  //   const item = this.peek();
  delete this.stack[--this.count];
  //   return item;
};

/**
 * @return {number}
 */
SortedStack.prototype.peek = function () {
  if (this.isEmpty()) {
    return -1;
  }
  return this.stack[this.count - 1];
};

/**
 * @return {boolean}
 */
SortedStack.prototype.isEmpty = function () {
  return this.count === 0;
};

/**
 * Your SortedStack object will be instantiated and called as such:
 * var obj = new SortedStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.isEmpty()
 */
var obj = new SortedStack();
// prettier-ignore
const arr1 = ["peek", "peek", "pop", "isEmpty", "peek", "push", "pop", "push", "peek", "push", "peek", "pop", "pop", "push", "isEmpty", "push", "peek", "isEmpty", "push", "peek", "peek", "isEmpty", "push", "isEmpty", "peek", "isEmpty", "pop", "peek", "pop", "push", "push", "isEmpty", "pop", "isEmpty", "peek", "push", "pop", "push", "push", "isEmpty", "pop", "pop", "push", "peek", "isEmpty", "pop", "peek", "push", "push", "peek", "isEmpty", "isEmpty", "isEmpty", "isEmpty", "isEmpty", "push", "push", "push", "push", "push", "peek", "peek", "isEmpty", "push"]
// prettier-ignore
const arr2 = [ [], [], [], [], [], [40], [], [19], [], [44], [], [], [], [42], [], [8], [], [], [29], [], [], [], [25], [], [], [], [], [], [], [52], [63], [], [], [], [], [47], [], [45], [52], [], [], [], [17], [], [], [], [], [6], [30], [], [], [], [], [], [], [51], [46], [2], [56], [39], [], [], [], [38]]
// prettier-ignore
const arr3 = [-1,-1,null,true,-1,null,null,null,19,null,19,null,null,null,false,null,8,false,null,8,8,false,null,false,8,false,null,25,null,null,null,false,null,false,42,null,null,null,null,false,null,null,null,17,false,null,52,null,null,6,false,false,false,false,false,null,null,null,null,null,2,2,false,null]
for (var i = 0; i < arr1.length; i++) {
  if (i === 30) {
    debugger;
  }
  const action = arr1[i];
  const param = arr2[i][0] || "";
  const result = obj[action](param);
  const expect = arr3[i] === null ? undefined : arr3[i];
  console.log(`${i} obj.${action}(${param}) => ${result} // ${expect}`);
  if (expect !== result) {
    console.error(`${i} obj.${action}(${param}) => ${result} // ${expect}`);
  }
}
