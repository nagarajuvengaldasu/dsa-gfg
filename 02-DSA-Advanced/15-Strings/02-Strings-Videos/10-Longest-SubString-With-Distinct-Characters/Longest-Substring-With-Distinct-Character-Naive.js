/*
 * STEP-BY-STEP EXECUTION (str = "abcabcbb", n = 8):
 * --------------------------------------------------
 * Try every substring str[i..j], check if all distinct, track max length.
 *
 * i=0  j=0: str[0..0]="a", areDistinct → set size 1, res=max(0,1)=1
 *      j=1: str[0..1]="ab", distinct, res=2
 *      j=2: str[0..2]="abc", distinct, res=3
 *      j=3: str[0..3]="abca", not distinct (a repeated), skip
 *      j=4,5,6,7: "abcab"... not distinct
 * i=1  j=1: "b", res=3. j=2: "bc", res=3. j=3: "bca", res=3. j=4: "bcab" not distinct
 * i=2  j=2: "c", res=3. j=3: "ca", res=3. j=4: "cab", res=3. j=5: "cabc" not distinct
 * i=3  j=3: "a", res=3. j=4: "ab", res=3. j=5: "abc", res=3. j=6: "abcb" not distinct
 * ... (remaining i same idea)
 *
 * return res = 3
 */
function longestSubstringWithDistinctCharacters(str) {
  // Step 1: Get the length of the string
  let n = str.length;
  // Step 2: Initialize the result variable
  let res = 0;
  // Step 3: Loop through the string and check for distinct characters
  for (let i = 0; i < n; i++) {
    // Step 3.1: Loop through the string and check for distinct characters
    for (let j = i; j < n; j++) {
      // Step 3.1.1: Check if the characters are distinct
      if (areDistinct(str, i, j)) {
        // Step 3.1.2: Update the result variable
        res = Math.max(res, j - i + 1);
      }
    }
  }
  // Step 4: Return the result variable
  return res;
}
// Step 3: Function to check if the characters are distinct
function areDistinct(s, i, j) {
  // Step 3.1.1: Create a set of the characters in the substring
  let set = new Set(s.slice(i, j + 1).split(""));
  // Step 3.1.2: Return the result variable
  return set.size === j - i + 1;
}
let s = "abcabcbb";
console.log(longestSubstringWithDistinctCharacters(s));
