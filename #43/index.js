// problem 1

// let arr = [];

// function countDown(n) {
//     if(n < 1) {
//         return n;
//     }
//     arr.push(n);
//     countDown(n - 1);
// }



// countDown(5)
// console.log(arr);

// problem 2 

// function sumDigits(n) {
//     if (n === 0) return 0; 
//     return (n % 10) + sumDigits(Math.floor(n / 10)); 
// }

// console.log(sumDigits(123)); 

// problem 3 

// function countOccurrences(arr, val, i = 0) {
//     if (i === arr.length) return 0;
//     let count = arr[i] === val ? 1 : 0;
//     return count + countOccurrences(arr, val, i + 1);
// }
// console.log(countOccurrences([1, 2, 3, 2, 2, 4], 2));

// problem 4 

// function isPalindrome(str) {
//     if (str.length <= 1) return true;
//     if (str[0] !== str[str.length - 1]) return false;
    

//     let nextStr = "";
//     for (let i = 1; i < str.length - 1; i++) {
//         nextStr += str[i];
//     }
//     return isPalindrome(nextStr);
// }
// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("hello"));

// problem 5 

// function flatten(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             let innerFlat = flatten(arr[i]);

//             for (let j = 0; j < innerFlat.length; j++) {
//                 result[result.length] = innerFlat[j];
//             }
//         } else {
//             result[result.length] = arr[i];
//         }
//     }
//     return result;
// }
// console.log(flatten([1, [2, 3], [4, [5]]]));