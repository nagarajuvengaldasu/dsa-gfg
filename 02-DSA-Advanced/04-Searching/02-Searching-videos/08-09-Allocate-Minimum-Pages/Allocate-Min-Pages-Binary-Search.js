/**
 * BINARY SEARCH SOLUTION - Step by Step Execution:
 * 
 * Problem: Allocate minimum pages to k students such that:
 * - Each student gets contiguous books
 * - Maximum pages allocated to any student is minimized
 * 
 * Approach: Binary search on answer (minimum maximum pages)
 * 
 * Key Insight:
 * - Minimum possible answer = maximum element (one student gets largest book)
 * - Maximum possible answer = sum of all elements (one student gets all books)
 * - Use binary search to find minimum feasible value
 * 
 * DETAILED STEP-BY-STEP EXECUTION:
 * Example: arr = [10,20,30,40], k = 2
 * 
 * STEP 1: Calculate sum and maximum
 *   i=0: arr[0]=10, sum=10, mx=10
 *   i=1: arr[1]=20, sum=30, mx=20
 *   i=2: arr[2]=30, sum=60, mx=30
 *   i=3: arr[3]=40, sum=100, mx=40
 *   Final: sum=100, mx=40
 * 
 * STEP 2: Initialize binary search range
 *   low = mx = 40 (minimum possible answer)
 *   high = sum = 100 (maximum possible answer)
 * 
 * STEP 3: Binary Search Loop
 * 
 *   Iteration 1: low=40, high=100, mid=70
 *     - Check if 70 pages is feasible for 2 students
 *     - isFeasible([10,20,30,40], 2, 70):
 *         i=0: arr[0]=10, sum=10 ≤ 70 ✓
 *         i=1: arr[1]=20, sum=30 ≤ 70 ✓
 *         i=2: arr[2]=30, sum=60 ≤ 70 ✓
 *         i=3: arr[3]=40, sum+40=100 > 70 ✗
 *         → Need new student! req=2, sum=40
 *       Result: req=2 ≤ k=2 → Feasible ✓
 *     - Feasible! Update: res=70, high=69 (search for smaller value)
 * 
 *   Iteration 2: low=40, high=69, mid=54
 *     - Check if 54 pages is feasible
 *     - isFeasible([10,20,30,40], 2, 54):
 *         i=0: arr[0]=10, sum=10 ≤ 54 ✓
 *         i=1: arr[1]=20, sum=30 ≤ 54 ✓
 *         i=2: arr[2]=30, sum+30=60 > 54 ✗
 *         → Need new student! req=2, sum=30
 *         i=3: arr[3]=40, sum+40=70 > 54 ✗
 *         → Need new student! req=3, sum=40
 *       Result: req=3 > k=2 → Not feasible ✗
 *     - Not feasible! Update: low=55 (need more pages)
 * 
 *   Iteration 3: low=55, high=69, mid=62
 *     - Check if 62 pages is feasible
 *     - isFeasible([10,20,30,40], 2, 62):
 *         i=0: arr[0]=10, sum=10 ≤ 62 ✓
 *         i=1: arr[1]=20, sum=30 ≤ 62 ✓
 *         i=2: arr[2]=30, sum=60 ≤ 62 ✓
 *         i=3: arr[3]=40, sum+40=100 > 62 ✗
 *         → Need new student! req=2, sum=40
 *       Result: req=2 ≤ k=2 → Feasible ✓
 *     - Feasible! Update: res=62, high=61 (search for smaller value)
 * 
 *   Iteration 4: low=55, high=61, mid=58
 *     - Check if 58 pages is feasible
 *     - isFeasible([10,20,30,40], 2, 58):
 *         i=0: arr[0]=10, sum=10 ≤ 58 ✓
 *         i=1: arr[1]=20, sum=30 ≤ 58 ✓
 *         i=2: arr[2]=30, sum+30=60 > 58 ✗
 *         → Need new student! req=2, sum=30
 *         i=3: arr[3]=40, sum+40=70 > 58 ✗
 *         → Need new student! req=3, sum=40
 *       Result: req=3 > k=2 → Not feasible ✗
 *     - Not feasible! Update: low=59
 * 
 *   Iteration 5: low=59, high=61, mid=60
 *     - Check if 60 pages is feasible
 *     - isFeasible([10,20,30,40], 2, 60):
 *         i=0: arr[0]=10, sum=10 ≤ 60 ✓
 *         i=1: arr[1]=20, sum=30 ≤ 60 ✓
 *         i=2: arr[2]=30, sum=60 ≤ 60 ✓
 *         i=3: arr[3]=40, sum+40=100 > 60 ✗
 *         → Need new student! req=2, sum=40
 *       Result: req=2 ≤ k=2 → Feasible ✓
 *     - Feasible! Update: res=60, high=59 (search for smaller value)
 * 
 *   Iteration 6: low=59, high=59, mid=59
 *     - Check if 59 pages is feasible
 *     - isFeasible([10,20,30,40], 2, 59):
 *         i=0: arr[0]=10, sum=10 ≤ 59 ✓
 *         i=1: arr[1]=20, sum=30 ≤ 59 ✓
 *         i=2: arr[2]=30, sum+30=60 > 59 ✗
 *         → Need new student! req=2, sum=30
 *         i=3: arr[3]=40, sum+40=70 > 59 ✗
 *         → Need new student! req=3, sum=40
 *       Result: req=3 > k=2 → Not feasible ✗
 *     - Not feasible! Update: low=60
 * 
 *   Loop ends: low=60, high=59 → low > high
 * 
 * STEP 4: Return result
 *   Final result: res=60
 * 
 * Result: 60 pages (minimum maximum pages that can be allocated to 2 students)
 */
