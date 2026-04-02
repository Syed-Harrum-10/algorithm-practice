for (let i = 1; i <= 5; i++) {
     for (let j = 1; j <= 5 - i + 1; j++) {
        process.stdout.write("*")
    }
    for (let e = 1; e <= i; e++) {
        process.stdout.write("")
    }
    console.log()
}