/*
 * PROBLEM STATEMENT: Pattern Search
 * ---------------------------------
 * Given a text string txt and a pattern string pat, determine if pat appears
 * as a contiguous substring in txt. Return true if it does, false otherwise.
 *
 * Example:
 *   txt = "geeksforgeeks", pat = "eks"  →  true  (pattern at index 2 and 10)
 * Example:
 *   txt = "abcdef", pat = "xyz"  →  false
 */

/*
 * STEP-BY-STEP EXECUTION (txt = "geeksforgeeks", pat = "eks"):
 * -----------------------------------------------------------
 * 1. n = 13, m = 3. Loop i from 0 to n - m = 10.
 *
 *    i=0  txt.substring(0,3) = "gee"  ≠ "eks"  → continue
 *    i=1  txt.substring(1,4) = "eek"  ≠ "eks"  → continue
 *    i=2  txt.substring(2,5) = "eks"  === "eks"  → return true
 *
 * 2. (Subsequent i not reached.) return true
 */
class Solution {
  Search(pat, txt) {
    // Step 1: Get the length of the text and pattern
    let n = txt.length;
    // Step 2: Get the length of the pattern
    let m = pat.length;
    // Step 3: Loop through the text and check if the pattern is present
    for (let i = 0; i <= n - m; i++) {
      // Step 3.1: Check if the pattern is present
      if (txt.substring(i, i + m) === pat) {
        // Step 3.1.1: Return true
        return true;
      }
    }
    // Step 3.2: Return false
    return false;
  }
}

// Step 4: Create a new instance of the Solution class
let sol = new Solution();
// Step 5: Create a new text string
let txt = "geeksforgeeks";
// Step 6: Create a new pattern string
let pat = "eks";
console.log(sol.Search(pat, txt));
