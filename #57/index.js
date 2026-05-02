// problem 1 

// function mostFrequent(arr) {
//     let maxCount = 0;
//     let winner;

//     for (let i = 0; i < arr.length; i++) {
//         let count = 0;
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 count++;
//             }
//         }
//         if (count > maxCount) {
//             maxCount = count;
//             winner = arr[i];
//         }
//     }
//     return winner;
// }

// console.log(mostFrequent([1, 2, 3, 2, 1, 3, 3]));

// problem 2 

// function wordCount(str) {
//     let arr = str.split(" "); 
//     let maxCount = 0;
//     let winner;

//     for (let i = 0; i < arr.length; i++) {
//         let count = 0;
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 count++;
//             }
//         }
//         if (count > maxCount) {
//             maxCount = count;
//             winner = arr[i];
//         }
//     }
//     return winner;
// }

// console.log(wordCount("the cat sat on the mat")); 

// problem 3 

// function intersection(arr1, arr2) {
//     let result = [];

//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] === arr2[j]) {
//                 result.push(arr1[i]);
//                 break; 
//             }
//         }
//     }
//     return result;
// }

// console.log(intersection([1, 2, 3, 4], [2, 4, 6]));

// problem 4 

// function twoSum(arr, target) {
//     let map = {};
//     for(let i = 0; i < arr.length; i++) {
//         for(let j = 0; j < arr.length; j++) {
//             if(arr[i] + arr[j] === target) {
//                 return [i, j]
//             }
//         }
//     }
// }
// console.log(twoSum([2, 7, 11, 15], 9))

// problem 5 

// function isAnagram(str1, str2) {
//     if (str1.length !== str2.length) {
//         return false;
//     }

//     let counts = {};


//     for (let i = 0; i < str1.length; i++) {
//         let char = str1[i];
//         counts[char] = (counts[char] || 0) + 1;
//     }

//     for (let i = 0; i < str2.length; i++) {
//         let char = str2[i];
//         if (!counts[char]) {
//             return false; 
//         }
//         counts[char]--;
//     }

//     return true;
// }

// console.log(isAnagram("listen", "silent")); 
// console.log(isAnagram("hello", "world"));   
