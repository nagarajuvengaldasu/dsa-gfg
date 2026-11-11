function squarerootoptimal(n) {
  let low = 0;
  let high = n;
  // to store the result
  let res = 1;
  while (low <= high) {
    // to find the middle element
    let mid = Math.floor((low + high) / 2);
    // to check if the middle element is the square root
    if (mid * mid === n) {
      // if it is the square root, return the middle element
      return mid;
    } else if (mid * mid > n) {
      // if it is greater than the square root, move the high pointer to the left
      high = mid - 1;
    } else {
      // if it is less than the square root, move the low pointer to the right
      low = mid + 1;
      // to store the result if it is not the square root
      //why we are storing? because we want to find the largest integer whose square is less than or equal to the given number
      res = mid;
    }
  }
  // to return the result
  return res;
}
let n = 14;
console.log(squarerootoptimal(n));
