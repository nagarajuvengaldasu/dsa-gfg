/*
 * PROBLEM STATEMENT: Check if String is Isogram
 * ---------------------------------------------
 * An isogram is a string in which no letter appears more than once.
 * Given a string (lowercase a-z), return true if it is an isogram,
 * false otherwise.
 *
 * Example:
 *   str = "machine"  →  true  (m,a,c,h,i,n,e - all unique)
 * Example:
 *   str = "geeks"    →  false (e appears twice)
 */

/*
 * LINE-BY-LINE EXECUTION (str="machine"):
 * ---------------------------------------
 * 1. freq = [26 slots, each 0]
 *
 * 2. First loop - count occurrences:
 *    m a c h i n e
 *    12 0 2 7 8 13 4
 *    freq[0]=1, freq[2]=1, freq[4]=1, freq[7]=1, freq[8]=1, freq[12]=1, freq[13]=1
 *
 * 3. Second loop - check for duplicates:
 *    i=0..25: all freq[i] ≤ 1, never enter if block
 *
 * 4. return true
 */
function isIsogram(str) {
  // Step 1: Create an array to count character occurrences
  let freq = new Array(26).fill(0);
  // Step 2: Count occurrences of each character
  for (let i = 0; i < str.length; i++) {
    // Step 2.1: Get character index (0-25 for a-z)
    let index = str.charCodeAt(i) - 97;
    // Step 2.2: Increment count for this character
    freq[index]++;
  }
  // Step 3: Check for duplicates
  for (let i = 0; i < 26; i++) {
    // Step 3.1: If any character appears more than once, it's not an isogram
    if (freq[i] > 1) {
      // Step 3.2: Return false if duplicate found
      return false;
    }
  }
  // Step 4: Return true if no duplicates found
  return true;
}
console.log(isIsogram("machine"));
