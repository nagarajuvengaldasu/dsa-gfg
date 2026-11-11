function intersectionoftwosortedarray(a, b) {
  // time complexity: O(n*m)
  let n = a.length;
  let m = b.length;
  let res = [];
  //  we are using two nested loops to iterate through the two arrays
  for (let i = 0; i < n; i++) {
    // we are iterating through the first array
    for (let j = 0; j < m; j++) {
      // we are iterating through the second array
      // we are checking if the current element in the first array
      // is equal to the current element in the second array and
      // if it is not equal to the previous element in the first array
      if (a[i] === b[j] && a[i] !== a[i - 1]) {
        // we are pushing the element to the result array
        res.push(a[i]);
        // we are breaking the inner loop
        break;
      }
    }
  }
  // we are returning the result array
  return res;
}
let a = [1, 2, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5, 6, 6, 6, 6];
let b = [2, 2, 3, 3, 4, 4, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8];
// we are calling the function and printing the result
// we are joining the result array with a space
console.log(intersectionoftwosortedarray(a, b).join(" "));
