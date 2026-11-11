/**
 * SUBSET SUM PROBLEM - Count number of subsets with given sum
 * Problem: Given an array of integers and a target sum, count the number of subsets
 * (non-empty or empty) whose elements sum to the target value.
 * 
 * Time Complexity: O(2^n) - exponential, as we explore all possible subsets
 * Space Complexity: O(n) - maximum depth of recursion stack is n
 * 
 * KEY INSIGHT: For each element, we have two choices:
 * 1. Include the element in the subset (reduce sum by element value)
 * 2. Exclude the element from the subset (keep sum unchanged)
 * We count all paths that lead to sum = 0
 */

function subsetSum(arr, sum, n){
  // Step 1: Base Case - If we've processed all elements (n === 0)
  // Check if the remaining sum is exactly 0
  // - If sum === 0: We found a valid subset, return 1 (count this subset)
  // - If sum !== 0: This path doesn't lead to a valid subset, return 0
  // Example: n=0, sum=0 → return 1 (empty subset sums to 0)
  //          n=0, sum=5 → return 0 (no way to get sum 5 with 0 elements)
  if(n === 0){
    return (sum === 0) ? 1 : 0;
  }
  
  // Step 2: Recursive Case - For the current element arr[n-1], we have two choices:
  // 
  // Choice 1: Exclude arr[n-1] from the subset
  //   - Don't use the last element
  //   - Recursively solve for remaining n-1 elements with the same sum
  //   - Call: subsetSum(arr, sum, n-1)
  //   Example: arr=[10,20,15], sum=30, n=3
  //            Exclude 15, solve for [10,20] with sum=30
  //
  // Choice 2: Include arr[n-1] in the subset
  //   - Use the last element (arr[n-1])
  //   - Reduce the target sum by arr[n-1]
  //   - Recursively solve for remaining n-1 elements with reduced sum
  //   - Call: subsetSum(arr, sum - arr[n-1], n-1)
  //   Example: arr=[10,20,15], sum=30, n=3
  //            Include 15, solve for [10,20] with sum=30-15=15
  //
  // Total count = count from excluding + count from including
  // This explores all possible subsets and counts those that sum to target
  return subsetSum(arr, sum, n-1) + subsetSum(arr, sum - arr[n-1], n-1);
}

// Step-by-step execution example:
// Input: arr = [10, 20, 15], sum = 30, n = 3
// We want to count subsets that sum to 30
// Possible subsets: [10, 20], [15] (wait, 15 != 30, let me recalculate)
// Actually: [10, 20] sums to 30, that's one subset
//
// Call: subsetSum([10, 20, 15], 30, 3)
//   n=3, sum=30, arr[n-1] = arr[2] = 15
//   Check: n === 0? No
//   
//   Choice 1: Exclude arr[2]=15
//   Call: subsetSum([10, 20, 15], 30, 2)
//     n=2, sum=30, arr[n-1] = arr[1] = 20
//     Check: n === 0? No
//     
//     Choice 1.1: Exclude arr[1]=20
//     Call: subsetSum([10, 20, 15], 30, 1)
//       n=1, sum=30, arr[n-1] = arr[0] = 10
//       Check: n === 0? No
//       
//       Choice 1.1.1: Exclude arr[0]=10
//       Call: subsetSum([10, 20, 15], 30, 0)
//         n=0, sum=30
//         Check: n === 0? Yes (BASE CASE)
//         Check: sum === 0? No (30 !== 0)
//         Return: 0
//       
//       Choice 1.1.2: Include arr[0]=10
//       Call: subsetSum([10, 20, 15], 30-10, 0)
//         = subsetSum([10, 20, 15], 20, 0)
//         n=0, sum=20
//         Check: n === 0? Yes (BASE CASE)
//         Check: sum === 0? No (20 !== 0)
//         Return: 0
//       
//       Back to subsetSum([10, 20, 15], 30, 1):
//         Return: 0 + 0 = 0
//     
//     Choice 1.2: Include arr[1]=20
//     Call: subsetSum([10, 20, 15], 30-20, 1)
//       = subsetSum([10, 20, 15], 10, 1)
//       n=1, sum=10, arr[n-1] = arr[0] = 10
//       Check: n === 0? No
//       
//       Choice 1.2.1: Exclude arr[0]=10
//       Call: subsetSum([10, 20, 15], 10, 0)
//         n=0, sum=10
//         Check: n === 0? Yes (BASE CASE)
//         Check: sum === 0? No (10 !== 0)
//         Return: 0
//       
//       Choice 1.2.2: Include arr[0]=10
//       Call: subsetSum([10, 20, 15], 10-10, 0)
//         = subsetSum([10, 20, 15], 0, 0)
//         n=0, sum=0
//         Check: n === 0? Yes (BASE CASE)
//         Check: sum === 0? Yes ✅
//         Return: 1 (Found subset [10, 20] that sums to 30)
//       
//       Back to subsetSum([10, 20, 15], 10, 1):
//         Return: 0 + 1 = 1
//     
//     Back to subsetSum([10, 20, 15], 30, 2):
//       Return: 0 + 1 = 1
//   
//   Choice 2: Include arr[2]=15
//   Call: subsetSum([10, 20, 15], 30-15, 2)
//     = subsetSum([10, 20, 15], 15, 2)
//     n=2, sum=15, arr[n-1] = arr[1] = 20
//     Check: n === 0? No
//     
//     Choice 2.1: Exclude arr[1]=20
//     Call: subsetSum([10, 20, 15], 15, 1)
//       n=1, sum=15, arr[n-1] = arr[0] = 10
//       Check: n === 0? No
//       
//       Choice 2.1.1: Exclude arr[0]=10
//       Call: subsetSum([10, 20, 15], 15, 0)
//         n=0, sum=15
//         Check: n === 0? Yes (BASE CASE)
//         Check: sum === 0? No (15 !== 0)
//         Return: 0
//       
//       Choice 2.1.2: Include arr[0]=10
//       Call: subsetSum([10, 20, 15], 15-10, 0)
//         = subsetSum([10, 20, 15], 5, 0)
//         n=0, sum=5
//         Check: n === 0? Yes (BASE CASE)
//         Check: sum === 0? No (5 !== 0)
//         Return: 0
//       
//       Back to subsetSum([10, 20, 15], 15, 1):
//         Return: 0 + 0 = 0
//     
//     Choice 2.2: Include arr[1]=20
//     Call: subsetSum([10, 20, 15], 15-20, 1)
//       = subsetSum([10, 20, 15], -5, 1)
//       n=1, sum=-5, arr[n-1] = arr[0] = 10
//       Check: n === 0? No
//       
//       Choice 2.2.1: Exclude arr[0]=10
//       Call: subsetSum([10, 20, 15], -5, 0)
//         n=0, sum=-5
//         Check: n === 0? Yes (BASE CASE)
//         Check: sum === 0? No (-5 !== 0)
//         Return: 0
//       
//       Choice 2.2.2: Include arr[0]=10
//       Call: subsetSum([10, 20, 15], -5-10, 0)
//         = subsetSum([10, 20, 15], -15, 0)
//         n=0, sum=-15
//         Check: n === 0? Yes (BASE CASE)
//         Check: sum === 0? No (-15 !== 0)
//         Return: 0
//       
//       Back to subsetSum([10, 20, 15], -5, 1):
//         Return: 0 + 0 = 0
//     
//     Back to subsetSum([10, 20, 15], 15, 2):
//       Return: 0 + 0 = 0
//   
//   Back to subsetSum([10, 20, 15], 30, 3):
//     Return: 1 + 0 = 1
//
// Result: 1 (There is 1 subset [10, 20] that sums to 30)

