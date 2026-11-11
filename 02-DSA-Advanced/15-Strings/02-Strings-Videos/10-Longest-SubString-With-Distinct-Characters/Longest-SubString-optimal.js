/*
 * STEP-BY-STEP EXECUTION (str = "abcabcbb", n = 8):
 * --------------------------------------------------
 * Sliding window [i..j]. prev[c] = last index where c was seen. On repeat, move i past that index.
 *
 * Initially: res=0, prev={}, i=0
 *
 * j=0  str[0]='a'. prev has no 'a' → set prev['a']=-1. i=max(0,-1+1)=0. res=max(0,1)=1. prev['a']=0.
 * j=1  str[1]='b'. prev['b']=-1. i=0. res=max(1,2)=2. prev['b']=1.
 * j=2  str[2]='c'. prev['c']=-1. i=0. res=max(2,3)=3. prev['c']=2.
 * j=3  str[3]='a'. prev['a']=0 → i=max(0,0+1)=1. res=max(3,3)=3. prev['a']=3.
 * j=4  str[4]='b'. prev['b']=1 → i=max(1,2)=2. res=3. prev['b']=4.
 * j=5  str[5]='c'. prev['c']=2 → i=max(2,3)=3. res=3. prev['c']=5.
 * j=6  str[6]='b'. prev['b']=4 → i=max(3,5)=5. res=max(3,2)=3. prev['b']=6.
 * j=7  str[7]='b'. prev['b']=6 → i=max(5,7)=7. res=max(3,1)=3. prev['b']=7.
 *
 * return res = 3
 */
function longestSubstringWithDistinctCharacters(str) {
  // Step 1: Get the length of the string
  let n = str.length;
  // Step 2: Initialize the result variable
  let res = 0;
  // Step 3: Initialize the previous map
  let prev = new Map();
  // Step 4: Initialize the index variable
  let i = 0;
  // Step 5: Loop through the string
  for (let j = 0; j < n; j++) {
    // Step 5.1: Check if the character is in the previous map
    if (!prev.has(str[j])) {
      // Step 5.1.1: Set the character in the previous map
      prev.set(str[j], -1);
    }
    // Step 5.1.2: Update the index variable
    i = Math.max(i, prev.get(str[j]) + 1);
    // Step 5.1.3: Update the result variable
    res = Math.max(res, j - i + 1);
    // Step 5.1.4: Set the character in the previous map
    prev.set(str[j], j);
  }
  // Step 6: Return the result variable
  return res;
}
let s = "abcabcbb";
console.log(longestSubstringWithDistinctCharacters(s));
