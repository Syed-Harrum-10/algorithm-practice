// problem 1 

// function duplicates(arr) {
//     let map = [];
//     for(let i = 0; i < arr.length; i++) {
//         for(let j = i + 1; j < arr.length; j++) {
//             if(arr[i] === arr[j]) {

//                 map.push([i, j]);
//             }
//         }
//     }

//     return map;
// }

// console.log(duplicates([1, 2, 3, 2, 4, 3])); 

// problem 2 

// function twoSum(arr, target) {
//     let map = [];
//     for(let i = 0; i < arr.length; i++) {
//         for(let j = 0; j < arr.length; j++) {
//             if(arr[i] + arr[j] === target) {
//                 return map.push([i, j])
//             }
//         }
//     }
// }
// console.log(twoSum([2, 7, 11, 15], 9))

// problem 3 

// function mostFrequent(arr) {
//     let counts = {};
//     let maxCount = 0;
//     let mostFreq;

//     for (let i = 0; i < arr.length; i++) {
//         let currentNum = arr[i];
        

//         if (counts[currentNum]) {
//             counts[currentNum]++;
//         } else {
//             counts[currentNum] = 1;
//         }


//         if (counts[currentNum] > maxCount) {
//             maxCount = counts[currentNum];
//             mostFreq = currentNum;
//         }
//     }
    
//     return mostFreq;
// }

// console.log(mostFrequent([1, 2, 3, 2, 1, 3, 3])); 


// problem 4 

// function wordCount(str) {
//     let map = {};

//     let words = str.split(" ");

//     for (let i = 0; i < words.length; i++) {
//         let word = words[i];
        

//         if (map[word]) {
//             map[word]++;
//         } else {
//             map[word] = 1;
//         }
//     }
    
//     return map;
// }

// console.log(wordCount("the cat sat on the mat"));

