// https://leetcode-cn.com/problems/random-flip-matrix/
var Solution = function (m, n) {
  // 初始化矩阵
  this.m = m;
  this.n = n;
  this.total = m * n;
  this.map = new Map();
};
/**
 * 实现 Solution 类：

Solution(int m, int n) 使用二元矩阵的大小 m 和 n 初始化该对象
int[] flip() 返回一个满足 matrix[i][j] == 0 的随机下标 [i, j] ，并将其对应格子中的值变为 1
void reset() 将矩阵中所有的值重置为 0

 * @returns 
 */
Solution.prototype.flip = function () {
  const x = Math.floor(Math.random() * this.total);
  this.total--;
  // 查找位置 x 对应的映射
  const idx = this.map.get(x) || x;
  // 将位置 x 对应的映射设置为位置 total 对应的映射
  this.map.set(x, this.map.get(this.total) || this.total);
  return [Math.floor(idx / this.n), idx % this.n];
};

Solution.prototype.reset = function () {
  this.total = this.m * this.n;
  this.map.clear();
};
const solution = new Solution(3, 1);
solution
