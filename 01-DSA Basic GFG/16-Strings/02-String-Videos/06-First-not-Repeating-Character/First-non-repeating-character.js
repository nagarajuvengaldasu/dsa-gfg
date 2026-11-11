// Problem: Find the first non-repeating character in a string
// First Non-Repeating Character: The first character (from left) that appears exactly once
// Example: In "greeksforgeeks", 'f' is the first non-repeating character
//          (g appears twice, r appears twice, e appears 4 times, k appears twice, s appears twice, o appears once but 'f' comes first)

// firstNonRepeatingCharacter(str): Optimal O(n) solution using character tracking
// Time Complexity: O(n) where n is the length of string
// Space Complexity: O(1) - fixed size array of 256 (for ASCII characters)
// Algorithm:
//   - Use count array to store: -1 (not seen), index (first occurrence), -2 (repeating)
//   - First pass: Track first occurrence index or mark as repeating
//   - Second pass: Find minimum index (>= 0) which represents first non-repeating character
function firstNonRepeatingCharacter(str) {
  // Step 1: Create a count array of size 256 (for all ASCII characters)
  // Each index represents an ASCII character code (0-255)
  // Values: -1 = not seen, index = first occurrence position, -2 = repeating character
  let count = new Array(256).fill(-1);

  // Step 2: First pass - Traverse the string and track character occurrences
  for (let i = 0; i < str.length; i++) {
    // Step 3: Get ASCII code of current character
    let charCode = str.charCodeAt(i);

    // Step 4: Check if this character has been seen before
    if (count[charCode] === -1) {
      // Step 5a: If not seen before (value is -1), store its index (first occurrence)
      count[charCode] = i;
    } else {
      // Step 5b: If already seen (value is an index), mark as repeating (-2)
      count[charCode] = -2;
    }
  }

  // Step 6: Initialize index to string length (invalid index, used as sentinel)
  // This will help us find the minimum valid index
  let index = str.length;

  // Step 7: Second pass - Find the minimum index among non-repeating characters
  // Traverse through all possible ASCII characters
  for (let i = 0; i < 256; i++) {
    // Step 8: Check if character was seen (count[i] >= 0) and is non-repeating
    // count[i] >= 0 means it's not -1 (not seen) and not -2 (repeating)
    // It contains the first occurrence index
    if (count[i] >= 0 && count[i] < index) {
      // Step 9: Update index to the minimum (leftmost) non-repeating character index
      index = count[i];
    }
  }

  // Step 10: Check if we found a non-repeating character
  if (index === str.length) {
    // Step 11a: If index is still str.length, no non-repeating character exists
    // Return special character "$" to indicate not found
    return "$";
  } else {
    // Step 11b: Return the character at the found index
    return str[index];
  }
}

// ========== TEST CODE EXECUTION ==========

// Test Case:
//   str = "greeksforgeeks"
// Find the first non-repeating character
let str = "greeksforgeeks";

