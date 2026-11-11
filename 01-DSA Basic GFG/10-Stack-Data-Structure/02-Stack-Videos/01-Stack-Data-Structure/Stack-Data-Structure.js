/*
 * Stack Data Structure - LIFO (Last In First Out)
 * STEP-BY-STEP EXECUTION:
 * push(1), push(2), push(3) → items=[1,2,3]
 * pop() → returns 3, items=[1,2]
 * peek() → returns 2 (no removal)
 */
class Stack {
  constructor() {
    // Private array to store stack elements
    // Using an array to implement the stack
    this.items = [];
  }

  // ============================================
  // STEP 2: Implement push operation
  // ============================================
  // Add an element to the top of the stack
  // Time Complexity: O(1)
  push(element) {
    this.items.push(element);
  }

  // ============================================
  // STEP 3: Implement pop operation
  // ============================================
  // Remove and return the top element from the stack
  // Returns undefined if stack is empty
  // Time Complexity: O(1)
  pop() {
    // Check if stack is empty before popping
    if (this.isEmpty()) {
      return undefined; // or throw an error: throw new Error("Stack is empty");
    }
    return this.items.pop();
  }

  // ============================================
  // STEP 4: Implement peek operation
  // ============================================
  // Return the top element without removing it
  // Returns undefined if stack is empty
  // Time Complexity: O(1)
  peek() {
    // Check if stack is empty before peeking
    if (this.isEmpty()) {
      return undefined; // or throw an error: throw new Error("Stack is empty");
    }
    return this.items[this.items.length - 1];
  }

  // ============================================
  // STEP 5: Implement isEmpty operation
  // ============================================
  // Check if the stack is empty
  // Returns true if stack is empty, false otherwise
  // Time Complexity: O(1)
  isEmpty() {
    return this.items.length === 0;
  }

  // ============================================
  // STEP 6: Implement size operation
  // ============================================
  // Return the number of elements in the stack
  // Time Complexity: O(1)
  size() {
    return this.items.length;
  }

  // ============================================
  // STEP 7: Implement printStack operation
  // ============================================
  // Return a copy of the stack array for display purposes
  // Using spread operator to return a copy (prevents external modification)
  // Time Complexity: O(n) where n is the number of elements
  printStack() {
    return [...this.items]; // Return a copy of the array
  }

  // ============================================
  // BONUS: Implement clear operation
  // ============================================
  // Remove all elements from the stack
  clear() {
    this.items = [];
  }
}

// ============================================
// STEP 8: Test the Stack implementation
// ============================================
// Create a new stack instance
let stack = new Stack();

// Test push operation - add elements to the stack
stack.push(1); // Stack: [1]
stack.push(2); // Stack: [1, 2]
stack.push(3); // Stack: [1, 2, 3]

// Print the entire stack
console.log("Stack after pushing 1, 2, 3:", stack.printStack()); // Output: [1, 2, 3]

// Test pop operation - remove and return top element
console.log("Popped element:", stack.pop()); // Output: 3, Stack: [1, 2]

// Test peek operation - view top element without removing
console.log("Top element (peek):", stack.peek()); // Output: 2, Stack: [1, 2]

// Test isEmpty operation - check if stack is empty
console.log("Is stack empty?", stack.isEmpty()); // Output: false

// Test size operation - get number of elements
console.log("Stack size:", stack.size()); // Output: 2
