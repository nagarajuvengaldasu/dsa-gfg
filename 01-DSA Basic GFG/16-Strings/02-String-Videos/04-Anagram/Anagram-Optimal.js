// Problem: Check if two strings are anagrams - Optimal Solution
// Anagram Definition: Two strings are anagrams if they contain the same characters
// in the same frequency, but possibly in different order.
// Example: "listen" and "silent" are anagrams (same letters: l, i, s, t, e, n)

// anagramOptimal(a, b): Optimal approach using character frequency counting
// Time Complexity: O(n) where n is the length of strings
// Space Complexity: O(1) - fixed size array of 256 (for ASCII characters)
function anagramOptimal(a, b) {
  // Step 1: Check if both strings have the same length
  // If lengths are different, they cannot be anagrams
  if (a.length !== b.length) {
    return false;
  }

  // Step 2: Create a count array of size 256 (for all ASCII characters)
  // Each index represents an ASCII character code (0-255)
  // Value at each index represents the frequency difference
  let count = new Array(256).fill(0);

  // Step 3: First pass - Count characters in string 'a'
  // For each character in 'a', increment its count in the array
  for (let i = 0; i < a.length; i++) {
    // Step 4: Get ASCII code of character at position i
    // charCodeAt(i) returns the Unicode/ASCII value of the 
    count[a.charCodeAt(i)]++;
    count[b.charCodeAt(i)]--;
  }

  // Step 9: Third pass - Check if all counts are zero
  // If strings are anagrams, incrementing and decrementing should cancel out
  // All values in count array should be 0
  for (let k = 0; k < 256; k++) {
    // Step 10: If any count is not zero, strings are not anagrams
    if (count[k] !== 0) {
      // Step 11a: Return false if frequency mismatch found
      return false;
    }
  }

  // Step 11b: If all counts are zero, strings are anagrams
  return true;
}

// ========== TEST CODE EXECUTION ==========

// Test Case:
//   a = "listen"
//   b = "silent"
// Check if these are anagrams
let a = "listen";
let b = "silent";

// Execution trace (step-by-step):
//
// ===== FUNCTION CALL: anagramOptimal("listen", "silent") =====
//
// Step 1: Check lengths → a.length(6) === b.length(6) → continue
//
// Step 2: Initialize count array → [0, 0, 0, ..., 0] (256 zeros)
//
// ===== FIRST PASS: Count characters in "listen" =====
// Step 3: i = 0, char = 'l'
//   - charCode = 'l'.charCodeAt(0) = 108
//   - count[108]++ → count[108] = 1
//
// Step 4: i = 1, char = 'i'
//   - charCode = 'i'.charCodeAt(0) = 105
//   - count[105]++ → count[105] = 1
//
// Step 5: i = 2, char = 's'
//   - charCode = 's'.charCodeAt(0) = 115
//   - count[115]++ → count[115] = 1
//
// Step 6: i = 3, char = 't'
//   - charCode = 't'.charCodeAt(0) = 116
//   - count[116]++ → count[116] = 1
//
// Step 7: i = 4, char = 'e'
//   - charCode = 'e'.charCodeAt(0) = 101
//   - count[101]++ → count[101] = 1
//
// Step 8: i = 5, char = 'n'
//   - charCode = 'n'.charCodeAt(0) = 110
//   - count[110]++ → count[110] = 1
//
// After first pass: count[101]=1('e'), count[105]=1('i'), count[108]=1('l'),
//                   count[110]=1('n'), count[115]=1('s'), count[116]=1('t')
//
// ===== SECOND PASS: Decrement counts for "silent" =====
// Step 9: j = 0, char = 's'
//   - charCode = 's'.charCodeAt(0) = 115
//   - count[115]-- → count[115] = 0
//
// Step 10: j = 1, char = 'i'
//   - charCode = 'i'.charCodeAt(0) = 105
//   - count[105]-- → count[105] = 0
//
// Step 11: j = 2, char = 'l'
//   - charCode = 'l'.charCodeAt(0) = 108
//   - count[108]-- → count[108] = 0
//
// Step 12: j = 3, char = 'e'
//   - charCode = 'e'.charCodeAt(0) = 101
//   - count[101]-- → count[101] = 0
//
// Step 13: j = 4, char = 'n'
//   - charCode = 'n'.charCodeAt(0) = 110
//   - count[110]-- → count[110] = 0
//
// Step 14: j = 5, char = 't'
//   - charCode = 't'.charCodeAt(0) = 116
//   - count[116]-- → count[116] = 0
//
// After second pass: All character counts are back to 0
//
// ===== THIRD PASS: Check if all counts are zero =====
// Step 15: Loop through all 256 indices
//   - Check count[0] === 0 → true, continue
//   - Check count[1] === 0 → true, continue
//   - ... (checking all indices)
//   - Check count[101] === 0 → true, continue
//   - Check count[105] === 0 → true, continue
//   - Check count[108] === 0 → true, continue
//   - Check count[110] === 0 → true, continue
//   - Check count[115] === 0 → true, continue
//   - Check count[116] === 0 → true, continue
//   - ... (all other indices are 0)
//
// Step 16: All counts are zero → return true ✓
//
// Result: Return true (strings are anagrams)
//
// Explanation: The optimal approach uses character frequency counting:
//   - Increment counts for characters in first string
//   - Decrement counts for characters in second string
//   - If all counts are zero, strings have same character frequencies (anagrams)

console.log(anagramOptimal(a, b));
// Expected Output: true (because "listen" and "silent" are anagrams)
