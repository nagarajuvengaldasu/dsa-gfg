// Dequee class: Implements Double-ended Queue (Deque) data structure using Array
// Deque allows insertion and deletion from both front and rear
class Dequee {
  constructor() {
    // Step 1: Initialize an empty array to store all deque elements
    // all the elements are stored in the array
    this.dequeArray = [];
  }

  // addFront(element): Adds an element to the front of the deque
  addFront(element) {
    // Step 1: Use unshift() to add element at the beginning of the array
    // This shifts all existing elements to the right
    // add the element to the front of the deque
    this.dequeArray.unshift(element);
  }

  // addRear(element): Adds an element to the rear of the deque
  addRear(element) {
    // Step 1: Use push() to add element at the end of the array
    // add the element to the rear of the deque
    this.dequeArray.push(element);
  }

  // removeFront(): Removes and returns the element from the front of the deque
  // Example: [1, 2, 3] --> [2, 3] (removes 1)
  removeFront() {
    // Step 1: Check if deque is not empty
    // remove the element from the front of the deque
    if (!this.isEmpty()) {
      // Step 2a: Use shift() to remove and return the first element
      // This shifts all remaining elements to the left
      return this.dequeArray.shift();
    }
    // Step 2b: If empty, return null (error indicator)
    return null;
  }

  // removeRear(): Removes and returns the element from the rear of the deque
  // Example: [1, 2, 3] --> [1, 2] (removes 3)
  removeRear() {
    // Step 1: Check if deque is not empty
    // remove the element from the rear of the deque
    if (!this.isEmpty()) {
      // Step 2a: Use pop() to remove and return the last element
      return this.dequeArray.pop();
    }
    // Step 2b: If empty, return null (error indicator)
    return null;
  }

  // getFront(): Returns the front element without removing it
  // Example: [1, 2, 3] --> returns 1
  getFront() {
    // Step 1: Check if deque is not empty
    // get the front element of the deque
    if (!this.isEmpty()) {
      // Step 2a: Return the first element (index 0) of the array
      return this.dequeArray[0];
    }
    // Step 2b: If empty, return null (error indicator)
    return null;
  }

  // getRear(): Returns the rear element without removing it
  // Example: [1, 2, 3] --> returns 3
  getRear() {
    // Step 1: Check if deque is not empty
    // get the rear element of the deque
    if (!this.isEmpty()) {
      // Step 2a: Return the last element (length - 1) of the array
      return this.dequeArray[this.dequeArray.length - 1];
    }
    // Step 2b: If empty, return null (error indicator)
    return null;
  }

  // isEmpty(): Checks if the deque is empty
  // Returns: true or false
  isEmpty() {
    // Step 1: Return true if array length is 0, false otherwise
    // check if the deque is empty
    return this.dequeArray.length === 0;
  }

  // size(): Returns the number of elements in the deque
  // Example: [1, 2, 3] --> returns 3
  size() {
    // Step 1: Return the length of the array
    // get the size of the deque
    return this.dequeArray.length;
  }
}

// ========== TEST CODE EXECUTION ==========

// Step 1: Create a new Deque instance
// create a deque instance.
const deque = new Dequee();
// Execution: Deque is initialized with dequeArray = []

// Step 2: Add element 10 to the rear of the deque
// adding 10, 20 to end of deque // [10 , 20]
deque.addRear(10);
// Execution: push(10) adds 10 at the end, dequeArray = [10]

// Step 3: Add element 20 to the rear of the deque
deque.addRear(20);
// Execution: push(20) adds 20 at the end, dequeArray = [10, 20]

// Step 4: Add element 30 to the front of the deque
// adding 30, 40 to front of deque // [30 , 40 , 10 , 20]
deque.addFront(30);
// Execution: unshift(30) adds 30 at index 0, shifts others right, dequeArray = [30, 10, 20]

// Step 5: Add element 40 to the front of the deque
deque.addFront(40);
// Execution: unshift(40) adds 40 at index 0, shifts others right, dequeArray = [40, 30, 10, 20]

// Step 6: Print all elements in the deque
// print the deque
console.log(deque.dequeArray);
// Execution: Prints: [40, 30, 10, 20]

// Step 7: Remove and print element from the front (should remove 40)
// removing element from front of deque // [40 , 30 , 10 , 20]
console.log(deque.removeFront());
// Execution: shift() removes and returns 40, dequeArray = [30, 10, 20], prints: 40

// Step 8: Remove and print element from the rear (should remove 20)
// removing element from rear of deque // [40 , 30 , 10]
console.log(deque.removeRear());
// Execution: pop() removes and returns 20, dequeArray = [30, 10], prints: 20

// Step 9: Print all elements in the deque after deletions
// print the deque
console.log(deque.dequeArray);
// Execution: Prints: [30, 10]
