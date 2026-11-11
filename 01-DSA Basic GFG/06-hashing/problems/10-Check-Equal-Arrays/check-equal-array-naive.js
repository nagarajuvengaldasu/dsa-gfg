function checkEqualArray(arr1, arr2) {
  let n = arr1.length;
  let m = arr2.length;
  let hashMap = new Array(n);
  for (let i = 0; i < n; i++) {
    hashMap[i] = arr1[i];
  }
  /**
   * the includes methos insidee the loop so that take the o(n
   * *m) as the time complexity
   */
  for (let j = 0; j < m; j++) {
    if (!hashMap.includes(arr2[j])) {
      return false;
    }
  }
  return true;
}
const arr1 = [4, 2, 2, 5];
const arr2 = [2, 4, 2, 5];
console.log(checkEqualArray(arr1, arr2));
