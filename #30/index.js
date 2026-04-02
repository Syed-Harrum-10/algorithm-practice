// problem 1 

// let arr = [1, 2, 3, 4, 5];
// let k = 3;
// let current = 0;


// for(let i = 0; i < k; i++) {
//     current += arr[i];
// }

// let newArr = [];
// newArr[0] = current; 
// let count = 1;


// for(let i = k; i < arr.length; i++) {

//     current = current + arr[i] - arr[i - k];
//     newArr[count] = current;
//     count++;
// }

// console.log(newArr); 

// problem 2 

// let arr = [2, 1, 5, 1, 3, 2]
// let k = 3
// let current = 0

// for(let i = 0; i < k; i++) {
//     current += arr[i]
// }

// let max = current

// for(let i = k; i < arr.length; i++) {
//     current = current + arr[i] - arr[i - k]
//     if(current > max) {
//         max = current
//     }
// }

// console.log(max);

// problem 3 

// let arr = [2, 3, 4, 1, 5]
// let k = 2
// let current = 0

// for(let i = 0; i < k; i++) {
//     current += arr[i]
// }

// let min = current

// for(let i = 0; i < arr.length; i++) {
//     current = current + arr[i] - arr[i - k]
//     if(current < min) {
//         min = current
//     }
// }

// console.log(min);

// problem 4 

// let arr = [1, 2, 3, 4, 5];
// let k = 2;
// let current = 0;


// for(let i = 0; i < k; i++) {
//     current += arr[i];
// }

// let average = [];
// let count = 0;


// average[count] = current / k;
// count++;


// for(let i = k; i < arr.length; i++) {

//     current = current + arr[i] - arr[i - k];
    
//     average[count] = current / k;
//     count++;
// }

// console.log(average); 

// problem 5 

let arr = [1, 2, 3, 2, 1];
let k = 2;
let target = 3;
let current = 0;


for(let i = 0; i < k; i++) {
    current += arr[i];
}

let output = [];
let count = 0;


if(current === target) {
    output[count] = current;
    count++;
}


for(let i = k; i < arr.length; i++) {
    current = current + arr[i] - arr[i - k];
    
    if(current === target) {
        output[count] = current;
        count++;
    }
}

console.log(output); 
