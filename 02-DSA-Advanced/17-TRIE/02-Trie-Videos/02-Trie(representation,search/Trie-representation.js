// Trie node: one per character in the path (26 possible next chars, 'a'–'z')
/**
 *  problem statement: Implement a Trie data structure that supports the following operations:
 *  - Insert a word into the trie
 *  - Search for a word in the trie
 *  - Delete a word from the trie
 *  - Check if a word is in the trie
 *  - Check if a word is a prefix of any word in the trie
 *  - Check if a word is a suffix of any word in the trie
 *  - Check if a word is a substring of any word in the trie
 */
class TrieNode {
  constructor() {
    this.isEndofWord = false; // true when this node ends a stored word
    this.child = new Array(26).fill(null); // child[i] = node for char ('a'+i), or null
  }
}

// Insert word into the trie starting at node (usually root)
function insert(node, word) {
  for (let i = 0; i < word.length; i++) {
    let idx = word[i].charCodeAt() - "a".charCodeAt(); // 0 for 'a', 1 for 'b', ... 25 for 'z'
    if (node.child[idx] === null) {
      node.child[idx] = new TrieNode(); // create a new node if path doesn't exist
    }
    node = node.child[idx]; // move to the node for this character
  }
  node.isEndofWord = true; // mark the last node as end of this word
}

// Search: return true only if word exists in trie and is marked as a full word
function search(node, word) {
  for (let i = 0; i < word.length; i++) {
    let idx = word[i].charCodeAt() - "a".charCodeAt();
    if (node.child[idx] === null) {
      return false; // no path for this character → word not in trie
    }
    node = node.child[idx]; // move to the next node along the path
  }
  return node.isEndofWord; // word is in trie only if we end at an end-of-word node
}

// Create the root (empty trie)
let root = new TrieNode();
// Insert "hello": builds path root → h → e → l → l → o, marks last node as end of word
insert(root, "hello");
// Search "hello": follows path and checks end-of-word → true
console.log(search(root, "hello"));
