/*
 * ========== PROBLEM: Sum of numbers in string ==========
 *
 * Given a string containing digits and other characters, find the sum of all
 * numbers that appear as contiguous digit sequences. (e.g. "123abc456" → 123+456=579)
 *
 * Input:  s = string (e.g. "123abc456xyz")
 * Output: Sum of all embedded numbers.
 */

class Solution {
  findsum(s) {
    let sum = 0;                              // total sum of all numbers found
    let num = 0;                              // current number being built (digits so far)
    for (let i = 0; i < s.length; i++) {
      if (s[i] >= "0" && s[i] <= "9") {
        num = num * 10 + (s[i] - "0");       // digit: extend current number (e.g. 12 → 123)
      } else {
        sum += num;                           // non-digit: add current number to sum
        num = 0;                              // reset for next number
      }
    }
    sum += num;                               // add last number (if string ends with digits)
    return sum;
  }
}

// --- Example: "123abc456xyz" → 123 + 456 = 579 ---
let s = "123abc456xyz";
console.log(new Solution().findsum(s));
