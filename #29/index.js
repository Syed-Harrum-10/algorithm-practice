// problem 1 

// let arr = [1, 2, 3, 4, 5]
// let target = 7

// for(let i = 0; i < arr.length; i ++) {
//     for(let j = 0; j < arr.length; j++) {
//         if(arr[i] + arr[j] === target) {
//             console.log(arr[i], arr[j]);
//         }
//     }
// }

// problem 2 

// let arr = [1, 2, 3, 4, 5, 6]

// for(let i = 0; i < arr.length; i++) {
//     for(let j = 0; j < arr.length; j++) {
//         let sum = arr[i] + arr[j]
//         if(sum % 2 === 0) {
//             console.log(arr[i], arr[j]);
//         }
//     }
// }

// problem 3 

// let arr = [3, 1, 4, 1, 5]

// for(let i = 0; i < arr.length; i ++) {
//     for(let j = i + 1; j < arr.length; j++) {
//         if(arr[i] !== arr[j]) {
//             console.log(arr[i], arr[j]);
//         }
//     }
// }

// problem 4 

// let arr = [4, 5, 4, 6, 7, 5];

// for (let i = 0; i < arr.length; i++) {
//     let isRepeated = false;
    
//     for (let j = 0; j < arr.length; j++) {
//         if (i !== j && arr[i] === arr[j]) {
//             isRepeated = true;
//             break;
//         }
//     }
    
//     if (!isRepeated) {
//         console.log(arr[i]);
//     }
// }

// problem 5 

// let arr = [1, 3, 5, 7, 9]
// let left = 0
// let right = arr.length - 1
// let target = 10

// while (left < right) {
//     if(arr[left] + arr[right] === target)  {
//         console.log(arr[left], arr[right]);
        
//     }
//     left ++
//     right --
// }

// problem 6

// let arr = [1, 2, 3, 4, 5, 6]
// let left = 0
// let right = arr.length - 1
// let target = 7
// let result = []

// while (left < right) {
//     if(arr[left] + arr[right] === target) {
//         result = arr[left], arr[right]
//     }
//     left ++
//     right --
// }
// console.log(result);

// problem 7 not solve 

// problem 8 

// let arr = [5, 1, 4, 3, 2]
// let left = 0 
// let right = arr.length - 1

// for(let i = 0; i < arr.length; i++) {
//     for(let j = 0; j < arr.length - 1; j++) {
//         if(arr[j] > arr[j + 1 ]) {
//             let temp = arr[j]
//             arr[j] = arr[j + 1]
//             arr[j + 1] = temp
//         }
//     }
// }

// let target = 6

// for(let i = 0; i < arr.length; i++) {
//     for(let j = 0; j < arr.length; j++) {
//         if(arr[i] + arr[j] === target) {
//             console.log(arr[i], arr[j]);
//         }
//     }
// }

// console.log(arr);

// problem 9 

// let arr = [9, 3, 7, 1, 5]
// let target = 12

// for(let i = 0; i < arr.length; i ++) {
//     for(let j = 0; j < arr.length - 1; j++) {
//         if(arr[j] < arr[j + 1]) {
//             let temp = arr[j];
//             arr[j] = arr[j + 1]
//             arr[j + 1] = temp
//         }
//     }
// }

// let left = 0;
// let right = arr.length - 1
// while (left < right) {
//     let sum = arr[left] + arr[right];

//     if (sum === target) {
//         console.log(`true: ${arr[left]} + ${arr[right]}`);
//         left++;  
//         right--;
//     } else if (sum > target) {
//         left++;
//     } else {
//         right--;
//     }
// }

