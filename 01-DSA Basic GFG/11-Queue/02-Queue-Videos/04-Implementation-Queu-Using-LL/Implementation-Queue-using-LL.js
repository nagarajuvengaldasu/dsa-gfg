/**
 * Queue Implementation Using Linked List
 *
 * Queue follows FIFO (First In First Out) principle
 * - Elements are added at the rear (end of linked list)
 * - Elements are removed from the front (beginning of linked list)
 *
 * Linked List Structure:
 * front → [10] → [20] → [30] → [40] → [50] ← rear
 *          ↑                              ↑
 *        oldest                        newest
 */

/**
 * Node Class - Represents a single node in the linked list
 * Each node contains:
 * - data: The value stored in the node
 * - next: Pointer to the next node (null if it's the last node)
 */
class Node {
  /**
   * Constructor to create a new node
   * @param {*} data - The data value to store in the node
   *
   * Execution:
   * - Creates a new node object
   * - Sets the data property to the given value
   * - Sets the next pointer to null (will be linked later)
   */
  constructor(data) {
    this.data = data; // Store the data value in this node
    this.next = null; // Initialize next pointer to null (no next node yet)
  }
}

/**
 * Queue Class - Implements queue using linked list
 * Uses two pointers:
 * - front: Points to the first node (oldest element)
 * - rear: Points to the last node (newest element)
 * - size: Tracks the number of elements in the queue
 */
class Queue {
  /**
   * Constructor - Initialize an empty queue
   *
   * Execution:
   * - Creates an empty queue with no nodes
   * - Sets front and rear to null (no elements)
   * - Initializes size to 0
   */
  constructor() {
    this.front = null; // Pointer to the first node (oldest element)
    this.rear = null; // Pointer to the last node (newest element)
    this.size = 0; // Counter to track number of elements
  }

  /**
   * enqueue(x) - Add element x at the rear of the queue
   * @param {*} x - The element to add to the queue
   *
   * Execution Steps:
   * 1. Create a new node with the given data
   * 2. Check if queue is empty (front === null)
   *    - If empty: Set both front and rear to the new node
   *    - If not empty: Link new node after current rear, update rear pointer
   * 3. Increment size counter
   *
   * Example walkthrough:
   * Initial: front=null, rear=null, size=0
   *
   * enqueue(10):
   *   - Create node(10)
   *   - front === null → true (empty queue)
   *   - front = node(10), rear = node(10)
   *   - size = 1
   *   Result: front → [10] ← rear
   *
   * enqueue(20):
   *   - Create node(20)
   *   - front === null → false (queue has elements)
   *   - rear.next = node(20) → links [10] → [20]
   *   - rear = node(20)
   *   - size = 2
   *   Result: front → [10] → [20] ← rear
   *
   * enqueue(30):
   *   - Create node(30)
   *   - rear.next = node(30) → links [20] → [30]
   *   - rear = node(30)
   *   - size = 3
   *   Result: front → [10] → [20] → [30] ← rear
   */
  enqueue(x) {
    // STEP 1: Create a new node with the given data
    let temp = new Node(x);

    // STEP 2: Check if queue is empty
    if (this.front === null) {
      // STEP 2.1: Queue is empty
      // The new node is both the first and last element
      // Set both front and rear to point to the new node
      this.front = temp; // First node becomes the front
      this.rear = temp; // First node also becomes the rear
    } else {
      // STEP 2.2: Queue has elements
      // Link the new node after the current rear node
      this.rear.next = temp; // Connect current rear's next to new node
      this.rear = temp; // Update rear pointer to the new node
    }
    // STEP 3: Increment size counter (for both empty and non-empty cases)
    this.size += 1;
  }

  /**
   * dequeue() - Remove and return element from the front of the queue
   * @returns {*} - The data of the removed element, or null if queue is empty
   *
   * Execution Steps:
   * 1. Check if queue is empty (front === null)
   *    - If empty: Return null
   * 2. Store the data from front node
   * 3. Move front pointer to the next node
   * 4. Decrement size counter
   * 5. If queue becomes empty (front === null), also set rear to null
   * 6. Return the stored data
   *
   * Example walkthrough:
   * Queue: front → [10] → [20] → [30] ← rear, size=3
   *
   * dequeue():
   *   - front !== null → not empty
   *   - res = 10 (data from front node)
   *   - front = front.next → front now points to [20]
   *   - size = 2
   *   - front !== null → don't set rear to null
   *   - Return 10
   *   Result: front → [20] → [30] ← rear, size=2
   *
   * dequeue():
   *   - res = 20
   *   - front = front.next → front now points to [30]
   *   - size = 1
   *   Result: front → [30] ← rear, size=1
   *
   * dequeue():
   *   - res = 30
   *   - front = front.next → front = null
   *   - size = 0
   *   - front === null → set rear = null
   *   Result: front=null, rear=null, size=0
   */
  dequeue() {
    // STEP 1: Check if queue is empty
    if (this.front === null) {
      // Queue is empty, nothing to remove
      return null;
    }

    // STEP 2: Store the data from the front node (before removing it)
    let res = this.front.data;

    // STEP 3: Move front pointer to the next node
    // This effectively removes the front node from the queue
    this.front = this.front.next;

    // STEP 4: Decrement size counter
    this.size -= 1;

    // STEP 5: If queue becomes empty after dequeue, set rear to null as well
    // This happens when we remove the last element
    if (this.front === null) {
      this.rear = null; // No elements left, so rear should also be null
    }

    // STEP 6: Return the removed element's data
    return res;
  }

