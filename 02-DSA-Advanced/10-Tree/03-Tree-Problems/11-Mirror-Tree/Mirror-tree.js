/*
  QUESTION / PROBLEM:
  -------------------
  Given a binary tree, convert it to its mirror (invert): swap left and right
  children at every node. The tree is modified in-place.

  Use Case: Symmetry check, tree transformations, image/UI flip.
*/

class Node {
  constructor(data) {
    this.data = data;        // Store node value
    this.left = null;        // Left child pointer
    this.right = null;       // Right child pointer
  }
}

function mirrortree(root) {
  if (root === null) {
    return;                  // Base: nothing to mirror
  }

  let temp = root.left;      // Save left before overwriting
  root.left = root.right;    // Swap: left = right
  root.right = temp;         // Swap: right = former left

  mirrortree(root.left);     // Mirror left subtree
  mirrortree(root.right);    // Mirror right subtree
}

// Build tree
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

console.log("Before mirroring:", root);
mirrortree(root);
console.log("After mirroring:", root);

/*
  STEP-BY-STEP EXECUTION:
  ----------------------
  Tree: 1(2,3), 2(4,5), 3(6,7)
  
  mirrortree(1): swap 2↔3 → root.left=3, root.right=2
    mirrortree(3): swap 6↔7
      mirrortree(7): null return
      mirrortree(6): null return
    mirrortree(2): swap 4↔5
      mirrortree(5): null return
      mirrortree(4): null return
  
  Result: 1(3,2), 3(7,6), 2(5,4)
*/
