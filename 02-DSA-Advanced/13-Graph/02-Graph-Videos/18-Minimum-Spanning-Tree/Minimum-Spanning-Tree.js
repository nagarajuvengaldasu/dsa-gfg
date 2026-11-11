/*
 * ========== PROBLEM STATEMENT ==========
 * MINIMUM SPANNING TREE (MST)
 * Given a weighted, undirected and connected graph, find the Minimum Spanning
 * Tree - minimize total edge weight while connecting all vertices.
 *
 * Problem: "Minimize the wire length and make sure that all computers are
 * connected to each other (maybe through intermediate computers)."
 *
 * Two classic algorithms: Prim's and Kruskal's
 *
 * Time: Prim O(V²) or O(E log V) with heap  |  Kruskal O(E log E)
 * Space: O(V)
 */

// ==================== PRIM'S ALGORITHM ====================
// Two Set approach: "In MST" vs "Not Yet in MST"
// Pick minimum weight edge connecting the two sets in each step
// INF is a constant representing infinity

const INF = Number.MAX_SAFE_INTEGER;

class MSTGraph {
  // Constructor initializes the graph with v vertices
  constructor(v) {
    // Initialize the number of vertices
    this.v = v;
    // Initialize adjacency list as an array of empty arrays
    this.adj = [];
    // Initialize each vertex's adjacency list as an empty array
    for (let i = 0; i < v; i++) {
      this.adj[i] = []; // Each entry: { node, weight } // node is the destination vertex and weight is the   weight of the edge
    }
  }

  // Add undirected edge (both directions)
  addEdge(u, v, weight) {
    // Add the edge to the adjacency list of the source vertex
    // The edge is represented as an object with node (destination vertex) and weight (edge weight)
    this.adj[u].push({ node: v, weight });
    // Add the edge to the adjacency list of the destination vertex
    //   The edge is represented as an object with node (source vertex) and weight (edge weight)
    this.adj[v].push({ node: u, weight });
  }

  // Prim's Algorithm - returns { mstEdges, totalWeight }
  primMST(start = 0) {
    // Get the number of vertices in the graph
    let v = this.v;
    // Initialize a boolean array to keep track of vertices in the MST
    let inMST = new Array(v).fill(false); // Two Set: In MST
    // Initialize an array to store the minimum weight to reach each vertex
    let key = new Array(v).fill(INF); // Min weight to reach each vertex
    // Initialize an array to store the parent of each vertex
    let parent = new Array(v).fill(-1); // For reconstructing MST

    // Initialize the minimum weight to reach the start vertex
    key[start] = 0;

    // Traverse all the vertices in the graph
    for (let count = 0; count < v; count++) {
      // Pick minimum key vertex not yet in MST
      let u = -1;
      // Initialize the minimum weight to reach the next vertex
      let minKey = INF;
      // Traverse all the vertices in the graph
      for (let i = 0; i < v; i++) {
        if (!inMST[i] && key[i] < minKey) {
          // Update the minimum weight to reach the next vertex
          minKey = key[i];
          // Update the next vertex
          u = i;
        }
      }
      // If no vertex is found, break the loop
      if (u === -1) break;

      // Add the vertex to the MST set
      inMST[u] = true;

      // Update key for adjacent vertices not in MST
      for (let edge of this.adj[u]) {
        let vNode = edge.node;
        // Get the weight of the edge
        let w = edge.weight;
        // If the vertex is not in the MST and the weight of the edge is less than the minimum weight to reach the vertex, then update the minimum weight to reach the vertex
        if (!inMST[vNode] && w < key[vNode]) {
          // Update the minimum weight to reach the vertex
          key[vNode] = w;
          // Update the parent of the vertex
          parent[vNode] = u;
        }
      }
    }

    // Build MST edges and total weight
    let mstEdges = [];
    // Initialize the total weight of the MST
    let totalWeight = 0;
    // Initialize an array to store the labels of the vertices
    const labels = "ABCDEFGH";
    // Traverse all the vertices in the graph
    for (let i = 0; i < v; i++) {
      // If the vertex is not in the MST, then add the edge to the MST
      if (parent[i] !== -1) {
        // Add the edge to the MST
        mstEdges.push({
          // Get the label of the source vertex
          // Get the label of the destination vertex
          from: labels[parent[i]] || parent[i],
          // Get the weight of the edge
          to: labels[i] || i,
          // Get the weight of the edge
          weight: key[i],
        });
        // Update the total weight of the MST
        totalWeight += key[i];
      }
    }
    return { mstEdges, totalWeight };
  }

