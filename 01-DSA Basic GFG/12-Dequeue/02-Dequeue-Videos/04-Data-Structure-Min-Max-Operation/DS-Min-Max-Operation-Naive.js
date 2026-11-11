// MinMaxDS class: Data Structure that supports Min/Max operations in O(1) time
// Uses Deque internally where:
// - Minimum elements are stored at the front
// - Maximum elements are stored at the rear
// All operations map to Deque operations which are O(1)

// Deque class: Implements Double-ended Queue using Circular Array
class Deque {
  constructor(c) {
    // Step 1: Store the maximum capacity of the deque
    this.cap = c;
    // Step 2: Initialize size to 0 (no elements initially)
    this.size = 0;
    // Step 3: Initialize front pointer to 0 (points to first element)
    this.front = 0;
    // Step 4: Create an array of size 'c' to store deque elements
    this.arr = new Array(c);
  }

  // insertFront(x): Adds an element to the front of the deque
  insertFront(x) {
    // Step 1: Check if deque is full
    if (this.size === this.cap) {
      // Step 2a: If full, return without inserting
      return;
    }
    // Step 2b: Move front pointer backwards (wrapping around if needed)
    // Formula: (front - 1 + cap) % cap ensures circular wrapping
    this.front = (this.front - 1 + this.cap) % this.cap;
    // Step 3: Store the element at the new front position
    this.arr[this.front] = x;
    // Step 4: Increment the size
    this.size++;
  }

  // deleteFront(): Removes the element from the front of the deque
  deleteFront() {
    // Step 1: Check if deque is empty
    if (this.size === 0) {
      // Step 2a: If empty, return without deleting
      return;
    }
    // Step 2b: Move front pointer forward (wrapping around if needed)
    this.front = (this.front + 1) % this.cap;
    // Step 3: Decrement the size
    this.size--;
  }

  // insertRear(x): Adds an element to the rear of the deque
  insertRear(x) {
    // Step 1: Check if deque is full
    if (this.size === this.cap) {
      // Step 2a: If full, return without inserting
      return;
    }
    // Step 2b: Calculate the new rear position using circular array formula
    // Formula: (front + size) % cap gives the next available position
    let new_rear = (this.front + this.size) % this.cap;
    // Step 3: Store the element at the new rear position
    this.arr[new_rear] = x;
    // Step 4: Increment the size
    this.size++;
  }

  // deleteRear(): Removes the element from the rear of the deque
  deleteRear() {
    // Step 1: Check if deque is empty
    if (this.size === 0) {
      // Step 2a: If empty, return without deleting
      return;
    }
    // Step 2b: Decrement the size (rear position is calculated dynamically)
    this.size--;
  }

  // getFront(): Returns the front element without removing it
  getFront() {
    // Step 1: Check if deque is empty
    if (this.size === 0) {
      // Step 2a: If empty, return -1 (error indicator)
      return -1;
    }
    // Step 2b: Return the element at the front position
    return this.arr[this.front];
  }

  // getRear(): Returns the rear element without removing it
  getRear() {
    // Step 1: Check if deque is empty
    if (this.size === 0) {
      // Step 2a: If empty, return -1 (error indicator)
      return -1;
    }
    // Step 2b: Calculate the rear position using circular array formula
    // Formula: (front + size - 1) % cap gives the last element position
    let new_rear = (this.front + this.size - 1) % this.cap;
    // Step 3: Return the element at the calculated rear position
    return this.arr[new_rear];
  }

  // isEmpty(): Checks if the deque is empty
  isEmpty() {
    // Step 1: Return true if size is 0, false otherwise
    return this.size === 0;
  }

  // getSize(): Returns the number of elements in the deque
  getSize() {
    // Step 1: Return the current size
    return this.size;
  }
}

// MinMaxDS: Data Structure for O(1) Min/Max operations
// Maps Min/Max operations to Deque front/rear operations
class MinMaxDS {
  constructor(capacity) {
    // Step 1: Initialize a Deque with given capacity
    // The Deque will store elements where:
    // - Front contains minimum elements
    // - Rear contains maximum elements
    this.deque = new Deque(capacity);
  }

  // insertMin(x): Inserts element x as minimum (O(1) time complexity)
  // Maps to: insertFront() of Deque
  insertMin(x) {
    // Step 1: Insert element at the front of deque (becomes new minimum)
    // Time Complexity: O(1) - direct Deque operation
    // Note: Assumes caller ensures x is the minimum value
    this.deque.insertFront(x);
  }

  // insertMax(x): Inserts element x as maximum (O(1) time complexity)
  // Maps to: insertRear() of Deque
  insertMax(x) {
    // Step 1: Insert element at the rear of deque (becomes new maximum)
    // Time Complexity: O(1) - direct Deque operation
    // Note: Assumes caller ensures x is the maximum value
    this.deque.insertRear(x);
  }

  // getMin(): Returns minimum element without removing it (O(1) time complexity)
  // Maps to: getFront() of Deque
  getMin() {
    // Step 1: Return the front element of deque (minimum element)
    // Time Complexity: O(1) - direct Deque operation
    return this.deque.getFront();
  }

  // getMax(): Returns maximum element without removing it (O(1) time complexity)
  // Maps to: getRear() of Deque
  getMax() {
    // Step 1: Return the rear element of deque (maximum element)
    // Time Complexity: O(1) - direct Deque operation
    return this.deque.getRear();
  }

