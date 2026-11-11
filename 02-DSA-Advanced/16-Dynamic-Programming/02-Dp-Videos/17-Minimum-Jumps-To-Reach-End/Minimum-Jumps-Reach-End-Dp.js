/**
 * DP (Tabulation) approach: minimum jumps to reach the end
 * dp[i] = minimum number of jumps to reach index i from index 0
 *
 * @param {number[]} arr - The input array (arr[i] = max steps from index i)
 * @param {number} n - The length of the array
 * @returns {number} - Minimum jumps to reach the end, or -1 if unreachable
 */
function minJumpsDP(arr, n) {
  if (n <= 1) return 0;

  const dp = new Array(n).fill(Number.POSITIVE_INFINITY);
  dp[0] = 0;

  for (let i = 0; i < n; i++) {
    if (dp[i] === Number.POSITIVE_INFINITY) continue;
    const maxReach = Math.min(i + arr[i], n - 1);
    for (let j = i + 1; j <= maxReach; j++) {
      dp[j] = Math.min(dp[j], dp[i] + 1);
    }
  }

  return dp[n - 1] === Number.POSITIVE_INFINITY ? -1 : dp[n - 1];
}

let arr = [3, 4, 2, 1, 2, 1];
let n = arr.length;
console.log(minJumpsDP(arr, n)); // 2 (0 -> 1 -> 5 or 0 -> 2 -> 5)
