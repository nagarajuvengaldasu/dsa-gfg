/**
 * Anagram Search - OPTIMAL SOLUTION (Sliding Window + Character Counts)
 * Slide the pattern over the text; optimize anagram check using window sliding:
 * CT = character count for current text window, CP = character count for pattern.
 * Update CT by adding new char and removing left char; compare CT with CP.
 * Time: O(n), space: O(256) for count arrays.
 */

function areSame(CT, CP) {
  // Step 1: Loop through the count arrays and check if all the counts are same
  for (let i = 0; i < 256; i++) {
    // Step 1.1: If any count is not same, return false
    if (CT[i] !== CP[i]) return false;
  }
  return true;
}

function anagramSearch(txt, pat) {
  // Step 1: Get the length of the text
  let n = txt.length;
  // Step 2: Get the length of the pattern
  let m = pat.length;
  // Step 3: Check if the length of the pattern is greater than the length of the text
  if (m > n) return false;

  // Step 4: Create a count array for the text
  let CT = new Array(256).fill(0);
  // Step 5: Create a count array for the pattern
  let CP = new Array(256).fill(0);

  // Step 6: Loop through the text and pattern and increment the counts of the characters
  for (let i = 0; i < m; i++) {
    // Step 6.1: Increment the count of the character in the text
    CT[txt.charCodeAt(i)]++;
    // Step 6.2: Increment the count of the character in the pattern
    CP[pat.charCodeAt(i)]++;
  }

  // Step 7: Loop through the text and check for anagram at every slide
  for (let i = m; i < n; i++) {
    // Step 7.1: Check if the current window is an anagram of the pattern
    if (areSame(CT, CP)) return true;
    // Slide: add txt[i], remove txt[i - m]
    // Step 7.2: Increment the count of the character in the text
    CT[txt.charCodeAt(i)]++;
    // Step 7.3: Decrement the count of the character in the text
    CT[txt.charCodeAt(i - m)]--;
  }
  // Check last window
  if (areSame(CT, CP)) return true;
  return false;
}

// Example 1: txt = "geeksforgeeks", pat = "frog" → true
console.log(anagramSearch("geeksforgeeks", "frog")); // true
