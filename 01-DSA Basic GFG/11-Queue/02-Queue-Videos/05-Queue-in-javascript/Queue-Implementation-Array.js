/**
 * Queue Implementation Using JavaScript Array
 *
 * Queue follows FIFO (First In First Out) principle
 * - Elements are added at the end (rear) using push()
 * - Elements are removed from the beginning (front) using shift()
 *
 * Array Representation:
 * arr = [10, 20, 30, 40, 50]
 *        ↑              ↑
 *      front          rear
 *    (index 0)    (last index)
 */

class Queue {
  /**
   * Constructor - Initialize an empty queue
   *
   * Execution:
   * - Creates an empty array to store queue elements
   * - Array will grow/shrink dynamically as elements are added/removed
   *
   * Example:
   * After: this.arr = []
   */
  constructor() {
    // Initialize an empty array to store queue elements
    this.arr = [];
  }

  /**
   * enqueue(x) - Add element x at the rear (end) of the queue
   * @param {*} x - The element to add to the queue
   *
   * Execution:
   * 1. Use array push() method to add element at the end
   * 2. push() automatically adds element and returns new length
   *
   * Example walkthrough:
   * Initial: arr = []
   *
   * enqueue(10):
   *   - arr.push(10)
   *   - arr = [10]
   *
   * enqueue(20):
   *   - arr.push(20)
   *   - arr = [10, 20]
   *
   * enqueue(30):
   *   - arr.push(30)
   *   - arr = [10, 20, 30]
   *
   * Time Complexity: O(1) - push() is constant time
   */
  enqueue(x) {
    // Add element x at the end of the array (rear of queue)
    // push() adds element at the last index
    this.arr.push(x);
  }

  /**
   * dequeue() - Remove and return element from the front (beginning) of the queue
   * @returns {*} - The removed element, or null if queue is empty
   *
   * Execution:
   * 1. Check if array is empty (length === 0)
   * 2. If empty, return null
   * 3. Otherwise, use shift() to remove first element
   * 4. shift() removes element at index 0 and shifts all other elements left
   * 5. Return the removed element
   *
   * Example walkthrough:
   * Queue: arr = [10, 20, 30, 40, 50]
   *
   * dequeue():
   *   - arr.length (5) !== 0 → not empty
   *   - arr.shift() → removes 10, shifts elements
   *   - arr = [20, 30, 40, 50]
   *   - Returns 10
   *
   * dequeue():
   *   - arr.shift() → removes 20
   *   - arr = [30, 40, 50]
   *   - Returns 20
   *
   * Time Complexity: O(n) - shift() requires shifting all elements
   * Note: This is less efficient than pointer-based implementation
   */
  dequeue() {
    // STEP 1: Check if queue is empty
    if (this.arr.length === 0) {
      // Queue is empty, nothing to remove
      return null;
    }
    // STEP 2: Remove and return the first element (front of queue)
    // shift() removes element at index 0 and shifts all elements left by one position
    return this.arr.shift();
  }

  /**
   * getFront() - Get the front element without removing it
   * @returns {*} - The front element, or null if queue is empty
   *
   * Execution:
   * 1. Check if array is empty
   * 2. If empty, return null
   * 3. Otherwise, return arr[0] (first element)
   *
   * Example:
   * Queue: arr = [10, 20, 30, 40, 50]
   * getFront() → returns 10 (element at index 0)
   *
   * Time Complexity: O(1) - Direct array access
   */
  getFront() {
    // STEP 1: Check if queue is empty
    if (this.arr.length === 0) {
      // Queue is empty, no front element
      return null;
    }
    // STEP 2: Return the first element (front of queue)
    // Front element is always at index 0
    return this.arr[0];
  }

  /**
   * getRear() - Get the rear element (last added) without removing it
   * @returns {*} - The rear element, or null if queue is empty
   *
   * Execution:
   * 1. Check if array is empty
   * 2. If empty, return null
   * 3. Otherwise, return arr[arr.length - 1] (last element)
   *
   * Example:
   * Queue: arr = [10, 20, 30, 40, 50]
   * getRear() → returns 50 (element at index 4, which is length-1)
   *
   * Time Complexity: O(1) - Direct array access
   */
  getRear() {
    // STEP 1: Check if queue is empty
    if (this.arr.length === 0) {
      // Queue is empty, no rear element
      return null;
    }
    // STEP 2: Return the last element (rear of queue)
    // Rear element is at the last index: arr.length - 1
    return this.arr[this.arr.length - 1];
  }

