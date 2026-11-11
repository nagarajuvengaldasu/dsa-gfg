function hoarsePartition(arr, low, high) {
  let pivot = arr[low];
  // i is the index of the smaller element
  let i = low - 1;
  // j is the index of the greater element
  let j = high + 1;
  // iterate through the array and swap the elements less than the pivot with the current element
  while (true) {
    do {
      // increment the index of the smaller element
      i++;
    } while (arr[i] < pivot);
    do {
      // decrement the index of the greater element
      j--;
    } while (arr[j] > pivot);
    // if the index of the smaller element is greater than or equal to the index of the greater element
    if (i >= j) return j;
    // swap the elements
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
let arr = [5, 3, 8, 4, 2, 7, 1, 10];
console.log('unsorted array is : ',arr);
let low = 0;
// high is the index of the last element in the array
let high = arr.length - 1;
// return the index of the pivot
console.log('pivot index is : ',hoarsePartition(arr, low, high));