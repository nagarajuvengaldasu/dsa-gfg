/**
 * Stack using Queue
 *
 * PROBLEM: Implement Stack (LIFO) using Queue(s). Operations: push, pop, top, size.
 * Query format: 1 x = push(x), 2 = pop(), 3 = top(), 4 = size()
 *
 * APPROACH: Single queue. On each push(x):
 * - Add x to rear of queue
 * - Rotate (sz-1) times: shift from front, push to rear
 * - Newest element ends up at front = stack top
 *
 * WHY: Queue is FIFO. Rotating after push puts the new element at front (LIFO order).
 */

class MyStack {
  constructor() {
    this.q = [];
  }

  push(x) {
    this.q.push(x);
    let sz = this.q.length;
    for (let i = 0; i < sz - 1; i++) {
      this.q.push(this.q.shift());
    }
  }

  pop() {
    if (this.q.length === 0) {
      return -1;
    }
    return this.q.shift();
  }

  top() {
    if (this.q.length === 0) {
      return -1;
    }
    return this.q[0];
  }

  size() {
    return this.q.length;
  }
}

/**
 * Process queries - returns output array per problem format
 * Queries: 1 x = push, 2 = pop, 3 = top, 4 = size
 * Output: only for queries 3 (top) and 4 (size), as per problem examples
 */
function processQueries(queries) {
  const stack = new MyStack();
  const output = [];
  for (const query of queries) {
    if (query[0] === 1) {
      stack.push(query[1]);
    } else if (query[0] === 2) {
      stack.pop();
    } else if (query[0] === 3) {
      output.push(stack.top());
    } else {
      output.push(stack.size());
    }
  }
  return output;
}

// Manual test
let s = new MyStack();
s.push(1);
s.push(2);
s.push(3);
console.log(s.pop()); // 3
console.log(s.top()); // 2
console.log(s.size()); // 2
console.log(s.q);

// Problem examples
console.log(processQueries([[1, 5], [1, 3], [1, 4], [3], [2], [4]])); // [4, 2]
console.log(processQueries([[4], [3], [1, 10], [3]])); // [0, -1, 10]
