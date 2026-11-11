/**
 * Maximize Toys Problem - Using Sorting Approach
 *
 * Problem: Given an array of toy costs and budget K,
 * find maximum number of toys you can buy.
 *
 * Example:
 * Input: arr = [1, 12, 5, 111, 200, 1000, 10], K = 50
 * Output: 4
 * Explanation: Buy toys costing 1, 12, 5, 10 (total = 28 <= 50)
 *
 * ====================================================================
 * APPROACH 1: SORTING (Greedy Algorithm)
 * ====================================================================
 *
 * IDEA:
 * To maximize the number of toys, we should buy the CHEAPEST toys first.
 * This is a classic greedy problem.
 *
 * ALGORITHM:
 * Step 1: Sort the array in ascending order (cheapest to most expensive)
 * Step 2: Iterate through sorted array
 * Step 3: Buy toys one by one until we run out of money
 * Step 4: Count how many toys we bought
 *
 * TIME COMPLEXITY: O(n log n) - due to sorting
 * SPACE COMPLEXITY: O(1) - no extra space needed
 *
 * WHY THIS WORKS?
 * - If we buy cheapest toys first, we maximize the count
 * - If we buy expensive toys first, we might not be able to buy many
 * - Greedy choice: Always pick the cheapest available toy
 */

function maximizeToysSorting(arr, K) {
  // Step 1: Sort the array in ascending order
  // This arranges toys from cheapest to most expensive
  arr.sort((a, b) => a - b);

  // Step 2: Initialize variables
  let count = 0; // Number of toys bought
  let sum = 0; // Total money spent

  // Step 3: Iterate through sorted array
  for (let i = 0; i < arr.length; i++) {
    // Step 4: Check if we can afford this toy
    if (sum + arr[i] <= K) {
      // Step 5: Buy the toy
      sum += arr[i];
      count++;
    }
  }
  // Step 7: Return the count of toys bought
  return count;
}

/**
 * Step-by-step execution with example:
 *
 * Input: arr = [1, 12, 5, 111, 200, 1000, 10], K = 50
 *
 * Step 1: Sort array
 *   Before: [1, 12, 5, 111, 200, 1000, 10]
 *   After:  [1, 5, 10, 12, 111, 200, 1000]
 *
 * Step 2: Initialize
 *   count = 0, totalCost = 0
 *
 * Step 3: Iterate through sorted array
 *
 *   i=0: arr[0] = 1
 *     - sum (0) + 1 = 1 <= 50? Yes
 *     - Buy: sum = 1, count = 1
 *
 *   i=1: arr[1] = 5
 *     - sum (1) + 5 = 6 <= 50? Yes
 *     - Buy: sum = 6, count = 2
 *
 *   i=2: arr[2] = 10
 *     - sum (6) + 10 = 16 <= 50? Yes
 *     - Buy: sum = 16, count = 3
 *
 *   i=3: arr[3] = 12
 *     - sum (16) + 12 = 28 <= 50? Yes
 *     - Buy: sum = 28, count = 4
 *
 *   i=4: arr[4] = 111
 *     - sum (28) + 111 = 139 <= 50? No
 *     - Break (can't afford more)
 *
 * Result: count = 4
 * Toys bought: 1, 5, 10, 12 (total cost = 28)
 */

// Test cases
console.log("=== Approach 1: Sorting Method ===");

// Example 1: From problem statement
let arr1 = [1, 12, 5, 111, 200, 1000, 10];
let K1 = 28;
console.log("Input array:", arr1);
console.log("Budget K:", K1);
console.log("Maximum toys:", maximizeToysSorting([...arr1], K1));
console.log("Explanation: Buy toys costing 1, 5, 10, 12 (total = 28)");
