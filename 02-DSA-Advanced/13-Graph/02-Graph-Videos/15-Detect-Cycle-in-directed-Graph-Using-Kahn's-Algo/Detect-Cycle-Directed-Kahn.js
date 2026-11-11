/*
 * ========== PROBLEM STATEMENT ==========
 * CYCLE DETECTION IN DIRECTED GRAPH (Kahn's Algorithm)
 * Given a directed graph, check if it contains a cycle.
 *
 * Idea: In a DAG, Kahn's topological sort processes all V vertices.
 * If a cycle exists, vertices in the cycle never get indegree 0, so
 * count of processed vertices < V.
 *
 * Algorithm:
 * 1) Store indegree of every vertex
 * 2) Create Queue q
 * 3) Add all 0-indegree vertices to q
 * 4) count = 0
 * 5) While q is not empty:
 *    a) u = q.shift()
 *    b) For every adjacent v of u:
 *       (i) Reduce indegree of v by 1
 *       (ii) If indegree of v becomes 0, push v to q
 *    c) count++
 * 6) return (count != V)  → true if cycle exists
 *
 * Time: O(V + E)  |  Space: O(V)
 */

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
    this.adj[u].push(v); // Directed: u -> v
  }
  // check if there is a cycle in the graph
  hasCycle() {
    // get the number of vertices
    let v = this.adj.length;
    let indegree = new Array(v).fill(0); // Step 1: Store indegree
    // store the indegree of every vertex
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
        q.push(i); // Step 3: Add all 0-indegree vertices
      }
    }

    let count = 0; // Step 4: count = 0
    while (q.length > 0) {
      // Step 5: While q not empty
      let u = q.shift(); // a) u = q.shift()
      // for each adjacent vertex of the vertex reduce the indegree of the vertex
      for (let vNode of this.adj[u]) {
        // b) For every adjacent v of u
        indegree[vNode]--; // (i) Reduce indegree of v by 1
        // if the indegree of the vertex is 0, add it to the queue
        if (indegree[vNode] === 0) {
          q.push(vNode); // (ii) If indegree 0, push v to q
        }
      }
      // increment the count
      count++; // c) count++
    }
    // return if the count is not equal to the number of vertices
    return count !== v; // Step 6: Cycle exists if count != V
  }
}

// Example from image: 5 vertices, edges 0->1, 1->2, 1->3, 1->4, 2->3, 3->2
// Cycle: 2 -> 3 -> 2
let g1 = new Graph(5);
// add an edge from 0 to 1
g1.addEdge(0, 1);
// add an edge from 1 to 2
g1.addEdge(1, 2);
// add an edge from 1 to 3
g1.addEdge(1, 3);
// add an edge from 1 to 4
g1.addEdge(1, 4);
// add an edge from 2 to 3
g1.addEdge(2, 3);
// add an edge from 3 to 2
g1.addEdge(3, 2); // Creates cycle 2-3-2
// print if there is a cycle in the graph
console.log("Graph with cycle (0->1->2<->3, 1->4):", g1.hasCycle()); // true
