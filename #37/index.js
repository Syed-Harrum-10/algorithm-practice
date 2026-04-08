// problem 1 

// let arr = [1, 3, 5, 7, 9];
// let target = 5;

// let left = 0;
// let right = arr.length - 1;
// let isAvaible = false;

// while (left <= right) {
//     let val = Math.floor((left + right) / 2);
//     if(arr[val] === target) {
//         isAvaible = true;
//         break;
//     }else if (arr[right] > target) {
//         right = val - 1;
//     }else {
//         left = val + 1;
//     }
// }

// console.log(isAvaible);

// problem 2 

// let arr = [2, 4, 6, 8, 10];
// let target = 8;
// let left = 0;
// let right = arr.length - 1;
// let foundIndex = -1;

// while (left <= right) {
//     let value = Math.floor((left + right) / 2);
//     if(arr[value] === target) {
//         foundIndex = value;
//         break;
//     }else if(arr[value] > target) {
//         right = value - 1;
//     }else {
//         left = value + 1;
//     }
// }

// console.log(foundIndex);

// problem 3 

// let arr = [1, 2, 3, 4, 5];
// let target = 6;
// let left = 0; 
// let right = arr.length - 1;
// let result = false;

// while (left <= right) {
//     let value = Math.floor((left + right) / 2);
//     if(value === target) {
//         result = true;
//         break;
//     }else if (value > target) {
//         right = value - 1;
//     }else {
//         left = value + 1;
//     }
// }

// console.log(result);

// problem 4 

// let arr = [10, 20, 30, 40, 50];
// let target = 25;
// let left = 0;
// let right = arr.length - 1;
// let foundINdex = -1;

// while (left <= right) {
//     let value = Math.floor((left + right) / 2);
//     if(value === target) {
//         foundINdex = value;
//         break;
//     }else if (arr[value] > target) {
//         right = value - 1;
//     }else {
//         left = value + 1;
//     }
// }

// console.log(foundINdex);


// problem 5 

// let arr = [1, 3, 5, 7, 9];
// let target = 1;
// let left = 0;
// let right = arr.length - 1;
// let foundINDEX = 0;

// while (left <= right) {
//     let val = Math.floor((left + right) / 2);
//     if(arr[val] === target) {
//         foundINDEX = val;
//         break;
//     }else if (val > target) {
//         right = val - 1;
//     }else {
//         left = val + 1;
//     }
// }

// console.log(foundINDEX);


// problem 6 

// let arr = [1, 3, 5, 7, 9];
// let target = 9;
// let left = 0;
// let right = arr.length - 1;
// let foundINdex = -1;

// while (left <= right) {
//     let val = Math.floor((left + right) / 2);
//     if(arr[val] === target) {
//         foundINdex = val;
//         break;
//     }else if(arr[val] > target) {
//         right = val - 1;
//     }else {
//         left = val + 1;
//     }
// }
// console.log(foundINdex);

// problem 7 

// let arr = [1, 2, 2, 2, 3, 4];
// let target = 2;

// function findBound(isFirst) {
//     let left = 0, right = arr.length - 1;
//     let result = -1;
//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);
//         if (arr[mid] === target) {
//             result = mid;
//             if (isFirst) right = mid - 1;
//             else left = mid + 1;
//         } else if (arr[mid] > target) {
//             right = mid - 1;
//         } else {
//             left = mid + 1;
//         }
//     }
//     return result;
// }

// let first = findBound(true);
// let last = findBound(false);
// let count = (first !== -1) ? (last - first + 1) : 0;

// console.log(count); 


// problem 8 

// let arr = [1, 2, 3, 4, 5];
// let left = 0;
// let right = arr.length - 1;

// let middleIndex = Math.floor((left + right) / 2);
// let middleValue = arr[middleIndex];

// console.log(middleIndex); 
// console.log(middleValue); 


// problem 9

// let arr = [1, 10, 3, 5, 7, 9];
// let isSorted = true;

// for (let i = 0; i < arr.length - 1; i++) {
//         if(arr[i] > arr[i + 1]) {
//             isSorted = false;
//             break;
//         }
    
// }

// let left = 0; 
// let right = arr.length - 1;
// let target = 7;
// let isAvaible = true;

// while (left < right) {
//     let sum = arr[left] + arr[right];
//     if(sum !== target) {
//         isAvaible = false;
//     }
//     left ++;
//     right --;
// }

// console.log(isSorted);


