// // problem 1 

// // let arr = [1, 5, 9, 13, 17, 21];
// // let target = 5;
// // let left = 0;
// // let right = arr.length - 1;
// // let result = false;

// // while (left <= right) {
// //     let value = Math.floor((left + right) / 2);
// //     if(arr[value] === target) {
// //         result = true;
// //         break;
// //     }else if(arr[value] > target) {
// //         right = value - 1;
// //     }else {
// //         left = value + 1;
// //     }
// // }

// // console.log(result);

// // problem 2 

// // let arr = [2, 6, 10, 14, 18];
// // let target = 11;
// // let left = 0;
// // let right = arr.length - 1;
// // let result = -1;

// // while (left <= right) {
// //     let value = Math.floor((left + right) / 2);
// //     if(arr[value] === target) {
// //         result = value;
// //         break;
// //     }else if(arr[value] > target) {
// //         right = value - 1;
// //     }else {
// //         left = value + 1;
// //     }
// // }


// // console.log(result);

// // problem 3 

// // let arr = [1, 3, 3, 3, 5, 7];
// // let target = 3;
// // let left = 0; 
// // let right = arr.length - 1;
// // let output = -1;

// // while (left <= right) {
// //     let mid = Math.floor((left + right) / 2);
    
// //     if (arr[mid] === target) {
// //         output = mid;     
// //         right = mid - 1;  
// //     } else if (arr[mid] > target) {
// //         right = mid - 1;
// //     } else {
// //         left = mid + 1;
// //     }
// // }

// // console.log(output);

// // problem 4

// // let arr = [1, 3, 3, 3, 5, 7];
// // let target = 3;
// // let left = 0; 
// // let right = arr.length - 1;
// // let output = -1;

// // while (left <= right) {
// //     let mid = Math.floor((left + right) / 2);
    
// //     if (arr[mid] === target) {
// //         output = mid;     
// //         left = mid + 1;  
// //     } else if (arr[mid] > target) {
// //         right = mid - 1;
// //     } else {
// //         left = mid + 1;
// //     }
// // }

// // console.log(output);

// // problem 5 


// // let arr = [1, 3, 3, 3, 5, 7];
// // let target = 3;
// // let left = 0; 
// // let right = arr.length - 1;
// // let output = -1;

// // while (left <= right) {
// //     let mid = Math.floor((left + right) / 2);
    
// //     if (arr[mid] === target) {
// //         output = mid;   
// //         break;  
// //     } else if (arr[mid] > target) {
// //         right = mid - 1;
// //     } else {
// //         left = mid + 1;
// //     }
// // }

// // console.log(output);

// // problem 7 

// // let arr = [1, 3, 5, 7, 9];
// // let target = 6;
// // let left = 0;
// // let right = arr.length - 1;
// // let result = -1;

// // while (left <= right) {
// //     let mid = Math.floor((left + right) / 2);
    
// //     if (arr[mid] > target) {

// //         result = arr[mid]; 
// //         right = mid - 1;
// //     } else {
// //         left = mid + 1;
// //     }
// // }

// let arr = [7, 2, 9, 4, 1];
// let target = 4;

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//         if (arr[j] > arr[j + 1]) {
//             let temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//         }
//     }
// }

// let left = 0;
// let right = arr.length - 1;
// let found = false;

// while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (arr[mid] === target) {
//         found = true;
//         break;
//     } else if (arr[mid] < target) {
//         left = mid + 1;
//     } else {
//         right = mid - 1;
//     }
// }

// console.log(found);
