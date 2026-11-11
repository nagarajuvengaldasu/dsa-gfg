// ============================================
// STEP 1: Define the Node class
// ============================================
// Node class to represent a node in the circular linked list
// Each node contains data and a pointer to the next node
class Node {
  constructor(data) {
    this.data = data; // Store the data value in the node
    this.next = null; // Pointer to the next node (initially null)
  }
}

// ============================================
// STEP 2: Define the InsertAtPosition function
// ============================================
// Function to insert a new node after a given position in a circular linked list
// Special case: If pos === 1, insert at the beginning (make it the new head)
// Parameters:
//   - head: The head node of the circular linked list
//   - pos: The position (1-indexed) after which to insert the new node
//   - x: The data value for the new node to be inserted
// Returns: The head of the list (may be updated if inserting at position 1)
function InsertAtPosition(head, pos, x) {
  // STEP 2.1: Create a new node with the given data value
  let temp = new Node(x);

  // STEP 2.2: Handle edge case - empty list
  // If the list is empty, create a circular list with just the new node
  if (head === null) {
    temp.next = temp; // Point the node to itself (circular with one node)
    return temp; // Return the new node as the head
  }

  // STEP 2.3: Calculate the length of the circular linked list
  // We need to know the length to validate if the position is valid
  let curr = head; // curr from the head node
  let length = 1; // Initialize length counter (at least head exists)

  // Traverse the list to count all nodes
  // Keep moving forward until we complete a full circle (back to head)
  while (curr.next !== head) {
    curr = curr.next; // Move to the next node
    length++; // Increment the length counter
  }
  // After the loop, 'curr' points to the last node and 'length' contains total nodes

  // STEP 2.4: Validate the position
  // If the position is greater than the list length, it's invalid
  if (pos > length) {
    return head; // Return original head without any insertion
  }
  // STEP 2.6: Handle general case - insert after position pos (where pos > 1)
  // We need to find the node at position 'pos' and insert after it

  // curr from the head node
  curr = head;
  let count = 1; // count counting from position 1 (head)

  // Traverse to the node at position 'pos'
  // We need to stop at position 'pos' to insert after it
  while (count < pos) {
    curr = curr.next; // Move to the next node
    count++; // Increment the count counter
  }
  // After the loop, 'curr' points to the node at position 'pos'

  // STEP 2.7: Insert the new node after the node at position 'pos'
  // Link the new node to point to what the current node was pointing to
  temp.next = curr.next;
  // Link the current node to point to the new node
  curr.next = temp;

  // Return the head (unchanged in this case)
  return head;
}

// ============================================
// STEP 3: Test the function with example data
// ============================================
// Create a circular linked list with 4 nodes: 1 -> 2 -> 3 -> 4 -> (back to 1)

// STEP 3.1: Create the first node (head) with data = 1
let head = new Node(1);

// STEP 3.2: Create and link the second node with data = 2
head.next = new Node(2);

// STEP 3.3: Create and link the third node with data = 3
head.next.next = new Node(3);

// STEP 3.4: Create and link the fourth node with data = 4
head.next.next.next = new Node(4);

// STEP 3.5: Make the list circular by connecting the last node back to head
// Now: 1 -> 2 -> 3 -> 4 -> 1 (circular)
head.next.next.next.next = head;

// STEP 3.6: Test insertion - insert value 5 after position 2
// This should insert 5 after node 2, resulting in: 1 -> 2 -> 5 -> 3 -> 4 -> 1
let newhead = InsertAtPosition(head, 2, 5);

// ============================================
// STEP 4: Print the circular linked list after insertion
// ============================================
// Traverse and print all nodes in the circular list
let curr = newhead; // curr from the head

// Use do-while loop to print at least once and continue until we complete a circle
do {
  console.log(curr.data); // Print the data of current node
  curr = curr.next; // Move to the next node
} while (curr !== newhead); // Continue until we complete one full circle (back to curr)
