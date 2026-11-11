/*
 * ========== PROBLEM: Distance of Nearest Cell Having 1 ==========
 *
 * Given a binary grid (each cell is 0 or 1), for every cell find the
 * distance to the nearest cell that contains 1. Distance = number of
 * steps (up, down, left, right only — 4 directions).
 *
 * Cells that are already 1 have distance 0. Cells that are 0 get the
 * minimum distance to any cell with value 1.
 *
 * Input:  grid = 2D array of 0s and 1s
 *
 * Output: 2D array of same size; result[i][j] = distance from (i,j)
 *         to the nearest 1.
 *
 * Approach: Multi-source BFS. Enqueue all cells with value 1 (distance 0).
 * Then BFS: dequeue (row, col), and for each unvisited neighbor set
 * result[neighbor] = result[row][col] + 1 and enqueue. Using -1 as
 * "unvisited" so we know when to update.
 *
 * Time: O(n * m)  |  Space: O(n * m)
 */

class Solution {
  nearestCell(grid) {
    // let take the length of the grid  
    let n = grid.length;
    // let take the breadth of the grid
    let m = grid[0].length;
    // let take the queue
    let queue = [];

    // result[i][j] = distance to nearest 1; -1 means not yet visited
    let result = Array.from({ length: n }, () => Array(m).fill(-1));

    // let take the directions
    let directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];

    // Enqueue all cells that contain 1; their distance is 0
    // let take the loop for the length of the grid
    for (let i = 0; i < n; i++) {
      // let take the loop for the breadth of the grid
      for (let j = 0; j < m; j++) {
        // let take the condition for the grid
        if (grid[i][j] === 1) {
          // let take the queue for the grid
          queue.push([i, j]);
          // let take the result for the grid
          result[i][j] = 0;
        }
      }
    }

    // BFS: from each cell, spread distance to neighbors (unvisited = -1)
    while (queue.length > 0) {
      // let take the row and column
      let [row, col] = queue.shift();

      for (let [dr, dc] of directions) {
        // let take the new row
        let newRow = row + dr;
        // let take the new column
        let newCol = col + dc;
        // let take the condition for the new row and column
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
          result[newRow][newCol] === -1
        ) {
          // let take the result for the new row and column
          result[newRow][newCol] = result[row][col] + 1; // One step farther
          // let take the queue for the new row and column
          queue.push([newRow, newCol]);
        }
      }
    }
    // let take the result
    return result;
  }
}

let grid = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
];
let sol = new Solution();
console.log(sol.nearestCell(grid));
