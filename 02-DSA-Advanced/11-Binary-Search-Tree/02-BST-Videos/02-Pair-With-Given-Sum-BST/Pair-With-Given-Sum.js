/*
 * Pair with given sum in BST - Method 1 (Inorder Traversal)
 * ----------------------------------------------------------
 * 1) Do inorder traversal and store in an array → sorted array, Θ(n)
 * 2) Use two-pointer approach to find if there is a pair that sums to target → Θ(n)
 * Time: Θ(n), Aux Space: Θ(n)
 */

class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

// Fills arr with inorder traversal (left → root → right) → sorted order in a BST
function inorder(root, arr) {
  if (root === null) return;
  inorder(root.left, arr);   // process left subtree first
  arr.push(root.key);       // then current node
  inorder(root.right, arr); // then right subtree
}

function hasPairWithSum(root, target) {
  const arr = [];
  inorder(root, arr); // Step 1: get sorted array [4, 8, 9, 10, 11, 20, 25, 30]

  let left = 0;              // pointer at smallest value
  let right = arr.length - 1; // pointer at largest value
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) return true;  // pair found
    if (sum < target) left++;        // need bigger sum → move left pointer right
    else right--;                    // need smaller sum → move right pointer left
  }
  return false;
}

// Tree from whiteboard: root 10, left 8 (4, 9), right 20 (11, 30); 30 has left 25
let root = new Node(10);
root.left = new Node(8);
root.right = new Node(20);
root.left.left = new Node(4);
root.left.right = new Node(9);
root.right.left = new Node(11);
root.right.right = new Node(30);
root.right.right.left = new Node(25);

const sum = 33;
console.log(hasPairWithSum(root, sum)); // e.g. 8 + 25 = 33 → true
