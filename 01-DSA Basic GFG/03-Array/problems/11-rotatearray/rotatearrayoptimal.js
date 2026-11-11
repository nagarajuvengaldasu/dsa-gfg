// Optimal solution for rotating array left by d steps
// Time Complexity: O(n) where n is the array length
// Space Complexity: O(1) - in-place rotation

function reverseArray(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

function rotateArrayLeft(arr, d) {
  let n = arr.length;

  // Normalize d in case it's greater than array length
  d = d % n;

  // If d is 0 or equals array length, no rotation needed
  if (d === 0) {
    return arr;
  }
  // Reverse the first d elements
  reverseArray(arr, 0, d - 1);
  // Reverse the remaining elements
  reverseArray(arr, d, n - 1);
  // Reverse the entire array
  reverseArray(arr, 0, n - 1);
  return arr;
}
// Test case
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let d = 3;
console.log("Original array:", arr);
rotateArrayLeft(arr, d);
console.log("Array after left rotation by", d, "steps:", arr);

// test case: d > array length
// Edge case: single element