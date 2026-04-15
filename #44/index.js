// problem 1 

// function countDown(n) {
//     if (n < 0) return; 
//     console.log(n);
//     countDown(n - 1); 
// }

// problem 2 

// function countUp(n) {
//     if (n < 1) return; 
//     console.log(n);
//     countUp(n - 1);
// }


// console.log(countUp(10));

// problem 3 

// function countUp(n) {
//     if (n > 5) return 0; 
//     console.log(n);
//     return n + countUp(n + 1);
// }


// console.log(countUp(1));

// problem 4 

// function countUp(n) {
//     if (n < 1) return 1; 
//     console.log(n);
//     return n * countUp(n - 1);
// }


// console.log(countUp(5));

// problem 5 

// function sumArray(arr, i = 0) {
//     if(i === arr.length) return 0;
//     console.log(arr);
//     return arr[i] + sumArray(arr, i + 1);
// }
// console.log(sumArray([1,2,3,4,5]))