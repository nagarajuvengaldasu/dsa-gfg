class node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
function isSubtree(t, s) {
  //base case if s is null then it is a subtree of t
  if (s === null) {
    return true;
  }
  //base case if t is null then it is not a subtree of s
  if (t === null) {
    return false;
  }
  //if the data of the root of t is equal to the data of the root of s then check if the left and right subtrees are equal
  if (isIdentical(t, s)) {
    return true;
  }
  //if the data of the root of t is not equal to the data of the root of s then check if the left and right subtrees are equal
  return isSubtree(t.left, s) || isSubtree(t.right, s);
}
//function to check if the two trees are identical
function isIdentical(t, s) {
  //base case if both t and s are null then they are identical
  if (t === null && s === null) {
    return true;
  }
  //base case if one of t or s is null then they are not identical
  if (t === null || s === null) {
    return false;
  }
  //if the data of the root of t is equal to the data of the root of s then check if the left and right subtrees are identical
  return (
    t.data === s.data &&
    isIdentical(t.left, s.left) &&
    isIdentical(t.right, s.right)
  );
}
let t = new node(1);
t.left = new node(2);
t.right = new node(3);
t.left.left = new node(4);
t.left.right = new node(5);
t.right.left = new node(6);
t.right.right = new node(7);
let s = new node(2);
s.left = new node(4);
s.right = new node(5);
console.log(isSubtree(t, s));
