/*
  QUESTION / PROBLEM:
  -------------------
  Given a binary tree, return level-order traversal in spiral (zigzag) form:
  Level 0: left-to-right, Level 1: right-to-left, Level 2: left-to-right, etc.

  Use Case: Print tree level-wise with alternating direction (zigzag view).
*/

class Node {
  constructor(data) {
    this.data = data;        // Store node value
    this.left = null;        // Left child pointer
    this.right = null;       // Right child pointer
  }
}

function findSpiral(root) {
  if (root === null) {
    return [];               // Empty tree → empty result
  }
  let result = [];           // Collect final spiral order
  let queue = [];            // BFS queue for level-order
  queue.push(root);          // Start with root
  let rightToLeft = true;    // Level 0: right-to-left (we reverse level)
  while (queue.length > 0) {
    let size = queue.length; // Process one level at a time
    let level = [];          // Values for current level
    for (let i = 0; i < size; i++) {
      let node = queue.shift();   // Dequeue front node
      level.push(node.data);      // Add to current level
      if (node.left) queue.push(node.left);   // Enqueue left child
      if (node.right) queue.push(node.right); // Enqueue right child
    }
    if (rightToLeft) {
      level.reverse();       // Odd levels: reverse for right-to-left
    }
    result.push(...level);   // Append level to result
    rightToLeft = !rightToLeft;  // Toggle direction for next level
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

console.log(findSpiral(root));    // Log spiral order

/*
  STEP-BY-STEP EXECUTION:
  ----------------------
  Tree: 1(2,3), 2(4,5), 3(6,7)
  
  Initial: queue=[1], rightToLeft=true, result=[]
  
  Level 0 (size=1):
    -> node=1, level=[1]
    -> enqueue 2,3 -> queue=[2,3]
    -> rightToLeft=true -> level.reverse() -> level=[1]
    -> result=[1], rightToLeft=false
  
  Level 1 (size=2):
    -> node=2, level=[2]; node=3, level=[2,3]
    -> enqueue 4,5,6,7 -> queue=[4,5,6,7]
    -> rightToLeft=false -> no reverse, level=[2,3]
    -> result=[1,2,3], rightToLeft=true
  
  Level 2 (size=4):
    -> nodes 4,5,6,7 -> level=[4,5,6,7]
    -> rightToLeft=true -> level.reverse() -> level=[7,6,5,4]
    -> result=[1,2,3,7,6,5,4]
  
  Final: return [1,2,3,7,6,5,4]
*/
