/*
 * ========== PROBLEM STATEMENT ==========
 * Given a graph, find all the articulation points in the graph.
 *
 * ========== APPROACH ==========
 * 1. Build adjacency list
 * 2. Use DFS to find articulation points
 * 3. Return the articulation points
 */

class Solution {
  articulationPoints(V, edges) {
    // Step 1: Build adjacency list
    let adj = Array.from({ length: V }, () => []);
    // Step 2: Build adjacency list
    for (let [u, v] of edges) {
      // Step 2.1: Add the edge to the adjacency list
      adj[u].push(v);
      // Step 2.2: Add the edge to the adjacency list
      adj[v].push(u);
    }

    // Step 3: Initialize the discovery time, lowest reachable time, parent, visited, and articulation points
    let disc = new Array(V).fill(-1); // discovery time
    let low = new Array(V).fill(-1); // lowest reachable time
    let parent = new Array(V).fill(-1); // parent
    let visited = new Array(V).fill(false);
    let ap = new Array(V).fill(false); // articulation points array
    let timer = 0; // timer

    const dfs = (u) => {
      // Step 3.1: Mark the node as visited
      visited[u] = true;
      // Step 3.2: Set the discovery time and lowest reachable time
      disc[u] = low[u] = timer++;
      let childCount = 0; // number of children

      for (let v of adj[u]) {
        // Step 3.3: If the neighbor is not visited, then it is a child of u
        if (!visited[v]) {
          // Step 3.4: Increment the number of children
          childCount++;
          // Step 3.5: Set the parent of v to u
          parent[v] = u;
          // Step 3.6: Traverse the neighbor
          dfs(v);

          // Step 3.7: Update the lowest reachable time
          low[u] = Math.min(low[u], low[v]);

          // Step 3.8: If the node is the root and has more than one child, then it is an articulation point
          if (parent[u] === -1 && childCount > 1) {
            ap[u] = true;
          }

          // Step 3.9: If the node is not the root and the lowest reachable time of the neighbor is greater than or equal to the discovery time of the node, then it is an articulation point
          if (parent[u] !== -1 && low[v] >= disc[u]) {
            ap[u] = true;
          }
        } else if (v !== parent[u]) {
          // Step 3.10: If the neighbor is not the parent of the node, then it is a back edge
          // Back edge case
          low[u] = Math.min(low[u], disc[v]);
        }
      }
    };

    // Step 4: Traverse all the vertices
    // Handle disconnected graph
    for (let i = 0; i < V; i++) {
      // Step 4.1: If the vertex is not visited, then traverse it
      if (!visited[i]) {
        // Step 4.2: Traverse the vertex
        dfs(i);
      }
    }

    // Step 5: Store the articulation points
    let result = [];
    // Step 5.1: If the vertex is an articulation point, then store it
    for (let i = 0; i < V; i++) {
      // Step 5.2: If the vertex is an articulation point, then store it
      if (ap[i]) result.push(i);
    }

    // Step 6: If there are no articulation points, then return [-1]
    return result.length === 0 ? [-1] : result.sort((a, b) => a - b);
  }
}
let sol = new Solution();
let V = 5;
let edges = [
  [0, 1],
  [0, 2],
  [1, 2],
  [1, 3],
  [3, 4],
];
console.log(sol.articulationPoints(V, edges));
