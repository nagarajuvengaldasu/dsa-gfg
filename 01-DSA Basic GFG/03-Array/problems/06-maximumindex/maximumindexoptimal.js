function maximumIndexOptimal(arr) {
  let n = arr.length;
// 1. Create RMax array - maximum element to the right of each index
  let RMax = new Array(n);
  // 2. Initialize the last element of RMax array
  RMax[n - 1] = arr[n - 1];
  // 3. Fill the RMax array
  for (let i = n - 2; i >= 0; i--) {
    // 4. Compare the current element with the next element in the RMax array
    RMax[i] = Math.max(arr[i], RMax[i + 1]);
  }
  // 5. Use two pointers to find maximum difference
  let ans = -Infinity;
  let i = 0;
  let j = 0;
  while (i < n && j < n) {
    // 6. Compare the current element with the next element in the RMax array and if it is greater then we can extend j to get a larger difference
    if (RMax[j] >= arr[i]) {
      // 7. We can extend j to get a larger difference
      ans = Math.max(ans, j - i);
      j++;
    } 
    // 8. We need to move i forward to find a smaller arr[i]
    else {
      i++;
    }
  }
  // 9. Return the maximum difference
  return ans;
}
let arr = [1, 10];
console.log(maximumIndexOptimal(arr));
