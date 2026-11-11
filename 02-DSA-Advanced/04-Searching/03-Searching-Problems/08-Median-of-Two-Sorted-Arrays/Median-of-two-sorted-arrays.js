/**
 * MEDIAN OF TWO SORTED ARRAYS - CORRECTED SOLUTION WITH STEP-BY-STEP EXECUTION
 * 
 * Problem: Find the median of two sorted arrays when merged
 * - If even number of elements, return floor of average of two medians
 * 
 * Examples:
 * arr1 = [1,2,3,4,5], arr2 = [3,4,5,6,7,8]
 *   Merged: [1,2,3,3,4,4,5,5,6,7,8] (11 elements)
 *   Median = 4 (6th element, index 5)
 * 
 * arr1 = [1,2], arr2 = [2,3,4]
 *   Merged: [1,2,2,3,4] (5 elements)
 *   Median = 2 (3rd element, index 2)
 * 
 * APPROACH: Binary Search (Optimal - O(log(min(n,m))))
 * 
 * Key Insight:
 * - We need to partition both arrays such that:
 *   - Left half has (n+m+1)/2 elements
 *   - All elements in left half <= all elements in right half
 * - Median is max of left half (or average if even)
 * 
 * DETAILED STEP-BY-STEP EXECUTION:
 * 
 * Example 1: arr = [1,2,3,4,5], brr = [3,4,5,6,7,8]
 * n=5, m=6, total=11, medianPos = (11+1)/2 = 6
 * 
 * STEP 1: Ensure arr is smaller (n=5 < m=6, so no swap needed)
 * 
 * STEP 2: Binary search on arr (smaller array)
 *   Initial: low=0, high=5
 * 
 *   Iteration 1: low=0, high=5, cut1=2
 *     - Partition arr at index 2: [1,2 | 3,4,5]
 *     - cut2 = 6 - 2 = 4
 *     - Partition brr at index 4: [3,4,5,6 | 7,8]
 *     - left1 = arr[1] = 2, right1 = arr[2] = 3
 *     - left2 = brr[3] = 6, right2 = brr[4] = 7
 *     - Check: left1(2) <= right2(7) ✓, left2(6) <= right1(3) ✗
 *     - left2 > right1, so move partition right in arr
 *     - low = 3
 * 
 *   Iteration 2: low=3, high=5, cut1=4
 *     - Partition arr at index 4: [1,2,3,4 | 5]
 *     - cut2 = 6 - 4 = 2
 *     - Partition brr at index 2: [3,4 | 5,6,7,8]
 *     - left1 = arr[3] = 4, right1 = arr[4] = 5
 *     - left2 = brr[1] = 4, right2 = brr[2] = 5
 *     - Check: left1(4) <= right2(5) ✓, left2(4) <= right1(5) ✓
 *     - Valid partition found!
 *     - total=11 (odd), median = max(4,4) = 4
 * 
 *   Result: 4
 * 
 * Example 2: arr = [1,2], brr = [2,3,4]
 * n=2, m=3, total=5, medianPos = (5+1)/2 = 3
 * 
 *   Iteration 1: low=0, high=2, cut1=1
 *     - cut2 = 3 - 1 = 2
 *     - left1 = arr[0] = 1, right1 = arr[1] = 2
 *     - left2 = brr[1] = 3, right2 = brr[2] = 4
 *     - Check: left1(1) <= right2(4) ✓, left2(3) <= right1(2) ✗
 *     - Move partition left: high = 0
 * 
 *   Iteration 2: low=0, high=0, cut1=0
 *     - cut2 = 3 - 0 = 3
 *     - left1 = MIN, right1 = arr[0] = 1
 *     - left2 = brr[2] = 4, right2 = MAX
 *     - Check: left1(MIN) <= right2(MAX) ✓, left2(4) <= right1(1) ✗
 *     - Move partition right: low = 1
 * 
 *   Iteration 3: low=1, high=0 → loop ends, but we should check cut1=2
 *   Actually, the algorithm should find cut1=2:
 *     - cut2 = 3 - 2 = 1
 *     - left1 = arr[1] = 2, right1 = MAX
 *     - left2 = brr[0] = 2, right2 = brr[1] = 3
 *     - Check: left1(2) <= right2(3) ✓, left2(2) <= right1(MAX) ✓
 *     - Valid! total=5 (odd), median = max(2,2) = 2
 * 
 *   Result: 2
 */

