/*
 * ========== PROBLEM: Improved Naive Pattern Searching ==========
 *
 * Given a text string (txt) and a pattern string (path), find all starting
 * indices where the pattern appears as a contiguous substring. Print each index.
 *
 * Input:  txt  = text to search in (e.g. "ABABABCD")
 *         path = pattern to find (e.g. "ABCD")
 *
 * Output: Each starting index i where path matches txt[i..i+m-1], one per line.
 *
 * Improvement over naive: we slide the window by more than 1 when possible.
 * - If the first character doesn't match (j === 0): slide by 1 (i++).
 * - If j characters matched then mismatch (j > 0): slide by j (i += j), since
 *   we know no occurrence can start in the middle of that partial match.
 * Uses a while loop so i is updated only by our explicit i++ or i += j.
 */

function improvedNaivePatternSearching(txt, path) {
  let n = txt.length;                    // text length
  let m = path.length;                    // pattern length
  let i = 0;                             // current start index in text (window start)
  while (i <= n - m) {                   // while pattern can still fit in remaining text
    let j = 0;                           // current position in pattern (0..m-1)
    while (j < m) {
      if (path[j] !== txt[i + j]) {      // mismatch at position j → stop comparing
        break;
      }
      j += 1;                            // match at j; continue to next character
    }
    if (j === m) {                       // full match: all m characters matched
      console.log(i);
    }
    if (j === 0) {
      i++;                               // first char didn't match → slide window by 1
    } else {
      i += j;                             // j chars matched then mismatch → slide by j
    }
  }
}

// --- Example: "ABCD" in "ABABABCD" → match at index 4 only (prints 4) ---
let txt = "ABABABCD";
let path = "ABCD";
improvedNaivePatternSearching(txt, path);
