/*
 * ========== PROBLEM: Strongly Connected Components (Tarjan's Algorithm) ==========
 *
 * Given a directed graph with V vertices and adjacency list adj, find all
 * Strongly Connected Components (SCCs). An SCC is a maximal set of vertices
 * such that every pair of vertices is reachable from each other.
 *
 * Input:  V   = number of vertices (0 to V-1)
 *         adj = adjacency list; adj[i] = list of outgoing neighbors of i
 *
 * Output: Array of SCCs; each SCC is an array of vertices (sorted ascending).
 *         Result is sorted lexicographically by component.
 *
 * Approach: One-pass DFS. For each node we compute:
 *   disc[node] = discovery time (first visit)
 *   low[node]  = smallest disc reachable from node (via tree edges + back-edges)
 * When disc[node] === low[node], node is the root of an SCC; pop the stack
 * until we pop node — all those vertices form one SCC.
 *
 * Time: O(V + E)  |  Space: O(V)
 */

class Solution {
  tarjans(V, adj) {
    let disc = new Array(V).fill(-1);    // Discovery time; -1 = not visited
    let low = new Array(V).fill(-1);     // Lowest disc reachable from this node (incl. back-edges)
    let inStack = new Array(V).fill(false);  // True if node is in the current DFS path (on stack)
    let stack = [];   // Stack of nodes in current DFS path (used to collect SCC when we find root)
    let result = [];  // List of SCCs (each SCC is an array of vertices)
    let timer = 0;

    const dfs = (node) => {
      disc[node] = low[node] = timer++;  // First time visiting; set disc and low
      stack.push(node);
      inStack[node] = true;

      for (let neighbor of adj[node]) {
        if (disc[neighbor] === -1) {
          dfs(neighbor);
          low[node] = Math.min(low[node], low[neighbor]);  // Tree edge: propagate low from child
        }
        else if (inStack[neighbor]) {
          low[node] = Math.min(low[node], disc[neighbor]);  // Back-edge to ancestor; update low
        }
      }

      // If node is root of an SCC (no back-edge from its subtree to a node above it)
      if (disc[node] === low[node]) {
        let component = [];

        while (true) {
          let top = stack.pop();
          inStack[top] = false;
          component.push(top);
          if (top === node) break;  // Popped until we reached the SCC root
        }

        component.sort((a, b) => a - b);  // Sort vertices within this SCC
        result.push(component);
      }
    };

    for (let i = 0; i < V; i++) {
      if (disc[i] === -1) {
        dfs(i);
      }
    }

    // Sort SCCs lexicographically (by first differing vertex, then by size)
    result.sort((a, b) => {
      let len = Math.min(a.length, b.length);
      for (let i = 0; i < len; i++) {
        if (a[i] !== b[i]) {
          return a[i] - b[i];
        }
      }
      return a.length - b.length;
    });

    return result;
  }
}

let sol = new Solution();
let V = 5;
let adj = [[1], [2], [3], [4], [0]];  // Cycle 0->1->2->3->4->0; one SCC: {0,1,2,3,4}
console.log(sol.tarjans(V, adj));     // [[0, 1, 2, 3, 4]]
