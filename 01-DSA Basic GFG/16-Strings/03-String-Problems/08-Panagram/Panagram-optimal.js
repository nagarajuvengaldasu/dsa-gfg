/**
 * Optimal function to check if a string is a pangram (contains all 26 letters of alphabet)
 * @param {string} str - Input string to check
 * @returns {boolean} - true if pangram, false otherwise
 *
 * Time Complexity: O(n) where n is string length
 * Space Complexity: O(1) - Set stores at most 26 letters
 *
 * Advantages over naive approach:
 * - Uses Set for O(1) insertion and uniqueness check
 * - Early termination when all 26 letters are found
 * - Only processes alphabetic characters (skips spaces, punctuation)
 * - Early return if string length < 26 (optimization)
 *
 * Step-by-step execution for str = "The quick brown fox jumps over the lazy dog":
 *
 * ===== INITIALIZATION =====
 *
 * Line 2: Check if string length < 26
 *   - str.length = 43 (longer than 26) ✓
 *   - Continue execution
 *
 * Line 3: Initialize Set to store unique letters
 *   - result = Set {} (empty set)
 *
 * Line 4: Convert string to lowercase and iterate
 *   - str.toLowerCase() = "the quick brown fox jumps over the lazy dog"
 *   - Start iterating character by character
 *
 * ===== ITERATION THROUGH STRING =====
 *
 * Iteration 1: char = 't'
 *   Line 5: 't' >= 'a' && 't' <= 'z'? ✓ (is a letter)
 *   Line 6: result.add('t') → result = Set { 't' }
 *   Line 7: result.size === 26? 1 === 26 ✗ (continue)
 *
 * Iteration 2: char = 'h'
 *   Line 5: 'h' is a letter ✓
 *   Line 6: result.add('h') → result = Set { 't', 'h' }
 *   Line 7: result.size === 26? 2 === 26 ✗ (continue)
 *
 * Iteration 3: char = 'e'
 *   Line 5: 'e' is a letter ✓
 *   Line 6: result.add('e') → result = Set { 't', 'h', 'e' }
 *   Line 7: result.size === 26? 3 === 26 ✗ (continue)
 *
 * Iteration 4: char = ' ' (space)
 *   Line 5: ' ' >= 'a' && ' ' <= 'z'? ✗ (not a letter)
 *   Line 6-7: Skipped (not a letter, continue to next iteration)
 *
 * Iteration 5: char = 'q'
 *   Line 5: 'q' is a letter ✓
 *   Line 6: result.add('q') → result = Set { 't', 'h', 'e', 'q' }
 *   Line 7: result.size === 26? 4 === 26 ✗ (continue)
 *
 * Iteration 6: char = 'u'
 *   Line 5: 'u' is a letter ✓
 *   Line 6: result.add('u') → result = Set { 't', 'h', 'e', 'q', 'u' }
 *   Line 7: result.size === 26? 5 === 26 ✗ (continue)
 *
 * Iteration 7: char = 'i'
 *   Line 5: 'i' is a letter ✓
 *   Line 6: result.add('i') → result = Set { 't', 'h', 'e', 'q', 'u', 'i' }
 *   Line 7: result.size === 26? 6 === 26 ✗ (continue)
 *
 * Iteration 8: char = 'c'
 *   Line 5: 'c' is a letter ✓
 *   Line 6: result.add('c') → result = Set { 't', 'h', 'e', 'q', 'u', 'i', 'c' }
 *   Line 7: result.size === 26? 7 === 26 ✗ (continue)
 *
 * Iteration 9: char = 'k'
 *   Line 5: 'k' is a letter ✓
 *   Line 6: result.add('k') → result = Set { 't', 'h', 'e', 'q', 'u', 'i', 'c', 'k' }
 *   Line 7: result.size === 26? 8 === 26 ✗ (continue)
 *
 * ... (continuing through all characters) ...
 *
 * As we process more letters:
 * - 'b', 'r', 'o', 'w', 'n', 'f', 'x', 'j', 'm', 'p', 's', 'v', 'l', 'a', 'z', 'y', 'd', 'g'
 * - Each unique letter is added to the Set
 * - Set automatically handles duplicates (e.g., 'e' appears multiple times but only stored once)
 *
 * Key iterations (when new unique letters are found):
 * - 'b' added → Set size increases
 * - 'r' added → Set size increases
 * - 'o' added → Set size increases
 * - 'w' added → Set size increases
 * - 'n' added → Set size increases
 * - 'f' added → Set size increases
 * - 'x' added → Set size increases
 * - 'j' added → Set size increases
 * - 'm' added → Set size increases
 * - 'p' added → Set size increases
 * - 's' added → Set size increases
 * - 'v' added → Set size increases
 * - 'l' added → Set size increases
 * - 'a' added → Set size increases
 * - 'z' added → Set size increases
 * - 'y' added → Set size increases
 * - 'd' added → Set size increases
 * - 'g' added → Set size increases
 *
 * At some point during iteration:
 *   Line 7: result.size === 26? ✓ (all 26 letters found!)
 *   - Early return: return true
 *   - Function exits immediately (optimization: don't need to check rest of string)
 *
 * ===== FINAL RESULT =====
 *
 * Return: true (pangram confirmed)
 *
 * Note: If we didn't find all 26 letters during iteration, we would reach:
 *   Line 10: return result.size === 26
 *   This would return false if Set size < 26
 */
function PanagramOptimal(str) {
  // LINE 2: Early optimization - if string has fewer than 26 characters,
  // it cannot contain all 26 letters of the alphabet
  if (str.length < 26) return false;

  // LINE 3: Initialize a Set to store unique letters found
  // Set automatically handles uniqueness (duplicate letters stored only once)
  // Set operations (add, size) are O(1) average case
  let result = new Set();

  // LINE 4: Iterate through each character in the lowercase string
  // Convert to lowercase for case-insensitive comparison
  for (let char of str.toLowerCase()) {
    // LINE 5: Check if character is a lowercase letter (a-z)
    // This filters out spaces, punctuation, numbers, etc.
    if (char >= "a" && char <= "z") {
      // LINE 6: Add the letter to the Set
      // If letter already exists, Set won't add duplicate (no error, just ignored)
      result.add(char);

      // LINE 7: Early termination optimization
      // If we've found all 26 letters, we can return immediately
      // No need to continue checking the rest of the string
      if (result.size === 26) return true;
    }
    // If character is not a letter (space, punctuation, etc.), skip it
  }

  // LINE 10: Final check after processing entire string
  // Return true only if Set contains exactly 26 unique letters
  // This handles cases where we didn't find all letters during iteration
  return result.size === 26;
}

// Test case: Famous pangram sentence containing all 26 letters
let str = "The quick brown fox jumps over the lazy dog";
console.log(PanagramOptimal(str)); // Expected output: true
