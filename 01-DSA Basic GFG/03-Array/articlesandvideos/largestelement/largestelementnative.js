function largestelementnative(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let flag = true;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] > arr[i]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      console.log(arr[i]);
      return;
    }
  }
}
let arr = [1, 12, 3, 4, 15, 6, 7, 8, 59, 10];
largestelementnative(arr);
