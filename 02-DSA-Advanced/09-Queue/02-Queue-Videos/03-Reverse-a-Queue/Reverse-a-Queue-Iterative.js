/**
 * Reverse a Queue (Iterative - Using Stack)
 *
 * PROBLEM STATEMENT:
 * Reverse the order of elements in a queue.
 * Input: [1, 2, 3, 4, 5]  →  Output: [5, 4, 3, 2, 1]
 *
 * WHY Stack: Stack is LIFO - if we push queue elements onto stack and pop back
 * into queue, order is reversed.
 *
 * APPROACH:
 * 1. Deque all elements from queue and push onto stack
 * 2. Pop all from stack and enque back into queue
 * Result: Queue is reversed (first became last, last became first)
 */

class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }
  enque(x) {
    this.queue.push(x);
  }
  deque() {
    if (this.isEmpty()) {
      return null;
    }
    return this.queue.shift();
  }
  isEmpty() {
    return this.queue.length === 0;
  }
}

/**
 * revQueue(q) - Reverse queue in-place using auxiliary stack
 *
 * EXECUTION:
 * Phase 1: Empty queue → stack
 *   while !q.isEmpty(): stack.push(q.deque())
 * Phase 2: Empty stack → queue
 *   while stack.length > 0: q.enque(stack.pop())
 *
 * Stack's LIFO reverses the FIFO order.
 */
function revQueue(q) {
  let stack = [];
  while (!q.isEmpty()) {
    stack.push(q.deque());
  }
  while (stack.length > 0) {
    q.enque(stack.pop());
  }
}

/**
 * STEP-BY-STEP EXECUTION
 *
 * Initial queue: q.queue = [1, 2, 3, 4, 5]
 *
 * Phase 1 - Deque all to stack:
 *   deque 1 → stack = [1]
 *   deque 2 → stack = [1, 2]
 *   deque 3 → stack = [1, 2, 3]
 *   deque 4 → stack = [1, 2, 3, 4]
 *   deque 5 → stack = [1, 2, 3, 4, 5]
 *   q is empty
 *
 * Phase 2 - Pop all to queue:
 *   pop 5 → q.enque(5), q = [5]
 *   pop 4 → q = [5, 4]
 *   pop 3 → q = [5, 4, 3]
 *   pop 2 → q = [5, 4, 3, 2]
 *   pop 1 → q = [5, 4, 3, 2, 1]
 *   stack empty
 *
 * Final: q.queue = [5, 4, 3, 2, 1] (reversed)
 */

let q = new Queue();
q.enque(1);
q.enque(2);
q.enque(3);
q.enque(4);
q.enque(5);
revQueue(q);
console.log(q);
