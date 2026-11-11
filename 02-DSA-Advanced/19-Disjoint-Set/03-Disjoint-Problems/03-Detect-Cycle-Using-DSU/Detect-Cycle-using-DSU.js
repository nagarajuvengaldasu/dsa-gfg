/**
 * ========== PROBLEM STATEMENT: DETECT CYCLE IN UNDIRECTED GRAPH USING DSU ==========
 * Given an undirected graph with n nodes and adjacency list adj, detect if it
 * contains a cycle. Nodes are 0-based (indices 0 to n-1).
 *
 * Approach: Use Disjoint Set Union. For each edge (u, v):
 *   - If find(u) === find(v), u and v are already in the same set → adding (u,v) creates a cycle.
 *   - Else, union(u, v).
 *
 *   - find(node): return root of node's set (with path compression).
 *   - union(u, v): return true if u and v are in same set (cycle); else merge and return false.
 *
 * We iterate edges once; when union returns true, we found a cycle.
 * ===================================================================================
 */

class Solution {
  detectcycle(n, adj) {
    let parent = new Array(n);              // parent[i] = representative of i's set
    let rank = new Array(n).fill(0);         // rank for union-by-rank

    for (let i = 0; i < n; i++) {
      parent[i] = i;                         // each node is its own set initially
    }

    const find = (node) => {
      if (parent[node] !== node) {
        parent[node] = find(parent[node]);   // path compression: flatten to root
      }
      return parent[node];
    };

    const union = (u, v) => {
      let rootu = find(u);                   // root of u's set
      let rootv = find(v);                   // root of v's set
      if (rootu === rootv) return true;      // same set → adding (u,v) creates a cycle

      if (rank[rootu] < rank[rootv]) {
        parent[rootu] = rootv;               // union by rank: attach smaller under larger
      } else if (rank[rootu] > rank[rootv]) {
        parent[rootv] = rootu;
      } else {
        parent[rootv] = rootu;
        rank[rootu] = rank[rootu] + 1;       // same rank: pick one, increment
      }
      return false;                          // no cycle; merge successful
    };

    for (let u = 0; u < n; u++) {
      for (let v of adj[u]) {
        if (u < v) {                         // process each edge once (u < v avoids duplicate)
          if (union(u, v)) {
            return 1;                        // cycle detected
          }
        }
      }
    }
    return 0;                                // no cycle found
  }
}

// 5-node cycle: 0-1-2-3-4-0 (undirected). adj[u] = neighbors of u.
let solution = new Solution();
let n = 5;
let adj = [
  [1, 4],    // 0 ↔ 1, 0 ↔ 4
  [0, 2],    // 1 ↔ 0, 1 ↔ 2
  [1, 3],    // 2 ↔ 1, 2 ↔ 3
  [2, 4],    // 3 ↔ 2, 3 ↔ 4
  [3, 0],    // 4 ↔ 3, 4 ↔ 0  (forms cycle 0-1-2-3-4-0)
];
console.log(solution.detectcycle(n, adj));   // 1 (cycle exists)
