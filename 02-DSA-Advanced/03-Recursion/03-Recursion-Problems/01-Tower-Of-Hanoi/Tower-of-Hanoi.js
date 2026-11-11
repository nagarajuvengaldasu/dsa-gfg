/**
 * TOWER OF HANOI - Count Total Moves
 * Problem: Count the total number of moves required to solve Tower of Hanoi
 * with n disks, moving from 'from' rod to 'to' rod using 'aux' as auxiliary
 * 
 * Time Complexity: O(2^n) - exponential, as we make 2 recursive calls at each level
 * Space Complexity: O(n) - maximum depth of recursion stack is n
 * 
 * KEY INSIGHT: To move n disks from 'from' to 'to':
 * 1. Move n-1 disks from 'from' to 'aux' (using 'to' as temporary) → count moves
 * 2. Move the largest disk (1 move) → count this move
 * 3. Move n-1 disks from 'aux' to 'to' (using 'from' as temporary) → count moves
 * Total moves = 2^n - 1
 */

function towerOfHanoi(n , from, to, aux){
  // Step 1: Initialize count to 0
  // This will accumulate the total number of moves
  let count = 0;
  
  // Step 2: Base Case - If only 1 disk remains
  // Moving 1 disk requires exactly 1 move
  // Return 1 to count this move
  // Example: n=1, from="A", to="B" → return 1 (1 move needed)
  if(n === 1){
    count++;
    return count;
  }
  
  // Step 3: Recursive Case - Move n-1 disks from 'from' to 'aux'
  // We use 'to' as the auxiliary rod for this step
  // This clears the way for the largest disk to be moved
  // Add the count of moves needed for this step
  // Example: n=3, from="A", to="B", aux="C"
  //   Move 2 disks from A to C (using B as auxiliary)
  count += towerOfHanoi(n-1 , from , aux , to);
  
  // Step 4: Move the largest disk (n) from 'from' to 'to'
  // Now that n-1 disks are out of the way, we can move the largest disk
  // This is exactly 1 move, so increment count by 1
  // Example: n=3, from="A", to="B" → Move disk 3 from A to B (1 move)
  count++;
  
  // Step 5: Recursive Case - Move n-1 disks from 'aux' to 'to'
  // We use 'from' as the auxiliary rod for this step
  // This completes the transfer of all n disks to destination
  // Add the count of moves needed for this step
  // Example: n=3, aux="C", to="B", from="A"
  //   Move 2 disks from C to B (using A as auxiliary)
  count += towerOfHanoi(n-1 , aux , to , from);
  
  // Step 6: Return the total count of moves
  // This is the sum of moves from all three steps
  return count;
}

// Step-by-step execution example:
// Input: n = 3, from = "A", to = "B", aux = "C"
// We want to count moves to move 3 disks from A to B
// Expected result: 7 moves (2^3 - 1 = 7)
//
// Call: towerOfHanoi(3, "A", "B", "C")
//   n=3, from="A", to="B", aux="C"
//   count = 0
//   Check: n === 1? No
//   
//   Step 3: Move n-1=2 disks from A to C (using B as auxiliary)
//   Call: towerOfHanoi(2, "A", "C", "B")
//     n=2, from="A", to="C", aux="B"
//     count = 0
//     Check: n === 1? No
//     
//     Step 3.1: Move 1 disk from A to B
//     Call: towerOfHanoi(1, "A", "B", "C")
//       n=1, from="A", to="B", aux="C"
//       count = 0
//       Check: n === 1? Yes (BASE CASE)
//       count = 0 + 1 = 1
//       Return: 1
//     After Step 3.1: count = 0 + 1 = 1
//     
//     Step 3.2: Move largest disk (2) from A to C
//     count = 1 + 1 = 2
//     
//     Step 3.3: Move 1 disk from B to C
//     Call: towerOfHanoi(1, "B", "C", "A")
//       n=1, from="B", to="C", aux="A"
//       count = 0
//       Check: n === 1? Yes (BASE CASE)
//       count = 0 + 1 = 1
//       Return: 1
//     After Step 3.3: count = 2 + 1 = 3
//     Return: 3
//   After Step 3: count = 0 + 3 = 3
//   
//   Step 4: Move largest disk (3) from A to B
//   count = 3 + 1 = 4
//   
//   Step 5: Move n-1=2 disks from C to B (using A as auxiliary)
//   Call: towerOfHanoi(2, "C", "B", "A")
//     n=2, from="C", to="B", aux="A"
//     count = 0
//     Check: n === 1? No
//     
//     Step 5.1: Move 1 disk from C to A
//     Call: towerOfHanoi(1, "C", "A", "B")
//       n=1, from="C", to="A", aux="B"
//       count = 0
//       Check: n === 1? Yes (BASE CASE)
//       count = 0 + 1 = 1
//       Return: 1
//     After Step 5.1: count = 0 + 1 = 1
//     
//     Step 5.2: Move largest disk (2) from C to B
//     count = 1 + 1 = 2
//     
//     Step 5.3: Move 1 disk from A to B
//     Call: towerOfHanoi(1, "A", "B", "C")
//       n=1, from="A", to="B", aux="C"
//       count = 0
//       Check: n === 1? Yes (BASE CASE)
//       count = 0 + 1 = 1
//       Return: 1
//     After Step 5.3: count = 2 + 1 = 3
//     Return: 3
//   After Step 5: count = 4 + 3 = 7
//   
//   Return: 7
//
// Result: 7 moves (Correct! 2^3 - 1 = 7)

// Step-by-step execution example 2:
// Input: n = 2, from = "A", to = "B", aux = "C"
// Expected result: 3 moves (2^2 - 1 = 3)
//
// Call: towerOfHanoi(2, "A", "B", "C")
//   n=2, from="A", to="B", aux="C"
//   count = 0
//   Check: n === 1? No
//   
//   Step 3: Move 1 disk from A to C
//   Call: towerOfHanoi(1, "A", "C", "B")
//     n=1 → BASE CASE → Return: 1
//   count = 0 + 1 = 1
//   
//   Step 4: Move disk 2 from A to B
//   count = 1 + 1 = 2
//   
//   Step 5: Move 1 disk from C to B
//   Call: towerOfHanoi(1, "C", "B", "A")
//     n=1 → BASE CASE → Return: 1
//   count = 2 + 1 = 3
//   
//   Return: 3
//
// Result: 3 moves (Correct! 2^2 - 1 = 3)

// Mathematical Formula:
// Total moves for n disks = 2^n - 1
// - n=1: 2^1 - 1 = 1 move
// - n=2: 2^2 - 1 = 3 moves
// - n=3: 2^3 - 1 = 7 moves
// - n=4: 2^4 - 1 = 15 moves
// - n=5: 2^5 - 1 = 31 moves
//
// This is optimal - no algorithm can solve it in fewer moves

// WHY THIS RECURRENCE WORKS:
// The recursive approach breaks down the problem:
// - To move n disks, we need to move n-1 disks twice (before and after moving the largest)
// - Each recursive call handles moving one fewer disk
// - The base case (n=1) handles the simplest move (1 disk = 1 move)
// - Total: T(n) = 2 × T(n-1) + 1
//   Solving this recurrence: T(n) = 2^n - 1

console.log(towerOfHanoi(3 , "A" , "B" , "C")); // Expected output: 7