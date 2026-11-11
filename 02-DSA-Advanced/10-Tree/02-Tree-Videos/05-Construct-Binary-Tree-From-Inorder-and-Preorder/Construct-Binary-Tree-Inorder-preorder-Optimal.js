/**
 * Construct Binary Tree from Inorder and Preorder (Optimal)
 * Map: value → inorder index for O(1) lookup. Time: O(n), Space: O(n)
 */
class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

let PreI = 0;
let mp = new Map();

// STEP 1: buildMap(io) - Store each io[i] → i for O(1) lookup
function buildMap(io) {
  for (let i = 0; i < io.length; i++) {
    mp.set(io[i], i);
  }
}

// STEP 2: buildTree - Root from pre[PreI], find i in map, left [is..i-1], right [i+1..ie]
function buildTree(pre, io, is, ie) {
  if (is > ie) return null;           // Empty segment
  let root = new Node(pre[PreI]);     // Create root from preorder
  PreI++;
  if (is === ie) return root;         // Leaf node
  let i = mp.get(root.key);           // O(1) index of root in inorder
  root.left = buildTree(pre, io, is, i - 1);
  root.right = buildTree(pre, io, i + 1, ie);
  return root;
}

function printTree(root) {
  if (root !== null) {
    printTree(root.left);
    console.log(root.key);
    printTree(root.right);
  }
}

/**
 * STEP-BY-STEP EXECUTION: pre=[10,20,30,40,50], io=[20,10,40,30,50]
 *
 * buildMap(io): mp = {20→0, 10→1, 40→2, 30→3, 50→4}
 *
 * buildTree(0,4): root=10, PreI=1, i=mp.get(10)=1
 *   left  = buildTree(0,0): root=20, is===ie → return 20 (leaf)
 *   right = buildTree(2,4): root=30, PreI=3, i=3
 *     left  = buildTree(2,2): root=40 → return 40 (leaf)
 *     right = buildTree(4,4): root=50 → return 50 (leaf)
 *   return 30(40,50)
 * return 10(20, 30(40,50))
 *
 * Tree:    10
 *        /   \
 *      20     30
 *           /   \
 *         40    50
 */
let pre = [10, 20, 30, 40, 50];
let io = [20, 10, 40, 30, 50];
buildMap(io);
PreI = 0;
let root = buildTree(pre, io, 0, io.length - 1);
console.log(root);
printTree(root);
