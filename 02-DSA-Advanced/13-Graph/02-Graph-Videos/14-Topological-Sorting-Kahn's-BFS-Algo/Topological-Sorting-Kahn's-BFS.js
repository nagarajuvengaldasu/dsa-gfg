/*
 * ========== PROBLEM STATEMENT ==========
 * TOPOLOGICAL SORTING (Kahn's BFS Algorithm)
 * Given a Directed Acyclic Graph (DAG), output vertices in topological order.
 * For edge u->v, u must appear before v in the order.
 *
 * Kahn's Algorithm:
 * 1) Store indegree of every vertex
 * 2) Create a Queue q
 * 3) Add all 0-indegree vertices to q
 * 4) While q is not empty:
 *    a) u = q.shift()
 *    b) Print u (add to topological order)
 *    c) For every adjacent v of u:
 *       (i) Reduce indegree of v by 1
 *       (ii) If indegree of v becomes 0, add v to q
 *
 * Time: O(V + E)  |  Space: O(V)
 */
//
class Graph {
  // constructor to initialize the graph
  constructor(v) {
    // initialize the adjacency list
    this.adj = [];
    // initialize the adjacency list with empty arrays
    for (let i = 0; i < v; i++) {
      this.adj[i] = [];
    }
  }
  // add an edge to the graph
  addEdge(u, v) {
    // add an edge from u to v
    this.adj[u].push(v); // Directed: u -> v only
  }
  // topological sort of the graph
  topologicalSort() {
    // get the number of vertices
    let v = this.adj.length;
    // initialize the indegree array
    let indegree = new Array(v).fill(0); // Step 1: Store indegree of every vertex
    // store the indegree of every vertex
    // for each vertex, store the indegree of every vertex
    for (let i = 0; i < v; i++) {
      for (let j of this.adj[i]) {
        // add the indegree of the vertex
        indegree[j]++;
      }
    }
    // initialize the queue
    let q = []; // Step 2: Create Queue
    for (let i = 0; i < v; i++) {
      // if the indegree of the vertex is 0, add it to the queue
      if (indegree[i] === 0) {
        q.push(i); // Step 3: Add all 0-indegree vertices to q
      }
    }

    // initialize the result array
    let result = [];
    // while the queue is not empty
    while (q.length > 0) {
      // Step 4: While q is not empty
      // get the vertex from the queue
      let u = q.shift(); // a) u = q.shift()
      // add the vertex to the result array
      result.push(u); // b) Print u (add to order)

      // for each adjacent vertex of the vertex
      for (let vNode of this.adj[u]) {
        // c) For every adjacent v of u
        // reduce the indegree of the vertex
        indegree[vNode]--; // (i) Reduce indegree of v by 1
        // if the indegree of the vertex is 0, add it to the queue
        if (indegree[vNode] === 0) {
          q.push(vNode); // (ii) If indegree becomes 0, add v to q
        }
      }
    }
    // return the result array
    return result;
  }
}

// Example 1: 3 vertices, 0->1, 0->2 → Output: 0 1 2
// initialize the graph
let g1 = new Graph(3);
// add an edge from 0 to 1
g1.addEdge(0, 1);
// add an edge from 0 to 2
g1.addEdge(0, 2);
// print the topological sort of the graph
console.log("Example 1:", g1.topologicalSort().join(" ")); // 0 1 2
