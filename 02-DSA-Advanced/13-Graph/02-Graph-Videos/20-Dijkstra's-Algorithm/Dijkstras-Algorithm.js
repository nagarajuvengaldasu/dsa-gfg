/*
 * ========== DIJKSTRA'S ALGORITHM ==========
 * Problem: Given a weighted graph and a source, find shortest distances
 * from source to all other vertices.
 *
 * Implementation (Dijkstra(s)):
 * 1) Create empty Priority Queue (Min Heap) pq
 * 2) dist[V] = {∞, ∞, ... ∞}
 * 3) dist[s] = 0
 * 4) Insert (dist[s], s) into pq
 * 5) while (pq.empty() == false):
 *    a) u = pq.extractMin()
 *    b) Relax all adjacent of u:
 *       if dist[v] > dist[u] + weight(u,v)  →  dist[v] = dist[u] + weight(u,v)
 *       push (dist[v], v) into pq
 *
 * Note: Does NOT work for negative weight edges.
 *
 * Time: O(E log V) with heap  |  Space: O(V)
 */

const INF = Number.MAX_SAFE_INTEGER;

// Min Heap - ordered by distance (key)
class MinHeap {
  // Initialize the heap
  constructor() {
    this.heap = []; // Initialize the heap as an empty array
  }

  // Push an item into the heap
  push(item) {
    this.heap.push(item); // Push the item into the heap
    this.bubbleUp(this.heap.length - 1); // Bubble up the item to maintain the heap property
  }

  // Pop the minimum item from the heap
  pop() {
    // If the heap is empty, return null
    if (this.heap.length === 0) return null;
    // If the heap has only one item, return it
    if (this.heap.length === 1) return this.heap.pop();
    // Get the minimum item from the heap

    const min = this.heap[0];
    this.heap[0] = this.heap.pop(); // Replace the minimum item with the last item
    this.bubbleDown(0); // Bubble down the item to maintain the heap property
    return min; // Return the minimum item
  }

  // Check if the heap is empty
  isEmpty() {
    // Return true if the heap is empty, false otherwise
    return this.heap.length === 0;
  }

  // Bubble up the item to maintain the heap property
  bubbleUp(i) {
    // While the item is not the root
    while (i > 0) {
      // Get the parent of the item
      const parent = Math.floor((i - 1) / 2);
      // If the item is greater than the parent, break
      if (this.heap[i].dist >= this.heap[parent].dist) break;
      // Swap the item with the parent
      [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
      // Update the item to the parent
      i = parent;
    }
  }

  // Bubble down the item to maintain the heap property
  bubbleDown(i) {
    // Get the length of the heap
    const n = this.heap.length;
    while (true) {
      // Initialize the smallest item to the current item
      let smallest = i;
      // Get the left child of the item
      const left = 2 * i + 1;
      // Get the right child of the item
      const right = 2 * i + 2;
      // If the left child is smaller than the current smallest item, update the smallest item
      if (left < n && this.heap[left].dist < this.heap[smallest].dist)
        // Update the smallest item to the left child
        smallest = left;
      // If the right child is smaller than the current smallest item, update the smallest item
      if (right < n && this.heap[right].dist < this.heap[smallest].dist)
        // Update the smallest item to the right child
        smallest = right;
      // If the smallest item is the current item, break
      if (smallest === i) break;
      // Swap the item with the smallest item
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      // Update the item to the smallest item
      i = smallest;
    }
  }
}

// Directed weighted graph - adjacency list
class Graph {
  // Initialize the graph
  constructor(V) {
    // Initialize the number of vertices
    this.V = V;
    // Initialize the adjacency list
    this.adj = [];
    // Initialize the adjacency list
    for (let i = 0; i < V; i++) this.adj[i] = [];
  }

  // Add an edge to the graph
  addEdge(u, v, weight) {
    // Add the edge to the adjacency list
    this.adj[u].push({ node: v, weight });
  }
}

function dijkstra(graph, source) {
  // Get the number of vertices
  const V = graph.V;
  // Initialize the distance array
  let dist = Array(V).fill(INF);
  dist[source] = 0;

  // Initialize the priority queue
  const pq = new MinHeap();
  // Push the source vertex into the priority queue
  pq.push({ dist: 0, vertex: source });

  // While the priority queue is not empty
  while (!pq.isEmpty()) {
    // Get the minimum item from the priority queue
    const { dist: d, vertex: u } = pq.pop();

    // Skip if we've already found a shorter path to u (stale entry)
    // If the distance to the vertex is greater than the distance to the source vertex, skip
    if (d > dist[u]) continue;

    // Relax all adjacent vertices of u
    // For each edge in the adjacency list of the vertex
    for (let edge of graph.adj[u]) {
      // Get the destination vertex of the edge
      const v = edge.node;
      // Get the weight of the edge
      const w = edge.weight;
      // If the distance to the destination vertex is greater than the distance to the source vertex plus the weight of the edge, update the distance to the destination vertex
      // Relax(u, v): if dist[v] > dist[u] + w(u,v) → dist[v] = dist[u] + w(u,v)
      if (dist[v] > dist[u] + w) {
        // Update the distance to the destination vertex
        dist[v] = dist[u] + w;
        // Push the destination vertex into the priority queue
        pq.push({ dist: dist[v], vertex: v });
      }
    }
  }
  // Return the distance array
  return dist;
}

// ========== Example 1: 4 nodes (A,B,C,D) - Source A ==========
// A->B:5, A->C:10, B->C:3, B->D:20, C->D:2
// O/P: A:0, B:5, C:8, D:10
console.log("=== Dijkstra - Example 1 (4 nodes, Source A) ===");
let g1 = new Graph(4); // A=0, B=1, C=2, D=3
g1.addEdge(0, 1, 5);
g1.addEdge(0, 2, 10);
g1.addEdge(1, 2, 3);
g1.addEdge(1, 3, 20);
g1.addEdge(2, 3, 2);

// Run Dijkstra's Algorithm
let dist1 = dijkstra(g1, 0);
// Get the labels of the vertices
const labels = "ABCDEFGHI";
// Print the shortest distances
console.log(
  "Shortest distances:",
  dist1.map((d, i) => `${labels[i]}:${d === INF ? "∞" : d}`).join(", "),
);
