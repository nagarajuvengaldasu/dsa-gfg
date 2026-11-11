/*
 * PROBLEM STATEMENT:
 * Given an array that represents the level-order (BFS) traversal of a BST,
 * build and return the BST. The array is assumed to be valid level-order for some BST.
 *
 * Approach: Process array left to right. Queue holds [node, min, max] for each node
 * that can receive children. For each node, next value in (min, node.data) becomes
 * left child; next value in (node.data, max) becomes right child.
 */

// Tree node: data and left/right children
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function convertLevelOrderToBST(arr, n) {
  if (n === 0) {
    return null;
  }
  // First element is root
  let root = new Node(arr[0]);
  // Queue: [node, min, max] — this node can have children in (min, max)
  let queue = [];
  queue.push([root, -Infinity, Infinity]);

  let i = 1;  // next index in arr to assign as a child

  while (i < n && queue.length > 0) {
    let [node, min, max] = queue.shift();  // dequeue next slot for children

    // If next value fits in left range (min, node.data), make it left child
    if (i < n && arr[i] > min && arr[i] < node.data) {
      node.left = new Node(arr[i]);
      queue.push([node.left, min, node.data]);  // left subtree bounds: (min, node.data)
      i++;
    }
    // If next value fits in right range (node.data, max), make it right child
    if (i < n && arr[i] > node.data && arr[i] < max) {
      node.right = new Node(arr[i]);
      queue.push([node.right, node.data, max]);  // right subtree bounds: (node.data, max)
      i++;
    }
  }
  return root;
}

/*
 * EXAMPLE: arr = [10, 5, 15, 2, 7, 12, 17]
 *
 * EXECUTION TRACE:
 * root=10, queue=[[10,-∞,+∞]], i=1
 * [10,-∞,+∞]: arr[1]=5 in (-∞,10) → left=5, queue+=[[5,-∞,10]], i=2
 *             arr[2]=15 in (10,+∞) → right=15, queue+=[[15,10,+∞]], i=3
 * [5,-∞,10]:  arr[3]=2 in (-∞,5)  → left=2, queue+=[[2,-∞,5]], i=4
 *             arr[4]=7 in (5,10)  → right=7, queue+=[[7,5,10]], i=5
 * [15,10,+∞]: arr[5]=12 in (10,15)→ left=12, queue+=[[12,10,15]], i=6
 *             arr[6]=17 in (15,+∞)→ right=17, queue+=[[17,15,+∞]], i=7
 * i=7=n → stop. Resulting BST: same level-order as arr.
 */
let arr = [10, 5, 15, 2, 7, 12, 17];
let n = arr.length;
console.log(convertLevelOrderToBST(arr, n));
