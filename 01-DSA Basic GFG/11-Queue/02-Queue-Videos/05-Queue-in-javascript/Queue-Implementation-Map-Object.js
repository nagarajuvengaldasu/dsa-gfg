/**
 * Queue Implementation Using JavaScript Object/Map
 *
 * Queue follows FIFO (First In First Out) principle
 * - Uses an object (map) to store elements with numeric keys (indices)
 * - Uses front and rear pointers to track positions
 * - front = -1 and rear = -1 means queue is empty
 *
 * Object Representation:
 * map = {0: 10, 1: 20, 2: 30, 3: 40, 4: 50}
 *        ↑                        ↑
 *      front                    rear
 *    (index 0)              (index 4)
 *
 * Advantages:
 * - O(1) dequeue operation (no shifting needed)
 * - More efficient than array with shift()
 */

class Queue {
  /**
   * Constructor - Initialize an empty queue
   *
   * Execution:
   * - Creates an empty object to store queue elements
   * - Initializes front = -1 (indicates empty queue)
   * - Initializes rear = -1 (indicates empty queue)
   *
   * Example:
   * After: map = {}, front = -1, rear = -1
   */
  constructor() {
    // Initialize an empty object to store queue elements
    // Keys will be numeric indices (0, 1, 2, ...)
    this.map = {};
    // Front pointer: -1 means queue is empty
    // When queue has elements, front points to the first element's index
    this.front = -1;
    // Rear pointer: -1 means queue is empty
    // When queue has elements, rear points to the last element's index
    this.rear = -1;
  }

  /**
   * enqueue(x) - Add element x at the rear (end) of the queue
   * @param {*} x - The element to add to the queue
   *
   * Execution Steps:
   * 1. Check if queue is empty (front === -1)
   *    - If empty: Increment front to 0 (first element)
   * 2. Increment rear pointer
   * 3. Store element at map[rear]
   *
   * Example walkthrough:
   * Initial: map = {}, front = -1, rear = -1
   *
   * enqueue(10):
   *   - front === -1 → true (empty queue)
   *   - front++ → front = 0
   *   - rear++ → rear = 0
   *   - map[0] = 10
   *   Result: map = {0: 10}, front = 0, rear = 0
   *
   * enqueue(20):
   *   - front === -1 → false (queue has elements)
   *   - rear++ → rear = 1
   *   - map[1] = 20
   *   Result: map = {0: 10, 1: 20}, front = 0, rear = 1
   *
   * enqueue(30):
   *   - rear++ → rear = 2
   *   - map[2] = 30
   *   Result: map = {0: 10, 1: 20, 2: 30}, front = 0, rear = 2
   *
   * Time Complexity: O(1) - Constant time operation
   */
  enqueue(x) {
    // STEP 1: Check if queue is empty
    if (this.front === -1) {
      // Queue is empty, this is the first element
      // Increment front from -1 to 0 (first index)
      this.front++;
    }
    // STEP 2: Increment rear pointer to next available position
    this.rear++;
    // STEP 3: Store the element at the rear position
    // map[rear] acts as the storage location
    this.map[this.rear] = x;
  }

