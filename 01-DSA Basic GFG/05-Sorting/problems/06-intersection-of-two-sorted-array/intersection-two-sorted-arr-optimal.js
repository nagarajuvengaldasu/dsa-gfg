function intersectionoftwosortedarray(a, b) {
  let i = 0;
  let j = 0;
  let m = a.length;
  let n = b.length;
  // we are using two pointers to iterate through the two arrays
  while (i < m && j < n) {
    // we are checking if the current element in the first array is equal
    // to the previous element in the first array
    if (i > 0 && a[i] === a[i - 1]) {
      i++;
      // we are incrementing the pointer of the first array
    }
    // we are checking if the current element in the first array is
    // less than the current element in the second array
    else if (a[i] < b[j]) {
      i++;
      // we are incrementing the pointer of the first array
    }
    // we are checking if the current element in the first array is
    // greater than the current element in the second array
    else if (a[i] > b[j]) {
      j++;
      // we are incrementing the pointer of the second array
    }
    // we are checking if the current element in the first array is
    // equal to the current element in the second array
    else {
      // we are printing the current element in the first array
      console.log(a[i]);
      // we are incrementing the pointer of the first array
      i++;
      // we are incrementing the pointer of the second array
      j++;
    }
  }
}
let a = [1, 2, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5, 6, 6, 6, 6];
let b = [2, 2, 3, 3, 4, 4, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8];
intersectionoftwosortedarray(a, b);
