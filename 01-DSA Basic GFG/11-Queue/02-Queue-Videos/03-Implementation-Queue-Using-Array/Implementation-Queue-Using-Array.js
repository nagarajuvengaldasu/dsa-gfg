/**
 * Queue Data Structure Implementation Using Array
 *
 * Queue follows FIFO (First In First Out) principle
 * - Elements are added at the rear (end)
 * - Elements are removed from the front (beginning)
 *
 * Key Pointers:
 * - front: Points to the first element (oldest element)
 * - rear: Points to the next available position (where new element will be added)
 * - When front === rear, the queue is empty
 */

class Queue {
  /**
   * STEP 1: Constructor - Initialize the queue
   * @param {number} cap - Maximum capacity of the queue
   *
   * Execution:
   * - Creates an array of fixed size 'cap'
   * - Initializes front = 0 (points to first position)
   * - Initializes rear = 0 (points to first available position)
   * - When front === rear, queue is empty
   */
  constructor(cap) {
    this.cap = cap; // Store maximum capacity
    this.arr = new Array(cap); // Create array of fixed size
    this.front = 0; // Front pointer (start of queue)
    this.rear = 0; // Rear pointer (end of queue, next available position)
  }

  /**
   * STEP 2: getFront() - Get the front element without removing it
   *
   * Execution:
   * 1. Check if queue is empty (front === rear)
   * 2. If empty, return -1
   * 3. Otherwise, return arr[front] (the oldest element)
   *
   * Example:
   * Queue: [10, 20, 30], front=0, rear=3
   * getFront() → returns 10 (element at index 0)
   */
  getFront() {
    // Check if queue is empty
    if (this.front === this.rear) {
      // Queue is empty, return -1
      return -1;
    }
    // Return the element at front position
    return this.arr[this.front];
  }

  /**
   * STEP 3: getRear() - Get the rear element (last added) without removing it
   *
   * Execution:
   * 1. Check if queue is empty (front === rear)
   * 2. If empty, return -1
   * 3. Otherwise, return arr[rear - 1] (the most recently added element)
   *    Note: rear points to next available position, so last element is at rear-1
   *
   * Example:
   * Queue: [10, 20, 30], front=0, rear=3
   * getRear() → returns 30 (element at index 2, which is rear-1)
   */
  getRear() {
    // Check if queue is empty
    if (this.front === this.rear) {
      // Queue is empty, return -1
      return -1;
    }
    // Return the element at rear-1 (last added element)
    // rear points to next position, so last element is at rear-1
    return this.arr[this.rear - 1];
  }

  /**
   * STEP 4: enqueue(x) - Add element x at the rear of the queue
   *
   * Execution:
   * 1. Check if queue is full (rear === cap)
   * 2. If full, return -1 (cannot add more elements)
   * 3. Otherwise:
   *    - Store x at arr[rear]
   *    - Increment rear pointer
   *
   * Example walkthrough:
   * Initial: front=0, rear=0, arr=[_, _, _, _, _]
   *
   * enqueue(10):
   *   - rear (0) !== cap (5) → not full
   *   - arr[0] = 10
   *   - rear = 1
   *   - Result: arr=[10, _, _, _, _], front=0, rear=1
   *
   * enqueue(20):
   *   - rear (1) !== cap (5) → not full
   *   - arr[1] = 20
   *   - rear = 2
   *   - Result: arr=[10, 20, _, _, _], front=0, rear=2
   *
   * enqueue(30):
   *   - rear (2) !== cap (5) → not full
   *   - arr[2] = 30
   *   - rear = 3
   *   - Result: arr=[10, 20, 30, _, _], front=0, rear=3
   */
  enqueue(x) {
    // STEP 4.1: Check if queue is full
    if (this.rear === this.cap) {
      // Queue is full, cannot add more elements
      return -1;
    }
    // STEP 4.2: Add element at rear position
    this.arr[this.rear] = x;
    // STEP 4.3: Move rear pointer to next available position
    this.rear++;
  }

  /**
   * STEP 5: dequeue() - Remove and return element from the front of the queue
   *
   * Execution:
   * 1. Check if queue is empty (front === rear)
   * 2. If empty, return -1
   * 3. Otherwise:
   *    - Store arr[front] in variable x
   *    - Increment front pointer
   *    - Return x
   *
   * Example walkthrough:
   * Queue: arr=[10, 20, 30, _, _], front=0, rear=3
   *
   * dequeue():
   *   - front (0) !== rear (3) → not empty
   *   - x = arr[0] = 10
   *   - front = 1
   *   - Return 10
   *   - Result: arr=[10, 20, 30, _, _], front=1, rear=3
   *   Note: Element 10 is logically removed (front moved), but still in array
   *
   * dequeue():
   *   - front (1) !== rear (3) → not empty
   *   - x = arr[1] = 20
   *   - front = 2
   *   - Return 20
   *   - Result: arr=[10, 20, 30, _, _], front=2, rear=3
   */
  dequeue() {
    // STEP 5.1: Check if queue is empty
    if (this.front === this.rear) {
      // Queue is empty, cannot remove element
      return -1;
    }
    // STEP 5.2: Store the front element
    let x = this.arr[this.front];
    // STEP 5.3: Move front pointer to next element
    this.front++;
    // STEP 5.4: Return the removed element
    return x;
  }

