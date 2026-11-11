
class Solution {
  decodehuffmandata(root, binarystring) {
    let result = "";
    let current = root;
    for (let i = 0; i < binarystring.length; i++) {
      if (binarystring[i] === "0") {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current.left === null && current.right === null) {
        result += current.data;
        current = root;
      }
    }
    return result;
  }
}

