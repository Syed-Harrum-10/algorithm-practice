// problem 1 

// let arr = [15, 3, 9, 1, 7]
// let max = arr[0]

// for(let i = 0; i < arr.length; i++) {
//     for(let j = 0; j < arr.length - 1; j++) {
//          if(arr[j] > arr[j + 1]) {
//         let temp = arr[j]
//         arr[j] = arr[j + 1]
//         arr[j + 1] = temp
//     }
//     }
// }

// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] > max) {
//         max = arr[i]
//     }
// }

// console.log(max);


// problem 2 

// let arr = [4, 2, 4, 1, 3, 2]
// let antiDup = []
// let count = 0 

// for(let i = 0; i < arr.length; i++) {
//     for(let j = 0; j < arr.length - 1; j ++) {
//         if(arr[j] > arr[j + 1]) {
//             let temp = arr[j]
//             arr[j] = arr[j + 1]
//             arr[j + 1] = temp
//         }
//     }
// }

// for(let i = 0; i < arr.length; i ++) {
//         if(arr[i] !== arr[i - 1]) {
//                 antiDup[count] = arr[i]
//                 count++
//         }
// }

// console.log(antiDup);

// problem 3 

// let arr = [2, 4, 6, 8, 10]
// let target = 14

// for(let i = 0; i < arr.length; i ++) {
//     for(let j = i + 1; j < arr.length; j++) {
//         if(arr[i] + arr[j] === target) {
//             console.log(`Match found: ${arr[i]} + ${arr[j]} = ${target}`);
//         }
//     }
// }

// problem 4 

// let str = "racecar"
// let firstIndex = str[0] 
// let isPalindrome = true

// for(let i = str.length - 1; i >= 0; i--) {
//     if(firstIndex === str[i]) {
//         isPalindrome = false
//     }
// }

// console.log(isPalindrome);


// problem 5 

// let arr = [0, 1, 0, 3, 12];
// let nonZeroIdx = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//         arr[nonZeroIdx] = arr[i];
//         nonZeroIdx++;
//     }
// }

// for (let i = nonZeroIdx; i < arr.length; i++) {
//     arr[i] = 0;
// }

// console.log(arr);

// problem 6

// let arr = [1, 2, 3, 4, 6]
// let target = 12

// for(let i = 0; i < arr.length; i ++) {
//     for(let j = 0; j < arr.length; j++) {
//         if(arr[i] + arr[j] === target) {
//             console.log(`${[arr[i], arr[j]]}`);
//         }
//     }
// }

// problem 7 

// let arr = [4, 5, 4, 6, 7, 5]
// let anti = []
// let count = 0

// for(let i = 0; i < arr.length; i ++) {
//     let isRepeated = false
//     for(let j = 0; j < arr.length; j ++) {
//         if(i !== j  && arr[i] === arr[j]) {
//             isRepeated = true
//             break;
//         }
//     }
//     if(!isRepeated) {
//         anti[count] = arr[i]
//         count++
//     }
// }
// console.log(anti[0]);


// problem 8 

// let arr = [1, 2, 3, 4, 6]
// let target = 10

// if (target % 2 !== 0) {
//     console.log("target is not even");
// } else {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === target) {
//                 console.log(`Pair found: [${arr[i]}, ${arr[j]}]`);
//             }
//         }
//     }
// }

// problem 9 

// let arr = [1, 2, 3, 4, 5]
// let target = 10

// for(let i = 0 ; i < arr.length; i ++) {
//         if(arr[i] > arr[i  + 1]) {
//             let temp = arr[i]
//             arr[i] = arr[i + 1]
//             arr[i + 1] = temp
//         }
// }

// for(let i = 0; i < arr.length; i ++) {
//     for(let j = 0; j < arr.length; j++) {
//         if(arr[i] + arr[j] === target) {
//             console.log(arr[i], arr[j]);
//         }
//     }
// }




