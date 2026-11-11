/*
 * ========== DIJKSTRA'S ALGORITHM - NAIVE APPROACH ==========
 * Adjacency Matrix + Linear Scan for min key vertex
 *
 * Graph g: adjacency matrix, g[u][v] = edge weight (0 = no edge)
 * Time: O(V²)  |  Space: O(V)
 *
 * Note: Does NOT work for negative weight edges.
 */

const INF = Number.MAX_SAFE_INTEGER;

function dijkstraNaive(g, src) {
  const V = g.length;
  const dist = Array(V).fill(INF);
  const fin = Array(V).fill(false);
  dist[src] = 0;

  for (let count = 0; count < V - 1; count++) {
    // Find the min key vertex (linear scan - O(V))
    let u = -1;
    for (let i = 0; i < V; i++) {
      if (fin[i] === false && (u === -1 || dist[i] < dist[u])) {
        u = i;
      }
    }
    if (u === -1) break;

    fin[u] = true;

    // Relax: Update adjacent vertices of u
    for (let v = 0; v < V; v++) {
      if (fin[v] === false && g[u][v] !== 0 && dist[v] > dist[u] + g[u][v]) {
        dist[v] = dist[u] + g[u][v];
      }
    }
  }

  return dist;
}

// Build adjacency matrix from V and edge list [[u, v, w], ...]
function buildAdjMatrix(V, edges) {
  const g = Array(V)
    .fill(null)
    .map(() => Array(V).fill(0));
  for (let [u, v, w] of edges) {
    g[u][v] = w;
  }
  return g;
}

// ========== Example ==========
// 0→1:50, 0→2:100, 1→2:30, 1→3:200, 2→3:20
// Expected: [0, 50, 80, 100]

const edges = [
  [0, 1, 50],
  [0, 2, 100],
  [1, 2, 30],
  [1, 3, 200],
  [2, 3, 20],
];
const adjMatrix = buildAdjMatrix(4, edges);

console.log("=== Dijkstra Naive (O(V²)) ===");
let dist = dijkstraNaive(adjMatrix, 0);
console.log(
  "Shortest distances:",
  dist.map((d, i) => `${i}:${d === INF ? "∞" : d}`).join(", ")
);
