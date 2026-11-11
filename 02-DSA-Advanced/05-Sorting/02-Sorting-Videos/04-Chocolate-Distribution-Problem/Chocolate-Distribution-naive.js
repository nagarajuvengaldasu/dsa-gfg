// ========== STEP-BY-STEP: Chocolate Distribution (NAIVE) ==========
// Goal: Distribute m packets to m students so that (max - min) chocolates given is minimum.
// Naive idea: Try EVERY way to choose m packets. Use recursion to pick m indices;
//             for each combination compute (max - min), take the minimum. No sorting.
//             Time O(C(n,m)). Uses m: we always pick exactly m packets.

function chocolateDistribution(arr, m) {
  let n = arr.length;
  let res = Infinity;  // Step 1: best diff so far (start with Infinity)

  // Helper: step-by-step for each combination
  // Step A: If we have chosen m indices, compute (max - min) for those packets and update res.
  // Step B: For each possible next index i from start to n-1: add i, recurse with (i+1, count+1), then backtrack (pop).
  function tryCombination(start, count, chosen) {
    if (count === m) {
      let minVal = Math.min(...chosen.map((idx) => arr[idx]));
      let maxVal = Math.max(...chosen.map((idx) => arr[idx]));
      res = Math.min(res, maxVal - minVal);
      return;
    }
    for (let i = start; i < n; i++) {
      chosen.push(i);
      tryCombination(i + 1, count + 1, chosen);
      chosen.pop();
    }
  }

  tryCombination(0, 0, []);  // Step 2: try all C(n,m) combinations
  return res;
}

// ---------- Example run: arr = [7, 3, 2, 4, 9, 12, 56], m = 3 ----------
// Tries all C(7,3)=35 combinations. Best is indices (1,2,3) → packets 3,2,4 → diff 2. Result: 2

let arr = [7, 3, 2, 4, 9, 12, 56];
let m = 3;
console.log(chocolateDistribution(arr, m));
