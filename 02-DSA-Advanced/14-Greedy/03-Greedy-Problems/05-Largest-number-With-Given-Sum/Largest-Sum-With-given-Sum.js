/*
 * ========== PROBLEM: Largest number with given sum ==========
 *
 * Given two integers n (number of digits) and sum (target digit-sum),
 * find the LARGEST number that has exactly n digits and whose digits add up to sum.
 * Digits are 0–9; the number has no leading zeros (so first digit ≥ 1 if n > 1).
 *
 * Input:  n   = number of digits (e.g. 5 → 5-digit number)
 *         sum = required sum of digits (e.g. 12)
 *
 * Output: The largest such number as a string, or "-1" if impossible.
 *
 * Why impossible? Maximum digit-sum for n digits is 9*n (all nines). So if sum > 9*n, return "-1".
 *
 * Approach: Greedy — to maximize the number, put the largest possible digit
 * at the left first (then next largest, etc.). So use as many 9s as possible
 * from the left, then put the remainder in the next place, then zeros.
 */

class Solution {
  largestNumber(n, sum) {
    // If target sum exceeds max possible (all 9s), no valid number exists
    if (sum > 9 * n) {
      return "-1";
    }
    let result = ""; // build the number left-to-right (largest first)
    for (let i = 0; i < n; i++) {
      // one digit per position, left to right
      if (sum >= 9) {
        // we can still afford a 9 at this position
        result += "9";
        sum -= 9;
      } else {
        // remainder: put remaining sum here, rest become 0
        result += sum.toString();
        sum = 0;
      }
    }
    return result;
  }
}

// --- Example: n=5, sum=12 → "93000" (9+3+0+0+0=12, largest possible) ---
let n = 5;
let sum = 12;
console.log(new Solution().largestNumber(n, sum));
