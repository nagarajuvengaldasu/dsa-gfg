/*
 * ========== PROBLEM: Unit Area of Largest Region of 1's ==========
 *
 * Given a grid of 0s and 1s, find the size (number of cells) of the
 * largest region of 1s. A region is a connected component of 1s using
 * 8-direction connectivity (horizontal, vertical, and diagonal).
 *
 * Input:  grid = 2D array of 0s and 1s
 *
 * Output: Size of the largest region (max count of connected 1s).
 *
 * Approach: For each unvisited 1, run DFS to count all connected 1s
 * (8 directions). Mark visited cells by setting to 0. Track the
 * maximum area over all regions.
 *
 * Time: O(n * m)  |  Space: O(n * m) for recursion stack
 */

class Solution {
  findmaxarea(grid) {
    // let take the length of the grid
    let n = grid.length;
    // let take the breadth of the grid
    let m = grid[0].length;
    // let take the maximum area
    let maxArea = 0;

    // 8 directions: up, down, left, right, and 4 diagonals
    let directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
      [-1, -1],
      [-1, 1],
      [1, -1],
      [1, 1],
    ];

    const dfs = (row, col) => {
      grid[row][col] = 0; // Mark as visited so we don't count again
      let area = 1; // Count this cell

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
          grid[newRow][newCol] === 1
        ) {
          // let take the area
          area += dfs(newRow, newCol); // Add size of connected region
        }
      }
      return area;
    };

    // let take the loop for the length of the grid
    for (let i = 0; i < n; i++) {
      // let take the loop for the breadth of the grid
      for (let j = 0; j < m; j++) {
        // let take the condition for the grid
        if (grid[i][j] === 1) {
          // let take the maximum area
          maxArea = Math.max(maxArea, dfs(i, j)); // Update max if this region is larger
        }
      }
    }
    // let take the maximum area
    return maxArea;
  }
}

let grid = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 1],
  [0, 0, 0, 1, 1],
];
let sol = new Solution();
console.log(sol.findmaxarea(grid)); // 4 (two regions of size 4 each)
