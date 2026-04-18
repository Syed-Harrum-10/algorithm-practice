// problem 1 

// function reverseArray(arr, i = arr.length - 1, result = []) {
//     if(i < 0) return result;
//     result.push(result[i]);
//     return reverseArray(arr, i - 1, result)
// }
// console.log(reverseArray([1, 2, 3, 4, 5]))

// problem 2 

// function sumDigits(n) {
//     if (n === 0) return 0;

//     return (n % 10) + sumDigits(Math.floor(n / 10));
// }

// console.log(sumDigits(123)); 
// console.log(sumDigits(405));



// problem 9 

// function isPalindrome(str, first = 0, last = str.length - 1) {
//     if (first >= last) return true;
//     if(str[first]!== str[last]) return false;
//     return isPalindrome(str, first + 1, last - 1)
// }
// console.log(isPalindrome("racecar"))
// console.log(isPalindrome("hello")) 