  /**
   * dequeue() - Remove and return element from the front of the queue
   * @returns {*} - The removed element, or null if queue is empty
   *
   * Execution Steps:
   * 1. Check if queue is empty (front === -1)
   *    - If empty: Return null
   * 2. Store the element at map[front]
   * 3. Delete the element from map[front]
   * 4. Increment front pointer
   * 5. Check if queue becomes empty (front > rear)
   *    - If empty: Reset both front and rear to -1
   * 6. Return the stored element
   *
   * Example walkthrough:
   * Queue: map = {0: 10, 1: 20, 2: 30}, front = 0, rear = 2
   *
   * dequeue():
   *   - front === -1 → false (not empty)
   *   - res = map[0] = 10
   *   - delete map[0] → map = {1: 20, 2: 30}
   *   - front++ → front = 1
   *   - front (1) > rear (2) → false (not empty)
   *   - Return 10
   *   Result: map = {1: 20, 2: 30}, front = 1, rear = 2
   *
   * dequeue():
   *   - res = map[1] = 20
   *   - delete map[1] → map = {2: 30}
   *   - front++ → front = 2
   *   - front (2) > rear (2) → false (still has element)
   *   - Return 20
   *   Result: map = {2: 30}, front = 2, rear = 2
   *
   * dequeue():
   *   - res = map[2] = 30
   *   - delete map[2] → map = {}
   *   - front++ → front = 3
   *   - front (3) > rear (2) → true (queue is now empty)
   *   - front = -1, rear = -1
   *   - Return 30
   *   Result: map = {}, front = -1, rear = -1
   *
   * Time Complexity: O(1) - Constant time operation (no shifting needed!)
   */
  dequeue() {
    // STEP 1: Check if queue is empty
    if (this.front === -1) {
      // Queue is empty, nothing to remove
      return null;
    }
    // STEP 2: Store the element at front position before removing
    let res = this.map[this.front];
    // STEP 3: Delete the element from the map
    // This removes the key-value pair from the object
    delete this.map[this.front];
    // STEP 4: Move front pointer to the next element
    this.front++;
    // STEP 5: Check if queue becomes empty after dequeue
    // This happens when front pointer passes rear pointer
    if (this.front > this.rear) {
      // Queue is now empty, reset both pointers to -1
      this.front = -1;
      this.rear = -1;
    }
    // STEP 6: Return the removed element
    return res;
  }

  /**
   * getFront() - Get the front element without removing it
   * @returns {*} - The front element, or null if queue is empty
   *
   * Execution:
   * 1. Check if queue is empty (front === -1)
   * 2. If empty, return null
   * 3. Otherwise, return map[front] (oldest element)
   *
   * Example:
   * Queue: map = {0: 10, 1: 20, 2: 30}, front = 0, rear = 2
   * getFront() → returns map[0] = 10
   *
   * Time Complexity: O(1) - Direct object property access
   */
  getFront() {
    // Check if queue is empty
    if (this.front === -1) {
      // Queue is empty, no front element
      return null;
    }
    // Return the element at front position (oldest element)
    return this.map[this.front];
  }

  /**
   * getRear() - Get the rear element (last added) without removing it
   * @returns {*} - The rear element, or null if queue is empty
   *
   * Execution:
   * 1. Check if queue is empty (rear === -1)
   * 2. If empty, return null
   * 3. Otherwise, return map[rear] (newest element)
   *
   * Example:
   * Queue: map = {0: 10, 1: 20, 2: 30}, front = 0, rear = 2
   * getRear() → returns map[2] = 30
   *
   * Time Complexity: O(1) - Direct object property access
   */
  getRear() {
    // Check if queue is empty
    if (this.rear === -1) {
      // Queue is empty, no rear element
      return null;
    }
    // Return the element at rear position (newest element)
    return this.map[this.rear];
  }

  /**
   * getSize() - Get the number of elements in the queue
   * @returns {number} - The size of the queue
   *
   * Execution:
   * - Calculate: rear - front + 1
   * - This gives the number of elements between front and rear (inclusive)
   *
   * Example:
   * front = 0, rear = 2 → size = 2 - 0 + 1 = 3 elements
   * front = 1, rear = 3 → size = 3 - 1 + 1 = 3 elements
   * front = -1, rear = -1 → size = -1 - (-1) + 1 = 1 (but should be 0)
   *
   * Note: When queue is empty (front = -1), this formula gives 1
   * But isEmpty() check handles this case
   *
   * Time Complexity: O(1) - Simple arithmetic operation
   */
  getSize() {
    // Calculate size: number of elements = rear - front + 1
    // This works because both front and rear are inclusive
    return this.rear - this.front + 1;
  }

  /**
   * isEmpty() - Check if the queue is empty
   * @returns {boolean} - true if queue is empty, false otherwise
   *
   * Execution:
   * - Check if front === -1
   * - Return true if empty, false otherwise
   *
   * Example:
   * front = 0, rear = 2 → isEmpty() = false
   * front = -1, rear = -1 → isEmpty() = true
   *
   * Time Complexity: O(1) - Simple comparison
   */
  isEmpty() {
    // Queue is empty when front is -1
    // This is the initial state and also the state after removing all elements
    return this.front === -1;
  }

