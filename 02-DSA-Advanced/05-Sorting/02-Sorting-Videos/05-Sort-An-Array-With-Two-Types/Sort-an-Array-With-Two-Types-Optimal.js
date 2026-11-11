// ========== STEP-BY-STEP: Sort Array with Two Types (OPTIMAL – Hoare-style) ==========
// Goal: Segregate negatives first, non‑negatives after, in-place. No extra array.
// Idea: Two pointers i (from left), j (from right). Move i right while arr[i]<0; move j left while arr[j]≥0.
//       When both stop, swap arr[i] and arr[j]. Repeat until i >= j. Time O(n), Space O(1).

function segPositiveNegative(arr) {
  let i = -1;           // Step 1: i will scan from left; start before index 0
  let j = arr.length;   // Step 1: j will scan from right; start after last index
  while (true) {
    do { i++; } while (arr[i] < 0);   // Step 2: advance i to first element that is not negative (≥0)
    do { j--; } while (arr[j] >= 0);  // Step 3: decrease j to first element that is negative
    if (i >= j) break;                // Step 4: if pointers crossed, we are done
    [arr[i], arr[j]] = [arr[j], arr[i]];  // Step 5: swap so negative goes left, non‑negative goes right
  }
  return arr;
}

// ---------- Example run: arr = [-12, 2, 4, 6, -8, 18, -10, 15] ----------
// i stops at 2 (arr[1]=2≥0), j stops at -8 (arr[4]=-8<0) → swap → [-12,-8,4,6,2,18,-10,15]
// i stops at 4 (arr[2]=4), j stops at -10 (arr[6]=-10) → swap → [-12,-8,-10,6,2,18,4,15]
// i advances to 6 (arr[3]=6), j decreases to 18 (arr[5]=18) → i(3) < j(5), swap → [-12,-8,-10,18,2,6,4,15]
// Next i stops at 18 (index 3), j stops at 2 (index 4) → i=3, j=4, swap → [-12,-8,-10,2,18,6,4,15]
// i goes to 18 (index 4), j goes to 2 (index 3) → i(4) >= j(3) → break. Result: negatives left, positives right.
let arr = [-12, 2, 4, 6, -8, 18, -10, 15];
console.log(segPositiveNegative(arr));