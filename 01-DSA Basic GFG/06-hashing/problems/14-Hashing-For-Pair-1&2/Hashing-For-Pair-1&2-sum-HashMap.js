function hashingpair1and2(arr, n, sum) {
  let map = new Map();
  for (let i = 0; i < n; i++) {
    map.set(arr[i], true);
  }
  for (let i = 0; i < n; i++) {
    let compliment = sum - arr[i];
    if (map.has(compliment) && compliment !== arr[i]) {
      return 1;
    }
  }
  return 0;
}
let arr = [2, 5];
let n = arr.length;
let sum = 17;
console.log(hashingpair1and2(arr, n, sum));
  