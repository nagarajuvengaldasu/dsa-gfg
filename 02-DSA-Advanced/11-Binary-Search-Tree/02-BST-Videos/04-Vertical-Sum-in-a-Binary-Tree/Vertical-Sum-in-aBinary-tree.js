class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Map from horizontal distance (hd) to sum of node values in that vertical line
let mp = new Map();

// Recursive helper to accumulate vertical sums
function vSumR(root, hd) {
  if (root === null) {
    return;
  }
  // Go to left subtree with hd - 1
  vSumR(root.left, hd - 1);

  // Add current node's value to its hd entry
  if (mp.has(hd)) {
    mp.set(hd, mp.get(hd) + root.data);
  } else {
    mp.set(hd, root.data);
  }

  // Go to right subtree with hd + 1
  vSumR(root.right, hd + 1);
}

function vSum(root) {
  vSumR(root, 0); // root has hd = 0
  // Print sums for each vertical line in the order hd keys were first seen
  for (let x of mp.values()) {
    console.log(x);
  }
}

// Sample tree
let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);
root.right.left = new Node(60);
root.right.right = new Node(70);
vSum(root);