  /**
   * getSize() - Get the number of elements in the queue
   * @returns {number} - The size of the queue
   *
   * Execution:
   * - Return the length of the array
   * - Array length automatically tracks number of elements
   *
   * Example:
   * Queue: arr = [10, 20, 30, 40, 50]
   * getSize() → returns 5
   *
   * Time Complexity: O(1) - Array length is a property
   */
  getSize() {
    // Return the length of the array (number of elements in queue)
    return this.arr.length;
  }

  /**
   * isEmpty() - Check if the queue is empty
   * @returns {boolean} - true if queue is empty, false otherwise
   *
   * Execution:
   * - Check if array length is 0
   * - Return true if empty, false otherwise
   *
   * Example:
   * Queue: arr = [10, 20, 30]
   * isEmpty() → returns false
   *
   * Queue: arr = []
   * isEmpty() → returns true
   *
   * Time Complexity: O(1) - Simple comparison
   */
  isEmpty() {
    // Queue is empty if array length is 0
    return this.arr.length === 0;
  }

  /**
   * printQueue() - Display all elements in the queue from front to rear
   *
   * Execution:
   * 1. Loop through array from index 0 to length-1
   * 2. Print each element with a space separator
   * 3. Use process.stdout.write() to print side by side (no newline)
   * 4. Print newline after all elements
   *
   * Example:
   * Queue: arr = [10, 20, 30, 40, 50]
   * printQueue() → prints: "10 20 30 40 50 \n"
   *
   * Loop execution:
   * i=0: print "10 "
   * i=1: print "20 "
   * i=2: print "30 "
   * i=3: print "40 "
   * i=4: print "50 "
   * After loop: print "\n"
   *
   * Time Complexity: O(n) - Must visit each element once
   */
  printQueue() {
    // STEP 1: Loop through all elements in the array
    for (let i = 0; i < this.arr.length; i++) {
      // STEP 1.1: Print current element with a space separator
      // process.stdout.write() prints without newline (side by side)
      process.stdout.write(this.arr[i] + " ");
    }
    // STEP 2: Print a newline after printing all queue elements
    process.stdout.write("\n");
  }
}

/**
 * TEST CODE - Demonstration of Queue operations
 *
 * This section demonstrates how to use the Queue class
 */

// STEP 1: Create a new empty queue
let q = new Queue();
// After execution: arr = []

// STEP 2: Add elements to the queue
q.enqueue(10);
// Execution: arr.push(10)
// After: arr = [10]

q.enqueue(20);
// Execution: arr.push(20)
// After: arr = [10, 20]

q.enqueue(30);
// Execution: arr.push(30)
// After: arr = [10, 20, 30]

q.enqueue(40);
// Execution: arr.push(40)
// After: arr = [10, 20, 30, 40]

q.enqueue(50);
// Execution: arr.push(50)
// After: arr = [10, 20, 30, 40, 50]

// STEP 3: Get front element (oldest)
console.log(q.getFront());
// Execution:
//   arr.length (5) !== 0 → not empty
//   return arr[0] = 10
// Output: 10

// STEP 4: Get rear element (newest)
console.log(q.getRear());
// Execution:
//   arr.length (5) !== 0 → not empty
//   return arr[5-1] = arr[4] = 50
// Output: 50

// STEP 5: Get queue size
console.log(q.getSize());
// Execution: return arr.length = 5
// Output: 5

// STEP 6: Check if queue is empty
console.log(q.isEmpty());
// Execution: return (arr.length === 0) = false
// Output: false

// STEP 7: Print all queue elements
q.printQueue();
// Execution:
//   Loop: i = 0 to 4
//   i=0: print "10 "
//   i=1: print "20 "
//   i=2: print "30 "
//   i=3: print "40 "
//   i=4: print "50 "
//   After loop: print "\n"
// Output: "10 20 30 40 50 \n"

/**
 * VISUAL REPRESENTATION OF QUEUE OPERATIONS
 *
 * Initial state:
 * arr = []
 *
 * After enqueue(10):
 * arr = [10]
 *        ↑
 *    front/rear
 *
 * After enqueue(20):
 * arr = [10, 20]
 *        ↑   ↑
 *      front rear
 *
 * After enqueue(30):
 * arr = [10, 20, 30]
 *        ↑       ↑
 *      front    rear
 *
 * After enqueue(40):
 * arr = [10, 20, 30, 40]
 *        ↑          ↑
 *      front       rear
 *
 * After enqueue(50):
 * arr = [10, 20, 30, 40, 50]
 *        ↑              ↑
 *      front          rear
 *
 * After dequeue() (removes 10):
 * arr = [20, 30, 40, 50]
 *        ↑          ↑
 *      front       rear
 *
 * After dequeue() (removes 20):
 * arr = [30, 40, 50]
 *        ↑       ↑
 *      front    rear
 */
