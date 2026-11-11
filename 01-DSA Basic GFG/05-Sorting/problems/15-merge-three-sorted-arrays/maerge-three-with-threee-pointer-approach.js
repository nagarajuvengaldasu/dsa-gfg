function mergeThreeSortedArrays(a, b, c) {
  let i = 0;
  let j = 0;
  let k = 0;
  let res = [];
  let n = a.length;
  let m = b.length;
  let p = c.length;
  // merge the first three arrays
  while (i < n && j < m && k < p) {
    if (a[i] <= b[j] && a[i] <= c[k]) {
      res.push(a[i]);
      i++;
    } else if (b[j] <= a[i] && b[j] <= c[k]) {
      res.push(b[j]);
      j++;
    } else {
      res.push(c[k]);
      k++;
    }
  }
  // merge the first two arrays
  while (i < n && j < m) {
    if (a[i] <= b[j]) {
      res.push(a[i]);
      i++;
    } else {
      res.push(b[j]);
      j++;
    }
  }
  // merge the second and third arrays
  while (j < m && k < p) {
    if (b[j] <= c[k]) {
      res.push(b[j]);
      j++;
    } else {
      res.push(c[k]);
      k++;
    }
  }
  // merge the third and first arrays
  while (k < p && i < n) {
    if (c[k] <= a[i]) {
      res.push(c[k]);
      k++;
    } else {
      res.push(a[i]);
      i++;
    }
  }
  // merge the remaining elements of the first array
  while (i < n) {
    res.push(a[i]);
    i++;
  }
  // merge the remaining elements of the second array
  while (j < m) {
    res.push(b[j]);
    j++;
  }
  // merge the remaining elements of the third array
  while (k < p) {
    res.push(c[k]);
    k++;
  }
  return res;
}
let a = [1, 4, 7];
let b = [2, 5, 8];
let c = [3, 6, 9];
console.log(mergeThreeSortedArrays(a, b, c));
