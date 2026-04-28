// problem 1 

// let value = [];

// function pushFunc(val) {
//     value.push(val)
// }
// function popFunc () {
//     value.pop()
// }
// function peek() {
//     value = [value.length - 1];
// }

// pushFunc(10)
// pushFunc(20)
// popFunc()   
// peek()  

// console.log(value);


// problem 2 

// let validVal = "({[]})";

// let newVal = [];

// for(let i = 0; i < validVal.length; i ++) {
//     if(validVal[i] !== "({[]})") {
//         newVal.push(true)
//     }else {
//         newVal.pop()
//     }
// }

// problem 3 

// let reverse = "hello";
// let validVal = [];

// for(let i = reverse.length - 1; i >= 0; i--) {
//     return validVal.push(reverse[i]);
// }

// problem 4 

// let newValue = [];

// function enqueue (val) {
//     newValue.push(val)
//     return val
// }

// function denqueue (val) {
//     newValue.shift(val)
//     return val
// }

// const front = (queue) => {
//   return queue[0];
// };

// problem 5 

// function findFirstNonRepeating(str) {
//   let queue = [];
//   let charCount = {};
//   let result = "";

//   for (let char of str) {

//     charCount[char] = (charCount[char] || 0) + 1;
    

//     queue.push(char);


//     while (queue.length > 0 && charCount[queue[0]] > 1) {
//       queue.shift();
//     }


//     result += queue.length > 0 ? queue[0] : "#";
//   }

//   return result;
// }

// console.log(findFirstNonRepeating("aabccxb"));
