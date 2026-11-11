// Problem: Check if string 'b' is a subsequence of string 'a'
// Subsequence Definition: String 'b' is a subsequence of 'a' if we can form 'b'
// by deleting some (possibly zero) characters from 'a' while maintaining the order.
// Example: "ac" is a subsequence of "abc" (delete 'b' from "abc" to get "ac")

// subsequence(a, b): Checks if 'b' is a subsequence of 'a'
function subsequence(a, b) {
  // Step 1: Get the length of string 'a' (main string)
  let n = a.length;
  // Step 2: Get the length of string 'b' (subsequence to check)
  let m = b.length;

  // Step 3: Initialize pointer for string 'b' (tracks which character we're looking for)
  let j = 0;

  // Step 4: Traverse through string 'a' character by character
  for (let i = 0; i < n && j < m; i++) {
    // Step 5: Check if current character in 'a' matches the current character we need from 'b'
    if (a[i] === b[j]) {
      // Step 6a: If match found, move to next character in 'b'
      j++;
      // Step 7: Check if we've matched all characters of }
    }
    // Step 6b: If no match, continue to next character in 'a' (we can skip characters)
  }

  // Step 9: If we've traversed all of 'a' but haven't matched all of 'b', return "No"
  return j === m ;
}

// ========== TEST CODE EXECUTION ==========

// Test Case:
//   a = "abc" (main string)
//   b = "ac"  (check if this is a subsequence of "abc")
let a = "axy";
let b = "yadxcp";

// Execution trace (step-by-step):
//
// Initial: n = 3, m = 2, j = 0
//
// ===== ITERATION 1: i = 0 (character 'a') =====
// Step 1: Check if a[0] === b[0] → 'a' === 'a' → true
// Step 2: j++ → j = 1
// Step 3: Check if j === m → 1 === 2 → false, continue
// State: j = 1 (we've matched first character 'a' of "ac")
//
// ===== ITERATION 2: i = 1 (character 'b') =====
// Step 1: Check if a[1] === b[1] → 'b' === 'c' → false
// Step 2: No match, continue to next iteration (skip 'b')
// State: j = 1 (still looking for 'c')
//
// ===== ITERATION 3: i = 2 (character 'c') =====
// Step 1: Check if a[2] === b[1] → 'c' === 'c' → true
// Step 2: j++ → j = 2
// Step 3: Check if j === m → 2 === 2 → true
// Step 4: Return "Yes"
//
// Result: "ac" is a subsequence of "abc" ✓
// Explanation: We found 'a' at index 0, then 'c' at index 2, maintaining order

console.log(subsequence(a, b));
// Expected Output: "Yes" (because "ac" is a subsequence of "abc")
