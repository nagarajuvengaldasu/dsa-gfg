/*
 * ========== PROBLEM: Print Adjacency List ==========
 *
 * Given an undirected graph with V vertices and a list of edges,
 * build and return the adjacency list representation of the graph.
 *
 * Input:  V     = number of vertices (0 to V-1)
 *         edges = array of [u, v] meaning undirected edge between u and v
 *
 * Output: adj = array of arrays; adj[i] = list of all vertices adjacent
 *         to vertex i (neighbors of i).
 *
 * For undirected graphs: if (u, v) is an edge, both u and v are
 * neighbors of each other, so we add v to adj[u] and u to adj[v].
 *
 * Time: O(V + E)  |  Space: O(V + E)
 */

function printAdjacencyList(V, edges) {
  // adj[i] = empty array initially; will hold neighbors of vertex i
  let adj = Array.from({ length: V }, () => []);

  // For each edge (u, v): add v as neighbor of u, and u as neighbor of v (undirected)
  for (let [u, v] of edges) {
    adj[u].push(v); // v is adjacent to u
    adj[v].push(u); // u is adjacent to v (bidirectional)
  }

  return adj; // Return the adjacency list (e.g. [[1,4], [0,2,4], [1,3], [2,4], [3,1,0]])
}

let V = 5;
let edges = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 1],
];
console.log(printAdjacencyList(V, edges));
