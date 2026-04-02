// problem 1 

// let arr = [1, 3, 5, 7, 9]
// let left = 0
// let right = arr.length - 1
// let target = 10

// while (left < right) {
//     let sum = arr[left] + arr[right]
//     if(sum === target) {
//         console.log(left, right);
//         break;
//     }else if (sum < target) {
//         left ++;
//     }else {
//         right--
//     }
// } 

// problem 2 

// let arr = [1, 2, 3, 2, 1]
// let left = 0
// let right = arr.length - 1
// let isPalindrome = true

// while (left < right) {
//     if(arr[left] !== arr[right]) {
//         isPalindrome = false;
//         break;
//     }
//     left ++
//     right --
// }
// console.log(isPalindrome);

// problem 3 

// let arr = [1, 2, 3, 4, 5]
// let left = 0
// let right = arr.length - 1
// let reverseArr = []

// while (left < right) {
//     let temp = arr[left]
//     arr[left] = arr[right]
//     arr[right] = temp
//     left ++
//     right --
// }

// console.log(arr);

// problem 4 

// let str = "hello"
// let left = 0
// let right = str.length - 1
// let isPalindrome = true

// while (left < right) {
//     if(str[left] !== str[right]) {
//         isPalindrome = false
//     }
//     left ++
//     right --
// }

// console.log(isPalindrome);

// problem 5 

// let arr = [1, -2, 3, -4, 5]
// let left = 0
// let right = arr.length - 1

// while (left <= right) {
//     if(arr[left] < 0) {
//         left ++
//     }else if(arr[right] > 0) {
//         right --
//     }else {
//         let temp = arr[left]
//         arr[left] = arr[right]
//         arr[right] = temp
//         left ++
//     right --
//     }
    
// }
// console.log(arr);


