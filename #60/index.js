// problem 1 

// function duplicates(arr) {
//     let result = [];

//     for(let i = 0; i < arr.length; i ++) {
//         for(let j = i + 1; j < arr.length; j++) {
//             if(arr[i] === arr[j]) {

//                 result.push([i, j]);
//             }
//         }
//     }

//     return result;
// }

// Big O(n2)

// console.log(duplicates([1, 2, 3, 2, 4, 3]));

// problem 2 

// function wordCount(str) {
//     let counts = {};
//     let words = str.split(' ');

//     for (let i = 0; i < words.length; i++) {
//         let word = words[i];
        
//         if (counts[word]) {

//             counts[word] += 1;
//         } else {

//             counts[word] = 1;
//         }
//     }

//     return counts;
// }

// Big O(n)

// console.log(wordCount("the cat sat on the mat"));

// problem 3 

// function twoSum(arr, target) {
//     let result = [];
//     for(let i = 0; i < arr.length; i++) {
//         for(let j = i + 1; j < arr.length; j++) {
//             if(arr[i] + arr[j] === target) {
//                 result.push([i, j]);
//             }
//         }
//     }
//     return result;
// }

// Big O(n2)

// console.log(twoSum([2, 7, 11, 15], 9));

// problem 4 

// function intersection(arr1, arr2) {
//     let result = [];

//     for(let i = 0; i < arr1.length; i++) {
//         for(let j = 0; j < arr2.length; j++) {
//             if(arr1[i] === arr2[j]) {

//                 if (!result.includes(arr1[i])) {
//                     result.push(arr1[i]);
//                 }
//             }
//         }
//     }
//     return result;
// }

// Big O(n2)

// console.log(intersection([1, 2, 3, 4], [2, 4, 6])); 

// problem 5 

// function mostFrequent(arr) {
//     let counts = {};
//     let maxCount = 0;
//     let mostFrequentItem = null;

//     for (let i = 0; i < arr.length; i++) {
//         let item = arr[i];
        

//         counts[item] = (counts[item] || 0) + 1;


//         if (counts[item] > maxCount) {
//             maxCount = counts[item];
//             mostFrequentItem = item;
//         }
//     }

//     return mostFrequentItem;
// }

// Big O(n)

// console.log(mostFrequent([1, 2, 3, 2, 1, 3, 3])); 
