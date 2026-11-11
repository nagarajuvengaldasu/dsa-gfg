/*
 * ========== PROBLEM: Naive pattern searching (find all occurrences) ==========
 *
 * Given a text string (txt) and a pattern string (path), find all starting
 * indices in the text where the pattern appears as a contiguous substring.
 *
 * Input:  txt  = text to search in (e.g. "ABABABCD")
 *         path = pattern to find (e.g. "ABAB")
 *
 * Output: Print each index i where txt[i..i+m-1] matches path (one per line).
 *
 * Approach: For each possible start index i (0 to n-m), check if path matches
 * txt[i..i+m-1] character by character. If full match (j reaches m), print i.
 */

function naivePatternSearching(txt, path) {
  let n = txt.length;                    // text length
  let m = path.length;                    // pattern length
  for (let i = 0; i <= n - m; i++) {     // each start index where pattern fits (0 to n-m inclusive)
    let j = 0;
    while (j < m) {
      if (path[j] !== txt[i + j]) {      // mismatch at position j
        break;
      }
      j += 1;
    }
    if (j === m) {                       // full match: we compared all m characters
      console.log(i);
    }
  }
}

// --- Example: "ABAB" in "ABABABCD" → matches at index 0 and index 2 ---
let txt = "ABABABCD";
let path = "ABAB";
naivePatternSearching(txt, path);
