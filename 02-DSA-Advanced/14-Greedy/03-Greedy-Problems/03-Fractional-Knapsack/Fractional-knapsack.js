/*
 * ========== PROBLEM: Fractional Knapsack ==========
 *
 * Given n items with value and weight, and a knapsack capacity, find the
 * maximum total value we can get. We can take a fraction of any item
 * (fractional knapsack): if we take fraction f of an item with value v
 * and weight w, we get value f*v and use capacity f*w.
 *
 * Input:  val      = array of item values
 *         wt       = array of item weights
 *         capacity = maximum weight the knapsack can hold
 *
 * Output: Maximum value (up to 6 decimal places).
 *
 * Approach: Greedy — sort items by value/weight (ratio) descending.
 * Take as much as possible of the highest-ratio item, then the next,
 * until capacity is full or items are exhausted. If an item doesn't
 * fit entirely, take a fraction of it.
 *
 * Time: O(n log n)  |  Space: O(n)
 */

class Solution {
  fractionalKnapsack(val, wt, capacity) {
    // if the value or weight array is empty, return 0
    const items = [];
    // get the length of the value array
    let n = val.length;

    for (let i = 0; i < n; i++) {
      // push the item to the items array
      items.push({
        value: val[i],
        weight: wt[i],
        ratio: val[i] / wt[i],  // Value per unit weight (higher = better)
      });
    }
    // sort the items by ratio descending (best first)
    items.sort((a, b) => b.ratio - a.ratio);  // Sort by ratio descending (best first)

    let totalValue = 0;
    // initialize the remaining capacity
    let remainingCapacity = capacity;

    for (let i = 0; i < n; i++) {
      // if the remaining capacity is 0, break
      if (remainingCapacity === 0) break;

      // if the weight of the item is less than or equal to the remaining capacity
      if (items[i].weight <= remainingCapacity) {
        // add the value of the item to the total value
        totalValue += items[i].value;           // Take whole item
        remainingCapacity -= items[i].weight;
      } else {
        // add the value of the item to the total value
        totalValue += items[i].ratio * remainingCapacity;  // Take fraction to fill capacity
        remainingCapacity = 0;
      }
    }
    // return the total value
    return Number(totalValue.toFixed(6));
  }
}

const solution = new Solution();
const val = [60, 100, 120];
const wt = [10, 20, 30];
const capacity = 50;
console.log(solution.fractionalKnapsack(val, wt, capacity));  // 240 (e.g. 60+100+80)
