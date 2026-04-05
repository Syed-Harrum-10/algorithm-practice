// // problem 1 
// let arr1 = [5, 1, 9, 3, 7, 2];
// for(let i = 0; i < arr1.length; i++) {
//     for(let j = 0; j < arr1.length - 1; j++) {
//         if(arr1[j] > arr1[j + 1]) {
//             let temp = arr1[j];
//             arr1[j] = arr1[j + 1];
//             arr1[j + 1] = temp;
//         }
//     }
// }
// let secondLargest = arr1[arr1.length - 2];
// console.log(secondLargest);

// // problem 2 
// let arr2 = [3, 1, 4, 1, 5, 9, 2, 6];
// let target2 = 4;
// let count2 = 0;
// let element2 = [];
// for(let i = 0; i < arr2.length; i++) {
//     for(let j = 0; j < arr2.length - 1; j++) {
//         if(arr2[j] > arr2[j + 1]) {
//             let temp = arr2[j];
//             arr2[j] = arr2[j + 1];
//             arr2[j + 1] = temp;
//         }
//     }
// }
// for(let i = 0; i < arr2.length; i++) {
//     if(arr2[i] > target2) {
//         element2.push(arr2[i]);
//         count2++;
//     }
// }
// console.log(count2, element2);

// problem 3 

// let arr = [1, 3, 5, 7, 9];
// let target = 10;
// let left = 0;
// let right = arr.length - 1;

// while (left < right) {
//     let sum = arr[left] + arr[right];
//     if(sum === target) {
//         console.log(`${[arr[left], arr[right]]}`);
//     }
//     left ++;
//     right --;
// }

// problem 4 

// let arr = [1, 2, 3, 4, 5];
// let left = 0;
// let right = arr.length - 1;

// while (left < right) {
//     let temp = arr[left];
//     arr[left] = arr[right];
//     arr[right] = temp;
//     left ++;
//     right --;
// }

// console.log(arr);

// problem 5 

// let str5 = "levelUp";
// let left5 = 0;
// let right5 = str5.length - 1;
// let isPalindrome = true;
// while (left5 < right5) {
//     if(str5[left5].toLowerCase() !== str5[right5].toLowerCase()) {
//         isPalindrome = false;
//         break;
//     }
//     left5++;
//     right5--;
// }
// console.log(isPalindrome);

// problem 6 

// let arr = [2, 3, 5, 1, 6];
// let k = 3;
// let current = 0;

// for(let i = 0; i < k; i++) {
//     current += arr[i];
// }

// let sum = current;

// for(let i = 0; i < arr.length - k; i++) {
//     current = current - arr[i] + arr[i + k];
//     if(current > sum) {
//         sum = current
//     }
// }

// console.log(sum);

// problem 7 

// let arr7 = [2, 4, 2, 4, 2];
// let k7 = 2;
// let target7 = 6;
// let current7 = 0;
// for(let i = 0; i < k7; i++) {
//     current7 += arr7[i];
// }
// let win7 = current7;
// for(let i = 0; i < arr7.length - k7; i++) {
//     current7 = current7 - arr7[i] + arr7[i + k7];
//     if(current7 === target7) {
//         win7 = current7;
//     }
// }

// problem 8 

// let arr8 = [4, 1, 3, 2, 5];
// let k8 = 2;
// let current8 = 0;
// for(let i = 0; i < k8; i++) {
//     current8 += arr8[i];
// }
// let min8 = current8;
// for(let i = 0; i < arr8.length - k8; i++) {
//     current8 = current8 - arr8[i] + arr8[i + k8];
//     if(current8 < min8) {
//         min8 = current8;
//     }
// }
// console.log(min8);


// problem 9 

// let arr = [4, 1, 8, 3, 9];


// for(let i = 0; i < arr.length; i++) {
//     for(let j = 0; j < arr.length; j ++) {
//         if(arr[j] > arr[j + 1]) {
//             let temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//         }
//     }
// }

// let current = 0; 
// let target = 10;
// let left = 0;
// let right = arr.length - 1;

// while (left < right) {
//     let sum = arr[left] + arr[right];
//     if(sum === target) {
//         console.log(arr[left], arr[right]);
//     }
//     left ++;
//     right --;
// }

// problem 10

// let arr10 = [2, 3, 5, 1, 4];
// let k10 = 2;
// let current10 = 0;
// for(let i = 0; i < k10; i++) {
//     current10 += arr10[i];
// }
// let sum10 = current10;
// for(let i = 0; i < arr10.length - k10; i++) {
//     current10 = current10 - arr10[i] + arr10[i + k10];
//     if(current10 > sum10) {
//         sum10 = current10;
//     }
// }
// console.log(sum10);