// Visual representation of the recursion tree:
//                           subsetSum([10,20,15], 30, 3)
//                          /                              \
//            Exclude 15                                    Include 15
//         subsetSum(30, 2)                            subsetSum(15, 2)
//        /              \                              /              \
//   Exclude 20      Include 20                  Exclude 20      Include 20
//  subsetSum(30,1) subsetSum(10,1)            subsetSum(15,1) subsetSum(-5,1)
//  /          \      /          \              /          \      /          \
// Ex 10   In 10  Ex 10   In 10            Ex 10   In 10  Ex 10   In 10
//  0        0     0        1 ✅              0        0     0        0
//
// Only one path leads to sum=0: [10, 20] (excluding 15, including 20, including 10)

// Step-by-step execution example 2:
// Input: arr = [2, 3, 5], sum = 5, n = 3
// We want to count subsets that sum to 5
// Possible subsets: [2, 3], [5] → 2 subsets
//
// Call: subsetSum([2, 3, 5], 5, 3)
//   Exclude 5: subsetSum([2, 3, 5], 5, 2)
//     Exclude 3: subsetSum([2, 3, 5], 5, 1)
//       Exclude 2: subsetSum([2, 3, 5], 5, 0) → 0 (sum=5 !== 0)
//       Include 2: subsetSum([2, 3, 5], 3, 0) → 0 (sum=3 !== 0)
//       Return: 0 + 0 = 0
//     Include 3: subsetSum([2, 3, 5], 2, 1)
//       Exclude 2: subsetSum([2, 3, 5], 2, 0) → 0 (sum=2 !== 0)
//       Include 2: subsetSum([2, 3, 5], 0, 0) → 1 ✅ (sum=0, found [2,3])
//       Return: 0 + 1 = 1
//     Return: 0 + 1 = 1
//   Include 5: subsetSum([2, 3, 5], 0, 2)
//     Exclude 3: subsetSum([2, 3, 5], 0, 1)
//       Exclude 2: subsetSum([2, 3, 5], 0, 0) → 1 ✅ (sum=0, found [5])
//       Include 2: subsetSum([2, 3, 5], -2, 0) → 0 (sum=-2 !== 0)
//       Return: 1 + 0 = 1
//     Include 3: subsetSum([2, 3, 5], -3, 1)
//       Exclude 2: subsetSum([2, 3, 5], -3, 0) → 0 (sum=-3 !== 0)
//       Include 2: subsetSum([2, 3, 5], -5, 0) → 0 (sum=-5 !== 0)
//       Return: 0 + 0 = 0
//     Return: 1 + 0 = 1
//   Return: 1 + 1 = 2
//
// Result: 2 (Subsets [2, 3] and [5] both sum to 5)

// WHY THIS ALGORITHM WORKS:
// The algorithm explores all possible subsets by making two choices at each element:
// 1. Include the element → reduce sum by element value
// 2. Exclude the element → keep sum unchanged
//
// When we reach n=0 (all elements processed):
// - If sum === 0: We found a valid subset (the choices we made sum to target)
// - If sum !== 0: This path doesn't lead to a valid subset
//
// By summing the counts from both choices, we count all valid subsets.

// OPTIMIZATION NOTE:
// This naive approach has exponential time complexity O(2^n)
// For better performance, use Dynamic Programming with memoization:
// - Time: O(n × sum)
// - Space: O(n × sum)
// The DP approach stores results of subproblems to avoid recalculating them

let arr = [10, 20, 15];
let sum = 30;
let n = arr.length;
console.log(subsetSum(arr, sum, n)); // Expected output: 1
