// Deque class: Implements Double-ended Queue using Circular Array (Optimal approach)
// Uses circular array to efficiently handle insertions/deletions from both ends
class Deque {
  constructor(c) {
    // Step 1: Store the maximum capacity of the deque
    this.cap = c;
    // Step 2: Initialize size to 0 (no elements initially)
    this.size = 0;
    // Step 3: Initialize front pointer to 0 (points to first element)
    this.front = 0;
    // Step 5: Create an array of size 'c' to store deque elements
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
    // Step 2b: Decrement the size (rear position is calculated dynamically, so no need to update)
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

  // printDeque(): Prints all elements in the deque from front to rear
  printDeque() {
    // Step 1: Create an array to store deque elements in order
    let result = [];
    // Step 2: Loop through all elements in the deque (from front to rear)
    for (let i = 0; i < this.size; i++) {
      // Step 3: Calculate the index using circular array formula
      let index = (this.front + i) % this.cap;
      // Step 4: Add the element to the result array
      result.push(this.arr[index]);
    }
    // Step 5: Print the deque elements
    console.log(result);
  }
}
// ========== TEST CODE EXECUTION ==========

// Step 1: Create a new Deque instance with capacity 5
let deque = new Deque(5);
// Execution: Deque initialized with cap=5, size=0, front=0, rear=4, arr=[_,_,_,_,_]

// Step 2: Insert element 10 at the front
deque.insertFront(10);
// Execution: front = (0-1+5)%5 = 4, arr[4]=10, size=1
// State: front=4, size=1, arr=[_,_,_,_,10]

// Step 3: Insert element 20 at the rear
deque.insertRear(20);
// Execution: new_rear = (4+1)%5 = 0, arr[0]=20, size=2
// State: front=4, size=2, arr=[20,_,_,_,10]

// Step 4: Insert element 30 at the front
deque.insertFront(30);
// Execution: front = (4-1+5)%5 = 3, arr[3]=30, size=3
// State: front=3, size=3, arr=[20,_,_,30,10]

// Step 5: Insert element 40 at the rear
deque.insertRear(40);
// Execution: new_rear = (3+3)%5 = 1, arr[1]=40, size=4
// State: front=3, size=4, arr=[20,40,_,30,10]

// Step 6: Print all elements in the deque
deque.printDeque();
// Execution: Loops i=0 to 3, prints elements at indices 3,4,0,1 → [30,10,20,40]

// Step 7: Delete element from the front (removes 30)
deque.deleteFront();
// Execution: front = (3+1)%5 = 4, size=3
// State: front=4, size=3, arr=[20,40,_,30,10] (30 is logically removed)

// Step 8: Delete element from the rear (removes 40)
deque.deleteRear();
// Execution: size=2
// State: front=4, size=2, arr=[20,40,_,30,10] (40 is logically removed)

// Step 9: Print all elements in the deque after deletions
deque.printDeque();
// Execution: Loops i=0 to 1, prints elements at indices 4,0 → [10,20]

// Step 10: Get and print the front element (should be 10)
console.log(deque.getFront());
// Execution: Returns arr[4] = 10, prints: 10

// Step 11: Get and print the rear element (should be 20)
console.log(deque.getRear());
// Execution: new_rear = (4+2-1)%5 = 0, returns arr[0] = 20, prints: 20

// Step 12: Check if deque is empty (should be false)
console.log(deque.isEmpty());
// Execution: Returns size===0 = false, prints: false

// Step 13: Get and print the size of the deque (should be 2)
console.log(deque.getSize());
// Execution: Returns size = 2, prints: 2
