// #1 

// function climbStairs(n) {
//     if (n <= 2) return n;


//     let dp = new Array(n + 1);


//     dp[1] = 1; 
//     dp[2] = 2; 


//     for (let i = 3; i <= n; i++) {
//         dp[i] = dp[i - 1] + dp[i - 2];
//     }


//     return dp[n];
// }

// console.log(climbStairs(3)); 

// #2

// function minCost(cost) {
//     let dp = new Array(cost.length).fill(0);

//     dp[0] = cost[0];
//     dp[1] = cost[1];

//     for (let i = 2; i < cost.length; i++) {
//         dp[i] = cost[i] + Math.min(dp[i-1], dp[i-2]);
//     }

//     return Math.min(dp[cost.length - 1], dp[cost.length - 2]);
// }

// console.log(minCost([10, 15, 20]));

// #3

// function maxSum(nums) {
//     let dp = new Array(nums.length).fill(0);

//     dp[0] = nums[0];
//     dp[1] = Math.max(nums[0], nums[1]);

//     for (let i = 2; i < nums.length; i++) {
//         dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i]);
//     }

//     return dp[nums.length - 1];
// }

// console.log(maxSum([2, 7, 9, 3, 1])); 

// #4

// function coinChange(n) {
//     let dp = new Array(n).fill(0);
//     dp[0] = 1;
//     dp[1] = 2;
//     for(let i = 0; i < dp.length; i ++) {
//         return dp[i] += dp[i - coin]
//     }
// }

// function fib (n) {
//     let dp = new Array(n).fill(0);

//     dp[0] = 0;
//     dp[1] = 1;

//     for(let i = 2; i < dp.length; i++) {
//         dp[i] = dp[n - 1] + dp[i - 2]
//     }
//     return dp[n];
// }