// problem 1

// function countDown(n, arr = [], index = 0) {

//     if (n <= 0) {
//         return arr;
//     }

//     arr[index] = n;

//     return countDown(n - 1, arr, index + 1);
// }

// console.log(countDown(5)); 


// problem 2 

// function binarySearch(arr, target, low, high) {
//     if (low > high) {
//         return -1;
//     }
//     let mid = Math.floor((low + high) / 2);
//     if(arr[mid] === target) {
//         return mid;
//     }
//     if(arr[mid] > target) {
//         return binarySearch(arr, target, low, mid - 1);
//     }
//     return binarySearch(arr, target, mid + 1, high);
// }
// console.log(binarySearch([1, 3, 5, 7, 9], 7, 0, 4))

// problem 3 

// function reverseArray(arr, i = arr.length - 1) {
//     if(i < 0) return;
//     console.log(arr[i]);
//     return reverseArray(arr, i - 1);
// }
// console.log(reverseArray([1, 2, 3, 4, 5]))

// problem 4 


// function findMax(arr, i = 0, max = arr[0]) {
//     if (i === arr.length) {
//         return max;
//     }

//     if (arr[i] > max) {
//         max = arr[i];
//     }

//     return findMax(arr, i + 1, max);
// }

// console.log(findMax([3, 7, 2, 9, 1])); 

// problem 5 

// function capitalize(arr, i = 0, letter = arr[0]) {
//     if(i !== letter) {
//         return letter
//     }
//     console.log(letter);
//     return capitalize(letter.capitalize())
    
// }
// console.log(capitalize(["hello", "world"]))