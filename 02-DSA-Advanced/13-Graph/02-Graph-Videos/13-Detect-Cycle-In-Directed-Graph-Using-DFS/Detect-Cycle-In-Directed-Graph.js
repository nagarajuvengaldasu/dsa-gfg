// problem statement: Detect cycle in a directed graph
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
    // add an edge from v to u
    this.adj[v].push(u);
  }
  // depth first search to check if there is a cycle in the graph
  DfsRecursive(s, visited, aset) {
    // mark the vertex as visited
    visited[s] = true;
    // mark the vertex as in the current path
    aset[s] = true;
    // get the adjacency list
    let adj = this.adj;
    // check if there is a cycle in the graph
    for (let i = 0; i < adj[s].length; i++) {
      // get the vertex
      let u = adj[s][i];
      // if the vertex is not visited
      if (!visited[u]) {
        // if there is a cycle in the graph
        if (this.DfsRecursive(u, visited, aset)) {
          return true;
        }
      }
      // if the vertex is in the current path
      else if (aset[u]) {
        // if there is a cycle in the graph
        return true;
      }
    }
    // mark the vertex as not in the current path
    aset[s] = false;
    // if there is no cycle in the graph
    return false;
  }
  // check if there is a cycle in the graph
  isCycleDir() {
    // get the number of vertices
    let v = this.adj.length;
    // initialize the visited array
    let visited = new Array(v).fill(false);
    // initialize the array to check if the vertex is in the current path
    let aset = new Array(v).fill(false);
    // check if there is a cycle in the graph
    for (let i = 0; i < v; i++) {
      // if the vertex is not visited
      if (!visited[i]) {
        // if there is a cycle in the graph
        if (this.DfsRecursive(i, visited, aset)) {
          return true;
        }
      }
    }
    // if there is no cycle in the graph
    return false;
  }
}
// Example 1: 4 nodes (0,1,2,3), source=0
// Graph: 0-1, 1-2, 2-3, 0-2
// Output: [0, 1, 1, 2]
let g = new Graph(4);
// add an edge from 0 to 1
g.addEdge(0, 1);
// add an edge from 1 to 2
g.addEdge(1, 2);
// add an edge from 2 to 3
g.addEdge(2, 3);
// add an edge from 3 to 0
g.addEdge(3, 0);
// print if there is a cycle in the graph
console.log(g.isCycleDir());
