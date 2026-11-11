/*
 * ========== ARTICULATION POINTS - OPTIMAL APPROACH ==========
 * DFS-based (Tarjan): Uses discovery time (disc) and low value.
 *
 * Conditions:
 * - Root: AP if it has 2+ children in DFS tree.
 * - Non-root u: AP if exists child v with low[v] >= disc[u].
 *
 * disc[u] = time when DFS first visits u
 * low[u]  = min disc reachable from u (tree edges + back-edges)
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

  articulationPoints() {
    const disc = Array(this.V).fill(-1);
    const low = Array(this.V).fill(-1);
    const parent = Array(this.V).fill(-1);
    const ap = Array(this.V).fill(false);
    let time = 0;

    const dfs = (u) => {
      let children = 0;
      disc[u] = low[u] = ++time;

      for (let v of this.adj[u]) {
        if (disc[v] === -1) {
          children++;
          parent[v] = u;
          dfs(v);

          low[u] = Math.min(low[u], low[v]);

          // Root: AP if 2+ children
          if (parent[u] === -1 && children >= 2) ap[u] = true;

          // Non-root: AP if child v has no back-edge to ancestor (low[v] >= disc[u])
          if (parent[u] !== -1 && low[v] >= disc[u]) ap[u] = true;
        } else if (v !== parent[u]) {
          low[u] = Math.min(low[u], disc[v]);
        }
      }
    };

    for (let i = 0; i < this.V; i++) {
      if (disc[i] === -1) dfs(i);
    }

    return [...Array(this.V).keys()].filter((i) => ap[i]);
  }
}

// ========== Examples ==========

console.log("=== Articulation Points - OPTIMAL (O(V+E)) ===\n");

// Ex1: 0-1-2 triangle, 2-3, 3-4 → APs: 2, 3
console.log("Example 1 (5 nodes, edges: 0-1,0-2,1-2,2-3,3-4):");
let g1 = new Graph(5);
g1.addEdge(0, 1);
g1.addEdge(0, 2);
g1.addEdge(1, 2);
g1.addEdge(2, 3);
g1.addEdge(3, 4);
console.log("APs:", g1.articulationPoints().join(" "));

// Ex2: Two triangles sharing 2 → AP: 2
console.log("\nExample 2 (5 nodes, edges: 0-1,0-2,1-2,2-3,2-4,3-4):");
let g2 = new Graph(5);
g2.addEdge(0, 1);
g2.addEdge(0, 2);
g2.addEdge(1, 2);
g2.addEdge(2, 3);
g2.addEdge(2, 4);
g2.addEdge(3, 4);
console.log("APs:", g2.articulationPoints().join(" "));

// Ex3: Star graph → AP: 2 (center)
console.log("\nExample 3 (Star: 0-2,1-2,2-3,2-4):");
let g3 = new Graph(5);
g3.addEdge(0, 2);
g3.addEdge(1, 2);
g3.addEdge(2, 3);
g3.addEdge(2, 4);
console.log("APs:", g3.articulationPoints().join(" "));

// Ex4: Complete K3 → No AP
console.log("\nExample 4 (Complete K3: 0-1,0-2,1-2):");
let g4 = new Graph(3);
g4.addEdge(0, 1);
g4.addEdge(0, 2);
g4.addEdge(1, 2);
let aps4 = g4.articulationPoints();
console.log("APs:", aps4.length === 0 ? "No Articulation Point" : aps4.join(" "));

// Ex5: 7-node graph from whiteboard → APs: 1, 4
console.log("\nExample 5 (7 nodes: 1-0,1-2,1-4,0-3,2-3,4-5,4-6,5-6):");
let g5 = new Graph(7);
g5.addEdge(1, 0);
g5.addEdge(1, 2);
g5.addEdge(1, 4);
g5.addEdge(0, 3);
g5.addEdge(2, 3);
g5.addEdge(4, 5);
g5.addEdge(4, 6);
g5.addEdge(5, 6);
console.log("APs:", g5.articulationPoints().join(" "));
