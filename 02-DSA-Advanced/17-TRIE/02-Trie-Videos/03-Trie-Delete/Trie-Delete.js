// One node per character; 26 children for 'a'–'z'
/*
  problem statement: Implement a Trie data structure that supports the following operations:
  - Insert a word into the trie
  - Search for a word in the trie
  - Delete a word from the trie
  - Check if a word is in the trie
  - Check if a word is a prefix of any word in the trie
  - Check if a word is a suffix of any word in the trie
  - Check if a word is a substring of any word in the trie
*/

class TrieNode {
  constructor() {
    this.isEndofWord = false; // true when a word ends at this node
    this.child = new Array(26).fill(null); // child[i] = node for char ('a'+i)
  }
}

// Insert key into trie: follow path, create nodes as needed, mark end at last char
function insert(root, key) {
  for (let i = 0; i < key.length; i++) {
    let idx = key[i].charCodeAt() - "a".charCodeAt(); // 0–25 for 'a'–'z'
    if (root.child[idx] === null) {
      root.child[idx] = new TrieNode(); // create node if path missing
    }
    root = root.child[idx]; // move to next node along path
  }
  root.isEndofWord = true; // mark last node as end of word
}

// Search: follow path for key; return true only if path exists and is marked as end of word
function search(root, key) {
  for (let i = 0; i < key.length; i++) {
    let idx = key[i].charCodeAt() - "a".charCodeAt();
    if (root.child[idx] === null) {
      return false; // no path for this char → key not in trie
    }
    root = root.child[idx];
  }
  return root.isEndofWord;
}

// Delete key from trie. i = current index in key. Returns (possibly new) root of this subtree.
function delNode(root, key, i = 0) {
  if (root === null) return null; // no node here → nothing to do
  if (i === key.length) {
    // reached the node where key ends
    if (root.isEndofWord) {
      root.isEndofWord = false; // unmark: key is no longer stored
    }
    if (isEmpty(root)) {
      return null; // no children → remove node so parent can set child[idx]=null
    }
    return root; // keep node (other words use this path)
  }
  let idx = key[i].charCodeAt() - "a".charCodeAt();
  root.child[idx] = delNode(root.child[idx], key, i + 1); // recurse; child may become null
  if (isEmpty(root) && root.isEndofWord === false) {
    return null; // node now useless → remove so parent can clear its child
  }
  return root;
}

// True if this node has no non-null children
function isEmpty(root) {
  for (let i = 0; i < 26; i++) {
    if (root.child[i] !== null) {
      return false; // found a child → not empty
    }
  }
  return true;
}

let root = new TrieNode();
insert(root, "hello");
insert(root, "world");
insert(root, "hell");
insert(root, "heaven");
root = delNode(root, "hello"); // delete "hello"; root may change if trie empties
console.log(search(root, "hello")); // false (deleted)
console.log(search(root, "world")); // true
console.log(search(root, "hell")); // true
