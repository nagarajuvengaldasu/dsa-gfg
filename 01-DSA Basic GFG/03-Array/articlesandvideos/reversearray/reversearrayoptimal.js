// we are using two pointer approach to reverse the array
function reversearray(arr) {
  // we are getting the length of the array
  let n = arr.length;
  // we are iterating through the array till the middle of the array

  for (let i = 0; i < Math.floor(n / 2); i++) {
    // we are swapping the elements at the i and n-i-1 index
    [arr[i], arr[n - i - 1]] = [arr[n - i - 1], arr[i]];
  }
  // we are returning the reversed array
  return arr;
}
// we are calling the reversearray function with the array
let arr = [11, 112, 143, 44, 25];
console.log(reversearray(arr));
