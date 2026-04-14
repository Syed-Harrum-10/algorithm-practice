// problem 1 

// function countDown (n) {
//     if(n <= 0) {
//         return;
//     }
//     console.log(n);
    
//     countDown(n - 1);
// }

// countDown(5)


// problem 2 

// function countDown (n) {
//     if(n <= 0) {
//         return ;
//     }
//     console.log("hello");
    
//     countDown(n - 1);
// }

// countDown(4)

// problem 3 

// function addUp(n) {
//     if (n <= 0) {
//         return 0;
//     }

//     return n + addUp(n - 1); 
// }

// console.log(addUp(4));

// problem 4 

// function factorial(n) {
//     if (n <= 1) {
//         return 1;
//     }

//     return n * factorial(n - 1);
// };

// console.log(factorial(4));


// problem 5 

// function countUp(n) {
//     if(n < 1) {
//         return;
//     }
//     console.log(n);
    
//     countUp(n - 1);
// }
// countUp(5)

// problem 6 

// function sumArray(arr, i = 0) {
//     if(arr[i] === undefined) {
//         return 0;
//     }
//     return arr[i] + sumArray(arr, i + 1);
    
// }
// const numbers = [1, 2, 3, 4];
// console.log(sumArray(numbers));

// problem 7 

// function reverse(str, i = str.length - 1) {

//   if (i < 0) {
//     return "";
//   }
  

//   return str[i] + reverse(str, i - 1);
// }

// console.log(reverse("hello")); 


