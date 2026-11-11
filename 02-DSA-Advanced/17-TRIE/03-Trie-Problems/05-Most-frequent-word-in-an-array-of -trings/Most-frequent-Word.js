/**
 * PROBLEM STATEMENT: Most Frequent Word in an Array of Strings
 * ------------------------------------------------------------
 * Given an array of strings and its length n, find the word that appears the most times.
 * If two words have the same maximum frequency, return the one that appears first in the array
 * (smaller first occurrence index).
 *
 * Input (I/p): arr — array of strings; n — length of arr
 * Output (O/p): The most frequent word (tie-break: first occurrence wins).
 *
 * Example: ["apple", "banana", "apple", "orange", "banana", "apple"] → "apple" (count 3)
 * Time: O(n), Space: O(n)
 */

class Solution {
  mostfrequentword(arr, n) {
    const frequency = new Map();           // word -> count of how many times it appears
    const firstoccurence = new Map();      // word -> index of its first occurrence
    for (let i = 0; i < n; i++) {
      const word = arr[i];                 // current word at index i
      frequency.set(word, (frequency.get(word) || 0) + 1);  // increment count for this word
      if (!firstoccurence.has(word)) {
        firstoccurence.set(word, i);       // record first time we see this word
      }
    }
    let maxfreq = 0;                       // highest frequency seen so far
    let result = "";                      // word that (so far) is the answer

    for (let i = 0; i < n; i++) {
      const word = arr[i];
      const freq = frequency.get(word);   // total count of this word
      if (freq > maxfreq) {
        maxfreq = freq;                   // new maximum → this word is the new result
        result = word;
      } else if (freq === maxfreq) {
        const firstocc = firstoccurence.get(word);       // first index of current word
        const secondocc = firstoccurence.get(result);    // first index of current result
        if (firstocc < secondocc) {
          result = word;                  // tie: prefer the word that appeared first
        }
      }
    }
    return result;
  }
}

let sol = new Solution();
let arr = ["apple", "banana", "apple", "orange", "banana", "apple"];
let n = arr.length;
console.log(sol.mostfrequentword(arr, n));  // "apple"
