/*
 * ========== PROBLEM STATEMENT ==========
 * LRU Cache: get(key) returns value or -1. put(key,value) inserts/updates.
 * When capacity exceeded, evict least recently used (LRU) item.
 *
 * NAIVE: Object for cache, Array for order [LRU,...,MRU]. get/put update order.
 *
 * STEP-BY-STEP: order=[1,2]. GET(1): move 1 to end, order=[2,1]. PUT(3): evict 2, add 3.
 *
 * Time: O(n) get/put (filter) | Space: O(cap)
 */

class LRUCache {
  constructor(cap) {
    this.cap = cap;
    this.cache = {};
    this.order = [];
  }

  /**
   * @param {number} key
   * @returns {number}
   */
  get(key) {
    if (!(key in this.cache)) return -1;
    this.order = this.order.filter((k) => k !== key);
    this.order.push(key);
    // EXECUTION: Move key to end (MRU).
    return this.cache[key];
  }

  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    if (key in this.cache) {
      this.cache[key] = value;
      this.order = this.order.filter((k) => k !== key);
      this.order.push(key);
      return;
    }
    if (this.order.length >= this.cap) {
      let lru = this.order.shift();
      delete this.cache[lru];
      // EXECUTION: Evict LRU (first in order).
    }
    this.cache[key] = value;
    this.order.push(key);
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
