
// what is this approach?
// this approach is based on the fact that a sorted rotated array is a array that is sorted and then rotated
// so we can find the minimum element and then check if the left side of the minimum element is sorted and the right side of the minimum element is sorted
// if both are sorted then the array is sorted and rotated
// if not then the array is not sorted and rotated
function arraysortedrotated(arr) {
  let n = arr.length;
  // Edge cases
  if (n <= 1) return false; // Single element or empty array
  let min = arr[0];
  let index = 0;
  // Find minimum element and its index
  for (let i = 0; i < n; i++) {
    if (arr[i] < min) {
      min = arr[i];
      index = i;
    }
  }
  // Check left side of minimum (should be increasing)
  if (index > 0) {
    for (let i = 0; i < index - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        return false;
      }
    }
  }
  // Check right side of minimum (should be increasing)
  for (let i = index; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  // Check if the array is rotated and sorted:
  // For a rotated sorted array, there should be exactly one place where we see a decrease
  // That decrease should be from last element to first element
  if (index === 0) {
    // If min is at index 0, the array is already sorted, not rotated
    return false;
  }
  // For a rotated sorted array: arr[n-1] < arr[0]
  // This means the last element should be less than the first element
  if (arr[n - 1] >= arr[0]) {
    return false;
  }

  return true;
}
let arr = [5];
console.log(arraysortedrotated(arr)); // true - rotated sorted array
