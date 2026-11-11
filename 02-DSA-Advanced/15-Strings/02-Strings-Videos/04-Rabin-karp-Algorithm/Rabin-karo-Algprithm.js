/*
 * ========== PROBLEM: Rabin-Karp Algorithm ==========
 *
 * Given a text (txt) and a pattern (pat), find all starting indices where
 * the pattern appears as a contiguous substring. Print each index (or "Not Found").
 *
 * Input:  txt = text to search in,  pat = pattern to find
 * Output: Each starting index where pat matches txt (one per line), or "Not Found"
 *
 * Approach: (1) Slide the pattern one by one (like naive). (2) Compare hash values
 * of pattern and current text window. (3) If hash values match, compare individual
 * characters (spurious hit check). Uses polynomial rolling hash with modulo q.
 */

const d = 256;  // alphabet size (e.g. ASCII)

function RKSearch(txt, pat, q) {
  let m = pat.length;
  let n = txt.length;
  let h = 1;

  // Precompute h = d^(m-1) % q (used to remove leading digit in rolling hash)
  for (let i = 1; i < m; i++) {
    h = (h * d) % q;
  }

  // Initial hash for pattern (p) and first text window (t)
  let p = 0, t = 0;
  for (let i = 0; i < m; i++) {
    p = (p * d + pat.charCodeAt(i)) % q;
    t = (t * d + txt.charCodeAt(i)) % q;
  }

  let found = false;
  for (let i = 0; i <= n - m; i++) {
    if (p === t) {
      // Potential match — check for spurious hit (char-by-char)
      let j;
      for (j = 0; j < m; j++) {
        if (txt[i + j] !== pat[j]) break;
      }
      if (j === m) {
        console.log(i);
        found = true;
      }
    }
    if (i < n - m) {
      // Rolling hash: remove txt[i], add txt[i+m]
      t = (d * (t - h * txt.charCodeAt(i)) + txt.charCodeAt(i + m)) % q;
      if (t < 0) t = t + q;
    }
  }
  if (!found) console.log("Not Found");
}

let txt = "abdabcbabc";
let pat = "abc";
let q = 101;
RKSearch(txt, pat, q);  // 3 7
