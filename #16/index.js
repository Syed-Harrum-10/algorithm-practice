const arr = [1,2,3,4,5,6,78,9,0]

// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

const prompting = prompt("what value you are looking for")

if(prompting > arr.length) {
    console.log("element not found");
}else {
    console.log(arr[prompting]);
}
