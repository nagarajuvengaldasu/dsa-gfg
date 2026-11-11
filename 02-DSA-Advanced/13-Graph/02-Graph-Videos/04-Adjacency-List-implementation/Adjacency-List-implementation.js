// problem statement: Given a graph, print the adjacency list of the graph.
// time complexity: O(V+E)
// space complexity: O(V+E)
// where V is the number of vertices and E is the number of edges
// where V is the number of vertices and E is the number of edges
class Graph {
  // constructor to initialize the graph
  constructor(v) {
    // initialize the adjacency list
    this.adj = [];
    // initialize the adjacency list with empty arrays
    for (let i = 0; i < v; i++) {
      // initialize the adjacency list with empty arrays
      this.adj[i] = [];
      // add the edge to the adjacency list
    }
  }
  // function to add an edge to the graph
  addEdge(u, v) {
    // add the edge to the adjacency list
    this.adj[u].push(v);
    // add the edge to the adjacency list
    this.adj[v].push(u);
    // add the edge to the adjacency list
  }
  // function to print the adjacency list of the graph
  printGraph() {
    // print the adjacency list of the graph
    let adj = this.adj;
    // print the adjacency list of the graph
    for (let i = 0; i < adj.length; i++) {
      // print the adjacency list of the graph
      console.log(i + " -> " + adj[i].join(" "));
    }
    // print the adjacency list of the graph
  }
}
// create a new graph
let g = new Graph(4);
// add an edge to the graph
g.addEdge(0, 1);
// add an edge to the graph
g.addEdge(0, 2);
// add an edge to the graph
g.addEdge(1, 2);
// add an edge to the graph
g.addEdge(1, 3);
// print the adjacency list of the graph
g.printGraph();
