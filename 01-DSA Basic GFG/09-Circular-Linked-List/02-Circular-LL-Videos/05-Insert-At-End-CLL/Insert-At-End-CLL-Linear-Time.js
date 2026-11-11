// Step 1: Define Node class for creating linked list nodes
class Node {
  constructor(data) {
    this.data = data; // Store the data value
    this.next = null; // Initialize next pointer to null
  }
}

// Step 2: Linear-time O(n) function to insert a node at the end of circular linked list
function InsertAtEnd(head, x) {
  // Step 2.1: Create a new node with value x
  let temp = new Node(x);

  // Step 2.2: Check if the list is empty
  if (head === null) {
    // Step 2.2.1: If empty, make the new node point to itself (circular)
    temp.next = temp;
    // Step 2.2.2: Return the new node as the head
    return temp;
  }

  // Step 2.3: If list is not empty, traverse to find the last node
  let curr = head; // Start from head node

  // Step 2.4: Loop until we reach the last node
  // In a circular list, the last node's next points back to head
  while (curr.next !== head) {
    curr = curr.next; // Move to the next node
  }
  // After loop: curr now points to the last node in the circular list

  // Step 2.5: Connect the last node to the new node
  curr.next = temp;

  // Step 2.6: Make the new node point back to head to maintain circular structure
  temp.next = head;

  // Step 2.7: Return the original head (head doesn't change when inserting at end)
  return head;
  // Result: New node is now at the end, and the list remains circular
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

// Step 4: Insert new node with value 40 at the end
head = InsertAtEnd(head, 40);
// Execution details:
// - Traverse from head(10) -> 20 -> 30 (last node found)
// - Connect 30 -> 40 (new node)
// - Connect 40 -> 10 (back to head)
// - Final result: 10 -> 20 -> 30 -> 40 -> (back to 10)

// Step 5: Traverse and print the circular linked list
let curr = head; // Start from head
// Step 5.1: Loop through all nodes except the last one
while (curr.next !== head) {
  console.log(curr.data); // Print current node's data
  curr = curr.next; // Move to next node
}
// Step 5.2: Print the last node's data (since loop stops before it)
console.log(curr.data);
// Expected output: 10, 20, 30, 40
