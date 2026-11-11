function bubbleSortOptimal(arr) {
  let n = arr.length;
  //outer loop for the number of passes
  for (let i = 0; i < n - 1; i++) {
    //inner loop for the number of comparisons
    //swapped is used to check if the array is already sorted
    let swapped = false;
    //n-i-1 is used to reduce the number of comparisons as the last i elements are already sorted
    for (let j = 0; j < n - i - 1; j++) {
      //if the current element is greater than the next element, then swap them
      if (arr[j] > arr[j + 1]) {
        //swap the current element with the next element
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        //set swapped to true to indicate that the array is not sorted
        swapped = true;
      }
    }
    //if the array is already sorted, then break the outer loop
    if (swapped === false) {
      break;
    }
  }
  //return the sorted array
  return arr;
}
let arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(bubbleSortOptimal(arr));
