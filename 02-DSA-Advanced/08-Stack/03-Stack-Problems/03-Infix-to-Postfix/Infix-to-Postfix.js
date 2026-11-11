class Stack {
  constructor() {
    this.stack = [];
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
/*
 * Infix to Postfix: a*(b+c)/d → abc+*d/
 * STEP-BY-STEP: Operands → output. Operators → stack by precedence. () pops until (.
 */
class solution {
  infixToPostfix(s) {
    let stack = new Stack();
    let result = "";
    let prec = {
      "+": 1,
      "-": 1,
      "*": 2,
      "/": 2,
      "^": 3,
    };
    for (let ch of s) {
      if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z") || (ch >= "0" && ch <= "9")) {
        result += ch;
        // EXECUTION: Operand → add to result.
      } else if (ch === "(") {
        stack.push(ch);
      } else if (ch === ")") {
        while (!stack.isEmpty() && stack.top() !== "(") {
          result += stack.pop();
        }
        stack.pop();
        // EXECUTION: Pop until ( and discard (.
      } else {
        while (
          !stack.isEmpty() &&
          stack.top() !== "(" &&
          (prec[stack.top()] > prec[ch] ||
            (prec[stack.top()] === prec[ch] && ch !== "^"))
        ) {
          result += stack.pop();
        }
        stack.push(ch);
      }
    }
    while (!stack.isEmpty()) {
      result += stack.pop();
    }
    return result;
  }
}

let sol = new solution();
let s = "a*(b+c)/d";
console.log(sol.infixToPostfix(s));
