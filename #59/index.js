// problem 1 

// function getFirst(arr) {
//     return arr[0];
// }

// O(1)

// problem 2 

// function printAll(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }

// O(n)

// problem 3 

// function printAllPairs(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         for(let j = 0; j < arr.length; j++) {
//             console.log(arr[i], arr[j]);
//         }
//     }
// }

// O(n²)


// problem 4 

// function binarySearch(arr, target, low, high) {
//     if(low > high) return -1;
//     let mid = Math.floor((low + high) / 2);
//     if(arr[mid] === target) return mid;
//     if(arr[mid] > target) return binarySearch(arr, target, low, mid - 1);
//     return binarySearch(arr, target, mid + 1, high);
// }

// O(log n )

// problem 5 

// function doStuff(arr) {
//     console.log(arr[0]);        
//     console.log(arr[0]); 

//     for(let i = 0; i < arr.length; i++) {  
//         console.log(arr[i]);
//     }

//     for(let i = 0; i < arr.length; i++) {  
//         console.log(arr[i]);
//     }
// }

// O(1)
// O(1)
// O(n)
// O(n)