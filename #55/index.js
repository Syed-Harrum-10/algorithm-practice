// problem 1

// let stack = [];

// function reverseArray(arr) {
//     let count = 0; 
//     for(let i = arr.length - 1; i >= 0; i--) {
//         stack.push(arr[i])
//     }
//     return stack
// }
// reverseArray([1,2,3,4,5])
// console.log(stack);


// problem 2 

// let queue = [];

// queue.push("doc1");
// queue.push("doc2");
// queue.push("doc3");

// for(let i = 0; i < queue.length; i++) {
//     console.log(queue[i]); 
// }

// problem 3 

// function isPalindrome(str) {

//     for (let i = 0; i < str.length / 2; i++) {

//         if (str[i] !== str[str.length - 1 - i]) {
//             return false; 
//         }
//     }
//     return true; 
// }

// console.log(isPalindrome("racecar")); 
// console.log(isPalindrome("hello"));   


// problem 4 

// function firstNonRepeating(str) {
//     for (let i = 0; i < str.length; i++) {
//         let isRepeating = false;

//         for (let j = 0; j < str.length; j++) {

//             if (str[i] === str[j] && i !== j) {
//                 isRepeating = true;
//                 break; 
//             }
//         }


//         if (!isRepeating) {
//             return str[i];
//         }
//     }
//     return null;
// }

// console.log(firstNonRepeating("aabbc")); 
// console.log(firstNonRepeating("stress")); 


// problem 5 

// let stack = [];

// function evaluate(expr) {
//     let tokens = expr.split(" ");

//     for (let i = 0; i < tokens.length; i++) {
//         let t = tokens[i];

//         if (!isNaN(t)) {

//             stack.push(Number(t));
//         } else {
//             let b = stack.pop();
//             let a = stack.pop();

//             if (t === "+") stack.push(a + b);
//             else if (t === "-") stack.push(a - b);
//             else if (t === "*") stack.push(a * b);
//             else if (t === "/") stack.push(a / b);
//         }
//     }
//     return stack.pop(); 
// }

// console.log(evaluate("3 4 +")); // 7
// console.log(evaluate("5 2 -")); // 3
