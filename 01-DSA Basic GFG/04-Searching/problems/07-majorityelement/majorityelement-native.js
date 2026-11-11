function majorityelement(arr, n) {
  let res = -1;
  // we traverse the array using two pointers
  for (let i = 0; i < n; i++) {
    let count = 0;
    // we traverse the array using another pointer
    for (let j = 0; j < n; j++) {
      // we check if the current element is equal to the next element
      if (arr[i] === arr[j]) {
        // we increment the count if the current element is equal to the next element
        count++;
      }
    }
    // we check if the count is greater than n/2
    if (count > n / 2) {
      // we return the current element if the count is greater than n/2
      res = arr[i];
      // we break the loop if the count is greater than n/2
      break;
    }
  }
  // we return the result
  return res;
}
let arr = [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2];
let n = arr.length;
console.log(majorityelement(arr, n));
