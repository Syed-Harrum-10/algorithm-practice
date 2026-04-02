// problem 1 

// Bubble Sort 

// let arr = [5, 1, 9, 3, 7]

// for(let i = 0; i < arr.length; i++) {
//     for(let j = 0; j < arr.length - 1; j++) {
//         if(arr[j] > arr[j + 1]) {
//             let temp = arr[j]
//             arr[j] = arr[j + 1]
//             arr[j + 1] = temp
//         }
//     }
// }
// console.log(arr);

// problem 2 
// two pointer 

// let arr = [1, 4, 6, 8, 10]
// let left = 0
// let right = arr.length - 1
// let target = 14

// while (left < right) {
//     let sum = arr[left] + arr[right]
//     if(sum === target) {
//         console.log(arr[left], arr[right]);
//         left ++
//     right --
//     }
//     sum < target ? left ++ : right --
    
// }

// problem 3 
// two pointer 

// let str = "racecar"
// let left = 0
// let right = str.length - 1
// let isPalindrome = true

// while (left < right) {
//     if(str[left] !== str[right]) {
//         isPalindrome = false
//         break;
//     }
//     left ++
//     right --
// }
// console.log(isPalindrome);

// problem 5 

// let arr = [1, 2, 3, 4, 5]
// let left = 0
// let right = arr.length - 1

// while (left < right) {
//     let temp = arr[left]
//     arr[left] = arr[right]
//     arr[right] = temp
//     left ++
//     right --
// }

// console.log(arr);

// problem 6 

// let arr = [1, 2, 3, 4, 5]
// let target = 6

// for(let i = 0; i < arr.length; i++) {
//     for(let j = 0; j < arr.length; j++) {
//         if(arr[i] + arr[j] === target) {
//             console.log(arr[i], arr[j]);
//         }
//     }
// }

// problem 7

// let arr = [3, 5, 3, 6, 7, 5]
// let nonRepeated = []
// let count = 0

// for(let i = 0; i < arr.length; i++) {
//     for(let j = 0; j < arr.length; j++) {
//         if(arr[i] !== arr[j]) {
//             nonRepeated[count] = arr[i]
//             count++
//         }
//     }
// }
// console.log(nonRepeated);

// problem 8 

// let arr1 = [1, 2, 3, 4]
// let arr2 = [3, 4, 5, 6]

// for(let i = 0; i < arr1.length; i++) {
//     for(let j = 0; j < arr2.length; j++) {
//         if(arr1[i] === arr2[j]) {
//             console.log(arr1[i], arr2[j]);
//         }
//     }
// }

// problem 9 

// let arr = [3, 1, 2, 1, 3]

// for(let i = 0; i < arr.length; i++) {
//     for(let j = 0; j < arr.length - 1; j++) {
//         if(arr[i] > arr[j + 1]) {
//             let temp = arr[j]
//             arr[j] = arr[j + 1]
//             arr[j + 1] = temp
//         }
        
//     }
// }

// let left = 0;
// let right = arr.length - 1;
// let isPalindrome = true;

// while (left < right) {
//     if(arr[left] !== arr[right]) {
//         isPalindrome = false
//         break;
//     }
//     left ++
//     right --
// }

// console.log(isPalindrome);


// problem 10 

// let arr = [7, 1, 5, 3, 9];

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1; j++) {
//         if (arr[j] > arr[j + 1]) {
//             let temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//         }
//     }
// }

// let left = 0;
// let right = arr.length - 1;
// let target = 8;
// let result = [];
// let count = 0;

// while (left < right) {
//     let sum = arr[left] + arr[right];
//     if (sum === target) {
//         result[count] = [arr[left], arr[right]];
//         count++;
//         left++;
//         right--;
//     } else if (sum < target) {
//         left++;
//     } else {
//         right--;
//     }
// }

// console.log(result);
