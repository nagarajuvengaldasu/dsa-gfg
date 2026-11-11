// Node class to represent a tree node
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

/**
 * Example Tree (k=2):
 *         10
 *        /  \
 *      20    30
 *     /  \  /  \
 *   40   50 60  70
 *
 * Step-by-step execution:
 */
function countNodesFromKtoLeafDistance(root, k) {
  // Step 1: Initialize path array to track current path from root to current node
  let path = [];
  // Step 2: Initialize Set to store unique nodes at distance k from leaves
  let result = new Set();

  /**
   * DFS (Depth-First Search) helper function
   * Traverses the tree and tracks path to find nodes at distance k from leaves
   */
  function dfs(node) {
    // Step 3: Base case - if node is null, return (backtrack)
    if (!node) return;

    // Step 4: Add current node to the path
    // This maintains the path from root to current node
    path.push(node);

    // Step 5: Check if current node is a leaf node (no left or right child)
    if (!node.left && !node.right) {
      // Step 6: Calculate the index of the node at distance k from this leaf
      // If path = [10, 20, 40] and k=2, then index = 3-2-1 = 0 (node 10)
      // If path = [10, 20, 50] and k=2, then index = 3-2-1 = 0 (node 10)
      // If path = [10, 30, 60] and k=2, then index = 3-2-1 = 0 (node 10)
      // If path = [10, 30, 70] and k=2, then index = 3-2-1 = 0 (node 10)
      let index = path.length - k - 1;

      // Step 7: Check if the calculated index is valid (non-negative)
      if (index >= 0) {
        // Step 8: Add the node at distance k from leaf to result Set
        // Using Set ensures we count each unique node only once
        result.add(path[index]);
      }
    }

    // Step 9: Recursively traverse left subtree
    // This will explore all nodes in the left branch
    dfs(node.left);

    // Step 10: Recursively traverse right subtree
    // This will explore all nodes in the right branch
    dfs(node.right);

    // Step 11: Backtrack - remove current node from path
    // This is crucial for maintaining correct path when going back up the tree
    // After exploring both left and right subtrees, we remove current node
    path.pop();
  }

  // Step 12: Start DFS traversal from root node
  dfs(root);

  // Step 13: Return the count of unique nodes at distance k from leaves
  return result.size;
}

// Test case: Creating a binary tree
// Tree structure:
//         10
//        /  \
//      20    30
//     /  \  /  \
//   40   50 60  70
let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);
root.right.left = new Node(60);
root.right.right = new Node(70);

// Execution trace for k=2:
// Leaf 40: path=[10,20,40], index=3-2-1=0 → add node 10
// Leaf 50: path=[10,20,50], index=3-2-1=0 → add node 10 (already in Set)
// Leaf 60: path=[10,30,60], index=3-2-1=0 → add node 10 (already in Set)
// Leaf 70: path=[10,30,70], index=3-2-1=0 → add node 10 (already in Set)
// Result: {10} → size = 1
console.log(countNodesFromKtoLeafDistance(root, 2));