  /**
   * getFront() - Get the front element without removing it
   * @returns {*} - The data of the front element, or null if queue is empty
   *
   * Execution:
   * 1. Check if queue is empty (front === null)
   * 2. If empty, return null
   * 3. Otherwise, return front.data (the oldest element)
   *
   * Example:
   * Queue: front → [10] → [20] → [30] ← rear
   * getFront() → returns 10 (doesn't remove it)
   */
  getFront() {
    // Check if queue is empty
    if (this.front === null) {
      // Queue is empty, no front element
      return null;
    }
    // Return the data from the front node (oldest element)
    return this.front.data;
  }

  /**
   * getRear() - Get the rear element without removing it
   * @returns {*} - The data of the rear element, or null if queue is empty
   *
   * Execution:
   * 1. Check if queue is empty (rear === null)
   * 2. If empty, return null
   * 3. Otherwise, return rear.data (the newest element)
   *
   * Example:
   * Queue: front → [10] → [20] → [30] ← rear
   * getRear() → returns 30 (doesn't remove it)
   */
  getRear() {
    // Check if queue is empty
    if (this.rear === null) {
      // Queue is empty, no rear element
      return null;
    }
    // Return the data from the rear node (newest element)
    return this.rear.data;
  }

  /**
   * getSize() - Get the number of elements in the queue
   * @returns {number} - The size of the queue
   *
   * Execution:
   * - Simply return the size counter
   *
   * Example:
   * Queue: front → [10] → [20] → [30] ← rear
   * getSize() → returns 3
   */
  getSize() {
    // Return the current size of the queue
    return this.size;
  }

  /**
   * isEmpty() - Check if the queue is empty
   * @returns {boolean} - true if queue is empty, false otherwise
   *
   * Execution:
   * - Check if size is 0
   * - Return true if empty, false otherwise
   *
   * Example:
   * Queue: front → [10] → [20] ← rear
   * isEmpty() → returns false
   *
   * Queue: front=null, rear=null
   * isEmpty() → returns true
   */
  isEmpty() {
    // Queue is empty if size is 0
    return this.size === 0;
  }

  /**
   * printQueue() - Display all elements in the queue from front to rear
   *
   * Execution:
   * 1. Start from the front node
   * 2. Traverse through each node using the next pointer
   * 3. Print each node's data with a space separator
   * 4. Continue until we reach null (end of list)
   *
   * Example:
   * Queue: front → [10] → [20] → [30] ← rear
   * printQueue() → prints: "10 20 30 "
   *
   * Visual representation:
   * curr = front → [10]
   *   Print: "10 "
   *   curr = curr.next → [20]
   *   Print: "20 "
   *   curr = curr.next → [30]
   *   Print: "30 "
   *   curr = curr.next → null
   *   Exit loop
   */
  printQueue() {
    // STEP 1: Start from the front node
    let curr = this.front;

    // STEP 2: Traverse through all nodes until we reach the end (null)
    while (curr !== null) {
      // STEP 2.1: Print the current node's data with a space
      // process.stdout.write() prints without newline (side by side)
      process.stdout.write(curr.data + " ");

      // STEP 2.2: Move to the next node
      curr = curr.next;
    }
    // STEP 3: Print a newline after printing all queue elements
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
// After execution: front=null, rear=null, size=0

// STEP 2: Add elements to the queue
q.enqueue(10);
// Execution: Creates node(10), front=[10], rear=[10], size=1
// Queue: front → [10] ← rear

q.enqueue(20);
// Execution: Creates node(20), links [10] → [20], front=[10], rear=[20], size=2
// Queue: front → [10] → [20] ← rear

q.enqueue(30);
// Execution: Creates node(30), links [20] → [30], front=[10], rear=[30], size=3
// Queue: front → [10] → [20] → [30] ← rear

q.enqueue(40);
// Execution: Creates node(40), links [30] → [40], front=[10], rear=[40], size=4
// Queue: front → [10] → [20] → [30] → [40] ← rear

q.enqueue(50);
// Execution: Creates node(50), links [40] → [50], front=[10], rear=[50], size=5
// Queue: front → [10] → [20] → [30] → [40] → [50] ← rear

// STEP 3: Get front element (oldest)
console.log(q.getFront());
// Execution: Returns front.data = 10
// Output: 10

// STEP 4: Get rear element (newest)
console.log(q.getRear());
// Execution: Returns rear.data = 50
// Output: 50

// STEP 5: Get queue size
console.log(q.getSize());
// Execution: Returns size = 5
// Output: 5

// STEP 6: Check if queue is empty
console.log(q.isEmpty());
// Execution: Returns (size === 0) = false
// Output: false

// STEP 7: Print all queue elements
console.log("we are printing the queue");
q.printQueue();
// Execution:
//   curr = front → [10], print "10 "
//   curr = [20], print "20 "
//   curr = [30], print "30 "
//   curr = [40], print "40 "
//   curr = [50], print "50 "
//   curr = null, exit loop
// Output: "10 20 30 40 50 "

/**
 * VISUAL REPRESENTATION OF QUEUE OPERATIONS
 *
 * Initial state:
 * front = null
 * rear = null
 *
 * After enqueue(10):
 * front → [10] ← rear
 *
 * After enqueue(20):
 * front → [10] → [20] ← rear
 *
 * After enqueue(30):
 * front → [10] → [20] → [30] ← rear
 *
 * After enqueue(40):
 * front → [10] → [20] → [30] → [40] ← rear
 *
 * After enqueue(50):
 * front → [10] → [20] → [30] → [40] → [50] ← rear
 *
 * After dequeue() (removes 10):
 * front → [20] → [30] → [40] → [50] ← rear
 *
 * After dequeue() (removes 20):
 * front → [30] → [40] → [50] ← rear
 */
