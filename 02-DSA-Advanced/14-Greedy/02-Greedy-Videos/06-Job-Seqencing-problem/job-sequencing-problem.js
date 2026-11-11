/*
 * Job Sequencing Problem (Greedy)
 *
 * Each job takes 1 unit of time. Only one job at a time. Time starts at 0.
 * Given jobs with id, deadline, profit — maximize total profit.
 *
 * Approach:
 * 1) Sort jobs by profit descending (highest profit first)
 * 2) For each job, assign to latest possible slot (<= deadline)
 * 3) Sum profit of assigned jobs
 *
 * Slots: 0 to maxDeadline-1 (job with deadline d can use slots 0..d-1)
 */

function jobSequencing(jobs, n) {
  // Sort by profit descending
  jobs.sort((a, b) => b.profit - a.profit);

  let maxDeadline = 0;
  for (let j of jobs) {
    maxDeadline = Math.max(maxDeadline, j.deadline);
  }

  let slots = new Array(maxDeadline).fill(-1);  // -1 = free
  let profit = 0;
  let count = 0;

  for (let job of jobs) {
    // Assign to latest possible slot (from deadline-1 down to 0)
    for (let s = Math.min(job.deadline, maxDeadline) - 1; s >= 0; s--) {
      if (slots[s] === -1) {
        slots[s] = job.id;
        profit += job.profit;
        count++;
        break;
      }
    }
  }

  return { count, profit };
}

// Example 2 from image: J0(4,50), J1(1,5), J2(1,20), J3(5,10), J4(5,80)
let jobs = [
  { id: 0, deadline: 4, profit: 50 },
  { id: 1, deadline: 1, profit: 5 },
  { id: 2, deadline: 1, profit: 20 },
  { id: 3, deadline: 5, profit: 10 },
  { id: 4, deadline: 5, profit: 80 },
];
let { count, profit } = jobSequencing(jobs, 5);
console.log(count, profit);  // 4 jobs, profit 160 (J4:80 + J0:50 + J3:10 + J2:20)
