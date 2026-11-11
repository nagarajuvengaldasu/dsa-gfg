/*
 * Get Min at Pop: For each pop, return min so far. O(1) space using encoding.
 * When x < min: push 2*x-min, min=x. At pop: if top < min, min = 2*min-top.
 */
class Stack {
  constructor() {
    this.stack = [];
    this.min = Infinity;
  }
  push(x) {
    this.stack.push(x);
  }
  pop() {
    return this.stack.pop();
  }
  top() {
    return this.stack[this.stack.length - 1];
  }
  isEmpty() {
    return this.stack.length === 0;
  }
}

class Solution {
  _push(arr, n) {
    let stack = new Stack();
    let min = Infinity;
    for (let i = 0; i < n; i++) {
      if (stack.isEmpty()) {
        stack.push(arr[i]);
        min = arr[i];
      } else if (arr[i] >= min) {
        stack.push(arr[i]);
      } else {
        stack.push(2 * arr[i] - min);
        min = arr[i];
        // EXECUTION: New min. Push encoded value so we can recover prev min at pop.
      }
    }
    stack.min = min;
    return stack;
  }
  _getMinAtPop(s) {
    let result = [];
    let min = s.min;
    while (!s.isEmpty()) {
      result.push(min);
      let top = s.pop();
      if (top < min) {
        min = 2 * min - top;
      }
    }
    console.log(result.join(" "));
  }
}
let sol = new Solution();
let arr = [18, 19, 29, 15, 16];
let n = arr.length;
let s = sol._push(arr, n);
sol._getMinAtPop(s);
