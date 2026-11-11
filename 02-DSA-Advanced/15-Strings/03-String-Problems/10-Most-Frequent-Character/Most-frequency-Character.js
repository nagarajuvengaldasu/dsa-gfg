/*
 * PROBLEM STATEMENT: Most Frequent Character
 * ------------------------------------------
 * Given a string str (lowercase letters a-z), find and return the character
 * that appears most frequently. If multiple characters have the same maximum
 * frequency, return the one that comes first alphabetically.
 *
 * Example:
 *   str = "geeksforgeeks"  →  'e' (appears 4 times: e,e,e,e)
 *
 * Example:
 *   str = "test"  →  't' (t appears 2 times, e and s appear 1 each)
 */

/*
 * LINE-BY-LINE EXECUTION (str="geeksforgeeks"):
 * ---------------------------------------------
 * 1. freq = [26 slots, each -1]
 *
 * 2. First loop - count occurrences (freq[c]++ for each char):
 *    g e e k s f o r g e  e  k  s
 *    6 4 4 10 18 5 14 17 6 4  4  10 18
 *    After loop: freq[4]=3(e), freq[5]=0(f), freq[6]=1(g), freq[10]=1(k),
 *                freq[14]=0(o), freq[17]=0(r), freq[18]=1(s)
 *    (rest remain -1)
 *
 * 3. maxfreq = Math.max(...freq) = 3
 *
 * 4. Second loop - find first char with freq === maxfreq:
 *    i=0..3: freq=-1, skip
 *    i=4: freq[4]=3 === maxfreq → return String.fromCharCode(101) = 'e'
 *
 * 5. return 'e'
 */
function mostFrequentCharacter(str) {
  // Step 1: Initialize frequency array with 26 slots, each -1
  let freq = new Array(26).fill(-1);
  // Step 2: Count occurrences of each character
  for (let i = 0; i < str.length; i++) {
    // Step 3: Get character index (0-25 for a-z)
    let charindex = str.charCodeAt(i) - 97;
    // Step 4: Increment frequency count for this character
    freq[charindex]++;
  }
  // Step 5: Find maximum frequency
  let maxfreq = Math.max(...freq);
  // Step 6: Find first character with maximum frequency
  for (let i = 0; i < 26; i++) {
    if (freq[i] === maxfreq) {
      // Step 7: Return character as string
      return String.fromCharCode(i + 97);
    }
  }
  // Step 8: Return special character if no character found
  return "$";
}
console.log(mostFrequentCharacter("geeksforgeeks"));
