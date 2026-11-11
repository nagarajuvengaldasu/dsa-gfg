function mergeTwoSortedArrayNaive(arr1, arr2) {
  let n = arr1.length;
  let m = arr2.length;
  let res = [];
  for (let i = 0; i < n; i++) {
    res.push(arr1[i]);
  }
  for (let i = 0; i < m; i++) {
    res.push(arr2[i]);
  }
  res.sort((a, b) => a - b);
  return res;
}

let arr1 = [1, 3, 5, 7, 9];
let arr2 = [2, 4, 6, 8, 10];
console.log(mergeTwoSortedArrayNaive(arr1, arr2));
