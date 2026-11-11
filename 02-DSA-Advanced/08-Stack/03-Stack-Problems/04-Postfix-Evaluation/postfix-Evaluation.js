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
 * Postfix Evaluation: 2 1 + 3 * → (2+1)*3 = 9
 * STEP-BY-STEP: Operands → push. Operator → pop 2, compute, push result.
 */
class Solution {
  evaluatePostfix(arr) {
    let stack = new Stack();
    for (let token of arr) {
      if (!isNaN(token)) {
        stack.push(parseInt(token));
        // EXECUTION: Operand → push. "2","1","3" pushed.
      } else {
        let b = stack.pop();
        let a = stack.pop();
        // EXECUTION: Operator: pop b,a. "+" → 1+2=3 push. "*" → 3*3=9 push.
        let result;
        if (token === "+") {
          result = a + b;
        } else if (token === "-") {
          result = a - b;
        } else if (token === "*") {
          result = a * b;
        } else if (token === "/") {
          result = Math.floor(a / b);
        } else if (token === "^") {
          result = Math.pow(a, b);
        }
        stack.push(result);
      }
    }
    return stack.pop();
  }
}
let sol = new Solution();
let arr = ["2", "1", "+", "3", "*"];
console.log(sol.evaluatePostfix(arr));
