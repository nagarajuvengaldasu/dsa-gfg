
// problem statement


function kmostfrequent(arr, n, k) {
  let map = new Map();  // Step 1: Map to store element → frequency
  for (let i = 0; i < n; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);  // Step 2: Count occurrences
  }
  let freq = Array.from(map.values());  // Step 3: Get all frequencies [1,1,1,1,1]
  freq.sort((a, b) => b - a);  // Step 4: Sort descending (highest freq first)
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += freq[i];  // Step 5: Sum top K frequencies
  }
  return sum;  // Step 6: Return sum of K most occurring elements' frequencies
}

// Execution: arr=[3,5,4,2,9], n=5, k=3
// map: {3→1, 5→1, 4→1, 2→1, 9→1} (all unique, freq=1 each)
// freq = [1,1,1,1,1] → sorted [1,1,1,1,1]
// sum = freq[0]+freq[1]+freq[2] = 1+1+1 = 3
let arr = [3, 5, 4, 2, 9];
let n = arr.length;
let k = 3;
console.log(kmostfrequent(arr, n, k));  // 3
