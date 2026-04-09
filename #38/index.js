// problem 1

// let arr = [2, 5, 8, 12, 16, 23];
// let target = 12;
// let left = 0;
// let right = arr.length - 1;
// let result = false;

// while (left <= right) {
//     let val = Math.floor((left + right) / 2);
//     if(arr[val] === target) {
//         result = true;
//         break;
//     }else if (arr[val] > target) {
//         right = val - 1;
//     }else {
//         left = val + 1;
//     }
// }

// console.log(result);

// problem 2 

// let arr = [1, 4, 7, 10, 13];
// let target = 13;
// let left = 0; 
// let right = arr.length - 1;
// let result = 0;

// while (left <= right) {
//     let value = Math.floor((left + right) / 2);
//     if(arr[value] === target) {
//         result = value;
//         break;
//     }else if (arr[value] > target) {
//         right = value - 1;
//     }else {
//         left = value + 1;
//     }
// }

// console.log(result);

// problem 3 

// let arr = [3, 6, 9, 12, 15];
// let target = 7;
// let left = 0; 
// let right = arr.length - 1;
// let result = -1;

// while (left <= right) {
//     let value = Math.floor((left + right) / 2);
//     if(arr[value] === target) {
//         result = value;
//         break;
//     }else if(arr[value] > target) {
//         right = value - 1;
//     }else {
//         left = value + 1;
//     }
// }
// console.log(result);

// problem 4 

// let arr = [1, 2, 2, 2, 3, 4];
// let target = 2;
// let left = 0;
// let right = arr.length - 1;
// let output = -1;

// while (left <= right) {
//     let mid = Math.floor((left + right) / 2); 
    
//     if (arr[mid] === target) {
//         output = mid;       
//         right = mid - 1;    
//     } else if (arr[mid] > target) {
//         right = mid - 1;
//     } else {
//         left = mid + 1;
//     }
// }

// console.log(output); 


// problem 6

// let arr = [1, 2, 2, 2, 3, 4];
// let target = 2;
// let left = 0;
// let right = arr.length - 1;
// let result = -1;

// while (left <= right) {
//     let val = Math.floor((left + right) / 2);
//     if(arr[val] === target) {
//         result = val;
//         left = val + 1;
//     }else if (arr[val] > target) {
//         right = val - 1;
//     }else {
//         left = val + 1;
//     }
// }


// console.log(result);