  // Kruskal's Algorithm - sort edges, add if no cycle (Union-Find)
  kruskalMST() {
    // Initialize an array to store the edges
    let edges = [];
    // Traverse all the vertices in the graph
    for (let u = 0; u < this.v; u++) {
      // Traverse all the edges of the current vertex
      for (let e of this.adj[u]) {
        // If the source vertex is less than the destination vertex, then add the edge to the edges array
        if (u < e.node) edges.push({ u, v: e.node, weight: e.weight });
      }
    }
    // Sort the edges by weight
    edges.sort((a, b) => a.weight - b.weight);
    // Initialize an array to store the parent of each vertex
    // Each entry: { u, v, weight } // u is the source vertex, v is the destination vertex and weight is the weight of the edge
    let parent = [];
    // Traverse all the vertices in the graph
    for (let i = 0; i < this.v; i++) {
      // Initialize the parent of the vertex
      parent[i] = i; // Each entry: { i, i } // i is the parent of the vertex
    }
    // Initialize a function to find the parent of a vertex
    const find = (x) => {
      // If the parent of the vertex is not the vertex itself, then find the parent of the vertex
      if (parent[x] !== x) parent[x] = find(parent[x]);
      {
        // Update the parent of the vertex
        parent[x] = find(parent[x]);
      }
      // Return the parent of the vertex
      return parent[x];
    };
    const union = (x, y) => {
      // Find the parent of the source vertex
      let px = find(x);
      // Find the parent of the destination vertex
      let py = find(y);
      // If the parent of the source vertex is not the parent of the destination vertex, then update the parent of the source vertex to the parent of the destination vertex
      if (px !== py) parent[px] = py;
    };

    // Initialize an array to store the edges of the MST
    let mstEdges = [];
    // Initialize the total weight of the MST
    let totalWeight = 0;
    // Initialize an array to store the labels of the vertices
    const labels = "ABCDEFGH";

    // Traverse all the edges in the graph
    for (let e of edges) {
      // If the parent of the source vertex is not the parent of the destination vertex, then update the parent of the source vertex to the parent of the destination vertex
      if (find(e.u) !== find(e.v)) {
        // Update the parent of the source vertex to the parent of the destination vertex
        union(e.u, e.v);
        // Add the edge to the MST
        mstEdges.push({
          // Get the label of the source vertex
          from: labels[e.u] || e.u,
          // Get the label of the destination vertex
          to: labels[e.v] || e.v,
          // Get the weight of the edge
          weight: e.weight,
        });
        // Update the total weight of the MST
        totalWeight += e.weight;
      }
    }
    // Return the edges of the MST and the total weight of the MST
    return { mstEdges, totalWeight };
  }
}

// ========== EXAMPLE 1: 4 nodes (A,B,C,D) - Wire/Computer problem ==========
// Edges: A-D:5, A-B:9, A-C:10, B-C:8, C-D:7
// MST = 20 (A-D + C-D + B-C) or (A-D + D-C + B-C)
console.log("=== Example 1: 4 computers (A,B,C,D) - Minimize wire length ===");
// Initialize a new graph with 4 vertices
let g1 = new MSTGraph(4); // A=0, B=1, C=2, D=3
// Add edges to the graph
g1.addEdge(0, 3, 5); // A-D
g1.addEdge(0, 1, 9); // A-B
g1.addEdge(0, 2, 10); // A-C
g1.addEdge(1, 2, 8); // B-C
g1.addEdge(2, 3, 7); // C-D

// Run Prim's Algorithm
let prim1 = g1.primMST(0);
console.log("Prim's MST:", prim1.mstEdges);
console.log("Total weight:", prim1.totalWeight);

// Run Kruskal's Algorithm
let kruskal1 = g1.kruskalMST();
console.log("Kruskal's MST:", kruskal1.mstEdges);
console.log("Total weight:", kruskal1.totalWeight);
