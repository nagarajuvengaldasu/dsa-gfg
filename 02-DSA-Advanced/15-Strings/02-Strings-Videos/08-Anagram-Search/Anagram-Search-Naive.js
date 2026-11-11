/**
 * Anagram Search - NAIVE SOLUTION
 * Slide the pattern over the text one by one and check for anagram at every slide.
 * Time: O((n - m + 1) * m) for anagram check per window; with count-based areAnagram: O((n - m + 1) * m).
 */

function areAnagram(s1, s2) {
  // Step 1: Check if the lengths of the strings are different
  if (s1.length !== s2.length) return false;
  // Step 2: Create a count array of size 256
  let count = new Array(256).fill(0);
  // Step 3: Loop through the strings and increment the count of the characters
  for (let i = 0; i < s1.length; i++) {
    // Step 3.1: Increment the count of the character in the first string
    count[s1.charCodeAt(i)]++;
    // Step 3.2: Decrement the count of the character in the second string
    count[s2.charCodeAt(i)]--;
  }
  // Step 4: Loop through the count array and check if all the counts are zero
  for (let i = 0; i < 256; i++) {
    // Step 4.1: If any count is not zero, return false
    if (count[i] !== 0) return false;
  }
  return true;
}

function anagramSearchNaive(txt, pat) {
  // Step 1: Get the length of the text
  let n = txt.length;
  // Step 2: Get the length of the pattern
  let m = pat.length;
  if (m > n) return false;

  // Step 3: Loop through the text and check for anagram at every slide
  for (let i = 0; i <= n - m; i++) {
    // Step 3.1: Get the window of the text
    let window = txt.substring(i, i + m);
    // Step 3.2: Check if the window is an anagram of the pattern
    if (areAnagram(window, pat)) return true;
  }
  return false;
}

// Example 1: txt = "geeksforgeeks", pat = "frog" → Yes ("forg" at i=5 is anagram)
console.log(anagramSearchNaive("geeksforgeeks", "frog")); // true

// Example 2: txt = "geeksforgeeks", pat = "rseek" → No
console.log(anagramSearchNaive("geeksforgeeks", "rseek")); // false
