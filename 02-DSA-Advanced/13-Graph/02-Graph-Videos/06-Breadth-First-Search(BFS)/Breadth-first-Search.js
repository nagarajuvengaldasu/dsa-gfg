// problem statement: Given a graph, print the breadth first search of the graph.
// time complexity: O(V+E)
// space complexity: O(V+E)
// where V is the number of vertices and E is the number of edges
// where V is the number of vertices and E is the number of edges
class Graph {
  constructor(v) {
    // initialize the adjacency list
    this.adj = [];
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
  bfs(s) {
    let adj = this.adj;
    // initialize the visited array
    let visited = new Array(adj.length).fill(false);
    // initialize the queue
    let q = [];
    // add the starting vertex to the queue
    q.push(s);
    visited[s] = true;
    // while the queue is not empty
    while (q.length > 0) {
      // remove the first vertex from the queue
      let u = q.shift();
      console.log(u);
      // for each vertex in the adjacency list
      for (let i = 0; i < adj[u].length; i++) {
        let v = adj[u][i];
        // if the vertex is not visited
        if (!visited[v]) {
          // mark the vertex as visited
          visited[v] = true;
          // add the vertex to the queue
          q.push(v);
        }
      }
    }
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
g.addEdge(3, 4);
// print the breadth first search of the graph
g.bfs(0); // Start BFS from vertex 0
