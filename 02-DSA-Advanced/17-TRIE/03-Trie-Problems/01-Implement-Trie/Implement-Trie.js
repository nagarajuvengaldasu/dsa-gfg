/**
 * Implement Trie
 * You are given a list of strings, and you need to insert them into a trie.
 * You also need to search for a given string in the trie.
 * You also need to check if a given prefix is present in the trie.
 *
 * Example:
 * Input: ["hello", "world", "hi", "how", "are", "you"]
 * Output: true
 *
 */
// we create a TrieNode class to store the children and the end of the word
class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}
// we create a Trie class to insert, search and check if a prefix is present
class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  // we insert a word into the trie
  insert(word) {
    // we start from the root of the trie
    let current = this.root;
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
  }
  // we search for a word in the trie
  search(word) {
    // we start from the root of the trie
    let current = this.root;
    // we iterate through the word and search for the characters in the trie
    for (let i = 0; i < word.length; i++) {
      // we get the character from the word
      const char = word[i];
      // we get the index of the character in the trie
      const index = char.charCodeAt(0) - "a".charCodeAt(0);
      // if the character is not in the trie, we return false
      if (current.children[index] === undefined) {
        return false;
      }
      // we move to the next node
      current = current.children[index];
    }
    // we return true if the word is found in the trie
    return current.isEndOfWord === true;
  }
  // we check if a prefix is present in the trie
  startsWith(prefix) {
    // we start from the root of the trie
    let current = this.root;
    // we iterate through the prefix and check if the characters are present in the trie
    for (let i = 0; i < prefix.length; i++) {
      // we get the character from the prefix
      const char = prefix[i];
      // we get the index of the character in the trie
      const index = char.charCodeAt(0) - "a".charCodeAt(0);
      // if the character is not in the trie, we return false
      if (current.children[index] === undefined) {
        return false;
      }
      // we move to the next node
      current = current.children[index];
    }
    // we return true if the prefix is found in the trie
    return true;
  }
}
// we create a new trie
let trie = new Trie();
// we insert the words into the trie
trie.insert("hello");
trie.insert("world");
trie.insert("hi");
trie.insert("how");
trie.insert("are");
trie.insert("you");
console.log(trie.search("hello"));
console.log(trie.startsWith("world"));
console.log(trie.startsWith("hi"));
console.log(trie.startsWith("how"));
console.log(trie.startsWith("are"));
console.log(trie.startsWith("you"));
