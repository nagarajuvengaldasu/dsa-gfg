/*
 * ========== PROBLEM STATEMENT ==========
 * K LARGEST ELEMENTS
 * Given an array and integer K, return the K largest elements in any order.
 *
 * Example: arr = [5, 15, 10, 20, 8], K = 2 → [20, 15]
 *
 * Approach (Naive):
 * 1) Sort the array in decreasing order.
 * 2) Return first K elements.
 * Time: O(n log n)
 */

function kLargestNaive(arr, k) {
  let sorted = [...arr].sort((a, b) => b - a);  // Step 1: Copy & sort descending
  return sorted.slice(0, k);                     // Step 2: Return first K
}

// Execution: arr=[5,15,10,20,8], k=2
// sorted = [20,15,10,8,5], slice(0,2) → [20, 15]
let arr1 = [5, 15, 10, 20, 8];
let k1 = 2;
console.log(kLargestNaive(arr1, k1));  // [20, 15]

let arr2 = [8, 6, 4, 10, 9];
let k2 = 3;
console.log(kLargestNaive(arr2, k2));  // [10, 9, 8]

let arr3 = [30, 40, 20];
let k3 = 1;
console.log(kLargestNaive(arr3, k3));  // [40]
