// Step 1: Define Node class for creating linked list nodes
class Node {
  constructor(data) {
    this.data = data; // Store the data value
    this.next = null; // Initialize next pointer to null
  }
}

// Step 2: Constant-time O(1) function to insert at beginning of circular linked list
// This approach avoids traversing the entire list by using a clever trick
function insertAtBegin(head, x) {
  // Step 2.1: Create a new node with value x
  let temp = new Node(x);

  // Step 2.2: Check if the list is empty
  if (head === null) {
    // Step 2.2.1: If empty, make the new node point to itself (circular)
    temp.next = temp;
    // Step 2.2.2: Return the new node as the head
    return temp;
  }

  // Step 2.3: CONSTANT-TIME INSERTION TRICK (O(1) instead of O(n))
  // Instead of traversing to find the last node, we insert right after head
  // Step 2.3.1: Make new node point to what head was pointing to
  temp.next = head.next;
  // Step 2.3.2: Make head point to the new node
  // Now: head -> temp -> (rest of list)
  head.next = temp;

  // Step 2.4: SWAP DATA VALUES to make it appear as if inserted at beginning
  // This is the key trick: we swap data instead of rearranging pointers
  // Step 2.4.1: Store head's data in a temporary variable
  let dummy = head.data;
  // Step 2.4.2: Copy new node's data to head
  head.data = temp.data;
  // Step 2.4.3: Copy head's original data to the new node
  // After swap: head has new value (x), new node has head's old value
  temp.data = dummy;

  // Step 2.5: Return head (still the same node, but with new data)
  return head;
  // Result: The new value appears at the beginning without traversing the list!
}

// Step 3: Create a circular linked list for testing
// Step 3.1: Create head node with value 10
let head = new Node(10);
// Step 3.2: Create second node with value 20 and link it
head.next = new Node(20);
// Step 3.3: Create third node with value 30 and link it
head.next.next = new Node(30);
// Step 3.4: Make the list circular by connecting last node to head
head.next.next.next = head;
// Current list: 10 -> 20 -> 30 -> (back to 10)

// Step 4: Insert new node with value 5 at the beginning (constant-time)
head = insertAtBegin(head, 5);
// Execution details:
// - New node(5) is inserted after head: 10 -> 5 -> 20 -> 30 -> (back to 10)
// - Data is swapped: head.data becomes 5, new node.data becomes 10
// - Final result: 5 -> 10 -> 20 -> 30 -> (back to 5)

// Step 5: Traverse and print the circular linked list
let curr = head; // Start from head
// Step 5.1: Loop through all nodes except the last one
while (curr.next !== head) {
  console.log(curr.data); // Print current node's data
  curr = curr.next; // Move to next node
}
// Step 5.2: Print the last node's data (since loop stops before it)
console.log(curr.data);
// Expected output: 5, 10, 20, 30
