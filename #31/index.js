// problem 1

// let arr = [1, 2, 3, 4, 5];
// let k = 2;
// let target = 5;
// let current = 0

// for(let i = 0; i < k; i ++) {
//     current += arr[i]
// }

// let result = [];
// let count = 0;

// for(let i = 0; i < arr.length; i++) {
//     if(current > target) {
//         result[count] = current
//     }
//     if(i < arr.length - k) {
//         current = current - [arr[i] - 1] + arr[i + k - 1 ]
//     }
// }
// console.log(result);

// problem 2

// let arr = [1, 2, 3, 4, 5];
// let k = 3;
// let current = 0;

// for(let i = 0; i < k; i++) {
//     current += arr[i];
// }

// let lastSum = 0;

// for(let i = 0; i <= arr.length - k; i++) {
//     lastSum = current;

//     if (i < arr.length - k) {
//         current = current - arr[i] + arr[i + k];
//     }
// }

// console.log("Sum of last window:", lastSum);

// problem 3

// let arr = [1, 2, 3, 4, 5];
// let k = 2;
// let target = 6;
// let current = 0;
// let count = 0;

// for(let i = 0; i < k; i++) {
//     current += arr[i];
// }

// for(let i = 0; i <= arr.length - k; i++) {

//     if(current < target) {
//         count++;
//     }

//     if (i < arr.length - k) {
//         current = current - arr[i] + arr[i + k];
//     }
// }

// console.log(count);

// problem 4

// let arr = [1, 3, 2, 5, 4];
// let k = 2;
// let current = 0;

// for(let i = 0; i < k; i++) {
//     current += arr[i]
// }

// let result = [];
// let count = 0;

// for(let i = 0; i < arr.length; i++) {
//     if(current > k) {
//         result[count] = current;
//         count++;
//     }
//      if (i < arr.length - k) {
//         current = current - arr[i] + arr[i + k];
//     }
// }
// console.log(result);

// problem 5

// let arr = [1, 2, 3, 4, 5];
// let k = 3;

// for (let i = 0; i <= arr.length - k; i++) {

//     let window = [];
//     let windowCount = 0;

//     for (let j = 0; j < k; j++) {
//         window[windowCount] = arr[i + j];
//         windowCount++;
//     }

//     console.log(window);
// }

// problem 6

// let arr = [2, 4, 6, 8, 10]
// let k = 3
// let current = 0;

// for(let i = 0; i < k; i++) {
//     current += arr[i]
// }

// let max = []
// let count = 0;

// for(let i = 0; i <= arr.length - k; i++) {
//     max[count] = current
//     count++
//     if( i < arr.length - k) {
//         current = current + arr[i + k] - arr[i];
//     }
// }

// console.log(max);

// problem 7

// let arr = [1, 2, 3, 4, 5];
// let k = 2;
// let target = 5;
// let current = 0;

// for (let i = 0; i < k; i++) {
//   current += arr[i];
// }

// let result = current;
// let count = 0;

// for (let i = 0; i < arr.length - k; i++) {
//   if (current === result) {
//     count++;
//   }
//   if(i < arr.length - k ) {
//     current = current + arr[i + k] - arr[i];
//   }
// }
// console.log(count);

// problem 8 

// let arr = [1, 2, 3, 4, 5];
// let k = 2;
// let current = 0;


// for(let i = 0; i < k; i++) {
//     current += arr[i];
// }

// let max = current; 
// let startIndex = 0; 


// for (let i = 0; i <= arr.length - k; i++) {
  

//   if (current > max) {
//     max = current;
//     startIndex = i; 
//   }


//   if (i < arr.length - k) {
//     current = current - arr[i] + arr[i + k];
//   }
// }

// let elements = [];
// for (let j = 0; j < k; j++) {
//   elements[j] = arr[startIndex + j];
// }

// console.log("Max Sum:", max);      
// console.log("Elements:", elements); 

// problem 9 

// let arr = [1, 2, 3, 4, 5];
// let k = 3;
// let target = 12;
// let current = 0;

// for(let i = 0; i < arr.length; i ++) {
//     current += arr[i]
// }


// let isSum = false

// for(let i = 0; i < arr.length - k; i++) {
//     if(current === target) {
//         isSum = true
//         break;
//     }

//     if(i < arr.length - k) {
//         current = current + arr[i + k] - arr[i]
//     }
// }

// console.log(isSum);

// problem 10

// let arr = [3, 1, 4, 1, 5, 9];
// let k = 3;
// let current = 0;

// for(let i = 0; i < k; i++) {
//     current += arr[i]
// }

// let min = current;

// for(let i = 0; i <= arr.length - k; i++) {
//     if(current < min) {
//         min = current
//     }
//     if( i < arr.length - k) {
//         current = current  - arr[i] + arr[i + k]
//     }
// }
// console.log(min);
