/*
 * ========== PROBLEM: BFS of Graph ==========
 *
 * Given a connected undirected graph represented as an adjacency list,
 * perform Breadth-First Search (BFS) starting from vertex 0 and return
 * the vertices in the order they are visited.
 *
 * Input:  adj = adjacency list; adj[i] = array of neighbors of vertex i
 *
 * Output: Array of vertices in BFS order (level-by-level from vertex 0).
 *
 * Approach: Use a queue. Start with vertex 0. Dequeue a vertex, add to
 * result, and enqueue all unvisited neighbors. Repeat until queue is empty.
 * This visits vertices in increasing order of distance from vertex 0.
 *
 * Time: O(V + E)  |  Space: O(V)
 */

class Solution {
  bfs(adj) {
    let V = adj.length;

    // visited[i] = true once we have enqueued (or processed) vertex i
    let visited = new Array(V).fill(false);
    let result = []; // BFS traversal order
    let queue = [];  // Queue of vertices to process

    visited[0] = true; // Mark source vertex 0 as visited
    queue.push(0);    // Start BFS from vertex 0

    while (queue.length > 0) {
      let node = queue.shift(); // Dequeue front vertex
      result.push(node);        // Add to BFS result

      // Enqueue all unvisited neighbors of current vertex
      for (let neighbor of adj[node]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true; // Mark as visited before enqueue (avoid duplicates)
          queue.push(neighbor);     // Enqueue for later processing
        }
      }
    }
    return result;
  }
}

let adj = [
  [1, 2],   // 0: neighbors 1, 2
  [0, 3],   // 1: neighbors 0, 3
  [0, 4],   // 2: neighbors 0, 4
  [1, 4],   // 3: neighbors 1, 4
  [2, 3],   // 4: neighbors 2, 3
];
let sol = new Solution();
console.log(sol.bfs(adj)); // e.g. [0, 1, 2, 3, 4] (order may vary within same level)
