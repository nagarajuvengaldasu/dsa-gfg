// Problem: Check if two strings are anagrams
// Anagram Definition: Two strings are anagrams if they contain the same characters
// in the same frequency, but possibly in different order.
// Example: "listen" and "silent" are anagrams (same letters: l, i, s, t, e, n)

// anagramNaive(a, b): Naive approach using sorting
// Time Complexity: O(n log n) due to sorting
// Space Complexity: O(n) for storing sorted strings
function anagramNaive(a, b) {
  // Step 1: Get the length of string 'a'
  let m = a.length;
  // Step 2: Get the length of string 'b'
  let n = b.length;

  // Step 3: Check if both strings have the same length
  // If lengths are different, they cannot be anagrams
  if (m !== n) {
    // Step 4a: Return false if lengths don't match
    return false;
  }

  // Step 4b: If lengths match, proceed with anagram check
  // Step 5: Convert string 'a' to array, sort it, then join back to string
  // Process: "listen" → ['l','i','s','t','e','n'] → ['e','i','l','n','s','t'] → "eilnst"
  let res = a.split("").sort().join("");

  // Step 6: Convert string 'b' to array, sort it, then join back to string
  // Process: "silent" → ['s','i','l','e','n','t'] → ['e','i','l','n','s','t'] → "eilnst"
  let res2 = b.split("").sort().join("");

  // Step 7: Compare the sorted strings
  // If sorted strings are equal, original strings are anagrams
  return res === res2;
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
// ===== FUNCTION CALL: anagramNaive("listen", "silent") =====
//
// Step 1: m = a.length → m = 6
// Step 2: n = b.length → n = 6
// Step 3: Check if m !== n → 6 !== 6 → false, continue (lengths match)
//
// Step 4: Process string 'a' = "listen"
//   - a.split('') → ['l', 'i', 's', 't', 'e', 'n']
//   - .sort() → ['e', 'i', 'l', 'n', 's', 't'] (alphabetical order)
//   - .join('') → "eilnst"
//   - res = "eilnst"
//
// Step 5: Process string 'b' = "silent"
//   - b.split('') → ['s', 'i', 'l', 'e', 'n', 't']
//   - .sort() → ['e', 'i', 'l', 'n', 's', 't'] (alphabetical order)
//   - .join('') → "eilnst"
//   - res2 = "eilnst"
//
// Step 6: Compare res === res2
//   - "eilnst" === "eilnst" → true
//
// Result: Return true (strings are anagrams) ✓
//
// Explanation: Both strings contain the same characters (e, i, l, n, s, t)
//              in the same frequency, just in different order.

console.log(anagramNaive(a, b));
// Expected Output: true (because "listen" and "silent" are anagrams)
