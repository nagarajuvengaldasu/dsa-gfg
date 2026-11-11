function secondlargest(arr) {
  let n = arr.length;
  // we are initializing the max and secmax to 0
  let max = -Infinity;
  let secmax = -Infinity;
  if (n < 2) return "array should have at least 2 elements";
  // we are iterating through the array to find the second largest element
  for (let i = 0; i < n; i++) {
    // if the current element is greater than the max element, we update the secmax and max
    if (arr[i] > max) {
      // we update the secmax to the previous max
      secmax = max;
      // we update the max to the current element
      max = arr[i];
    }
    // if the current element is greater than the secmax and not equal to the max, we update the secmax
    else if (arr[i] > secmax && arr[i] !== max) {
      // we update the secmax to the current element
      secmax = arr[i];
    }
  }
  if (secmax === -Infinity)
    return "all elements are same no second largest element";
  // we return the second largest element
  return secmax;
}
// we are calling the secondlargest function with the array
// let arr = [-10, -20, -30, -40, -50];
let arr = [1, 2, 3, 4, 5, 6, 7343, 343, 4342, , 232, 121, 223];
console.log(secondlargest(arr));
