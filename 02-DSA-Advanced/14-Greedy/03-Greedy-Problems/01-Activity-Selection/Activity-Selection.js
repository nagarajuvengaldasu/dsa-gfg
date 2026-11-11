/*
 * ========== PROBLEM: Activity Selection ==========
 *
 * Given n activities with start and finish times, select the maximum
 * number of activities that can be performed by a single person,
 * assuming only one activity at a time. Two activities are compatible
 * if the start time of one is strictly after the finish time of the other.
 *
 * Input:  start  = array of start times
 *         finish = array of finish times (activity i runs [start[i], finish[i]])
 *
 * Output: Maximum number of non-overlapping activities that can be selected.
 *
 * Approach: Greedy — sort by finish time ascending. Pick the first activity,
 * then repeatedly pick the next activity whose start time is strictly
 * greater than the last chosen activity's finish time.
 *
 * Time: O(n log n)  |  Space: O(n)
 */

// Activity Selection Problem
class Solution {
  activitySelection(start, finish) {
    // if the start or finish array is empty, return 0
    const n = start.length;
    // if the start or finish array is empty, return 0
    if (n === 0) return 0;

    // Pair each activity as [start, finish] for sorting
    const activities = [];
    // pair each activity as [start, finish] for sorting
    for (let i = 0; i < n; i++) {
      // push the activity to the activities array
      activities.push([start[i], finish[i]]);
    }
    activities.sort((a, b) => a[1] - b[1]);  // Sort by finish time ascending

    let count = 1;                           // First activity (earliest finish) is always selected
    let lastfinishtime = activities[0][1];   // Finish time of last selected activity

    for (let i = 1; i < n; i++) {
      if (activities[i][0] > lastfinishtime) {  // Current activity starts after last finished (no overlap)
        count++; // increment the count
        lastfinishtime = activities[i][1]; // update the last finish time
      }
    }
    return count; // return the count
  }
}

const solution = new Solution();
const start = [1, 3, 0, 5, 8, 5];
const finish = [2, 4, 6, 7, 9, 9];
console.log(solution.activitySelection(start, finish));
