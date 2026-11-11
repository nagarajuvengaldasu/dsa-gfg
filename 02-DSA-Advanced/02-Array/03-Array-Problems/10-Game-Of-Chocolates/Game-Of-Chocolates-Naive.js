function game(a, b) {
    const memo = new Map();

    function isWinning(x, y) {
        // Order to avoid duplicate states
        if (x > y) [x, y] = [y, x];

        const key = `${x},${y}`;
        if (memo.has(key)) return memo.get(key);

        // No chocolates left → losing position
        if (x === 0 && y === 0) {
            memo.set(key, false);
            return false;
        }

        // Try removing L chocolates from one box
        for (let L = 1; L <= Math.max(x, y); L++) {
            if (x >= L && !isWinning(x - L, y)) {
                memo.set(key, true);
                return true;
            }
            if (y >= L && !isWinning(x, y - L)) {
                memo.set(key, true);
                return true;
            }
        }

        // Try removing L chocolates from both boxes
        for (let L = 1; L <= Math.min(x, y); L++) {
            if (!isWinning(x - L, y - L)) {
                memo.set(key, true);
                return true;
            }
        }

        // If no winning move found
        memo.set(key, false);
        return false;
    }

    // If starting position is losing, Bunty should play first
    return isWinning(a, b);
}
let a = 1;
let b = 3;
console.log(game(a, b));