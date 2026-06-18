// #1

// function fib(n) {
//     let arr = new Array(n + 1).fill(0);

//     arr[0] = 0;
//     arr[1] = 1;

//     for(let i = 2; i < arr.length; i++) {
//         arr[i] = arr[i - 1] + arr[i - 2];
//     }

//     return arr[n];
// }

// #2

// function maxSum(nums) {
//     let arr = new Array(nums.length).fill(0);

//     arr[0] = nums[0];
//     arr[1] = Math.max(nums[0], nums[1]);

//     for (let i = 2; i < nums.length; i++) {
//         arr[i] = Math.max(arr[i-1], arr[i-2] + nums[i]);
//     }

//     return arr[nums.length - 1];
// }

// #3

// function minCost(nums) {
//     let arr = new Array(nums.length).fill(0);

//     arr[0] = nums[0];
//     arr[1] = nums[1];

//     for (let i = 2; i < nums.length; i++) {
//         arr[i] = nums[i] + Math.min(arr[i-1], arr[i-2]);
//     }

//     return Math.min(arr[nums.length-1], arr[nums.length-2]);
// }

// #4

function maxSum(nums) {
    let arr = new Array(nums.length).fill(0);

    arr[0] = nums[0];
    arr[1] = Math.max(nums[0], nums[1]);

    for(let i = 2; i < nums.length; i++) {
        arr[i] = Math.max(arr[i - 1], arr[i - 2] + nums[0]);
    }

    return arr[nums]
}