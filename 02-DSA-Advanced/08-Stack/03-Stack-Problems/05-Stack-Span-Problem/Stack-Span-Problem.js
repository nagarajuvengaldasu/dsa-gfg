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
 * Stock Span: span[i] = no. of consecutive days (including i) where price ≤ arr[i].
 * STEP-BY-STEP: Monotonic stack of indices. Pop while arr[top]≤arr[i]. span = i - top or i+1.
 */
class Solution {
  calculateSpan(arr) {
    let n = arr.length;
    let span = new Array(n);
    let stack = [];
    for (let i = 0; i < n; i++) {
      while (stack.length > 0 && arr[stack[stack.length - 1]] <= arr[i]) {
        stack.pop();
      }
      if (stack.length === 0) {
        span[i] = i + 1;
      } else {
        span[i] = i - stack[stack.length - 1];
      }
      // EXECUTION: span[i]=distance to nearest greater element on left.
      stack.push(i);
    }
    return span;
  }
}
let sol = new Solution();
let arr = [18, 12, 13, 14, 11, 16];
console.log(sol.calculateSpan(arr));
