/*
 * ========== PROBLEM: Reverse words in a string (dot-separated) ==========
 *
 * Given a string where words are separated by ".", reverse the order of words.
 * Multiple consecutive dots are allowed; they are skipped (no empty words).
 *
 * Input:  str = dot-separated string (e.g. "www.google.com", "a.b.c")
 *
 * Output: String with same words in reverse order, joined by "." (e.g. "com.google.www")
 *
 * Approach: (1) Parse the string into an array of words (split on "."). (2) Build
 * the result by appending words from the end to the start, with "." between them.
 */

function reverseWords(str) {
  let words = [];                       // will collect each segment between dots
  let i = 0;
  let n = str.length;

  // --- Step 1: Parse string into words (segments between dots) ---
  while (i < n) {
    while (i < n && str[i] === ".") {
      i++;                              // skip any leading or consecutive dots
    }
    let j = i;
    while (j < n && str[j] !== ".") {
      j++;                              // j moves to the next dot or end of string
    }
    if (i < j) {
      words.push(str.slice(i, j));      // push segment [i, j) as one word
    }
    i = j;                              // continue from j (after this word / at dot)
  }

  // --- Step 2: Build result by joining words in reverse order with "." ---
  let result = "";
  for (let k = words.length - 1; k >= 0; k--) {
    result += words[k];
    if (k > 0) {
      result += ".";                    // add dot between words, not after the last
    }
  }
  return result;
}

// --- Example: "www.google.com" → words ["www","google","com"] → "com.google.www" ---
let str = "www.google.com";
console.log(reverseWords(str));
