/**
 * Queue Data Structure - Basic Implementation
 *
 * PROBLEM STATEMENT:
 * Implement a Queue data structure that follows FIFO (First In First Out) principle.
 * - Elements are added at the rear (end)
 * - Elements are removed from the front (beginning)
 *
 * WHY: Queue is used when we need to process elements in the order they arrive
 * (e.g., task scheduling, BFS, printer queue).
 *
 * This implementation uses JavaScript array with push() and shift().
 */

class Queue {
  /**
   * Constructor - Initialize an empty queue
   *
   * EXECUTION:
   * - Creates an empty array (queueArray) to store queue elements
   * - Array index 0 = front, last index = rear
   *
   * WHY: Array provides simple storage; push adds at end, shift removes from front
   */
  constructor() {
    this.queueArray = [];
  }

  /**
   * enqueue(x) - Add element x at the rear (end) of the queue
   * @param {*} x - Element to add
   *
   * EXECUTION:
   * - push(x) adds element at the end of array (rear)
   * - Time: O(1)
   *
   * Step-by-step example:
   *   Initial: queueArray = []
   *   enqueue(1): queueArray.push(1) → queueArray = [1]
   *   enqueue(2): queueArray.push(2) → queueArray = [1, 2]
   *   enqueue(3): queueArray.push(3) → queueArray = [1, 2, 3]
   */
  enqueue(x) {
    this.queueArray.push(x);
  }

  /**
   * dequeue() - Remove and return element from the front of the queue
   * @returns {*} - Removed element, or null if empty
   *
   * EXECUTION:
   * 1. Check if queue is empty (isEmpty())
   * 2. If empty, return null
   * 3. Otherwise: shift() removes first element and returns it
   *    - shift() shifts all remaining elements left by one index
   *    - Time: O(n) due to shifting
   *
   * Step-by-step example:
   *   Queue: [1, 2, 3]
   *   dequeue(): isEmpty() → false
   *     shift() removes 1, returns 1
   *     queueArray = [2, 3]
   */
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.queueArray.shift();
  }

  /**
   * front() - Get the front element without removing it
   * @returns {*} - Front element (or undefined if empty)
   *
   * EXECUTION:
   * - Return queueArray[0] (first element)
   * - Time: O(1)
   *
   * Step-by-step example:
   *   Queue: [1, 2, 3]
   *   front() → returns 1 (queueArray[0])
   */
  front() {
    return this.queueArray[0];
  }

  /**
   * isEmpty() - Check if the queue is empty
   * @returns {boolean} - true if empty, false otherwise
   *
   * EXECUTION:
   * - Return queueArray.length === 0
   * - Time: O(1)
   */
  isEmpty() {
    return this.queueArray.length === 0;
  }
}

/**
 * DETAILED EXECUTION WALKTHROUGH
 *
 * STEP 1: const queue = new Queue();
 *   Execution: constructor() runs
 *   Result: queueArray = []
 *
 * STEP 2: queue.enqueue(1);
 *   Execution: push(1)
 *   Result: queueArray = [1]
 *
 * STEP 3: queue.enqueue(2);
 *   Execution: push(2)
 *   Result: queueArray = [1, 2]
 *
 * STEP 4: queue.enqueue(3);
 *   Execution: push(3)
 *   Result: queueArray = [1, 2, 3]
 *
 * STEP 5: console.log(queue.front());
 *   Execution: return queueArray[0] = 1
 *   Output: "Front element:  1"
 *
 * STEP 6: console.log(queue.dequeue());
 *   Execution:
 *     isEmpty() → false (length 3)
 *     shift() removes 1, returns 1
 *     queueArray = [2, 3]
 *   Output: "Dequeued element:  1"
 *
 * STEP 7: console.log(queue.front());
 *   Execution: return queueArray[0] = 2 (new front after dequeue)
 *   Output: "Front element:  2"
 *
 * STEP 8: console.log(queue.isEmpty());
 *   Execution: queueArray.length === 0 → false (still has [2, 3])
 *   Output: "Is Empty:  false"
 *
 * STEP 9: console.log(queue.queueArray);
 *   Output: "Queue:  [ 2, 3 ]"
 */

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log("Front element: ", queue.front());
console.log("Dequeued element: ", queue.dequeue());
console.log("Front element: ", queue.front());
console.log("Is Empty: ", queue.isEmpty());
console.log("Queue: ", queue.queueArray);