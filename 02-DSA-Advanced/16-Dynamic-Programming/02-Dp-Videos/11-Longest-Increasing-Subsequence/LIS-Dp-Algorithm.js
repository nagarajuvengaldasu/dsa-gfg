/**
 * LONGEST INCREASING SUBSEQUENCE - DP APPROACH
 * Same recursive logic as memoization, but with bottom-up approach.
 * Time: O(n^2)
 * Space: O(n)
 */
function LIS(arr) {
  let n = arr.length;
  // then create a new array to store the longest increasing subsequence
  let lis = new Array(n);
  // then set the first element to 1
  lis[0] = 1;
  // then iterate through the array
  for (let i = 1; i < n; i++) {
    lis[i] = 1;
    // then iterate through the array
    for (let j = 0; j < i; j++) {
      // then check if the current element is greater than the previous element and update the longest increasing subsequence
      if (arr[j] < arr[i]) {
        // then update the longest increasing subsequence
        lis[i] = Math.max(lis[i], lis[j] + 1);
      }
    }
  }
  // then return the longest increasing subsequence
  return Math.max(...lis);
}
// then test the function
let arr = [10, 22, 9, 33, 21, 50, 41, 60, 80];
console.log(LIS(arr));
