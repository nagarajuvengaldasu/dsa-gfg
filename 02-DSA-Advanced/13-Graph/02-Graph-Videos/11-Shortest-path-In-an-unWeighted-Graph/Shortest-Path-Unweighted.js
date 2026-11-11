/*
 * ========== PROBLEM STATEMENT ==========
 * SHORTEST PATH IN AN UNWEIGHTED GRAPH
 * Given an unweighted graph and a source vertex, find the shortest distance
 * (number of edges) from source to every other vertex.
 *
 * Approach: BFS — first reach = shortest path in unweighted graph
 * Time: O(V + E)  |  Space: O(V)
 */

class Graph {
  constructor(v) {
    this.adj = [];
    for (let i = 0; i < v; i++) {
      this.adj[i] = [];
    }
  }
  addEdge(u, v) {
    this.adj[u].push(v);
    this.adj[v].push(u); // Undirected graph
  }
  shortestPath(source) {
    let v = this.adj.length;
    let dist = new Array(v).fill(Infinity); // Step 1: dist[i] = INF
    dist[source] = 0; // Step 2: dist[source] = 0
    let visited = new Array(v).fill(false); // Step 4: Visited array
    let q = []; // Step 3: Queue
    q.push(source); // Step 5: q.push(s)
    visited[source] = true; // Step 5: Visited[s] = true

    while (q.length > 0) {
      // Step 6: while q not empty
      let u = q.shift(); // u = q.pop()
      for (let i = 0; i < this.adj[u].length; i++) {
        let vNode = this.adj[u][i]; // adjacent v of u
        if (!visited[vNode]) {
          dist[vNode] = dist[u] + 1; // dist[v] = dist[u] + 1
          visited[vNode] = true;
          q.push(vNode);
        }
      }
    }
    return dist; // Step 7: Print/return dist[]
  }
}

// Example 1: 4 nodes (0,1,2,3), source=0
// Graph: 0-1, 1-2, 2-3, 0-2
// Output: [0, 1, 1, 2]
let g1 = new Graph(4);
g1.addEdge(0, 1);
g1.addEdge(1, 2);
g1.addEdge(2, 3);
g1.addEdge(0, 2);
console.log("Example 1:", g1.shortestPath(0).join(" ")); // 0 1 1 2
