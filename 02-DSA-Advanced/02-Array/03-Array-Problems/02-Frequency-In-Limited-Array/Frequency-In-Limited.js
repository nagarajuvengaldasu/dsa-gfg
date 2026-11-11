// FREQUENCIES IN A LIMITED ARRAY: Count frequency of each number from 1 to n
// Constraint: O(n) time, O(1) space (no extra array allowed)
// 
// ============================================================================
// CORE LOGIC EXPLANATION:
// ============================================================================
//
// PROBLEM: We need to count frequencies but can't use extra space!
//
// KEY INSIGHT: Since array values are in range [1, n], we can use the array
// itself to store both the original value AND its frequency simultaneously!
//
// HOW IT WORKS:
// ------------
// We encode two pieces of information in each array position:
//   1. Original value (0-based): stored as (arr[i] % n)
//   2. Frequency count: stored as (arr[i] / n)
//
// ENCODING TECHNIQUE:
// ------------------
// When we see a value 'x', we want to increment frequency at position (x-1).
// Instead of using a separate frequency array, we add 'n' to arr[x-1].
//
// Why add 'n'?
// - Original values are in [0, n-1] (after decrementing)
// - Adding 'n' doesn't affect modulo: (value + n) % n = value % n
// - But it increases the quotient: (value + n) / n = (value / n) + 1
//
// EXAMPLE:
// --------
// Original: [2, 3, 2, 3, 5], n = 5
// After decrement: [1, 2, 1, 2, 4]  (values now 0-based: [0, n-1])
//
// When we see value 1 (which represents original value 2):
//   - We want to count it at index 1
//   - We do: arr[1] += 5
//   - arr[1] becomes: 2 + 5 = 7
//   - Later: 7 % 5 = 2 (original value preserved)
//   - Later: 7 / 5 = 1 (frequency count = 1)
//
// When we see value 1 again:
//   - We read arr[1] = 7
//   - We get original: 7 % 5 = 2, but wait... that's wrong!
//   - Actually: 7 % 5 = 2, but we need 1!
//   - So we use: arr[i] % n to get the CURRENT value being processed
//
// THE MODULO TRICK:
// ----------------
// When processing arr[i]:
//   - If arr[i] < n: It's an unmodified original value
//   - If arr[i] >= n: It's been modified, but arr[i] % n gives us the
//                     ORIGINAL value that was stored there
//
// But wait! We're reading arr[i] to get the value to count. So:
//   - arr[i] % n gives us the original 0-based value at position i
//   - We use that as index to increment frequency
//
// STEP-BY-STEP LOGIC:
// ------------------
// 1. Decrement all by 1: Makes values 0-based [0, n-1]
// 2. For each element arr[i]:
//    a. Get original value: index = arr[i] % n
//    b. Increment frequency: arr[index] += n
// 3. Extract frequencies: result[i] = arr[i] / n
//
// WHY THIS WORKS:
// --------------
// - Each time we see value 'x', we add 'n' to arr[x]
// - After processing: arr[x] = original_value + n * frequency
// - original_value = arr[x] % n (but we don't need it)
// - frequency = arr[x] / n (this is what we want!)
//
// ============================================================================

function frequencyInLimited(arr){
  let n = arr.length;
  
  // Step 1: Decrement all elements by 1 to make them 0-based
  // This simplifies the indexing: values now in [0, n-1]
  // Example: [2,3,2,3,5] becomes [1,2,1,2,4]
  for(let i = 0; i < n; i++){
    arr[i] = arr[i] - 1;
  }
  
  // Step 2: Count frequencies by adding n to positions
  // For each element arr[i], we use it as an index and add n to arr[arr[i] % n]
  // The modulo operation helps us get the original value even if it's been modified
  // 
  // How it works:
  // - arr[i] is now in [0, n-1] (0-based)
  // - We want to count how many times value arr[i] appears
  // - We use arr[i] as index and add n to arr[arr[i] % n]
  // - If arr[i] < n: arr[i] % n = arr[i] (original value)
  // - If arr[i] >= n: arr[i] % n gives the original 0-based value
  // - Each time we add n, we're incrementing the frequency count
  
  for(let i = 0; i < n; i++){
    // Get the index to update (use modulo to handle modified values)
    let index = arr[i] % n;
    // Add n to count frequency
    arr[index] += n;
  }
  
  // Step 3: Extract frequencies
  // After step 2: arr[i] = original_0based_value + n * frequency_count
  // To get frequency: divide by n
  // result[i] should represent frequency of (i+1) in 1-based indexing
  
  let result = [];
  for(let i = 0; i < n; i++){
    // Frequency of (i+1) is stored as arr[i] / n
    result.push(Math.floor(arr[i] / n));
  }
  
  return result;
}

