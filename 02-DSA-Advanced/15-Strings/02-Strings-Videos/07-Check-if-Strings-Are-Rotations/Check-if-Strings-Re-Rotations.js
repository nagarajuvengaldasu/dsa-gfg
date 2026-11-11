/**
 * Check if Strings Are Rotations
 * s2 is a rotation of s1 if s2 appears as a substring in s1 + s1.
 * Example: s1 = "ABCD", s2 = "CDAB" → s1+s1 = "ABCDABCD" contains "CDAB" → true
 */
function areRotations(s1, s2) {
  if (s1.length !== s2.length) return false;
  return (s1 + s1).indexOf(s2) !== -1;
}

// Example 1: ABCD → CDAB (rotate left by 2)
console.log(areRotations("ABCD", "CDAB")); // true
