/**
 * LONGEST INCREASING SUBSEQUENCE - BINARY SEARCH APPROACH
 * Time: O(nlogn)
 * Space: O(n)
 */
function LIS(arr) {
  // what is tail?
  // tail is an array that stores the last element of the longest increasing subsequence
  // it is used to store the elements of the longest increasing subsequence but in a sorted manner
  let tail = [arr[0]];
  // then iterate through the array
  for (let i = 1; i < arr.length; i++) {
    // then check if the current element is greater than the last element of the tail
    if (arr[i] > tail[tail.length - 1]) {
      // then push the current element to the tail
      tail.push(arr[i]);
    } else {
      // then find the ceil index of the current element
      let c = ceilIndex(tail, 0, tail.length - 1, arr[i]);
      // then replace the element at the ceil index with the current element
      tail[c] = arr[i];
    }
  }
  return tail.length;
}
function ceilIndex(tail, l, h, x) {
  // then iterate while the high is greater than the low
  while (h > l) {
    // then find the middle index
    let m = Math.floor((l + h) / 2);
    // then check if the element at the middle index is greater than or equal to the current element
    if (tail[m] >= x) {
      // then set the high to the middle index
      h = m;
    } else {
      // then set the low to the middle index + 1
      l = m + 1;
    }
  }
  // then return the high
  return h;
}
// then test the function
let arr = [10, 22, 9, 33, 21, 50, 41, 60, 80];
console.log(LIS(arr));
