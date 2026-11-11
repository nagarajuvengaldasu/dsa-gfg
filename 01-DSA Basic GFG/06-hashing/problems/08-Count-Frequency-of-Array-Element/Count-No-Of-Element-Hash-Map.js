function countFrequency(arr) {
  let n = arr.length;

  const m = {};

  for (let i = 0; i < n; i++) {
    if (m[arr[i]] >= 1) {
      m[arr[i]]++;
    } else {
      m[arr[i]] = 1;
    }
  }
  return m;
}
let arr = [10, 5, 10, 20, 20, 10, 20, 20];
console.log(countFrequency(arr));
