/**
 * Reverse First K elements of Queue
 *
 * PROBLEM: Reverse the order of the first k elements, leave the rest unchanged.
 * Input: q = [1, 2, 3, 4, 5], k = 3  →  Output: [3, 2, 1, 4, 5]
 *
 * APPROACH (Stack):
 * 1. If k > queue.size(), return original
 * 2. Dequeue first k elements and push onto stack
 * 3. Pop from stack and enqueue (reversed k elements go to rear)
 * 4. Dequeue (n-k) elements from front and enqueue at rear (restore remaining order)
 *
 * Time: O(n), Space: O(k)
 */

class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(x) {
    this.queue.push(x);
  }
  dequeue() {
    return this.queue.shift();
  }
  size() {
    return this.queue.length;
  }
  front() {
    return this.queue[0];
  }
  toArray() {
    return [...this.queue];
  }
}

/**
 * Reverse first k elements of queue in-place
 * @param {Queue} q - Queue object
 * @param {number} k - Number of front elements to reverse
 */
function reverseFirstK(q, k) {
  const n = q.size();
  if (k > n) return q.toArray();

  const stack = [];

  // Step 1: Dequeue first k elements onto stack
  for (let i = 0; i < k; i++) {
    stack.push(q.dequeue());
  }

  // Step 2: Pop from stack and enqueue (reversed k at rear)
  while (stack.length > 0) {
    q.enqueue(stack.pop());
  }

  // Step 3: Move (n-k) elements from front to rear
  for (let i = 0; i < n - k; i++) {
    q.enqueue(q.dequeue());
  }
}

/**
 * Helper: Reverse first k of array, return result
 */
function reverseFirstKArray(arr, k) {
  const q = new Queue();
  for (const x of arr) q.enqueue(x);
  reverseFirstK(q, k);
  return q.toArray();
}

// Test
console.log(reverseFirstKArray([1, 2, 3, 4, 5], 9)); // [3, 2, 1, 4, 5]
console.log(reverseFirstKArray([4, 3, 2, 1], 4)); // [1, 2, 3, 4]
