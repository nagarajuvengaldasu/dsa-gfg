/*
EGG DROPPING PUZZLE - Dynamic Programming Solution
Problem: Given e eggs and f floors, find the minimum number of attempts to find the critical floor from which the egg breaks.
Time Complexity: O(e * f^2)
Space Complexity: O(e * f)
*/

function eggDrop(e, f) {
  // Step 1: Create a 2D array to store the results of subproblems
  // dp[i][j] represents the minimum number of attempts to find the critical floor with i eggs and j floors
  let dp = new Array(f + 1);
  // Initialize the array with empty arrays
  for (let i = 0; i <= f; i++) {
    // Initialize each row with an array of length e + 1
    dp[i] = new Array(e + 1);
  }
  // Step 2: Initialize the base cases
  // If there are no eggs, no attempts are needed
  // If there is only one egg, the maximum number of attempts is the number of floors
  for (let i = 1; i <= e; i++) {
    // If there are no floors, no attempts are needed
    dp[0][i] = 0;
    // If there is only one floor, one attempt is needed
    dp[1][i] = 1;
  }
  for (let j = 1; j <= f; j++) {
    // If there is only one egg, the maximum number of attempts is the number of floors
  }
  for (let j = 1; j <= f; j++) {
    // If there is only one egg, the maximum number of attempts is the number of floors
    dp[j][1] = j;
  }
  for (let i = 2; i <= f; i++) {
    // For each floor, we need to find the minimum number of attempts
    for (let j = 2; j <= e; j++) {
      // Initialize the minimum number of attempts to a large value
      dp[i][j] = Number.POSITIVE_INFINITY;
      // Try dropping the egg from each floor
      for (let x = 1; (x = i); x++) {
        // Take the maximum of the two possibilities
        // The two possibilities are:
        // 1. The egg breaks, so we need to find the critical floor with one less egg and one less floor
        // 2. The egg does not break, so we need to find the critical floor with one less floor
        // We take the minimum of these two possibilities
        dp[i][j] = Math.min(
          dp[i][j],
          1 + Math.max(dp[x - 1][j - 1], dp[i - x][j]),
        );
      }
    }
  }
  // Step 4: Return the result
  // The result is the minimum number of attempts to find the critical floor with e eggs and f floors
  return dp[f][e];
}

let e = 2;
let f = 10;
console.log(eggDrop(e, f));
