/**
 * Function to count distinct vowels in a string (optimal approach using Set)
 * @param {string} str - The input string to check for distinct vowels
 * @returns {number} - Count of distinct vowels found in the string
 *
 * Time Complexity: O(n) where n is string length
 * Space Complexity: O(1) as we store at most 5 vowels
 *
 * Advantage over naive approach:
 * - Set automatically handles uniqueness, no need to check if element exists
 * - Set.add() is O(1) average case vs arr.includes() which is O(m)
 * - More readable and efficient code
 *
 * Step-by-step execution for "aeiouaeiouaeiou":
 *
 * Initialization:
 *   set = Set {} (empty set)
 *
 * Iteration 1: i=0, str[0]='a'
 *   - 'a' is a vowel ✓
 *   - set.add('a') → set = Set { 'a' }
 *
 * Iteration 2: i=1, str[1]='e'
 *   - 'e' is a vowel ✓
 *   - set.add('e') → set = Set { 'a', 'e' }
 *
 * Iteration 3: i=2, str[2]='i'
 *   - 'i' is a vowel ✓
 *   - set.add('i') → set = Set { 'a', 'e', 'i' }
 *
 * Iteration 4: i=3, str[3]='o'
 *   - 'o' is a vowel ✓
 *   - set.add('o') → set = Set { 'a', 'e', 'i', 'o' }
 *
 * Iteration 5: i=4, str[4]='u'
 *   - 'u' is a vowel ✓
 *   - set.add('u') → set = Set { 'a', 'e', 'i', 'o', 'u' }
 *
 * Iteration 6: i=5, str[5]='a'
 *   - 'a' is a vowel ✓
 *   - set.add('a') → set = Set { 'a', 'e', 'i', 'o', 'u' } (no change, 'a' already exists)
 *   Note: Set automatically ignores duplicates, no explicit check needed!
 *
 * Iteration 7: i=6, str[6]='e'
 *   - 'e' is a vowel ✓
 *   - set.add('e') → set = Set { 'a', 'e', 'i', 'o', 'u' } (no change)
 *
 * Iteration 8: i=7, str[7]='i'
 *   - 'i' is a vowel ✓
 *   - set.add('i') → set = Set { 'a', 'e', 'i', 'o', 'u' } (no change)
 *
 * Iteration 9: i=8, str[8]='o'
 *   - 'o' is a vowel ✓
 *   - set.add('o') → set = Set { 'a', 'e', 'i', 'o', 'u' } (no change)
 *
 * Iteration 10: i=9, str[9]='u'
 *   - 'u' is a vowel ✓
 *   - set.add('u') → set = Set { 'a', 'e', 'i', 'o', 'u' } (no change)
 *
 * Iteration 11: i=10, str[10]='a'
 *   - 'a' is a vowel ✓
 *   - set.add('a') → set = Set { 'a', 'e', 'i', 'o', 'u' } (no change)
 *
 * Iteration 12: i=11, str[11]='e'
 *   - 'e' is a vowel ✓
 *   - set.add('e') → set = Set { 'a', 'e', 'i', 'o', 'u' } (no change)
 *
 * Iteration 13: i=12, str[12]='i'
 *   - 'i' is a vowel ✓
 *   - set.add('i') → set = Set { 'a', 'e', 'i', 'o', 'u' } (no change)
 *
 * Iteration 14: i=13, str[13]='o'
 *   - 'o' is a vowel ✓
 *   - set.add('o') → set = Set { 'a', 'e', 'i', 'o', 'u' } (no change)
 *
 * Iteration 15: i=14, str[14]='u'
 *   - 'u' is a vowel ✓
 *   - set.add('u') → set = Set { 'a', 'e', 'i', 'o', 'u' } (no change)
 *
 * Final Result:
 *   - set.size = 5 (all 5 distinct vowels: a, e, i, o, u)
 *   - Return: 5
 */
function distinctOvwelsCountOptimal(str) {
  // Initialize a Set to store distinct vowels
  // Set automatically handles uniqueness - no need to check for duplicates
  let set = new Set();

  // Iterate through each character in the string
  for (let i = 0; i < str.length; i++) {
    // Check if current character is a lowercase vowel (a, e, i, o, u)
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      // Add vowel to the set
      // If vowel already exists, Set will ignore the duplicate automatically
      // This is O(1) operation - much faster than arr.includes() which is O(m)
      set.add(str[i]);
    }
  }

  // Return the size of the set, which represents the count of distinct vowels
  // set.size gives us the number of unique elements in O(1) time
  return set.size;
}

// Test case: String with repeated vowels
let str = "aeiouaeiouaeiou";
console.log(distinctOvwelsCountOptimal(str)); // Expected output: 5
