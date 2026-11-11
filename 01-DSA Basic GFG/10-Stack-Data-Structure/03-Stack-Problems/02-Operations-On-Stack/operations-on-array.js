/**
 * Operations on Stack
 *
 * Problem: Given a stack and Q queries, perform operations on the stack.
 *
 * Query Types:
 * - i x: Insert/add element x to the stack
 * - r: Remove the topmost element from the stack
 * - h: Print the topmost element (head)
 * - f y: Check if element y is present in the stack. Print "Yes" if present, else "No"
 */

/**
 * Function to perform stack operations based on queries
 * @param {number} Q - Number of queries
 * @param {Array} queries - Array of queries, each query is [operation, value] or [operation]
 * @returns {Array} - Array of results from 'h' and 'f' operations
 */
function stackOperations(Q, queries) {
  // Initialize stack using array
  let stack = [];
  // Array to store results from 'h' and 'f' operations
  let results = [];

  // Process each query
  for (let i = 0; i < Q; i++) {
    let query = queries[i];
    let operation = query[0]; // First element is the operation type

    switch (operation) {
      case "i": // Insert operation: i x
        // query[1] contains the value to insert
        let valueToInsert = query[1];
        stack.push(valueToInsert);
        break;

      case "r": // Remove operation: r
        // Remove topmost element if stack is not empty
        if (stack.length > 0) {
          stack.pop();
        }
        // If stack is empty, we can ignore or handle as needed
        break;

      case "h": // Head operation: h (print topmost element)
        if (stack.length > 0) {
          // Topmost element is at the last index
          let topElement = stack[stack.length - 1];
          results.push(topElement);
        } else {
          // Handle empty stack case (if needed by problem)
          // Based on examples, it seems stack won't be empty for 'h' queries
        }
        break;

      case "f": // Find operation: f y
        // query[1] contains the value to find
        let valueToFind = query[1];
        // Search through the entire stack
        if (stack.includes(valueToFind)) {
          results.push("Yes");
        } else {
          results.push("No");
        }
        break;
    }
  }

  return results;
}

/**
 * Alternative implementation using explicit top pointer
 * (More similar to traditional stack implementation)
 */
class Stack {
  constructor() {
    this.stack = [];
    this.top = -1;
  }

  push(x) {
    this.top++;
    this.stack[this.top] = x;
  }

  pop() {
    if (this.top >= 0) {
      this.top--;
    }
  }

  peek() {
    if (this.top >= 0) {
      return this.stack[this.top];
    }
    return null;
  }

  find(y) {
    // Search from bottom to top (or top to bottom)
    for (let i = 0; i <= this.top; i++) {
      if (this.stack[i] === y) {
        return true;
      }
    }
    return false;
  }
}

function stackOperationsWithClass(Q, queries) {
  let stack = new Stack();
  let results = [];

  for (let i = 0; i < Q; i++) {
    let query = queries[i];
    let operation = query[0];

    switch (operation) {
      case "i":
        stack.push(query[1]);
        break;
      case "r":
        stack.pop();
        break;
      case "h":
        let top = stack.peek();
        if (top !== null) {
          results.push(top);
        }
        break;
      case "f":
        if (stack.find(query[1])) {
          results.push("Yes");
        } else {
          results.push("No");
        }
        break;
    }
  }

  return results;
}

// Test Cases
console.log("=== Test Case 1 ===");
let Q1 = 6;
let queries1 = [["i", 2], ["i", 4], ["i", 3], ["i", 5], ["h"], ["f", 8]];
let result1 = stackOperations(Q1, queries1);
console.log("Input queries:", queries1);
console.log("Output:", result1); // Expected: [5, "No"]
console.log("Expected: [5, 'No']");

console.log("\n=== Test Case 2 ===");
let Q2 = 4;
let queries2 = [["i", 3], ["i", 4], ["r"], ["f", 3]];
let result2 = stackOperations(Q2, queries2);
console.log("Input queries:", queries2);
console.log("Output:", result2); // Expected: ["Yes"]
console.log("Expected: ['Yes']");

console.log("\n=== Test Case 3: Multiple operations ===");
let Q3 = 8;
let queries3 = [
  ["i", 1],
  ["i", 2],
  ["i", 3],
  ["h"], // Should return 3
  ["r"], // Remove 3
  ["h"], // Should return 2
  ["f", 1], // Should return "Yes"
  ["f", 5], // Should return "No"
];
let result3 = stackOperations(Q3, queries3);
console.log("Input queries:", queries3);
console.log("Output:", result3); // Expected: [3, 2, "Yes", "No"]
console.log("Expected: [3, 2, 'Yes', 'No']");

console.log("\n=== Test Case 4: Using Class Implementation ===");
let result4 = stackOperationsWithClass(Q1, queries1);
console.log("Output (Class):", result4); // Expected: [5, "No"]
