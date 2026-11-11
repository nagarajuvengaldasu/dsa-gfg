function mergeTwoSortedArrayBetter(arr1, arr2) {
  let i = 0;
  let j = 0;
  let res = [];
  let n = arr1.length;
  let m = arr2.length;
  while (i < n && j < m) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }
  while (i < n) {
    res.push(arr1[i]);
    i++;
  }
  while (j < m) {
    res.push(arr2[j]);
    j++;
  }
  return res;
}
let arr1 = [1, 3, 5, 7, 9];
let arr2 = [2, 4, 6, 8, 10];
console.log(mergeTwoSortedArrayBetter(arr1, arr2));
