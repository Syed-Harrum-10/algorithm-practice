// HASHMAP

// problem 1 

// function frequencyCount(arr) {
//     let counts = {};

//     for (let i = 0; i < arr.length; i++) {
//         let num = arr[i];
        
//         if (counts[num] === undefined) {
//             counts[num] = 1;
//         } else {
//             counts[num]++;
//         }
//     }

//     return counts;
// }

// console.log(frequencyCount([1, 2, 3, 2, 1, 3, 3]));

// problem 2 

// function twoSum(arr, target) {
//     for (let i = 0; i < arr.length; i++) {

//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === target) {
//                 return [i, j]; 
//             }
//         }
//     }
//     return null; 
// }

// console.log(twoSum([2, 7, 11, 15], 9));

// problem 3 

// function firstNonRepeating(str) {
//     for (let i = 0; i < str.length; i++) {
//         let isRepeating = false;

//         for (let j = 0; j < str.length; j++) {
//             if (str[i] === str[j] && i !== j) {
//                 isRepeating = true;
//                 break; 
//             }
//         }


//         if (!isRepeating) {
//             return str[i];
//         }
//     }
//     return null; 
// }

// console.log(firstNonRepeating("aabbc")); 

// problem 4 

// function isAnagram(str1, str2) {
//     for(let i = 0; i < str1.length; i++) {
//         for(let j = 0; j < str2; j++) {
//             if(str1[i] === str[j]) {
//                 return true
//             }
//         }
//     }
//     return false
// }
// console.log(isAnagram("listen", "silent"))
// console.log(isAnagram("hello", "world"))

// problem 5 

// function subArraySum(arr, target) {
//     for(let i = 0; i < arr.length; i++) {
//         for(let j = 0; j < arr.length; j++) {
//             if(arr[i] + arr[j] === target) {
//                 return [i, j]
//             }
//         }
//     }
// }
// console.log(subArraySum([1, 2, 3, 4, 5], 9))