// Queue class: Implements Queue data structure using Array
class Queue {
  constructor(n) {
    // Step 1: Store the maximum capacity of the queue
    this.n = n;
    // Step 2: Create an array of size 'n' to store queue elements
    this.arr = new Array(n);
    // Step 3: Initialize front pointer to 0 (points to first element)
    this.front = 0;
    // Step 4: Initialize rear pointer to 0 (points to next insertion position)
    this.rear = 0;
  }

  // isEmpty(): Checks if the queue is empty
  isEmpty() {
    // Step 1: Queue is empty when front equals rear (no elements between them)
    return this.front === this.rear;
  }

  // ifFull(): Checks if the queue is full
  ifFull() {
    // Step 1: Queue is full when the difference between rear and front equals capacity
    return this.rear - this.front === this.n;
  }

  // enqueue(x): Adds an element to the rear of the queue
  enqueue(x) {
    // Step 1: Check if queue is full
    if (this.rear - this.front === this.n) {
      // Step 2a: If full, return -1 (error indicator)
      return -1;
    }
    // Step 2b: Store the element at the rear position in the array
    this.arr[this.rear] = x;
    // Step 3: Increment rear pointer to point to next available position
    this.rear++;
  }

  // dequeue(): Removes and returns the element from the front of the queue
  dequeue() {
    // Step 1: Check if queue is empty
    if (this.front === this.rear) {
      // Step 2a: If empty, return -1 (error indicator)
      return -1;
    }
    // Step 2b: Store the element at the front position
    let x = this.arr[this.front];
    // Step 3: Increment front pointer to remove the element
    this.front++;
    // Step 4: Check if queue became empty after removal
    if (this.rear === this.front) {
      // Step 5: If empty, reset both pointers to 0 for better memory management
      this.front = 0;
      this.rear = 0;
    }
    // Step 6: Return the removed element
    return x;
  }

  // getFront(): Returns the front element without removing it
  getFront() {
    // Step 1: Check if queue is empty
    if (this.front === this.rear) {
      // Step 2a: If empty, return -1 (error indicator)
      return -1;
    }
    // Step 2b: Return the element at the front position
    return this.arr[this.front];
  }

  // getRear(): Returns the rear element without removing it
  getRear() {
    // Step 1: Check if queue is empty
    if (this.rear === this.front) {
      // Step 2a: If empty, return -1 (error indicator)
      return -1;
    }
    // Step 2b: Return the element at rear-1 position (rear points to next insertion point)
    return this.arr[this.rear - 1];
  }

  // getSize(): Returns the number of elements in the queue
  getSize() {
    // Step 1: Calculate size as the difference between rear and front pointers
    return this.rear - this.front;
  }

  // printQueue(): Prints all elements in the queue from front to rear
  printQueue() {
    // Step 1: Loop from front index to rear-1 index
    for (let i = this.front; i < this.rear; i++) {
      // Step 2: Print each element on the same line with space separator
      //for printing in same line
      process.stdout.write(this.arr[i] + " ");
      // for printing in new line
      // console.log(this.arr[i]);
    }
    // Step 3: Print a newline after all elements
    console.log();
  }
}

// ========== TEST CODE EXECUTION ==========

// Step 1: Create a new Queue instance with capacity 5
let queue = new Queue(5);
// Execution: Queue is initialized with arr=[undefined,undefined,undefined,undefined,undefined], front=0, rear=0

// Step 2: Add element 10 to the queue
queue.enqueue(10);
// Execution: arr[0]=10, rear becomes 1, front=0, queue: [10,_,_,_,_]

// Step 3: Add element 20 to the queue
queue.enqueue(20);
// Execution: arr[1]=20, rear becomes 2, front=0, queue: [10,20,_,_,_]

// Step 4: Add element 30 to the queue
queue.enqueue(30);
// Execution: arr[2]=30, rear becomes 3, front=0, queue: [10,20,30,_,_]

// Step 5: Add element 40 to the queue
queue.enqueue(40);
// Execution: arr[3]=40, rear becomes 4, front=0, queue: [10,20,30,40,_]

// Step 6: Add element 50 to the queue
queue.enqueue(50);
// Execution: arr[4]=50, rear becomes 5, front=0, queue: [10,20,30,40,50]

// Step 7: Print all elements in the queue
queue.printQueue();
// Execution: Loops from i=0 to i<5, prints: "10 20 30 40 50 "

// Step 8: Get and print the front element (should be 10)
console.log("Front: " + queue.getFront());
// Execution: Returns arr[0] = 10, prints: "Front: 10"

// Step 9: Get and print the rear element (should be 50)
console.log("Rear: " + queue.getRear());
// Execution: Returns arr[5-1] = arr[4] = 50, prints: "Rear: 50"

// Step 10: Get and print the size of the queue (should be 5)
console.log("Size: " + queue.getSize());
// Execution: Returns rear-front = 5-0 = 5, prints: "Size: 5"

// Step 11: Check if queue is empty (should be false)
console.log("Is Empty: " + queue.isEmpty());
// Execution: Returns front===rear = 0===5 = false, prints: "Is Empty: false"

// Step 12: Check if queue is full (should be true)
console.log("Is Full: " + queue.ifFull());
// Execution: Returns (rear-front)===n = 5===5 = true, prints: "Is Full: true"

// Step 13: Remove and print the front element (should be 10)
console.log("Dequeue: " + queue.dequeue());
// Execution: Removes arr[0]=10, front becomes 1, returns 10, prints: "Dequeue: 10"
// After: queue: [_,20,30,40,50], front=1, rear=5
