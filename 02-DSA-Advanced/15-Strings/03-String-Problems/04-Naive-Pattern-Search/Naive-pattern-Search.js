/*
 * ========== PROBLEM: Naive pattern search (substring search) ==========
 *
 * Given a text string (txt) and a pattern string (path), check if the pattern
 * appears as a contiguous substring anywhere in the text.
 *
 * Input:  path = pattern to search for (e.g. "abc")
 *         txt  = text to search in (e.g. "abdabc")
 *
 * Output: true if pattern occurs in text, false otherwise.
 *
 * Approach: Try every starting index i in text where pattern could fit (0 to n-m).
 *           For each i, compare txt[i..i+m-1] with pattern character by character.
 *           If all match, return true; if none do, return false. O(n*m) time.
 */

class Solution {
  search(path, txt) {
    let n = txt.length;                    // text length
    let m = path.length;                    // pattern length

    for (let i = 0; i <= n - m; i++) {     // each possible start index (pattern must fit)
      let match = true;
      for (let j = 0; j < m; j++) {
        if (txt[i + j] !== path[j]) {      // mismatch at position j
          match = false;
          break;
        }
      }
      if (match) {
        return true;                       // found pattern at index i
      }
    }
    return false;                          // pattern not found
  }
}

// --- Example: pattern "abc" in "abdabc" → found at index 3 → true ---
let path = "abc";
let txt = "abdabc";
console.log(new Solution().search(path, txt));
