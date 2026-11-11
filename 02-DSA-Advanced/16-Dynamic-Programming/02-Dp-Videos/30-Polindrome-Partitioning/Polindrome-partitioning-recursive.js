/*
PROBLEM STATEMENT:
Given a string, we need to find the minimum number of partitions required to make the string a polindrome.
A polindrome is a string that reads the same forward and backward.
TIME COMPLEXITY: O(2^n) - exponential, as we try all possible partitions
SPACE COMPLEXITY: O(n) - maximum depth of recursion stack is n
KEY INSIGHT: This is a recursive problem where at each step, we try to partition the string into two parts and check if the two parts are polindromes.
We take the minimum of all possible partitions.
*/

function polindromePartitioning(str, i, j) {
  // Step 1: Base Case - If the string is a polindrome
  if (isPolindrome(str, i, j)) {
    return 0;
  }
  // Step 2: Recursive Case - Try all possible partitions
  // For each partition, we try to partition the string into two parts and check if the two parts are polindromes.
  // We take the minimum of all possible partitions.
  let res = Number.POSITIVE_INFINITY;
  // Step 3: Try all possible partitions
  // For each partition, we try to partition the string into two parts and check if the two parts are polindromes.
  // We take the minimum of all possible partitions.
  for (let k = i; k < j; k++) {
    // Step 4: Try all possible partitions
    // For each partition, we try to partition the string into two parts and check if the two parts are polindromes.
    // We take the minimum of all possible partitions.
    res = Math.min(
      res,
      1 +
        polindromePartitioning(str, i, k) +
        polindromePartitioning(str, k + 1, j),
    );
  }
  return res;
}
// Step 5: Check if the string is a polindrome
function isPolindrome(str, i, j) {
  // Step 6: Check if the string is a polindrome
  while (i < j) {
    // Step 7: Check if the string is a polindrome
    if (str[i] !== str[j]) {
      // Step 8: Check if the string is a polindrome
      return false;
    }
    // Step 9: Check if the string is a polindrome
    i++;
    // Step 10: Check if the string is a polindrome
    j--;
  }
  // Step 11: Check if the string is a polindrome
  return true;
}

let str = "geek";
let i = 0;
let j = str.length - 1;
console.log(polindromePartitioning(str, i, j));
