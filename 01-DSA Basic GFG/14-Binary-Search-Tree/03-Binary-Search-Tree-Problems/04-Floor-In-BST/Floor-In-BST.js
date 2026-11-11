class Nod {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
function Floor(root, key) {
  let result = -1;
  while (root !== null) {
    if (root.data === key) {
      return root.data;
    } else if (root.data > key) {
      root = root.left;
    } else {
      result = root.data;
      root = root.right;
    }
  }
  return result;
}
let root = new Nod(10);
root.left = new Nod(5);
root.right = new Nod(15);
root.left.left = new Nod(2);
root.left.right = new Nod(7);
root.right.left = new Nod(12);
root.right.right = new Nod(18);
console.log(Floor(root, 16));
