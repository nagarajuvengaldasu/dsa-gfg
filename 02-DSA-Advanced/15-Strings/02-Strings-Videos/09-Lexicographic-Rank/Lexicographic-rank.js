/*
 * PROBLEM STATEMENT: Lexicographic Rank of a String
 * -------------------------------------------------
 * Given a string, find its rank (1-based) when all distinct permutations
 * of the string are sorted lexicographically. Duplicate characters are
 * not allowed in the typical formulation (or count each distinct perm once).
 *
 * Example: "abc" → permutations in order: abc, acb, bac, bca, cab, cba
 *   Rank of "bac" = 3.
 * Example: "STRING" → rank is the position of "STRING" among all 6! permutations
 *   of S,T,R,I,N,G when sorted in dictionary order.
 *
 * Idea: For each position i, count how many permutations have a smaller
 * character at this position (using cumulative count), multiply by (n-1-i)!,
 * add to result; then "remove" current character from count for next positions.
 */

/*
 * STEP-BY-STEP EXECUTION (str = "STRING", n = 6):
 * ------------------------------------------------
 * 1. res = 1, mul = 6! = 720
 *
 * 2. count[charCode] = frequency of each character:
 *    G(71)=1, I(73)=1, N(78)=1, R(82)=1, S(83)=1, T(84)=1
 *
 * 3. Cumulative count: count[i] = number of chars in str with code <= i
 *    count[82]=4 (G,I,N,R), count[83]=5, count[84]=6
 *
 * 4. Loop i = 0 to n-2:
 *
 *    i=0  str[0]='S'(83). mul=720/6=120.
 *         Chars smaller than S: count[82]=4 (G,I,N,R). res=1+4*120=481.
 *         Decrement count[83..255] (remove S from cumulative counts).
 *
 *    i=1  str[1]='T'(84). mul=120/5=24.
 *         Chars smaller than T in remaining: count[83]=4. res=481+4*24=577.
 *         Decrement count[84..255].
 *
 *    i=2  str[2]='R'(82). mul=24/4=6.
 *         count[81]=3 (G,I,N). res=577+3*6=595. Decrement count[82..255].
 *
 *    i=3  str[3]='I'(73). mul=6/3=2.
 *         count[72]=1 (G). res=595+1*2=597. Decrement count[73..255].
 *
 *    i=4  str[4]='N'(78). mul=2/2=1.
 *         count[77]=2 (G,I). res=597+2*1=599. Decrement count[78..255].
 *
 * 5. return res = 599
 */
function lexicographicRank(str) {
  // Step 1: Initialize the result and the length of the string
  let res = 1;
  // Step 2: Get the length of the string
  let n = str.length;
  // Step 3: Calculate the factorial of the length of the string
  let mul = factorial(n);
  // Step 4: Create a count array to store the frequency of each character
  let count = new Array(256).fill(0);
  // Step 5: Count the frequency of each character
  for (let i = 0; i < n; i++) {
    // Step 5.1: Increment the frequency of the character
    count[str.charCodeAt(i)]++;
  }
  // Step 6: Calculate the cumulative frequency of each character
  for (let i = 1; i < count.length; i++) {
    // Step 6.1: Add the frequency of the current character to the frequency of the previous character
    count[i] += count[i - 1];
  }
  // Step 7: Calculate the lexicographic rank of the string
  for (let i = 0; i < n - 1; i++) {
    // Step 7.1: Calculate the factorial of the length of the string
    mul = mul / (n - i);
    // Step 7.2: Calculate the lexicographic rank of the string
    res = res + count[str.charCodeAt(i) - 1] * mul;
    // Step 7.3: Decrement the frequency of the character
    for (let j = str.charCodeAt(i); j < 256; j++) {
      // Step 7.3.1: Decrement the frequency of the character
      count[j]--;
    }
  }
  // Step 8: Return the lexicographic rank of the string
  return res;
}

// Step 2: Calculate the factorial of the length of the string
function factorial(n) {
  // Step 2.1: If the length of the string is 0, return 1
  if (n === 0) {
    // Step 2.1.1: Return 1
    return 1;
  }
  // Step 2.2: Calculate the factorial of the length of the string
  // Step 2.2.1: Multiply the current length by the factorial of the previous length
  return n * factorial(n - 1);
}
let str = "STRING";
console.log(lexicographicRank(str));
