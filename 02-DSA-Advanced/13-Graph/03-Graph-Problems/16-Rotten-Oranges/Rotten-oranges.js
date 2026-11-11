/*
 * ========== PROBLEM: Rotten Oranges ==========
 *
 * Given a grid where each cell is:
 *   0 = empty
 *   1 = fresh orange
 *   2 = rotten orange
 *
 * Every minute, any fresh orange that is 4-directionally adjacent to a
 * rotten orange becomes rotten. Find the minimum time (in minutes) until
 * all fresh oranges are rotten. If it is impossible, return -1.
 *
 * Input:  grid = 2D array with values 0, 1, 2
 *
 * Output: Minimum minutes to rot all fresh oranges, or -1 if some fresh
 *         can never be reached by any rotten orange.
 *
 * Approach: Multi-source BFS. Enqueue all rotten cells (time 0). Each
 * "round" of the queue = one minute: process all cells currently in the
 * queue, rot their fresh neighbors (4 directions), enqueue newly rotten
 * cells. Count rounds; when no fresh remain, return that count. If fresh
 * > 0 when queue is empty, return -1.
 *
 * Time: O(n * m)  |  Space: O(n * m)
 */

class Solution {
  rottenOranges(grid) {
    // let take the length and breadth of the grid
    let n = grid.length;
    // let take the breadth of the grid
    let m = grid[0].length;

    // let take the queue
    let queue = [];
    // let take the count of fresh oranges
    let fresh = 0; // Count of fresh oranges (we need to rot all)
    // let take the time
    let time = 0; // Number of minutes (BFS rounds) elapsed

    // let take the directions
    let directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];

    // Enqueue all initially rotten cells; count fresh oranges
    // let take the loop for the length of the grid
    for (let i = 0; i < n; i++) {
      // let take the loop for the breadth of the grid
      for (let j = 0; j < m; j++) {
        // let take the condition for the rotten oranges
        if (grid[i][j] === 2) {
          // let take the queue for the rotten oranges
          queue.push([i, j]);
        }
        // let take the condition for the fresh oranges
        if (grid[i][j] === 1) {
          // let take the count of fresh oranges
          fresh++;
        }
      }
    }

    // Each iteration = one minute: process all oranges that are currently rotten
    while (queue.length > 0 && fresh > 0) {
      // let take the size of the queue
      let size = queue.length; // Process exactly this many (current "level")
      // let take the loop for the size of the queue
      for (let i = 0; i < size; i++) {
        let [row, col] = queue.shift();
        // let take the loop for the directions
        for (let [dr, dc] of directions) {
          // let take the new row and column
          let newRow = row + dr;
          // let take the new column
          let newCol = col + dc;
          if (
            // let take the condition for the new row and column
            newRow >= 0 &&
            // let take the condition for the new row and column
            newRow < n &&
            newCol >= 0 &&
            // let take the condition for the new row and column
            newCol < m &&
            // let take the condition for the new row and column
            grid[newRow][newCol] === 1
          ) {
            // let take the grid for the new row and column
            grid[newRow][newCol] = 2; // Rot the fresh orange
            // let take the queue for the new row and column
            queue.push([newRow, newCol]);
            // let take the count of fresh oranges
            fresh--;
          }
        }
      }
      // let take the time
      time++; // One minute (one BFS level) done
    }
    // let take the condition for the fresh oranges
    return fresh === 0 ? time : -1; // -1 if some fresh oranges never got rotten
  }
}

let grid = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
];
let sol = new Solution();
console.log(sol.rottenOranges(grid)); // 4
