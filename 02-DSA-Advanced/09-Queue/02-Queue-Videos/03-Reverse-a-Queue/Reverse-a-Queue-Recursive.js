/**
 * Reverse a Queue (Recursive)
 *
 * PROBLEM STATEMENT:
 * Reverse the order of elements in a queue using recursion (no extra data structure).
 * Input: [1, 2, 3, 4, 5]  →  Output: [5, 4, 3, 2, 1]
 *
 * WHY Recursion: Call stack implicitly stores elements.
 * - Deque front, recurse on rest, then enque the front at end.
 * - When we return from recursion, we enque in reverse order.
 *
 * APPROACH:
 * 1. Base: if queue empty, return
 * 2. x = q.deque() (remove front)
 * 3. revQueue(q) (reverse the rest recursively)
 * 4. q.enque(x) (add x at end - now it goes after reversed part)
 *
 * Intuition: Last dequeued is first enqueued → reversal
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
 * revQueue(q) - Reverse queue in-place using recursion
 *
 * EXECUTION:
 * - Deque front (x), reverse rest recursively, then enque x at end
 * - Call stack holds: x1, x2, x3... when we recurse down
 * - On return: we enque in order x5, x4, x3, x2, x1 → reversed
 */
function revQueue(q) {
  if (q.isEmpty()) {
    return;
  }
  let x = q.deque();
  revQueue(q);
  q.enque(x);
}

/**
 * STEP-BY-STEP EXECUTION (recursion trace)
 *
 * Initial: q = [1, 2, 3, 4, 5]
 *
 * revQueue([1,2,3,4,5])
 *   x = 1, q = [2,3,4,5]
 *   revQueue([2,3,4,5])
 *     x = 2, q = [3,4,5]
 *     revQueue([3,4,5])
 *       x = 3, q = [4,5]
 *       revQueue([4,5])
 *         x = 4, q = [5]
 *         revQueue([5])
 *           x = 5, q = []
 *           revQueue([]) → return (base case)
 *         q.enque(5) → q = [5]
 *       q.enque(4) → q = [5, 4]
 *     q.enque(3) → q = [5, 4, 3]
 *   q.enque(2) → q = [5, 4, 3, 2]
 * q.enque(1) → q = [5, 4, 3, 2, 1]
 *
 * Final: q = [5, 4, 3, 2, 1] (reversed)
 */

let q = new Queue();
q.enque(1);
q.enque(2);
q.enque(3);
q.enque(4);
q.enque(5);
revQueue(q);
console.log(q);
