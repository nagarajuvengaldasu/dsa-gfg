function merge(a, b, n, m) {
  // ceil means round up to the nearest integer
  let gap = Math.ceil((n + m) / 2);
  while (gap > 0) {
    let i = 0; // left pointer
    let j = gap; // right pointer (gap distance from i)
    while (j < n + m) {
      // both pointers in array a only
      if (i < n && j < n) {
        // if left pointer is greater than right pointer, swap them
        if (a[i] > a[j]) {
          [a[i], a[j]] = [a[j], a[i]];
        }
      }
      // one pointer in array a and one pointer in array b
      else if (i < n && j >= n) {
        let idx = j - n;
        // if left pointer is greater than right pointer, swap them
        if (a[i] > b[idx]) {
          [a[i], b[idx]] = [b[idx], a[i]];
        }
      } else {
        let idx1 = i - n;
        let idx2 = j - n;
        // if left pointer is greater than right pointer, swap them
        if (b[idx1] > b[idx2]) {
          [b[idx1], b[idx2]] = [b[idx2], b[idx1]];
        }
      }
      i++;
      j++;
    }
    // reduce the gap for next iteration
    if (gap === 1) break;
    gap = Math.ceil(gap / 2);
  }
  return [...a, ...b];
}

let a = [1, 3, 5, 7];
let b = [0, 2, 6, 8, 9];
let n = a.length;
let m = b.length;
console.log(merge(a, b, n, m));
