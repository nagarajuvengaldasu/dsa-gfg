function checkEqualArray(arr1, arr2) {
  let n = arr1.length;
  let m = arr2.length;
  if (n !== m) return false;
  let freq1 = new Map();
  let freq2 = new Map();

  for (let ele of arr1) {
    freq1.set(ele, (freq1.get(ele) || 0) + 1);
  }
  for (let ele of arr2) {
    freq2.set(ele, (freq2.get(ele) || 0) + 1);
  }
  // can u explain these below code for me?

  for (let [key, value] of freq1) {
    if (freq2.get(key) !== value) return false;
  }
  return true;
}
let arr1 = [2, 2, 4, 3, 3];
let arr2 = [3, 2, 4, 3, 2];
console.log(checkEqualArray(arr1, arr2));
