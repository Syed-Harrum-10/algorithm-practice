// problem 1 

// let arr = [1, 3, 5, 2, 4, 6];
// let k = 3;
// let current = 0;


// for(let i = 0; i < k; i++) {
//     current += arr[i];
// }

// let sum = [];
// let count = 0;

// sum[count] = current; 
// count++;

// for(let i = 0; i < arr.length - k; i++) {
//     current = current - arr[i] + arr[i + k];
//     sum[count] = current;
//     count++;
// }

// console.log(sum); 

// problem 2

// let arr = [3, 1, 6, 2, 8, 4];
// let k = 3;
// let current = 0;

// for(let i = 0; i < k; i++) {
//     current += arr[i];
// }

// let sum = current;

// for(let i = 0; i < arr.length; i++) {
//     if(current > sum) {
//         sum = current
//     }
//     current = current - arr[i] + arr[i + k];
// }

// console.log(sum);

// problem 3 

// let arr = [1, 3, 2, 4, 1, 3];
// let k = 3;
// let target = 6;
// let current = 0;
// let count = 0;

// for(let i = 0; i < k; i++) {
//     current += arr[i];
// }

// if(current === target) {
//     count++
// }


// for(let i = 0; i < arr.length - k; i++) {
    
//     current = current - arr[i] + arr[i + k];

//     if(current === target) {
//         count++
//     }
// }

// console.log(count);

// problem 4

// let arr = [5, 2, 8, 1, 4, 3];
// let k = 2;
// let current = 0; 

// for(let i = 0; i < k; i++) {
//     current += arr[i];
// }

// let min = current;

// for(let i = 0; i < arr.length; i++) {
//     if(current < min) {
//         min = current;
//     }
//     current = current + arr[i + k] - arr[i];
// }

// console.log(min);

// problme 5 

// let arr = [2, 4, 1, 6, 3];
// let k = 3;
// let target = 11;
// let current = 0;
// let output = false;

// for(let i = 0; i < k; i++) current += arr[i];


// if(current === target) output = true;

// for(let i = 0; i < arr.length - k; i++) {
//     current = current - arr[i] + arr[i + k];
//     if(current === target) output = true;
// }

// console.log(output);

// problem 6 

// let arr = [2, 4, 1, 6, 3];
// let k = 3;
// let current = 0;
// let count = 0;


// for(let i = 0; i < k; i++) {
//     current += arr[i];
// }


// let firstSum = current;


// for(let i = 0; i < arr.length - k; i++) {
//     current = current - arr[i] + arr[i + k];
    

//     if(current > firstSum) {
//         count++;
//     }
// }

// console.log(count); 

// problem 7 

// let arr = [6, 2, 8, 4, 10];
// let k = 2;
// let current = 0;

// for(let i = 0; i < k; i++) {
//     current += arr[i];
// }

// let sum = [];
// let count = 0;

// sum[count] = current / k;
// count++;

// for(let i = 0; i < arr.length - k; i++) {
//     current = current - arr[i] + arr[i + k];
//     sum[count] = current / k;
//     count++
// }


// console.log(sum);


// problem 8 

// let arr = [1, 2, 3, 4, 5];
// let k = 3;
// let current = 0;

// for(let i = 0; i < k; i++) current += arr[i];

// let maxSum = current;

// for(let i = 0; i < arr.length - k; i++) {
//     current = current - arr[i] + arr[i + k];
//     if(current > maxSum) {
//         maxSum = current;
//     }
// }

// console.log(maxSum); 

// problem 9 

// let arr = [4, 1, 7, 3, 5];
// let k = 3;
// let current = 0;

// for (let i = 0; i < k; i++) {
//     current += arr[i];
// }

// let maxSum = current;
// let startIndex = 0;

// for (let i = 0; i < arr.length - k; i++) {
//     current = current - arr[i] + arr[i + k];
//     if (current > maxSum) {
//         maxSum = current;
//         startIndex = i + 1;
//     }
// }

// let elements = [];
// for (let i = 0; i < k; i++) {
//     elements[i] = arr[startIndex + i];
// }

// console.log("elements:", elements, "sum:", maxSum);

// problem 10 

// let arr = [2, 3, 4, 5, 6];
// let k = 2;
// let current = 0;
// let count = 0;

// for (let i = 0; i < k; i++) {
//     current += arr[i];
// }

// if (current % 2 === 0) {
//     count++;
// }

// for (let i = 0; i < arr.length - k; i++) {
//     current = current - arr[i] + arr[i + k];
//     if (current % 2 === 0) {
//         count++;
//     }
// }

// console.log(count);
