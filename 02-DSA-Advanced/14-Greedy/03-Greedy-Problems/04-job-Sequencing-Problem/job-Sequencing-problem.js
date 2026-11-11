/*
 * ========== PROBLEM: Job Sequencing Problem ==========
 *
 * Given n jobs with deadlines and profits, find the maximum profit.
 * Each job takes 1 time unit; only one job at a time. Job with deadline d
 * must be done by time d (slots 1..d are valid; we use 1-based slots).
 *
 * Input:  deadline = array of job deadlines, profit = array of job profits
 * Output: [ jobcount, totalprofit ]
 *
 * Approach: Greedy — sort by profit descending. Use Union-Find so that
 * find(deadline) gives the latest free slot ≤ deadline; after using a slot,
 * union it with the previous slot.
 */
class Solution {
  jobSequencing(deadline, profit) {
    // --- Step 1: Build and sort jobs by profit (highest first) ---
    const n = deadline.length;                    // e.g. n = 5
    const jobs = [];
    for (let i = 0; i < n; i++) {
      jobs.push({ deadline: deadline[i], profit: profit[i] });  // pair each job's deadline & profit
    }
    jobs.sort((a, b) => b.profit - a.profit);     // e.g. order: 100, 20, 15, 10, 5

    // --- Step 2: Union-Find — parent[i] = "next free slot" for slot ≤ i (1-based slots) ---
    let maxDeadline = Math.max(...deadline);       // e.g. 4 → we have slots 1..4
    const parent = new Array(maxDeadline + 1);    // indices 0..maxDeadline (slot 0 = "no slot")
    for (let i = 0; i <= maxDeadline; i++) {
      parent[i] = i;                              // init: each index is its own root (all free)
    }
    // find(x): follow parent chain to root = latest free slot ≤ x; path compression for speed
    function find(x) {
      if (parent[x] === x) {
        return x;                                 // root found, return it
      }
      return (parent[x] = find(parent[x]));       // recurse and compress path (point x to root)
    }

    let jobcount = 0;
    let totalprofit = 0;

    // --- Step 3: Greedily assign each job to latest free slot ≤ its deadline ---
    for (let job of jobs) {
      let availableSlot = find(job.deadline);     // e.g. find(2) → 2, then later → 1, then 0
      if (availableSlot > 0) {                    // 0 means no valid slot left by this deadline
        jobcount++;
        totalprofit += job.profit;
        parent[availableSlot] = find(availableSlot - 1);  // "use" this slot: link to next free (slot-1 chain)
      }
    }
    return [jobcount, totalprofit];
  }
}
// --- Example run ---
const solution = new Solution();
const deadline = [2, 2, 3, 3, 4];
const profit = [100, 20, 15, 10, 5];
console.log(solution.jobSequencing(deadline, profit));  // [ 3, 135 ] — 3 jobs, profit 100+20+15
