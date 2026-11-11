/**
 * Longest Chain of Pairs (Variation of LIS)
 * Pair (a,b): a < b. Two pairs (a,b) and (c,d) chain if b < c.
 *
 * Algorithm:
 * 1. Sort pairs by first value (ascending).
 * 2. Find longest "chain" (LIS-style): dp[i] = longest chain ending at pair i.
 *    Pair j can precede pair i iff arr[j].second < arr[i].first.
 */

function longestChainOfPairs(pairs) {
  if (pairs.length === 0) return 0;

  let sorted = [...pairs].sort((a, b) => a[0] - b[0]);
  let n = sorted.length;
  let dp = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (sorted[j][1] < sorted[i][0]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp);
}

// Example 1: {(5,24), (39,60), (15,28), (27,40), (50,90)} → sort → chain (5,24)→(27,40)→(50,90) = 3
console.log(
  longestChainOfPairs([
    [5, 24],
    [39, 60],
    [15, 28],
    [27, 40],
    [50, 90],
  ])
); // 3

// Example 2: {(6,8), (3,4)} → sort (3,4),(6,8) → chain (3,4)→(6,8) = 2
console.log(
  longestChainOfPairs([
    [6, 8],
    [3, 4],
  ])
); // 2
