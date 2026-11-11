/*
  QUESTION / PROBLEM:
  -------------------
  Given a binary tree, find the diameter: the length (in edges) of the longest
  path between any two nodes. The path may or may not pass through the root.

  Use Case: Network topology, tree analysis, max distance in hierarchical data.
*/

class Node {
  constructor(data) {
    this.data = data;        // Store node value
    this.left = null;        // Left child pointer
    this.right = null;       // Right child pointer
  }
}

function diameter(root) {
  let maxdiameter = 0;       // Track max diameter seen so far

  function height(node) {
    if (node === null) {
      return 0;              // Base: empty tree has height 0
    }
    let leftheight = height(node.left);   // Height of left subtree
    let rightheight = height(node.right); // Height of right subtree

    maxdiameter = Math.max(maxdiameter, leftheight + rightheight);  // Diameter through this node
    return 1 + Math.max(leftheight, rightheight);  // Return height of this subtree
  }
  height(root);              // Traverse tree, update maxdiameter
  return maxdiameter;
}

// Build tree
let node = new Node(1);
node.left = new Node(2);
node.right = new Node(3);
node.left.left = new Node(4);
node.left.right = new Node(5);
node.right.left = new Node(6);
node.right.right = new Node(7);

console.log(diameter(node));  // Output: 4

/*
  STEP-BY-STEP EXECUTION:
  ----------------------
  Tree: 1(2,3), 2(4,5), 3(6,7)
  maxdiameter starts at 0
  
  height(1): leftheight=height(2), rightheight=height(3)
    height(2): leftheight=1, rightheight=1 → maxdiameter=max(0,2)=2, return 2
    height(3): leftheight=1, rightheight=1 → maxdiameter=max(2,2)=2, return 2
  height(1): maxdiameter=max(2, 2+2)=4, return 3
  
  Final: return 4 (path e.g. 4-2-1-3-7 has 4 edges)
*/
