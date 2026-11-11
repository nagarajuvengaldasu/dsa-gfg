/*
 * STEP-BY-STEP EXECUTION (str1="aacdb", str2="gafd"):
 * ---------------------------------------------------
 * 1. set1 = Set(str1) → {'a','c','d','b'}  (unique chars from str1)
 * 2. set2 = Set(str2) → {'g','a','f','d'}  (unique chars from str2)
 * 3. result = ""
 *
 * 4. First loop - add chars from str1 that are NOT in str2:
 *    ch='a'  set2.has('a') ✓ → skip
 *    ch='c'  set2.has('c') ✗ → result="c"
 *    ch='d'  set2.has('d') ✓ → skip
 *    ch='b'  set2.has('b') ✗ → result="cb"
 *
 * 5. Second loop - add chars from str2 that are NOT in str1:
 *    ch='g'  set1.has('g') ✗ → result="cbg"
 *    ch='a'  set1.has('a') ✓ → skip
 *    ch='f'  set1.has('f') ✗ → result="cbgf"
 *    ch='d'  set1.has('d') ✓ → skip
 *
 * 6. result.length = 4 ≠ 0 → return "cbgf"
 */
function removeCommonAndConcat(str1, str2) {
  // Step 1: Create sets of unique characters from both strings
  let set1 = new Set(str1);
  // Step 2: Create sets of unique characters from both strings
  let set2 = new Set(str2);
  // Step 3: Create a result string
  let result = "";
  // Step 4: Add characters from set1 that are not in set2
  for (let ch of set1) {
    // Step 4.1: Check if character is in set2
    if (!set2.has(ch)) {
      // Step 4.2: Add character to result if it is not in set2
      result += ch;
    }
  }
  // Step 5: Add characters from set2 that are not in set1
  for (let ch of set2) {
    // Step 5.1: Check if character is in set1
    if (!set1.has(ch)) {
      // Step 5.2: Add character to result if it is not in set1
      result += ch;
    }
  }
  // Step 6: Check if result is empty
  if (result.length === 0) {
    // Step 6.1: Return "-1" if result is empty
    return "-1";
  }
  // Step 7: Return result
  return result;
}
console.log(removeCommonAndConcat("aacdb", "gafd"));
