// problem statement: Given a graph, print the depth first search of the graph.
// time complexity: O(V+E)
// space complexity: O(V+E)
// where V is the number of vertices and E is the number of edges
// where V is the number of vertices and E is the number of edges
class Graph {
  constructor(v) {
    // initialize the adjacency list
    this.adj = [];
    // initialize the adjacency list with empty arrays
    for (let i = 0; i < v; i++) {
      // initialize the adjacency list with empty arrays
      this.adj[i] = [];
    }
  }
  addEdge(u, v) {
    // add the edge to the adjacency list
    this.adj[u].push(v);
    // add the edge to the adjacency list
    this.adj[v].push(u);
  }
  DfsRecursive(s, visited) {
    // mark the vertex as visited
    visited[s] = true;
    // print the vertex
    // console.log(s);
    // get the adjacency list
    let adj = this.adj;
    // for each vertex in the adjacency list
    for (let i = 0; i < adj[s].length; i++) {
      let u = adj[s][i];
      // if the vertex is not visited
      if (visited[u] === false) {
        // call the dfsRecursive function
        this.DfsRecursive(u, visited);
      }
    }
  }
  DFS() {
    // initialize the count
    let count = 0;
    // get the number of vertices
    let v = this.adj.length;
    // initialize the visited array
    let visited = new Array(v).fill(false);
    // for each vertex in the adjacency list
    for (let i = 0; i < v; i++) {
      // if the vertex is not visited
      if (!visited[i]) {
        // call the dfsRecursive function
        this.DfsRecursive(i, visited);
        // increment the count
        count++;
      }
    }
    // return the count
    return count;
  }
}
// create a new graph
let g = new Graph(5);
// add an edge to the graph
g.addEdge(0, 1);
// add an edge to the graph
g.addEdge(0, 2);
// add an edge to the graph
g.addEdge(1, 2);
// add an edge to the graph
g.addEdge(1, 3);
// add an edge to the graph
g.addEdge(2, 4);
// add an edge to the graph
g.addEdge(3, 4);
// print the depth first search of the graph
console.log(g.DFS());
