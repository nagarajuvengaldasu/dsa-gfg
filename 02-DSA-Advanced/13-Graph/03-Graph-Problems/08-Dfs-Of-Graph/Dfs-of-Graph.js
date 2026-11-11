/*
 * ========== PROBLEM: DFS of Graph ==========
 *
 * Given a connected undirected graph represented as an adjacency list,
 * perform Depth-First Search (DFS) starting from vertex 0 and return
 * the vertices in the order they are visited.
 *
 * Input:  adj = adjacency list; adj[i] = array of neighbors of vertex i
 *
 * Output: Array of vertices in DFS order (visit a node, then recursively
 *         visit its unvisited neighbors before backtracking).
 *
 * Approach: Recursive DFS. Start from vertex 0. For each vertex: mark
 * visited, add to result, then recurse into each unvisited neighbor.
 *
 * Time: O(V + E)  |  Space: O(V) (for visited + recursion stack)
 */

class Solution {
  dfs(adj) {
    let v = adj.length;

    // visited[i] = true once we have entered (and processed) vertex i
    let visited = new Array(v).fill(false);
    let result = []; // DFS traversal order

    // Start DFS from vertex 0
    this.dfsHelper(0, adj, visited, result);
    return result;
  }

  dfsHelper(node, adj, visited, result) {
    visited[node] = true; // Mark current node as visited
    result.push(node);    // Add to DFS result (visit current node first)

    // Recurse into each unvisited neighbor (go deep before backtracking)
    for (let neighbor of adj[node]) {
      if (!visited[neighbor]) {
        this.dfsHelper(neighbor, adj, visited, result);
      }
    }
    return result; // Pass result back (it's mutated in place)
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
console.log(sol.dfs(adj)); // e.g. [0, 1, 3, 4, 2] (order depends on adj list order)
