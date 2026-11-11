/*
 * Array Implementation of Stack
 * STEP-BY-STEP: push adds to end, pop removes from end (LIFO).
 */
let stack = [];
stack.push(1);  // stack=[1]
stack.push(2);  // stack=[1,2]
stack.push(3);  // stack=[1,2,3]
console.log(stack);
stack.pop();    // removes 3, stack=[1,2]
console.log(stack);
console.log(stack[stack.length - 1]);  // peek: 2
console.log(stack.length === 0);       // isEmpty: false
console.log(stack.length);             // size: 2