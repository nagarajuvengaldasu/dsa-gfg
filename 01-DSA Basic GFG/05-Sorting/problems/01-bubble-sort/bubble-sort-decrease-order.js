function bubbleSortDecreaseOrder(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (swapped === false) {
      break;
    }
  }
  return arr;
}

function printArray(arr) {
  bubbleSortDecreaseOrder(arr);
  console.log(arr.join(" "));
}
let arr = [62, 11, 33, 42, 54, 66, 75, 84];
printArray(arr);
