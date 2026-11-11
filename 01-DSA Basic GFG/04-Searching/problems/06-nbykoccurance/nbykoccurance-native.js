function nbykoccurance(arr, k, n) {
  let res = 0;
  // we traverse the array using two pointers
  for (let i = 0; i < n; i++) {
    let count = 1;
    // we traverse the array using another pointer
    for (let j = 0; j < n; j++) {
      // we count the frequency of the current element
      if (arr[i] === arr[j]) {
        // if the current element is equal to the next element, we increment the count
        count++;
      }
    }
    // we check if the frequency of the current element is greater than n/k
    if (count > n / k) {
      // if the frequency of the current element is greater than n/k, we increment the result
      res++;
      // to avoid counting the same element again
      while (i + 1 < n && arr[i + 1] === arr[i]) {
        i++;
      }
    }
  }
  return res;
}
let arr = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5];
let k = 6;
let n = arr.length;
console.log(nbykoccurance(arr, k, n));
