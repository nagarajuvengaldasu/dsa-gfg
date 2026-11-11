/*
 * ========== PROBLEM: Detect Cycle in a Directed Graph ==========
 *
 * Given a directed graph with V vertices and a list of directed edges,
 * determine if the graph contains any cycle.
 *
 * Input:  V     = number of vertices (0 to V-1)
 *         edges = array of [u, v] meaning directed edge from u to v
 *
 * Output: true if a cycle exists, false otherwise.
 *
 * Approach: DFS with recursion stack (recStack).
 * - visited[i] = true once we have finished exploring vertex i.
 * - recStack[i] = true while i is on the current DFS path (ancestor).
 * - If we reach a neighbor that is in recStack → back-edge → cycle.
 *   (Unlike undirected graphs, a visited node that is NOT in recStack
 *   is from a different DFS path and does NOT mean a cycle.)
 * - On backtrack, set recStack[node] = false.
 *
 * Time: O(V + E)  |  Space: O(V)
 */

class Solution {
  dfs(node, adj, visited, recStack) {
    visited[node] = true;   // Mark node as visited
    recStack[node] = true;  // Add node to current DFS path (recursion stack)

    for (let neighbor of adj[node]) {
      if (!visited[neighbor]) {
        if (this.dfs(neighbor, adj, visited, recStack)) {
          return true;  // Cycle found in subtree
        }
      }
      // Neighbor is visited and still in recStack → back-edge to ancestor → cycle
      else if (recStack[neighbor]) {
        return true;
      }
    }

    recStack[node] = false;  // Remove node from current path before backtracking
    return false;
  }

  isCyclic(V, edges) {
    // Build adjacency list from edges
    let adj = Array.from({ length: V }, () => []);
    for (let [u, v] of edges) {
      adj[u].push(v);  // directed edge u -> v
    }

    let visited = new Array(V).fill(false);
    let recStack = new Array(V).fill(false);

    // Run DFS from each unvisited vertex (handles disconnected graph)
    for (let i = 0; i < V; i++) {
      if (!visited[i]) {
        if (this.dfs(i, adj, visited, recStack)) {
          return true;  // Cycle found
        }
      }
    }
    return false;
  }
}

let V = 5;
let edges = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 1],   // cycle: 1 -> 2 -> 3 -> 4 -> 1
];
let sol = new Solution();
console.log(sol.isCyclic(V, edges));
