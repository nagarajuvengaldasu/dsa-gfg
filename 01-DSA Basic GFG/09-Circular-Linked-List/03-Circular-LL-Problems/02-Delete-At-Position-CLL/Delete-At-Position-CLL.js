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
// STEP 2: Define the deleteAtPosition function
// ============================================
// Function to delete a node at a given position in a circular linked list
// Parameters:
//   - head: The head node of the circular linked list
//   - pos: The position (1-indexed) of the node to delete
// Returns: The new head of the list (or null if list becomes empty)
function deleteAtPosition(head, pos) {
  // STEP 2.1: Handle edge case - empty list
  // If the list is empty, there's nothing to delete
  if (head === null) return null;

  // STEP 2.2: Handle special case - deleting the first node (position 1)
  if (pos === 1) {
    // STEP 2.2.1: Check if there's only one node in the list
    // In a circular list, if head.next === head, there's only one node
    if (head.next === head) {
      // If only one node exists, deleting it makes the list empty
      return null; // Return null as the list becomes empty
    }

    // STEP 2.2.2: If multiple nodes exist, we need to:
    // - Find the last node (which currently points to head)
    // - Update it to point to the second node (head.next)
    // - Update head to point to the second node

    // Start from head and traverse to find the last node
    let curr = head;
    // Keep moving forward until we reach the node that points back to head
    while (curr.next !== head) {
      curr = curr.next; // Move to the next node
    }
    // Now 'curr' is pointing to the last node

    // STEP 2.2.3: Update the last node to point to the second node
    // This breaks the link to the old head and connects to the new head
    curr.next = head.next;

    // STEP 2.2.4: Update head to point to the second node
    // The second node becomes the new head
    head = head.next;

    // Return the new head
    return head;
  }

  // STEP 2.3: Handle general case - deleting a node at any other position
  // We need to find the node just before the position to delete

  // Start from the head node
  let curr = head;
  let count = 1; // Start counting from position 1 (head)

  // STEP 2.3.1: Traverse to the node just before the target position
  // We need to stop at position (pos - 1) to update its next pointer
  while (count < pos - 1) {
    curr = curr.next; // Move to the next node
    count++; // Increment the position counter

    // STEP 2.3.2: Safety check - if we've completed a full circle
    // This means the position is invalid (beyond the list size)
    if (curr === head) {
      // Position is invalid, return original head without deletion
      return head;
    }
  }
  // After the loop, 'curr' points to the node at position (pos - 1)

  // STEP 2.3.3: Delete the node at the target position
  // Skip the node at position 'pos' by linking current node to next.next
  // This effectively removes the node at position 'pos' from the list
  curr.next = curr.next.next;

  // Return the head (unchanged in this case)
  return head;
}

// ============================================
// STEP 3: Test the function with example data
// ============================================
// Create a circular linked list with 5 nodes: 1 -> 2 -> 3 -> 4 -> 5 -> (back to 1)

// STEP 3.1: Create the first node (head) with data = 1
let head = new Node(1);

// STEP 3.2: Create and link the second node with data = 2
head.next = new Node(2);

// STEP 3.3: Create and link the third node with data = 3
head.next.next = new Node(3);

// STEP 3.4: Create and link the fourth node with data = 4
head.next.next.next = new Node(4);

// STEP 3.5: Create and link the fifth node with data = 5
head.next.next.next.next = new Node(5);

// STEP 3.6: Make the list circular by connecting the last node back to head
// Now: 1 -> 2 -> 3 -> 4 -> 5 -> 1 (circular)
head.next.next.next.next.next = head;

// STEP 3.7: Test deletion - delete node at position 1
// This should delete node with value 1, making node 2 the new head
let newhead = deleteAtPosition(head, 1);

// ============================================
// STEP 4: Print the circular linked list after deletion
// ============================================
// Traverse and print all nodes in the circular list
let curr = newhead; // Start from the new head
let start = newhead; // Store the starting point to detect when we complete a circle

// Use do-while loop to print at least once (even if list is empty, but we check for that)
do {
  console.log(curr.data); // Print the data of current node
  curr = curr.next; // Move to the next node
} while (curr !== start); // Continue until we complete one full circle (back to start)
