function partition(arr, p) {
  let n = arr.length;
  let res = [];
  let count = 0;
  // count the number of elements less than the pivot
  for (let i = 0; i < n; i++) {
    if (arr[i] < arr[p]) {
      count++;
    }
  }
  // add the elements less than the pivot to the result array
  for (let i = 0; i < n; i++) {
    if (arr[i] < arr[p]) {
      res.push(arr[i]);
    }
  }
  res[count] = arr[p];
  // add the elements greater than the pivot to the result array
  for (let i = 0; i < n; i++) {
    if (arr[i] > arr[p]) {
      res.push(arr[i]);
    }
  }
  return res;
}
let arr = [3, 8, 6, 12, 10, 7, 5, 2];
let p = 5;
console.log(partition(arr, p));
