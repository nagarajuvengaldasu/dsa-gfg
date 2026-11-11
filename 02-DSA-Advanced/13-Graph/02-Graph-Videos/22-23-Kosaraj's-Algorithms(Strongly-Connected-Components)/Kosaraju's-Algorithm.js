/*
 * ========== KOSARAJU'S ALGORITHM ==========
 * Finds Strongly Connected Components (SCCs) in a directed graph.
 *
 * Steps:
 * 1) DFS on original graph → push vertex to stack when it finishes (finish time).
 * 2) Reverse all edges (transpose graph).
 * 3) DFS on transpose graph in order of stack pop; each DFS gives one SCC.
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

  // Step 1: DFS – push to stack when vertex finishes (all descendants done)
  fillOrder(u, visited, stack) {
    visited[u] = true;
    for (let v of this.adj[u]) {
      if (!visited[v]) this.fillOrder(v, visited, stack);
    }
    stack.push(u);
  }

  // DFS on transpose to collect one SCC
  dfsSCC(u, visited, scc) {
    visited[u] = true;
    scc.push(u);
    for (let v of this.adj[u]) {
      if (!visited[v]) this.dfsSCC(v, visited, scc);
    }
  }

  // Step 2: Return transpose (all edges reversed)
  getTranspose() {
    const gRev = new Graph(this.V);
    for (let u = 0; u < this.V; u++) {
      for (let v of this.adj[u]) {
        gRev.addEdge(v, u);
      }
    }
    return gRev;
  }

  // Kosaraju's: returns array of SCCs (each SCC is array of vertices)
  kosarajuSCC() {
    const stack = [];
    const visited = Array(this.V).fill(false);

    // Step 1: Fill stack by finish order (DFS on original graph)
    for (let i = 0; i < this.V; i++) {
      if (!visited[i]) this.fillOrder(i, visited, stack);
    }

    const transpose = this.getTranspose();
    visited.fill(false);
    const sccs = [];

    // Step 3: Process in reverse finish order (pop from stack)
    while (stack.length > 0) {
      const u = stack.pop();
      if (!visited[u]) {
        const scc = [];
        transpose.dfsSCC(u, visited, scc);
        sccs.push(scc);
      }
    }

    return sccs;
  }
}

// ========== Example 1: 5 nodes – SCCs {0,1,2}, {3,4} ==========
// 0→1, 0→2, 1→0, 1→2, 2→0, 2→3, 3→4, 4→3 (cycle 0-1-2 and cycle 3-4)
console.log("=== Example 1 (5 nodes) ===");
let g1 = new Graph(5);
g1.addEdge(0, 1);
g1.addEdge(0, 2);
g1.addEdge(1, 0);
g1.addEdge(1, 2);
g1.addEdge(2, 0);
g1.addEdge(2, 3);
g1.addEdge(3, 4);
g1.addEdge(4, 3);

let scc1 = g1.kosarajuSCC();
console.log("SCCs:", scc1.map((c) => "{" + c.join(", ") + "}").join("  "));
