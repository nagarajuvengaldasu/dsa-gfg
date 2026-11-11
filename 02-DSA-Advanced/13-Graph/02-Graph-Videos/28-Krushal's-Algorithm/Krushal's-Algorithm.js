/*
 * ========== KRUSKAL'S ALGORITHM ==========
 * Finds Minimum Spanning Tree (MST) of a weighted undirected graph.
 *
 * Steps:
 * 1) Sort all edges in increasing order of weight
 * 2) For each edge (while MST has < V-1 edges):
 *    If adding edge does not form a cycle → add to MST, res += weight
 * 3) Return total MST weight (res)
 *
 * Uses Disjoint Set Union (DSU) for cycle detection.
 *
 * Time: O(E log E)  |  Space: O(V)
 */

class Edge {
  constructor(u, v, w) {
    this.u = u;
    this.v = v;
    this.w = w;
  }
}

function kruskal(V, edges) {
  edges.sort((a, b) => a.w - b.w);

  const parent = [];
  for (let i = 0; i < V; i++) parent[i] = i;

  const find = (x) => {
    if (parent[x] === x) return x;
    return find(parent[x]);
  };

  const union = (x, y) => {
    parent[x] = y;
  };

  let res = 0;
  let mstEdges = [];

  for (let e of edges) {
    let uRoot = find(e.u);
    let vRoot = find(e.v);
    if (uRoot !== vRoot) {
      res += e.w;
      mstEdges.push(e);
      union(uRoot, vRoot);
    }
  }

  return { weight: res, edges: mstEdges };
}

// ========== Example 1: 5 nodes (A,B,C,D,E) – MST weight 25 ==========
// A-B:6, A-C:5, B-C:3, B-D:8, C-D:7, C-E:12, D-E:10
// MST: BC(3), AC(5), CD(7), DE(10) → 25
console.log("=== Kruskal's Algorithm - MST ===\n");

const V1 = 5; // A=0, B=1, C=2, D=3, E=4
const edges1 = [
  new Edge(0, 1, 6),  // A-B:6
  new Edge(0, 2, 5),  // A-C:5
  new Edge(1, 2, 3),  // B-C:3
  new Edge(1, 3, 8),  // B-D:8
  new Edge(2, 3, 7),  // C-D:7
  new Edge(2, 4, 12), // C-E:12
  new Edge(3, 4, 10), // D-E:10
];

let { weight: w1, edges: mst1 } = kruskal(V1, edges1);
const labels = ["A", "B", "C", "D", "E"];
console.log(
  "Example 1 (5 nodes): MST weight =",
  w1,
  "| Edges:",
  mst1.map((e) => `${labels[e.u]}-${labels[e.v]}(${e.w})`).join(", ")
);

// ========== Example 2: 4 nodes – MST weight 20 ==========
// A-C:5, A-B:9, A-D:10, B-D:8, C-D:7
// MST: A-C(5), C-D(7), B-D(8) → 20
console.log("\nExample 2 (4 nodes):");
const V2 = 4;
const edges2 = [
  new Edge(0, 2, 5),  // A-C:5
  new Edge(0, 1, 9),  // A-B:9
  new Edge(0, 3, 10), // A-D:10
  new Edge(1, 3, 8),  // B-D:8
  new Edge(2, 3, 7),  // C-D:7
];

let { weight: w2, edges: mst2 } = kruskal(V2, edges2);
const labels2 = ["A", "B", "C", "D"];
console.log(
  "MST weight =",
  w2,
  "| Edges:",
  mst2.map((e) => `${labels2[e.u]}-${labels2[e.v]}(${e.w})`).join(", ")
);
