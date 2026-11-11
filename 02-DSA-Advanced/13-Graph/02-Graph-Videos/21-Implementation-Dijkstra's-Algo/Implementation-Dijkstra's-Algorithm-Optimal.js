/*
 * ========== DIJKSTRA'S ALGORITHM - OPTIMAL APPROACH ==========
 * Adjacency List + Min Heap (Priority Queue)
 *
 * Time: O((V+E) log V)  |  Space: O(V)
 *
 * Note: Does NOT work for negative weight edges.
 */

const INF = Number.MAX_SAFE_INTEGER;

// Min Heap - ordered by distance
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
      if (this.heap[i].dist >= this.heap[parent].dist) break;
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
      if (left < n && this.heap[left].dist < this.heap[smallest].dist)
        smallest = left;
      if (right < n && this.heap[right].dist < this.heap[smallest].dist)
        smallest = right;
      if (smallest === i) break;
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      i = smallest;
    }
  }
}

// Directed weighted graph - adjacency list
class Graph {
  constructor(V) {
    this.V = V;
    this.adj = [];
    for (let i = 0; i < V; i++) this.adj[i] = [];
  }

  addEdge(u, v, weight) {
    this.adj[u].push({ node: v, weight });
  }
}

function dijkstraOptimal(graph, source) {
  const V = graph.V;
  const dist = Array(V).fill(INF);
  dist[source] = 0;

  const pq = new MinHeap();
  pq.push({ dist: 0, vertex: source });

  while (!pq.isEmpty()) {
    const { dist: d, vertex: u } = pq.pop();

    if (d > dist[u]) continue;

    for (let edge of graph.adj[u]) {
      const v = edge.node;
      const w = edge.weight;
      if (dist[v] > dist[u] + w) {
        dist[v] = dist[u] + w;
        pq.push({ dist: dist[v], vertex: v });
      }
    }
  }

  return dist;
}

// ========== Example ==========
// 0→1:50, 0→2:100, 1→2:30, 1→3:200, 2→3:20
// Expected: [0, 50, 80, 100]

const g = new Graph(4);
g.addEdge(0, 1, 50);
g.addEdge(0, 2, 100);
g.addEdge(1, 2, 30);
g.addEdge(1, 3, 200);
g.addEdge(2, 3, 20);

console.log("=== Dijkstra Optimal (O((V+E) log V)) ===");
let dist = dijkstraOptimal(g, 0);
console.log(
  "Shortest distances:",
  dist.map((d, i) => `${i}:${d === INF ? "∞" : d}`).join(", ")
);
