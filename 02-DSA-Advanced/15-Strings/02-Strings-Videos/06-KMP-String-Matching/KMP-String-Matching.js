/**
 * KMP (Knuth-Morris-Pratt) String Matching
 * Preprocesses pattern with LPS array, then scans text in one pass. Time: O(N + M).
 */

function fillLPS(pat, lps) {
  // Step 1: Get the length of the pattern
  let M = pat.length;
  // Step 2: Initialize the first element of the lps array to 0
  lps[0] = 0;
  // Step 3: Initialize the length of the longest proper prefix which is also a suffix
  let len = 0;
  // Step 4: Initialize the index of the pattern
  let i = 1;
  // Step 5: Loop through the pattern
  while (i < M) {
    // Step 5.1: If the current character of the pattern is equal to the current character of the longest proper prefix which is also a suffix
    if (pat[i] === pat[len]) {
      // Step 5.1.1: Increment the length of the longest proper prefix which is also a suffix
      len++;
      // Step 5.1.2: Store the length of the longest proper prefix which is also a suffix in the lps array
      lps[i] = len;
      // Step 5.1.3: Increment the index of the pattern
      i++;
    } else {
      // Step 5.2: If the current character of the pattern is not equal to the current character of the longest proper prefix which is also a suffix
      if (len !== 0) {
        // Step 5.2.1: Set the length of the longest proper prefix which is also a suffix to the length of the longest proper prefix which is also a suffix of the previous character
        len = lps[len - 1];
      } else {
        // Step 5.2.2: Set the length of the longest proper prefix which is also a suffix to 0
        lps[i] = 0;
        // Step 5.2.3: Increment the index of the pattern
        i++;
      }
    }
  }
}

function KMP(pat, txt) {
  // Step 1: Get the length of the text
  let N = txt.length;
  // Step 2: Get the length of the pattern
  let M = pat.length;

  // Step 3: Create a new array to store the length of the longest proper prefix which is also a suffix
  let lps = new Array(M);
  // Step 4: Fill the lps array
  fillLPS(pat, lps);

  // Step 5: Initialize the index of the text and the pattern
  let i = 0,
    j = 0;

  // Step 6: Loop through the text
  while (i < N) {
    // Step 6.1: If the current character of the pattern is equal to the current character of the text
    if (pat[j] === txt[i]) {
      // Step 6.1.1: Increment the index of the text
      i++;
      // Step 6.1.2: Increment the index of the pattern
      j++;
    }
    // Step 6.2: If the index of the pattern is equal to the length of the pattern
    if (j === M) {
      // Step 6.2.1: Print the index of the text
      console.log(i - j);
      // Step 6.2.2: Set the index of the pattern to the length of the longest proper prefix which is also a suffix of the previous character
      j = lps[j - 1];
    } else if (i < N && pat[j] !== txt[i]) {
      // Step 6.3: If the current character of the pattern is not equal to the current character of the text
      if (j === 0) {
        // Step 6.3.1: Increment the index of the text
        i++;
        // Step 6.3.2: Set the index of the pattern to the length of the longest proper prefix which is also a suffix of the previous character
      } else {
        // Step 6.3.3: Set the index of the pattern to the length of the longest proper prefix which is also a suffix of the previous character
        j = lps[j - 1];
      }
    }
  }
}

// Example from whiteboard: txt = "ababcababaad", pat = "ababa", lps[] = {0, 0, 1, 2, 3}
let txt = "ababcababaad";
let pat = "ababa";
console.log("Pattern found at index(s):");
KMP(pat, txt);
