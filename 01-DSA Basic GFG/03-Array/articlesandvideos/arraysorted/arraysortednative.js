function sorting(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] > arr[j]) {
        console.log("Not Sorted");
        return;
      }
    }
  }
  console.log("Sorted");
}
let arr = [1, 2, 3, 4, 5, 16, 7, 8, 9, 10];
sorting(arr);
