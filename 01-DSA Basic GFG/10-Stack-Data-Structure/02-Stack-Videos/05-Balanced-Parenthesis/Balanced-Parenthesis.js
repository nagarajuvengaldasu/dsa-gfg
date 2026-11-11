/*
 * Balanced Parenthesis: Check if brackets (), {}, [] are properly matched.
 * STEP-BY-STEP: Push opening; for closing, check match with top, pop if yes.
 */
function isBalanced(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let x = str[i];
    if (x === "(" || x === "{" || x === "[") {
      stack.push(x);
      // EXECUTION: Opening bracket → push. e.g. "{[(" → stack=[{,[,(]
    } else {
      if (stack.length === 0) return false;
      // EXECUTION: Closing with empty stack → unbalanced.
      else if (!matching(stack[stack.length - 1], x)) return false;
      // EXECUTION: Top doesn't match closing → unbalanced.
      else stack.pop();
      // EXECUTION: Match found → pop. ")" matches "(" → pop.
    }
  }
  return stack.length === 0;
  // WHY: All matched iff stack is empty.
}
function matching(a, b) {
  return (
    (a === "(" && b === ")") ||
    (a === "{" && b === "}") ||
    (a === "[" && b === "]")
  );
}
let str = "{[()]}{}}";
console.log(isBalanced(str));
