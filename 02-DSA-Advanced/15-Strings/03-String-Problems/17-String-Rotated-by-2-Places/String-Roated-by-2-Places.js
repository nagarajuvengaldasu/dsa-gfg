/*
 * PROBLEM STATEMENT: String Rotated by 2 Places
 * -------------------------------------------
 * Given two strings str1 and str2, check if str2 is str1 rotated by exactly
 * 2 places (either left or right). Rotation: move 2 characters from one end
 * to the other.
 *
 * Example:
 *   str1 = "amazon", str2 = "azonam"  →  true  (left: amazon → azonam)
 * Example:
 *   str1 = "amazon", str2 = "onamaz"  →  true  (right: amazon → onamaz)
 * Example:
 *   str1 = "geeks", str2 = "eksge"   →  false (not a 2-place rotation)
 */

/*
 * LINE-BY-LINE EXECUTION (str1="amazon", str2="azonam"):
 * ------------------------------------------------------
 * 1. n = 6, m = 6
 * 2. n !== m? No → continue
 * 3. n <= 2? 6 <= 2? No → continue
 *
 * 4. leftrotate = str1.substring(2) + str1.substring(0, 2)
 *                = "azon" + "am" = "azonam"
 *    (first 2 chars moved to end)
 *
 * 5. rightrotate = str1.substring(n-2) + str1.substring(0, n-2)
 *                 = str1.substring(4) + str1.substring(0, 4)
 *                 = "on" + "amaz" = "onamaz"
 *    (last 2 chars moved to front)
 *
 * 6. leftrotate === str2?  "azonam" === "azonam" → true
 *    return true (short-circuit, rightrotate not evaluated)
 */
function isRotated(str1, str2) {
  
  // Step 1: Get the lengths of the strings
  let n = str1.length;
  // Step 2: Get the length of the second string
  let m = str2.length;

  // Step 3: Check if the lengths are different
  // If they are different, return false
  if (n !== m) return false;

  // Step 4: Check if the strings are of length 2 or less
  // If they are of length 2 or less, return true if the strings are equal
    if (n <= 2) return str1 === str2;

  // Step 5: Generate the left and right rotations
  let leftrotate = str1.substring(2) + str1.substring(0, 2);
  // Step 6: Generate the right rotation
  let rightrotate = str1.substring(n - 2) + str1.substring(0, n - 2);

  // Step 7: Check if the left or right rotation is equal to the second string
  // If either is equal, return true
  return leftrotate === str2 || rightrotate === str2;
}

let str1 = "amazon";
let str2 = "azonam";
console.log(isRotated(str1, str2)); // true