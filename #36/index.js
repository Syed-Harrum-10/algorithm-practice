// problem 1 

// let arr = [1, 3, 5, 7, 9, 11];
// let left = 0; 
// let right = arr.length - 1;
// let target = 6;
// let isExists = false;

// while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if(arr[mid] === target) {
//         return arr[mid];
//         break;
//     }else if(arr[mid] < target) {
//         left = mid + 1;
//     }else {
//         right = mid - 1;
//     }
// }

// console.log(isExists);

// problem 2 

// let arr = [1, 3, 5, 7, 9, 11];
// let left = 0; 
// let right = arr.length - 1;
// let target = 6;
// let result = -1


// while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if(arr[mid] === target) {
//         result = mid;
//         break;
//     }else if(arr[mid] < target) {
//         left = mid + 1;
//     }else {
//         right = mid - 1;
//     }
// }

// console.log(result);

// problem 3

let arr = [1, 2, 2, 2, 3, 4];
let target = 2;
let left = 0;
let right = arr.length - 1;
let result = -1;

while (left <= right) {
    let val = Math.floor((left + right) / 2);
    if(arr[val] === target) {
        result = val;
        break;
    }else if (arr[val] < target) {
        left = val + 1;
    }else {
        right = val - 1;
    }
}


console.log(result);
