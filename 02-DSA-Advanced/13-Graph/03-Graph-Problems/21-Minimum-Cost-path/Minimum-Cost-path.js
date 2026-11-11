/*
 * ========== PROBLEM: Minimum Cost Path ==========
 *
 * Given an n×n grid where each cell grid[i][j] has a cost (non-negative),
 * find the minimum cost to go from top-left (0, 0) to bottom-right (n-1, n-1).
 * You may move only up, down, left, or right (4 directions). The cost of a
 * path is the sum of the costs of all cells visited on the path (including
 * start and end).
 *
 * Input:  grid = 2D array of cell costs
 *         n    = number of rows/columns (grid is n×n)
 *
 * Output: Minimum total cost of any path from (0,0) to (n-1, n-1), or -1
 *         if no path exists (always exists for a connected grid).
 *
 * Approach: Dijkstra on the grid. Each cell is a vertex; moving to a
 * neighbor has "edge" cost = that neighbor's cell value. Use a min-heap
 * of [cost, row, col]. Start from (0,0) with cost grid[0][0]. Pop the
 * cell with smallest cost; if it is (n-1, n-1), return cost. Otherwise
 * relax each 4-direction neighbor: if newCost < dist[nr][nc], update and
 * push. First time we pop (n-1, n-1) we have the minimum cost.
 *
 * Time: O(n² log(n²))  |  Space: O(n²)
 */

class Solution {
  minimumCostPath(grid, n) {
    // 4 directions: down, up, right, left (row delta, col delta)
    let directions = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];

    // dist[r][c] = minimum cost to reach (r, c) from (0, 0) found so far
    let dist = Array.from({ length: n }, () => new Array(n).fill(Infinity));

    dist[0][0] = grid[0][0]; // Cost to reach start cell is its own value

    // Min-heap of [cost, row, col]; ordered by cost (smallest at top)
    let heap = [];

    const push = (val) => {
      // let take the push for the heap
      heap.push(val);
      let i = heap.length - 1;

      while (i > 0) {
        let p = Math.floor((i - 1) / 2); // Parent index
        if (heap[p][0] <= heap[i][0]) break; // Parent has smaller or equal cost; stop
        [heap[p], heap[i]] = [heap[i], heap[p]];
        i = p;
      }
    };

    const pop = () => {
      // let take the pop for the heap
      if (heap.length === 1) return heap.pop();

      let top = heap[0];
      heap[0] = heap.pop();

      let i = 0;
      while (true) {
        // let take the left and right for the heap
        // let take the left for the heap
        let left = 2 * i + 1;
        // let take the right for the heap
        let right = 2 * i + 2;
        // let take the smallest for the heap
        let smallest = i;
        // let take the smallest for the heap

        // let take the left for the heap
        if (left < heap.length && heap[left][0] < heap[smallest][0]) {
          smallest = left;
        }

        // let take the right for the heap
        if (right < heap.length && heap[right][0] < heap[smallest][0]) {
          smallest = right;
        }

        // let take the smallest for the heap
        if (smallest === i) break;

        // let take the swap for the heap
        [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
        i = smallest;
      }

      return top;
    };

    push([grid[0][0], 0, 0]); // Start from (0,0) with cost = grid[0][0]

    while (heap.length > 0) {
      let [cost, r, c] = pop();

      if (r === n - 1 && c === n - 1) {
        return cost; // Reached destination; this is the minimum cost (Dijkstra guarantees it)
      }

      for (let [dr, dc] of directions) {
        // let take the nr for the heap
        let nr = r + dr;
        // let take the nc for the heap
        let nc = c + dc;

        if (nr >= 0 && nr < n && nc >= 0 && nc < n) {
          // let take the newCost for the heap
          let newCost = cost + grid[nr][nc]; // Cost to reach (nr, nc) via (r, c)

          if (newCost < dist[nr][nc]) {
            // let take the dist for the heap
            dist[nr][nc] = newCost;
            // let take the push for the heap
            push([newCost, nr, nc]);
          }
        }
      }
    }

    // let take the return for the heap
    return -1;
  }
}

let sol = new Solution();
let grid = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];
let n = 3;
console.log(sol.minimumCostPath(grid, n)); // 7 (e.g. 1+1+2+1 or 1+1+4+1)