  // deleteMin(): Removes and returns minimum element (O(1) time complexity)
  // Maps to: deleteFront() of Deque
  deleteMin() {
    // Step 1: Get the minimum value before deletion
    let minValue = this.deque.getFront();
    // Step 2: Delete from front of deque
    // Time Complexity: O(1) - direct Deque operation
    this.deque.deleteFront();
    // Step 3: Return the deleted minimum value
    return minValue;
  }

  // deleteMax(): Removes and returns maximum element (O(1) time complexity)
  // Maps to: deleteRear() of Deque
  deleteMax() {
    // Step 1: Get the maximum value before deletion
    let maxValue = this.deque.getRear();
    // Step 2: Delete from rear of deque
    // Time Complexity: O(1) - direct Deque operation
    this.deque.deleteRear();
    // Step 3: Return the deleted maximum value
    return maxValue;
  }

  // isEmpty(): Checks if the data structure is empty (O(1) time complexity)
  isEmpty() {
    // Step 1: Check if deque is empty
    return this.deque.isEmpty();
  }

  // getSize(): Returns the number of elements (O(1) time complexity)
  getSize() {
    // Step 1: Return the size of deque
    return this.deque.getSize();
  }
}

// ========== TEST CODE EXECUTION ==========

// Step 1: Create a new MinMaxDS instance with capacity 10
let minMaxDS = new MinMaxDS(10);
// Execution: MinMaxDS initialized with an empty Deque
// State: deque.cap=10, deque.size=0, deque.front=0, deque.arr=[_,_,_,_,_,_,_,_,_,_]

// Step 2: Insert minimum value 5
minMaxDS.insertMin(5);
// Execution: Calls deque.insertFront(5)
//   - front = (0-1+10)%10 = 9, arr[9]=5, size=1
// State: deque.front=9, deque.size=1, arr=[_,_,_,_,_,_,_,_,_,5]
// Result: min=5, max=5 (only one element)

// Step 3: Insert maximum value 20
minMaxDS.insertMax(20);
// Execution: Calls deque.insertRear(20)
//   - new_rear = (9+1)%10 = 0, arr[0]=20, size=2
// State: deque.front=9, deque.size=2, arr=[20,_,_,_,_,_,_,_,_,5]
// Result: min=5 (at front), max=20 (at rear)

// Step 4: Insert new minimum value 2
minMaxDS.insertMin(2);
// Execution: Calls deque.insertFront(2)
//   - front = (9-1+10)%10 = 8, arr[8]=2, size=3
// State: deque.front=8, deque.size=3, arr=[20,_,_,_,_,_,_,_,2,5]
// Result: min=2 (at front), max=20 (at rear)

// Step 5: Insert new maximum value 30
minMaxDS.insertMax(30);
// Execution: Calls deque.insertRear(30)
//   - new_rear = (8+3)%10 = 1, arr[1]=30, size=4
// State: deque.front=8, deque.size=4, arr=[20,30,_,_,_,_,_,_,2,5]
// Result: min=2 (at front), max=30 (at rear)

// Step 6: Get and print minimum value
console.log("Minimum:", minMaxDS.getMin());
// Execution: Calls deque.getFront()
//   - Returns arr[8] = 2
// Output: "Minimum: 2"

// Step 7: Get and print maximum value
console.log("Maximum:", minMaxDS.getMax());
// Execution: Calls deque.getRear()
//   - new_rear = (8+4-1)%10 = 1, Returns arr[1] = 30
// Output: "Maximum: 30"

// Step 8: Delete and print minimum value
console.log("Deleted Min:", minMaxDS.deleteMin());
// Execution:
//   - getFront() returns arr[8] = 2
//   - deleteFront(): front = (8+1)%10 = 9, size=3
//   - Returns 2
// State after: deque.front=9, deque.size=3, arr=[20,30,_,_,_,_,_,_,_,5]
// Output: "Deleted Min: 2"
// Result: min=5 (new front), max=30 (at rear)

// Step 9: Delete and print maximum value
console.log("Deleted Max:", minMaxDS.deleteMax());
// Execution:
//   - getRear() returns arr[(9+3-1)%10] = arr[1] = 30
//   - deleteRear(): size=2
//   - Returns 30
// State after: deque.front=9, deque.size=2, arr=[20,_,_,_,_,_,_,_,_,5]
// Output: "Deleted Max: 30"
// Result: min=5 (at front), max=20 (new rear)

// Step 10: Get current minimum and maximum
console.log("Current Min:", minMaxDS.getMin());
console.log("Current Max:", minMaxDS.getMax());
// Execution:
//   - getMin(): Returns arr[9] = 5
//   - getMax(): Returns arr[(9+2-1)%10] = arr[0] = 20
// Output: "Current Min: 5" and "Current Max: 20"

// Step 11: Check if empty
console.log("Is Empty:", minMaxDS.isEmpty());
// Execution: Calls deque.isEmpty()
//   - Returns size===0 = false
// Output: "Is Empty: false"

// Step 12: Get size
console.log("Size:", minMaxDS.getSize());
// Execution: Calls deque.getSize()
//   - Returns size = 2
// Output: "Size: 2"
