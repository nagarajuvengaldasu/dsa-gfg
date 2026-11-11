/*
 * PROBLEM STATEMENT: Smallest Window Containing All Characters
 * -----------------------------------------------------------
 * Given string s and string p, find the smallest contiguous substring of s
 * that contains all characters of p (with same or higher frequency).
 * Return that substring, or "" if no such window exists.
 * Assumes lowercase a-z (indexed by charCode - 97).
 *
 * Example: s = "timetopractice", p = "toc"  →  "toprac" (smallest window with t, o, c)
 */

/*
 * LINE-BY-LINE EXECUTION (s = "timetopractice", p = "toc"):
 * --------------------------------------------------------
 * 1. freq from p: freq[19]=1(t), freq[14]=1(o), freq[2]=1(c). left=0, count=3, minlen=∞.
 *
 * 2. Expand right (sliding window):
 *    right=0..4: include 't','i','m','e','t' → count goes 3→2 (one t). freq decremented.
 *    right=5: 'o' → count=1. right=6..8: 'p','r','a' → count stays 1.
 *    right=9: 'c' → count=0. Valid window [0..9]="timetoprac".
 *
 * 3. While count===0, shrink left and update best:
 *    left=0: windowlen=10, minlen=10, startindex=0. freq['t']++, freq[19]=0. left=1.
 *    left=1: minlen=9, startindex=1. freq['i']++. left=2.
 *    left=2: minlen=8, startindex=2. left=3.
 *    left=3: minlen=7, startindex=3. left=4.
 *    left=4: minlen=6, startindex=4. freq['t']++, freq[19]=1 → count=1. left=5. Exit while.
 *
 * 4. right=10..12: no new valid window (no second 'o'). minlen stays 6, startindex=4.
 *
 * 5. return s.substring(4, 4+6) = "toprac"
 */
class Solution {
  smallestWindow(s, p) {
    // Step 1: Check if p is longer than s
    if (p.length > s.length) return "";

    // Step 2: Create a frequency array for p
    let freq = new Array(26).fill(0);

    // Step 3: Fill the frequency array for p
    for (let ch of p) {
      // Step 3.1: Convert the character to its index in the frequency array
      freq[ch.charCodeAt(0) - 97]++;
    }

    // Step 4: Initialize the left pointer
    let left = 0;
    // Step 5: Initialize the count
    let count = p.length;
    // Step 6: Initialize the minimum length
    let minlen = Infinity;
    // Step 7: Initialize the start index
    let startindex = 0;

    for (let right = 0; right < s.length; right++) {
      // Step 8: Check if the character is in the frequency array
      if (freq[s.charCodeAt(right) - 97] > 0) {
        count--;
      }
      // Step 9: Decrement the frequency of the character
      freq[s.charCodeAt(right) - 97]--;
      while (count === 0) {
        // Step 10: Calculate the window length
        let windowlen = right - left + 1;
        // Step 11: Update the minimum length
        if (windowlen < minlen) {
          // Step 11.1: Update the minimum length
          minlen = windowlen;
          // Step 12: Update the start index
          startindex = left;
        }
        // Step 13: Increment the frequency of the character
        freq[s.charCodeAt(left) - 97]++;
        // Step 14: Check if the frequency of the character is greater than 0
        if (freq[s.charCodeAt(left) - 97] > 0) {
          count++;
        }
        // Step 15: Increment the left pointer
        left++;
      }
    }
    // Step 16: Return the result
    return minlen === Infinity
      ? ""
      : s.substring(startindex, startindex + minlen);
  }
}

let s = "timetopractice";
let p = "toc";
console.log(new Solution().smallestWindow(s, p));
