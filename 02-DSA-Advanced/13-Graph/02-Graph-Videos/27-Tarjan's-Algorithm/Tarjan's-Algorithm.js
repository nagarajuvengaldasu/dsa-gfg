/*
 * ========== TARJAN'S ALGORITHM ==========
 * Finds Strongly Connected Components (SCCs) in a directed graph.
 *
 * Uses DFS with:
 * - disc[u] = discovery time when DFS first visits u
 * - low[u]  = smallest disc reachable from u (including back-edges)
 * - Stack to track nodes in current DFS path
 *
 * SCC root: disc[u] == low[u] → pop stack until u, those form one SCC.
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
  }

  findSCC() {
    const disc = Array(this.V).fill(-1);
    const low = Array(this.V).fill(-1);
    const onStack = Array(this.V).fill(false);
    const stack = [];
    const sccs = [];
    let time = 0;

    const dfs = (u) => {
      disc[u] = low[u] = ++time;
      stack.push(u);
      onStack[u] = true;

      for (let v of this.adj[u]) {
        if (disc[v] === -1) {
          dfs(v);
          low[u] = Math.min(low[u], low[v]);
        } else if (onStack[v]) {
          low[u] = Math.min(low[u], disc[v]);
        }
      }

      if (disc[u] === low[u]) {
        const scc = [];
        let w;
        do {
          w = stack.pop();
          onStack[w] = false;
          scc.push(w);
        } while (w !== u);
        sccs.push(scc);
      }
    };

    for (let i = 0; i < this.V; i++) {
      if (disc[i] === -1) dfs(i);
    }

    return sccs;
  }
}

// ========== Example: A→B, B→C, C→A, B→D, D→E, E→D ==========
// SCCs: {A,B,C}, {D,E}
console.log("=== Tarjan's Algorithm - SCCs ===\n");

const labels = ["A", "B", "C", "D", "E"];
let g = new Graph(5);
g.addEdge(0, 1); // A→B
g.addEdge(1, 2); // B→C
g.addEdge(2, 0); // C→A (cycle A-B-C)
g.addEdge(1, 3); // B→D
g.addEdge(3, 4); // D→E
g.addEdge(4, 3); // E→D (cycle D-E)

let sccs = g.findSCC();
console.log(
  "SCCs:",
  sccs.map((c) => "{" + c.map((i) => labels[i]).join(", ") + "}").join("  ")
);