// ============================================================================
// DETAILED EXAMPLE WITH VISUAL EXPLANATION:
// ============================================================================
//
// Input: arr = [2, 3, 2, 3, 5], n = 5
// We need: frequency of 1, 2, 3, 4, 5
// Expected: [0, 2, 2, 0, 1]
//
// ----------------------------------------------------------------------------
// STEP 1: Decrement all by 1 (make 0-based)
// ----------------------------------------------------------------------------
// Original:  [2,  3,  2,  3,  5]  (1-based values)
// After -1:  [1,  2,  1,  2,  4]  (0-based values: range [0, n-1])
//
// Why? Because array indices are 0-based, so value 'x' should be stored at index (x-1)
//
// ----------------------------------------------------------------------------
// STEP 2: Count frequencies using encoding
// ----------------------------------------------------------------------------
// We'll process each element and add 'n' to the position it represents
//
// Initial: arr = [1, 2, 1, 2, 4]
//
// i=0: Process arr[0] = 1
//   - This means we saw value 1 (which is original value 2)
//   - We want to count it at index 1
//   - index = 1 % 5 = 1
//   - arr[1] = 2 + 5 = 7
//   - State: [1, 7, 1, 2, 4]
//   - Meaning: arr[1] = 7 means "value 2 appears 1 time so far"
//
// i=1: Process arr[1] = 7
//   - This has been modified! Get original: 7 % 5 = 2
//   - This means we saw value 2 (which is original value 3)
//   - We want to count it at index 2
//   - index = 2 % 5 = 2
//   - arr[2] = 1 + 5 = 6
//   - State: [1, 7, 6, 2, 4]
//   - Meaning: arr[2] = 6 means "value 3 appears 1 time so far"
//
// i=2: Process arr[2] = 6
//   - This has been modified! Get original: 6 % 5 = 1
//   - This means we saw value 1 (which is original value 2) again
//   - We want to count it at index 1
//   - index = 1 % 5 = 1
//   - arr[1] = 7 + 5 = 12
//   - State: [1, 12, 6, 2, 4]
//   - Meaning: arr[1] = 12 means "value 2 appears 2 times so far"
//
// i=3: Process arr[3] = 2
//   - Original value: 2 (not modified)
//   - This means we saw value 2 (which is original value 3) again
//   - We want to count it at index 2
//   - index = 2 % 5 = 2
//   - arr[2] = 6 + 5 = 11
//   - State: [1, 12, 11, 2, 4]
//   - Meaning: arr[2] = 11 means "value 3 appears 2 times so far"
//
// i=4: Process arr[4] = 4
//   - Original value: 4 (not modified)
//   - This means we saw value 4 (which is original value 5)
//   - We want to count it at index 4
//   - index = 4 % 5 = 4
//   - arr[4] = 4 + 5 = 9
//   - State: [1, 12, 11, 2, 9]
//   - Meaning: arr[4] = 9 means "value 5 appears 1 time"
//
// Final state: [1, 12, 11, 2, 9]
//
// ----------------------------------------------------------------------------
// STEP 3: Decode frequencies
// ----------------------------------------------------------------------------
// Each position now contains: original_value + n * frequency
// To get frequency: divide by n
//
// arr[0] = 1:  1 / 5 = 0  → frequency of 1 is 0 ✓
// arr[1] = 12: 12 / 5 = 2 → frequency of 2 is 2 ✓
// arr[2] = 11: 11 / 5 = 2 → frequency of 3 is 2 ✓
// arr[3] = 2:  2 / 5 = 0  → frequency of 4 is 0 ✓
// arr[4] = 9:  9 / 5 = 1  → frequency of 5 is 1 ✓
//
// Result: [0, 2, 2, 0, 1]
//
// ----------------------------------------------------------------------------
// KEY TAKEAWAY:
// ----------------------------------------------------------------------------
// The magic is in encoding two numbers in one:
//   - Number = (original_value) + n * (frequency)
//   - We recover: original_value = Number % n
//   - We recover: frequency = Number / n
//
// Since original values are in [0, n-1], adding multiples of 'n' doesn't
// affect the modulo, but increases the quotient (which stores frequency)!

let arr = [2, 3, 2, 3, 5];
console.log(frequencyInLimited(arr)); // Expected: [0, 2, 2, 0, 1]