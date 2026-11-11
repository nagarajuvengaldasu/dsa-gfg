/*
 * ========== PROBLEM STATEMENT ==========
 * SHORTEST PATH IN A DAG (Directed Acyclic Graph)
 * Given a weighted DAG and a source vertex, find shortest distances from
 * the source to all other vertices.
 *
 * Idea: Process vertices in topological order. For each vertex u, relax
 * all outgoing edges to neighbors v. Since we process in topological order,
 * when we reach u, we've already processed all possible paths to u.
 *
 * Algorithm (ShortestPath(adj, s)):
 * 1) Initialize dist[V] = {INF, INF, ..., INF}
 * 2) dist[s] = 0
 * 3) Find a topological sort of the graph
 * 4) For every vertex u in the topological sort:
 *    a) For every adjacent v of u:
 *       if dist[v] > dist[u] + weight(u, v):
 *         dist[v] = dist[u] + weight(u, v)
 *
 * Time: O(V + E)  |  Space: O(V)
 */

// INF is a constant representing infinity
const INF = Number.MAX_SAFE_INTEGER;

// WeightedGraph class represents a weighted directed graph
class WeightedGraph {
  // Constructor initializes the graph with v vertices
  constructor(v) {
    // Initialize adjacency list as an array of empty arrays
    this.adj = [];
    // Initialize each vertex's adjacency list as an empty array
    for (let i = 0; i < v; i++) {
      this.adj[i] = []; // Each entry: { node, weight } // node is the destination vertex and weight is the weight of the edge
    }
  }

  // addEdge method adds an edge to the graph
  addEdge(u, v, weight) {
    // Add the edge to the adjacency list of the source vertex
    // The edge is represented as an object with node (destination vertex) and weight (edge weight)
    this.adj[u].push({ node: v, weight });
  }

  // Topological sort using DFS (post-order push to stack)
  topologicalSort() {
    // Get the number of vertices in the graph
    let v = this.adj.length;
    // Initialize visited array to keep track of visited vertices
    let visited = new Array(v).fill(false);
    // Initialize stack to store vertices in topological order
    let st = []; // stack is a LIFO data structure

    // dfs function is a helper function to perform DFS and store the vertices in topological order
    const dfs = (u, stack) => {
      // Mark the current vertex as visited
      visited[u] = true;
      // Traverse all the edges of the current vertex
      for (let edge of this.adj[u]) {
        // If the destination vertex is not visited, then recursively call the dfs function
        if (!visited[edge.node]) {
          // If the destination vertex is not visited, then recursively call the dfs function
          dfs(edge.node, stack); // stack is the stack of vertices in topological order
        }
      }
      // Push the current vertex to the stack
      stack.push(u);
    };
    // Traverse all the vertices in the graph
    for (let i = 0; i < v; i++) {
      // If the vertex is not visited, then recursively call the dfs function
      if (!visited[i]) dfs(i, st); // stack is the stack of vertices in topological order
    }

    let result = []; // result is the array of vertices in topological order
    // Pop the vertices from the stack and push them to the result array
    while (st.length > 0) result.push(st.pop());
    return result;
  }

  // shortestPath function finds the shortest path from the source vertex to all other vertices
  shortestPath(source) {
    // Get the number of vertices in the graph
    let v = this.adj.length;
    // Initialize dist array to store the shortest distance from the source vertex to all other vertices
    let dist = new Array(v).fill(INF);

    // Step 1: Initialize dist[V] = INF
    // Step 2: dist[s] = 0
    dist[source] = 0;
    // Get the topological order of the vertices
    let topoOrder = this.topologicalSort();
    // For every u in topological order, relax edges to neighbors
    for (let u of topoOrder) {
      // If the vertex is unreachable, then skip it
      if (dist[u] === INF) continue; // Skip unreachable vertices
      // Traverse all the edges of the current vertex
      for (let edge of this.adj[u]) {
        // Get the destination vertex and weight of the edge
        let vNode = edge.node;
        // Get the weight of the edge
        let weight = edge.weight;
        // Relaxation: if shorter path found, update
        if (dist[vNode] > dist[u] + weight) {
          // Update the shortest distance to the destination vertex
          dist[vNode] = dist[u] + weight;
        }
      }
    }
    return dist;
  }
}

// Example 1 from whiteboard: 4 nodes, source = 1
// Graph: 0->1(1), 1->2(3), 1->3(2), 2->3(4)
// Expected: [INF, 0, 3, 2]
console.log("=== Example 1 (Source: 1) ===");
let g1 = new WeightedGraph(4);
g1.addEdge(0, 1, 1);
g1.addEdge(1, 2, 3);
g1.addEdge(1, 3, 2);
g1.addEdge(2, 3, 4);
let dist1 = g1.shortestPath(1);
console.log("Topological Sort:", g1.topologicalSort());
console.log(
  "Shortest distances:",
  dist1.map((d) => (d === INF ? "INF" : d)),
); // [INF, 0, 3, 2]
