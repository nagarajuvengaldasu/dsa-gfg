function sortedoptimal(arr) {
  let n = arr.length;
  for (let i = 1; i <= n; i++) {
    if (arr[i - 1] > arr[i]) {
      console.log("Not Sorted");
      return;
    }
  }
  console.log("Sorted");
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
sortedoptimal(arr);
