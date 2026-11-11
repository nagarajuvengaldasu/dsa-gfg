/*
 * ========== PROBLEM STATEMENT ==========
 * TOPOLOGICAL SORTING USING DFS
 * Given a directed acyclic graph (DAG), find a linear ordering of vertices
 * such that for every directed edge u -> v, u comes before v in the ordering.
 *
 * Idea: Use DFS with a stack. A node is pushed onto the stack only AFTER
 * all its adjacent nodes (and their descendants) have been fully visited.
 * Popping from the stack gives the topological order.
 *
 * Algorithm:
 * 1) Create an empty stack st
 * 2) For every vertex u:
 *    a) if (u is not visited)
 *    b) DFS(u, st)
 * 3) while (st is not empty):
 *    a) pop an item from st and print it
 *
 * DFS(u, st):
 * 1) Mark u as visited
 * 2) For every adjacent v of u:
 *    a) if (v is not visited)
 *    b) DFS(v, st)
 * 3) Push u to st  (post-order: push after all descendants processed)
 *
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
    this.adj[u].push(v); // Directed: u -> v
  }

  topologicalSort() {
    let v = this.adj.length;
    let visited = new Array(v).fill(false); // Track visited nodes
    let st = []; // Step 1: Create empty stack

    // DFS helper - push node AFTER all its descendants are processed
    const dfs = (u, stack) => {
      visited[u] = true; // Mark u as visited
      // For every adjacent v of u
      for (let neighbor of this.adj[u]) {
        if (!visited[neighbor]) {
          dfs(neighbor, stack); // Recursive DFS
        }
      }
      stack.push(u); // Push u to stack (post-order)
    };

    // Step 2: For every vertex u, if not visited, call DFS(u, st)
    for (let i = 0; i < v; i++) {
      if (!visited[i]) {
        dfs(i, st);
      }
    }

    // Step 3: Pop from stack and return (or print) topological order
    let result = [];
    while (st.length > 0) {
      result.push(st.pop());
    }
    return result;
  }
}

// Example from whiteboard: 5 vertices, edges 0->1, 1->3, 2->3, 2->4, 3->4
let g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(1, 3);
g.addEdge(2, 3);
g.addEdge(2, 4);
g.addEdge(3, 4);

let order = g.topologicalSort();
console.log("Topological order (DFS):", order); // [2, 0, 1, 3, 4]