class HuffmanNode {
  constructor(char, freq) {
    this.char = char; // character
    this.freq = freq; // frequency
    this.left = null; // left child
    this.right = null; // right child
  }
}
// function to build huffman tree
// freqmap is a map of characters and their frequencies
// returns the root of the huffman tree
function buildHuffmanTree(freqmap) {
  const pq = Object.entries(freqmap).map(
    ([char, freq]) => new HuffmanNode(char, freq),
  );
  // min-heap priority queue
  pq.sort((a, b) => a.freq - b.freq);
  // while the priority queue has more than one node
  while (pq.length > 1) {
    // remove two nodes with the lowest frequency
    const left = pq.shift();
    const right = pq.shift();

    // create a new node with the sum of the frequencies of the two nodes
    const newNode = new HuffmanNode(null, left.freq + right.freq);
    // set the left and right children of the new node
    newNode.left = left;
    newNode.right = right;
    // add the new node to the priority queue
    pq.push(newNode);
    // resort the priority queue
    pq.sort((a, b) => a.freq - b.freq);
  }
  // return the root of the huffman tree
  return pq[0];
}

// function to generate the huffman codes

function generatecodes(node, currentcode, codes) {
  if (!node) return;
  // if its a leaf node assign the current code
  if (node.char !== null) {
    codes[node.char] = currentcode;
  }
  // traverse the left and right subtrees
  generatecodes(node.left, currentcode + "0", codes);
  generatecodes(node.right, currentcode + "1", codes);
}

// function to encode the input string
function huffmanencoding(input) {
  // create a frequency map of the characters in the input string
  const freqmap = {};
  for (const char of input) {
    // if the character is not in the frequency map, add it with a frequency of 1
    freqmap[char] = (freqmap[char] || 0) + 1;
  }
  // build the huffman tree
  const root = buildHuffmanTree(freqmap);
  // create a map to store the encoding of the characters
  const codes = {};

  generatecodes(root, "", codes);
  // encode the input string
  const encoded = input
    .split("")
    .map((char) => codes[char])
    .join("");
  return { encoded, codes, root };
}

// function to decode the encoded string
function huffmandecoding(encoded, root) {
  if (!root) return "";
  // Single character: tree is one leaf; code is "" so encoded has no bits (cannot recover count)
  if (root.char !== null) return "";
  // if the root is a leaf node, return the character
  let decoded = "";
  // current node
  let current = root;
  // iterate through the encoded string
  for (const bit of encoded) {
    // if the bit is 0, go to the left child
    current = bit === "0" ? current.left : current.right;
    // if the current node is null, break
    if (!current) break;
    // if the current node is a leaf node, add the character to the decoded string and reset the current node to the root
    if (current.char !== null) {
      // add the character to the decoded string
      decoded += current.char;
      // reset the current node to the root
      current = root;
    }
  }
  // return the decoded string
  return decoded;
}
// test the huffman encoding and decoding
const input = "hello world";
// encode the input string
const { encoded, codes, root } = huffmanencoding(input);

// print the encoded string
console.log("Encoded string:", encoded);
// print the character codes
console.log("Character codes:", codes);

// decode the encoded string
// using the root of the huffman tree
const decoded = huffmandecoding(encoded, root);
// print the decoded string
console.log("Decoded string:", decoded);
