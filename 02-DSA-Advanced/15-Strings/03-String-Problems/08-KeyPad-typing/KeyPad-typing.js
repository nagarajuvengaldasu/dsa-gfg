/*
 * LINE-BY-LINE EXECUTION (S="geeksforgeeks", n=13):
 * -------------------------------------------------
 * Key mapping: abc→2, def→3, ghi→4, jkl→5, mno→6, pqrs→7, tuv→8, wxyz→9
 *
 * i=0  ch='g'  ghi → result="4"
 * i=1  ch='e'  def → result="43"
 * i=2  ch='e'  def → result="433"
 * i=3  ch='k'  jkl → result="4335"
 * i=4  ch='s'  pqrs → result="43357"
 * i=5  ch='f'  def → result="433573"
 * i=6  ch='o'  mno → result="4335736"
 * i=7  ch='r'  pqrs → result="43357367"
 * i=8  ch='g'  ghi → result="433573674"
 * i=9  ch='e'  def → result="4335736743"
 * i=10 ch='e'  def → result="43357367433"
 * i=11 ch='k'  jkl → result="433573674335"
 * i=12 ch='s'  pqrs → result="4335736743357"
 *
 * return "4335736743357"
 */
class Solution {
  printNumber(S, n) {
    // Step 1: Initialize empty result string
    let result = "";
    // Step 2: Iterate through each character in the string
    for (let i = 0; i < n; i++) {
      // Step 3: Get the current character
      let ch = S[i];
      // Step 4: Check if character is in range 'a'..'c'
      if (ch >= "a" && ch <= "c") {
        // Step 5: Add "2" for characters in range 'a'..'c'
        result += "2";
      } else if (ch >= "d" && ch <= "f") {
        // Step 6: Add "3" for characters in range 'd'..'f'
        result += "3";
      } else if (ch >= "g" && ch <= "i") {
        // Step 7: Add "4" for characters in range 'g'..'i'
        result += "4";
      } else if (ch >= "j" && ch <= "l") {
        // Step 8: Add "5" for characters in range 'j'..'l'
        result += "5";
      } else if (ch >= "m" && ch <= "o") {
        // Step 9: Add "6" for characters in range 'm'..'o'
        result += "6";
      } else if (ch >= "p" && ch <= "s") {
        // Step 10: Add "7" for characters in range 'p'..'s'
        result += "7";
      } else if (ch >= "t" && ch <= "v") {
        // Step 11: Add "8" for characters in range 't'..'v'
        result += "8";
      } else if (ch >= "w" && ch <= "z") {
        // Step 12: Add "9" for characters in range 'w'..'z'
        result += "9";
      } else {
        // Step 13: Add character as is if it doesn't match any range
        result += ch;
      }
    }
    // Step 14: Return the final result string
    return result;
  }
}

let solution = new Solution();
let S = "geeksforgeeks";
let n = S.length;
console.log(solution.printNumber(S, n));
