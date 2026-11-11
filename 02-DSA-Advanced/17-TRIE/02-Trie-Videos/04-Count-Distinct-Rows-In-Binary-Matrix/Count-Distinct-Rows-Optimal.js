/**
 * PROBLEM STATEMENT: Count Distinct Rows in a Binary Matrix
 * --------------------------------------------------------
 * Given a binary matrix (2D array of 0s and 1s), count how many rows are distinct.
 * Two rows are the same if they have the same length and identical values at every index.
 *
 * Input (I/p): mat — 2D array, e.g. [[1,0,0], [1,1,1], [1,0,0], [1,1,1]]
 * Output (O/p): Number of distinct rows. Example above → 2.
 *
 * OPTIMAL APPROACH (Trie):
 * Insert each row into a binary Trie (child[0] and child[1]). If we create at least one
 * new node while inserting, the row is distinct → increment count. Time: O(R * C), Space: O(R * C).
 */

// Trie node for binary rows: only two children, index 0 and 1
class TrieNode {
  constructor() {
    this.child = new Array(2).fill(null);  // child[0] for 0, child[1] for 1
  }
}

// Insert row into trie. Returns true if this row was not seen before (we created at least one new node)
function insert(node, row) {
  let isNew = false;                        // becomes true if we create any new node
  for (let i = 0; i < row.length; i++) {
    let x = row[i];                        // current element is 0 or 1 → index into child[]
    if (node.child[x] === null) {
      node.child[x] = new TrieNode();      // no path for this value → create new node
      isNew = true;                       // we extended the trie → row is distinct so far
    }
    node = node.child[x];                 // move to the next node along the path
  }
  return isNew;                            // true only if we had to add at least one node (new row)
}

function Countdist(mat) {
  let res = 0;                             // count of distinct rows
  let root = new TrieNode();               // empty trie (root has no value, only children)
  for (let i = 0; i < mat.length; i++) {
    if (insert(root, mat[i])) {
      res = res + 1;                       // insert returned true → row was new, count it
    }
  }
  return res;
}

// Example: [[1,0,0], [1,1,1], [1,0,0], [1,1,1]] → O/p: 2
let mat = [
  [1, 0, 0],
  [1, 1, 1],
  [1, 0, 0],
  [1, 1, 1],
];
console.log(Countdist(mat));               // 2