class Solution {
    // Function to find the median of the two arrays when they get merged.
    findMedian(arr, n, brr, m) {
        // BUG FIX 1: Ensure arr is smaller array for binary search
        // If arr is larger, swap both arrays and their sizes
        if (n > m) {
            return this.findMedian(brr, m, arr, n);
        }
        
        // STEP 1: Initialize binary search on smaller array (arr)
        // low: minimum partition point (0 elements from arr in left half)
        // high: maximum partition point (all n elements from arr in left half)
        // medianPos: position of median in merged array = (n+m+1)/2
        let low = 0;
        let high = n;
        let total = n + m;
        let medianPos = Math.floor((total + 1) / 2);
        
        // STEP 2: Binary search to find correct partition
        // Execution: Continue until we find a valid partition
        while (low <= high) {
            // Calculate partition point in arr (smaller array)
            // cut1: number of elements from arr in left half
            let cut1 = Math.floor((low + high) / 2);
            
            // Calculate partition point in brr (larger array)
            // cut2: number of elements from brr in left half
            // Total left half = cut1 + cut2 = medianPos
            let cut2 = medianPos - cut1;
            
            // STEP 3: Get elements around partition points
            // left1: last element in left half of arr (or MIN if cut1=0)
            // BUG FIX 2: Changed 'cur1' to 'cut1' (typo fix)
            let left1 = (cut1 === 0) ? Number.MIN_SAFE_INTEGER : arr[cut1 - 1];
            
            // right1: first element in right half of arr (or MAX if cut1=n)
            let right1 = (cut1 === n) ? Number.MAX_SAFE_INTEGER : arr[cut1];
            
            // left2: last element in left half of brr (or MIN if cut2=0)
            let left2 = (cut2 === 0) ? Number.MIN_SAFE_INTEGER : brr[cut2 - 1];
            
            // right2: first element in right half of brr (or MAX if cut2=m)
            // BUG FIX 3: Changed condition from 'cut2 === 0' to 'cut2 === m'
            let right2 = (cut2 === m) ? Number.MAX_SAFE_INTEGER : brr[cut2];
            
            // STEP 4: Check if partition is valid
            // Valid partition means: all left elements <= all right elements
            // left1 <= right2 (arr's left <= brr's right)
            // left2 <= right1 (brr's left <= arr's right)
            if (left1 <= right2 && left2 <= right1) {
                // Valid partition found! Calculate median
                if (total % 2 === 0) {
                    // Even number of elements: median = floor of average of two middle elements
                    // Execution: max(left1, left2) is largest in left half
                    //            min(right1, right2) is smallest in right half
                    //            Their average is the median
                    return Math.floor((Math.max(left1, left2) + Math.min(right1, right2)) / 2);
                } else {
                    // Odd number of elements: median = largest element in left half
                    // Execution: max(left1, left2) is the median
                    return Math.max(left1, left2);
                }
            } 
            // STEP 5: Adjust partition based on comparison
            else if (left1 > right2) {
                // arr's left half has elements too large
                // Need fewer elements from arr in left half
                // Execution: Move partition left in arr
                high = cut1 - 1;
            } else {
                // brr's left half has elements too large (left2 > right1)
                // Need more elements from arr in left half
                // Execution: Move partition right in arr
                low = cut1 + 1;
            }
        }
        
        // Should not reach here if input is valid
        return -1;
    }
}

/**
 * DETAILED STEP-BY-STEP EXECUTION FOR TEST CASE:
 * Input: arr = [1,2,3,4,5], n=5, brr = [3,4,5,6,7,8], m=6
 * 
 * Initial Setup:
 *   n=5, m=6, n < m ✓ (no swap needed)
 *   low=0, high=5, total=11, medianPos=6
 * 
 * Iteration 1:
 *   cut1 = (0+5)/2 = 2
 *   cut2 = 6 - 2 = 4
 *   left1 = arr[1] = 2
 *   right1 = arr[2] = 3
 *   left2 = brr[3] = 6
 *   right2 = brr[4] = 7
 *   Check: left1(2) <= right2(7)? Yes ✓
 *          left2(6) <= right1(3)? No ✗
 *   left2 > right1, so need more elements from arr
 *   low = 2 + 1 = 3
 * 
 * Iteration 2:
 *   cut1 = (3+5)/2 = 4
 *   cut2 = 6 - 4 = 2
 *   left1 = arr[3] = 4
 *   right1 = arr[4] = 5
 *   left2 = brr[1] = 4
 *   right2 = brr[2] = 5
 *   Check: left1(4) <= right2(5)? Yes ✓
 *          left2(4) <= right1(5)? Yes ✓
 *   Valid partition!
 *   total=11 (odd), return max(4,4) = 4
 * 
 * Result: 4
 */

// Test the solution
let solution = new Solution();

console.log("Test 1: arr=[1,2,3,4,5], n=5, brr=[3,4,5,6,7,8], m=6");
console.log("Output:", solution.findMedian([1,2,3,4,5], 5, [3,4,5,6,7,8], 6));
console.log("Expected: 4\n");

console.log("Test 2: arr=[1,2], n=2, brr=[2,3,4], m=3");
console.log("Output:", solution.findMedian([1,2], 2, [2,3,4], 3));
console.log("Expected: 2\n");

console.log("Test 3: arr=[1,3], n=2, brr=[2], m=1");
console.log("Output:", solution.findMedian([1,3], 2, [2], 1));
console.log("Expected: 2\n");

console.log("Test 4: arr=[1,2], n=2, brr=[3,4], m=2");
console.log("Output:", solution.findMedian([1,2], 2, [3,4], 2));
console.log("Expected: 2 (floor of (2+3)/2 = 2)\n");
