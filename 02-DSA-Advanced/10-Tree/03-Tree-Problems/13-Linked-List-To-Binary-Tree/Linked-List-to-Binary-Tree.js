// Binary tree node: stores data and references to left & right children
class Node {
  constructor(data) {
    this.data = data;       // value stored in this node
    this.left = null;       // left child (null if none)
    this.right = null;      // right child (null if none)
  }
}

// Converts a linked list to a binary tree in level-order (BFS)
function LinkedListToBinaryTree(head) {
  // If list is empty, return no tree
  if (head === null) {
    return null;
  }
  // First list node becomes the root of the tree
  let root = new Node(head.data);
  // Move list pointer to next node (we've used the first one)
  head = head.next;

  // Queue holds tree nodes that still need left/right children filled
  let queue = [];
  queue.push(root);

  // Process list nodes in pairs (left, then right) for each parent
  while (head != null) {
    // Take next tree node that needs children (level-order)
    let parent = queue.shift();
    // Create left child from current list node
    let leftNode = new Node(head.data);
    parent.left = leftNode;
    queue.push(leftNode);   // this node will later get its own children
    head = head.next;       // advance to next list node

    // If no more list nodes, we're done (odd-length list)
    if (head === null) {
      break;
    }
    // Create right child from current list node
    let rightNode = new Node(head.data);
    parent.right = rightNode;
    queue.push(rightNode);
    head = head.next;       // advance to next list node
  }
  return root;
}

// Build a sample linked list: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);

// Convert list to tree and print the root
console.log(LinkedListToBinaryTree(head));
