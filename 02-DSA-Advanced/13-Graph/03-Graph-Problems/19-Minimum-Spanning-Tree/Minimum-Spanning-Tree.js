/*
 * ========== PROBLEM: Minimum Spanning Tree (Prim's Algorithm) ==========
 *
 * Given a connected weighted undirected graph with V vertices and a list
 * of edges (u, v, w), find the total weight of a Minimum Spanning Tree (MST).
 * An MST is a subset of edges that connects all vertices with minimum
 * total edge weight and no cycles.
 *
 * Input:  V     = number of vertices (0 to V-1)
 *         edges = array of [u, v, w] (undirected edge with weight w)
 *
 * Output: Total weight of the MST.
 *
 * Approach: Prim's algorithm. Start from vertex 0 (weight 0). Maintain a
 * min-heap of [weight, node] for edges from the current "MST set" to
 * unvisited nodes. Repeatedly pop the minimum-weight edge to an unvisited
 * node; add that node to the MST (add weight to total), mark visited,
 * and push all its edges to unvisited neighbors. Stop when V vertices
 * are in the MST.
 *
 * Time: O(E log V)  |  Space: O(V)
 */

class Solution {
  spanningTree(V, edges) {
    // Build adjacency list: adj[u] = list of [neighbor, weight]
    let adj = Array.from({ length: V }, () => []);
    // let take the loop for the edges
    for (let [u, v, w] of edges) {
      // let take the push for the adjacency list
      adj[u].push([v, w]);
      // let take the push for the adjacency list
      adj[v].push([u, w]); // Undirected
    }

    // let take the visited array
    let visited = new Array(V).fill(false);
    // let take the heap
    let heap = []; // Min-heap of [weight, node]; we add edges to unvisited nodes

    const push = (val) => {
      // let take the push for the heap
      heap.push(val);
      // let take the index for the heap
      let i = heap.length - 1;
      while (i > 0) {
        // let take the parent for the heap
        let p = Math.floor((i - 1) / 2);
        // let take the condition for the heap
        if (heap[p][0] <= heap[i][0]) break;
        // let take the swap for the heap
        [heap[p], heap[i]] = [heap[i], heap[p]];
        i = p;
      }
    };

    const pop = () => {
      // let take the condition for the heap
      if (heap.length === 1) {
        // let take the pop for the heap
        return heap.pop();
      }
      // let take the top for the heap

      let top = heap[0];
      // let take the pop for the heap
      heap[0] = heap.pop();
      // let take the index for the heap

      let i = 0;
      while (true) {
        // let take the left for the heap
        let left = 2 * i + 1;
        // let take the right for the heap
        let right = 2 * i + 2;
        // let take the smallest for the heap
        let smallest = i;
        // let take the condition for the heap

        if (left < heap.length && heap[left][0] < heap[smallest][0]) {
          // let take the smallest for the heap
          smallest = left;
        }

        if (right < heap.length && heap[right][0] < heap[smallest][0]) {
          // let take the smallest for the heap
          smallest = right;
        }

        // let take the condition for the heap
        if (smallest === i) break;
        // let take the swap for the heap

        [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
        // let take the index for the heap
        i = smallest;
      }

      return top;
    };

    // Start from node 0 with "edge" weight 0 (so we add node 0 to MST with cost 0)
    push([0, 0]); // [weight, node]

    // let take the mst weight
    let mstWeight = 0;
    // let take the count for the mst
    let count = 0; // Number of vertices added to MST

    while (heap.length > 0 && count < V) {
      // let take the weight and node for the mst
      let [weight, node] = pop();
      // let take the condition for the mst

      if (visited[node]) continue; // Skip if already in MST (stale heap entry)
      // let take the visited for the mst
      visited[node] = true; // Add node to MST
      mstWeight += weight; // Add edge weight (0 for first node)
      count++;
      // let take the count for the mst

      // Push all edges from this node to unvisited neighbors (candidates for next MST edge)
      for (let [neighbor, w] of adj[node]) {
        // let take the condition for the mst
        if (!visited[neighbor]) {
          // let take the push for the mst
          push([w, neighbor]);
        }
      }
    }

    // let take the mst weight
    return mstWeight;
  }
}

let V = 5;
let edges = [
  [0, 1, 2],
  [0, 3, 6],
  [1, 2, 3],
  [1, 3, 8],
  [1, 4, 5],
  [2, 4, 7],
  [3, 4, 9],
];
let sol = new Solution();
console.log(sol.spanningTree(V, edges)); // 16 (e.g. edges 0-1, 1-2, 1-4, 0-3 or similar)
