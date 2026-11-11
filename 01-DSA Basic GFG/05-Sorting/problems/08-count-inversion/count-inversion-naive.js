function countInversion(arr) {
  let n = arr.length;
  let count = 0;
  // naive approach
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      // count the number of pairs (i, j) such that i < j and arr[i] > arr[j]
      if (arr[i] > arr[j]) {
        count++;
      }
    }
  }
  return count;
}
let arr = [2, 4, 1, 3];
console.log(countInversion(arr));
