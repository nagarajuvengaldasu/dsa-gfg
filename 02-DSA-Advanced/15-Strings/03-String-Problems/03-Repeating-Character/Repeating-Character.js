/*
 * ========== PROBLEM: First repeating character (index) ==========
 *
 * Given a string, find the index of the first character that appears more than once.
 * We want the leftmost character that repeats (smallest index i where str[i] occurs again later).
 *
 * Input:  str = string (e.g. "geeksforgeeks", "abcd")
 *
 * Output: Index of the first repeating character, or -1 if no character repeats.
 *
 * Approach: (1) Count frequency of each character. (2) Scan left to right and return
 * the index of the first character whose frequency is greater than 1.
 */

class Solution {
  repeatingCharacter(str) {
    let freq = new Map();                           // character -> count
    for (let i = 0; i < str.length; i++) {
      freq.set(str[i], (freq.get(str[i]) || 0) + 1);  // increment count for str[i]
    }
    for (let i = 0; i < str.length; i++) {
      if (freq.get(str[i]) > 1) {                  // first char that appears more than once
        return i;
      }
    }
    return -1;                                     // no repeating character
  }
}

// --- Example: "abcd" → no repeat → -1; "geeksforgeeks" → first repeat 'e' at index 1 ---
let str = "abcd";
console.log(new Solution().repeatingCharacter(str));
