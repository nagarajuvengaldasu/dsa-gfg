/*
 * Linked List Implementation of Stack
 * STEP-BY-STEP: New node inserted at head; pop removes from head (LIFO).
 */
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.head = null;
  }
  push(data) {
    const temp = new Node(data);
    temp.next = this.head;
    this.head = temp;
    // EXECUTION: Insert at front. push(1): head=1. push(2): 2→1. push(3): 3→2→1.
  }
  pop() {
    if (this.head === null) return null;
    const temp = this.head;
    this.head = this.head.next;
    return temp.data;
    // EXECUTION: Remove head, return its data. 3→2→1 pop→ returns 3, head=2.
  }
  peek() {
    if (this.head === null) {
      return null;
    }
    return this.head.data;
  }
  isEmpty() {
    return this.head === null;
  }
  size() {
    let count = 0;
    let temp = this.head;
    while (temp !== null) {
      count++;
      temp = temp.next;
    }
    return count;
  }
  printStack() {
    let temp = this.head;
    let str = [];
    while (temp !== null) {
      str.push(temp.data);
      temp = temp.next;
    }
    return str;
  }
}
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log("stack is", stack.printStack());
console.log("popped element is", stack.pop());
console.log("peek of stack is", stack.peek());
console.log(stack.isEmpty() ? "yes" : "no" , "stack is empty");
console.log("size of stack is", stack.size());
