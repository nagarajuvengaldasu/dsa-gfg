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
    const val = this.stack.pop();
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
 * Histogram Max Rectangular Area: Largest rectangle under bars.
 * STEP-BY-STEP: For each bar, find left/right boundaries (smaller bars) using monotonic stack.
 */
class Solution {
  getmaxarea(arr) {
    let n = arr.length;
    let stack = [];
    let maxarea = 0;

    for (let i = 0; i <= n; i++) {
      let currentHeight = (i === n) ? 0 : arr[i];
      while (stack.length > 0 && currentHeight < arr[stack[stack.length - 1]]) {
        let topIndex = stack.pop();
        let height = arr[topIndex];
        let width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
        maxarea = Math.max(maxarea, height * width);
        // EXECUTION: Pop bars taller than current. width = right(i) - left(stack.top) - 1.
      }
      stack.push(i);
    }
    return maxarea;
  }
}
let sol = new Solution();
let arr = [60, 20, 50, 40, 10, 50, 60];
console.log(sol.getmaxarea(arr));
