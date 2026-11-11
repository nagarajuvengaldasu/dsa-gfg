function isBalanced(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let x = str[i];
    if (x === "(" || x === "{" || x === "[") {
      stack.push(x);
    } else {
      if (stack.length === 0) {
        return false;
      } else if (!matching(stack[stack.length - 1], x)) {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  return stack.length === 0;
}
function matching(a, b) {
  return (
    (a === "(" && b === ")") ||
    (a === "{" && b === "}") ||
    (a === "[" && b === "]")
  );
}
let str = "{[()]}{}";
console.log(isBalanced(str));
