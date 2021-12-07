// https://leetcode-cn.com/problems/coloring-a-border/
/**
 * https://leetcode-cn.com/problems/coloring-a-border/solution/pythonjavajavascriptgo-dfs-ji-lu-zou-guo-l7e5/
 * @param {number[][]} grid
 * @param {number} row
 * @param {number} col
 * @param {number} color
 * @return {number[][]}
 */
const DIRS = [
  [-1, 0],
  [0, 1],
  [0, -1],
  [1, 0],
];
var colorBorder = function (grid, row, col, color) {
  const m = grid.length,
    n = grid[0].length,
    b = grid[row][col];
  dfs = function (r, c) {
    if (r < 0 || c < 0 || r == m || c == n) return true;
    if (grid[r][c] == 0 || grid[r][c] == -1) return false;
    if (grid[r][c] != b) return true;
    grid[r][c] = 0;
    let cur = false;
    for (const dir of DIRS) if (dfs(r + dir[0], c + dir[1])) cur = true;
    if (cur) grid[r][c] = -1;
    return false;
  };

  dfs(row, col);
  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++)
      if (grid[i][j] == 0) grid[i][j] = b;
      else if (grid[i][j] == -1) grid[i][j] = color;
  return grid;
};
