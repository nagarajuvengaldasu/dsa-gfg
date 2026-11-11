/**
 * Function to find the maximum value that can be obtained using the given weights and values
 * @param {number[]} wt - The weights of the items
 * @param {number[]} val - The values of the items
 * @param {number} w - The maximum weight capacity of the knapsack
 * @param {number} n - The number of items
 * @returns {number} - The maximum value that can be obtained
 */
// Base case: if the number of items is 0 or the maximum weight capacity is 0, return 0
function knapsack(wt, val, w, n) {
  // Step 1: Base case: if the number of items is 0 or the maximum weight capacity is 0, return 0
  if (n == 0 || w === 0) {
    return 0;
  }
  // Step 2: If the weight of the current item is greater than the maximum weight capacity, return the maximum value that can be obtained without the current item
  if (wt[n - 1] > w) {
    return Math.max(
      // Step 2a: Return the maximum value that can be obtained with the current item
      val[n - 1] + knapsack(wt, val, w - wt[n - 1], n - 1),
      // Step 2b: Return the maximum value that can be obtained without the current item
      knapsack(wt, val, w, n - 1),
    );
  }
  // Step 3: Return the maximum value that can be obtained with the current item
  // Step 3a: Return the maximum value that can be obtained without the current item
  return knapsack(wt, val, w, n - 1);
}

let wt = [10, 20, 30];
let val = [60, 100, 120];
let w = 50;
let n = wt.length;
console.log(knapsack(wt, val, w, n));
