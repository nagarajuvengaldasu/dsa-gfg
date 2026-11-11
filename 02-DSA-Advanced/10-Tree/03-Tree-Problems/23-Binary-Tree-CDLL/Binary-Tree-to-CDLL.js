/*
 * PROBLEM: Binary Tree to Circular Doubly Linked List (CDLL)
 * ----------------------------------------------------------
 * Convert a binary tree into a circular doubly linked list in place. The list
 * should follow the inorder traversal of the tree. Each node's left/right
 * are reused as prev/next in the list. The list is circular: last node's
 * next = head, head's prev = last node. Return the head of the CDLL.
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function btreeToCList(root) {
  if (root === null) {
    return null;
  }
  // Head of the CDLL (first node in inorder)
  let head = null;
  // Last node we added to the list (so we can link the next one)
  let prev = null;

  // Inorder: left → node → right. At each node, link prev ↔ node, then set prev = node.
  function inorder(node) {
    if (node === null) {
      return;
    }
    inorder(node.left);

    if (prev === null) {
      // First node in inorder becomes head
      head = node;
    } else {
      // Link previous node and current node (doubly)
      prev.right = node;
      node.left = prev;
    }
    prev = node;

    inorder(node.right);
  }

  inorder(root);
  // Close the circle: last node (prev) ↔ head
  head.left = prev;
  prev.right = head;

  return head;
}

let root = new Node(10);
root.left = new Node(12);
root.right = new Node(15);
root.left.left = new Node(25);
root.left.right = new Node(30);
root.right.left = new Node(36);
root.right.right = new Node(40);
console.log(btreeToCList(root));
