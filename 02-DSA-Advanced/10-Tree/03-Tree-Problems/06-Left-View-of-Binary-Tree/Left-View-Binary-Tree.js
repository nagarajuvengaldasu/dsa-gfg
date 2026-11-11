/*
  QUESTION / PROBLEM:
  -------------------
  Given a binary tree, return the left view: the leftmost node at each level.

  Use Case: Visualize tree from left side, debugging tree structure.
*/

class Node {
  constructor(data) {
    this.data = data;        // Store node value
    this.left = null;        // Left child pointer
    this.right = null;       // Right child pointer
  }
}

function leftview(root) {
  if (root === null) {
    return [];               // Empty tree → empty result
  }
  let result = [];           // Collect leftmost node of each level
  let queue = [];            // BFS queue for level-order
  queue.push(root);          // Start with root

  while (queue.length > 0) {
    let levelsize = queue.length;     // Nodes in current level
    for (let i = 0; i < levelsize; i++) {
      let node = queue.shift();       // Dequeue front node
      if (i === 0) {
        result.push(node.data);       // First node of level = leftmost
      }
      if (node.left) {
        queue.push(node.left);        // Enqueue left child first
      }
      if (node.right) {
        queue.push(node.right);       // Enqueue right child
      }
    }
  }
  return result;
}

// Build tree
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

console.log(leftview(root));

/*
  STEP-BY-STEP EXECUTION:
  ----------------------
  Tree: 1(2,3), 2(4,5), 3(6,7)
  queue=[1], result=[]
  
  Level 0 (size=1): i=0, node=1
    -> i===0 → result=[1]
    -> enqueue 2,3 → queue=[2,3]
  
  Level 1 (size=2): i=0, node=2 → result=[1,2]; i=1, node=3 (skip)
    -> enqueue 4,5,6,7 → queue=[4,5,6,7]
  
  Level 2 (size=4): i=0, node=4 → result=[1,2,4]; i=1,2,3 skip
    -> queue=[]
  
  Final: return [1,2,4]
*/
