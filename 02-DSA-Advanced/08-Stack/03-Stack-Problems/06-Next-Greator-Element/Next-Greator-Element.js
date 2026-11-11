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
 * Next Greater Element: For each arr[i], find next greater element to the right.
 * STEP-BY-STEP: Traverse right to left. Monotonic stack. Pop while top≤arr[i].
 */
function nextGreaterElement(arr) {
  let n = arr.length;
  let result = new Array(n);
  let stack = [];
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
      stack.pop();
    }
    result[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
    stack.push(arr[i]);
    // EXECUTION: [1,3,2,4] → result=[3,4,4,-1]
  }
  return result;
}
let arr = [1, 3, 2, 4];
console.log(nextGreaterElement(arr));
