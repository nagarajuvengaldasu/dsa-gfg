// Problem: Reverse the order of words in a string
// Example: "Hello World welcome to the world" → "world the to welcome World Hello"
// Approach: Use stack (LIFO - Last In First Out) to reverse word order

// reverseWordString(str): Naive approach using stack
// Time Complexity: O(n) where n is the length of string
// Space Complexity: O(n) for stack and words array
// Algorithm:
//   1. Split string into words
//   2. Push all words onto stack
//   3. Pop words from stack (reverses order due to LIFO property)
//   4. Join popped words to form reversed string
function reverseWordString(str) {
  // Step 1: Initialize an empty stack (array used as stack)
  // Stack will store words in order, then we'll pop them in reverse
  let stack = [];

  // Step 2: Split the string into words using space as delimiter
  // split(" ") creates an array of words separated by spaces
  // Example: "Hello World" → ["Hello", "World"]
  let words = str.split(" ");

  // Step 3: Push all words onto the stack
  // Traverse through each word in the words array
  for (let word of words) {
    // Step 4: Push current word onto the stack
    // Words are pushed in original order (first word at bottom, last word at top)
    stack.push(word);
  }

  // Step 5: Initialize empty string to store reversed words
  let reversedWords = "";

  // Step 6: Pop words from stack until stack is empty
  // Since stack is LIFO (Last In First Out), popping reverses the order
  while (stack.length > 0) {
    // Step 7: Pop the top word from stack and append to result
    // pop() removes and returns the last element (top of stack)
    // Add space after each word
    reversedWords += stack.pop() + " ";
  }

  // Step 8: Return the reversed words string
  // Note: This will have a trailing space, which is typical for this approach
  return reversedWords;
}

// ========== TEST CODE EXECUTION ==========

// Test Case:
//   str = "Hello World welcome to the world"
// Reverse the order of words
let str = "Hello World welcome to the world";

// Execution trace (step-by-step):
//
// ===== FUNCTION CALL: reverseWordString("Hello World welcome to the world") =====
//
// Step 1: Initialize stack → []
//
// Step 2: Split string into words
//   str.split(" ") → ["Hello", "World", "welcome", "to", "the", "world"]
//   words = ["Hello", "World", "welcome", "to", "the", "world"]
//
// ===== FIRST PASS: Push words onto stack =====
//
// Iteration 1: word = "Hello"
//   - stack.push("Hello")
//   - stack = ["Hello"]
//
// Iteration 2: word = "World"
//   - stack.push("World")
//   - stack = ["Hello", "World"]
//
// Iteration 3: word = "welcome"
//   - stack.push("welcome")
//   - stack = ["Hello", "World", "welcome"]
//
// Iteration 4: word = "to"
//   - stack.push("to")
//   - stack = ["Hello", "World", "welcome", "to"]
//
// Iteration 5: word = "the"
//   - stack.push("the")
//   - stack = ["Hello", "World", "welcome", "to", "the"]
//
// Iteration 6: word = "world"
//   - stack.push("world")
//   - stack = ["Hello", "World", "welcome", "to", "the", "world"]
//
// After pushing: stack = ["Hello", "World", "welcome", "to", "the", "world"]
//                (bottom)                                    (top)
//
// Step 5: Initialize reversedWords = ""
//
// ===== SECOND PASS: Pop words from stack (reverses order) =====
//
// Iteration 1: stack.length (6) > 0 → true
//   - stack.pop() → "world" (removes from top)
//   - reversedWords += "world" + " " → "world "
//   - stack = ["Hello", "World", "welcome", "to", "the"]
//
// Iteration 2: stack.length (5) > 0 → true
//   - stack.pop() → "the" (removes from top)
//   - reversedWords += "the" + " " → "world the "
//   - stack = ["Hello", "World", "welcome", "to"]
//
// Iteration 3: stack.length (4) > 0 → true
//   - stack.pop() → "to" (removes from top)
//   - reversedWords += "to" + " " → "world the to "
//   - stack = ["Hello", "World", "welcome"]
//
// Iteration 4: stack.length (3) > 0 → true
//   - stack.pop() → "welcome" (removes from top)
//   - reversedWords += "welcome" + " " → "world the to welcome "
//   - stack = ["Hello", "World"]
//
// Iteration 5: stack.length (2) > 0 → true
//   - stack.pop() → "World" (removes from top)
//   - reversedWords += "World" + " " → "world the to welcome World "
//   - stack = ["Hello"]
//
// Iteration 6: stack.length (1) > 0 → true
//   - stack.pop() → "Hello" (removes from top)
//   - reversedWords += "Hello" + " " → "world the to welcome World Hello "
//   - stack = []
//
// Iteration 7: stack.length (0) > 0 → false, exit loop
//
// Step 8: Return "world the to welcome World Hello "
//
// Result: "world the to welcome World Hello " ✓
//
// Explanation:
//   - Original: "Hello World welcome to the world"
//   - Reversed: "world the to welcome World Hello "
//   - Stack's LIFO property naturally reverses the order of words

console.log(reverseWordString(str));
// Expected Output: "world the to welcome World Hello "
// (Note: There's a trailing space at the end)