// Execution trace (step-by-step):
//
// ===== FUNCTION CALL: firstNonRepeatingCharacter("greeksforgeeks") =====
//
// Step 1: Initialize count array → [-1, -1, -1, ..., -1] (256 values of -1)
//
// String: "greeksforgeeks"
// Indices: 0  1  2  3  4  5  6  7  8  9  10 11 12 13
//          g  r  e  e  k  s  f  o  r  g  e  e  k  s
//
// ===== FIRST PASS: Track character occurrences =====
//
// Iteration 1: i = 0, char = 'g'
//   - charCode = 'g'.charCodeAt(0) = 103
//   - count[103] === -1 → true, set count[103] = 0
//   State: count[103] = 0 (first occurrence of 'g' at index 0)
//
// Iteration 2: i = 1, char = 'r'
//   - charCode = 'r'.charCodeAt(0) = 114
//   - count[114] === -1 → true, set count[114] = 1
//   State: count[114] = 1 (first occurrence of 'r' at index 1)
//
// Iteration 3: i = 2, char = 'e'
//   - charCode = 'e'.charCodeAt(0) = 101
//   - count[101] === -1 → true, set count[101] = 2
//   State: count[101] = 2 (first occurrence of 'e' at index 2)
//
// Iteration 4: i = 3, char = 'e'
//   - charCode = 'e'.charCodeAt(0) = 101
//   - count[101] === -1 → false (it's 2, not -1)
//   - Set count[101] = -2 (mark 'e' as repeating)
//   State: count[101] = -2 ('e' is repeating)
//
// Iteration 5: i = 4, char = 'k'
//   - charCode = 'k'.charCodeAt(0) = 107
//   - count[107] === -1 → true, set count[107] = 4
//   State: count[107] = 4 (first occurrence of 'k' at index 4)
//
// Iteration 6: i = 5, char = 's'
//   - charCode = 's'.charCodeAt(0) = 115
//   - count[115] === -1 → true, set count[115] = 5
//   State: count[115] = 5 (first occurrence of 's' at index 5)
//
// Iteration 7: i = 6, char = 'f'
//   - charCode = 'f'.charCodeAt(0) = 102
//   - count[102] === -1 → true, set count[102] = 6
//   State: count[102] = 6 (first occurrence of 'f' at index 6)
//
// Iteration 8: i = 7, char = 'o'
//   - charCode = 'o'.charCodeAt(0) = 111
//   - count[111] === -1 → true, set count[111] = 7
//   State: count[111] = 7 (first occurrence of 'o' at index 7)
//
// Iteration 9: i = 8, char = 'r'
//   - charCode = 'r'.charCodeAt(0) = 114
//   - count[114] === -1 → false (it's 1, not -1)
//   - Set count[114] = -2 (mark 'r' as repeating)
//   State: count[114] = -2 ('r' is repeating)
//
// Iteration 10: i = 9, char = 'g'
//   - charCode = 'g'.charCodeAt(0) = 103
//   - count[103] === -1 → false (it's 0, not -1)
//   - Set count[103] = -2 (mark 'g' as repeating)
//   State: count[103] = -2 ('g' is repeating)
//
// Iteration 11: i = 10, char = 'e'
//   - charCode = 'e'.charCodeAt(0) = 101
//   - count[101] === -1 → false (it's -2, not -1)
//   - Set count[101] = -2 (already -2, no change)
//   State: count[101] = -2 ('e' is repeating)
//
// Iteration 12: i = 11, char = 'e'
//   - charCode = 'e'.charCodeAt(0) = 101
//   - count[101] === -1 → false (it's -2, not -1)
//   - Set count[101] = -2 (already -2, no change)
//   State: count[101] = -2 ('e' is repeating)
//
// Iteration 13: i = 12, char = 'k'
//   - charCode = 'k'.charCodeAt(0) = 107
//   - count[107] === -1 → false (it's 4, not -1)
//   - Set count[107] = -2 (mark 'k' as repeating)
//   State: count[107] = -2 ('k' is repeating)
//
// Iteration 14: i = 13, char = 's'
//   - charCode = 's'.charCodeAt(0) = 115
//   - count[115] === -1 → false (it's 5, not -1)
//   - Set count[115] = -2 (mark 's' as repeating)
//   State: count[115] = -2 ('s' is repeating)
//
// After first pass:
//   count[102] = 6 ('f' - non-repeating, first at index 6)
//   count[111] = 7 ('o' - non-repeating, first at index 7)
//   All other characters are -2 (repeating) or -1 (not present)
//
// ===== SECOND PASS: Find minimum index =====
//
// Step 6: Initialize index = str.length = 14
//
// Step 7: Loop through all 256 ASCII characters
//   - Check count[0] → -1, skip
//   - Check count[1] → -1, skip
//   - ... (checking all indices)
//   - Check count[102] → 6, condition: 6 >= 0 && 6 < 14 → true
//     → index = 6 (update to minimum)
//   - Check count[111] → 7, condition: 7 >= 0 && 7 < 6 → false (7 is not < 6)
//     → index remains 6
//   - ... (all other indices are -1 or -2)
//
// Step 10: Check if index === str.length
//   - index (6) !== str.length (14) → false
//
// Step 11b: Return str[6] = 'f'
//
// Result: Return 'f' (first non-repeating character at index 6) ✓
//
// Explanation:
//   - Characters 'g', 'r', 'e', 'k', 's' all repeat
//   - Character 'f' appears only once at index 6
//   - Character 'o' appears only once at index 7
//   - Since 'f' comes before 'o', 'f' is the first non-repeating character

console.log(firstNonRepeatingCharacter(str));
// Expected Output: "f" (first non-repeating character in "greeksforgeeks")
