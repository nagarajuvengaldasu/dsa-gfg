function kthSmallestElement(arr, k) {
  let l = 0;
  let h = arr.length - 1;
  while (l <= h) {
    let p = partition(arr, l, h);
    if (p === k- 1) {
      return arr[p];
    } else if (p > k - 1) {
      h = p - 1;
    } else {
      l = p + 1;
    }
  }
  return -1;
}

function partition(arr, l, h) {
  let pivot = arr[h];
  let i = l - 1;
  for (let j = l; j <= h; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[h]] = [arr[h], arr[i + 1]];
  return i + 1;
}

let arr = [3, 5, 4, 2, 9];
let k = 3;
console.log(kthSmallestElement(arr, k));
