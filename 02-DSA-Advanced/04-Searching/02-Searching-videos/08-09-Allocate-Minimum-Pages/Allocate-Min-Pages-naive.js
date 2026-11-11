let depth = 0; // Track recursion depth for indentation

/**
 * NAIVE RECURSIVE SOLUTION - Step by Step Execution:
 * 
 * Problem: Allocate minimum pages to k students such that:
 * - Each student gets contiguous books
 * - Maximum pages allocated to any student is minimized
 * 
 * Approach: Try all possible partitions recursively
 * 
 * Example: arr = [10,20,30,40], k = 2
 * 
 * Execution Flow:
 * 1. Call AllocateMinpages([10,20,30,40], 4, 2)
 *    - Try partition at i=1: [10] | [20,30,40]
 *      - Left: AllocateMinpages([10], 1, 1) → returns 10 (base case k=1)
 *      - Right: sum([20,30,40]) = 90
 *      - Max(10, 90) = 90
 *    - Try partition at i=2: [10,20] | [30,40]
 *      - Left: AllocateMinpages([10,20], 2, 1) → returns 30 (base case k=1)
 *      - Right: sum([30,40]) = 70
 *      - Max(30, 70) = 70
 *    - Try partition at i=3: [10,20,30] | [40]
 *      - Left: AllocateMinpages([10,20,30], 3, 1) → returns 60 (base case k=1)
 *      - Right: sum([40]) = 40
 *      - Max(60, 40) = 60
 *    - Result: min(90, 70, 60) = 60
 */
function AllocateMinpages(arr , n , k){
  const indent = "  ".repeat(depth);
  console.log(`${indent}📥 AllocateMinpages called: n=${n}, k=${k}, arr[0..${n-1}]=[${arr.slice(0, n).join(',')}]`);
  depth++;
  
  // Base Case 1: If only 1 student (k=1), they get all remaining books
  // Step: Calculate sum of all books from index 0 to n-1
  // Example: If k=1, n=4, arr=[10,20,30,40] → return 10+20+30+40 = 100
  if( k === 1){
    const result = sum(arr , 0 , n-1);
    console.log(`${indent}✅ Base case (k=1): Returning sum of arr[0..${n-1}] = ${result}`);
    depth--;
    return result;
  }
  
  // Base Case 2: If only 1 book (n=1), return that book's pages
  // Step: Single book must be allocated to one student
  // Example: If n=1, arr=[10] → return 10
  if(n === 1){
    console.log(`${indent}✅ Base case (n=1): Returning arr[0] = ${arr[0]}`);
    depth--;
    return arr[0];
  }
  
  // Recursive Case: Try all possible partition points
  // Step: For each partition point i (from 1 to n-1):
  //   1. Allocate books [0..i-1] to k-1 students (recursive call)
  //   2. Allocate books [i..n-1] to 1 student (sum)
  //   3. Take maximum of both parts (worst case student)
  //   4. Take minimum of all such partitions (best solution)
  let res = Number.POSITIVE_INFINITY;
  console.log(`${indent}🔄 Starting loop: Trying all possible partitions...`);
  for(let i =1;i<n;i++){
    console.log(`${indent}  └─ Iteration i=${i}: Partition at index ${i}`);
    console.log(`${indent}     ├─ Left part: arr[0..${i-1}] → Recursive call with n=${i}, k=${k-1}`);
    
    // Step: Recursively solve for left part [0..i-1] with k-1 students
    // This finds minimum max pages for first i books with k-1 students
    const leftResult = AllocateMinpages(arr , i , k-1);
    console.log(`${indent}     ├─ Left result: ${leftResult}`);
    
    // Step: Calculate sum of right part [i..n-1]
    // This is the pages allocated to the last student
    const rightSum = sum(arr  , i , n-1);
    console.log(`${indent}     ├─ Right part: arr[${i}..${n-1}] → Sum = ${rightSum}`);
    
    // Step: Maximum pages any student gets in this partition
    // We need to minimize the maximum (minimize worst case)
    const currentMax = Math.max(leftResult, rightSum);
    console.log(`${indent}     ├─ Max of (left=${leftResult}, right=${rightSum}) = ${currentMax}`);
    
    // Step: Update result with minimum of all partition attempts
    // This ensures we find the partition that minimizes maximum pages
    res = Math.min(res, currentMax);
    console.log(`${indent}     └─ Updated res: min(${res === Number.POSITIVE_INFINITY ? '∞' : res}, ${currentMax}) = ${res}`);
  }
  console.log(`${indent}✅ Returning final result: ${res}`);
  depth--;
  return res;
}

/**
 * Helper function to calculate sum of array elements from begin to end
 * Step: Iterate through indices begin to end (inclusive) and sum all values
 * Example: sum([10,20,30,40], 1, 3) → 20+30+40 = 90
 */
function sum(arr , begin , end){
  let s = 0;
  for(let i = begin;i<=end;i++){
    s += arr[i];
  }
  return s;
}
let arr = [10,20,30,40];
let n = arr.length;
let k = 2;
console.log("=".repeat(60));
console.log("🚀 NAIVE RECURSIVE SOLUTION - STEP BY STEP EXECUTION");
console.log("=".repeat(60));
console.log(`Input: arr = [${arr.join(',')}], k = ${k} students\n`);
console.log(AllocateMinpages(arr , n , k));
console.log("\n" + "=".repeat(60));