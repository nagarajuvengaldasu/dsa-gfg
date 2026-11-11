/*
 * ========== PROBLEM: Level of Nodes ==========
 *
 * Given an undirected graph with V vertices, adjacency list adj, and a
 * target vertex X, find the level of node X. The level of a node is
 * the shortest distance (number of edges) from vertex 0 to that node.
 *
 * Vertex 0 is the source (level 0). If X is unreachable from 0,
 * return -1.
 *
 * Input:  V   = number of vertices (0 to V-1)
 *         adj = adjacency list; adj[i] = neighbors of i
 *         X   = target vertex whose level we need
 *
 * Output: Level (shortest distance from 0 to X), or -1 if unreachable.
 *
 * Approach: BFS from vertex 0. Queue stores [node, level]. When we
 * dequeue a node, if it equals X we return its level. Otherwise
 * enqueue unvisited neighbors with level + 1. BFS gives shortest path.
 *
 * Time: O(V + E)  |  Space: O(V)
 */

class Solution {
  levelOfNodes(V, adj, X) {
    // let take the visited
    let visited = new Array(V).fill(false);
    // let take the queue
    let queue = [];

    // let take the queue for the vertex 0
    queue.push([0, 0]);   // Start from vertex 0 with level 0
    // let take the visited for the vertex 0
    visited[0] = true;

    // let take the loop for the queue
    while (queue.length > 0) {
      // let take the node and level
      let [node, level] = queue.shift();  // Dequeue (node, its level)

      // let take the condition for the node
      if (node === X) {
        // let take the level
        return level;  // Found target; its level is the shortest distance
      }

      // let take the loop for the neighbors
      for (let neighbor of adj[node]) {
        // let take the condition for the neighbor
        if (!visited[neighbor]) {
          // let take the visited for the neighbor
          visited[neighbor] = true;
          // let take the queue for the neighbor
          queue.push([neighbor, level + 1]);  // Neighbor is one edge away
        }
      }
    }
    // let take the level
    return -1;  // X not reachable from 0
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
let X = 3;
let sol = new Solution();
console.log(sol.levelOfNodes(V, adj, X));
