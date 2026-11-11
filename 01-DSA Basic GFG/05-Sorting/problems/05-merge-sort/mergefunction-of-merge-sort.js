function mergefunction(arr, low, mid, high) {
  let n1 = mid - low + 1;
  let n2 = high - mid;
  let left = [];
  let right = [];
  for (let i = 0; i < n1; i++) {
    left.push(arr[low + i]);
  }
  for (let i = 0; i < n2; i++) {
    right.push(arr[mid + 1 + i]);
  }

  let i = 0;
  let j = 0;
  let k = low;
  while (i < n1 && j < n2) {
    if (left[i] < right[j]) {
      arr[k] = left[i];
      i++;
      k++;
    } else {
      arr[k] = right[j];
      j++;
      k++;
    }
  }
  while (i < n1) {
    arr[k] = left[i];
    i++;
    k++;
  }
  while (j < n2) {
    arr[k] = right[j];
    j++;
    k++;
  }
}
