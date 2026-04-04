// problem 1 

// let arr = [4, 2, 7, 1, 9, 3]
// let current = 0;
// let k = 3;

// for(let i = 0; i < k; i++) {
//     current += arr[i]
// }

// let sum = [current];
// let count = 0;

// for(let i = 0; i < arr.length - k; i++) {
//     if(current > sum) {
//         sum[count] = current
//         count++
//     }
//     current = current - arr[i] + arr[i + k]
//     sum[count] = current;
//     count++
// }

// console.log(sum);

// problem 2 

// let arr = [2, 3, 4, 1, 5];
// let k = 2;
// let current = 0;

// for(let i = 0; i < k; i++) {
//     current += arr[i]
// }

// let sum = current;

// for(let i = 0; i < arr.length - k; i++) {
//     if(current > sum) {
//         sum = current
//     }
//     current = current - arr[i] + arr[i + k]
//     sum = current
// }

// console.log(sum);


// problem 3 

// let arr = [4, 3, 2, 6, 1, 5];
// let k = 3;
// let current = 0;

// for(let i = 0; i < k; i++) {
//     current += arr[i]
// }

// let min = current;

// for(let i = 0; i < arr.length - 1; i++) {
//     current = current + arr[i + k] - arr[i] 
//     if(current < min) {
//         min = current
//     }
    
// }

// console.log(min);

// problem 4 

// let arr = [2, 4, 2, 6, 2];
// let k = 2;
// let target = 6;
// let current = 0;

// for(let i = 0; i < k; i++) {
//     current += arr[i]
// }

// let sum = current;

// for(let i = 0; i < arr.length - k; i++) {
//     if(current === target) {
//         sum = current
//         break;
//     }
//     current = current - arr[i] + arr[i + k]
//     sum = current
// }

// console.log(sum);

// problem 5 

// let arr = [3, 6, 9, 12];
// let k = 2;
// let current = 0;

// for(let i = 0; i < k; i++) {
//     current += arr[i]
// }

// let average = [];
// let count = 0;

// average[count] = current / k;
// count++

// for(let i = 0; i < arr.length - k; i++) {
//     current = current - arr[i] + arr[i + k]
//     average[count] = current / k;
//     count++;
// }

// console.log(average);

// problem 6 

// let arr = [1, 4, 2, 7, 3];
// let k = 3;
// let target = 12;
// let current = 0;

// for(let i = 0; i < k; i++) {
//     current += arr[i]
// }

// let sum = current;
// let isEqal = false;

// for(let i = 0; i < arr.length - k; i++) {
//     current = current - arr[i] + arr[i + k];

//     if(current === target) {
//         isEqal = true;
//         break;
//     }
    
// }

// console.log(isEqal);

// problem 7

// let arr = [3, 5, 2, 8, 1];
// let k = 2;
// let target = 7;
// let current = 0;

// for(let i = 0; i < k; i++) {
//     current += arr[i]
// }

// let sum = current;

// for(let i = 0; i < arr.length - k; i++) {
//     current = current - arr[i] + arr[i + k];
//     if(current > target) {
//         sum = current;
//         break;
//     }
// }

// console.log(sum);

// problem 8

// let arr = [1, 2, 3, 4];
// let k = 2;
// let current = 0;

// for(let i = 0; i < k; i++) {
//     current += arr[i];
// }

// let sum = current;

// for(let i = 0; i < arr.length - k; i++) {
//     current = current - arr[i] + arr[i + k];
//     if(current > sum) {
//         sum = current;
//     }
// }

// console.log(sum);

// problem 9 

// let arr = [2, 1, 5, 3, 4];
// let k = 3;
// let current = 0; 

// for(let i = 0; i < k; i++) {
//     current += arr[i]
// }

// let sum = [current];


// for(let i = 0; i < arr.length - k; i++) {
//     current = current - arr[i] + arr[i + k];
//     if(current > sum) {
//         sum = current;
//     }
// }

// console.log(sum);

// problem 10

// let arr = [2, 4, 1, 6, 3];
// let k = 2;
// let current = 0;

// for(let i = 0; i < k; i++) {
//     current += arr[i]
// }

// let count = 0;

// if(current % 2 === 0) {
//     count++;
// }

// for(let i = 0; i < arr.length - 1; i++) {
//     current = current - arr[i] + arr[i + 1];
//     if(current % 2 === 0) {
//         count ++
//     }
// }
// console.log(count);


