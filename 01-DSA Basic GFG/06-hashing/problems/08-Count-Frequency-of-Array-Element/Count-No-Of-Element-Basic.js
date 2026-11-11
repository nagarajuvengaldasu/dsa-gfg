function countFrequency(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    console.log(arr[i] + " --> " + count);
  }
}
let arr = [10, 5, 10, 20, 20, 10, 20, 20];
countFrequency(arr);
