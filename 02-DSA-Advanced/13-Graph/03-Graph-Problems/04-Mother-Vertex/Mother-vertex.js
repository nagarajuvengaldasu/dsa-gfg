/*
 * ========== PROBLEM: Mother Vertex ==========
 *
 * Given a directed graph with V vertices and adjacency list adj,
 * find a mother vertex. A mother vertex is a vertex v such that
 * all other vertices can be reached from v via directed paths.
 *
 * Input:  V   = number of vertices (0 to V-1)
 *         adj = adjacency list; adj[i] = array of outgoing neighbors of i
 *
 * Output: A mother vertex index, or -1 if no mother vertex exists.
 *
 * Approach: Two-pass DFS.
 * 1) First pass: Do DFS from each unvisited vertex. The last vertex
 *    for which we START a new DFS becomes our candidate. (It is the
 *    last vertex that wasn't reached by any earlier DFS.)
 * 2) Second pass: Do DFS from the candidate. If it visits all
 *    vertices, the candidate is a mother vertex; else return -1.
 *
 * Insight: If a mother vertex exists, it must be able to reach the
 * first vertex we started from (or be that vertex). The last vertex
 * that started its own DFS is the only one that could reach everyone
 * including all earlier DFS trees.
 *
 * Time: O(V + E)  |  Space: O(V)
 */

class Solution {
  dfs(node, visited, adj) {
    visited[node] = true; // Mark current node as visited
    for (let neighbor of adj[node]) {
      if (!visited[neighbor]) {
        this.dfs(neighbor, visited, adj); // Recurse into unvisited neighbors
      }
    }
  }

  findmothervertex(V, adj) {
    let visited = new Array(V).fill(false);
    let candidate = -1;

    // First pass: do DFS from each unvisited vertex; track the last vertex we start DFS from
    for (let i = 0; i < V; i++) {
      if (!visited[i]) {
        this.dfs(i, visited, adj); // DFS from i reaches all vertices reachable from i
        candidate = i; // i was not reachable from any previous DFS start; it could be mother
      }
    }

    // Second pass: verify that from candidate we can reach all vertices
    visited.fill(false);
    this.dfs(candidate, visited, adj);

    for (let i = 0; i < V; i++) {
      if (!visited[i]) {
        return -1; // Some vertex not reachable from candidate → no mother vertex
      }
    }
    return candidate;
  }
}

let V = 5;
let adj = [
  [1, 2],   // 0 -> 1, 2
  [0, 3],   // 1 -> 0, 3
  [0, 4],   // 2 -> 0, 4
  [1, 4],   // 3 -> 1, 4
  [2, 3],   // 4 -> 2, 3
];
let sol = new Solution();
console.log(sol.findmothervertex(V, adj));
