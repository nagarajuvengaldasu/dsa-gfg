/*
 * STEP-BY-STEP EXECUTION (str = "abcabcbb", n = 8):
 * --------------------------------------------------
 * For each start i, extend j while chars are distinct; on first repeat, break.
 *
 * i=0  set={}. j=0: str[0]='a' not in set → add, res=max(0,1)=1
 *           j=1: 'b' not in set → add, res=2
 *           j=2: 'c' not in set → add, res=3
 *           j=3: 'a' in set → break
 * i=1  set={}. j=1: 'b' add, res=3. j=2: 'c' add, res=3. j=3: 'a' add, res=3. j=4: 'b' in set → break
 * i=2  set={}. j=2: 'c' add, res=3. j=3: 'a' add, res=3. j=4: 'b' add, res=3. j=5: 'c' in set → break
 * i=3  set={}. j=3: 'a' add, res=3. j=4: 'b' add, res=3. j=5: 'c' add, res=3. j=6: 'b' in set → break
 * i=4  set={}. j=4: 'b' add, res=3. j=5: 'c' add, res=3. j=6: 'b' in set → break
 * i=5  set={}. j=5: 'c' add, res=3. j=6: 'b' add, res=3. j=7: 'b' in set → break
 * i=6  set={}. j=6: 'b' add, res=3. j=7: 'b' in set → break
 * i=7  set={}. j=7: 'b' add, res=3
 *
 * return res = 3
 */
function longestSubstringWithDistinctCharacters(str) {
  // Step 1: Get the length of the string
  let n = str.length;
  // Step 2: Initialize the result variable
  let res = 0;
  for (let i = 0; i < n; i++) {
    // Step 2.1: Create a set of the characters in the substring
    let set = new Set();
    // Step 2.2: Loop through the string and check for distinct characters
    for (let j = i; j < n; j++) {
      // Step 2.2.1: Check if the character is in the set
      if (set.has(str[j]) === false) {
        // Step 2.2.2: Add the character to the set
        set.add(str[j]);
        // Step 2.2.3: Update the result variable
        res = Math.max(res, j - i + 1);
      } else {
        // Step 2.2.4: Break the loop
        break;
      }
    }
  }
  // Step 3: Return the result variable
  return res;
}
let s = "abcabcbb";
console.log(longestSubstringWithDistinctCharacters(s));
