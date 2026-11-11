/*
 * ========== PROBLEM: Topological Sort (Kahn's Algorithm) ==========
 *
 * Given a directed acyclic graph (DAG) with V vertices and a list of
 * directed edges, return a linear ordering of vertices such that for
 * every directed edge (u, v), u comes before v in the ordering.
 *
 * Input:  v     = number of vertices (0 to v-1)
 *         edges = array of [u, v] meaning directed edge from u to v
 *
 * Output: Array of vertices in topological order (or valid order if
 *         graph has a cycle, length may be < V).
 *
 * Approach: Kahn's algorithm (BFS + indegree).
 * 1) Compute indegree of each vertex (number of edges coming in).
 * 2) Enqueue all vertices with indegree 0.
 * 3) Dequeue a vertex, add to result; for each neighbor, decrement
 *    indegree; if indegree becomes 0, enqueue it.
 * 4) Repeat until queue is empty.
 *
 * Time: O(V + E)  |  Space: O(V)
 */

class Solution {
  topologicalSort(v, edges) {
    // adj[i] = list of vertices that i has an edge to (outgoing neighbors)
    let adj = Array.from({ length: v }, () => []);
    // indegree[i] = count of edges that point into vertex i
    let indegree = new Array(v).fill(0);

    // Build graph and indegree: for each edge u -> v
    for (let [u, v] of edges) {
      adj[u].push(v);   // v is an outgoing neighbor of u
      indegree[v]++;    // v has one more incoming edge
    }

    // Queue holds all vertices that currently have no remaining dependencies (indegree 0)
    let queue = [];
    for (let i = 0; i < v; i++) {
      if (indegree[i] === 0) {
        queue.push(i);  // Start with all "source" nodes (no incoming edges)
      }
    }

    // result will hold vertices in topological order
    let result = [];

    // Process nodes in BFS order: when we take a node, we "remove" it and update dependents
    while (queue.length > 0) {
      let node = queue.shift();  // Dequeue next node with no dependencies
      result.push(node);         // Append to topological order

      // For each vertex that had an edge from 'node', we've "satisfied" one dependency
      for (let neighbor of adj[node]) {
        indegree[neighbor]--;              // One less incoming edge for neighbor
        if (indegree[neighbor] === 0) {
          queue.push(neighbor);            // Neighbor is now ready; add to queue
        }
      }
    }

    return result;  // If graph is DAG, result.length === v; else cycle exists and result may be shorter
  }
}

let sol = new Solution();
let v = 5;
let edges = [
  [0, 1],
  [0, 2],
  [1, 3],
  [1, 4],
  [2, 3],
  [2, 4],
];
console.log(sol.topologicalSort(v, edges));
