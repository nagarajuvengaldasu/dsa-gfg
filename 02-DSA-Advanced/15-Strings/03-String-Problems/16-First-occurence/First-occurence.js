/*
 * PROBLEM STATEMENT: First Occurrence of Pattern
 * ----------------------------------------------
 * Given a text string txt and a pattern string pat, find the index of the
 * first occurrence of pat in txt. Return -1 if pat is not found.
 * Uses naive/brute-force pattern matching: slide pat over txt and compare.
 *
 * Example:
 *   txt = "geeksforgeeks", pat = "for"  →  5  (pat found at index 5)
 * Example:
 *   txt = "abcd", pat = "xyz"  →  -1  (pat not found)
 */

/*
 * LINE-BY-LINE EXECUTION (txt="geeksforgeeks", pat="for"):
 * -------------------------------------------------------
 * 1. n = 13, m = 3
 * 2. m > n? 3 > 13 → No, continue
 * 3. Outer loop i = 0 to n-m = 10:
 *
 *    i=0  txt[0..2]="gee" vs "for"  j=0: g≠f → match=false, break
 *    i=1  txt[1..3]="eek" vs "for"  j=0: e≠f → match=false, break
 *    i=2  txt[2..4]="eks" vs "for"  j=0: e≠f → match=false, break
 *    i=3  txt[3..5]="ksf" vs "for"  j=0: k≠f → match=false, break
 *    i=4  txt[4..6]="sfo" vs "for"  j=0: s≠f → match=false, break
 *    i=5  txt[5..7]="for" vs "for"  j=0: f=f, j=1: o=o, j=2: r=r → match=true
 *         return 5
 *
 * 4. return 5 (never reaches -1)
 */
class Solution {
  firstoccurance(txt, pat) {
    // Step 1: Get the lengths of the text and pattern
    let n = txt.length;
    // Step 2: Get the length of the pattern
    let m = pat.length;
    // Step 3: Check if the pattern is longer than the text
    if (m > n) return -1;

    // Step 4: Loop through the text
    for (let i = 0; i <= n - m; i++) {
      // Step 4.1: Check if the pattern matches the text
      let match = true;

      // Step 4.2: Loop through the pattern
      for (let j = 0; j < m; j++) {
        // Step 4.2.1: Check if the pattern matches the text
        if (txt[i + j] !== pat[j]) {
          // Step 4.2.1.1: If the pattern does not match the text, set match to false and break
          match = false;
          break;
        }
      }
      // Step 4.2.2: If the pattern matches the text, return the index
      if (match) {
        // Step 4.2.2.1: Return the index
        return i;
      }
    }
    // Step 5: If the pattern is not found, return -1
    return -1;
  }
}
let sol = new Solution();
console.log(sol.firstoccurance("geeksforgeeks", "for"));