  /**
   * STEP 6: size() - Get the number of elements in the queue
   *
   * Execution:
   * - Calculate: rear - front
   * - This gives the number of elements between front and rear
   *
   * Example:
   * front=0, rear=3 → size = 3 - 0 = 3 elements
   * front=2, rear=3 → size = 3 - 2 = 1 element
   * front=3, rear=3 → size = 3 - 3 = 0 elements (empty)
   */
  size() {
    // Number of elements = rear - front
    return this.rear - this.front;
  }

  /**
   * STEP 7: isEmpty() - Check if the queue is empty
   *
   * Execution:
   * - Return true if front === rear (no elements)
   * - Return false otherwise
   *
   * Example:
   * front=0, rear=0 → isEmpty() = true (empty)
   * front=0, rear=3 → isEmpty() = false (has elements)
   * front=3, rear=3 → isEmpty() = true (empty, all elements dequeued)
   */
  isEmpty() {
    // Queue is empty when front equals rear
    return this.front === this.rear;
  }

  /**
   * STEP 8: printQueue() - Display all elements in the queue from front to rear
   *
   * Execution:
   * 1. Loop from front to rear-1
   * 2. Print each element
   *
   * Example:
   * Queue: arr=[10, 20, 30, _, _], front=0, rear=3
   * printQueue() → prints: 10, 20, 30
   *
   * After dequeue: front=1, rear=3
   * printQueue() → prints: 20, 30
   */
  printQueue() {
    // Loop from front to rear-1 (all valid elements)
    for (let i = this.front; i < this.rear; i++) {
      console.log(this.arr[i]);
    }
  }
}

/**
 * DETAILED EXECUTION WALKTHROUGH
 *
 * Let's trace through the example code step by step:
 *
 * STEP A: Create queue with capacity 5
 *   let q = new Queue(5);
 *   After execution:
 *     cap = 5
 *     arr = [_, _, _, _, _] (5 empty slots)
 *     front = 0
 *     rear = 0
 *
 * STEP B: enqueue(10)
 *   Execution:
 *     1. Check: rear (0) !== cap (5) → not full ✓
 *     2. arr[0] = 10
 *     3. rear = 1
 *   State: arr=[10, _, _, _, _], front=0, rear=1
 *
 * STEP C: enqueue(20)
 *   Execution:
 *     1. Check: rear (1) !== cap (5) → not full ✓
 *     2. arr[1] = 20
 *     3. rear = 2
 *   State: arr=[10, 20, _, _, _], front=0, rear=2
 *
 * STEP D: enqueue(30)
 *   Execution:
 *     1. Check: rear (2) !== cap (5) → not full ✓
 *     2. arr[2] = 30
 *     3. rear = 3
 *   State: arr=[10, 20, 30, _, _], front=0, rear=3
 *
 * STEP E: enqueue(40)
 *   Execution:
 *     1. Check: rear (3) !== cap (5) → not full ✓
 *     2. arr[3] = 40
 *     3. rear = 4
 *   State: arr=[10, 20, 30, 40, _], front=0, rear=4
 *
 * STEP F: enqueue(50)
 *   Execution:
 *     1. Check: rear (4) !== cap (5) → not full ✓
 *     2. arr[4] = 50
 *     3. rear = 5
 *   State: arr=[10, 20, 30, 40, 50], front=0, rear=5
 *
 * STEP G: printQueue()
 *   Execution:
 *     Loop: i = 0 to 4 (front=0, rear=5)
 *     Prints: 10, 20, 30, 40, 50
 *
 * STEP H: getFront()
 *   Execution:
 *     1. Check: front (0) !== rear (5) → not empty ✓
 *     2. Return arr[0] = 10
 *   Output: Front: 10
 *
 * STEP I: getRear()
 *   Execution:
 *     1. Check: front (0) !== rear (5) → not empty ✓
 *     2. Return arr[5-1] = arr[4] = 50
 *   Output: Rear: 50
 *
 * STEP J: dequeue()
 *   Execution:
 *     1. Check: front (0) !== rear (5) → not empty ✓
 *     2. x = arr[0] = 10
 *     3. front = 1
 *     4. Return 10
 *   State: arr=[10, 20, 30, 40, 50], front=1, rear=5
 *          (10 is logically removed, but still in array)
 *   Output: Dequeue: 10
 *
 * STEP K: size()
 *   Execution:
 *     size = rear - front = 5 - 1 = 4
 *   Output: Size: 4
 *
 * STEP L: isEmpty()
 *   Execution:
 *     front (1) !== rear (5) → return false
 *   Output: Is Empty: false
 */

/**
 * VISUAL REPRESENTATION OF QUEUE STATE
 *
 * After all enqueue operations:
 * ┌─────┬─────┬─────┬─────┬─────┐
 * │  10 │  20 │  30 │  40 │  50 │
 * └─────┴─────┴─────┴─────┴─────┘
 *   ↑                           ↑
 * front=0                    rear=5
 *
 * After dequeue():
 * ┌─────┬─────┬─────┬─────┬─────┐
 * │  10 │  20 │  30 │  40 │  50 │
 * └─────┴─────┴─────┴─────┴─────┘
 *        ↑                    ↑
 *     front=1              rear=5
 *     (10 is logically removed)
 */

// Test the queue implementation
let q = new Queue(5);
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);
q.enqueue(50);
q.printQueue();
console.log("Front: ", q.getFront());
console.log("Rear: ", q.getRear());
console.log("Dequeue: ", q.dequeue());
console.log("Size: ", q.size());
console.log("Is Empty: ", q.isEmpty());
