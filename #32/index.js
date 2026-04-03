// Sliding Window 

// problem 1 

// let arr = [3, 5, 2, 1, 4];
// let k = 2;
// let current = 0;
// let count = 0;

// for(let i = 0; i < k; i++) {
//     current += arr[i]
// }

// let total = [current];
// count++

// for(let i = k; i < arr.length ; i++) {
//             current = current + arr[i] - arr[i - k]
//             total[count] = current
//             count++
        
    

// }

// console.log(total);

// problem 2 

// let arr = [4, 2, 1, 7, 8, 1, 2, 3];
// let k = 3;
// let current = 0;

// for(let i =0; i < k; i++) {
//     current += arr[i]
// }

// let max = current;

// for(let i = k; i < arr.length - k; i++) {
    
//         current = current + arr[i] - arr[i - k]
    
//     if(current > max) {
//         max = current
//     }
// }

// console.log(max);

// problem 3

// let arr = [5, 3, 2, 8, 1, 4];
// let k = 3;
// let current = 0;

// for(let i = 0; i < k; i++) {
//     current += arr[i]
// }

// let min = current;

// for(let i = k; i < arr.length; i++) {
//     current = current + arr[i + k] - arr[i]
//     if(current < min) {
//         min = current
//     }
    
// }

// console.log(min);

// problem 4 

// let arr = [2, 4, 6, 8, 10];
// let k = 3;
// let current = 0;


// for(let i = 0; i < k; i++) {
//     current += arr[i];
// }

// let averages = [];
// let count = 0;


// averages[count] = current / k;
// count++;


// for(let i = k; i < arr.length; i++) {

//     current = current + arr[i] - arr[i - k];
    

//     averages[count] = current / k;
//     count++;
// }

// console.log(averages); 

// problem 5 

// let arr = [1, 3, 5, 7, 9];
// let k = 2;
// let target = 8;
// let current = 0;

// for(let i = 0; i < k; i++) {
//     current += arr[i]
// }

// let result = current;

// for(let i = 0; i < arr.length; i++) {
//     if( current < target) {
//         result = current
//     }
//     current = current - arr[i] + arr[i + k];
    
// }

// console.log(result);


// problem 6

// let arr = [-3, 2, -4, 1, 5];
// let k = 2;
// let current = 0;

// for(let i = 0; i < k; i++) {
//     current += arr[i];
// }

// let result = [];
// let count = 0;

// if (current < 0) {
//     result[count] = current;
//     count++;
// }

// for(let i = k; i < arr.length; i++) {
//     current = current + arr[i] - arr[i - k];
    
//     if (current < 0) {
//         result[count] = current;
//         count++;
//     }
// }

// console.log(result); 

// problem 7 

// let arr = [1, 2, 3, 4, 5];
// let k = 2;
// let target = 10;
// let current = 0;

// for(let i = 0; i < k; i++) {
//     current += arr[i]
// }

// let result = current;
// let isLess = false;

// for(let i = k; i < arr.length; i++) {
    
//     if(current > result) {
//         result = current;
//     }

//     current = current + arr[i] - arr[i - k]
//     isLess = true
// }

// problem 8 

// let arr = [1, 2, 3, 4, 5];
// let k = 2;
// let current = 0;

// for(let i = 0; i < k; i ++) {
//     current += arr[i]
// }

// let count = 0;

// if(current % 2 === 0) {
//         count++
//     }

// for(let i = k; i < arr.length; i++) {
    
//     current = current + arr[i] - arr[i - k]

//     if(current % 2 === 0) {
//         count++
//     }
// }

// console.log(count);

// problem 9 

// let arr = [1, 3, 2, 5, 4];
// let k = 3;
// let current = 0;

// for(let i = 0; i < k; i++) {
//     current += arr[i]
// }

// let max = current;

// for(let i = k; i < arr.length; i++) {
//     if(current > max) {
//         max = current
//     }
//     current = current + arr[i] - arr[i - k]
// }

// console.log(max);


// Bubble Sort 

// let arr = [8, 3, 6, 1, 9];


// for(let i = 0; i < arr.length; i++) {
//     for(let j = 0; j < arr.length - 1; j++) {
//         if(arr[j] > arr[j + 1]) {
//             let temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//         }
//     }
// }

// let small = arr[0];
// let secondSmall;

// for(let i = 1; i < arr.length; i++) {
//     if(arr[i] !== small) {
//         secondSmall = arr[i]
//         break;
//     }
// }

// console.log(secondSmall);

// Bubble Sort

// let arr = [4, 2, 7, 1, 5];

// for(let i = 0; i < arr.length; i++) {
//     for(let j = 0; j < arr.length - 1; j++) {
//         if(arr[j] < arr[j + 1]) {
//             let temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp
//         }
//     }
// }

// console.log(arr);

// two pointer 

// let arr = [1, 3, 5, 7, 9];
// let target = 12;

// let left = 0;
// let right = arr.length - 1;

// while (left < right) {
//     let sum = arr[left] + arr[right];
//     if(sum === target) {
//         console.log(arr[left], arr[right]);
        
//     }
//     left ++
//     right --
    
// }

// let str = "madam";
// let left = 0;
// let right = str.length - 1;
// let palindrome = true;

// while (left < right) {
//     if(str[left] !== str[right]) {
//         palindrome = false;
//         break;
//     }
//     left ++
//     right --
// }
// console.log(palindrome);
