function subsequenceRecursive(a, b, m, n) {
  // base casen second string is empty
  if (n === 0) {
    return true;
  }
  // base case first string is empty
  if (m === 0) {
    return false;
  }
  // recursive case if the last characters of the strings are equal
  if (a[m - 1] === b[n - 1]) {
    // if the last characters are equal, then we move to the previous characters and check the remaining characters
    return subsequenceRecursive(a, b, m - 1, n - 1);
  } else {
    // if the last characters are not equal, then we move to the previous characters of the first string and check the remaining characters
    return subsequenceRecursive(a, b, m - 1, n);
  }
}
let a = "abc";
let b = "ac";
let m = a.length;
let n = b.length;
console.log(subsequenceRecursive(a, b, m, n));
