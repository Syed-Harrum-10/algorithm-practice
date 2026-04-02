// const arr1 = [4,7,9,10,12,90]
// const arr2 = [7,8,3,5,7,9]
// const arr3 = []
// let i = 0
// let j = 0
// let e = 0

// while (i<arr1.length && j < arr2.length) {
//     if(arr1[i] < arr2[j]) {
//         arr3[e] = arr1[i]
//         i++
//     }else {
//         arr3[e] = arr2[j]
//         j++
//     }
//     e++
// }
// console.log(arr3);


// problem 1 

// const arr = [1, 2, 3, 4, 5, 6]
// let sum = 0

// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 === 0) {
//         sum += arr[i]
//     }
// }

// console.log(sum);


// problem 2

// const arr = [8, 3, 6, 1, 9]
// let min = Infinity
// let secondMin = Infinity

// for(let i = 0; i < arr.length; i ++) {
//     if(arr[i] < min) {
//         secondMin = min
//         min = arr[i]
//     }else if (arr[i] < secondMin && arr[i] !== min) {
//         secondMin = arr[i]
//     }
// }
// console.log(secondMin);

// problem 3 

// let negative = [1, -2, 3, -4, -5, 6]
// let store = []
// let count = 0

// for (let i = 0; i < negative.length; i++) {
//     if(negative[i] < 0) {
//         store[count] = negative[i]
//         count++
//     }
// }

// console.log(store.length);


// problem 4 

// const arr = [1, 2, 3, 4, 5]
// let square = []

// for(let i = 0; i < arr.length; i++) {
//     square[i] = arr[i] * arr[i]
// }
// console.log(square);

// problem 5 

// let arr = [10, 20, 30, 40, 50]
// let sum  = 0
// let lenght = arr.length

// for(let i = 0; i < arr.length; i++) {
//     sum += arr[i]
// }
// let avergae = sum / lenght
// console.log(avergae);


// problem 7

// let arr = [1, -2, 3, -4, 5]
// let postiveArr = []
// let count = 0

// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 !== 0) {
//         postiveArr[count] = arr[i]
//         count++
//     }
// }

// console.log(postiveArr);


// problem 8

// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3];

// for (let i = 0; i < arr1.length; i++) {

//     for (let j = 0; j < arr2.length; j++) {
//         if (arr1[i] === arr2[j]) {
//             console.log(true);
//         }else {
//             console.log(false);
//         }
//     }
// }

// problem 9

// let arr = [1, 5, 3, 8, 2]
// let num = 4

// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] > num) {
//         console.log(arr[i]);
//     }
// }


// problem 10

// let arr = [1, 2, 3, 4, 5, 6];
// let newArr = [];
// let k = 0; 


// for (let i = 2; i >= 0; i--) {
//     newArr[k] = arr[i];
//     k++;
// }


// for (let i = 3; i < arr.length; i++) {
//     newArr[k] = arr[i];
//     k++;
// }

// console.log(newArr);