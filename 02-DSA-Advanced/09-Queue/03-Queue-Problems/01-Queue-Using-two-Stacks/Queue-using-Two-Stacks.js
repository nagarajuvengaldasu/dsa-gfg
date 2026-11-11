/**
 * Queue using Two Stacks
 *
 * PROBLEM: Implement Queue (FIFO) using 2 stacks (LIFO).
 * Query types: (i) 1 x = push(x)  (ii) 2 = pop() and print (return -1 if empty)
 *
 * APPROACH:
 * - s1: used for push - new elements go here
 * - s2: used for pop - when empty, pour s1 into s2 (reverses order → FIFO)
 * - pop from s2 gives queue front
 *
 * WHY: Stack is LIFO. Moving s1→s2 reverses; popping from s2 gives FIFO order.
 */

class StackQueue {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }

  push(x) {
    this.s1.push(x);
  }

  pop() {
    if (this.s1.length === 0 && this.s2.length === 0) {
      return -1;
    }
    if (this.s2.length === 0) {
      while (this.s1.length > 0) {
        this.s2.push(this.s1.pop());
      }
    }
    return this.s2.pop();
  }
}

/**
 * Process queries and return array of popped elements
 * @param {number} q - Number of queries
 * @param {number[][]} queries - [[1, x], [2], ...]
 * @returns {number[]} - Array of popped values (or -1 when empty)
 *
 * EXECUTION for [[1, 2], [1, 3], [2], [1, 4], [2]]:
 *   [1,2] push 2 → s1=[2]
 *   [1,3] push 3 → s1=[2,3]
 *   [2]   pop: s2 empty → pour s1→s2 → s2=[3,2], pop 2 → output [2]
 *   [1,4] push 4 → s1=[4], s2=[3]
 *   [2]   pop: s2 has 3 → pop 3 → output [2, 3]
 */
function processQueries(q, queries) {
  const queue = new StackQueue();
  const output = [];
  for (const query of queries) {
    if (query[0] === 1) {
      queue.push(query[1]);
    } else {
      output.push(queue.pop());
    }
  }
  return output;
}

// Manual test
let qu = new StackQueue();
qu.push(1);
qu.push(2);
qu.push(3);
console.log(qu.pop()); // 1
console.log(qu.pop()); // 2

// Problem format test
console.log(processQueries(5, [[1, 2], [1, 3], [2], [1, 4], [2]])); // [2, 3]
console.log(processQueries(4, [[1, 2], [2], [2], [1, 4]])); // [2, -1]
