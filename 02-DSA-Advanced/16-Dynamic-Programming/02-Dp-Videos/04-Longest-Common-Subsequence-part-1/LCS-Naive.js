function lcs(s1, s2, m, n) {
  if (m === 0 || n === 0) {
    return 0;
  }
  if (s1[m - 1] === s2[n - 1]) {
    return 1 + lcs(s1, s2, m - 1, n - 1);
  } else {
    return Math.max(lcs(s1, s2, m - 1, n), lcs(s1, s2, m, n - 1));
  }
}
let s1 = "ABCDGH";
let s2 = "AEDFHR";
let m = s1.length;
let n = s2.length;
console.log(lcs(s1, s2, m, n));
