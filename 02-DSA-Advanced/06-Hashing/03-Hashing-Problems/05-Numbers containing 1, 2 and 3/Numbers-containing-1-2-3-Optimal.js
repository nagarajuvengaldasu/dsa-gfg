/*
 * PROBLEM STATEMENT:
 * Given an array of positive integers, return numbers whose digits are only
 * from {1, 2, 3}. Keep input order. If none match, return [-1].
 *
 * OPTIMAL APPROACH: Use digit arithmetic (x%10, x/10) instead of string conversion.
 *
 * STEP-BY-STEP (arr=[1, 2, 13, 4]):
 * i=0: 1 → while: d=1 valid, x=0 → push 1
 * i=1: 2 → d=2 valid → push 2
 * i=2: 13 → d=3 valid, x=1; d=1 valid, x=0 → push 13
 * i=3: 4 → d=4 invalid → skip
 * result = [1, 2, 13]
 *
 * EXAMPLE: [4,6,7] → [-1]
 * EXAMPLE: [1,2,13,4] → [1,2,13]
 * Time: O(n*d) | Space: O(k)
 */

function numbersContaining123Optimal(arr, n) {
  const result = [];

  for (let i = 0; i < n; i++) {
    let x = arr[i];
    let valid = true;

    while (x > 0) {
      const d = x % 10;
      // EXECUTION: Extract last digit. e.g. 13 → d=3, then x=1 → d=1.
      if (d !== 1 && d !== 2 && d !== 3) {
        valid = false;
        break;
      }
      x = Math.floor(x / 10);
      // WHY: Remove last digit. 13→1, 1→0. No string conversion needed.
    }

    if (valid) result.push(arr[i]);
  }

  return result.length ? result : [-1];
}

let arr = [1, 2, 13, 4];
let n = arr.length;
console.log(numbersContaining123Optimal(arr, n));

// Quick manual tests (uncomment to run)
// console.log(numbersContaining123Optimal([4, 6, 7], 3));        // [-1]
// console.log(numbersContaining123Optimal([1, 2, 13, 4], 4));    // [1,2,13]
