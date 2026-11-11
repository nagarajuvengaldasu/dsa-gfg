/*
 * PROBLEM STATEMENT:
 * Given an array of positive integers, return numbers whose digits are only
 * from {1, 2, 3}. Keep input order. If none match, return [-1].
 *
 * NAIVE APPROACH: Convert each number to string, check every char is '1','2' or '3'.
 *
 * STEP-BY-STEP (arr=[1, 2, 13, 4]):
 * i=0: 1 → "1", all digits valid → push 1
 * i=1: 2 → "2", valid → push 2
 * i=2: 13 → "13", '1' and '3' valid → push 13
 * i=3: 4 → "4", '4' invalid → skip
 * result = [1, 2, 13]
 *
 * EXAMPLE: [4,6,7] → [-1]
 * EXAMPLE: [1,2,13,4] → [1,2,13]
 * Time: O(n*d) | Space: O(k)
 */

function numbersContaining123(arr, n) {
  const result = [];

  for (let i = 0; i < n; i++) {
    const num = arr[i];
    const s = String(num);
    // WHY: Convert to string to access each digit. e.g. 13 → "13", s[0]='1', s[1]='3'.
    let valid = true;

    for (let j = 0; j < s.length; j++) {
      const ch = s[j];
      if (ch !== "1" && ch !== "2" && ch !== "3") {
        valid = false;
        break;
        // EXECUTION: Any digit not 1,2,3 → invalid. e.g. "4" → valid=false, skip.
      }
    }

    if (valid) result.push(num);
    // EXECUTION: All digits 1,2,3 → include. e.g. 13 → valid, push 13.
  }

  return result.length ? result : [-1];
  // WHY: Problem says return [-1] if no number matches.
}

let arr = [1, 2, 13, 4];
let n = arr.length;
console.log(numbersContaining123(arr, n)); // [1, 2, 13]
