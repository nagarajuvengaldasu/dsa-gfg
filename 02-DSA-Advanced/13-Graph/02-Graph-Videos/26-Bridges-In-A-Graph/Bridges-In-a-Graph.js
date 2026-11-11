/*
 * ========== BRIDGES IN A GRAPH ==========
 * A bridge is an edge whose removal increases the number of
 * connected components.
 *
 * DFS-based: Use discovery time (disc) and low-link (low).
 * Bridge condition (u,v) where u is parent of v:
 *   low[v] > disc[u]
 *
 * low[v] = lowest discovery time reachable from v (tree + back-edges)
 *
 * Time: O(V + E)  |  Space: O(V)
 */

class Graph {
  constructor(V) {
    this.V = V;
    this.adj = [];
    for (let i = 0; i < V; i++) this.adj[i] = [];
  }

  addEdge(u, v) {
    this.adj[u].push(v);
    this.adj[v].push(u);
  }

  findBridges() {
    const disc = Array(this.V).fill(-1);
    const low = Array(this.V).fill(-1);
    const parent = Array(this.V).fill(-1);
    const bridges = [];
    let time = 0;

    const dfs = (u) => {
      disc[u] = low[u] = ++time;

      for (let v of this.adj[u]) {
        if (disc[v] === -1) {
          parent[v] = u;
          dfs(v);
          low[u] = Math.min(low[u], low[v]);

          // Bridge: v has no back-edge to u or u's ancestors
          if (low[v] > disc[u]) {
            bridges.push([u, v]);
          }
        } else if (v !== parent[u]) {
          low[u] = Math.min(low[u], disc[v]);
        }
      }
    };

    for (let i = 0; i < this.V; i++) {
      if (disc[i] === -1) dfs(i);
    }

    return bridges;
  }
}

// ========== Example 1: A-B, A-C, B-C, B-D, D-E → Bridges: B-D, D-E ==========
// Graph: A=0, B=1, C=2, D=3, E=4
console.log("=== Bridges in a Graph ===\n");
console.log("Example 1 (5 nodes: A-B, A-C, B-C, B-D, D-E):");
let g1 = new Graph(5);
g1.addEdge(0, 1); // A-B
g1.addEdge(0, 2); // A-C
g1.addEdge(1, 2); // B-C
g1.addEdge(1, 3); // B-D
g1.addEdge(3, 4); // D-E

const labels = ["A", "B", "C", "D", "E"];
let bridges1 = g1.findBridges();
console.log(
  "Bridges:",
  bridges1.length
    ? bridges1.map(([u, v]) => `${labels[u]}-${labels[v]}`).join(", ")
    : "None"
);

// ========== Example 2: A-B, A-C, B-C, C-D, D-E, D-F, E-F → Bridge: C-D ==========
console.log("\nExample 2 (6 nodes: A-B, A-C, B-C, C-D, D-E, D-F, E-F):");
let g2 = new Graph(6);
g2.addEdge(0, 1); // A-B
g2.addEdge(0, 2); // A-C
g2.addEdge(1, 2); // B-C
g2.addEdge(2, 3); // C-D
g2.addEdge(3, 4); // D-E
g2.addEdge(3, 5); // D-F
g2.addEdge(4, 5); // E-F

const labels2 = ["A", "B", "C", "D", "E", "F"];
let bridges2 = g2.findBridges();
console.log(
  "Bridges:",
  bridges2.length
    ? bridges2.map(([u, v]) => `${labels2[u]}-${labels2[v]}`).join(", ")
    : "None"
);
