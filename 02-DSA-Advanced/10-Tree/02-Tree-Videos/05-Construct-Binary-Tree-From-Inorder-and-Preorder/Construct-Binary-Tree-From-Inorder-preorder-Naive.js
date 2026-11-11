/**
 * Construct Binary Tree from Inorder and Preorder (Naive)
 * Naive: Linear search O(n) to find root in inorder per node → O(n²) total.
 */

class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

let PreI = 0;

/**
 * buildTree(pre, io, is, ie) - Construct tree from preorder and inorder
 * EXECUTION: Root from pre[PreI], find in inorder at i, left=io[is..i-1], right=io[i+1..ie]
 */
function buildTree(pre, io, is, ie) {
  // STEP 1: Empty segment
  if (is > ie) {
    return null;
  }
  // STEP 2: Create root from current preorder element
  let root = new Node(pre[PreI]);
  PreI++;
  // STEP 3: Leaf node (single element segment)
  if (is === ie) {
    return root;
  }
  // STEP 4: Find root index in inorder (linear search - O(n))
  let i = is;
  while (i <= ie) {
    if (io[i] === root.key) {
      break;
    }
    i++;
  }
  // STEP 5: Recurse left [is, i-1] and right [i+1, ie]
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
 * buildTree(0, 4): is<=ie, root=pre[0]=10, PreI=1
 *   Find 10 in io at i=1
 *   left=buildTree(0,0), right=buildTree(2,4)
 *
 * buildTree(0,0): root=20, PreI=2, is===ie → return 20 (leaf)
 *
 * buildTree(2,4): root=30, PreI=3, find at i=3
 *   left=buildTree(2,2) → 40, right=buildTree(4,4) → 50
 *
 * Result: 10(20, 30(40, 50))
 * Inorder: 20, 10, 40, 30, 50 ✓
 */

let pre = [10, 20, 30, 40, 50];
let io = [20, 10, 40, 30, 50];
PreI = 0;
let root = buildTree(pre, io, 0, pre.length - 1);
printTree(root);
