/*
 * PROBLEM STATEMENT:
 * Top view of a binary tree: for each vertical line (horizontal distance),
 * return the value of the topmost node on that line (first node seen in BFS).
 * Output left to right (minhd to maxhd).
 *
 * Approach: BFS with (node, hd). Store node.data in map[hd] only the first time
 * we see that hd — that node is the topmost for that vertical line.
 */

// Tree node: data and left/right children
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function topView(root) {
  if (root === null) {
    return [];
  }
  // map: hd → value of the topmost node at that hd (first one we see in BFS)
  let map = new Map();
  let queue = [];
  queue.push([root, 0]); // root at horizontal distance 0
  let minhd = 0;
  let maxhd = 0;

  while (queue.length > 0) {
    let [node, hd] = queue.shift();
    // Only set if this is the first time we see this hd → topmost node for this vertical line
    if (!map.has(hd)) {
      map.set(hd, node.data);
    }
    // if the left child is not null, then push it to the queue with hd - 1
    if (node.left !== null) {
      queue.push([node.left, hd - 1]);
    }
    // if the right child is not null, then push it to the queue with hd + 1
    if (node.right !== null) {
      queue.push([node.right, hd + 1]);
      // update minhd and maxhd to the minimum and maximum horizontal distance respectively
      minhd = Math.min(minhd, hd);
      maxhd = Math.max(maxhd, hd);
    }
  }
  let result = [];
  for (let i = minhd; i <= maxhd; i++) {
    result.push(map.get(i));
  }
  return result;
}

/*
 * EXAMPLE TREE:         1 (hd=0)
 *                     /   \
 *              2(-1)        3(1)
 *             /   \        /   \
 *          4(-2)  5(0)  6(0)  7(2)
 *
 * STEP-BY-STEP EXECUTION (BFS):
 * Initial: queue = [[1,0]], map = {}, minhd=0, maxhd=0
 *
 * Step 1:  [1,0]  → map[0]=1 (first at hd=0), queue += [2,-1],[3,1], minhd=0, maxhd=1
 * Step 2:  [2,-1] → map[-1]=2, queue += [4,-2],[5,0], minhd=-1, maxhd=1
 * Step 3:  [3,1]  → map[1]=3, queue += [6,0],[7,2], minhd=-1, maxhd=2
 * Step 4:  [4,-2] → map[-2]=4, queue += (none), minhd=-2, maxhd=2
 * Step 5:  [5,0]  → map has 0, skip; minhd=-2, maxhd=2
 * Step 6:  [6,0]  → map has 0, skip
 * Step 7:  [7,2]  → map[2]=7, minhd=-2, maxhd=2
 *
 * result = [ map[-2], map[-1], map[0], map[1], map[2] ] = [4, 2, 1, 3, 7]
 */
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
console.log(topView(root)); // [4, 2, 1, 3, 7]
