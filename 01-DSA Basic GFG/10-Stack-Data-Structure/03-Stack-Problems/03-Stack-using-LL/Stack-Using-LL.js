class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class Stack{
  constructor(){
    this.head = null;
    this.count = 0;
  }
  isEmpty(){
    return this.head === null;
  }
  push(x){
    let temp = new Node(x);
    temp.next = this.head;
    this.head = temp;
    this.count+=1;
  }
  pop(){
    if(this.head === null){
      return null;
    }
    let res = this.head.data;
    this.head = this.head.next;
    this.count-=1;
    return res;
  }
  peek(){
    if(this.head === null) return -1;
    return this.head.data;
  }
  size(){
    return this.count;
  }
}
let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.size());
console.log(stack.isEmpty());