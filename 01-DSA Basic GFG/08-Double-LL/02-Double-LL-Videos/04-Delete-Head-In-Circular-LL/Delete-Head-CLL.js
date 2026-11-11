class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
  }
  // add a node to the head (helper method of testing)
  AddToHead(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      newNode.next = this.head; // point to itself (single node)
    } else {
      let curr = this.head;
      while (curr.next !== this.head) {
        curr = curr.next; // find the last node
      }
      newNode.next = this.head; // point new node to head
      curr.next = newNode; // last node now points to new node
      this.head = newNode; // move head to the new node
    }
  }
  // delete the head node
  deleteHead() {
    if (!this.head) {
      console.log("the list is empty , nothing to delete");
      return;
    }

    if (this.next.data === this.head) {
      // single node case: list only has one node
      this.next = null;
    } else {
      let curr = this.head;
      // traverse to find the last node
      while (curr.next !== this.head) {
        curr = curr.next;
      }
      // last node now points to the second node , efficiently removing the head
      current.next = this.head.next;
      this.head = this.head.next; // move head to next node
    }
  }
  // print the list (hepler method of testing)
  printList() {
    if (!this.head) {
      console.log("the list is empty");
      return;
    }
    let result = "";
    let curr = this.head;
    do {
      result += `${curr.data} -> `;
      curr = curr.next;
    } while (curr !== this.head);
    console.log(result + "back to head");
  }
}

const list = new CircularLinkedList();
list.AddToHead(10);
list.AddToHead(20);
list.AddToHead(30);
list.AddToHead(40);
list.printList(); // 40 -> 30 -> 20 -> 10 -> back to head
list.deleteHead(); // 30 -> 20 -> 10 -> back to head
list.printList(); // 30 -> 20 -> 10 -> back to head
