/*
 * PROBLEM STATEMENT: Isomorphic Strings
 * -------------------------------------
 * Two strings str1 and str2 are isomorphic if there exists a one-to-one
 * mapping between characters such that every character in str1 can be
 * replaced by exactly one character in str2 (and vice versa), preserving
 * the structure. Same char in str1 must map to same char in str2; different
 * chars must map to different chars.
 *
 * Example:
 *   str1="egg", str2="add"  →  true  (e↔a, g↔d)
 * Example:
 *   str1="foo", str2="bar"  →  false (o would need to map to both a and r)
 *
 * LINE-BY-LINE EXECUTION (str1="egg", str2="add"):
 * ------------------------------------------------
 * 1. Length check: 3 === 3 → continue
 * 2. arr1 = [26 × -1], arr2 = [26 × -1]
 *
 * 3. Loop:
 *    i=0  index1=4(e), index2=0(a)
 *         arr1[4]=-1, arr2[0]=-1 → both unset
 *         arr1[4]=0 (e→a), arr2[0]=4 (a→e)
 *
 *    i=1  index1=6(g), index2=3(d)
 *         arr1[6]=-1, arr2[3]=-1 → both unset
 *         arr1[6]=3 (g→d), arr2[3]=6 (d→g)
 *
 *    i=2  index1=6(g), index2=3(d)
 *         arr1[6]=3, arr2[3]=6 → already mapped
 *         Check: arr1[6]===index2? 3===3 ✓  arr2[3]===index1? 6===6 ✓
 *         No conflict → continue
 *
 * 4. return true
 */
function isIsomorphic(str1, str2) {
  // Step 1: Check if lengths are different
  if (str1.length !== str2.length) {
    // Step 1.1: Return false if lengths are different
    return false;
  }

  // Step 2: Initialize two arrays to track character mappings
  let arr1 = new Array(26).fill(-1);
  // Step 2.1: Initialize second array to track character mappings
  let arr2 = new Array(26).fill(-1);

  for (let i = 0; i < str1.length; i++) {
    // Step 3: Get character indices for both strings
    let index1 = str1.charCodeAt(i) - 97;
    // Step 3.1: Get character index for second string
    let index2 = str2.charCodeAt(i) - 97;

    if (arr1[index1] === -1 && arr2[index2] === -1) {
      // Step 3.2: If both characters are not mapped, map them
      arr1[index1] = index2;
      // Step 3.3: Map the second character to the first character
      arr2[index2] = index1;
    } else if (arr1[index1] !== index2 || arr2[index2] !== index1) {
      // Step 3.4: If both characters are already mapped, check if they are mapped to the same character
      return false;
    }
  }
  // Step 4: Return true if all characters are mapped
  return true;
}
console.log(isIsomorphic("egg", "add"));
