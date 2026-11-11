/**
 * Search Query for Strings
 
 * You are given a list of strings, and you need to search for a given string in the list.
 * You need to return true if the string is found, otherwise return false.
 
 * Example:
 * Input: ["hello", "world", "hi", "how", "are", "you"]
 * Output: true
 
 * Input: ["hello", "world", "hi", "how", "are", "you"]
 */
// we create a TrieNode class to store the children and the end of the word
class TrieNode {
  constructor() {
    // this is a object to store the children of the node
    this.children = {};
    // this is a boolean to check if the word is ended
    this.isEndOfWord = false;
  }
}
// this function is used to insert a word into the trie
function insert(root, word) {
  let current = root;
  // we iterate through the word and insert the characters into the trie
  for (let i = 0; i < word.length; i++) {
    // we get the character from the word
    const char = word[i];
    // we get the index of the character in the trie
    const index = char.charCodeAt(0) - "a".charCodeAt(0);
    // if the character is not in the trie, we create a new node for it
    if (current.children[index] === undefined) {
      // we create a new node for the character
      current.children[index] = new TrieNode();
    }
    // we move to the next node
    current = current.children[index];
  }
  // we set the end of the word to true
  current.isEndOfWord = true;
  // we return the root of the trie
  return root;
}
// this function is used to search for a word in the trie
function search(root, word) {
  // we start from the root of the trie
  let current = root;
  // we iterate through the word and search for the characters in the trie
  for (let i = 0; i < word.length; i++) {
    // we get the character from the word
    const char = word[i];
    // we get the index of the character in the trie
    const index = char.charCodeAt(0) - "a".charCodeAt(0);
    // if the character is not in the trie, we return false
    if (current.children[index] === undefined) {
      // if the character is not in the trie, we return false
      return false;
    }
    // we move to the next node
    current = current.children[index];
  }
  return current.isEndOfWord === true;
}
// we create a root node for the trie
let root = new TrieNode();
// we insert the words into the trie
insert(root, "hello");
insert(root, "world");
insert(root, "hi");
insert(root, "how");
insert(root, "are");
insert(root, "you");
// we search for the words in the trie
console.log(search(root, "hello"));
console.log(search(root, "wold"));
console.log(search(root, "hie"));
console.log(search(root, "how"));
