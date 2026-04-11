// problem 1 

// let arr = [3, 6, 9, 12, 15, 18];
// let target = 15;
// let left = 0; 
// let right = arr.length - 1;
// let output = false;

// while (left <= right) {
//     let value = Math.floor((left + right) / 2);
//     if(arr[value] === target) {
//         output = true;
//         break;
//     }else if (arr[value] > target) {
//         right = value - 1;
//     }else {
//         left = value + 1;
//     }
// }

// console.log(output);

// problem 2 

// let arr = [1, 5, 9, 13, 17];
// let target = 6;
// let left = 0; 
// let right = arr.length - 1;
// let result = -1;

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

// let arr = [2, 4, 4, 4, 6, 8];
// let target = 4;
// let left = 0; 
// let right = arr.length - 1;
// let output = -1;

// while (left <= right) {
//     let value = Math.floor((left + right) / 2);
//     if(arr[value] === target) {
//         output = value;
//         right = value - 1;
//     }else if(arr[value] > target) {
//         right = value - 1;
//     }else {
//         left = value + 1;
//     }
// }

// console.log(output);

// problem 4 

// let arr = [2, 4, 4, 4, 6, 8];
// let target = 4;
// let left = 0; 
// let right = arr.length - 1;
// let output = -1;

// while (left <= right) {
//     let value = Math.floor((left + right) / 2);
//     if(arr[value] === target) {
//         output = value;
//         left = value + 1;
//     }else if(arr[value] > target) {
//         right = value - 1;
//     }else {
//         left = value + 1;
//     }
// }

// console.log(output);

// problem 5 

// let arr = [2, 4, 4, 4, 6, 8];
// let target = 4;
// let left = 0; 
// let right = arr.length - 1;
// let output = -1;

// while (left <= right) {
//     let value = Math.floor((left + right) / 2);
//     if(arr[value] === target) {
//         output = value;
//         left = value + 1;
//     }else if(arr[value] > target) {
//         right = value - 1;
//     }else {
//         left = value + 1;
//     }
// }

// console.log(output);

// problem 6 

// let nums = [1, 3, 5, 7, 9];
//   let target = 6;
//   let low = 0;
//   let high = nums.length - 1;
//   let ans = nums[nums.length - 1];
//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);
//     if (nums[mid] >= target) {
//       ans = nums[mid];
//       high = mid - 1;
//     } else {
//       low = mid + 1;
//     }
//   }
//   console.log(ans);

// problem 7 

// let nums = [8, 2, 6, 4, 10];
//   let target = 6;
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length - i - 1; j++) {
//       if (nums[j] > nums[j + 1]) {
//         let temp = nums[j];
//         nums[j] = nums[j + 1];
//         nums[j + 1] = temp;
//       }
//     }
//   }
//   let low = 0;
//   let high = nums.length - 1;
//   let found = false;
//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);
//     if (nums[mid] === target) {
//       found = true;
//       break;
//     }
//     if (nums[mid] < target) low = mid + 1;
//     else high = mid - 1;
//   }
//   console.log(found);

// problem 8 

let nums = [1, 3, 5, 7, 9, 6, 2];
  let low = 0;
  let high = nums.length - 1;
  let peak = -1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let left = mid > 0 ? nums[mid - 1] : -Infinity;
    let right = mid < nums.length - 1 ? nums[mid + 1] : -Infinity;
    if (nums[mid] >= left && nums[mid] >= right) {
      peak = nums[mid];
      break;
    } else if (left > nums[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  console.log(peak);