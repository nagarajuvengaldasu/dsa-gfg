/**
 * Function to find the minimum jumps to reach the end of the array
 * @param {number[]} arr - The input array
 * @param {number} n - The length of the array
 * @returns {number} - The minimum jumps to reach the end of the array
 */

function minjumps(arr, n) {
  // Base case: if the array has only one element, no jumps are needed
  if (n === 1) {
    return 0;
  }
  // Initialize the result to positive infinity
  let res = Number.POSITIVE_INFINITY;
  // Iterate through the array
  for (let i = 0; i <= n - 2; i++) {
    // Iterate through the array
    if (i + arr[i] >= n - 1) {
      // If the current index + the value at the current index is greater than or equal to the last index,
      // then we can reach the end of the array from the current index
      // So, we need to find the minimum jumps to reach the end of the array from the current index
      let sub_res = minjumps(arr, i + 1);
      // If the sub_res is not positive infinity, then we can reach the end of the array from the current index
      // So, we need to find the minimum jumps to reach the end of the array from the current index
      if (sub_res !== Number.POSITIVE_INFINITY) {
        // Update the result to the minimum of the current result and the result of the sub_res + 1
        res = Math.min(res, sub_res + 1);
      }
    }
  }
  // Return the result
  return res;
}

let arr = [3, 4, 2, 1, 2, 1];
let n = arr.length;
console.log(minjumps(arr, n));
