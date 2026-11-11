// Node class: Represents a single node in the linked list
class Node {
  constructor(data) {
    // Step 1: Store the data value in the node
    this.data = data;
    // Step 2: Initialize next pointer to null (no next node initially)
    this.next = null;
  }
}

// Queue class: Implements Queue data structure using Linked List
class Queue {
  constructor(n) {
    // Step 1: Store the maximum capacity (optional, for reference)
    this.n = n;
    // Step 2: Initialize front pointer to null (queue is empty)
    this.front = null;
    // Step 3: Initialize rear pointer to null (queue is empty)
    this.rear = null;
    // Step 4: Initialize count to 0 (no elements in queue)
    this.count = 0;
  }

  // isEmpty(): Checks if the queue is empty
  isEmpty() {
    // Step 1: Return true if count is 0, false otherwise
    return this.count === 0;
  }

  // enQueue(x): Adds an element to the rear of the queue
  enQueue(x) {
    // Step 1: Create a new node with the given data
    let temp = new Node(x);

    // Step 2: Check if queue is empty (first element)
    if (this.front === null) {
      // Step 3a: If empty, set both front and rear to the new node
      this.front = temp;
      this.rear = temp;
    } else {
      // Step 3b: If not empty, link the new node to the current rear
      this.rear.next = temp;
      // Step 4: Update rear pointer to point to the new node
      this.rear = temp;
    }
    // Step 5: Increment the count of elements
    this.count++;
  }

  // dequeue(): Removes and returns the element from the front of the queue
  dequeue() {
    // Step 1: Check if queue is empty
    if (this.front === null) {
      // Step 2a: If empty, return -1 (error indicator)
      return -1;
    }
    // Step 2b: Store the data from the front node
    let x = this.front.data;
    // Step 3: Move front pointer to the next node (removes front element)
    this.front = this.front.next;
    // Step 4: Check if queue became empty after removal
    if (this.front === null) {
      // Step 5: If empty, set rear to null (both pointers should be null)
      this.rear = null;
    }
    // Step 6: Decrement the count of elements
    this.count--;
    // Step 7: Return the removed element
    return x;
  }

  // getFront(): Returns the front element without removing it
  getFront() {
    // Step 1: Check if queue is empty
    if (this.front === null) {
      // Step 2a: If empty, return -1 (error indicator)
      return -1;
    }
    // Step 2b: Return the data of the front node
    return this.front.data;
  }

  // getRear(): Returns the rear element without removing it
  getRear() {
    // Step 1: Check if queue is empty
    if (this.rear === null) {
      // Step 2a: If empty, return -1 (error indicator)
      return -1;
    }
    // Step 2b: Return the data of the rear node
    return this.rear.data;
  }

  // getSize(): Returns the number of elements in the queue
  getSize() {
    // Step 1: Return the current count of elements
    return this.count;
  }

  // printQueue(): Prints all elements in the queue from front to rear
  printQueue() {
    // Step 1: Start from the front node
    let current = this.front;
    // Step 2: Traverse through the linked list
    while (current !== null) {
      // Step 3: Print the data of current node
      console.log(current.data);
      // Step 4: Move to the next node
      current = current.next;
    }
  }
}

// ========== TEST CODE EXECUTION ==========

// Step 1: Create a new Queue instance with capacity 5
let queue = new Queue(5);
// Execution: Queue is initialized with front=null, rear=null, count=0

// Step 2: Add element 10 to the queue
queue.enQueue(10);
// Execution: Creates node(10), sets front=node(10), rear=node(10), count=1

// Step 3: Add element 20 to the queue
queue.enQueue(20);
// Execution: Creates node(20), links rear.next=node(20), sets rear=node(20), count=2

// Step 4: Add element 30 to the queue
queue.enQueue(30);
// Execution: Creates node(30), links rear.next=node(30), sets rear=node(30), count=3

// Step 5: Add element 40 to the queue
queue.enQueue(40);
// Execution: Creates node(40), links rear.next=node(40), sets rear=node(40), count=4

// Step 6: Add element 50 to the queue
queue.enQueue(50);
// Execution: Creates node(50), links rear.next=node(50), sets rear=node(50), count=5

// Step 7: Get and print the front element (should be 10)
console.log(queue.getFront());
// Execution: Returns front.data = 10, prints: 10

// Step 8: Get and print the rear element (should be 50)
console.log(queue.getRear());
// Execution: Returns rear.data = 50, prints: 50

// Step 9: Get and print the size of the queue (should be 5)
console.log(queue.getSize());
// Execution: Returns count = 5, prints: 5

// Step 10: Check if queue is empty (should be false)
console.log(queue.isEmpty());
// Execution: Returns count === 0 = false, prints: false

// Step 11: Remove and print the front element (should be 10)
console.log(queue.dequeue());
// Execution: Removes node(10), sets front=node(20), count=4, returns 10, prints: 10
