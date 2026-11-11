/*
 * Activity Selection Problem - Maximum number of activities that can be performed
 * arr: array of activities (start time, end time)
 * Returns: maximum number of activities, or -1 if impossible
 *
 * Idea: Sort activities by end time. Select first activity, then select next activity
 *       that starts after the end time of the previous selected activity.
 *
 * Algorithm:
 * 1. Sort activities by end time
 * 2. Select first activity
 * 3. For each subsequent activity, select it if it starts after the end time of the previous selected activity
 * 4. Return the number of activities selected
 *
 * Time Complexity: O(n log n) - due to sorting
 */
class Activity {
  // Constructor to initialize activity with start and end times
  constructor(start, end) {
    // Initialize start and end times
    this.start = start;
    // Initialize end time
    this.end = end;
  }
}
function maxActivities(arr) {
  // Sort activities by end time
  arr.sort((a, b) => a.end - b.end);
  // Initialize result to 1 (first activity is always selected)
  let res = 1;
  // Initialize previous activity index to 0 (first activity is always selected)
  let prev = 0;
  // For each subsequent activity, select it if it starts after the end time of the previous selected activity
  for (let curr = 1; curr < arr.length; curr++) {
    if (arr[curr].start >= arr[prev].end) {
      // Increment result by 1 (select current activity)
      res++;
      // Update previous activity index to current activity index
      prev = curr;
    }
  }
  // Return the number of activities selected
  return res;
}
// Example: arr = [new Activity(12, 25), new Activity(10, 20), new Activity(20, 30)]
// Sorted: [new Activity(10, 20), new Activity(12, 25), new Activity(20, 30)]
// prev = 0, curr = 1: arr[1].start = 12 >= arr[0].end = 20 → not selected
// prev = 0, curr = 2: arr[2].start = 20 >= arr[0].end = 20 → selected, res = 2
// prev = 2, curr = 3: arr[3].start = 30 >= arr[2].end = 30 → not selected
// return 2
let arr = [new Activity(12, 25), new Activity(10, 20), new Activity(20, 30)];
console.log(maxActivities(arr));
