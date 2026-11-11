class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(x) {
    this.queue.push(x);
  }
}
function generateBinaryNumbers(n) {
  let result = [];
  let queue = new Queue();
  queue.enqueue("1");
  for (let i = 0; i < n; i++) {
    let curr = queue.dequeue();
    result.push(curr);

    queue.enqueue(curr + "0");
    queue.enqueue(curr + "1");
  }
  return result;
}
console.log(generateBinaryNumbers(5));
