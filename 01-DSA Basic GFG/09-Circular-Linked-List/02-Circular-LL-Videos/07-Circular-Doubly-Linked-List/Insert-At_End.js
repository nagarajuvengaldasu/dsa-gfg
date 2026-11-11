// Step 1: Define Node class for circular doubly linked list
class Node {
  constructor(data) {
    this.data = data; // Store the data value
    this.next = null; // Initialize next pointer to null
    this.prev = null; // Initialize prev pointer to null
  }
}

// Step 2: Function to insert a node at the end of circular doubly linked list
function insertAtEnd(head, x) {
  // Step 2.1: Create a new node with value x
  let temp = new Node(x);

  // Step 2.2: Check if the list is empty
  if (head === null) {
    // Step 2.2.1: If empty, make the new node point to itself in both directions
    temp.next = temp; // next points to itself
    temp.prev = temp; // prev points to itself
    // Step 2.2.2: Return the new node as the head
    return temp;
  }

  // Step 2.3: If list is not empty, insert the new node after the last node
  // In a circular list, the last node is head.prev
  // Step 2.3.1: Make new node's next point to head
  temp.next = head;
  // Step 2.3.2: Make new node's prev point to the old last node (head.prev)
  temp.prev = head.prev;
  // Step 2.3.3: Make the old last node's next point to the new node
  head.prev.next = temp;
  // Step 2.3.4: Make head's prev point to the new node (new node becomes the last node)
  head.prev = temp;
  // Step 2.3.5: Return the original head (head doesn't change)
  return head;
  // Result: New node is now at the end, maintaining circular structure
}
// Step 3: Create a circular doubly linked list for testing
// Step 3.1: Create head node with value 1
let head = new Node(1);
// Step 3.2: Create second node with value 2 and link it
head.next = new Node(2);
head.next.prev = head;
// Step 3.3: Create third node with value 3 and link it
head.next.next = new Node(3);
head.next.next.prev = head.next;
// Step 3.4: Create fourth node with value 4 and link it
head.next.next.next = new Node(4);
head.next.next.next.prev = head.next.next;
// Step 3.5: Make the list circular by connecting last node to head
head.next.next.next.next = head;
// Step 3.6: Connect head's prev to last node to complete circular structure
head.prev = head.next.next.next;
// Current list: 1 <-> 2 <-> 3 <-> 4 <-> (back to 1, and 1.prev points to 4)

// Step 4: Insert new node with value 5 at the end
let newhead = insertAtEnd(head, 5);
// After insertion: 1 <-> 2 <-> 3 <-> 4 <-> 5 <-> (back to 1, and 1.prev points to 5)

// Step 5: Traverse and print the circular doubly linked list
let curr = newhead; // Start from head
let start = newhead; // Store the starting point for loop termination
// Step 5.1: Loop through all nodes until we come back to the start
do {
  console.log(curr.data); // Print current node's data
  curr = curr.next; // Move to next node
} while (curr !== start); // Continue until we come back to the start
// Expected output: 1, 2, 3, 4, 5
