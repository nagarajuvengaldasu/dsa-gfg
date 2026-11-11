function stockSpan(arr) {
  for (let i = 0; i < arr.length; i++) {
    let span = 1;
    for (let j = i - 1; j >= 0 && arr[j] <= arr[i]; j--) {
      span++;
    }
    console.log(span);
  }
}
let arr = [18, 12, 13, 14, 11, 16];
stockSpan(arr);
