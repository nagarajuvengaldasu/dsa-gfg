/**
 * Optimal function to find all missing characters in a pangram string
 * @param {string} s - Input string to check
 * @returns {string} - Returns all missing letters as a string, or "-1" if all letters are present
 *
 * Time Complexity: O(n) where n is string length
 * Space Complexity: O(1) - Set stores at most 26 letters
 *
 * Algorithm: Subtraction Approach
 *   1. Start with Set containing all 26 letters
 *   2. Remove letters that are found in the input string
 *   3. Remaining letters in Set are the missing ones
 *
 * Advantages:
 * - Uses Set for O(1) deletion operations
 * - Only processes alphabetic characters (skips spaces, punctuation)
 * - Returns ALL missing letters, not just the first one
 * - Set maintains insertion order (alphabetical)
 *
 * Step-by-step execution for s = "abcdefghijklmy":
 *
 * ===== PHASE 1: INITIALIZE WITH ALL LETTERS =====
 *
 * Line 3: Create alphabet string
 *   alphabet = "abcdefghijklmnopqrstuvwxyz"
 *
 * Line 4: Convert alphabet string to Set
 *   allLetters = new Set("abcdefghijklmnopqrstuvwxyz")
 *   allLetters = Set { 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' }
 *   allLetters.size = 26
 *
 * ===== PHASE 2: REMOVE LETTERS FOUND IN STRING =====
 *
 * Line 7-11: Iterate through lowercase string and remove found letters
 *   s.toLowerCase() = "abcdefghijklmy"
 *
 *   Iteration 1: char = 'a'
 *     Line 8: 'a' >= 'a' && 'a' <= 'z'? ✓ (is a letter)
 *     Line 9: allLetters.delete('a') → allLetters = Set { 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' }
 *     allLetters.size = 25
 *
 *   Iteration 2: char = 'b'
 *     Line 8: 'b' is a letter ✓
 *     Line 9: allLetters.delete('b') → allLetters = Set { 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' }
 *     allLetters.size = 24
 *
 *   Iteration 3: char = 'c'
 *     Line 8: 'c' is a letter ✓
 *     Line 9: allLetters.delete('c') → allLetters = Set { 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' }
 *     allLetters.size = 23
 *
 *   Iteration 4: char = 'd'
 *     Line 9: allLetters.delete('d') → allLetters.size = 22
 *
 *   Iteration 5: char = 'e'
 *     Line 9: allLetters.delete('e') → allLetters.size = 21
 *
 *   Iteration 6: char = 'f'
 *     Line 9: allLetters.delete('f') → allLetters.size = 20
 *
 *   Iteration 7: char = 'g'
 *     Line 9: allLetters.delete('g') → allLetters.size = 19
 *
 *   Iteration 8: char = 'h'
 *     Line 9: allLetters.delete('h') → allLetters.size = 18
 *
 *   Iteration 9: char = 'i'
 *     Line 9: allLetters.delete('i') → allLetters.size = 17
 *
 *   Iteration 10: char = 'j'
 *     Line 9: allLetters.delete('j') → allLetters.size = 16
 *
 *   Iteration 11: char = 'k'
 *     Line 9: allLetters.delete('k') → allLetters.size = 15
 *
 *   Iteration 12: char = 'l'
 *     Line 9: allLetters.delete('l') → allLetters.size = 14
 *
 *   Iteration 13: char = 'm'
 *     Line 9: allLetters.delete('m') → allLetters.size = 13
 *
 *   Iteration 14: char = 'y'
 *     Line 8: 'y' is a letter ✓
 *     Line 9: allLetters.delete('y') → allLetters.size = 12
 *
 *   After processing entire string:
 *     allLetters = Set { 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'z' }
 *     allLetters.size = 12
 *     Missing letters: n, o, p, q, r, s, t, u, v, w, x, z
 *
 * ===== PHASE 3: RETURN RESULT =====
 *
 * Line 14: Check if all letters were found
 *   allLetters.size === 0? 12 === 0 ✗ (false, continue)
 *   - If true, would return "-1" (all letters present)
 *
 * Line 17: Convert Set to array and join into string
 *   Array.from(allLetters) = ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'z']
 *   Note: Set maintains insertion order, so letters are in alphabetical order
 *   .join("") = "nopqrstuvwxz"
 *
 * ===== FINAL RESULT =====
 *
 * Return: "nopqrstuvwxz" (all missing letters in alphabetical order)
 *
 * Breakdown of missing letters:
 *   - Present in string: a, b, c, d, e, f, g, h, i, j, k, l, m, y (14 letters)
 *   - Missing from string: n, o, p, q, r, s, t, u, v, w, x, z (12 letters)
 */
function missingPanagram(s) {
  // LINE 2-4: Create Set containing all 26 letters of the alphabet
  // This is our "starting point" - we'll remove letters as we find them
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const allLetters = new Set(alphabet);
  // allLetters now contains: Set { 'a', 'b', 'c', ..., 'z' } (26 letters)

  // LINE 6-11: Iterate through input string and remove found letters from Set
  // Convert to lowercase for case-insensitive comparison
  for (let char of s.toLowerCase()) {
    // LINE 8: Check if character is a lowercase letter (a-z)
    // This filters out spaces, punctuation, numbers, etc.
    if (char >= "a" && char <= "z") {
      // LINE 9: Remove the letter from Set (if it exists)
      // Set.delete() is O(1) operation
      // If letter doesn't exist in Set, delete() does nothing (no error)
      allLetters.delete(char);
      // After deletion, Set only contains letters NOT found in the string
    }
  }

  // LINE 13-14: Check if all letters were found (Set is empty)
  // If Set is empty, it means all 26 letters were present in the string
  if (allLetters.size === 0) return "-1";

  // LINE 16-17: Convert remaining letters (missing ones) to string
  // Set maintains insertion order, so letters are in alphabetical order
  // Array.from() converts Set to array: ['n', 'o', 'p', ...]
  // .join("") joins array elements into a single string: "nopqrstuvwxz"
  return Array.from(allLetters).join("");
}

// Test case: String missing multiple letters (n, o, p, q, r, s, t, u, v, w, x, z)
let str = "abcdefghijklmy";
console.log(missingPanagram(str)); // Expected output: "nopqrstuvwxz" (all missing letters)