/*
 * PROBLEM STATEMENT: Minimum Indexed Character
 * --------------------------------------------
 * Given a string str and another string patt, find the minimum index in str
 * where any character of patt appears. Return that character.
 * If no character of patt is present in str, return "$".
 *
 * Example:
 *   str = "geeksforgeeks", patt = "set"
 *   's' appears at index 4, 'e' at index 1, 't' does not appear
 *   Minimum index = 1 → return 'e'
 *
 * Example:
 *   str = "adcffaet", patt = "onkl"
 *   None of o,n,k,l appear in str → return "$"
 *
 * LINE-BY-LINE EXECUTION (str="geeksforgeeks", patt="set"):
 * -------------------------------------------------------
 * 1. index = [26 slots filled with -1]
 *
 * 2. First loop over str:
 *    i=0  str[0]='g'  charIndex=6   index[6]=-1 → index[6]=0
 *    i=1  str[1]='e'  charIndex=4   index[4]=-1 → index[4]=1
 *    i=2  str[2]='e'  charIndex=4   index[4]=1  → skip (already set)
 *    i=3  str[3]='k'  charIndex=10  index[10]=-1 → index[10]=3
 *    i=4  str[4]='s'  charIndex=18  index[18]=-1 → index[18]=4
 *    i=5  str[5]='f'  charIndex=5   index[5]=-1  → index[5]=5
 *    i=6  str[6]='o'  charIndex=14  index[14]=-1 → index[14]=6
 *    i=7  str[7]='r'  charIndex=17  index[17]=-1 → index[17]=7
 *    i=8  str[8]='g'  charIndex=6   index[6]=0   → skip
 *    ... (rest are duplicates, skip)
 *    Result: g→0, e→1, k→3, s→4, f→5, o→6, r→7
 *
 * 3. minIndex=∞, result="$"
 *
 * 4. Second loop over patt:
 *    i=0  patt[0]='s'  charIndex=18  index[18]=4, 4<∞ → minIndex=4, result='s'
 *    i=1  patt[1]='e'  charIndex=4   index[4]=1, 1<4 → minIndex=1, result='e'
 *    i=2  patt[2]='t'  charIndex=19  index[19]=-1 → skip (t not in str)
 *
 * 5. return 'e'
 */

class Solution {
  printminimumIndexedCharacter(str, patt) {
    // STEP 1: Store first occurrence index of each char (a=0, b=1, ..., z=25)
    // index[c] = first position where char c appears in str, -1 if never seen
    let index = new Array(26).fill(-1);

    // STEP 2: Scan str, store first index for each character
    for (let i = 0; i < str.length; i++) {
      let charIndex = str.charCodeAt(i) - 97; // 'a'=0, 'b'=1, ...
      if (index[charIndex] === -1) {
        index[charIndex] = i;
      }
    }
    // After loop (str="geeksforgeeks"): g→0, e→1, k→3, s→4, f→5, o→6, r→7

    // STEP 3: Find character from patt with minimum index in str
    let minIndex = Infinity;
    let result = "$";

    for (let i = 0; i < patt.length; i++) {
      let charIndex = patt.charCodeAt(i) - 97;
      // If char exists in str AND its index is smaller than current min
      if (index[charIndex] !== -1 && index[charIndex] < minIndex) {
        minIndex = index[charIndex];
        result = patt[i];
      }
    }
    // Trace for patt="set": s→index 4, e→index 1 (min), t→not in str
    return result;
  }
}

let solution = new Solution();
let str = "geeksforgeeks";
let patt = "set";
console.log(solution.printminimumIndexedCharacter(str, patt));
