// Step 1: Define Node class for creating linked list nodes
class Node {
  constructor(data) {
    this.data = data; // Store the data value
    this.next = null; // Initialize next pointer to null
  }
}
function deleteKthNode(head, k) {
  if (head === null) return head;

  // Step 1: Handle deletion of the first node (k === 1)
  if (k === 1) {
    // Step 1.1: Check if list has only one node
    if (head.next === head) {
      // If only one node, return null (empty list)
      return null;
    }

    // Step 1.2: Find the last node in the circular list
    let curr = head;
    while (curr.next !== head) {
      curr = curr.next;
    }
    // After loop: curr points to the last node

    // Step 1.3: Connect last node to the second node (skip head)
    curr.next = head.next;

    // Step 1.4: Return the new head (which is head.next)
    return head.next;
  } else {
    // Step 2: Handle deletion of kth node (where k > 1)
    let curr = head;
    // Step 2.1: Traverse to the (k-1)th node (one before the node to delete)
    for (let i = 0; i < k - 2; i++) {
      curr = curr.next;
    }
    // After loop: curr points to the node before the one to delete

    // Step 2.2: Check if the node to delete actually exists
    // If curr.next is head, it means k is larger than list size (we've wrapped around)
    if (curr.next === head) {
      // The kth node doesn't exist, return head unchanged
      return head;
    }

    // Step 2.3: Skip the kth node by connecting (k-1)th to (k+1)th node
    curr.next = curr.next.next;

    // Step 2.4: Return the original head (head doesn't change)
    return head;
  }
}
// Step 3: Create a circular linked list for testing
// Step 3.1: Create a single node with value 1
let head = new Node(1);
// Step 3.2: Make it circular (point to itself)
head.next = head;
// Current list: 1 -> (back to 1)

// Step 4: Delete the 4th node (k=4)
head = deleteKthNode(head, 4);
// Execution details:
// - List has only one node, so k=4 is larger than list size
// - Function will detect this and return head unchanged
// - head remains the same (list unchanged)

// Step 5: Traverse and print the circular linked list
// Note: If head is null, this will cause an error
// In a real scenario, we should check if head is null first
if (head !== null) {
  let curr = head; // Start from head
  // Step 5.1: Loop through all nodes except the last one
  while (curr.next !== head) {
    console.log(curr.data); // Print current node's data
    curr = curr.next; // Move to next node
  }
  // Step 5.2: Print the last node's data (since loop stops before it)
  console.log(curr.data);
} else {
  console.log("List is empty");
}
