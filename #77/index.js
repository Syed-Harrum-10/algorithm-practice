// DP 

function firstDP (n) {
    let newArray = new Array(n).fill(0);
    newArray[0] = 0;
    newArray[1] = 1;

    for(let i = 2; i <= n; i++) {
        newArray[i] = newArray[i - 1] + newArray[i - 2];
    }
    return newArray[n];
}