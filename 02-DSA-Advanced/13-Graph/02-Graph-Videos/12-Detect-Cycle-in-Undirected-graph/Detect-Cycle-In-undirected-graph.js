// problem statement: Detect cycle in an undirected graph
// time complexity: O(V+E)
// space complexity: O(V)
// where V is the number of vertices and E is the number of edges
// where V is the number of vertices and E is the number of edges
class Graph {
  // constructor to initialize the graph
  constructor(v) {
    // initialize the adjacency list
    this.adj = new Array(v);
    // initialize the adjacency list with empty arrays
    for (let i = 0; i < v; i++) {
      // initialize the adjacency list with empty arrays
      this.adj[i] = new Array();
    }
  }
  // add an edge to the graph
  addEdge(u, v) {
    // add an edge from u to v
    this.adj[u].push(v);
    this.adj[v].push(u);
  }
  // check if there is a cycle in the graph
  isCycle() {
    // get the number of vertices
    let v = this.adj.length;
    // initialize the visited array
    let visited = new Array(v).fill(false);
    // check if there is a cycle in the graph
    for (let i = 0; i < v; i++) {
      // if the vertex is not visited
      if (!visited[i]) {
        // if there is a cycle in the graph
        if (this.DfsRecursive(i, -1, visited)) {
          return true;
        }
      }
      // if there is no cycle in the graph
      return false;
    }
  }
  // depth first search to check if there is a cycle in the graph
  DfsRecursive(s, parent, visited) {
    // mark the vertex as visited
    visited[s] = true;
    // get the adjacency list
    let adj = this.adj;
    // check if there is a cycle in the graph
    for (let i = 0; i < adj[s].length; i++) {
      // get the vertex
      let u = adj[s][i];
      // if the vertex is not visited
      if (visited[u] === false) {
        // if there is a cycle in the graph
        if (this.DfsRecursive(u, s, visited)) {
          return true;
        }
      }
      // if the vertex is not the parent
      else if (u !== parent) {
        // if there is a cycle in the graph
        return true;
      }
    }
    // if there is no cycle in the graph
    return false;
  }
}

let g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(1, 2);
g.addEdge(2, 3);
g.addEdge(3, 4);
g.addEdge(4, 0);
console.log(g.isCycle());
