/*
 * ========== PROBLEM: Find Whether Path Exists ==========
 *
 * Given an N×N grid where:
 *   1 = source (starting cell)
 *   2 = destination (target cell)
 *   0 = blocked cell (cannot walk through)
 *   other = empty/walkable cell
 *
 * Determine whether there exists a path from source (1) to destination (2).
 * You may only move up, down, left, or right (4 directions) and cannot
 * step on blocked cells (0).
 *
 * Input:  grid = 2D array with values 0, 1, 2
 *
 * Output: 1 if a path exists, 0 otherwise.
 *
 * Approach: BFS from the source cell. Enqueue start, then repeatedly
 * dequeue a cell; if it is 2, return 1; else enqueue unvisited
 * neighbors that are not blocked (not 0). If queue empties without
 * reaching 2, return 0.
 *
 * Time: O(N²)  |  Space: O(N²)
 */

class Solution {
  is_possible(grid) {
    // let take the length of the grid
    let n = grid.length;
    // let take the visited

    // visited[row][col] = true once we have enqueued that cell
    let visited = Array.from({ length: n }, () => Array(n).fill(false));
    // let take the start row
    let startRow = -1;
    // let take the start column
    let startCol = -1;

    // let take the loop for the length of the grid
    for (let i = 0; i < n; i++) {
      // let take the loop for the breadth of the grid
      for (let j = 0; j < n; j++) {
        // let take the condition for the grid
        if (grid[i][j] === 1) {
          // let take the start row
          startRow = i;
          // let take the start column
          startCol = j;
        }
      }
    }

    // 4 directions: up, down, left, right (no diagonals)
    // let take the directions
    let directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];

    // let take the queue
    let queue = [];
    // let take the queue for the start row and column
    queue.push([startRow, startCol]); // Enqueue source
    visited[startRow][startCol] = true; // Mark source as visited

    // let take the loop for the queue
    while (queue.length > 0) {
      // let take the row and column
      let [row, col] = queue.shift(); // Dequeue front cell

      // let take the condition for the grid
      if (grid[row][col] === 2) {
        // let take the return
        return 1; // Reached destination
      }

      // Try each direction: enqueue valid unvisited, non-blocked neighbors
      for (let [dr, cr] of directions) {
        // let take the new row
        let newRow = row + dr;
        // let take the new column
        let newCol = col + cr;
        if (
          // let take the condition for the new row
          newRow >= 0 &&
          // let take the condition for the new row
          newRow < n &&
          // let take the condition for the new column
          newCol >= 0 &&
          // let take the condition for the new column
          // let take the condition for the new column
          newCol < n &&
          // let take the condition for the new row and column
          !visited[newRow][newCol] &&
          // let take the condition for the new row and column
          grid[newRow][newCol] !== 0 // Can't step on blocked (0)
        ) {
          // let take the visited for the new row and column
          visited[newRow][newCol] = true;
          // let take the queue for the new row and column
          queue.push([newRow, newCol]);
        }
      }
    }
    // let take the return
    return 0; // No path to destination
  }
}

let grid = [
  [1, 0, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1],
  [0, 0, 0, 0, 2],
];
let sol = new Solution();
console.log(sol.is_possible(grid));
