/**
 * TOWER OF HANOI - Recursive Solution
 * Problem: Move n disks from source rod to destination rod using auxiliary rod
 * Rules:
 * 1. Only one disk can be moved at a time
 * 2. Only the top disk can be moved
 * 3. A larger disk cannot be placed on top of a smaller disk
 * 
 * Time Complexity: O(2^n) - exponential, as we make 2 recursive calls at each level
 * Space Complexity: O(n) - maximum depth of recursion stack is n
 * 
 * KEY INSIGHT: To move n disks from src to dest:
 * 1. Move n-1 disks from src to aux (using dest as temporary)
 * 2. Move the largest disk (n) from src to dest
 * 3. Move n-1 disks from aux to dest (using src as temporary)
 */

function towerOfHanoi(n , src , aux , dest){
  // Step 1: Base Case - If only one disk remains
  // Move it directly from source to destination
  // This is the simplest case and stops the recursion
  // Example: n=1, src="A", dest="C" → Move disk 1 from A to C
  if(n === 1){
    console.log("Move 1 from " + src + " to " + dest);
    return;
  }
  
  // Step 2: Recursive Case - Move n-1 disks from src to aux
  // We use dest as the auxiliary rod for this step
  // This clears the way for the largest disk (n) to be moved
  // Example: n=3, src="A", aux="B", dest="C"
  //   Move 2 disks from A to B (using C as auxiliary)
  towerOfHanoi(n-1 , src , dest , aux);
  
  // Step 3: Move the largest disk (n) from src to dest
  // Now that n-1 disks are out of the way, we can move the largest disk
  // This is the actual move we're making at this level
  // Example: n=3, src="A", dest="C" → Move disk 3 from A to C
  console.log("Move " + n + " from " + src + " to " + dest);
  
  // Step 4: Recursive Case - Move n-1 disks from aux to dest
  // We use src as the auxiliary rod for this step
  // This completes the transfer of all n disks to destination
  // Example: n=3, aux="B", src="A", dest="C"
  //   Move 2 disks from B to C (using A as auxiliary)
  towerOfHanoi(n-1 , aux , src , dest);
}

// Step-by-step execution example 1:
// Input: n = 2, src = "A", aux = "B", dest = "C"
// Initial state: Disk 1 (small) and Disk 2 (large) on rod A
//
// Call: towerOfHanoi(2, "A", "B", "C")
//   n=2, src="A", aux="B", dest="C"
//   Check: n === 1? No
//   
//   Step 2: Move n-1=1 disk from src to aux
//   Call: towerOfHanoi(1, "A", "C", "B")
//     n=1, src="A", aux="C", dest="B"
//     Check: n === 1? Yes (BASE CASE)
//     Output: "Move 1 from A to B"
//     Return
//   After Step 2: Disk 1 is on rod B, Disk 2 is on rod A
//
//   Step 3: Move largest disk (n=2) from src to dest
//   Output: "Move 2 from A to C"
//   After Step 3: Disk 1 is on rod B, Disk 2 is on rod C
//
//   Step 4: Move n-1=1 disk from aux to dest
//   Call: towerOfHanoi(1, "B", "A", "C")
//     n=1, src="B", aux="A", dest="C"
//     Check: n === 1? Yes (BASE CASE)
//     Output: "Move 1 from B to C"
//     Return
//   After Step 4: Disk 1 and Disk 2 are both on rod C
//
// Final Output:
//   Move 1 from A to B
//   Move 2 from A to C
//   Move 1 from B to C
//
// Result: Both disks successfully moved from A to C

// Step-by-step execution example 2:
// Input: n = 3, src = "A", aux = "B", dest = "C"
// Initial state: Disk 1 (small), Disk 2 (medium), Disk 3 (large) on rod A
//
// Call: towerOfHanoi(3, "A", "B", "C")
//   n=3, src="A", aux="B", dest="C"
//   Check: n === 1? No
//   
//   Step 2: Move n-1=2 disks from A to B (using C as auxiliary)
//   Call: towerOfHanoi(2, "A", "C", "B")
//     n=2, src="A", aux="C", dest="B"
//     Check: n === 1? No
//     
//     Step 2.1: Move 1 disk from A to C
//     Call: towerOfHanoi(1, "A", "B", "C")
//       Output: "Move 1 from A to C"
//     After: Disk 1 on C, Disk 2 on A, Disk 3 on A
//     
//     Step 2.2: Move disk 2 from A to B
//     Output: "Move 2 from A to B"
//     After: Disk 1 on C, Disk 2 on B, Disk 3 on A
//     
//     Step 2.3: Move 1 disk from C to B
//     Call: towerOfHanoi(1, "C", "A", "B")
//       Output: "Move 1 from C to B"
//     After: Disk 1 on B, Disk 2 on B, Disk 3 on A
//   After Step 2: Disks 1 and 2 are on rod B, Disk 3 is on rod A
//
//   Step 3: Move largest disk (n=3) from A to C
//   Output: "Move 3 from A to C"
//   After Step 3: Disk 1 on B, Disk 2 on B, Disk 3 on C
//
//   Step 4: Move n-1=2 disks from B to C (using A as auxiliary)
//   Call: towerOfHanoi(2, "B", "A", "C")
//     n=2, src="B", aux="A", dest="C"
//     Check: n === 1? No
//     
//     Step 4.1: Move 1 disk from B to A
//     Call: towerOfHanoi(1, "B", "C", "A")
//       Output: "Move 1 from B to A"
//     After: Disk 1 on A, Disk 2 on B, Disk 3 on C
//     
//     Step 4.2: Move disk 2 from B to C
//     Output: "Move 2 from B to C"
//     After: Disk 1 on A, Disk 2 on C, Disk 3 on C
//     
//     Step 4.3: Move 1 disk from A to C
//     Call: towerOfHanoi(1, "A", "B", "C")
//       Output: "Move 1 from A to C"
//     After: Disk 1 on C, Disk 2 on C, Disk 3 on C
//   After Step 4: All disks are on rod C
//
// Final Output:
//   Move 1 from A to C
//   Move 2 from A to B
//   Move 1 from C to B
//   Move 3 from A to C
//   Move 1 from B to A
//   Move 2 from B to C
//   Move 1 from A to C
//
// Result: All 3 disks successfully moved from A to C in 7 moves (2^3 - 1)

// WHY THIS ALGORITHM WORKS:
// The recursive approach breaks down the problem into smaller subproblems:
// - To move n disks, we need to move n-1 disks twice (before and after moving the largest)
// - Each recursive call handles moving one fewer disk
// - The base case (n=1) handles the simplest move
//
// Total moves required: 2^n - 1
// - n=1: 1 move
// - n=2: 3 moves
// - n=3: 7 moves
// - n=4: 15 moves
// - This is optimal - no algorithm can solve it in fewer moves

let n = 2;
towerOfHanoi(n , "A" , "B" , "C");