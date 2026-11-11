function nbykoccurance(arr, k, n) {
  let count = 0;
  // we use a hash map to count the frequency of the elements in the array
  let freq = {};
  // we count the frequency of the elements in the array
  for (let num of arr) {
    // we increment the frequency of the current element by 1
    freq[num] = (freq[num] || 0) + 1;
  }
  for (let key in freq) {
    // we check if the frequency of the current element is greater than n/k
    if (freq[key] > n / k) {
      // if the frequency of the current element is greater than n/k, we increment the result
      count++;
    }
  }
  return count;
}
let arr = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5];
let k = 6;
let n = arr.length;
console.log(nbykoccurance(arr, k, n));
