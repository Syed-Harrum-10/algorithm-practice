let firstArr = [-10,20,-30,40,50,60,70,-80,-90]


let i = 0, j = 0;

while (i < firstArr.length) {
    if(firstArr[i] === -0) {
        let temp = firstArr[i]
        firstArr[i] = firstArr[j]
        firstArr[j] = temp
        j++
    }
    i++
}


console.log(firstArr)