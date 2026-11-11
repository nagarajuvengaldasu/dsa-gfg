/*
 * ========== PROBLEM: X Total Shapes ==========
 *
 * Given a grid of characters where each cell is either 'X' or 'O',
 * count the number of distinct "shapes" formed by 'X'. A shape is a
 * connected component of 'X' using 4-direction connectivity (up, down,
 * left, right — no diagonals).
 *
 * Input:  grid = 2D array; grid[i][j] is 'X' or 'O'
 *
 * Output: Number of connected components of 'X'.
 *
 * Approach: Scan the grid. When we find an unvisited 'X', increment
 * count (new shape) and run DFS to mark all connected 'X' as visited
 * (by overwriting with 'O' or similar). Repeat until every cell is
 * processed.
 *
 * Time: O(n * m)  |  Space: O(n * m) for recursion stack in worst case
 */

class Solution {
  xTotalShapes(grid) {
    // let take the length of the grid
    let n = grid.length;
    // let take the breadth of the grid
    let m = grid[0].length;
    // let take the count
    let count = 0;

    // 4 directions: up, down, left, right (no diagonals)
    // let take the directions
        let directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];

    const dfs = (row, col) => {
      grid[row][col] = "O"; // Mark as visited so we don't count again

      for (let [dr, dc] of directions) {
        // let take the new row
        let newRow = row + dr;
        // let take the new column
        let newCol = col + dc;
        if (
          // let take the condition for the new row
          newRow >= 0 &&
          // let take the condition for the new row
          newRow < n &&
          // let take the condition for the new column
          newCol >= 0 &&
          // let take the condition for the new column
          newCol < m &&
          // let take the condition for the new row and column
          grid[newRow][newCol] === "X"
        ) {
          // let take the dfs for the new row and column
          dfs(newRow, newCol); // Recurse into connected "X"
        }
      }
    };

    // let take the loop for the length of the grid
    for (let i = 0; i < n; i++) {
      // let take the loop for the breadth of the grid
      for (let j = 0; j < m; j++) {
        // let take the condition for the grid
        if (grid[i][j] === "X") {
          // let take the count
          count++;     // New shape found
          // let take the dfs for the row and column
          dfs(i, j);   // Mark entire connected component as visited
        }
      }
    }
    // let take the count
    return count;
  }
}

let grid = [
  ["X", "O", "X"],
  ["O", "X", "O"],
  ["X", "O", "X"],
];
let sol = new Solution();
console.log(sol.xTotalShapes(grid)); // 5 (each X is isolated with 4-connectivity)