  /**
   * printQueue() - Display all elements in the queue from front to rear
   *
   * Execution:
   * 1. Loop from front index to rear index (inclusive)
   * 2. Print each element with a space separator
   * 3. Use process.stdout.write() to print side by side
   * 4. Print newline after all elements
   *
   * Example:
   * Queue: map = {0: 10, 1: 20, 2: 30}, front = 0, rear = 2
   * printQueue() → prints: "10 20 30 \n"
   *
   * Loop execution:
   * i = 0: print "10 "
   * i = 1: print "20 "
   * i = 2: print "30 "
   * After loop: print "\n"
   *
   * Time Complexity: O(n) - Must visit each element once
   */
  printQueue() {
    // STEP 1: Loop from front index to rear index (inclusive)
    for (let i = this.front; i <= this.rear; i++) {
      // STEP 1.1: Print current element with a space separator
      // process.stdout.write() prints without newline (side by side)
      process.stdout.write(this.map[i] + " ");
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
// After execution: map = {}, front = -1, rear = -1

// STEP 2: Add elements to the queue
q.enqueue(10);
// Execution:
//   front === -1 → true (empty)
//   front++ → front = 0
//   rear++ → rear = 0
//   map[0] = 10
// After: map = {0: 10}, front = 0, rear = 0

q.enqueue(20);
// Execution:
//   front === -1 → false (has elements)
//   rear++ → rear = 1
//   map[1] = 20
// After: map = {0: 10, 1: 20}, front = 0, rear = 1

q.enqueue(30);
// Execution:
//   rear++ → rear = 2
//   map[2] = 30
// After: map = {0: 10, 1: 20, 2: 30}, front = 0, rear = 2

q.enqueue(40);
// Execution:
//   rear++ → rear = 3
//   map[3] = 40
// After: map = {0: 10, 1: 20, 2: 30, 3: 40}, front = 0, rear = 3

q.enqueue(50);
// Execution:
//   rear++ → rear = 4
//   map[4] = 50
// After: map = {0: 10, 1: 20, 2: 30, 3: 40, 4: 50}, front = 0, rear = 4

// STEP 3: Get front element (oldest)
console.log(q.getFront());
// Execution:
//   front === -1 → false (not empty)
//   return map[0] = 10
// Output: 10

// STEP 4: Get rear element (newest)
console.log(q.getRear());
// Execution:
//   rear === -1 → false (not empty)
//   return map[4] = 50
// Output: 50

// STEP 5: Get queue size
console.log(q.getSize());
// Execution: return rear - front + 1 = 4 - 0 + 1 = 5
// Output: 5

// STEP 6: Check if queue is empty
console.log(q.isEmpty());
// Execution: return (front === -1) = false
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
 * map = {}
 * front = -1
 * rear = -1
 *
 * After enqueue(10):
 * map = {0: 10}
 * front = 0
 * rear = 0
 *
 * After enqueue(20):
 * map = {0: 10, 1: 20}
 * front = 0
 * rear = 1
 *
 * After enqueue(30):
 * map = {0: 10, 1: 20, 2: 30}
 * front = 0
 * rear = 2
 *
 * After enqueue(40):
 * map = {0: 10, 1: 20, 2: 30, 3: 40}
 * front = 0
 * rear = 3
 *
 * After enqueue(50):
 * map = {0: 10, 1: 20, 2: 30, 3: 40, 4: 50}
 * front = 0
 * rear = 4
 *
 * After dequeue() (removes 10):
 * map = {1: 20, 2: 30, 3: 40, 4: 50}
 * front = 1
 * rear = 4
 *
 * After dequeue() (removes 20):
 * map = {2: 30, 3: 40, 4: 50}
 * front = 2
 * rear = 4
 *
 * After dequeue() (removes 30, 40, 50):
 * map = {}
 * front = -1
 * rear = -1
 */
