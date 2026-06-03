// #1 

// const arr = [1, 3, 2, 6, 4, 8, 5];
// const k = 3;

// let current = 0;

// for (let i = 0; i < k; i++) {
//   current += arr[i]; 
// }

// let max = current;

// for (let i = k; i < arr.length; i++) { 
//   current = current - arr[i - k] + arr[i]; 
//   if (current > max) {
//     max = current;
//   }
// }

// console.log(max);

// #2 

// const arr = [3, 1, 7, 2, 5, 4, 8, 6];

// let current = 0;
// let k = 4;

// for(let i = 0; i < k; i++) {
//     current += arr[i];
// }

// let min = current;

// for(let i = k; i < arr.length; i++) {
//     current = current - arr[i - k] + arr[i]
//     if(current < min) {
//         min = current;
//     }
// }

// console.log(min);

// #3

// const arr = [1, 2, 3, 1, 1, 2, 1];

// let left = 0;
// let current = 0;
// let maxLength = 0;

// for(let i = 0; i < arr.length; i++) {
//     current += arr[i];

//     while(current > 7) {
//         current -= arr[left]
//         left++
//     }
//     maxLength = Math.max(maxLength, i - left + 1);
// }

// console.log(maxLength);

// #4


// const arr = [2, 1, 5, 2, 3, 2];

// let left = 0;
// let current = 0;
// let minLength = Infinity;

// for(let i = 0; i < arr.length; i++) {
//     current += arr[i];

//     while(current >= 8) {
//     minLength = Math.min(minLength, i - left + 1); 
//     current -= arr[left];
//     left++;
// }
    

// }

// console.log(minLength);

// #5

const str = "aabacbebebe";

let left = 0;
let current = 0;
let unique = [];

for(let i = 0; i < arr.length; i++) {
    current += arr[i];

    while(current >= 8) {
        if(arr[i])
    current -= arr[left];
    left++;
}
    

}

console.log(minLength);
