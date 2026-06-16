// #1

function getFib(n) {
    let newSet = new Array(n).fill(0);

    newSet[0] = 0;
    newSet[1] = 1;

    for(let i = 2; i <= n; i++) {
        newSet[i] = newSet[i - 1] + newSet[i - 2];
    }

    return newSet[n]
}

// #2

function climbStairs(n) {
    let newStairs = new Array(n).fill(0);

    newStairs[1] = 1;
    newStairs[2] = 2;

    for(let i = 2; i <= n; i++) {
        newStairs[i] = newStairs[i - 1] + newStairs[i - 2];
    }

    return newStairs[n]
}

// #3

function maxSum(nums) {
    let dp = new Array(nums.length).fill(0);

    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i]);
    }

    return dp[nums.length - 1];
}
function minCost(cost) {
    let dp = new Array(cost.length).fill(0);

    dp[0] = cost[0];
    dp[1] = cost[1];

    for (let i = 2; i < cost.length; i++) {
        dp[i] = cost[i] + Math.min(dp[i-1], dp[i-2]);
    }

    return Math.min(dp[cost.length-1], dp[cost.length-2]);
}