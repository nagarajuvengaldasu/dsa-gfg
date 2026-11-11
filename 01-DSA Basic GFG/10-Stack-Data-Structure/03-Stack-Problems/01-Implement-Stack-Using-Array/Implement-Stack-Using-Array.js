/**
 * Implement Stack Using Array
 * 
 * Problem: Implement stack using array with the following operations:
 * - Query Type 1 x: Push x onto the stack
 * - Query Type 2: Pop the top element
 * - Query Type 3: Display stack from bottom to top
 * 
 * Constraints:
 * - Max stack size: 100000
 * - Print "Stack Full" if push operation exceeds max size
 * - Print "Stack Empty" if pop operation on empty stack
 * - Print -1 if display operation on empty stack
 */

class Solution {
    constructor(){
        // Initialize stack array with max size
        this.stack = new Array(100000);
        // Top pointer: -1 means stack is empty
        this.top = -1;
        // Maximum size of the stack
        this.maxSize = 100000;
    }
   
    /**
     * Function to push data at the top of stack
     * @param {number} data - The element to push
     */
    push(data){
        // Check if stack is full BEFORE pushing
        // When top reaches maxSize-1, we have maxSize elements (indices 0 to maxSize-1)
        // If we try to push one more, we'd need index maxSize, which is out of bounds
        if(this.top >= this.maxSize - 1){
            process.stdout.write("Stack Full\n");
            return;
        }
        // Increment top pointer
        this.top++;
        // Store data at the new top position
        this.stack[this.top] = data;
    }

    /**
     * Function to pop the topmost data
     * Removes and returns nothing (just removes the element)
     */
    pop() {
        // Check if stack is empty
        if(this.top === -1){
            process.stdout.write("Stack Empty\n");
            return;
        }
        // Simply decrement top pointer (we don't need to clear the value)
        // The element is effectively "removed" as it's no longer accessible
        this.top--;
    }

    /**
     * Function to display the stack from bottom to top (index 0 to top)
     * Prints all elements separated by spaces
     */
    display() {
        // If stack is empty, print -1
        if(this.top === -1){
            process.stdout.write("-1\n");
            return;
        }
        
        // Build result string with elements from bottom (index 0) to top
        let result = "";
        for(let i = 0; i <= this.top; i++){
            result += this.stack[i];
            // Add space after each element except the last one
            if(i < this.top){
                result += " ";
            }
        }
        // Print result followed by newline
        process.stdout.write(result + "\n");
    }
}

// Example usage and test cases
console.log("=== Test Case 1 ===");
let s1 = new Solution();
s1.push(4);
s1.display();  // Expected output: 4
s1.pop();
s1.pop();      // Expected output: Stack Empty
s1.display();  // Expected output: -1

console.log("\n=== Test Case 2 ===");
let s2 = new Solution();
s2.push(3);
s2.display();  // Expected output: 3

console.log("\n=== Test Case 3: Multiple elements ===");
let s3 = new Solution();
s3.push(1);
s3.push(2);
s3.push(3);
s3.display();  // Expected output: 1 2 3
s3.pop();
s3.display();  // Expected output: 1 2
s3.pop();
s3.pop();
s3.pop();      // Expected output: Stack Empty


