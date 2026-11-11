/*
 * ========== PROBLEM: N Meetings in One Room ==========
 *
 * Given n meetings with start and end times, find the maximum number of
 * meetings that can be held in a single room without overlap. Only one
 * meeting at a time; the next meeting must start after the previous one
 * ends (start of next > end of previous).
 *
 * Input:  start = array of start times
 *         end   = array of end times (meeting i runs [start[i], end[i]])
 *
 * Output: Maximum number of non-overlapping meetings that can be scheduled.
 *
 * Approach: Greedy — sort meetings by end time ascending. Select the first
 * meeting, then repeatedly select the next meeting whose start time is
 * strictly greater than the end time of the last selected meeting.
 *
 * Time: O(n log n)  |  Space: O(n)
 */

class Solution {
  maxmeetings(start, end) {
    // if the start or end array is empty, return 0
    const n = start.length;
    // if the start or end array is empty, return 0
    if (n === 0) return 0;

    // Pair each meeting as [start, end] for sorting
    const meetings = [];
    // pair each meeting as [start, end] for sorting
    for (let i = 0; i < n; i++) {
      // push the meeting to the meetings array
      meetings.push([start[i], end[i]]);
    }
    meetings.sort((a, b) => a[1] - b[1]); // Sort by end time ascending

    let count = 1; // First meeting (earliest end) is always selected
    let lastend = meetings[0][1]; // End time of last selected meeting

    for (let i = 1; i < n; i++) {
      if (meetings[i][0] > lastend) {
        // Current meeting starts after last ended (no overlap)
        count++; // increment the count
        lastend = meetings[i][1]; // update the last end time
      }
    }
    return count; // return the count
  }
}
const solution = new Solution();
const start = [1, 3, 0, 5, 8, 5];
const end = [2, 4, 6, 7, 9, 9];
console.log(solution.maxmeetings(start, end));
