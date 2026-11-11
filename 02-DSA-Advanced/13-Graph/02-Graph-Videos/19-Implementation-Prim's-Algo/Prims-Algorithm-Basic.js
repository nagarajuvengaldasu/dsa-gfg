/*
 * ========== PRIM'S ALGORITHM - BASIC IMPLEMENTATION ==========
 * Implementation matching the whiteboard pseudocode.
 * Uses adjacency matrix and linear scan to find minimum key vertex.
 *
 * Algorithm (primMST(g)):
 * 1) key[V] = {INF, INF, ...}, key[0] = 0, mSet[V] = {false}
 * 2) res = 0
 * 3) for count = 0 to V-1:
 *    a) Find u = vertex with min key not in mSet (linear scan)
 *    b) mSet[u] = true, res += key[u]
 *    c) For each v: if !mSet[v] && g[u][v]!=0 && g[u][v] < key[v]
 *       → key[v] = g[u][v]
 * 4) return res
 *
 * Time: O(V²)  |  Space: O(V)
 * Uses adjacency matrix - g[u][v] = weight (0 means no edge)
 */

function primMST(g) {
  let V = g.length;
  let key = Array(V).fill(Number.POSITIVE_INFINITY);
  let mSet = Array(V).fill(false);
  key[0] = 0;
  let res = 0;

  for (let count = 0; count < V; count++) {
    // Find minimum key vertex not yet in MST (linear scan - O(V))
    let u = -1;
    for (let i = 0; i < V; i++) {
      if (mSet[i] === false && (u === -1 || key[i] < key[u])) {
        u = i;
      }
    }
    if (u === -1) break;

    mSet[u] = true;
    res += key[u];

    // Update key for adjacent vertices
    for (let v = 0; v < V; v++) {
      if (
        mSet[v] === false &&
        g[u][v] !== 0 &&
        g[u][v] < key[v]
      ) {
        key[v] = g[u][v];
      }
    }
  }
  return res;
}

// Build adjacency matrix from edges (0 = no edge)
function buildAdjMatrix(V, edges) {
  let g = Array(V)
    .fill(null)
    .map(() => Array(V).fill(0));
  for (let [u, v, w] of edges) {
    g[u][v] = w;
    g[v][u] = w; // undirected
  }
  return g;
}

// ========== Example 1: Whiteboard (4 nodes) - res = 5+8+15 = 28 ==========
// Graph: 0-1:5, 0-2:8, 1-2:10, 1-3:15, 2-3:20
console.log("=== Prim's Basic - Example 1 (4 nodes) ===");
let edges1 = [
  [0, 1, 5],
  [0, 2, 8],
  [1, 2, 10],
  [1, 3, 15],
  [2, 3, 20],
];
let g1 = buildAdjMatrix(4, edges1);
console.log("MST Total Weight:", primMST(g1)); // 28

// ========== Example 2: 5 nodes - res = 2+3+5+6 = 16 ==========
// Graph: 0-1:2, 0-3:6, 1-2:3, 1-3:8, 1-4:5, 2-4:7
// MST: 0-1, 1-2, 1-4, 0-3
console.log("\n=== Prim's Basic - Example 2 (5 nodes) ===");
let edges2 = [
  [0, 1, 2],
  [0, 3, 6],
  [1, 2, 3],
  [1, 3, 8],
  [1, 4, 5],
  [2, 4, 7],
];
let g2 = buildAdjMatrix(5, edges2);
console.log("MST Total Weight:", primMST(g2)); // 16
