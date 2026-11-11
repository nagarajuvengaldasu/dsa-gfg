/*
 * ========== ARTICULATION POINTS - NAIVE APPROACH ==========
 * Remove every vertex one by one; if # connected components > 1
 * after removal, that vertex is an articulation point.
 *
 * Time: O((V+E) × (V+E))  |  Space: O(V+E)
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

  // DFS from src, excluding vertex 'exclude'
  dfsCount(src, visited, exclude) {
    visited[src] = true;
    for (let v of this.adj[src]) {
      if (v !== exclude && !visited[v]) {
        this.dfsCount(v, visited, exclude);
      }
    }
  }

  // Count connected components when vertex 'exclude' is removed
  countComponents(exclude) {
    const visited = Array(this.V).fill(false);
    if (exclude >= 0 && exclude < this.V) visited[exclude] = true;

    let count = 0;
    for (let i = 0; i < this.V; i++) {
      if (!visited[i]) {
        this.dfsCount(i, visited, exclude);
        count++;
      }
    }
    return count;
  }

  articulationPoints() {
    const aps = [];
    const initialComponents = this.countComponents(-1);

    for (let u = 0; u < this.V; u++) {
      const components = this.countComponents(u);
      if (components > initialComponents) {
        aps.push(u);
      }
    }
    return aps;
  }
}

// ========== Examples ==========

console.log("=== Articulation Points - NAIVE (O((V+E)²)) ===\n");

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
