// problem 1 

// let arr = [3, 1, 2, 1, 3]

// for(let i = 0; i < arr.length; i ++) {
//     for(let j = 0; j < arr.length  - 1; j++) {
//         if(arr[j] > arr[j + 1]) {
//             let temp = arr[j]
//             arr[j] = arr[j + 1]
//             arr[j + 1] = temp
//         }
//     }
// }


// let left = 0
// let right = arr.length - 1
// let isPalindrome = true

// while (left < right) {
//     if(arr[left] !== arr[right]) {
//         isPalindrome = false
//     }
//     left ++ 
//     right --
// }

// console.log(isPalindrome);

// problem 2 

// let arr = [1, 3, 5, 7, 10]
// let left = 0
// let right = arr.length - 1
// let max = 0

// while (left < right) {
//     let sum = arr[left] + arr[right]
//     if(sum > max) {
//         max = sum
//         console.log(arr[left], arr[right])
//     }
//     left ++
//     right --
// }

// problem 3 

// let arr = [1, -2, 3, -4, 5];
// let left = 0;
// let right = arr.length - 1;

// while (left < right) {
//     if (arr[right] > 0) {
//         right--;
//     } else if (arr[left] < 0) {

//         left++;
//     } else {
//         let temp = arr[right];
//         arr[right] = arr[left];
//         arr[left] = temp;
        
//         left++;
//         right--;
//     }
// }

// console.log(arr);

// problem 4

// let arr = [1, 2, 3, 4, 5, 6]
// let left = 0;
// let right = arr.length - 0;
// let reverse = []

// while (left < right) {
//     let sum = arr[left] + arr[right]
//     if(sum / 2) {
//         reverse = arr[left], arr[right]
//     }
// }
// for(let i = reverse.length - 1; i >= 0; i--) {
//     reverse = reverse[i]
// }
// console.log(reverse);

// problem 5 

// let arr = [-3, -1, 0, 1, 3]
// let left = 0
// let right = arr.length - 1;
// let sumToZero = []
// let count = 0

// while (left < right) {
//     let sum = arr[left] + arr[right]
//     if(sum === 0) {
//         sumToZero[count] = [arr[left], arr[right]]
//         count ++
//     }
//     left ++
//     right --
// }

// console.log(sumToZero);

// problem 6 

// let arr = [-4, -1, 1, 3, 5]
// let left = 0
// let right = arr.length - 1
// let closeToZero = []

// while (left < right) {
//     let sum = arr[left] + arr[right]
//     if(sum === 0) {
//         closeToZero = [arr[left], arr[right]]
//     }
//     left ++
//     right --
// }
// console.log(closeToZero);

// problem 7 

//  let arr = [1, 2, 3, 4, 5, 6]
//  let left = 0
//  let right = arr.length - 1 
//  let isTrue = false
//  let target = 7

//  while(left < right) {
//     let sum = arr[left] + arr[right]
//     if(sum === target) {
//         isTrue = true
//     }
//     left ++
//     right --
//  }
//  console.log(isTrue);

// problem 8 

// let arr = [1, 3, 5, 7, 9]
// let left = 0
// let right = arr.length - 1
// let target = 10
// let output = []
// let count = 0

// while (left < right) {
//     let sum = arr[left] + arr[right];
//     if(sum <= target) {
//         output[count] = [arr[left], arr[right]]
//         count++
//         left ++
//     }else {
//         right --
//     }

// }
 
// console.log(output);

// problem 9 

// let arr = [1, 2, 3, 4, 5, 5]; 
// let left = 0;
// let right = arr.length - 1;
// let evenSum = [];
// let count = 0;

// while (left < right) {
//     let sum = arr[left] + arr[right];
//     if (sum % 2 === 0) {
//         evenSum[count] = [sum]; 
//         count++;
//     }
//     left++;
//     right--;
// }

// console.log(evenSum);

