/**
 * Naive LPS Construction - O(n³) time complexity
 * Returns the length of the longest proper prefix of str[0..n-1] that is also a suffix
 */
function longestProperPrefixSuffix(str, n) {
  for (let len = n - 1; len >= 1; len--) {
    let j = 0;
    for (j = 0; j < len; j++) {
      if (str[j] !== str[n - len + j]) break;
    }
    if (j === len) return len;
  }
  return 0;
}

/**
 * Fills the LPS array for the given string
 * lps[i] = length of longest proper prefix of str[0..i] that is also a suffix
 */
function fillLPS(str, lps) {
  lps[0] = 0;
  for (let i = 1; i < str.length; i++) {
    lps[i] = longestProperPrefixSuffix(str, i + 1);
  }
}

// Example: "ababacab" -> lps[] = [0, 0, 1, 2, 3, 0, 1, 2]
let str1 = "ababacab";
let lps1 = new Array(str1.length);
fillLPS(str1, lps1);
console.log(`"${str1}" -> lps[] = [${lps1.join(", ")}]`);

// Exercise 1: "abacabad" -> lps[] = {0, 0, 1, 0, 1, 2, 3, 0}
let str2 = "abacabad";
let lps2 = new Array(str2.length);
fillLPS(str2, lps2);
console.log(`"${str2}" -> lps[] = [${lps2.join(", ")}]`);

// Exercise 2: "abbabb" -> lps[] = {0, 0, 0, 1, 2, 3}
let str3 = "abbabb";
let lps3 = new Array(str3.length);
fillLPS(str3, lps3);
console.log(`"${str3}" -> lps[] = [${lps3.join(", ")}]`);
