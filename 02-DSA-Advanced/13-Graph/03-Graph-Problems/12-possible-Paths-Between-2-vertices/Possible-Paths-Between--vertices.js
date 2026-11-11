/*
 * ========== PROBLEM: Count Possible Paths Between Two Vertices ==========
 *
 * Given an undirected graph with V vertices, adjacency list adj, a
 * source vertex and a destination vertex, count the number of simple
 * paths from source to destination. A simple path does not repeat any
 * vertex.
 *
 * Input:  V          = number of vertices (0 to V-1)
 *         adj        = adjacency list; adj[i] = neighbors of i
 *         Source     = starting vertex
 *         Destination = target vertex
 *
 * Output: Number of distinct simple paths from Source to Destination.
 *
 * Approach: DFS with backtracking. From current node: if it is
 * Destination, increment count and return. Otherwise mark node
 * visited, recurse on each unvisited neighbor, then unmark (backtrack)
 * so other paths can use this node. This explores every simple path.
 *
 * Time: O((V-1)!) in worst case  |  Space: O(V)
 */

class Solution {
  countpaths(V, adj, Source, Destination) {
    // let take the count
    let count = 0;
    // let take the visited
    let visited = new Array(V).fill(false);

    const dfs = (node) => {
      // let take the condition for the node
          if (node === Destination) {
        // let take the count
        count++;  // Reached destination; one more path found
        return;
      }

      visited[node] = true;  // Mark current node so we don't reuse it in this path

      for (let neighbor of adj[node]) {
        // let take the condition for the neighbor
        if (!visited[neighbor]) {
          // let take the dfs for the neighbor
          dfs(neighbor);  // Recurse into unvisited neighbor
        }
      }

      visited[node] = false;  // Backtrack: unmark so other paths can use this node
    };

    // let take the dfs for the source
      dfs(Source);
    // let take the count
    return count;
  }
}

let V = 5;
let adj = [
  [1, 2],
  [0, 3],
  [0, 4],
  [1, 4],
  [2, 3],
];
let Source = 0;
let Destination = 3;
let sol = new Solution();
console.log(sol.countpaths(V, adj, Source, Destination));
