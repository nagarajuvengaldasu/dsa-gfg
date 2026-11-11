function unionOfTwoSortedArray(arr1, arr2) {
  let i = 0;
  let j = 0;
  let n = arr1.length;
  let m = arr2.length;
  let res = [];
  while (i < n && j < m) {
    // if the last element of the result array is the same as the current element of the array, then skip the current element
    if (i > 0 && arr1[i] === arr1[i - 1]) {
      i++;
      continue;
    }
    if (j > 0 && arr2[j] === arr2[j - 1]) {
      j++;
      continue;
    }
    // if the current element of the first array is less than the current element of the second array, then add the current element of the first array to the result array
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    }
    // if the current element of the first array is greater than the current element of the second array, then add the current element of the second array to the result array
    else if (arr1[i] > arr2[j]) {
      res.push(arr2[j]);
      j++;
    }
    // if the current element of the first array is equal to the current element of the second array, then add the current element of the first array to the result array
    else {
      res.push(arr1[i]);
      i++;
      j++;
    }
  }
  // if there are remaining elements in the first array, then add them to the result array
  while (i < n) {
    if (i === 0 || arr1[i] !== arr1[i - 1]) {
      res.push(arr1[i]);
    }
    i++;
  }
  // if there are remaining elements in the second array, then add them to the result array
  while (j < m) {
    if (j === 0 || arr2[j] !== arr2[j - 1]) {
      res.push(arr2[j]);
    }
    j++;
  }
  return res;
}
let arr1 = [4, 6, 6, 9, 10, 11, 11, 11];
let arr2 = [1, 1, 1, 3, 3];
console.log(unionOfTwoSortedArray(arr1, arr2));
