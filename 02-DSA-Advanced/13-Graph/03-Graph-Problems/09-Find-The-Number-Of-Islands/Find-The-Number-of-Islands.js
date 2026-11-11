class Solution {
  numberOfIslands(grid) {
    let n = grid.length;   // Number of rows
    let m = grid[0].length; // Number of columns
    let count = 0;          // Number of islands (connected components of "L")

    // 8 directions: up, down, left, right, and 4 diagonals (8-connectivity)
    let directions = [
      [-1, 0],  // up
      [1, 0],   // down
      [0, -1],  // left
      [0, 1],   // right
      [-1, -1], // top-left
      [-1, 1],  // top-right
      [1, -1],  // bottom-left
      [1, 1],   // bottom-right
    ];

    const dfs = (row, col) => {
      grid[row][col] = "W"; // Mark current cell as visited (treat as water so we don't revisit)

      for (let [dr, cr] of directions) {
        let newRow = row + dr; // Row of neighbor
        let newCol = col + cr; // Col of neighbor
        // If neighbor is in bounds and is land ("L"), recurse to visit it
        if (
          newRow >= 0 &&
          newRow < n &&
          newCol >= 0 &&
          newCol < m &&
          grid[newRow][newCol] === "L"
        ) {
          dfs(newRow, newCol);
        }
      }
    };

    // Scan every cell; when we find unvisited land "L", it's the start of a new island
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (grid[i][j] === "L") {
          count++;       // Found a new island
          dfs(i, j);     // DFS marks all connected "L" as "W" (one island)
        }
      }
    }
    return count;
  }
}

let grid = [
  ["L", "L", "L", "L", "L"],
  ["L", "L", "L", "L", "L"],
  ["L", "L", "L", "L", "L"],
  ["L", "L", "L", "L", "L"],
  ["L", "L", "L", "L", "L"],
];
let sol = new Solution();
console.log(sol.numberOfIslands(grid));
