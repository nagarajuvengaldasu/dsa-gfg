/*
 * ========== PROBLEM: Dijkstra's Algorithm ==========
 *
 * Given a weighted undirected graph with V vertices and a list of edges
 * (u, v, w), find the shortest distance from source vertex src to every
 * other vertex. Edge weights are non-negative.
 *
 * Input:  V     = number of vertices (0 to V-1)
 *         edges = array of [u, v, w] (undirected edge between u and v with weight w)
 *         src   = source vertex
 *
 * Output: Array dist where dist[i] = shortest distance from src to vertex i.
 *
 * Approach: Dijkstra with min-heap (priority queue). Start with dist[src]=0,
 * push [0, src] into heap. Repeatedly pop the vertex with smallest distance;
 * for each neighbor, if dist[u] + weight < dist[neighbor], update dist and
 * push [newDist, neighbor]. Skip heap entries that are outdated (stale).
 *
 * Time: O((V + E) log V)  |  Space: O(V)
 * Note: Does not work for graphs with negative edge weights.
 */

class MinHeap {
  constructor() {
    // let take the heap
    this.heap = []; // Each element is [distance, node] for Dijkstra
  }

  push(val) {
    // let take the push for the value
    this.heap.push(val);
    // let take the bubble up for the value
    this.bubbleUp(); // Restore min-heap property (smallest at root)
  }

  bubbleUp() {
    // let take the index
    let i = this.heap.length - 1;
    // let take the loop for the index
    while (i > 0) {
      // let take the parent index
      let p = Math.floor((i - 1) / 2); // Parent index
      // let take the condition for the parent index
      if (this.heap[p][0] <= this.heap[i][0]) break; // Parent is smaller or equal; stop
      // let take the swap for the parent and index
      [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]]; // Swap with parent
      i = p;
    }
  }

  pop() {
    // let take the condition for the heap length
    if (this.heap.length === 1) return this.heap.pop();
    // let take the top element

    let top = this.heap[0]; // Min element (smallest distance)
    // let take the move last to root
    this.heap[0] = this.heap.pop(); // Move last to root
    // let take the bubble down for the heap
    this.bubbleDown(); // Restore min-heap property
    return top;
  }

  bubbleDown() {
    // let take the index
    let i = 0;
    // let take the length of the heap
    let n = this.heap.length;

    // let take the loop for the index
    while (true) {
      // let take the left index
      let left = 2 * i + 1;
      // let take the right index
      let right = 2 * i + 2;
      // let take the smallest index
      let smallest = i;

      // let take the condition for the left index
      if (left < n && this.heap[left][0] < this.heap[smallest][0]) {
        smallest = left;
      }

      // let take the condition for the right index
      if (right < n && this.heap[right][0] < this.heap[smallest][0]) {
        smallest = right;
      }

      // let take the condition for the smallest index
      if (smallest === i) break; // Heap property satisfied
      // let take the swap for the index and smallest
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      // let take the index for the smallest
      i = smallest;
    }
  }

  isEmpty() {
    // let take the condition for the heap length
    return this.heap.length === 0;
  }
}

class Solution {
  dijkstra(V, edges, src) {
    // Build adjacency list: adj[u] = list of [neighbor, weight]
    let adj = Array.from({ length: V }, () => []);
    // let take the loop for the edges
    for (let [u, v, w] of edges) {
      // let take the adjacency list for the vertex
      adj[u].push([v, w]);
      // let take the adjacency list for the vertex
      adj[v].push([u, w]); // Undirected: add both directions
    }

    // let take the distance array
    let dist = new Array(V).fill(Infinity); // Shortest distance from src to each vertex
    // let take the distance for the source vertex
    dist[src] = 0;

    // let take the heap
    let heap = new MinHeap();
    // let take the push for the source vertex
    heap.push([0, src]); // Start with source at distance 0

    while (!heap.isEmpty()) {
      let [currDist, node] = heap.pop(); // Get vertex with smallest current distance

      // Skip if we already found a shorter path to this node (stale heap entry)
      if (currDist > dist[node]) continue;

      // let take the loop for the adjacency list
      for (let [neighbor, weight] of adj[node]) {
        // let take the new distance
        let newDist = currDist + weight; // Relaxation: try path src -> node -> neighbor

        // let take the condition for the new distance
        if (newDist < dist[neighbor]) {
          // let take the distance for the neighbor
          dist[neighbor] = newDist; // Update shortest distance to neighbor
          // let take the push for the neighbor
          heap.push([newDist, neighbor]); // Push updated distance (may have duplicates; we skip stale in pop)
        }
      }
    }

    // let take the return for the distance
    return dist;
  }
}

// let take the size of the graph
let V = 5;
// let take the edges
let edges = [
  [0, 1, 10],
  [0, 2, 3],
  [1, 2, 1],
  [1, 3, 2],
  [2, 1, 4],
  [2, 3, 8],
  [2, 4, 2],
  [3, 4, 7],
];
// let take the source vertex
let src = 0;
// let take the solution
let sol = new Solution();
// let take the console log for the dijkstra algorithm
console.log(sol.dijkstra(V, edges, src));
