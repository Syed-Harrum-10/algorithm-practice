// #1

function fib(n) {
    let dp = new Array(n + 1).fill(0);

    dp[0] = 0;
    dp[1] = 1;

    for(let i = 2; i < dp.length; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }

    return dp[n]
}

// #2

function climbStairs(n) {
    let dp = new Array(n + 1).fill(0);

    dp[0] = 1;
    dp[1] = 2;

    for(let i = 2; i < dp.length; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }

    return dp[n]
}

// #3

function maxSum(nums) {
    let dp = new Array(nums.length).fill(0);

    dp[0] = 0;
    dp[1] = Math.max(nums[0], nums[1]);

    for(let i = 2; i < dp.length; i++) {
        dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i]);
    }

    return dp[nums]
}

// #4

function minCost(nums) {
    let dp = new Array(nums.length).fill(0);

    dp[0] = nums[0];
    dp[1] = Math.min(nums[0], nums[1]);

    for(let i = 2; i < dp.length; i++) {
        dp[i] = Math.min(dp[i-1], dp[i-2] + nums[i]);
    }

    return Math.min(dp[nums.length-1], dp[nums.length-2])
}

// #5

function minCost(nums) {
    let dp = new Array(nums.length).fill(0);

    dp[0] = nums[0];
    dp[1] = nums[1];

    for(let i = 2; i < dp.length; i++) {
        dp[i] = nums[i] + Math.min(dp[i-1], dp[i-2])
    }
    return Math.min(dp[nums.length-1], dp[nums.length-2])
}