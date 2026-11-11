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
 * Max of Min for Every Window Size: ans[k] = max of min in all windows of size k.
 * STEP-BY-STEP: left/right = next smaller on left/right. len = right-left-1. ans[len]=max(ans[len], arr[i]).
 */
class Solution {
  maxofmin(arr) {
    let n = arr.length;
    let left = new Array(n);
    let right = new Array(n);
    let stack = [];
    for (let i = 0; i < n; i++) {
      while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
        stack.pop();
      }
      left[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
      stack.push(i);
    }
    stack = [];
    for (let i = n - 1; i >= 0; i--) {
      while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
        stack.pop();
      }
      right[i] = stack.length === 0 ? n : stack[stack.length - 1];
      stack.push(i);
    }
    let ans = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
      let len = right[i] - left[i] - 1;
      ans[len] = Math.max(ans[len], arr[i]);
      // EXECUTION: arr[i] is min in window of size len. Update ans[len].
    }
    for (let i = n - 1; i >= 1; i--) {
      ans[i] = Math.max(ans[i], ans[i + 1]);
      // EXECUTION: ans[k] = max of ans[k], ans[k+1], ... (window k is contained in k+1).
    }
    return ans.slice(1);
  }
}
let sol = new Solution();
let arr = [10, 20, 30, 50, 10, 70, 30];
console.log(sol.maxofmin(arr));
