/*
 * Get Min at Pop (returns array). Same encoding: x<min → push 2*x-min.
 * At pop: result[i]=min. If top<min, min=2*min-top (recover previous min).
 */
class Solution {
  _push(arr, n) {
    const stack = new Stack();
    for (let i = 0; i < n; i++) {
      const x = arr[i];
      if (stack.isEmpty()) {
        stack.arr.push(x);
        stack.min = x;
      } else if (x >= stack.min) {
        stack.arr.push(x);
      } else {
        stack.arr.push(2 * x - stack.min);
        stack.min = x;
      }
    }
    return stack;
  }

  /**
   * At each pop, the current min (before pop) is the answer; then update min if top was encoded.
   */
  _getMinAtPop(s) {
    const result = [];
    while (!s.isEmpty()) {
      result.push(s.min);
      const top = s.pop();
      if (top < s.min) {
        s.min = 2 * s.min - top;
      }
    }
    return result;
  }
}

// Stack with array and min property
class Stack {
  constructor() {
    this.arr = [];
    this.min = 0;
  }
  push(x) {
    this.arr.push(x);
  }
  pop() {
    return this.arr.pop();
  }
  isEmpty() {
    return this.arr.length === 0;
  }
}

// --- Tests ---
const solution = new Solution();

// Example 1: [1, 2, 3, 4, 5] -> [1, 1, 1, 1, 1]
let arr1 = [1, 2, 3, 4, 5];
let s1 = solution._push(arr1, arr1.length);
console.log(solution._getMinAtPop(s1)); // [1, 1, 1, 1, 1]

// Example 2: [1, 6, 43, 1, 2, 0, 5] -> [0, 0, 1, 1, 1, 1, 1]
let arr2 = [1, 6, 43, 1, 2, 0, 5];
let s2 = solution._push(arr2, arr2.length);
console.log(solution._getMinAtPop(s2)); // [0, 0, 1, 1, 1, 1, 1]
