/*
 * ========== BELLMAN-FORD ALGORITHM ==========
 * Finds shortest paths from source to all vertices.
 * Works with negative edge weights (unlike Dijkstra).
 *
 * Idea: Relax all edges V-1 times.
 * (Finds shortest paths of 1 edge, then 2 edges, etc.)
 *
 * Time: O(V * E)  |  Space: O(V)
 *
 * Returns: { dist, hasNegativeCycle }
 * - If hasNegativeCycle, dist may be incorrect.
 */

const INF = Number.MAX_SAFE_INTEGER;

function bellmanFord(V, edges, src) {
  const dist = Array(V).fill(INF);
  dist[src] = 0;

  // Relax all edges V-1 times
  for (let count = 0; count < V - 1; count++) {
    for (let [u, v, w] of edges) {
      if (dist[u] !== INF && dist[v] > dist[u] + w) {
        dist[v] = dist[u] + w;
      }
    }
  }

  // Optional: Detect negative weight cycle (one more pass)
  let hasNegativeCycle = false;
  for (let [u, v, w] of edges) {
    if (dist[u] !== INF && dist[v] > dist[u] + w) {
      hasNegativeCycle = true;
      break;
    }
  }

  return { dist, hasNegativeCycle };
}

// ========== Example: Whiteboard graph (A,B,C,D) - Source A ==========
// A→B:1, A→C:4, B→C:-3, B→D:2, C→D:3
// Expected: dist = [0, 1, -2, 1]

const V1 = 4; // A=0, B=1, C=2, D=3
const edges1 = [
  [0, 1, 1],  // A→B:1
  [0, 2, 4],  // A→C:4
  [1, 2, -3], // B→C:-3
  [1, 3, 2],  // B→D:2
  [2, 3, 3],  // C→D:3
];

console.log("=== Bellman-Ford (Source A, 4 nodes) ===");
let { dist: d1, hasNegativeCycle: neg1 } = bellmanFord(V1, edges1, 0);

const labels = ["A", "B", "C", "D"];
console.log(
  "Shortest distances:",
  d1.map((d, i) => `${labels[i]}:${d === INF ? "∞" : d}`).join(", ")
);
if (neg1) console.log("Warning: Negative weight cycle detected!");
