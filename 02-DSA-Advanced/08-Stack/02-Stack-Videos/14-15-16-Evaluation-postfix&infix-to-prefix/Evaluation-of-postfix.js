class Stack {
  constructor() {
    this.items = [];
  }
  push(x) {
    this.items.push(x);
  }
  pop() {
    return this.items.pop();
  }
  top() {
    return this.items[this.items.length - 1];
  }
}

function evaluationOfPostfix(exp) {
  let st = new Stack(); // Create an empty stack st
  for (let i = 0; i < exp.length; i++) {
    let x = exp[i];
    if (x >= "0" && x <= "9") {
      st.push(Number(x)); // operand → push to st
    } else {
      let op1 = st.pop();
      let op2 = st.pop();
      let res;
      switch (x) {
        case "+":
          res = op2 + op1;
          break;
        case "-":
          res = op2 - op1;
          break;
        case "*":
          res = op2 * op1;
          break;
        case "/":
          res = op2 / op1;
          break;
        case "%":
          res = op2 % op1;
          break;
        case "^":
          res = Math.pow(op2, op1);
          break;
        default:
          throw new Error("Invalid operator: " + x);
      }
      st.push(res);
    }
  }
  return st.top(); // Return st.top()
}
let exp = "231*+9-";
console.log(evaluationOfPostfix(exp));
