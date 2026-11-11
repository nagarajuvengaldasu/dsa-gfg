/*
 * ========== PROBLEM: Count Strongly Connected Components (Kosaraju's) ==========
 *
 * Given a directed graph as an adjacency list adj, find the number of
 * Strongly Connected Components (SCCs). An SCC is a maximal set of
 * vertices such that every pair of vertices is reachable from each other.
 *
 * Input:  adj = adjacency list; adj[i] = list of outgoing neighbors of i
 *
 * Output: Number of SCCs in the graph.
 *
 * Approach: Kosaraju's algorithm (two-pass DFS).
 * 1) First DFS on original graph: push each vertex onto a stack when
 *    its DFS finishes (so stack has vertices in decreasing finish time).
 * 2) Build transpose graph (reverse all edges).
 * 3) Second DFS on transpose: pop from stack; each time we start DFS
 *    from an unvisited vertex, we discover one SCC. Count such starts.
 *
 * Time: O(V + E)  |  Space: O(V)
 */

class Solution {
  kosaraju(adj) {
    // let take the length for the graph
    let v = adj.length;
    // let take the visited array
    let visited = new Array(v).fill(false);
    // let take the stack
    let stack = []; // Fill in order of finish time (last finished at top after all DFS1)

    const dfs1 = (node) => {
      // let take the visited for the graph
      visited[node] = true;
      // let take the loop for the graph
      for (let neighbor of adj[node]) {
        if (!visited[neighbor]) {
          // let take the dfs for the graph
          dfs1(neighbor);
        }
      }
      // let take the push for the stack
      stack.push(node); // Push when DFS from this node finishes (all descendants done)
    };

    // let take the loop for the graph
    for (let i = 0; i < v; i++) {
      if (!visited[i]) {
        // let take the dfs for the graph
        dfs1(i);
      }
    }

    // let take the transpose for the graph
    // Transpose: reverse every edge (adj[i] -> j  becomes  transpose[j] -> i)
    let transpose = new Array(v).fill(0).map(() => []);
    // let take the loop for the graph
    for (let i = 0; i < v; i++) {
      // let take the loop for the graph
      for (let neighbor of adj[i]) {
        // let take the push for the transpose
        transpose[neighbor].push(i);
      }
    }

    // let take the visited for the graph
    visited.fill(false);
    // let take the scc count
    let sccCount = 0;

    const dfs2 = (node) => {
      // let take the visited for the graph
      visited[node] = true;
      // let take the loop for the graph
      for (let neighbor of transpose[node]) {
        if (!visited[neighbor]) {
          // let take the dfs for the graph
          dfs2(neighbor);
        }
      }
    };

    // Process in reverse finish order (pop from stack); each new DFS start = one SCC
    while (stack.length > 0) {
      // let take the node for the graph
      let node = stack.pop();
      // let take the condition for the graph
      if (!visited[node]) {
        // let take the dfs for the graph
        dfs2(node);
        // let take the scc count for the graph
        sccCount++;
      }
    }
    // let take the scc count for the graph
    return sccCount;
  }
}

let adj = [[1], [2], [0], [1]]; // 0->1, 1->2, 2->0 (cycle), 3->1; SCCs: {0,1,2}, {3}
let sol = new Solution();
// let take the console log for the graph
console.log(sol.kosaraju(adj)); // 2
