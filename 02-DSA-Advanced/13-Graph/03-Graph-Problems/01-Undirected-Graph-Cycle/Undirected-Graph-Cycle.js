/*
 * ========== PROBLEM: Detect Cycle in an Undirected Graph ==========
 *
 * Given an undirected graph with V vertices and a list of edges,
 * determine if the graph contains any cycle.
 *
 * Input:  v     = number of vertices (0 to v-1)
 *         edges = array of [u, v] meaning an edge between u and v
 *
 * Output: true if a cycle exists, false otherwise.
 *
 * Approach: DFS. For each unvisited node, run DFS. If we ever reach
 * a node that is already visited and it is NOT the immediate parent,
 * we have found a back-edge → cycle exists.
 *
 * Time: O(V + E)  |  Space: O(V)
 */

class Solution {
  isCycle(v, edges) {
    // Build adjacency list: adj[i] = list of neighbors of vertex i
    let adj = Array.from({ length: v }, () => []);
    for (let [u, v] of edges) {
      adj[u].push(v); // u has neighbor v
      adj[v].push(u); // v has neighbor u (undirected)
    }

    // visited[i] = true once we have started DFS from or reached vertex i
    let visited = new Array(v).fill(false);

    // DFS from 'node'; 'parent' is the vertex we came from (to ignore the edge back to parent)
    const dfs = (node, parent) => {
      visited[node] = true; // Mark current node as visited

      for (let neighbor of adj[node]) {
        // If neighbor not yet visited, recurse into it
        if (!visited[neighbor]) {
          if (dfs(neighbor, node)) {
            return true; // Cycle found in subtree
          }
        }
        // Neighbor is visited and is not our parent → back-edge → cycle
        else if (neighbor !== parent) {
          return true;
        }
      }
      return false; // No cycle in this subtree
    };

    // Try DFS from every unvisited vertex (handles disconnected graph)
    for (let i = 0; i < v; i++) {
      if (!visited[i]) {
        if (dfs(i, -1)) {
          return true; // Cycle found in this component
        }
      }
    }
    return false; // No cycle in any component
  }
}
let sol = new Solution();
let v = 5;
let edges = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 0],
];
console.log(sol.isCycle(v, edges));
