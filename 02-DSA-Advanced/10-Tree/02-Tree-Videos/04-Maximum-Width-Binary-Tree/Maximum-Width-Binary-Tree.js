/**
 * Maximum Width of Binary Tree
 * Find the maximum number of nodes in any level (level with most nodes).
 * BFS: count nodes per level, track max.
 */

class Queue {
  constructor() {
    this.items = [];
    this.front = 0;
    this.rear = 0;
  }
  enque(item) {
    this.items[this.rear] = item;
    this.rear++;
  }
  deque() {
    if (this.isEmpty()) return null;
    let element = this.items[this.front];
    this.front++;
    return element;
  }
  isEmpty() {
    return this.front === this.rear;
  }
  size() {
    return this.rear - this.front;
  }
}

/**
 * maxWidth(root) - Returns max number of nodes in any level
 *
 * EXECUTION:
 * 1. BFS level-order
 * 2. Before processing each level, count = q.size() = nodes in this level
 * 3. res = max(res, count)
 * 4. Dequeue count nodes, enqueue their children
 */
function maxWidth(root) {
  // STEP 1: Empty tree
  if (root === null) {
    return 0;
  }
  // STEP 2: Init queue with root
  let q = new Queue();
  q.enque(root);
  let res = 0;

  // STEP 3: Process level by level
  while (!q.isEmpty()) {
    // STEP 3.1: count = nodes in current level
    let count = q.size();
    // STEP 3.2: Update max width
    res = Math.max(res, count);
    // STEP 3.3: Process all nodes in this level, add children
    for (let i = 0; i < count; i++) {
      let curr = q.deque();
      if (curr.left !== null) q.enque(curr.left);
      if (curr.right !== null) q.enque(curr.right);
    }
  }
  return res;
}

class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

/**
 * STEP-BY-STEP EXECUTION for tree:
 *         10
 *       /    \
 *     20      30
 *    /  \    /
 *  40  50  60
 *
 * q = [10], res = 0
 *
 * Level 0: count=1, res=max(0,1)=1
 *   deque 10, enque 20,30 → q = [20,30,40,50,60] (no, deque 10 only)
 *   Actually: deque 10, enque 20, 30 → q = [20, 30]
 *
 * Level 1: count=2, res=max(1,2)=2
 *   deque 20, enque 40,50 → q = [30, 40, 50]
 *   deque 30, enque 60 → q = [40, 50, 60]
 *
 * Level 2: count=3, res=max(2,3)=3
 *   deque 40,50,60, no children → q = []
 *
 * return res = 3
 */

let node = new Node(10);
node.left = new Node(20);
node.right = new Node(30);
node.left.left = new Node(40);
node.left.right = new Node(50);
node.right.left = new Node(60);
console.log(maxWidth(node));
