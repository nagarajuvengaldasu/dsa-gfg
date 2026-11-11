/**
 * Print Left View of Binary Tree (Iterative - BFS)
 * Left view = first node of each level when viewed from left.
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Queue {
  constructor() {
    this.arr = [];
    this.front = 0;
    this.rear = 0;
  }
  enqueue(x) {
    this.arr[this.rear++] = x;
  }
  dequeue() {
    if (this.isEmpty()) return null;
    return this.arr[this.front++];
  }
  isEmpty() {
    return this.front === this.rear;
  }
  size() {
    return this.rear - this.front;
  }
}

/**
 * printLeftView(root) - BFS level-order, print first node of each level
 *
 * EXECUTION per level:
 * 1. count = nodes in current level
 * 2. For i=0 to count-1: dequeue curr
 * 3. If i===0, print curr.data (leftmost of this level)
 * 4. Enqueue left and right children for next level
 */
function printLeftView(root) {
  // STEP 1: Empty tree check
  if (root === null) {
    return;
  }
  // STEP 2: Create queue, enqueue root
  let q = new Queue();
  q.enqueue(root);

  // STEP 3: Process level by level
  while (!q.isEmpty()) {
    // STEP 3.1: Count = nodes in current level (before adding children)
    let count = q.size();
    // STEP 3.2: Process each node in this level
    for (let i = 0; i < count; i++) {
      let curr = q.dequeue();
      // STEP 3.3: First node (i===0) is leftmost → print it
      if (i === 0) {
        console.log(curr.data);
      }
      // STEP 3.4: Add children to queue for next level
      if (curr.left !== null) {
        q.enqueue(curr.left);
      }
      if (curr.right !== null) {
        q.enqueue(curr.right);
      }
    }
  }
}

/**
 * STEP-BY-STEP EXECUTION for tree:
 *         10
 *       /    \
 *     20      30
 *    /  \       \
 *  40   50      60
 *
 * STEP 1: root not null, continue
 * STEP 2: q = [10]
 *
 * --- Level 0 (count=1) ---
 * i=0: curr=10, i===0 → print 10
 *      enqueue 20, 30 → q = [20, 30]
 *
 * --- Level 1 (count=2) ---
 * i=0: curr=20, i===0 → print 20
 *      enqueue 40, 50 → q = [30, 40, 50]
 * i=1: curr=30, i!==0, skip print
 *      enqueue 60 → q = [40, 50, 60]
 *
 * --- Level 2 (count=3) ---
 * i=0: curr=40, i===0 → print 40
 *      no children → q = [50, 60]
 * i=1: curr=50, i!==0, skip print
 *      no children → q = [60]
 * i=2: curr=60, i!==0, skip print
 *      no children → q = []
 *
 * Queue empty → exit
 * Output: 10, 20, 40
 */

// Test
let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);
root.right.right = new Node(60);
printLeftView(root);
