class Stack {
  constructor() {
    this.stack = [];
    this.top = -1;
  }
  push(x) {
    this.stack.push(x);
    this.top++;
  }
  pop() {
    let val = this.stack.pop();
    this.top--;
    return val;
  }
  top() {
    return this.stack[this.top];
  }
  isEmpty() {
    return this.top === -1;
  }
}
/*
 * Celebrity Problem: Person known by all but knows nobody. mat[i][j]=1 means i knows j.
 * STEP-BY-STEP: Two pointers i,j. If mat[i][j]=1, i not celeb → i++. Else j not celeb → j--.
 */
class Solution {
  celebrity(mat) {
    let n = mat.length;
    let i = 0;
    let j = n - 1;
    while (i < j) {
      if (mat[i][j] === 1) {
        i++;
        // EXECUTION: i knows j → i not celebrity.
      } else {
        j--;
        // EXECUTION: i doesn't know j → j not celebrity.
      }
    }
    let candidate = i;
    for (let k = 0; k < n; k++) {
      if (k !== candidate) {
        if (mat[candidate][k] === 1 || mat[k][candidate] === 0) {
          return -1;
        }
      }
    }
    return candidate;
  }
}
let sol = new Solution();
let mat = [
  [0, 1, 0],
  [0, 0, 0],
  [0, 1, 0],
];
console.log(sol.celebrity(mat));
