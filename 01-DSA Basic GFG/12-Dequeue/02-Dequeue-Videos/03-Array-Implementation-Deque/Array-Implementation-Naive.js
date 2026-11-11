// Deque class: Implements Double-ended Queue (Deque) data structure using Array
// Deque allows insertion and deletion from both front and rear
class Deque {
  constructor() {
    // Step 1: Initialize an empty array to store deque elements
    this.dequeArray = [];
  }

  // getFront(): Returns the front element without removing it
  getFront() {
    // Step 1: Check if deque is empty
    if (this.isEmpty()) {
      // Step 2a: If empty, return -1 (error indicator)
      return -1;
    }
    // Step 2b: Return the first element (index 0) of the array
    return this.dequeArray[0];
  }

  // getRear(): Returns the rear element without removing it
  getRear() {
    // Step 1: Check if deque is empty
    if (this.isEmpty()) {
      // Step 2a: If empty, return -1 (error indicator)
      return -1;
    }
    // Step 2b: Return the last element (length - 1) of the array
    return this.dequeArray[this.dequeArray.length - 1];
  }

  // isEmpty(): Checks if the deque is empty
  isEmpty() {
    // Step 1: Return true if array length is 0, false otherwise
    return this.dequeArray.length === 0;
  }

  // getSize(): Returns the number of elements in the deque
  getSize() {
    // Step 1: Return the length of the array
    return this.dequeArray.length;
  }

  // insertFront(x): Adds an element to the front of the deque
  insertFront(x) {
    // Step 1: Use unshift() to add element at the beginning of the array
    // This shifts all existing elements to the right
    this.dequeArray.unshift(x);
  }

  // insertRear(x): Adds an element to the rear of the deque
  insertRear(x) {
    // Step 1: Use push() to add element at the end of the array
    this.dequeArray.push(x);
  }

  // deleteFront(): Removes and returns the element from the front of the deque
  deleteFront() {
    // Step 1: Check if deque is empty
    if (this.isEmpty()) {
      // Step 2a: If empty, return -1 (error indicator)
      return -1;
    }
    // Step 2b: Use shift() to remove and return the first element
    // This shifts all remaining elements to the left
    return this.dequeArray.shift();
  }

  // deleteRear(): Removes and returns the element from the rear of the deque
  deleteRear() {
    // Step 1: Check if deque is empty
    if (this.isEmpty()) {
      // Step 2a: If empty, return -1 (error indicator)
      return -1;
    }
    // Step 2b: Use pop() to remove and return the last element
    return this.dequeArray.pop();
  }

  // printDeque(): Prints all elements in the deque
  printDeque() {
    // Step 1: Print the entire array
    console.log(this.dequeArray);
  }
}

// ========== TEST CODE EXECUTION ==========

// Step 1: Create a new Deque instance
let deque = new Deque();
// Execution: Deque is initialized with dequeArray = []

// Step 2: Insert element 10 at the front
deque.insertFront(10);
// Execution: unshift(10) adds 10 at index 0, dequeArray = [10]

// Step 3: Insert element 20 at the rear
deque.insertRear(20);
// Execution: push(20) adds 20 at the end, dequeArray = [10, 20]

// Step 4: Insert element 30 at the front
deque.insertFront(30);
// Execution: unshift(30) adds 30 at index 0, shifts others right, dequeArray = [30, 10, 20]

// Step 5: Insert element 40 at the rear
deque.insertRear(40);
// Execution: push(40) adds 40 at the end, dequeArray = [30, 10, 20, 40]

// Step 6: Print all elements in the deque
deque.printDeque();
// Execution: Prints: [30, 10, 20, 40]

// Step 7: Delete element from the front (should remove 30)
deque.deleteFront();
// Execution: shift() removes and returns 30, dequeArray = [10, 20, 40]

// Step 8: Delete element from the rear (should remove 40)
deque.deleteRear();
// Execution: pop() removes and returns 40, dequeArray = [10, 20]

// Step 9: Print all elements in the deque after deletions
deque.printDeque();
// Execution: Prints: [10, 20]
