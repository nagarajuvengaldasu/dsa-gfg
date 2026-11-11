/**
 * Egg Dropping Puzzle
 * Problem: Given n eggs and k floors, find the minimum number of attempts to find the critical floor from which the egg will break.
 *
 * Time Complexity: O(n*k*log k) with binary search over floors
 * Space Complexity: O(n*k)
 */

// Define a class that will hold our egg-drop solution method
class Solution {
  // Method: eggDrop(n, k) — n = number of eggs, k = number of floors
  eggDrop(n, k) {
    // Create outer array: one row per egg count (0 to n), so length n+1
    const dp = new Array(n + 1);
    // For each egg count i (0 to n), create a row of (k+1) cells for floors 0..k, filled with 0
    for (let i = 0; i <= n; i++) {
      dp[i] = new Array(k + 1).fill(0);
    }
    // Base case: with any number of eggs, 0 floors need 0 attempts; 1 floor needs 1 attempt
    for (let i = 1; i <= n; i++) {
      dp[i][0] = 0; // 0 floors → 0 attempts
      dp[i][1] = 1; // 1 floor → 1 attempt (drop from that floor)
    }
    // Base case: with 1 egg, we must try floors 1 to j in worst case → j attempts for j floors
    for (let j = 1; j <= k; j++) {
      dp[1][j] = j;
    }
    // Fill dp[i][j] for i eggs and j floors (i>=2, j>=2)
    for (let i = 2; i <= n; i++) {
      for (let j = 2; j <= k; j++) {
        // Start with worst-case value; we will take minimum over all choices of first drop floor x
        dp[i][j] = Infinity;
        // Binary search over floor x (1 to j): find best floor to drop from (optimization instead of trying every x)
        let low = 1;   // lowest floor we consider dropping from
        let high = j;  // highest floor we consider dropping from
        while (low <= high) {
          let mid = Math.floor((low + high) / 2);           // try dropping from floor "mid"
          const eggBreak = dp[i - 1][mid - 1];             // if egg breaks: need (i-1) eggs for (mid-1) floors below
          const notbreak = dp[i][j - mid];                 // if egg survives: need i eggs for (j-mid) floors above
          const res = 1 + Math.max(eggBreak, notbreak);     // this drop + worst of the two outcomes
          dp[i][j] = Math.min(dp[i][j], res);              // keep the best (minimum) attempts so far
          if (eggBreak < notbreak) {
            low = mid + 1;  // notbreak is worse → try higher floor so "above" shrinks, "below" grows
          } else {
            high = mid - 1; // eggBreak is worse → try lower floor so "below" shrinks, "above" grows
          }
        }
      }
    }
    // Answer: minimum attempts for n eggs and k floors
    return dp[n][k];
  }
}

// Create an instance of Solution to call the method
let solution = new Solution();
// n = number of eggs, k = number of floors
let n = 2;
let k = 10;
// Print the minimum number of attempts for 2 eggs and 10 floors
console.log(solution.eggDrop(n, k));
