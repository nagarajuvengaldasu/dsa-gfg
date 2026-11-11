function partition(arr, p) {
  let n = arr.length;
  // swap the pivot with the last element
  [arr[p], arr[n - 1]] = [arr[n - 1], arr[p]];
  let temp = [];
  // add the elements less than or equal to the pivot to the result array
  for (let i = 0; i < n; i++) {
    if (arr[i] <= arr[n - 1]) {
      temp.push(arr[i]);
    }
  }
  // add the elements greater than the pivot to the result array
  for (let i = 0; i < n; i++) {
    if (arr[i] > arr[n - 1]) {
      temp.push(arr[i]);
    }
  }
  // copy the elements from the result array to the original array
  for (let i = 0; i < n; i++) {
    arr[i] = temp[i];
  }
  // return the original array
  return arr;
}
let arr = [3, 8, 6, 12, 10, 7, 5, 2];
let p = 5;
console.log(partition(arr, p));
