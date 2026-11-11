/**
 * Serialize: Tree → Array (preorder, -1 for null)
 * Deserialize: Array → Tree
 */
class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

// serialize: preorder, push key or -1 for null
function serialize(root, arr) {
  if (root === null) {
    arr.push(-1);
    return;
  }
  arr.push(root.key);
  serialize(root.left, arr);
  serialize(root.right, arr);
}

let index = 0;

// deserialize: read preorder, -1 = null
function deserialize(arr) {
  if (index === arr.length) return null;
  let val = arr[index];
  index++;
  if (val === -1) return null;
  let root = new Node(val);
  root.left = deserialize(arr);
  root.right = deserialize(arr);
  return root;
}

/**
 * EXECUTION: tree 10(20(40), 30)
 * serialize: 10, left→20, left→40, null, null, right→null, right→30, null, null
 * arr = [10, 20, 40, -1, -1, -1, 30, -1, -1]
 * deserialize: index=0, val=10, root(10). left=deserialize→20(40), right→30
 */
let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);

let arr = [];
serialize(root, arr);
console.log(arr);
index = 0;
let root2 = deserialize(arr);
console.log(root2);
