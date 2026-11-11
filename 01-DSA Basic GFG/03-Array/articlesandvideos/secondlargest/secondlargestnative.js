function secondlargest(arr) {
  let n = arr.length;
  // we are checking if the array has at least 2 elements
  if (n < 2) return "array should have at least 2 elements";
  // we are sorting the array in assending order
  arr.sort((a, b) => a - b);
  //we are sort inthe decending order
  // arr.sort(( a , b ) => b - a)
  console.log("sorted array", arr);
  for (let i = n - 1; i >= 0; i--) {
    // we are checking if the current element is not equal to the previous element
    if (arr[i - 1] !== arr[i]) {
      // we are returning the second largest element
      return arr[i - 1];
    }
  }
  return "all elements are same no second largest element";
}
let arr = [11, 2, 45, 23, 554, 3, 6565];
console.log(secondlargest(arr));
