function twoSum(arr, target) {
  // Time Complexity: O(n)
  let n = arr.length;
  // Space Complexity: O(n)
  let hashmap = new Map();
  // Iterate through the array and check if the
  // complement is in the hashmap
  for (let i = 0; i < n; i++) {
    // Calculate the complement of the current element
    let complement = target - arr[i];
    // Check if the complement is in the hashmap
    if (hashmap.has(complement)) {
      // If the complement is in the hashmap,
      // return the indices of the two numbers
      return [hashmap.get(complement), i];
    }
    // If the complement is not in the hashmap, add the
    // current element and its index to the hashmap
    hashmap.set(arr[i], i);
  }
}
let arr = [2, 7, 11, 15];
let target = 18;
console.log("The indices are: ", twoSum(arr, target));
