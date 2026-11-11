/*
 * PROBLEM STATEMENT:
 * Find the length of the Longest Common Subsequence (LCS) of two strings.
 * LCS: longest subsequence that appears in both strings (order preserved).
 *
 * NAIVE APPROACH: Recursive. If str1[i]==str2[j], 1+LCS(i+1,j+1). Else
 * max(LCS(i+1,j), LCS(i,j+1)). Base: i or j at end → 0.
 *
 * STEP-BY-STEP (str1="aedfhr", str2="abcdgh"):
 * lcs(0,0): 'a'=='a' → 1+lcs(1,1)
 * lcs(1,1): 'e'!='b' → max(lcs(2,1), lcs(1,2))
 * ... recursion expands ...
 * Result: 3 (e.g., "adh" or "adh")
 *
 * EXAMPLE: "aedfhr","abcdgh" → 3
 * Time: O(2^(n+m)) | Space: O(n+m) recursion stack
 */
function lcs(str1, str2, i = 0, j = 0) {
  let n = str1.length;
  let m = str2.length;
  if (i === n || j === m) {
    return 0;
    // WHY: Base case. Reached end of either string → no more common chars.
  }
  if (str1[i] === str2[j]) {
    return 1 + lcs(str1, str2, i + 1, j + 1);
    // EXECUTION: Match! Include this char in LCS, recurse on rest of both.
  }
  return Math.max(lcs(str1, str2, i + 1, j), lcs(str1, str2, i, j + 1));
  // WHY: No match. Try skipping str1[i] OR str2[j]; take better result.
}
let str1 = "aedfhr";
let str2 = "abcdgh";
console.log(lcs(str1, str2));
