// ========== STEP-BY-STEP: Counting Sort (OPTIMAL, O(n)) ==========
// Goal: Given a lowercase string, return its characters in lexicographical order.
// Idea: Use counting sort (fixed alphabet 26):
//       1) Count frequency of each letter a..z.
//       2) Rebuild the string in order using these counts.

function countingSort(str) {
  const freq = new Array(26).fill(0); // Step 1: frequency of 'a'..'z'

  // Step 2: Count occurrences of each character
  for (let i = 0; i < str.length; i++) {
    let idx = str.charCodeAt(i) - "a".charCodeAt(0);
    freq[idx]++;
  }

  // Step 3: Rebuild sorted string from frequency array
  let result = [];
  for (let i = 0; i < 26; i++) {
    const ch = String.fromCharCode("a".charCodeAt(0) + i);
    while (freq[i] > 0) {
      result.push(ch);
      freq[i]--;
    }
  }
  return result.join("");
}

// ---------- Example run: str = "geeksforgeeks" ----------
// Step 2: freq['e'-'a']=4, freq['f']=1, freq['g']=2, freq['k']=2, freq['o']=1, freq['r']=1, freq['s']=2, others 0.
// Step 3: iterate i=0..25 → append 'e' 4 times, 'f' 1 time, 'g' 2 times, 'k' 2 times, 'o','r','s','s' → "eeeefggkkorss".
let str = "geeksforgeeks";
console.log(countingSort(str));
