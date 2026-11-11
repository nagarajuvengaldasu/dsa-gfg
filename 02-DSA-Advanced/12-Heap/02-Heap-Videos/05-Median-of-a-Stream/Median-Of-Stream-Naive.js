/*
 * ========== PROBLEM STATEMENT ==========
 * MEDIAN OF A STREAM
 * Numbers arrive one by one (stream). After each insert, report the current median.
 * - Odd count: median = middle element
 * - Even count: median = average of two middle elements
 *
 * Example: stream 5, 15, 1, 3
 * After 5:   median = 5
 * After 15:  median = (5+15)/2 = 10
 * After 1:   median = 5 (middle of [1,5,15])
 * After 3:   median = (3+5)/2 = 4
 *
 * Approach (Naive): Store all; on getMedian, sort and return middle.
 * insert: O(1), getMedian: O(n log n)
 */

function MedianStreamNaive() {
  this.arr = [];  // Step 1: Store all stream elements

  this.insert = function (x) {
    this.arr.push(x);  // Step 2: Append in O(1)
  };

  this.getMedian = function () {
    if (this.arr.length === 0) return null;  // Step 3: Empty check
    let sorted = [...this.arr].sort((a, b) => a - b);  // Step 4: Copy & sort
    let n = sorted.length;
    if (n % 2 === 1) {
      return sorted[Math.floor(n / 2)];  // Step 5: Odd → middle element
    }
    return (sorted[n / 2 - 1] + sorted[n / 2]) / 2;  // Step 6: Even → avg of two middles
  };
}

// Execution: stream 5, 15, 1, 3
// insert(5)  → arr=[5], getMedian → sorted=[5], n=1 → 5
// insert(15) → arr=[5,15], getMedian → sorted=[5,15], avg = 10
// insert(1)  → arr=[5,15,1], getMedian → sorted=[1,5,15], middle = 5
// insert(3)  → arr=[5,15,1,3], getMedian → sorted=[1,3,5,15], avg(3,5)=4
let stream = new MedianStreamNaive();
stream.insert(5);
console.log(stream.getMedian());  // 5
stream.insert(15);
console.log(stream.getMedian());  // 10
stream.insert(1);
console.log(stream.getMedian());  // 5
stream.insert(3);
console.log(stream.getMedian());  // 4
