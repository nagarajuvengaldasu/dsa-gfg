/*
 * ========== PROBLEM: Minimum Steps for Knight to Reach Target ==========
 *
 * Given an N×N chessboard, a knight at position knightpos and a target
 * at position targetpos, find the minimum number of knight moves needed
 * to reach the target. Positions are given as 1-indexed [row, col].
 *
 * Knight moves in L-shape: 2 squares in one direction and 1 in the other
 * (8 possible moves: (±2,±1) and (±1,±2)).
 *
 * Input:  knightpos = [row, col] (1-indexed) — knight's position
 *         targetpos = [row, col] (1-indexed) — target position
 *         N         = size of board (N×N)
 *
 * Output: Minimum number of moves, or -1 if target is unreachable.
 *
 * Approach: BFS from knight position. Queue stores [row, col, steps].
 * For each cell, try all 8 knight moves; if we reach target, return
 * steps + 1. BFS gives shortest path in unweighted move graph.
 *
 * Time: O(N²)  |  Space: O(N²)
 */

class Solution {
  minstepsToReachTarget(knightpos, targetpos, N) {
    // Convert 1-indexed to 0-indexed for array access
    // let take the start row
    let startRow = knightpos[0] - 1;
    // let take the start column
    let startCol = knightpos[1] - 1;
    // let take the target row
    let targetRow = targetpos[0] - 1;
    // let take the target column
    let targetCol = targetpos[1] - 1;
    // let take the condition for the start row and column if it is already at the target
    if (startRow === targetRow && startCol === targetCol) {
      return 0; // Already at target
    }

    // let take the directions for the knight moves: (±2,±1) and (±1,±2)
    let directions = [
      [-2, -1],
      [-2, 1],
      [-1, -2],
      [-1, 2],
      [1, -2],
      [1, 2],
      [2, -1],
      [2, 1],
    ];

    // let take the visited array
    let visited = Array.from({ length: N }, () => Array(N).fill(false));
    // let take the queue
    let queue = [];
    // let take the queue for the start row and column
    queue.push([startRow, startCol, 0]); // [row, col, steps so far]
    // let take the visited for the start row and column
    visited[startRow][startCol] = true;

    // let take the loop for the queue
    while (queue.length > 0) {
      // let take the row and column
      let [row, col, steps] = queue.shift();

      // let take the loop for the directions
      for (let [dr, dc] of directions) {
        // let take the new row
        let newRow = row + dr;
        // let take the new column
        let newCol = col + dc;
        // let take the condition for the new row and column
        if (
          newRow >= 0 &&
          newRow < N &&
          newCol >= 0 &&
          newCol < N &&
          !visited[newRow][newCol]
        ) {
          // let take the condition for the new row and column if it is the target
          if (newRow === targetRow && newCol === targetCol) {
            return steps + 1; // One more move reaches target
          }
          // let take the visited for the new row and column
          visited[newRow][newCol] = true;
          // let take the queue for the new row and column
          queue.push([newRow, newCol, steps + 1]);
        }
      }
    }
    // let take the return for the target unreachable
    return -1; // Target unreachable
  }
}

// let take the knight position
let knightpos = [4, 5];
// let take the target position
let targetpos = [1, 1];
// let take the size of the board
let N = 5;
// let take the solution
let sol = new Solution();
// let take the console log for the minimum steps to reach the target
console.log(sol.minstepsToReachTarget(knightpos, targetpos, N));
