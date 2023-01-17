function oddOrEven(input) {
    let num = Number(input[0]);
    if (num % 2 == 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}

oddOrEven(["5"])

// To write a function that receives an integer as an argument and prints to the console whether it is even or odd. If even print "even", if odd print "odd".