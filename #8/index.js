// const pro = Number(prompt("what is the number?"))


// for(let i = 1; i <= pro/2; i++) {
//     if(pro%i === 0 ) {
//         console.log(i)
//     }
// }

 const pro = Number(prompt("what is the number?"))
    
 let isPrime = true
 for (let i = 2; i <= pro/2; i++) {
    if(pro %i === 0) {
        isPrime = false
        break;
    }
    
 }

 console.log(isPrime)
