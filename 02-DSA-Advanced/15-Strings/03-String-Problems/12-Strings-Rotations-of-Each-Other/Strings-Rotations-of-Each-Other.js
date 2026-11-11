/**
 * STRINGS ROTATIONS OF EACH OTHER
 * Problem: Check if two strings are rotations of each other
 *
 * Time Complexity: O(n) where n is the length of the strings
 * Space Complexity: O(n) for the concatenated string
 *
 * KEY INSIGHT: Concatenate the first string with itself and check if the second string is a substring of the concatenated string
 */
function areRotations(str1, str2) {
  // Step 1: Check if the lengths of the strings are equal
  // If not, they can't be rotations of each other
  // Example: str1 = "ABCD", str2 = "CDAB" → lengths are equal (4)
  //   str1 = "ABCD", str2 = "ACBD" → lengths are not equal (4 != 3)
  if (str1.length !== str2.length) {
    // Step 2: Return false if lengths are not equal
    return false;
  }

  // Step 3: Concatenate the first string with itself
  // Example: str1 = "ABCD" → result = "ABCDABCD"
  let result = str1 + str1;

  // Step 4: Check if the second string is a substring of the concatenated string
  // Example: str2 = "CDAB" → result.includes(str2) = true
  //   str2 = "ACBD" → result.includes(str2) = false

  // Step 5: Return true if the second string is a substring of the concatenated string, false otherwise
  // Example: str2 = "CDAB" → result.includes(str2) = true → true
  //   str2 = "ACBD" → result.includes(str2) = false → false
  return result.includes(str2);
}

console.log(areRotations("ABCD", "CDAB"));
