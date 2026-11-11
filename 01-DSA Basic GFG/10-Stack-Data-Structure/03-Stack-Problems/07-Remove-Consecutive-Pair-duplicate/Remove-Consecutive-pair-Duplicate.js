/**
 * PROBLEM: Remove consecutive pair duplicates from a string
 *
 * If two consecutive same characters are found, remove BOTH of them.
 * This is different from removing single consecutive duplicates.
 *
 * Example: "aaabbaaccd"
 * - "aa" (first pair) → remove both → remaining: "abbaaccd"
 * - "bb" → remove both → remaining: "aaccd"
 * - "aa" → remove both → remaining: "ccd"
 * - "cc" → remove both → remaining: "d"
 * Result: "d"
 */

function removeConsecutivePair(s) {
  // STEP 1: Initialize an empty stack to store characters
  // The stack will hold characters that don't form consecutive pairs
  let stack = [];

  // STEP 2: Iterate through each character in the string
  for (let i = 0; i < s.length; i++) {
    // STEP 2.1: Get the current character at position i
    let char = s.charAt(i);

    // STEP 3: Check if stack is empty
    if (stack.length === 0) {
      // STEP 3.1: If stack is empty, push the character
      // No previous character to compare with, so add it
      stack.push(char);
    } else {
      // STEP 3.2: Stack is not empty, compare with top element
      // Check if current character matches the top of stack
      if (char === stack[stack.length - 1]) {
        // STEP 3.2.1: Current char matches top of stack
        // This means we found a consecutive pair (duplicate)
        // Remove the top element (the first of the pair)
        // The current char is also skipped (not pushed)
        // This effectively removes both characters of the pair
        stack.pop();
      } else {
        // STEP 3.2.2: Current char is different from top
        // No pair formed, so push this character onto stack
        stack.push(char);
      }
    }
  }

  // STEP 4: Convert the stack array to a string and return
  // The stack contains all characters that don't form consecutive pairs
  return stack.join("");
}

/**
 * DETAILED EXECUTION WALKTHROUGH
 *
 * Example: s = "aaabbaaccd"
 *
 * Iteration 1: i=0, char='a'
 *   - stack = [] (empty)
 *   - Push 'a' → stack = ['a']
 *
 * Iteration 2: i=1, char='a'
 *   - stack = ['a'] (not empty)
 *   - Compare: 'a' === stack[0] ('a') → TRUE
 *   - Pop 'a' → stack = []
 *   - Result: Both 'a's removed (pair eliminated)
 *
 * Iteration 3: i=2, char='a'
 *   - stack = [] (empty)
 *   - Push 'a' → stack = ['a']
 *
 * Iteration 4: i=3, char='b'
 *   - stack = ['a'] (not empty)
 *   - Compare: 'b' === stack[0] ('a') → FALSE
 *   - Push 'b' → stack = ['a', 'b']
 *
 * Iteration 5: i=4, char='b'
 *   - stack = ['a', 'b'] (not empty)
 *   - Compare: 'b' === stack[1] ('b') → TRUE
 *   - Pop 'b' → stack = ['a']
 *   - Result: Both 'b's removed (pair eliminated)
 *
 * Iteration 6: i=5, char='a'
 *   - stack = ['a'] (not empty)
 *   - Compare: 'a' === stack[0] ('a') → TRUE
 *   - Pop 'a' → stack = []
 *   - Result: Both 'a's removed (pair eliminated)
 *
 * Iteration 7: i=6, char='a'
 *   - stack = [] (empty)
 *   - Push 'a' → stack = ['a']
 *
 * Iteration 8: i=7, char='c'
 *   - stack = ['a'] (not empty)
 *   - Compare: 'c' === stack[0] ('a') → FALSE
 *   - Push 'c' → stack = ['a', 'c']
 *
 * Iteration 9: i=8, char='c'
 *   - stack = ['a', 'c'] (not empty)
 *   - Compare: 'c' === stack[1] ('c') → TRUE
 *   - Pop 'c' → stack = ['a']
 *   - Result: Both 'c's removed (pair eliminated)
 *
 * Iteration 10: i=9, char='d'
 *   - stack = ['a'] (not empty)
 *   - Compare: 'd' === stack[0] ('a') → FALSE
 *   - Push 'd' → stack = ['a', 'd']
 *
 * Final: stack = ['a', 'd']
 * Return: "ad"
 *
 *
 * VISUAL REPRESENTATION:
 *
 * Input: "aaabbaaccd"
 *
 * Processing:
 * a → stack: ['a']
 * a → matches top → pop → stack: []
 * a → stack: ['a']
 * b → stack: ['a', 'b']
 * b → matches top → pop → stack: ['a']
 * a → matches top → pop → stack: []
 * a → stack: ['a']
 * c → stack: ['a', 'c']
 * c → matches top → pop → stack: ['a']
 * d → stack: ['a', 'd']
 *
 * Output: "ad"
 */

let s = "aaabbaaccd";
console.log(removeConsecutivePair(s));
