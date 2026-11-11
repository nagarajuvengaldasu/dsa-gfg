// Problem: Find the leftmost repeating character in a string
// Leftmost Repeating Character: The first character (from left) that appears more than once
// Example: In "abcbc", 'b' is the leftmost repeating character (appears at index 1 and 3)

// leftMostRepeatingCharacter(str): Optimal O(n) solution using single pass
// Time Complexity: O(n) where n is the length of string
// Space Complexity: O(1) - fixed size array of 256 (for ASCII characters)
// Key Insight: Traverse from right to left, track visited characters
//              When we see a character that's already visited, it's repeating
//              Since we go right-to-left, the first visited character we encounter is leftmost
function leftMostRepeatingCharacter(str) {
  // Step 1: Create a visited array of size 256 (for all ASCII characters)
  // Each index represents an ASCII character code (0-255)
  // Value at each index: true if character has been seen, false otherwise
  let visited = new Array(256).fill(false);

  // Step 2: Initialize result to -1 (indicates no repeating character found)
  let res = -1;

  // Step 3: Traverse the string from right to left (end to beginning)
  // We go right-to-left so that when we find a repeating character,
  // we get its leftmost occurrence
  for (let i = str.length - 1; i >= 0; i--) {
    // Step 4: Get ASCII code of current character
    let charCode = str.charCodeAt(i);

    // Step 5: Check if this character has been visited before
    if (visited[charCode]) {
      // Step 6a: If visited, it means we've seen this character later in the string
      // Since we're going right-to-left, this is the leftmost occurrence of repeating character
      // Update result to current index
      res = i;
    }

    // Step 6b: Mark current character as visited
    // This tells us we've encountered this character
    visited[charCode] = true;
  }

  // Step 7: Return the index of leftmost repeating character
  // Returns -1 if no repeating character exists
  return res;
}

// ========== TEST CODE EXECUTION ==========

// Test Case:
//   str = "abcbc"
// Find the leftmost repeating character
let str = "abcbc";

// Execution trace (step-by-step):
//
// ===== FUNCTION CALL: leftMostRepeatingCharacter("abcbc") =====
//
// Step 1: Initialize visited array → [false, false, ..., false] (256 falses)
// Step 2: Initialize res = -1
//
// String: "abcbc"
// Indices: 0  1  2  3  4
//          a  b  c  b  c
//
// ===== ITERATION 1: i = 4 (character 'c' at end) =====
// Step 3: charCode = 'c'.charCodeAt(0) = 99
// Step 4: Check visited[99] → false (not visited before)
// Step 5: visited[99] = true (mark 'c' as visited)
// State: visited[99]=true, res = -1
//
// ===== ITERATION 2: i = 3 (character 'b') =====
// Step 3: charCode = 'b'.charCodeAt(0) = 98
// Step 4: Check visited[98] → false (not visited before)
// Step 5: visited[98] = true (mark 'b' as visited)
// State: visited[98]=true, visited[99]=true, res = -1
//
// ===== ITERATION 3: i = 2 (character 'c') =====
// Step 3: charCode = 'c'.charCodeAt(0) = 99
// Step 4: Check visited[99] → true (visited before at index 4!)
// Step 5: res = 2 (update result to current index)
// Step 6: visited[99] = true (already true, no change)
// State: visited[98]=true, visited[99]=true, res = 2
//
// ===== ITERATION 4: i = 1 (character 'b') =====
// Step 3: charCode = 'b'.charCodeAt(0) = 98
// Step 4: Check visited[98] → true (visited before at index 3!)
// Step 5: res = 1 (update result to current index - this is more leftmost)
// Step 6: visited[98] = true (already true, no change)
// State: visited[98]=true, visited[99]=true, res = 1
//
// ===== ITERATION 5: i = 0 (character 'a' at beginning) =====
// Step 3: charCode = 'a'.charCodeAt(0) = 97
// Step 4: Check visited[97] → false (not visited before)
// Step 5: visited[97] = true (mark 'a' as visited)
// State: visited[97]=true, visited[98]=true, visited[99]=true, res = 1
//
// ===== FINAL RESULT =====
// Step 7: Return res = 1
//
// Result: Index 1 (character 'b') is the leftmost repeating character ✓
// Explanation: 'b' appears at index 1 and 3, 'c' appears at index 2 and 4
//              Since we traverse right-to-left, when we see 'b' at index 1,
//              we know it was already seen at index 3, making index 1 the leftmost

console.log(leftMostRepeatingCharacter(str));
// Expected Output: 1 (index of leftmost repeating character 'b')
