// Count triangles: three sides (a,b,c) form a triangle iff a+b>c, a+c>b, b+c>a.
// Optimal = sort + two-pointer. After sorting, fix largest side arr[k]; then we need
// pairs (i,j) with i<j<k and arr[i]+arr[j]>arr[k]. For each k, two-pointer: i=0, j=k-1.
// If arr[i]+arr[j]>arr[k] → all (i..j-1,j) work → count += (j-i), j--. Else i++.
// Time O(n²): loop over k + two-pointer pass per k. We need the k-loop (can’t remove it).

function countTriangles(arr) {
  arr.sort((a, b) => a - b);
  let n = arr.length;
  let count = 0;

  for (let k = n - 1; k >= 2; k--) {
    let i = 0;       // two-pointer left
    let j = k - 1;   // two-pointer right (both < k)
    while (i < j) {
      if (arr[i] + arr[j] > arr[k]) {
        count += j - i;   // pairs (i,j), (i+1,j), ..., (j-1,j) all form triangles with arr[k]
        j--;              // look for more pairs for this same k (don't change k)
      } else {
        i++;              // sum too small, try larger left element
      }
    }
  }
  return count;
}

let arr = [1,2,3];
console.log(countTriangles(arr));