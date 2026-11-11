function majorityelement(arr, n) {
  let freq = {};
  // we count the frequency of the elements in the array
  for (let num of arr) {
    // we increment the frequency of the current element by 1
    freq[num] = (freq[num] || 0) + 1;
  }
  // we traverse the frequency map
  for (let key in freq) {
    // we check if the frequency of the current element is greater than n/2
    if (freq[key] > n / 2) {
      // we return the current element if the frequency is greater than n/2
      // why we qare using number(key) because the key is a string and we need to return a number
      return Number(key);
    }
  }
  // we return -1 if no majority element is found
  return -1;
}
let arr = [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2];
let n = arr.length;
console.log(majorityelement(arr, n));
