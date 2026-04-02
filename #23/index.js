// let arr = [29, 10, 14, 37, 13]

// for(let i = 0; i< arr.length; i ++) {
//     for(let j = 0; j < arr.length - i - 1; j++) {
//         if(arr[i] > arr[i + 1]) {
//             let temp = arr[j];       
//             arr[j] = arr[j + 1];     
//             arr[j + 1] = temp;  
//         }
//     }
// }

// console.log(arr);


let arr = [1, 2, 3, 2, 1]
let one = arr[0]
let isPal = true

for(let i = 0; i < arr.length / 2; i++) {
    if(arr[i] !== arr[arr[i].length - 1 - i]) {
        isPal = false
    }
}

console.log(isPal);
