/*
 * ========== PROBLEM STATEMENT ==========
 * LRU Cache with O(1) get and put. Evict LRU when full.
 *
 * OPTIMAL: Doubly linked list (head=LRU, tail=MRU) + Map for O(1) lookup.
 * get: remove node, add to tail. put: if exists update and move to tail; else add, evict head if full.
 *
 * Time: O(1) | Space: O(cap)
 */

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(cap) {
    this.cap = cap;
    this.map = new Map();
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  addToTail(node) {
    node.prev = this.tail.prev;
    node.next = this.tail;
    this.tail.prev.next = node;
    this.tail.prev = node;
    // EXECUTION: Insert node before tail (becomes MRU).
  }

  removeNode(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
    // EXECUTION: Unlink node from list.
  }

  /**
   * @param {number} key
   * @returns {number}
   */
  get(key) {
    if (!this.map.has(key)) return -1;
    let node = this.map.get(key);
    this.removeNode(node);
    this.addToTail(node);
    return node.value;
  }

  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    if (this.map.has(key)) {
      let node = this.map.get(key);
      node.value = value;
      this.removeNode(node);
      this.addToTail(node);
      return;
    }
    if (this.map.size >= this.cap) {
      let lru = this.head.next;
      this.removeNode(lru);
      this.map.delete(lru.key);
    }
    let newNode = new Node(key, value);
    this.map.set(key, newNode);
    this.addToTail(newNode);
  }
}

// Test with examples
function runQueries(cap, queries) {
  let cache = new LRUCache(cap);
  let result = [];
  for (let [op, key, value] of queries) {
    if (op === "PUT") cache.put(key, value);
    else if (op === "GET") result.push(cache.get(key));
  }
  return result;
}

// Example 1
console.log("Example 1:", runQueries(2, [["PUT", 1, 2], ["GET", 1]])); // [2]

// Example 2
console.log(
  "Example 2:",
  runQueries(2, [
    ["PUT", 1, 2],
    ["PUT", 2, 3],
    ["PUT", 1, 5],
    ["PUT", 4, 5],
    ["PUT", 6, 7],
    ["GET", 4],
    ["PUT", 1, 2],
    ["GET", 3],
  ])
); // [5, -1]
