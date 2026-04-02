// problem 1 

// const arr = [5, 3, 8, 1, 9, 2]
// let isSort = true

// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] > arr[i - 1]) {
//         isSort = false
//     }
// }
// console.log(isSort);

// problem 2 

// let arr = [1, 2, 3, 4, 5]
// let sum = []
// let target = 5
// let count = 0

// for(let i = 0; i < arr.length; i++) {
//     for(let j = 0; j < arr.length; j++) {
//         if(arr[i] + arr[j] === target) {
//             sum[count] = [arr[i], arr[j]]
//             count++
//         }
//     }
// }


// console.log(sum);

// problem 3

// let arr = [1, 2, 3, 2, 4, 2]
// let removeEl = 4
// let newArr = []
// let count = 0

// for(let i = 0; i < arr.length; i ++) {
//     if(arr[i] !== removeEl) {
//         newArr[count] = arr[i]
//         count++
//     }
// }
// console.log(newArr);

// problem 4 

// let arr = [1, 1, 2, 2, 2, 3, 1, 1]

// for(let i = 0; i < arr.length; i++) {
//     let count = 0;
//     for(let j = 0; j < arr.length; j ++) {
//         if(arr[i] > arr[j]) {
//             count++
//         }
//     }
//     console.log(`${arr[i]} - ${count}`);
// }

// problem 5 

// let arr = [1, 2, 3, 4, 5]
// let point1 = 0
// let point2 = arr.length -1
// let result = false
// let target = 9

// for(let i = 0; i < arr.length; i++) {
//     let sum = arr[point1] + arr[point2]
//     if(sum === target) {
//         console.log(`Found: ${arr[point1]} + ${arr[point2]} = ${target}`);
//         result = true
//     }
// }

let arr = [1, 2, 3, 2, 4, 3, 5]
let added = []
let count = 0

for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++) {
        if(arr[i] !== arr[j]) {
            added[count] =  arr[i]
            count++
        }
    }
}


console.log(added);


