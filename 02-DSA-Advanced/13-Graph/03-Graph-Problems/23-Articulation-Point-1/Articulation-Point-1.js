/*
 * ========== PROBLEM: Articulation Points (Cut Vertices) ==========
 *
 * Given an undirected connected graph with V vertices and adjacency list adj,
 * find all articulation points. An articulation point is a vertex whose
 * removal (along with its edges) increases the number of connected
 * components in the graph.
 *
 * Input:  V   = number of vertices (0 to V-1)
 *         adj = adjacency list; adj[i] = list of neighbors of i
 *
 * Output: Sorted array of all articulation point indices, or [-1] if none.
 *
 * Approach: DFS with discovery time (disc) and low-link (low).
 * - disc[u] = time when u is first visited
 * - low[u]  = minimum disc reachable from u (via tree edges + back-edges)
 * Root is AP if it has more than one child in the DFS tree.
 * Non-root u is AP if it has a child v such that low[v] >= disc[u]
 * (no back-edge from v's subtree to an ancestor of u).
 *
 * Time: O(V + E)  |  Space: O(V)
 */

class Solution {
  articulationPoints(V, adj) {
    let disc = new Array(V).fill(-1); // Discovery time; -1 = not visited
    let low = new Array(V).fill(-1); // Lowest disc reachable from this node
    let parent = new Array(V).fill(-1); // Parent in DFS tree (-1 for root)
    let visited = new Array(V).fill(false);
    let ap = new Array(V).fill(false); // ap[i] = true if vertex i is an articulation point

    let timer = 0;

    const dfs = (u) => {
      // Step 1: Mark the node as visited and set the discovery time and low time
      visited[u] = true;
      // Step 2: Set the discovery time and low time
      disc[u] = low[u] = timer++;

      // Step 2: Count the number of children of u in the DFS tree
      let childCount = 0; // Number of children of u in the DFS tree

      // Step 3: Traverse all the neighbors of u
      for (let i = 0; i < adj[u].length; i++) {
        let v = adj[u][i];
        // Step 3.1: Ignore self-loops
        if (v === u) continue; // Ignore self-loops

        // Step 3.2: If the neighbor is not visited, then it is a child of u
        if (!visited[v]) {
          // Step 4: If the neighbor is not visited, then it is a child of u
          childCount++;
          // Step 5: Set the parent of v to u
          parent[v] = u;

          dfs(v);
          // Step 6: Propagate the low time from the child

          low[u] = Math.min(low[u], low[v]); // Propagate low from child

          // Case 1: Root — AP if it has 2 or more children (removing it disconnects them)
          if (parent[u] === -1 && childCount > 1) {
            ap[u] = true;
          }

          // Case 2: Non-root — AP if some child v has no back-edge to ancestor (low[v] >= disc[u])
          if (parent[u] !== -1 && low[v] >= disc[u]) {
            ap[u] = true;
          }
        } else if (v !== parent[u]) {
          // Back edge: v is already visited and is not parent; update low[u]
          low[u] = Math.min(low[u], disc[v]);
        }
      }
    };
    // Step 4: Traverse all the vertices
    for (let i = 0; i < V; i++) {
      // Step 4.1: If the vertex is not visited, then traverse it
      if (!visited[i]) {
        // Step 4.2: Traverse the vertex
        dfs(i);
      }
    }

    // Step 5: Store the articulation points
    let result = [];

    for (let i = 0; i < V; i++) {
      // Step 5.1: If the vertex is an articulation point, then store it
      if (ap[i]) result.push(i);
    }

    // Step 6: If there are no articulation points, then return [-1]
    if (result.length === 0) return [-1];

    // Step 7: Return the articulation points
    return result.sort((a, b) => a - b);
  }
}

let sol = new Solution();
let V = 5;
let adj = [[1], [2], [3], [4], [0]]; // Cycle 0-1-2-3-4-0 (if undirected: no AP)
console.log(sol.articulationPoints(V, adj));
