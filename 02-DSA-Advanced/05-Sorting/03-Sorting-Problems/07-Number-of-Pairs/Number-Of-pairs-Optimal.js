// ========== Number of Pairs (OPTIMAL) ==========
// Count pairs (x, y) such that x ∈ arr, y ∈ brr and x^y > y^x.
// Idea (classic GFG solution):
// 1) Sort brr.
// 2) Pre‑count how many times 0,1,2,3,4 appear in brr (special cases).
// 3) For each x in arr, use binary search + these counts to compute how many y satisfy x^y > y^x
//    without computing big powers directly. Overall time: O((n + m) log m).

function upperBound(arr, x) {
  // First index > x in sorted arr
  let l = 0;
  let r = arr.length;
  while (l < r) {
    const mid = (l + r) >> 1;
    if (arr[mid] <= x) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  return l;
}

function countForX(x, brr, cntY) {
  const m = brr.length;

  if (x === 0) return 0; // 0^y is never > y^0 for y > 0
  if (x === 1) return 0; // only y = 0 would work; here y ≥ 1 by constraints

  // All y > x (except special cases) will satisfy x^y > y^x
  let idx = upperBound(brr, x);
  let res = m - idx;

  // For any x > 1, x^1 > 1^x, so all y = 1 always contribute
  res += cntY[1];

  // Special cases:
  if (x === 2) {
    // (2,3) and (2,4) are overcounted above; they actually violate x^y > y^x
    res -= cntY[3] + cntY[4];
  }

  if (x === 3) {
    // (3,2) is valid (3^2 > 2^3) but y=2 < x, so it wasn't counted in y > x
    res += cntY[2];
  }

  return res;
}

function numberofpairs(arr, brr) {
  const n = arr.length;
  const m = brr.length;

  // Step 1: sort brr
  brr.sort((a, b) => a - b);

  // Step 2: pre‑count small y values (0..4)
  const cntY = new Array(5).fill(0);
  for (let i = 0; i < m; i++) {
    if (brr[i] < 5) cntY[brr[i]]++;
  }

  // Step 3: for each x in arr, accumulate valid y's
  let totalPairs = 0;
  for (let i = 0; i < n; i++) {
    totalPairs += countForX(arr[i], brr, cntY);
  }

  return totalPairs;
}

// Quick sanity check with the examples
let arr = [2, 1, 6];
let brr = [1, 5];
console.log(numberofpairs(arr, brr)); // expected 3
