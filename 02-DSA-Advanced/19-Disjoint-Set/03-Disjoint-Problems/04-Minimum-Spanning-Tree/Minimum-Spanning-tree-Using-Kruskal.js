/**
 * ========== PROBLEM STATEMENT: MINIMUM SPANNING TREE (KRUSKAL'S ALGORITHM) ==========
 * Given an undirected weighted graph with n nodes and m edges, find the minimum
 * total weight of a spanning tree (a tree that connects all n nodes with n-1 edges).
 *
 * Kruskal's algorithm:
 * 1. Sort all edges by weight (ascending).
 * 2. For each edge (u, v, wt), add it if u and v are in different sets (no cycle).
 * 3. Use DSU (Union-Find) to check/merge sets.
 * 4. Stop when we have n-1 edges in the MST.
 *
 * Time: O(E log E) for sorting; O(E α(n)) for DSU.
 * ===================================================================================
 */

class Solution {
  kruskalDSU(adj, n, m) {
    let parent = new Array(n + 1);            // parent[i] = rep of i's set (nodes 1..n)
    let rank = new Array(n + 1).fill(0);      // rank for union-by-rank

    for (let i = 1; i <= n; i++) {
      parent[i] = i;                            // each node is its own set initially
    }

    const find = (node) => {
      if (parent[node] !== node) {
        parent[node] = find(parent[node]);      // path compression: flatten to root
      }
      return parent[node];
    };

    const union = (u, v) => {
      let rootu = find(u);                      // root of u's set
      let rootv = find(v);                      // root of v's set
      if (rootu === rootv) {
        return false;                           // same set → would form cycle; skip edge
      }
      if (rank[rootu] < rank[rootv]) {
        parent[rootu] = rootv;                  // union by rank: attach smaller under larger
      } else if (rank[rootu] > rank[rootv]) {
        parent[rootv] = rootu;
      } else {
        parent[rootv] = rootu;
        rank[rootu] = rank[rootu] + 1;          // same rank: pick one, increment
      }
      return true;                              // merged successfully
    };

    let edges = [];
    for (let u = 1; u <= n; u++) {
      for (let [v, wt] of adj[u]) {
        if (u < v) {                            // process each edge once (u < v avoids duplicate)
          edges.push([wt, u, v]);               // [weight, u, v] for sorting
        }
      }
    }
    edges.sort((a, b) => a[0] - b[0]);          // sort by weight (ascending)

    let mstweight = 0;
    let edgesused = 0;

    for (let [wt, u, v] of edges) {
      if (union(u, v)) {                        // add edge if no cycle
        mstweight += wt;                        // add weight to MST total
        edgesused++;
        if (edgesused === n - 1) {              // MST has n-1 edges; done
          break;
        }
      }
    }
    return mstweight;
  }
}
// adj[u] = list of [neighbor, weight]; nodes 1..n (1-based). adj[0] unused.
let solution = new Solution();
let adj = [
  [],                    // adj[0] unused (1-based nodes)
  [[2, 1], [3, 2]],      // node 1: edges to 2 (wt 1), 3 (wt 2)
  [[1, 1], [3, 2]],      // node 2: edges to 1 (wt 1), 3 (wt 2)
  [[1, 2], [2, 2]],      // node 3: edges to 1 (wt 2), 2 (wt 2)
  [],                    // node 4: isolated in this example
];
let n = 4;
let m = 5;
console.log(solution.kruskalDSU(adj, n, m));   // MST weight (e.g. 3 for nodes 1,2,3)