function minpages(arr , k){
  let n = arr.length;
  let sum = 0;
  let mx = 0;
  
  // Step 1: Calculate total sum and maximum element
  // Purpose: Determine binary search range
  // - mx: Minimum possible answer (at least one student gets the largest book)
  // - sum: Maximum possible answer (one student could get all books)
  // Execution: Iterate through array, accumulate sum and track maximum
  // Example: arr=[10,20,30,40] → sum=100, mx=40
  for(let i = 0; i < n; i++){
    sum += arr[i];
    mx = Math.max(mx, arr[i]);
  }
  
  // Step 2: Initialize binary search boundaries
  // low: Minimum possible answer (cannot be less than largest book)
  // high: Maximum possible answer (cannot be more than total sum)
  // Execution: Set low=mx, high=sum to define search space
  let low = mx;
  let high = sum;
  let res = 0;

  // Step 3: Binary search for minimum feasible value
  // For each mid value, check if it's feasible to allocate with k students
  // If feasible: try smaller value (high = mid - 1) - we found a valid answer, try better
  // If not feasible: need more pages (low = mid + 1) - current limit too small
  // Execution: Continue until low > high, then res contains the answer
  while(low <= high){
    // Calculate middle value of current search range
    let mid = Math.floor((low + high) / 2);
    
    // Check if mid pages can be allocated to k students
    // isFeasible returns true if we can allocate all books with ≤k students
    // Execution: Greedily assign books to students, count how many needed
    const feasible = isFeasible(arr, k, mid);
    
    if(feasible){
      // If feasible, this is a potential answer
      // Try to find smaller feasible value (better answer)
      // Execution: Save current mid as result, search in lower half
      res = mid;
      high = mid - 1;
    }
    else{
      // If not feasible, we need more pages per student
      // Search in upper half (need larger limit)
      // Execution: Current mid is too small, increase low
      low = mid + 1;
    }
  }
  
  // Step 4: Return the minimum maximum pages found
  // Execution: res contains the optimal answer after binary search completes
  return res;
}

/**
 * Feasibility Check Function - Step by Step:
 * 
 * Purpose: Check if we can allocate all books with at most k students
 *          when each student can get at most 'ans' pages
 * 
 * Algorithm:
 * 1. Start with first student (req = 1)
 * 2. Greedily assign books to current student
 * 3. If adding next book exceeds 'ans', start new student
 * 4. Count total students needed
 * 5. Return true if req <= k
 * 
 * DETAILED STEP-BY-STEP EXECUTION:
 * 
 * Example 1: arr=[10,20,30,40], k=2, ans=70
 *   Initial: req=1, sum=0
 *   
 *   i=0: arr[0]=10, sum=0+10=10 ≤ 70 ✓ → sum=10
 *   i=1: arr[1]=20, sum=10+20=30 ≤ 70 ✓ → sum=30
 *   i=2: arr[2]=30, sum=30+30=60 ≤ 70 ✓ → sum=60
 *   i=3: arr[3]=40, sum=60+40=100 > 70 ✗
 *     - Need new student: req=2, sum=40
 *   
 *   Final: req=2 ≤ k=2 → Feasible ✓
 *   Allocation: Student 1 gets [10,20,30] (60 pages), Student 2 gets [40] (40 pages)
 * 
 * Example 2: arr=[10,20,30,40], k=2, ans=54
 *   Initial: req=1, sum=0
 *   
 *   i=0: arr[0]=10, sum=10 ≤ 54 ✓ → sum=10
 *   i=1: arr[1]=20, sum=30 ≤ 54 ✓ → sum=30
 *   i=2: arr[2]=30, sum=30+30=60 > 54 ✗
 *     - Need new student: req=2, sum=30
 *   i=3: arr[3]=40, sum=30+40=70 > 54 ✗
 *     - Need new student: req=3, sum=40
 *   
 *   Final: req=3 > k=2 → Not feasible ✗
 *   Allocation would need 3 students, but only 2 available
 * 
 * Example 3: arr=[10,20,30,40], k=2, ans=60
 *   Initial: req=1, sum=0
 *   
 *   i=0: arr[0]=10, sum=10 ≤ 60 ✓ → sum=10
 *   i=1: arr[1]=20, sum=30 ≤ 60 ✓ → sum=30
 *   i=2: arr[2]=30, sum=60 ≤ 60 ✓ → sum=60
 *   i=3: arr[3]=40, sum=60+40=100 > 60 ✗
 *     - Need new student: req=2, sum=40
 *   
 *   Final: req=2 ≤ k=2 → Feasible ✓
 *   Allocation: Student 1 gets [10,20,30] (60 pages), Student 2 gets [40] (40 pages)
 */
function isFeasible(arr, k, ans){
  // Number of students required (start with 1)
  // Execution: Initialize with first student
  let req = 1;
  
  // Current sum of pages for current student
  // Execution: Track pages assigned to current student
  let sum = 0;
  
  // Greedily assign books to students
  // Execution: Process each book, try to add to current student
  for(let i = 0; i < arr.length; i++){
    // Check if adding current book to current student exceeds limit
    if(sum + arr[i] > ans){
      // If exceeds, we need a new student
      // Start new student with current book
      // Execution: Increment student count, reset sum to current book
      req++;
      sum = arr[i];
    }
    else{
      // Can add to current student
      // Execution: Add book to current student's pages
      sum = sum + arr[i];
    }
  }
  
  // Check if we can allocate with available students
  // If req <= k, it's feasible; otherwise not
  // Execution: Compare required students with available students
  return (req <= k);
}

// Test case
let arr = [10, 20, 30, 40];
let k = 2;
console.log(minpages(arr, k)); // Expected output: 60
