class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function Reverse(head) {
  let prev = null; // Points to the previous node (starts as null)
  let curr = head; // Points to the current node we're processing

  while (curr !== null) {
    // Step 1: Save the next node before we break the link
    let next = curr.next;

    // Step 2: Reverse the link - point current node to previous
    curr.next = prev;

    // Step 3: Move prev forward to current position
    prev = curr;

    // Step 4: Move curr forward to the next node (we saved it earlier)
    curr = next;
  }

  // After loop, prev points to the new head (last node of original list)
  return prev;
}

let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);
head.next.next.next.next = new Node(50);

console.log("Original list:");
let temp = head;
let originalStr = "";
while (temp !== null) {
  originalStr += temp.data + " -> ";
  temp = temp.next;
}
console.log(originalStr + "null\n");

let newHead = Reverse(head);

console.log("Reversed list:");
let curr = newHead;
let reversedStr = "";
while (curr !== null) {
  reversedStr += curr.data + " -> ";
  curr = curr.next;
}
console.log(reversedStr + "null");

/*
 * STEP-BY-STEP EXAMPLE:
 *
 * Initial List: 10 -> 20 -> 30 -> 40 -> 50 -> null
 *
 * Initial State:
 *   prev = null
 *   curr = 10
 *
 * ITERATION 1:
 *   next = curr.next = 20          (save next node)
 *   curr.next = prev = null        (reverse link: 10 -> null)
 *   prev = curr = 10               (move prev forward)
 *   curr = next = 20               (move curr forward)
 *   State: null <- 10    20 -> 30 -> 40 -> 50
 *
 * ITERATION 2:
 *   next = curr.next = 30          (save next node)
 *   curr.next = prev = 10          (reverse link: 20 -> 10)
 *   prev = curr = 20               (move prev forward)
 *   curr = next = 30               (move curr forward)
 *   State: null <- 10 <- 20    30 -> 40 -> 50
 *
 * ITERATION 3:
 *   next = curr.next = 40          (save next node)
 *   curr.next = prev = 20          (reverse link: 30 -> 20)
 *   prev = curr = 30               (move prev forward)
 *   curr = next = 40               (move curr forward)
 *   State: null <- 10 <- 20 <- 30    40 -> 50
 *
 * ITERATION 4:
 *   next = curr.next = 50          (save next node)
 *   curr.next = prev = 30          (reverse link: 40 -> 30)
 *   prev = curr = 40               (move prev forward)
 *   curr = next = 50               (move curr forward)
 *   State: null <- 10 <- 20 <- 30 <- 40    50
 *
 * ITERATION 5:
 *   next = curr.next = null        (save next node)
 *   curr.next = prev = 40          (reverse link: 50 -> 40)
 *   prev = curr = 50               (move prev forward)
 *   curr = next = null             (move curr forward - loop ends)
 *   Final: null <- 10 <- 20 <- 30 <- 40 <- 50
 *
 * Return prev = 50 (new head)
 */
