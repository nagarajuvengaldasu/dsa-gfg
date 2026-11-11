/**
 * Queue Reversal
 *
 * PROBLEM: Reverse the order of elements in a queue.
 * Input: [5, 10, 15, 20, 25]  →  Output: [25, 20, 15, 10, 5]
 *
 * OPTIMAL APPROACH: Use auxiliary stack
 * - Time: O(n) - each element visited twice (dequeue+push, pop+enqueue)
 * - Space: O(n) - stack holds n elements
 *
 * WHY: Stack is LIFO. Push queue→stack then pop stack→queue reverses FIFO order.
 */

class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(x) {
    this.queue.push(x);
  }
  dequeue() {
    if (this.isEmpty()) return null;
    return this.queue.shift();
  }
  isEmpty() {
    return this.queue.length === 0;
  }
  toArray() {
    return [...this.queue];
  }
}

/**
 * Reverse queue in-place using stack
 * @param {Queue} q - Queue with enqueue(), dequeue(), isEmpty()
 */
function revQueue(q) {
  const stack = [];
  while (!q.isEmpty()) {
    stack.push(q.dequeue());
  }
  while (stack.length > 0) {
    q.enqueue(stack.pop());
  }
}

/**
 * Helper: Reverse array-representation of queue and return result
 * @param {number[]} arr - Queue elements
 * @returns {number[]} - Reversed array
 */
function revQueueArray(arr) {
  const q = new Queue();
  for (const x of arr) q.enqueue(x);
  revQueue(q);
  return q.toArray();
}

// Test
console.log(revQueueArray([5, 10, 15, 20, 25])); // [25, 20, 15, 10, 5]
console.log(revQueueArray([1, 2, 3, 4, 5]));     // [5, 4, 3, 2, 1]
