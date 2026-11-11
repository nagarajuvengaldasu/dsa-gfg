function mergeThreeSortedArrays(a, b, c) {
  // merge the first two arrays and store the result in d
  let d = merge(a, b);
  // merge the result with the third array and store the result in e
  let e = merge(d, c);
  return e;
}
// merge two sorted arrays
function merge(a, b) {
  // get the length of the first array
  let n = a.length;
  // get the length of the second array
  let m = b.length;
  // create a result array
  let res = [];
  // create two pointers
  let i = 0;  
  let j = 0;
  // while the pointers are less than the length of the arrays
  while (i < n && j < m) {
    // if the current element of the first array is less 
    // than the current element of the second array
    if (a[i] <= b[j]) {
      res.push(a[i]);
      i++;
    } 
    // if the current element of the first array is greater 
    // than the current element of the second array
    else {
      res.push(b[j]);
      j++;
    }
  }
  // while the pointer of the first array is less 
  // than the length of the array
  while (i < n) {
    // add the current element of the first array to the result array
    res.push(a[i]);
    i++;
  }
  // while the pointer of the second array is less 
  // than the length of the array
  while (j < m) {
    // add the current element of the second array to the result array
    res.push(b[j]);
    j++;
  }
  return res;
}
let a = [1, 4, 7];
let b = [2, 5, 8];
let c = [3, 6, 9];
console.log(mergeThreeSortedArrays(a, b, c));
