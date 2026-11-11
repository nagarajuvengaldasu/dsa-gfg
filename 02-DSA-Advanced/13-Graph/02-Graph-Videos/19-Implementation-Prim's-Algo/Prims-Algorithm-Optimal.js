/*
 * ========== PRIM'S ALGORITHM - OPTIMAL IMPLEMENTATION ==========
 * Uses Adjacency List + Min Heap for O(E log V) complexity.
 *
 * Optimization over basic:
 * - Adjacency List: Efficient for sparse graphs (only store existing edges)
 * - Min Heap: Find min key vertex in O(log V) instead of O(V) linear scan
 *
 * Algorithm:
 * 1) key[V] = {INF}, key[0] = 0, mSet[V] = {false}
 * 2) Insert (key[0], 0) into min heap
 * 3) While heap not empty:
 *    a) Extract min (key[u], u) from heap
 *    b) If u already in mSet, skip
 *    c) mSet[u] = true, res += key[u]
 *    d) For each adjacent v of u (from adj list):
 *       if !mSet[v] && weight < key[v]:
 *         key[v] = weight, insert (key[v], v) into heap
 * 4) return res
 *
 * Time: O(E log V)  |  Space: O(V)
 */

// Min Heap for { key, vertex } - ordered by key
class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(item) {
    this.heap.push(item);
    this.bubbleUp(this.heap.length - 1);
  }

  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);
    return min;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  bubbleUp(i) {
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (this.heap[i].key >= this.heap[parent].key) break;
      [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
      i = parent;
    }
  }

  bubbleDown(i) {
    const n = this.heap.length;
    while (true) {
      let smallest = i;
      const left = 2 * i + 1;
      const right = 2 * i + 2;
      if (left < n && this.heap[left].key < this.heap[smallest].key)
        smallest = left;
      if (right < n && this.heap[right].key < this.heap[smallest].key)
        smallest = right;
      if (smallest === i) break;
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      i = smallest;
    }
  }
}

// Graph with adjacency list: adj[u] = [{ node: v, weight: w }, ...]
class Graph {
  constructor(V) {
    this.V = V;
    this.adj = [];
    for (let i = 0; i < V; i++) this.adj[i] = [];
  }

  addEdge(u, v, weight) {
    this.adj[u].push({ node: v, weight });
    this.adj[v].push({ node: u, weight });
  }
}

function primMSTOptimal(graph, start = 0) {
  const V = graph.V;
  const INF = Number.POSITIVE_INFINITY;

  let key = Array(V).fill(INF);
  let mSet = Array(V).fill(false);
  key[start] = 0;
  let res = 0;

  const heap = new MinHeap();
  heap.push({ key: 0, vertex: start });

  while (!heap.isEmpty()) {
    const { key: k, vertex: u } = heap.pop();

    if (mSet[u]) continue; // Already in MST, skip
    mSet[u] = true;
    res += k;

    // Update adjacent vertices (from adjacency list)
    for (let edge of graph.adj[u]) {
      const v = edge.node;
      const weight = edge.weight;
      if (!mSet[v] && weight < key[v]) {
        key[v] = weight;
        heap.push({ key: weight, vertex: v });
      }
    }
  }
  return res;
}

// ========== Example 1: Whiteboard (4 nodes) - res = 28 ==========
console.log("=== Prim's Optimal (Adj List + Heap) - Example 1 ===");
let g1 = new Graph(4);
g1.addEdge(0, 1, 5);
g1.addEdge(0, 2, 8);
g1.addEdge(1, 2, 10);
g1.addEdge(1, 3, 15);
g1.addEdge(2, 3, 20);
console.log("MST Total Weight:", primMSTOptimal(g1)); // 28

// ========== Example 2: 5 nodes - res = 16 ==========
console.log("\n=== Prim's Optimal - Example 2 (5 nodes) ===");
let g2 = new Graph(5);
g2.addEdge(0, 1, 2);
g2.addEdge(0, 3, 6);
g2.addEdge(1, 2, 3);
g2.addEdge(1, 3, 8);
g2.addEdge(1, 4, 5);
g2.addEdge(2, 4, 7);
console.log("MST Total Weight:", primMSTOptimal(g2)); // 16
console.log("MSTSet: {0, 1, 2, 4, 3} (all vertices connected)");
